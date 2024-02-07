import storybookPlugin from 'eslint-plugin-storybook';

export const storybook = {
  plugins: {
    storybook: storybookPlugin,
  },
  rules: {
    'storybook/await-interactions': 'error',
    'storybook/context-in-play-function': 'error',
    'storybook/csf-component': 'error',
    'storybook/default-exports': 'error',
    'storybook/hierarchy-separator': 'error',
    'storybook/meta-inline-properties': 'error',
    'storybook/no-redundant-story-name': 'error',
    'storybook/no-stories-of': 'error',
    'storybook/no-title-property-in-meta': 'off',
    'storybook/no-uninstalled-addons': 'off',
    'storybook/prefer-pascal-case': 'error',
    'storybook/story-exports': 'error',
    'storybook/use-storybook-expect': 'error',
    'storybook/use-storybook-testing-library': 'error',
  },
};
