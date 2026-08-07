---
'@priver/eslint-config': minor
---

Update ESLint plugins and expand lint coverage.

Updated plugins:

- `@eslint-community/eslint-plugin-eslint-comments`: `^4.7.1` → `^4.7.2`
- `eslint-plugin-compat`: `^7.0.1` → `^7.0.2`
- `eslint-plugin-import-x`: `^4.16.2` → `^4.17.1`
- `eslint-plugin-n`: `^17.24.0` → `^18.2.2`
- `eslint-plugin-react-dom`: `^4.2.3` → `^5.18.3`
- `eslint-plugin-react-jsx`: `^4.2.3` → `^5.18.3`
- `eslint-plugin-react-naming-convention`: `^4.2.3` → `^5.18.3`
- `eslint-plugin-react-rsc`: `^4.2.3` → `^5.18.3`
- `eslint-plugin-react-web-api`: `^4.2.3` → `^5.18.3`
- `eslint-plugin-react-x`: `^4.2.3` → `^5.18.3`
- `eslint-plugin-react-refresh`: `^0.5.2` → `^0.5.3`
- `eslint-plugin-unicorn`: `^64.0.0` → `^73.0.0`
- `typescript-eslint`: `^8.58.2` → `^8.66.0`

The base config now enables new Unicorn checks for unsafe code, redundant constructs, and modern
platform APIs. The React config now enforces static component definitions and detects leaked fetch
requests and `IntersectionObserver` instances.

Existing checks for logical assignments, operator assignments, and useless concatenation now use
their Unicorn replacements. Users may see new lint errors after upgrading.
