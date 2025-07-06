import { cva } from 'cva';
import * as React from 'react';

export type ButtonProps = {
  /**
   * Visual hierarchy level of the button, with primary being the most prominent.
   *
   * Use higher hierarchy for main actions, lower for secondary actions.
   *
   * @default "secondary"
   */
  variant?: 'primary' | 'secondary' | 'tertiary';

  /**
   * Physical size of the button, affecting padding, height, and font scaling.
   *
   * Choose based on the button's importance and surrounding content density.
   *
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';

  /**
   * Indicates whether this button performs a destructive or irreversible action.
   *
   * When `true`, applies warning styling to alert users about potentially dangerous operations.
   *
   * @default false
   */
  destructive?: boolean;

  /**
   * Whether the button is disabled and non-interactive.
   *
   * When `true`, the button becomes non-clickable, applies disabled styling, and is excluded from
   * keyboard navigation.
   *
   * **Note**: Disabled buttons should be mostly avoided as they create poor user experience and
   * accessibility issues. Instead, consider keeping buttons enabled and showing validation errors
   * or loading states.
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * HTML button type attribute for form interactions.
   *
   * @default "button"
   */
  type?: 'button' | 'submit' | 'reset';
} & Omit<React.ComponentProps<'button'>, 'disabled' | 'type'>;

const buttonVariants = cva({
  base: 'relative inline-flex shrink-0 items-center justify-center rounded-md font-medium whitespace-nowrap outline-offset-2 outline-primary transition-all select-none focus-visible:outline-2',
  variants: {
    variant: {
      primary: 'shadow-xs inset-ring-1',
      secondary: 'shadow-xs inset-ring-1',
      tertiary: 'bg-primary',
    },
    size: {
      sm: 'h-9 gap-x-1.5 px-3.5 text-sm',
      md: 'h-10 gap-x-1.5 px-4 text-sm',
      lg: 'h-11 gap-x-2 px-4.5 text-base',
      xl: 'h-12 gap-x-2 px-5 text-base',
    },
    destructive: {
      true: '',
    },
    disabled: {
      true: 'cursor-not-allowed',
    },
  },
  compoundVariants: [
    {
      variant: 'primary',
      destructive: false,
      disabled: false,
      className: 'bg-accent text-on-accent hover:bg-accent-hover',
    },
    {
      variant: 'primary',
      destructive: true,
      disabled: false,
      className: 'bg-negative text-on-negative hover:bg-negative-hover',
    },
    {
      variant: 'primary',
      disabled: false,
      className:
        'inset-shadow-skeuo-xs inset-ring-primary-alpha before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-skeuo-border before:mask-bg-border-2',
    },
    {
      variant: 'primary',
      disabled: true,
      className: 'bg-disabled text-disabled inset-ring-disabled',
    },
    {
      variant: 'secondary',
      destructive: false,
      disabled: false,
      className:
        'text-secondary inset-ring-primary hover:bg-control-hover hover:text-secondary-hover',
    },
    {
      variant: 'secondary',
      destructive: true,
      disabled: false,
      className:
        'text-negative inset-ring-negative hover:bg-control-negative-hover hover:text-negative-hover',
    },
    {
      variant: 'secondary',
      disabled: false,
      className: 'bg-control inset-shadow-skeuo-xs',
    },
    {
      variant: 'secondary',
      disabled: true,
      className: 'bg-primary text-disabled inset-ring-disabled',
    },
    {
      variant: 'tertiary',
      destructive: false,
      disabled: false,
      className: 'text-secondary hover:bg-control-hover hover:text-secondary-hover',
    },
    {
      variant: 'tertiary',
      destructive: true,
      disabled: false,
      className: 'text-negative hover:bg-control-negative-hover hover:text-negative-hover',
    },
    {
      variant: 'tertiary',
      disabled: true,
      className: 'text-disabled',
    },
  ],
});

export function Button(props: ButtonProps): React.ReactNode {
  const {
    variant = 'secondary',
    size = 'md',
    destructive = false,
    disabled = false,
    type = 'button',
    className,
    ...buttonProps
  } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonVariants({ variant, size, destructive, disabled, className })}
      {...buttonProps}
    />
  );
}
