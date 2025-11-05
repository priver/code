---
'@priver/eslint-config': major
---

Update ESLint to v9

This is a major update that migrates the ESLint configuration to the new flat config format
introduced in ESLint v9. The changes include:

- Complete migration to the new flat config format (eslint.config.js)
- Conversion of all config files from JavaScript to TypeScript for better type safety
- Addition of comprehensive comparison documentation (TABLE_OF_COMPARISON.md)
- Removal of Jest configurations for now (planning to migrate to vitest)
- Improved documentation in README.md

This is a breaking change that requires users to update their ESLint configuration to use the new
flat config format.
