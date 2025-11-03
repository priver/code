import * as React from 'react';
import { Button } from '@priver/ui/button';

import preview from '#.storybook/preview.ts';

const VARIANTS = ['primary', 'secondary', 'tertiary'] as const;
const SIZES = ['sm', 'md', 'lg'] as const;

const meta = preview.meta({
  title: 'UI/Button',
  component: Button,
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
    variant: { control: false },
    type: { control: false },
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
    size: { control: false },
    type: { control: false },
  },
  render: (args) => (
    <div className="flex items-center gap-2">
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
    variant: { control: false },
    destructive: { control: false },
    type: { control: false },
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

/**
 * Disabled buttons are non-interactive and use muted colors.
 * Consider avoiding disabled states when possible for better UX.
 */
export const Disabled = meta.story({
  argTypes: {
    children: { control: false },
    variant: { control: false },
    disabled: { control: false },
    type: { control: false },
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

/** Examples of buttons with different content lengths and types. */
export const ContentVariations = meta.story({
  argTypes: {
    children: { control: false },
    type: { control: false },
  },
  render: (args) => (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <Button {...args}>Short</Button>
        <Button {...args}>Medium Length Text</Button>
        <Button {...args}>This is a very long button text that might wrap</Button>
      </div>
      <div className="flex gap-2">
        <Button {...args}>🚀 With Emoji</Button>
        <Button {...args}>Save Changes</Button>
        <Button {...args}>→ Next Step</Button>
      </div>
    </div>
  ),
});

function Matrix(props: {
  title: string;
  destructive?: boolean;
  disabled?: boolean;
}): React.ReactNode {
  const { title, destructive, disabled } = props;

  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      <div className="grid grid-cols-3 gap-2">
        {SIZES.map((size) =>
          VARIANTS.map((variant) => (
            <Button
              key={`${variant}-${size}`}
              variant={variant}
              size={size}
              destructive={destructive}
              disabled={disabled}
            >
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
          )),
        )}
      </div>
    </div>
  );
}

/** Complete matrix of all button combinations for visual testing and regression testing. */
export const AllCombinations = meta.story({
  argTypes: {
    children: { control: false },
    variant: { control: false },
    size: { control: false },
    destructive: { control: false },
    disabled: { control: false },
    type: { control: false },
  },
  render: () => (
    <div className="space-y-8">
      <Matrix title="Normal States" />
      <Matrix title="Destructive States" destructive />
      <Matrix title="Disabled States" disabled />
      <Matrix title="Destructive + Disabled" destructive disabled />
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
    type: { control: false },
  },
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Navigation</h3>
        <div className="flex gap-2">
          <Button variant="primary">Get Started →</Button>
          <Button variant="tertiary">Learn More</Button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Action Buttons</h3>
        <div className="flex justify-end gap-2">
          <Button>Cancel</Button>
          <Button variant="primary">Save</Button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Destructive Actions</h3>
        <div className="flex justify-end gap-2">
          <Button>Cancel</Button>
          <Button destructive>Delete Account</Button>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold">Loading States</h3>
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
