import {
  ArrowRightIcon,
  CircleArrowDownIcon,
  CircleArrowLeftIcon,
  CircleArrowRightIcon,
  PlusIcon,
  ShapesIcon,
  Trash2Icon,
} from 'lucide-react';
import * as React from 'react';
import { Button, type ButtonProps } from '@priver/ui/button';

import preview from '#.storybook/preview.ts';

const VARIANTS = ['primary', 'secondary', 'tertiary'] as const;

const SIZES = ['xs', 'sm', 'md', 'lg'] as const;

const ICONS = {
  start: CircleArrowLeftIcon,
  end: CircleArrowRightIcon,
  only: CircleArrowDownIcon,
} as const;

const ICON_OPTIONS = {
  None: undefined,
  PlusIcon,
  ShapesIcon,
  Trash2Icon,
} as const;

const meta = preview.meta({
  title: 'UI/Button',
  component: Button,
  argTypes: {
    icon: {
      options: Object.keys(ICON_OPTIONS),
      mapping: ICON_OPTIONS,
      control: { type: 'radio' },
    },
  },
});

/**
 * Interactive playground to test different button configurations.
 * Use the controls panel to experiment with different props.
 */
export const Playground = meta.story({
  args: {
    children: 'Button',
  },
});

/**
 * The three visual hierarchy levels: primary for main actions, secondary for supporting actions,
 * and tertiary for minimal emphasis.
 */
export const Variants = meta.story({
  argTypes: {
    children: { control: false },
    type: { control: false },
    variant: { control: false },
  },
  render: (args) => (
    <div className="flex gap-2">
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="tertiary">
        Tertiary
      </Button>
    </div>
  ),
});

/** The three physical sizes: small, medium, and large. */
export const Sizes = meta.story({
  argTypes: {
    children: { control: false },
    type: { control: false },
    size: { control: false },
  },
  render: (args) => (
    <div className="flex items-center gap-2">
      <Button {...args} size="xs">
        Extra small
      </Button>
      <Button {...args} size="sm">
        Small
      </Button>
      <Button {...args} size="md">
        Medium
      </Button>
      <Button {...args} size="lg">
        Large
      </Button>
    </div>
  ),
});

/** Destructive buttons use warning colors to indicate potentially dangerous operations. */
export const Destructive = meta.story({
  argTypes: {
    children: { control: false },
    type: { control: false },
    variant: { control: false },
    destructive: { control: false },
  },
  render: (args) => (
    <div className="flex gap-2">
      <Button {...args} variant="primary" destructive>
        Delete Account
      </Button>
      <Button {...args} variant="secondary" destructive>
        Remove Item
      </Button>
      <Button {...args} variant="tertiary" destructive>
        Cancel Order
      </Button>
    </div>
  ),
});

/** Icon placement options: start, end, and icon-only button. */
export const Icons = meta.story({
  argTypes: {
    children: { control: false },
    type: { control: false },
    icon: { control: false },
    iconPosition: { control: false },
  },
  render: (args) => (
    <div className="flex gap-2">
      <Button {...args} icon={ShapesIcon}>
        Start
      </Button>
      <Button {...args} icon={ArrowRightIcon} iconPosition="end">
        End
      </Button>
      <Button {...args} icon={CircleArrowDownIcon} />
    </div>
  ),
});

/**
 * Disabled buttons are non-interactive and use muted colors.
 * Consider avoiding disabled states when possible for better UX.
 */
export const Disabled = meta.story({
  argTypes: {
    children: { control: false },
    type: { control: false },
    variant: { control: false },
    disabled: { control: false },
  },
  render: (args) => (
    <div className="flex gap-2">
      <Button {...args} variant="primary" disabled>
        Primary
      </Button>
      <Button {...args} variant="secondary" disabled>
        Secondary
      </Button>
      <Button {...args} variant="tertiary" disabled>
        Tertiary
      </Button>
    </div>
  ),
});

function VariantsMatrix(props: {
  size: ButtonProps['size'];
  destructive?: boolean;
  disabled?: boolean;
  icon?: 'start' | 'end' | 'only';
}): React.ReactNode {
  const { size, destructive, disabled, icon } = props;

  return (
    <>
      {VARIANTS.map((variant) => (
        <Button
          key={variant}
          variant={variant}
          size={size}
          destructive={destructive}
          disabled={disabled}
          icon={icon ? ICONS[icon] : undefined}
          iconPosition={icon === 'only' ? undefined : icon}
        >
          {icon === 'only' ? undefined : variant.charAt(0).toUpperCase() + variant.slice(1)}
        </Button>
      ))}
    </>
  );
}

function StatesMatrix(props: {
  size: ButtonProps['size'];
  destructive?: boolean;
  icon?: 'start' | 'end' | 'only';
}): React.ReactNode {
  const { size, destructive, icon } = props;

  return (
    <div className="flex gap-2">
      <VariantsMatrix size={size} destructive={destructive} icon={icon} />
      <VariantsMatrix size={size} destructive={destructive} icon={icon} disabled />
    </div>
  );
}

function SizesMatrix(props: {
  destructive?: boolean;
  icon?: 'start' | 'end' | 'only';
}): React.ReactNode {
  const { destructive, icon } = props;

  return SIZES.map((size) => (
    <StatesMatrix key={size} size={size} icon={icon} destructive={destructive} />
  ));
}

function Matrix(props: { title: string; icon?: 'start' | 'end' | 'only' }): React.ReactNode {
  const { title, icon } = props;

  return (
    <div>
      <h3 className="mb-2 text-lg font-medium">{title}</h3>
      <div className="flex flex-col gap-2">
        <SizesMatrix icon={icon} />
        <SizesMatrix icon={icon} destructive />
      </div>
    </div>
  );
}

/** Complete matrix of all button combinations for visual testing and regression testing. */
export const AllCombinations = meta.story({
  argTypes: {
    children: { control: false },
    type: { control: false },
    variant: { control: false },
    size: { control: false },
    destructive: { control: false },
    disabled: { control: false },
    icon: { control: false },
    iconPosition: { control: false },
  },
  render: () => (
    <div className="space-y-8">
      <Matrix title="Variants & Sizes" />
      <Matrix title="Icon Start" icon="start" />
      <Matrix title="Icon End" icon="end" />
      <Matrix title="Icon Only" icon="only" />
    </div>
  ),
});

/** Examples of buttons in form context with different type attributes. */
export const FormButtons = meta.story({
  argTypes: {
    children: { control: false },
    variant: { control: false },
    type: { control: false },
  },
  render: (args) => (
    <form
      className="w-96 space-y-4 rounded-lg border border-primary p-6"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div>
        <label className="mb-2 block text-sm font-medium">Email</label>
        <input
          type="email"
          className="w-full rounded-md border border-primary px-3 py-2"
          placeholder="Enter your email"
        />
      </div>
      <div className="flex justify-end gap-2">
        <Button {...args} type="reset" variant="secondary">
          Cancel
        </Button>
        <Button {...args} type="submit" variant="primary">
          Submit
        </Button>
      </div>
    </form>
  ),
});

/** Real-world usage examples showing how buttons work together in different contexts. */
export const UsageExamples = meta.story({
  argTypes: {
    children: { control: false },
    variant: { control: false },
    size: { control: false },
    destructive: { control: false },
    disabled: { control: false },
    icon: { control: false },
    iconPosition: { control: false },
    type: { control: false },
  },
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-2 text-lg font-medium">Navigation</h3>
        <div className="flex gap-2">
          <Button variant="primary" size="lg" icon={ArrowRightIcon} iconPosition="end">
            Get Started
          </Button>
          <Button variant="tertiary" size="lg">
            Learn More
          </Button>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-medium">Action Buttons</h3>
        <div className="flex justify-end gap-2">
          <Button>Cancel</Button>
          <Button variant="primary">Save</Button>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-medium">Destructive Actions</h3>
        <div className="flex justify-end gap-2">
          <Button>Cancel</Button>
          <Button destructive>Delete Account</Button>
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-lg font-medium">Loading States</h3>
        <div className="flex justify-end gap-2">
          <Button disabled>Cancel</Button>
          <Button variant="primary" disabled>
            Saving...
          </Button>
        </div>
      </div>
    </div>
  ),
});
