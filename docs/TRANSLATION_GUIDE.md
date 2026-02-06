# Translation Guide

This guide explains how to use the i18n reports to add missing translations and how to format your translation deliverables.

## 1) Generate a focused report
Run the checker with a section filter to keep the workload small:

- Example: `node scripts/i18n_check.js --section=settings.spoolman --report`

This writes the report to `reports/i18n/i18n-report.md`.

## 2) Read the report
Open `reports/i18n/i18n-report.md` and find the section table. Example:

| Key | EN | DE | JA |
| --- | --- | --- | --- |
| settings.spoolman | Spoolman | Spoolman | — |

A `—` means the translation is missing.

## 3) Translate using the EN column as the source
Provide translations as key→value pairs per locale. Keep keys identical.

Example (JA):

settings.spoolman = スプールマン

## 4) Preserve placeholders exactly
If the EN text includes placeholders, they MUST be copied exactly:

- EN: `Update available: v{{version}}`
- JA: `アップデートあり: v{{version}}`

Do not translate placeholder names and do not add/remove placeholders. The checker validates placeholder parity.

## 5) Apply translations (engineers only)
Translations are stored in locale files:

- EN: `frontend/src/i18n/locales/en.ts`
- DE: `frontend/src/i18n/locales/de.ts`
- JA: `frontend/src/i18n/locales/ja.ts`

## 6) Re-run checks
After updates, re-run the same report command to verify the `—` entries are gone.

## Tips
- Translate in small sections (e.g., `settings.spoolman`, `settings.smartPlug`, `settings.virtualPrinter`).
- Keep punctuation consistent with the EN source unless your locale requires changes.
- Leave product names as-is unless the product has a localized name.
