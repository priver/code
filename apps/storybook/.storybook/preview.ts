import type { Preview } from '@storybook/react-vite';

import '../src/main.css';

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
};

export default preview;
