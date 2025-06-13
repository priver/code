# @priver/eslint-config

[![npm version](https://img.shields.io/npm/v/@priver/eslint-config.svg)](https://www.npmjs.com/package/@priver/eslint-config)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A comprehensive, modern ESLint configuration package that provides a set of pre-configured rules and
plugins for various JavaScript/TypeScript projects. This configuration leverages
[ESLint's new flat config system](https://eslint.org/docs/latest/use/configure/configuration-files)
to provide a more maintainable and flexible linting setup.

## Features

- 🚀 Modern flat config system for better performance and maintainability
- 🔧 Highly customizable and modular configuration
- 🛠️ Extensive plugin support for various use cases
- 📝 TypeScript support out of the box
- ⚛️ React support with modern best practices
- 📚 Storybook integration for component development
- 🎯 Strict type checking and code quality rules
- 🌐 Browser compatibility checking

## Installation

```sh
# Using npm
npm install --save-dev eslint @priver/eslint-config

# Using yarn
yarn add --dev eslint @priver/eslint-config

# Using pnpm
pnpm add --save-dev eslint @priver/eslint-config
```

## Included Plugins

This configuration includes several powerful ESLint plugins to enhance your development experience:

| Plugin                                                                                                               | Description                                    |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [typescript-eslint](https://typescript-eslint.io/)                                                                   | TypeScript specific linting rules              |
| [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x)                                            | Import/export syntax validation                |
| [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n)                                               | Node.js specific linting rules                 |
| [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)                                       | Various awesome ESLint rules                   |
| [@eslint-react/eslint-plugin](https://eslint-react.xyz/)                                                             | React specific linting rules                   |
| [eslint-plugin-react-hooks](https://reactjs.org/docs/hooks-rules.html)                                               | React Hooks rules                              |
| [eslint-plugin-react-refresh](https://github.com/ArnaudBarre/eslint-plugin-react-refresh)                            | React Fast Refresh rules                       |
| [eslint-plugin-storybook](https://github.com/storybookjs/eslint-plugin-storybook)                                    | Storybook specific rules                       |
| [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat)                                            | Browser compatibility checking                 |
| [@eslint-community/eslint-plugin-eslint-comments](https://eslint-community.github.io/eslint-plugin-eslint-comments/) | Additional rules for ESLint directive comments |

## Usage

The configuration is modular and can be combined based on your project's needs. Here are some common
setup examples:

### Basic Setup

```js
import { defineConfig } from 'eslint/config';
import { base, browser } from '@priver/eslint-config';

export default defineConfig(base, browser);
```

### Node.js Application with TypeScript

```js
import { defineConfig } from 'eslint-define-config';
import { base, node, typescript } from '@priver/eslint-config';

export default defineConfig(
  { ignores: ['scripts/**/*'] }, // Ignore specific directories
  base,
  node,
  {
    files: ['**/*.ts'],
    extends: [typescript],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
```

### React Application with TypeScript and Storybook

```js
import { defineConfig } from 'eslint-define-config';
import { base, browser, node, react, storybook, typescript } from '@priver/eslint-config';

export default defineConfig([
  { ignores: ['.next/**/*', 'next-env.d.ts'] },
  base,
  browser,
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [typescript],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  { files: ['**/*.tsx'], ...react },
  { files: ['**/*.stories.tsx'], ...storybook },
  { files: ['**/*.config.js'], ...node },
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
