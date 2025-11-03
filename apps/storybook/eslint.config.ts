import type { ESLint } from 'eslint';
import storybookPlugin from 'eslint-plugin-storybook';
import { defineConfig, globalIgnores } from 'eslint/config';
import { base, browser, node, react, typescript } from '@priver/eslint-config';

export default defineConfig([
  globalIgnores(['dist/', 'storybook-static/', '!.storybook']),
  {
    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- https://github.com/typescript-eslint/typescript-eslint/issues/10899
      storybook: storybookPlugin as unknown as ESLint.Plugin,
    },
  },
  { files: ['**/*.ts', '**/*.tsx'], extends: [base, browser, typescript] },
  { files: ['**/*.tsx'], extends: [react] },
  { files: ['**/*.config.ts'], extends: [node] },
  {
    files: ['**/*.stories.ts', '**/*.stories.tsx'],
    rules: {
      'storybook/await-interactions': 'error',
      'storybook/context-in-play-function': 'error',
      'storybook/csf-component': 'error',
      'storybook/default-exports': 'error',
      'storybook/hierarchy-separator': 'error',
      'storybook/meta-inline-properties': 'off',
      'storybook/meta-satisfies-type': 'off',
      'storybook/no-redundant-story-name': 'error',
      'storybook/no-renderer-packages': 'error',
      'storybook/no-stories-of': 'error',
      'storybook/no-title-property-in-meta': 'error',
      'storybook/prefer-pascal-case': 'error',
      'storybook/story-exports': 'error',
      'storybook/use-storybook-expect': 'error',
      'storybook/use-storybook-testing-library': 'error',
    },
  },
  {
    files: ['.storybook/main.ts'],
    rules: {
      'storybook/no-uninstalled-addons': 'error',
    },
  },
]);
