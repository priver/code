# @priver/oxlint-config

[![NPM Version](https://img.shields.io/npm/v/%40priver%2Foxlint-config)](https://www.npmjs.com/package/@priver/oxlint-config)
[![NPM License](https://img.shields.io/npm/l/%40priver%2Foxlint-config)](https://opensource.org/licenses/MIT)

Opinionated shared Oxlint presets for TypeScript projects.

## Requirements

- Node.js `^22.18.0 || >=24.0.0`
- The Node-based `oxlint` package and `oxlint-tsgolint`
- An `oxlint.config.ts` or `oxlint.config.mts` root configuration

## Installation

```sh
pnpm add --save-dev @priver/oxlint-config oxlint oxlint-tsgolint typescript
```

## Presets

| Export        | Intended environment | Included plugins                                  |
| ------------- | -------------------- | ------------------------------------------------- |
| `reactConfig` | Browser and React    | `import`, `oxc`, `react`, `typescript`, `unicorn` |
| `nodeConfig`  | Node.js              | `import`, `node`, `oxc`, `typescript`, `unicorn`  |

The React preset applies its Node-specific environment, plugins, and rules to
`**/*.config.{ts,mts}`.

## Quick Start

Create `oxlint.config.ts` at the project root:

```ts
import { defineConfig } from 'oxlint';

import { reactConfig } from '@priver/oxlint-config';

export default defineConfig({
  extends: [reactConfig],
  options: {
    reportUnusedDisableDirectives: 'error',
    typeAware: true,
  },
  env: {
    es2026: true,
    browser: true,
  },
});
```

For a Node.js project, import and extend `nodeConfig` instead, then replace `browser: true` with
`node: true`.

## Project Overrides

Add project-specific environments, ignored files, root-only options, and rule overrides to the root
configuration. For example, the quick-start configuration can also include:

```ts
export default defineConfig({
  extends: [reactConfig],
  ignorePatterns: ['dist/**'],
  options: {
    reportUnusedDisableDirectives: 'error',
    typeAware: true,
  },
  env: {
    es2026: true,
    browser: true,
  },
  rules: {
    'react/jsx-no-literals': 'off',
  },
});
```

## Type-Aware Linting

These presets are intended to run with [type-aware linting][type-aware]. It requires TypeScript 7 or
later and `oxlint-tsgolint`. Keep `options.typeAware: true` in the root configuration because Oxlint
does not support this option in imported or nested configurations. Oxlint discovers the applicable
`tsconfig.json` for each file.

To include experimental TypeScript compiler diagnostics in the lint output, also set
`typeCheck: true`:

```ts
options: {
  typeAware: true,
  typeCheck: true,
},
```

## Running Oxlint

Add a script to `package.json`:

```json
{
  "scripts": {
    "lint": "oxlint"
  }
}
```

Run it with `pnpm lint`.

## Known Limitations

- With Oxlint 1.78.0, the version currently supported by this package, top-level `env` values are
  not inherited through `extends`. Declare the ECMAScript and runtime environments in the consuming
  root configuration. This behavior may change in a future Oxlint release.
- `ignorePatterns` and root-only options such as `options.typeAware` and `options.typeCheck` must be
  set in the consuming root configuration.
- Importing these presets requires the Node-based `oxlint` package. The standalone Oxlint binary
  cannot load TypeScript configuration files.
- JSON configuration files cannot import configuration objects from shared packages. See Oxlint's
  [shared configuration documentation][shared-configs].

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for
details.

[shared-configs]: https://oxc.rs/docs/guide/usage/linter/config.html#extend-shared-configs
[type-aware]: https://oxc.rs/docs/guide/usage/linter/type-aware.html
