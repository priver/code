---
'@priver/eslint-config': minor
---

Removed `tsconfigRootDir` configuration requirement

Updated to typescript-eslint v8.37.0. The `tsconfigRootDir` parser option is no longer needed as
typescript-eslint now automatically discovers the project root directory relative to the ESLint
configuration file location.

This simplifies the ESLint configuration by removing the need to manually specify the TypeScript
configuration root directory.
