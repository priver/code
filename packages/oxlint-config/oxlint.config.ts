import { defineConfig } from 'oxlint';

import { nodeConfig } from './src/index.ts';

export default defineConfig({
  extends: [nodeConfig],
  ignorePatterns: ['dist/**'],
  env: {
    es2026: true,
    node: true,
  },
});
