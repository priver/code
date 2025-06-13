import { defineConfig } from 'eslint/config';

import { base, node, typescript } from './src/index.ts';

export default defineConfig(
  base,
  {
    files: ['**/*.ts'],
    extends: [typescript],
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  node,
);
