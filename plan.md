# I18n Testing Implementation Plan

## Goals
- Add automated i18n coverage tests for frontend UI translations (React + i18next).
- Add automated i18n coverage tests for backend notification templates.
- Ensure placeholder/interpolation consistency across locales.
- Provide a lightweight, deterministic test suite that runs in CI.

## Scope
- Frontend: [`frontend/src/i18n/index.ts`](frontend/src/i18n/index.ts:1), [`frontend/src/i18n/locales/en.ts`](frontend/src/i18n/locales/en.ts:1), [`frontend/src/i18n/locales/de.ts`](frontend/src/i18n/locales/de.ts:1), [`frontend/src/i18n/locales/ja.ts`](frontend/src/i18n/locales/ja.ts:1).
- Backend: [`backend/app/i18n/__init__.py`](backend/app/i18n/__init__.py:1).
- Test frameworks: Vitest (frontend) and Pytest (backend).

## Implementation Steps

### 1) Frontend i18n test utilities
Create a small utility to compare translation trees and collect placeholders.
- File: `frontend/src/__tests__/i18nUtils.ts`
- Functions:
  - `flattenKeys(obj: unknown, prefix = ""): string[]`
    - Recursively traverse nested objects and return dot-separated keys for leaf strings.
  - `diffKeys(baseKeys: string[], compareKeys: string[]): { missing: string[]; extra: string[] }`
  - `extractPlaceholders(value: string): string[]`
    - Parse `{{var}}` tokens from translation strings.
  - `collectPlaceholders(obj: unknown): Record<string, string[]>`
    - Map key -> placeholder list for each leaf string.

### 2) Frontend translation coverage test
Add a Vitest suite to validate key parity and placeholder parity across locales.
- File: `frontend/src/__tests__/i18n/translationCoverage.test.ts`
- Tests:
  1. **Key parity**
     - Base: English (`en`).
     - Compare to `de` and `ja` using `flattenKeys`.
     - Assert `missing.length === 0` and `extra.length === 0`.
  2. **Placeholder parity**
     - For each key in English placeholders, ensure the same placeholder set exists in `de` and `ja`.
  3. **Smoke translate**
     - Import i18n instance from [`frontend/src/i18n/index.ts`](frontend/src/i18n/index.ts:1).
     - Call `i18n.t(key, { sample values })` for keys with placeholders.
     - Assert no throw and return is a string (non-empty for real strings).

### 3) Frontend runtime locale switching test (optional but recommended)
Validate that changing language works with i18next initialization in jsdom.
- File: `frontend/src/__tests__/i18n/i18nSwitching.test.ts`
- Test:
  - `await i18n.changeLanguage('de')` then `i18n.t('nav.printers') === 'Drucker'`.
  - `await i18n.changeLanguage('ja')` then `i18n.t('nav.printers') === 'プリンター'`.
  - `await i18n.changeLanguage('xx')` should fall back to English.

### 4) Backend i18n test utilities
Add a simple helper to traverse the translation dictionaries.
- File: `backend/tests/unit/test_i18n_utils.py`
- Helpers:
  - `flatten_keys(obj, prefix="") -> set[str]`
  - `extract_placeholders(value: str) -> set[str]`

### 5) Backend translation coverage test
Add Pytest checks for key and placeholder parity in backend notification translations.
- File: `backend/tests/unit/test_i18n_translations.py`
- Tests:
  1. **Key parity**
     - `flatten_keys(EN) == flatten_keys(DE)`.
  2. **Placeholder parity**
     - For each key, compare placeholders extracted from both languages.
  3. **Formatting smoke test**
     - Use `get_translation()` from [`backend/app/i18n/__init__.py`](backend/app/i18n/__init__.py:1) with required kwargs.
     - Validate the returned string is not the key and formatting succeeds.

### 6) CI / Test execution updates
- Ensure frontend tests run via `frontend/package.json` script (if not already) and CI includes `vitest`.
- Ensure backend tests pick up new unit tests via Pytest (`backend/tests/unit`).
- Confirm `pyproject.toml` includes `backend/tests` already (`[tool.pytest.ini_options]`).

## Test Data Strategy
- Placeholder test data:
  - `printer: 'P1S'`
  - `slot: 1`
  - `percent: 10`
  - `progress: 42`
  - `error_type: 'UnknownError'`
- For unknown placeholder sets, build a generic map from extracted placeholder names.

## Edge Cases & Guardrails
- Some locales may intentionally omit rarely used keys; if exceptions are required, add an allowlist in tests.
- Ensure arrays aren’t part of translation objects (expected structure is nested objects with strings).
- Make tests deterministic and avoid depending on browser language detection in jsdom.

## Acceptance Criteria
- Frontend tests fail when any locale has missing/extra keys or mismatched placeholders.
- Backend tests fail when `EN`/`DE` diverge or formatting placeholders differ.
- All new tests run in CI with existing configuration.

## Estimated Effort
- Utilities + tests: ~3–5 hours.
- CI wiring (if needed): ~1 hour.
- Total: ~4–6 hours.
