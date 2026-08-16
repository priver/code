# @priver/oxfmt-config

[![NPM Version](https://img.shields.io/npm/v/%40priver%2Foxfmt-config)](https://www.npmjs.com/package/@priver/oxfmt-config)
[![NPM License](https://img.shields.io/npm/l/%40priver%2Foxfmt-config)](https://opensource.org/licenses/MIT)

Opinionated shared Oxfmt configuration.

## Requirements

- Node.js `^20.19.0 || >=22.12.0`
- The Node-based `oxfmt` package
- An `oxfmt.config.ts` or `oxfmt.config.mts` root configuration

## Installation

```sh
pnpm add --save-dev @priver/oxfmt-config oxfmt
```

## Quick Start

Create `oxfmt.config.ts` at the project root:

```ts
import { defineConfig } from 'oxfmt';

import config from '@priver/oxfmt-config';

export default defineConfig({
  ...config,
});
```

Oxfmt does not provide an `extends` option, so shared settings are composed with object spread.

## Tailwind CSS

Tailwind CSS paths and helper functions are project-specific and are not included in the shared
configuration. Add them in the root configuration for a Tailwind CSS v4 project:

```ts
export default defineConfig({
  ...config,
  sortTailwindcss: {
    stylesheet: './src/style.css',
    functions: ['cva', 'cx'],
  },
});
```

For Tailwind CSS v3, point Oxfmt to the project configuration instead:

```ts
export default defineConfig({
  ...config,
  sortTailwindcss: {
    config: './tailwind.config.ts',
    functions: ['clsx', 'cn'],
  },
});
```

Paths are resolved relative to the consuming `oxfmt.config.ts` file.

## Project Settings

Keep ignored files, file-specific overrides, and other project paths in the root configuration:

```ts
export default defineConfig({
  ...config,
  ignorePatterns: ['dist/**'],
});
```

## Running Oxfmt

Add scripts to `package.json`:

```json
{
  "scripts": {
    "format": "oxfmt",
    "check-format": "oxfmt --check"
  }
}
```

Run `pnpm run format` to write changes or `pnpm run check-format` in CI.

## License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for
details.
