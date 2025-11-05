# @priver/eslint-config

## 9.0.0

### Major Changes

- [#32](https://github.com/priver/code/pull/32)
  [`71aa6d0`](https://github.com/priver/code/commit/71aa6d0843df9e7b2a18e1942004400732e46671) Thanks
  [@priver](https://github.com/priver)! - Remove eslint-plugin-storybook.

  The plugin is only used with the Storybook app, so you can manually add it to your configuration
  if you wish.

- [#28](https://github.com/priver/code/pull/28)
  [`a7ad967`](https://github.com/priver/code/commit/a7ad967f756f703fd0bded3d344cab0b78a165b0) Thanks
  [@priver](https://github.com/priver)! - Update `eslint-plugin-react-hooks` to v7.0.0 with React
  Compiler diagnostics rules enabled.

- [#27](https://github.com/priver/code/pull/27)
  [`f0a9f4d`](https://github.com/priver/code/commit/f0a9f4d16dc68ca1b94b9da84e3804f64148748a) Thanks
  [@priver](https://github.com/priver)! - Update the react-x plugin to version 2. Additionally,
  update the other dependencies:
  - Update eslint to v9.36.0 and enable `preserve-caught-error` rule.
  - Update eslint-plugin-unicorn to v61.0.2 and enable following rules:
    - `unicorn/no-array-sort`
    - `unicorn/prefer-bigint-literals`
    - `unicorn/prefer-classlist-toggle`
    - `unicorn/require-module-attributes`

- [`68af726`](https://github.com/priver/code/commit/68af726a217b637e3c17c239cbde584064e7310d) Thanks
  [@priver](https://github.com/priver)! - Update ESLint to v9

  This is a major update that migrates the ESLint configuration to the new flat config format
  introduced in ESLint v9. The changes include:
  - Complete migration to the new flat config format (eslint.config.js)
  - Conversion of all config files from JavaScript to TypeScript for better type safety
  - Addition of comprehensive comparison documentation (TABLE_OF_COMPARISON.md)
  - Removal of Jest configurations for now (planning to migrate to vitest)
  - Improved documentation in README.md

  This is a breaking change that requires users to update their ESLint configuration to use the new
  flat config format.

### Minor Changes

- [#18](https://github.com/priver/code/pull/18)
  [`099a95c`](https://github.com/priver/code/commit/099a95c7318607f90a69d0a7ca45c8c7d0cb30d4) Thanks
  [@priver](https://github.com/priver)! - Update ESLint plugins to latest versions and add new
  unicorn rules

  Added new eslint-plugin-unicorn ESLint rules:
  - `unicorn/no-array-reverse`: Prevent usage of Array.reverse() which mutates the original array
  - `unicorn/no-useless-error-capture-stack-trace`: Prevent useless Error.captureStackTrace() calls
  - `unicorn/prefer-class-fields`: Prefer class fields over constructor assignments
  - `unicorn/require-module-specifiers`: Enforce non-empty specifier list in `import` and `export`
    statements

- [#14](https://github.com/priver/code/pull/14)
  [`0d89012`](https://github.com/priver/code/commit/0d890123cb4691884431001a55befbd4b6065eb2) Thanks
  [@priver](https://github.com/priver)! - Removed `tsconfigRootDir` configuration requirement

  Updated to typescript-eslint v8.37.0. The `tsconfigRootDir` parser option is no longer needed as
  typescript-eslint now automatically discovers the project root directory relative to the ESLint
  configuration file location.

  This simplifies the ESLint configuration by removing the need to manually specify the TypeScript
  configuration root directory.

- [#33](https://github.com/priver/code/pull/33)
  [`6a50aef`](https://github.com/priver/code/commit/6a50aef7e7cf31036f933998045dc7c67282cab4) Thanks
  [@priver](https://github.com/priver)! - Update eslint plugins

### Patch Changes

- [#24](https://github.com/priver/code/pull/24)
  [`20821b9`](https://github.com/priver/code/commit/20821b9bb2c71164e8ff6fae576e057f07fd065a) Thanks
  [@priver](https://github.com/priver)! - Update ESLint plugins to their latest versions
  - `@eslint/js` to version 9.34.0
  - `eslint-plugin-react-dom`, `eslint-plugin-react-hooks-extra`,
    `eslint-plugin-react-naming-convention`, `eslint-plugin-react-web-api`, and
    `eslint-plugin-react-x` to version 1.52.6
  - `typescript-eslint` to version 8.41.0

## 8.0.0

### Major Changes

- a77d096: Update to
  [ESLint's new config system](https://eslint.org/docs/latest/use/configure/configuration-files-new)

### Minor Changes

- 435d982: Update typescript-eslint to v7

### Patch Changes

- a34d02f: Update eslint-plugin-storybook to v0.8.0
