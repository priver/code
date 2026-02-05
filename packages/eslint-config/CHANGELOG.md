# @priver/eslint-config

## 9.1.0

### Minor Changes

- [#55](https://github.com/priver/code/pull/55) [`b76de09`](https://github.com/priver/code/commit/b76de091733026137d5a7ac29724afc3745b436f) Thanks [@priver](https://github.com/priver)! - Update eslint plugins, add new `react-rsc` plugin
  - `@eslint-react/eslint-plugin`: 2.6.4 -> 2.10.1
  - `eslint-plugin-compat`: 6.0.2 -> 6.1.0
  - `eslint-plugin-react-refresh`: 0.4.26 -> 0.5.0
  - `typescript-eslint`: 8.53.0 -> 8.54.0

  Enable new rules:
  - `react-rsc/function-definition`

- [#49](https://github.com/priver/code/pull/49) [`a20d4ac`](https://github.com/priver/code/commit/a20d4ac86e7f515753f569c38354338b059c502c) Thanks [@priver](https://github.com/priver)! - Update eslint plugins, enable new rules, and disable experimental rules
  - `@eslint-react/eslint-plugin`: 2.3.1 -> 2.6.4
  - `eslint-community/eslint-plugin-eslint-comments`: 4.5.0 -> 4.6.0
  - `eslint-plugin-depend`: 1.3.1 -> 1.4.0
  - `eslint-plugin-n`: 17.23.1 -> 17.23.2
  - `eslint-plugin-react-refresh`: 0.4.24 -> 0.4.26
  - `globals`: 16.5.0 -> 17.0.0
  - `typescript-eslint`: 8.46.3 -> 8.53.0

  Enable new rules:
  - `@typescript-eslint/no-unused-private-class-members`
  - `@typescript-eslint/no-useless-default-assignment`
  - `react-naming-convention/ref-name`

  Disable exprimental rules:
  - `react-x/no-duplicate-key`
  - `react-x/no-unnecessary-use-callback`
  - `react-x/no-unnecessary-use-memo`

## 9.0.0

### Major Changes

- [#43](https://github.com/priver/code/pull/43) [`c0d89fc`](https://github.com/priver/code/commit/c0d89fc1bf639c916105171974651945031c1ed1) Thanks [@priver](https://github.com/priver)! - Remove eslint-plugin-storybook.

  The plugin is only used with the Storybook app, so you can manually add it to your configuration if you wish.

- [#43](https://github.com/priver/code/pull/43) [`c0d89fc`](https://github.com/priver/code/commit/c0d89fc1bf639c916105171974651945031c1ed1) Thanks [@priver](https://github.com/priver)! - Update `eslint-plugin-react-hooks` to v7.0.0 with React

  Compiler diagnostics rules enabled.

- [#43](https://github.com/priver/code/pull/43) [`c0d89fc`](https://github.com/priver/code/commit/c0d89fc1bf639c916105171974651945031c1ed1) Thanks [@priver](https://github.com/priver)! - Update the react-x plugin to version 2.

  Additionally, update the other dependencies:
  - Update eslint to v9.36.0 and enable `preserve-caught-error` rule.
  - Update eslint-plugin-unicorn to v61.0.2 and enable following rules:
    - `unicorn/no-array-sort`
    - `unicorn/prefer-bigint-literals`
    - `unicorn/prefer-classlist-toggle`
    - `unicorn/require-module-attributes`

- [#43](https://github.com/priver/code/pull/43) [`c0d89fc`](https://github.com/priver/code/commit/c0d89fc1bf639c916105171974651945031c1ed1) Thanks [@priver](https://github.com/priver)! - Update ESLint to v9

  This is a major update that migrates the ESLint configuration to the new flat config format introduced in ESLint v9. The changes include:
  - Complete migration to the new flat config format (eslint.config.js)
  - Conversion of all config files from JavaScript to TypeScript for better type safety
  - Addition of comprehensive comparison documentation (TABLE_OF_COMPARISON.md)
  - Removal of Jest configurations for now (planning to migrate to vitest)
  - Improved documentation in README.md

  This is a breaking change that requires users to update their ESLint configuration to use the new flat config format.

### Minor Changes

- [#43](https://github.com/priver/code/pull/43) [`c0d89fc`](https://github.com/priver/code/commit/c0d89fc1bf639c916105171974651945031c1ed1) Thanks [@priver](https://github.com/priver)! - Update ESLint plugins to latest versions and add new unicorn rules

  Added new eslint-plugin-unicorn ESLint rules:
  - `unicorn/no-array-reverse`: Prevent usage of Array.reverse() which mutates the original array
  - `unicorn/no-useless-error-capture-stack-trace`: Prevent useless Error.captureStackTrace() calls
  - `unicorn/prefer-class-fields`: Prefer class fields over constructor assignments
  - `unicorn/require-module-specifiers`: Enforce non-empty specifier list in `import` and `export` statements

- [#43](https://github.com/priver/code/pull/43) [`c0d89fc`](https://github.com/priver/code/commit/c0d89fc1bf639c916105171974651945031c1ed1) Thanks [@priver](https://github.com/priver)! - Removed `tsconfigRootDir` configuration requirement

  Updated to typescript-eslint v8.37.0. The `tsconfigRootDir` parser option is no longer needed as typescript-eslint now automatically discovers the project root directory relative to the ESLint configuration file location.

  This simplifies the ESLint configuration by removing the need to manually specify the TypeScript configuration root directory.

- [#43](https://github.com/priver/code/pull/43) [`c0d89fc`](https://github.com/priver/code/commit/c0d89fc1bf639c916105171974651945031c1ed1) Thanks [@priver](https://github.com/priver)! - Update eslint plugins

### Patch Changes

- [#43](https://github.com/priver/code/pull/43) [`c0d89fc`](https://github.com/priver/code/commit/c0d89fc1bf639c916105171974651945031c1ed1) Thanks [@priver](https://github.com/priver)! - Update ESLint plugins to their latest versions
  - `@eslint/js` to version 9.34.0
  - `eslint-plugin-react-dom`, `eslint-plugin-react-hooks-extra`, `eslint-plugin-react-naming-convention`, `eslint-plugin-react-web-api`, and `eslint-plugin-react-x` to version 1.52.6
  - `typescript-eslint` to version 8.41.0

## 8.0.0

### Major Changes

- a77d096: Update to [ESLint's new config system](https://eslint.org/docs/latest/use/configure/configuration-files-new)

### Minor Changes

- 435d982: Update typescript-eslint to v7

### Patch Changes

- a34d02f: Update eslint-plugin-storybook to v0.8.0
