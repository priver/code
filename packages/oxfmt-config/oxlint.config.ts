import { nodeConfig } from '@priver/oxlint-config';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [nodeConfig],
  ignorePatterns: ['dist/**'],
  env: {
    es2026: true,
    node: true,
  },
});
