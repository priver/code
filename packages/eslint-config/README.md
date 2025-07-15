# @priver/eslint-config

[![NPM Version](https://img.shields.io/npm/v/%40priver%2Feslint-config)](https://www.npmjs.com/package/@priver/eslint-config)
[![NPM License](https://img.shields.io/npm/l/%40priver%2Feslint-config)](https://opensource.org/licenses/MIT)

A comprehensive, modern ESLint configuration package that provides a set of pre-configured rules and
plugins for various JavaScript/TypeScript projects. This configuration leverages
[ESLint's new flat config system](https://eslint.org/docs/latest/use/configure/configuration-files)
to provide a more maintainable and flexible linting setup.

## What's Included

- 🚀 Uses ESLint's flat config system (required for ESLint 9+)
- 🔧 Modular configuration that can be combined based on project needs
- 📦 Pre-configured rules for JavaScript, TypeScript, React, and Node.js environments
- 📝 TypeScript support with type-aware linting rules
- ⚛️ React-specific rules including hooks and refresh compatibility
- 📚 Optional Storybook configuration for component stories
- 🌐 Browser compatibility checking via eslint-plugin-compat
- 📋 Import/export validation and dependency analysis

## Included Plugins

This configuration includes several powerful ESLint plugins to enhance your development experience:

| Plugin                                                                                                               | Description                                     |
| -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [@eslint-community/eslint-plugin-eslint-comments](https://eslint-community.github.io/eslint-plugin-eslint-comments/) | Additional rules for ESLint directive comments  |
| [@eslint-react/eslint-plugin](https://eslint-react.xyz/)                                                             | React specific linting rules                    |
| [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat)                                            | Browser compatibility checking                  |
| [eslint-plugin-depend](https://github.com/es-tooling/eslint-plugin-depend)                                           | Detect dependency bloat and redundant polyfills |
| [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x)                                            | Import/export syntax validation                 |
| [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n)                                               | Node.js specific linting rules                  |
| [eslint-plugin-react-hooks](https://reactjs.org/docs/hooks-rules.html)                                               | React Hooks rules                               |
| [eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh)                            | React Fast Refresh rules                        |
| [eslint-plugin-storybook](https://github.com/storybookjs/eslint-plugin-storybook)                                    | Storybook specific rules                        |
| [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)                                       | Various awesome ESLint rules                    |
| [typescript-eslint](https://typescript-eslint.io/)                                                                   | TypeScript specific linting rules               |

## Available Configurations

This package provides six modular configurations that can be combined based on your project's needs:

| Configuration    | Description                                                                                      | When to Use                                                                                       |
| ---------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| **`base`**       | Core ESLint rules and essential plugins including unicorn, import-x, eslint-comments, and depend | **Required** - Foundation for all projects. Use as the base for any JavaScript/TypeScript project |
| **`browser`**    | Browser-specific globals, compatibility checking, and restrictions on confusing browser globals  | Web applications, client-side code, and any code that runs in browsers                            |
| **`node`**       | Node.js-specific globals and rules via eslint-plugin-n                                           | Server-side applications, CLI tools, build scripts, and any Node.js environments                  |
| **`typescript`** | TypeScript support with type-aware linting and proper import resolution                          | Any project using TypeScript files (`.ts`, `.tsx`, `.cts`, `.mts`)                                |
| **`react`**      | Comprehensive React rules including hooks, refresh, DOM, web API, and naming conventions         | React applications and components (requires TypeScript config when using `.tsx` files)            |
| **`storybook`**  | Storybook-specific rules for component stories and testing                                       | Storybook story files (`.stories.ts`, `.stories.tsx`)                                             |

### Configuration Dependencies

- **`base`** is required for all setups
- **`typescript`** should be applied to TypeScript files (`**/*.ts`, `**/*.tsx`)
- **`react`** should be applied to React component files (`**/*.tsx`)
- **`browser`** and **`node`** are mutually exclusive (choose based on your runtime environment)
- **`storybook`** should only be applied to story files (`**/*.stories.*`)

## Installation

```sh
# Using npm
npm install --save-dev eslint @priver/eslint-config

# Using yarn
yarn add --dev eslint @priver/eslint-config

# Using pnpm
pnpm add --save-dev eslint @priver/eslint-config
```

**Note:** `eslint-plugin-storybook` is not installed by default because it requires a specific
version of Storybook. If you wish to use the Storybook configuration, please install the plugin
manually.

## Usage

The configuration is modular and can be combined based on your project's needs. Here are some common
setup examples:

### Basic Setup

```js
import { defineConfig } from 'eslint/config';
import { base, browser } from '@priver/eslint-config';

export default defineConfig([base, browser]);
```

### Node.js Application with TypeScript

```js
import { defineConfig, globalIgnores } from 'eslint/config';
import { base, node, typescript } from '@priver/eslint-config';

export default defineConfig([
  globalIgnores(['scripts/']), // Ignore specific directories
  base,
  node,
  { files: ['**/*.ts'], extends: [typescript] },
]);
```

### React Application with TypeScript and Storybook

```js
import { defineConfig, globalIgnores } from 'eslint/config';
import { base, browser, node, react, storybook, typescript } from '@priver/eslint-config';

export default defineConfig([
  globalIgnores(['.next/', 'next-env.d.ts']),
  base,
  browser,
  { files: ['**/*.ts', '**/*.tsx'], extends: [typescript] },
  { files: ['**/*.tsx'], extends: [react] },
  { files: ['**/*.stories.tsx'], extends: [storybook] },
  { files: ['**/*.config.js'], extends: [node] },
]);
```

## Comparison with Recommended Configurations

For a comprehensive comparison between this ESLint configuration and the recommended configurations
provided by various plugins, please refer to detailed [Table of Comparison](TABLE_OF_COMPARISON.md).

## Contributing

Submit contributions as Pull Requests. For major changes, open an issue to discuss the proposed
modifications before proceeding.

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for
details.
