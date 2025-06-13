import type { ESLint, Linter } from 'eslint';
import storybookPlugin from 'eslint-plugin-storybook';

export const storybook = {
  plugins: {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- https://github.com/typescript-eslint/typescript-eslint/issues/10899
    storybook: storybookPlugin as unknown as ESLint.Plugin,
  },
  rules: {
    'storybook/await-interactions': 'error',
    'storybook/context-in-play-function': 'error',
    'storybook/csf-component': 'error',
    'storybook/default-exports': 'error',
    'storybook/hierarchy-separator': 'error',
    'storybook/meta-inline-properties': 'error',
    'storybook/meta-satisfies-type': 'error',
    'storybook/no-redundant-story-name': 'error',
    'storybook/no-renderer-packages': 'error',
    'storybook/no-stories-of': 'error',
    'storybook/no-title-property-in-meta': 'error',
    'storybook/no-uninstalled-addons': 'off',
    'storybook/prefer-pascal-case': 'error',
    'storybook/story-exports': 'error',
    'storybook/use-storybook-expect': 'error',
    'storybook/use-storybook-testing-library': 'error',
  },
} as const satisfies Linter.Config;
