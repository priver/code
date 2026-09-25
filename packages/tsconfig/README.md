# @priver/tsconfig

[![NPM Version](https://img.shields.io/npm/v/%40priver%2Ftsconfig)](https://www.npmjs.com/package/@priver/tsconfig)
[![NPM License](https://img.shields.io/npm/l/%40priver%2Ftsconfig)](https://opensource.org/licenses/MIT)

Opinionated shared TypeScript configurations.

## Requirements

- TypeScript 7 or later

## Installation

```sh
pnpm add --save-dev @priver/tsconfig typescript
```

## Configurations

| Configuration              | Purpose                                                 |
| -------------------------- | ------------------------------------------------------- |
| `@priver/tsconfig`         | Strict base configuration targeting ES2025 and NodeNext |
| `@priver/tsconfig/library` | Declaration output and composite mode for libraries     |
| `@priver/tsconfig/node`    | JavaScript output for Node.js applications              |
| `@priver/tsconfig/react`   | React JSX and DOM library support                       |
| `@priver/tsconfig/vite`    | Bundler module resolution and preserved module syntax   |

The presets are composable and can be combined in an `extends` array.

## Usage

### Basic Setup

```json
{
  "extends": "@priver/tsconfig",
  "include": ["src/**/*", "tests/**/*", "*.config.ts"]
}
```

### Type-checking and builds

The base preset sets `noEmit: true`. Include source files, tests, and tooling configs such as
`vite.config.ts` to check them with your project's compiler options without generating output.

When `tsc` emits files, included tests and tooling configs also generate JavaScript and, if enabled,
declarations. With `rootDir: "src"`, files outside `src` cause an error. `rootDir` controls the
output structure; it does not filter which files TypeScript includes.

Use a separate `tsconfig.build.json` when the files you want to check differ from the files you want
to emit with tsc.

The shared presets leave `compilerOptions.types` unset because ambient types depend on the consuming
project. Add entries such as `vite/client`, `node`, or `vitest/globals` as needed. When `types` is
specified, TypeScript only includes the listed ambient type packages.

### Node.js applications

Set `"type": "module"` in your application's `package.json` and install Node.js types:

```sh
pnpm add --save-dev @types/node
```

#### Development and type-checking

Create `tsconfig.json` using the base preset, which already provides NodeNext and `noEmit: true`:

```json
{
  "extends": "@priver/tsconfig",
  "compilerOptions": {
    "types": ["node"]
  },
  "include": ["src/**/*", "tests/**/*", "*.config.ts"]
}
```

Check types with:

```sh
pnpm exec tsc
```

For direct TypeScript execution on Node.js 24 or later:

```sh
node --watch src/index.ts
```

Use `.ts` extensions for relative imports, such as `import { app } from './app.ts'`. Apps that run
TypeScript directly only need this config. Node.js does not type-check the code, so run `tsc`
separately.

#### Optional compiled build

To compile with `tsc`, add `tsconfig.build.json`:

```json
{
  "extends": ["@priver/tsconfig", "@priver/tsconfig/node"],
  "compilerOptions": {
    "types": ["node"],
    "rootDir": "src",
    "outDir": "dist"
  },
  "include": ["src/**/*"],
  "exclude": ["src/**/*.test.*", "src/**/*.spec.*", "src/**/__tests__/**"]
}
```

Applying the Node.js preset after the base preset enables JavaScript output and rewrites relative
`.ts` imports to `.js`.

```sh
pnpm exec tsc --project tsconfig.build.json
node dist/index.js
```

#### Subpath imports

To use package-local aliases, add this `imports` mapping to your application's `package.json`:

```json
{
  "imports": {
    "#*.ts": {
      "types": "./src/*.ts",
      "development": "./src/*.ts",
      "default": "./dist/*.js"
    }
  }
}
```

Import a module using its path within `src`:

```ts
import { app } from '#app.ts';
```

For this import, the conditions resolve as follows:

- `types` selects `src/app.ts` for TypeScript type-checking and compilation.
- `development` selects `src/app.ts` when Node.js runs with `--conditions=development`.
- `default` selects `dist/app.js` when Node.js runs without the development condition.

Keep `types` first and `default` last. TypeScript selects `types` automatically, so this mapping
does not need `paths` or `customConditions` in the TypeScript config.

Enable the development condition when running source files directly:

```sh
node --conditions=development --watch src/index.ts
```

For compiled execution, build and run without the development condition:

```sh
pnpm exec tsc --project tsconfig.build.json
node dist/index.js
```

The emitted JavaScript keeps the `#app.ts` specifier. Node.js uses the mapping to load
`dist/app.js`. `rewriteRelativeImportExtensions` only rewrites relative imports, so it does not
change `#` imports.

### Vite and React

```json
{
  "extends": ["@priver/tsconfig", "@priver/tsconfig/vite", "@priver/tsconfig/react"],
  "compilerOptions": {
    "types": ["vite/client"]
  },
  "include": ["src/**/*", "tests/**/*", "*.config.ts"]
}
```

The Vite preset sets `noEmit: true`, so this config checks application code, tests, and tooling
configs without emitting files. Run `pnpm exec tsc` to check types; Vite does not type-check them.
Vite determines bundle contents from entry points and imports. Adding tests or `vite.config.ts` to
`include` does not add them to the bundle or require a separate TypeScript build config.

If tooling configs use Node.js globals such as `process`, install `@types/node` and add `node` to
`types`. Use a separate `tsconfig.node.json` if you want Node.js globals available only to tooling
files rather than frontend code.

### Libraries

This example uses separate configs to check tests and tooling files during development while
emitting only library source. Declaration output and composite mode do not themselves require
separate configs.

Development config (`tsconfig.json`):

```json
{
  "extends": "@priver/tsconfig",
  "include": ["src/**/*", "tests/**/*", "*.config.ts"]
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
  "include": ["src/**/*"],
  "exclude": ["src/**/*.test.*", "src/**/*.spec.*", "src/**/__tests__/**"]
}
```

```sh
pnpm exec tsc
pnpm exec tsc --project tsconfig.build.json
```

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for
details.
