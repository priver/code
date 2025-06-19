import { defineConfig, globalIgnores } from 'eslint/config';

import { base, node, typescript } from './src/index.ts';

export default defineConfig(globalIgnores(['dist/']), {
  files: ['**/*.ts'],
  extends: [base, node, typescript],
  languageOptions: {
    parserOptions: {
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
