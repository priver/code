import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
  framework: '@storybook/react-vite',
  core: {
    disableTelemetry: true,
    disableWhatsNewNotifications: true,
  },
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y', '@storybook/addon-themes'],
};

export default config;
