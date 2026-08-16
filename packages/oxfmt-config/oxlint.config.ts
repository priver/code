import { defineConfig } from 'oxlint';

import { nodeConfig } from '@priver/oxlint-config';

export default defineConfig({
  extends: [nodeConfig],
  ignorePatterns: ['dist/**'],
  env: {
    es2026: true,
    node: true,
  },
});
