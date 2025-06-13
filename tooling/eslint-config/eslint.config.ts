import { defineConfig, globalIgnores } from 'eslint/config';

import { base, node, typescript } from './src/index.ts';

export default defineConfig(
  globalIgnores(['dist/']),
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
