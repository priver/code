# @priver/tsconfig

[![NPM Version](https://img.shields.io/npm/v/%40priver%2Ftsconfig)](https://www.npmjs.com/package/@priver/tsconfig)
[![NPM License](https://img.shields.io/npm/l/%40priver%2Ftsconfig)](https://opensource.org/licenses/MIT)

Opinionated shared TypeScript configurations.

## Requirements

- TypeScript 7

## Installation

```sh
pnpm add --save-dev @priver/tsconfig typescript@^7
```

## Configurations

| Configuration              | Purpose                                                 |
| -------------------------- | ------------------------------------------------------- |
| `@priver/tsconfig`         | Strict base configuration targeting ES2025 and NodeNext |
| `@priver/tsconfig/library` | Declaration output and composite mode for libraries     |
| `@priver/tsconfig/react`   | React JSX and DOM library support                       |
| `@priver/tsconfig/vite`    | Bundler module resolution and preserved module syntax   |

The presets are composable and can be combined in an `extends` array.

## Usage

### Basic Setup

```json
{
  "extends": "@priver/tsconfig",
  "include": ["src/**/*", "*.config.ts"]
}
```

### Vite and React

```json
{
  "extends": ["@priver/tsconfig", "@priver/tsconfig/vite", "@priver/tsconfig/react"],
  "compilerOptions": {
    "types": ["vite/client"]
  },
  "include": ["src/**/*", "*.config.ts"]
}
```

The shared presets intentionally leave `compilerOptions.types` unset because ambient types depend on
the consuming project. Add entries such as `vite/client`, `node`, or `vitest/globals` to the project
configuration as needed. When `types` is specified, TypeScript only includes the listed ambient type
packages.

### Libraries

Development config (`tsconfig.json`):

```json
{
  "extends": "@priver/tsconfig",
  "include": ["src/**/*", "*.config.ts"]
}
```

Build config (`tsconfig.build.json`):

```json
{
  "extends": ["@priver/tsconfig", "@priver/tsconfig/library"],
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "dist"
  },
  "include": ["src/**/*"]
}
```

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for
details.
