#!/usr/bin/env node

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const WORKSPACE_ROOT = path.resolve(__dirname, '..');

const LOCALES = ['en', 'de', 'ja'];

const FLAGS = new Set(process.argv.slice(2));
const STRICT = FLAGS.has('--strict');
const JSON_OUTPUT = FLAGS.has('--json');
const REPORT_FLAG = process.argv.find((arg) => arg === '--report' || arg.startsWith('--report='));
const REPORT_DIR_FLAG = process.argv.find((arg) => arg.startsWith('--report-dir='));
const SECTION = (() => {
  const sectionArg = process.argv.find((arg) => arg.startsWith('--section='));
  if (!sectionArg) return null;
  return sectionArg.split('=')[1] || null;
})();
const KEY_FILTER = (() => {
  const keyArg = process.argv.find((arg) => arg.startsWith('--key='));
  if (!keyArg) return null;
  return keyArg.split('=')[1] || null;
})();
const SCOPE = (() => {
  const scopeArg = process.argv.find((arg) => arg.startsWith('--scope='));
  if (!scopeArg) return 'all';
  return scopeArg.split('=')[1] || 'all';
})();

function getReportDir() {
  if (REPORT_DIR_FLAG) {
    return REPORT_DIR_FLAG.split('=')[1] || '';
  }
  if (REPORT_FLAG) {
    const value = REPORT_FLAG.includes('=') ? REPORT_FLAG.split('=')[1] : 'reports/i18n';
    return value || 'reports/i18n';
  }
  return null;
}

function ensureDir(dirPath) {
  if (!dirPath) return;
  fs.mkdirSync(dirPath, { recursive: true });
}

function writeReportFiles(reportDir, issues, reportData) {
  if (!reportDir) return;
  ensureDir(reportDir);
  const markdown = buildMarkdownReport(reportData);
  const mdPath = path.join(reportDir, 'i18n-report.md');
  const jsonPath = path.join(reportDir, 'i18n-report.json');
  const jsonReport = buildJsonReport(issues, reportData);
  fs.writeFileSync(mdPath, markdown, 'utf-8');
  fs.writeFileSync(jsonPath, JSON.stringify(jsonReport, null, 2), 'utf-8');
  console.log(`i18n check: report written to ${mdPath} and ${jsonPath}`);
}

function readLocaleFile(locale) {
  const localePath = path.join(WORKSPACE_ROOT, 'frontend', 'src', 'i18n', 'locales', `${locale}.ts`);
  const content = fs.readFileSync(localePath, 'utf-8');
  const sanitized = content
    .replace(/^\s*export\s+default\s+/m, '')
    .replace(/;\s*$/m, '');
  try {
    // eslint-disable-next-line no-new-func
    return new Function(`return (${sanitized});`)();
  } catch (error) {
    throw new Error(`Failed to parse locale file ${localePath}: ${error.message}`);
  }
}

function flattenKeys(obj, prefix = '') {
  const results = new Map();
  if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
    for (const [key, value] of Object.entries(obj)) {
      const nextPrefix = prefix ? `${prefix}.${key}` : key;
      const inner = flattenKeys(value, nextPrefix);
      for (const [innerKey, innerValue] of inner.entries()) {
        results.set(innerKey, innerValue);
      }
    }
  } else if (typeof obj === 'string') {
    results.set(prefix, obj);
  }
  return results;
}

function extractPlaceholders(value) {
  const matches = value.match(/\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g) || [];
  return Array.from(
    new Set(matches.map((match) => match.replace(/[\{\}\s]/g, '')))
  ).sort();
}

function diffKeys(baseKeys, compareKeys) {
  const baseSet = new Set(baseKeys);
  const compareSet = new Set(compareKeys);
  const missing = Array.from(baseSet).filter((key) => !compareSet.has(key));
  const extra = Array.from(compareSet).filter((key) => !baseSet.has(key));
  return { missing, extra };
}

function runFrontendChecks() {
  const localeData = {};
  const issues = [];

  for (const locale of LOCALES) {
    localeData[locale] = readLocaleFile(locale);
  }

  const base = flattenKeys(localeData.en);
  const baseKeys = Array.from(base.keys());

  for (const locale of LOCALES.filter((l) => l !== 'en')) {
    const compare = flattenKeys(localeData[locale]);
    const compareKeys = Array.from(compare.keys());
    const { missing, extra } = diffKeys(baseKeys, compareKeys);

    if (missing.length) {
      issues.push({ scope: 'frontend', locale, type: 'missing_keys', items: missing });
    }
    if (extra.length) {
      issues.push({ scope: 'frontend', locale, type: 'extra_keys', items: extra });
    }

    for (const key of baseKeys) {
      const baseValue = base.get(key);
      const compareValue = compare.get(key);
      if (typeof baseValue !== 'string' || typeof compareValue !== 'string') continue;
      const basePlaceholders = extractPlaceholders(baseValue).join(',');
      const comparePlaceholders = extractPlaceholders(compareValue).join(',');
      if (basePlaceholders !== comparePlaceholders) {
        issues.push({
          scope: 'frontend',
          locale,
          type: 'placeholder_mismatch',
          items: [
            `${key}: en=[${basePlaceholders}] ${locale}=[${comparePlaceholders}]`,
          ],
        });
      }
    }
  }

  const flatLocales = {};
  for (const locale of LOCALES) {
    flatLocales[locale] = Object.fromEntries(flattenKeys(localeData[locale]));
  }

  return { issues, locales: flatLocales };
}

function runBackendChecks() {
  const helperPath = path.join(WORKSPACE_ROOT, 'scripts', 'i18n_check_backend.py');
  const result = spawnSync('python3', [helperPath], { encoding: 'utf-8' });

  if (result.error) {
    return {
      issues: [{ scope: 'backend', locale: 'all', type: 'execution_error', items: [result.error.message] }],
      locales: {},
    };
  }

  if (result.status !== 0) {
    return {
      issues: [{ scope: 'backend', locale: 'all', type: 'execution_error', items: [result.stderr.trim()] }],
      locales: {},
    };
  }

  let payload;
  try {
    payload = JSON.parse(result.stdout);
  } catch (error) {
    return {
      issues: [{ scope: 'backend', locale: 'all', type: 'parse_error', items: [error.message] }],
      locales: {},
    };
  }

  const locales = payload.locales || {};
  const en = locales.en || { keys: [], placeholders: {}, values: {} };
  const de = locales.de || { keys: [], placeholders: {}, values: {} };

  const issues = [];
  const { missing, extra } = diffKeys(en.keys || [], de.keys || []);
  if (missing.length) {
    issues.push({ scope: 'backend', locale: 'de', type: 'missing_keys', items: missing });
  }
  if (extra.length) {
    issues.push({ scope: 'backend', locale: 'de', type: 'extra_keys', items: extra });
  }

  for (const key of en.keys || []) {
    const enPlaceholders = (en.placeholders && en.placeholders[key]) || [];
    const dePlaceholders = (de.placeholders && de.placeholders[key]) || [];
    if (enPlaceholders.join(',') !== dePlaceholders.join(',')) {
      issues.push({
        scope: 'backend',
        locale: 'de',
        type: 'placeholder_mismatch',
        items: [`${key}: en=[${enPlaceholders}] de=[${dePlaceholders}]`],
      });
    }
  }

  return {
    issues,
    locales: {
      en: en.values || {},
      de: de.values || {},
    },
  };
}

function escapeMarkdown(value) {
  if (value === null || value === undefined) return '';
  return String(value).replace(/\|/g, '\\|').replace(/\n/g, '<br>');
}

function buildComparisonTable(title, localeValues, localeOrder, keys) {
  let output = `## ${title}\n\n`;
  output += `| Key | ${localeOrder.map((l) => l.toUpperCase()).join(' | ')} |\n`;
  output += `| --- | ${localeOrder.map(() => '---').join(' | ')} |\n`;

  for (const key of keys) {
    const row = [
      escapeMarkdown(key),
      ...localeOrder.map((locale) => {
        const value = localeValues[locale] && localeValues[locale][key];
        return value ? escapeMarkdown(value) : '—';
      }),
    ];
    output += `| ${row.join(' | ')} |\n`;
  }

  output += '\n';
  return output;
}

function groupKeysBySection(localeValues, localeOrder) {
  const sections = new Map();
  for (const locale of localeOrder) {
    Object.keys(localeValues[locale] || {}).forEach((key) => {
      const section = getSectionKey(key);
      if (!sections.has(section)) {
        sections.set(section, new Set());
      }
      sections.get(section).add(key);
    });
  }
  return sections;
}

function groupKeysBySectionFromKeySet(keys) {
  const sections = new Map();
  for (const key of keys) {
    const section = getSectionKey(key);
    if (!sections.has(section)) {
      sections.set(section, new Set());
    }
    sections.get(section).add(key);
  }
  return sections;
}

function getSectionKey(key) {
  const segments = key.split('.');
  if (segments.length >= 2) return `${segments[0]}.${segments[1]}`;
  return segments[0] || 'root';
}

function buildExtrasBySection(localeValues, baseLocale, localeOrder) {
  const extrasBySection = new Map();
  const baseKeys = new Set(Object.keys(localeValues[baseLocale] || {}));
  for (const locale of localeOrder) {
    if (locale === baseLocale) continue;
    for (const key of Object.keys(localeValues[locale] || {})) {
      if (baseKeys.has(key)) continue;
      const section = getSectionKey(key);
      if (!extrasBySection.has(section)) {
        extrasBySection.set(section, new Map());
      }
      const localeMap = extrasBySection.get(section);
      if (!localeMap.has(locale)) {
        localeMap.set(locale, new Set());
      }
      localeMap.get(locale).add(key);
    }
  }
  return extrasBySection;
}

function filterLocalesBySection(localeValues, section) {
  if (!section) return localeValues;
  const filtered = {};
  for (const [locale, values] of Object.entries(localeValues || {})) {
    filtered[locale] = Object.fromEntries(
      Object.entries(values).filter(([key]) => getSectionKey(key) === section)
    );
  }
  return filtered;
}

function filterLocalesByKey(localeValues, keyFilter) {
  if (!keyFilter) return localeValues;
  const needle = keyFilter.toLowerCase();
  const filtered = {};
  for (const [locale, values] of Object.entries(localeValues || {})) {
    filtered[locale] = Object.fromEntries(
      Object.entries(values).filter(([key]) => key.toLowerCase().includes(needle))
    );
  }
  return filtered;
}

function filterIssuesByKey(issues, keyFilter) {
  if (!keyFilter) return issues;
  const needle = keyFilter.toLowerCase();
  return issues
    .map((issue) => {
      const filteredItems = issue.items.filter((item) =>
        String(item).toLowerCase().includes(needle)
      );
      return { ...issue, items: filteredItems };
    })
    .filter((issue) => issue.items.length > 0);
}

function buildMarkdownReport(reportData) {
  const frontendLocales = filterLocalesByKey(
    filterLocalesBySection(reportData.frontend || {}, SECTION),
    KEY_FILTER
  );
  const backendLocales = filterLocalesByKey(
    filterLocalesBySection(reportData.backend || {}, SECTION),
    KEY_FILTER
  );

  let output = '# i18n Parity Report\n\n';
  output += `Generated: ${new Date().toISOString()}\n\n`;
  if (SECTION) {
    output += `Filter: section=${SECTION}\n\n`;
  }
  if (KEY_FILTER) {
    output += `Filter: key=${KEY_FILTER}\n\n`;
  }

  if (Object.keys(frontendLocales).length) {
    output += '## Frontend Locales\n\n';
    const localeOrder = ['en', 'de', 'ja'];
    const baseLocale = 'en';
    const baseKeys = Object.keys(frontendLocales[baseLocale] || {}).sort();
    const sections = groupKeysBySectionFromKeySet(baseKeys);
    for (const section of Array.from(sections.keys()).sort()) {
      const keys = Array.from(sections.get(section)).sort();
      output += buildComparisonTable(`Frontend | ${section}`, frontendLocales, localeOrder, keys);
    }

    const extrasBySection = buildExtrasBySection(frontendLocales, baseLocale, localeOrder);
    if (extrasBySection.size) {
      for (const section of Array.from(extrasBySection.keys()).sort()) {
        const localeMap = extrasBySection.get(section);
        const keys = Array.from(
          new Set(Array.from(localeMap.values()).flatMap((set) => Array.from(set)))
        ).sort();
        if (!keys.length) continue;
        output += buildComparisonTable(`Frontend | Extra (non-EN) | ${section}`, frontendLocales, localeOrder, keys);
      }
    }
  } else {
    output += '## Frontend Locales\n\nNo frontend locale data available.\n\n';
  }

  if (Object.keys(backendLocales).length) {
    output += '## Backend Locales\n\n';
    const localeOrder = ['en', 'de'];
    const baseLocale = 'en';
    const baseKeys = Object.keys(backendLocales[baseLocale] || {}).sort();
    const sections = groupKeysBySectionFromKeySet(baseKeys);
    for (const section of Array.from(sections.keys()).sort()) {
      const keys = Array.from(sections.get(section)).sort();
      output += buildComparisonTable(`Backend | ${section}`, backendLocales, localeOrder, keys);
    }

    const extrasBySection = buildExtrasBySection(backendLocales, baseLocale, localeOrder);
    if (extrasBySection.size) {
      for (const section of Array.from(extrasBySection.keys()).sort()) {
        const localeMap = extrasBySection.get(section);
        const keys = Array.from(
          new Set(Array.from(localeMap.values()).flatMap((set) => Array.from(set)))
        ).sort();
        if (!keys.length) continue;
        output += buildComparisonTable(`Backend | Extra (non-EN) | ${section}`, backendLocales, localeOrder, keys);
      }
    }
  } else {
    output += '## Backend Locales\n\nNo backend locale data available.\n\n';
  }

  return output;
}

function buildJsonReport(issues, reportData) {
  const frontendLocales = filterLocalesByKey(
    filterLocalesBySection(reportData.frontend || {}, SECTION),
    KEY_FILTER
  );
  const backendLocales = filterLocalesByKey(
    filterLocalesBySection(reportData.backend || {}, SECTION),
    KEY_FILTER
  );

  const frontendSections = {};
  const backendSections = {};
  const frontendExtras = {};
  const backendExtras = {};

  if (Object.keys(frontendLocales).length) {
    const localeOrder = ['en', 'de', 'ja'];
    const baseLocale = 'en';
    const baseKeys = Object.keys(frontendLocales[baseLocale] || {}).sort();
    const sections = groupKeysBySectionFromKeySet(baseKeys);
    for (const [section, keys] of sections.entries()) {
      frontendSections[section] = Array.from(keys).sort();
    }

    const extrasBySection = buildExtrasBySection(frontendLocales, baseLocale, localeOrder);
    for (const [section, localeMap] of extrasBySection.entries()) {
      frontendExtras[section] = {};
      for (const [locale, keys] of localeMap.entries()) {
        frontendExtras[section][locale] = Array.from(keys).sort();
      }
    }
  }

  if (Object.keys(backendLocales).length) {
    const localeOrder = ['en', 'de'];
    const baseLocale = 'en';
    const baseKeys = Object.keys(backendLocales[baseLocale] || {}).sort();
    const sections = groupKeysBySectionFromKeySet(baseKeys);
    for (const [section, keys] of sections.entries()) {
      backendSections[section] = Array.from(keys).sort();
    }

    const extrasBySection = buildExtrasBySection(backendLocales, baseLocale, localeOrder);
    for (const [section, localeMap] of extrasBySection.entries()) {
      backendExtras[section] = {};
      for (const [locale, keys] of localeMap.entries()) {
        backendExtras[section][locale] = Array.from(keys).sort();
      }
    }
  }

  return {
    generatedAt: new Date().toISOString(),
    filter: SECTION || KEY_FILTER ? { section: SECTION, key: KEY_FILTER } : null,
    issues,
    sections: {
      frontend: frontendSections,
      backend: backendSections,
    },
    extras: {
      frontend: frontendExtras,
      backend: backendExtras,
    },
  };
}

function buildSummary(issues) {
  if (!issues.length) {
    return 'i18n check: no issues found.\n';
  }

  let output = 'i18n check: issues found.\n';
  for (const issue of issues) {
    output += `- [${issue.scope}] ${issue.locale} ${issue.type}: ${issue.items.length}\n`;
    const sample = issue.items.slice(0, 10);
    for (const item of sample) {
      output += `  - ${item}\n`;
    }
    if (issue.items.length > sample.length) {
      output += `  ... ${issue.items.length - sample.length} more\n`;
    }
  }
  return output;
}

function printSummary(issues, label = '') {
  if (!issues.length) {
    console.log(`i18n check${label}: no issues found.`);
    return;
  }

  console.log(`i18n check${label}: issues found.`);
  for (const issue of issues) {
    console.log(`- [${issue.scope}] ${issue.locale} ${issue.type}: ${issue.items.length}`);
    const sample = issue.items.slice(0, 10);
    for (const item of sample) {
      console.log(`  - ${item}`);
    }
    if (issue.items.length > sample.length) {
      console.log(`  ... ${issue.items.length - sample.length} more`);
    }
  }
}

function main() {
  const issues = [];
  const reportData = {};

  if (SCOPE === 'frontend' || SCOPE === 'all') {
    const frontendResult = runFrontendChecks();
    issues.push(...frontendResult.issues);
    reportData.frontend = frontendResult.locales;
  }
  if (SCOPE === 'backend' || SCOPE === 'all') {
    const backendResult = runBackendChecks();
    issues.push(...backendResult.issues);
    reportData.backend = backendResult.locales;
  }

  const sectionLabel = SECTION ? ` (section=${SECTION})` : '';
  const keyLabel = KEY_FILTER ? ` (key=${KEY_FILTER})` : '';

  const filteredIssues = filterIssuesByKey(issues, KEY_FILTER);

  if (JSON_OUTPUT) {
    console.log(JSON.stringify({ issues: filteredIssues }, null, 2));
  } else {
    printSummary(filteredIssues, `${sectionLabel}${keyLabel}`);
  }

  writeReportFiles(getReportDir(), filteredIssues, reportData);

  if (STRICT && filteredIssues.length > 0) {
    process.exit(1);
  }
}

main();
