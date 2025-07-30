---
'@priver/eslint-config': patch
---

Update ESLint plugins to latest versions and add new unicorn rules

Added new eslint-plugin-unicorn ESLint rules:

- `unicorn/no-array-reverse`: Prevent usage of Array.reverse() which mutates the original array
- `unicorn/no-useless-error-capture-stack-trace`: Prevent useless Error.captureStackTrace() calls
- `unicorn/prefer-class-fields`: Prefer class fields over constructor assignments
- `unicorn/require-module-specifiers`: Enforce non-empty specifier list in `import` and `export`
  statements
