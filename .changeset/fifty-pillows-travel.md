---
'@priver/eslint-config': minor
---

Update ESLint-related dependencies.

- `@eslint-community/eslint-plugin-eslint-comments`: `4.6.0` -> `4.7.1`
- `@eslint/js`: `9.39.2` -> `9.39.4`
- `eslint`: `9.39.2` -> `9.39.4`
- `eslint-plugin-compat`: `6.1.0` -> `6.2.1`
- `eslint-plugin-depend`: `1.4.0` -> `1.5.0`
- `eslint-plugin-import-x`: `4.16.1` -> `4.16.2`
- `eslint-plugin-n`: `17.23.2` -> `17.24.0`
- `eslint-plugin-react-dom`: `2.10.1` -> `2.13.0`
- `eslint-plugin-react-hooks-extra`: `2.10.1` -> `2.13.0`
- `eslint-plugin-react-naming-convention`: `2.10.1` -> `2.13.0`
- `eslint-plugin-react-refresh`: `0.5.0` -> `0.5.2`
- `eslint-plugin-react-rsc`: `2.10.1` -> `2.13.0`
- `eslint-plugin-react-web-api`: `2.10.1` -> `2.13.0`
- `eslint-plugin-react-x`: `2.10.1` -> `2.13.0`
- `globals`: `17.3.0` -> `17.5.0`
- `typescript-eslint`: `8.54.0` -> `8.58.2`

Adjust lint rules:

- Enable `n/prefer-global/crypto` as `["error", "always"]`. This matches the rule default and prefers global `crypto` over `require("crypto").webcrypto`.
- Enable `n/prefer-global/timers` as `["error", "always"]`. This matches the rule default and prefers global timer functions over `require("timers")`.
- Enable `react-naming-convention/id-name` as `"error"`. This requires values from `useId()` to be named `id` or end with `Id`.
