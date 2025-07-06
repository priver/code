import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react-vite';

import '@fontsource-variable/inter/opsz.css';
import '@fontsource-variable/jetbrains-mono';
import '../src/style.css';

const preview: Preview = {
  parameters: {
    a11y: {
      test: 'todo',
    },
    docs: {
      toc: true,
    },
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
};

export default preview;
