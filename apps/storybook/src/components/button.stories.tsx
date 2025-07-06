import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@priver/ui/button';

const meta = { component: Button } satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    children: 'Tertiary',
  },
};

export const Variants = {
  render: () => (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
      </div>
      <div className="flex gap-2">
        <Button variant="primary" disabled>
          Primary
        </Button>
        <Button variant="secondary" disabled>
          Secondary
        </Button>
        <Button variant="tertiary" disabled>
          Tertiary
        </Button>
      </div>
      <div className="flex gap-2">
        <Button variant="primary" destructive>
          Primary
        </Button>
        <Button variant="secondary" destructive>
          Secondary
        </Button>
        <Button variant="tertiary" destructive>
          Tertiary
        </Button>
      </div>
      <div className="flex gap-2">
        <Button variant="primary" destructive disabled>
          Primary
        </Button>
        <Button variant="secondary" destructive disabled>
          Secondary
        </Button>
        <Button variant="tertiary" destructive disabled>
          Tertiary
        </Button>
      </div>
    </div>
  ),
} satisfies Story;
