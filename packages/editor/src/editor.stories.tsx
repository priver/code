import type { Meta, StoryObj } from '@storybook/react-vite';

import { Editor } from './editor.tsx';

const meta = {
  title: 'Editor/Editor',
  component: Editor,
} satisfies Meta<typeof Editor>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Interactive playground to test different editor configurations.
 * Use the controls panel to experiment with different props.
 */
export const Playground: Story = {};
