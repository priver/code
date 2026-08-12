# @priver/oxlint-config

Opinionated shared Oxlint presets for JavaScript and TypeScript projects in this monorepo. This is a
private, monorepo-only workspace package and is not published to npm.

## Requirements

- Node.js `^22.18.0 || >=24.0.0`
- The Node-based `oxlint` package and `oxlint-tsgolint`
- An `oxlint.config.ts` or `oxlint.config.mts` root configuration

## Installation

Add the workspace package and its linting dependencies to the root `package.json`:

```json
{
  "devDependencies": {
    "@priver/oxlint-config": "workspace:*",
    "oxlint": "catalog:",
    "oxlint-tsgolint": "catalog:",
    "typescript": "catalog:"
  }
}
```

```sh
pnpm install
```

## Presets

| Export        | Intended environment | Included plugins                                  | Additional behavior                                                  |
| ------------- | -------------------- | ------------------------------------------------- | -------------------------------------------------------------------- |
| `reactConfig` | Browser and React    | `import`, `oxc`, `react`, `typescript`, `unicorn` | Applies Node rules to `**/*.config.ts`; `no-console` remains enabled |
| `nodeConfig`  | Node.js              | `import`, `node`, `oxc`, `typescript`, `unicorn`  | Allows `console`                                                     |

The React preset's config-file override matches only `**/*.config.ts`. Other config extensions do
not receive its Node-specific environment, plugins, or rules.

## Quick Start

Create `oxlint.config.ts` at the monorepo root:

```ts
import { defineConfig } from 'oxlint';

import { reactConfig } from '@priver/oxlint-config';

export default defineConfig({
  extends: [reactConfig],
  options: {
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
    "lint": "oxlint ."
  }
}
```

Run it with `pnpm lint`.

## Known Limitations

- With Oxlint 1.77.0, the version currently used by this workspace, top-level `env` values are not
  inherited through `extends`. Declare the ECMAScript and runtime environments in the consuming root
  configuration. This behavior may change in a future Oxlint release.
- `ignorePatterns` and root-only options such as `options.typeAware` and `options.typeCheck` must be
  set in the consuming root configuration.
- Importing these presets requires the Node-based `oxlint` package. The standalone Oxlint binary
  cannot load TypeScript configuration files.
- JSON configuration files cannot import configuration objects from workspace packages. See Oxlint's
  [shared configuration documentation][shared-configs].

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for
details.

[shared-configs]: https://oxc.rs/docs/guide/usage/linter/config.html#extend-shared-configs
[type-aware]: https://oxc.rs/docs/guide/usage/linter/type-aware.html
