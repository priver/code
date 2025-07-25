import { defineConfig, globalIgnores } from 'eslint/config';
import { base, browser, node, react, typescript } from '@priver/eslint-config';

export default defineConfig([
  globalIgnores(['dist/']),
  { files: ['**/*.ts', '**/*.tsx'], extends: [base, browser, typescript] },
  { files: ['**/*.tsx'], extends: [react] },
  { files: ['**/*.config.ts'], extends: [node] },
]);
