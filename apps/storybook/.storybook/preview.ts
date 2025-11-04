import addonA11y from '@storybook/addon-a11y';
import addonDocs from '@storybook/addon-docs';
import addonThemes, { withThemeByClassName } from '@storybook/addon-themes';
import { definePreview } from '@storybook/react-vite';

import theme from './theme.ts';

import '@fontsource-variable/inter/opsz.css';
import '@fontsource-variable/jetbrains-mono';
import '#src/style.css';

export default definePreview({
  addons: [addonA11y(), addonDocs(), addonThemes()],
  parameters: {
    layout: 'centered',
    docs: { theme, toc: true },
    a11y: { test: 'todo' },
  },
  tags: ['autodocs'],
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
});
