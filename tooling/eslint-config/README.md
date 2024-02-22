# @priver/eslint-config

Shareable config for [ESLint]. Uses
[ESLint's new config system](https://eslint.org/docs/latest/use/configure/configuration-files-new).

## Installation

```sh
pnpm add --save-dev eslint @priver/eslint-config
```

## What's included

Included plugins:

- [eslint-plugin-compat]
- [eslint-plugin-eslint-comments]
- [eslint-plugin-import]
- [eslint-plugin-jest-formatting]
- [eslint-plugin-jest]
- [eslint-plugin-jsx-a11y]
- [eslint-plugin-n]
- [eslint-plugin-react-hooks]
- [eslint-plugin-react]
- [eslint-plugin-unicorn]
- [typescript-eslint]

## Usage

Config includes of configurations objects that can be combined. Here is some examples for popular
platforms/frameworks.

### Node app with TypeScript

Add the following in your `eslint.config.js`:

```js
import path from 'node:path';
import url from 'node:url';

import { base, node, typescript } from '@priver/eslint-config';

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  { ignores: ['scripts/**/*'] }, // files will not be linted
  base,
  node,
  { files: ['**/*.ts'], ...typescript },
  {
    languageOptions: {
      parserOptions: {
        project: path.join(dirname, 'tsconfig.json'),
      },
    },
  },
];
```

### React app with TypeScript and Jest

Add the following in your `eslint.config.js`:

```js
import path from 'node:path';
import url from 'node:url';

import { base, browser, jest, node, react, typescript } from '@priver/eslint-config';

const dirname = path.dirname(url.fileURLToPath(import.meta.url));

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  { ignores: ['.next/**/*', 'next-env.d.ts'] }, // files will not be linted
  base,
  browser,
  { files: ['**/*.tsx'], ...react },
  { files: ['**/*.config.js'], ...node },
  { files: ['**/*.ts', '**/*.tsx'], ...typescript },
  { files: ['**/*.test.ts', '**/*.test.tsx'], ...jest },
  {
    languageOptions: {
      parserOptions: {
        project: path.join(dirname, 'tsconfig.json'),
      },
    },
    settings: {
      'jsx-a11y': {
        components: {
          Button: 'button',
          IconButton: 'button',
          Input: 'input',
        },
      },
      'react': { version: '18.2' },
    },
    rules: {
      'n/no-unpublished-import': 'off',
    },
  },
];
```

[eslint]: https://eslint.org/
[eslint-plugin-compat]: https://github.com/amilajack/eslint-plugin-compat
[eslint-plugin-eslint-comments]: https://mysticatea.github.io/eslint-plugin-eslint-comments/
[eslint-plugin-import]: https://github.com/import-js/eslint-plugin-import
[eslint-plugin-jest-formatting]: https://github.com/dangreenisrael/eslint-plugin-jest-formatting
[eslint-plugin-jest]: https://github.com/jest-community/eslint-plugin-jest
[eslint-plugin-jsx-a11y]: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y
[eslint-plugin-n]: https://github.com/weiran-zsd/eslint-plugin-node
[eslint-plugin-react-hooks]: https://reactjs.org/docs/hooks-rules.html
[eslint-plugin-react]: https://github.com/jsx-eslint/eslint-plugin-react
[eslint-plugin-unicorn]: https://github.com/sindresorhus/eslint-plugin-unicorn
[typescript-eslint]: https://typescript-eslint.io/
