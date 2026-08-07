# @priver/eslint-config

## 10.0.0

### Major Changes

- [#61](https://github.com/priver/code/pull/61) [`b4395eb`](https://github.com/priver/code/commit/b4395eb445da796cf706bc82aa631629a6707e3a) - Update to ESLint 10.

  Changed packages:
  - `eslint`: `^9.39.4` -> `^10.2.0`
  - `@eslint/js`: `^9.39.4` -> `^10.0.1`
  - `eslint-plugin-compat`: `^6.2.1` -> `^7.0.1`
  - `eslint-plugin-react-dom`: `^2.13.0` -> `^4.2.3`
  - `eslint-plugin-react-naming-convention`: `^2.13.0` -> `^4.2.3`
  - `eslint-plugin-react-rsc`: `^2.13.0` -> `^4.2.3`
  - `eslint-plugin-react-web-api`: `^2.13.0` -> `^4.2.3`
  - `eslint-plugin-react-x`: `^2.13.0` -> `^4.2.3`
  - `eslint-plugin-unicorn`: `^62.0.0` -> `^64.0.0`

  Added `eslint-plugin-react-jsx` `^4.2.3`.

  Removed `eslint-plugin-react-hooks` and `eslint-plugin-react-hooks-extra`.

### Minor Changes

- [#76](https://github.com/priver/code/pull/76) [`dc3efda`](https://github.com/priver/code/commit/dc3efda3037a2ed1bbd2993c5a09ef3f88febbbb) - Update ESLint plugins and expand lint coverage.

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

## 9.2.0

### Minor Changes

- [#59](https://github.com/priver/code/pull/59) [`ef366c2`](https://github.com/priver/code/commit/ef366c2e3a06d7d085b6935a33cd1465a249abff) Thanks [@priver](https://github.com/priver)! - Update ESLint-related dependencies.
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
