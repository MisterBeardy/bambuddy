#!/usr/bin/env python3
"""Backend i18n inspection helper for the standalone i18n utility."""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from typing import Any

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))

from backend.app.i18n import DE, EN

PLACEHOLDER_RE = re.compile(r"\{([a-zA-Z0-9_]+)\}")


def flatten_keys(obj: Any, prefix: str = "") -> dict[str, str]:
    """Return a map of dot keys to string values for leaf strings."""
    results: dict[str, str] = {}
    if isinstance(obj, dict):
        for key, value in obj.items():
            next_prefix = f"{prefix}.{key}" if prefix else key
            results.update(flatten_keys(value, next_prefix))
    elif isinstance(obj, str):
        results[prefix] = obj
    return results


def extract_placeholders(value: str) -> list[str]:
    return sorted(set(PLACEHOLDER_RE.findall(value)))


def build_locale_report(locale: dict[str, Any]) -> dict[str, Any]:
    flat = flatten_keys(locale)
    return {
        "keys": sorted(flat.keys()),
        "placeholders": {key: extract_placeholders(value) for key, value in flat.items()},
        "values": flat,
    }


def main() -> int:
    parser = argparse.ArgumentParser(description="Emit backend i18n key/placeholder metadata as JSON.")
    parser.add_argument("--pretty", action="store_true", help="Pretty-print JSON output")
    args = parser.parse_args()

    payload = {
        "locales": {
            "en": build_locale_report(EN),
            "de": build_locale_report(DE),
        }
    }

    if args.pretty:
        print(json.dumps(payload, indent=2, sort_keys=True))
    else:
        print(json.dumps(payload))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
