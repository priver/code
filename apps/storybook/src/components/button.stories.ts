import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@priver/ui/button';

const meta = { component: Button } satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    intent: 'primary',
    children: 'I am a primary button.',
  },
};

export const Secondary: Story = {
  args: {
    intent: 'secondary',
    children: 'I am a secondary button.',
  },
};
