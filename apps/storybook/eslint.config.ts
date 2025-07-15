import { defineConfig, globalIgnores } from 'eslint/config';
import { base, browser, node, react, storybook, typescript } from '@priver/eslint-config';

export default defineConfig([
  globalIgnores(['dist/', 'storybook-static/']),
  { files: ['**/*.ts', '**/*.tsx'], extends: [base, browser, typescript] },
  { files: ['**/*.tsx'], extends: [react] },
  { files: ['**/*.stories.ts'], extends: [storybook] },
  { files: ['**/*.config.ts'], extends: [node] },
]);
