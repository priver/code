import { Button as ButtonPrimitive } from '@base-ui/react/button';
import { cva } from 'cva';
import * as React from 'react';

export type ButtonProps = {
  /**
   * HTML button type attribute for form interactions.
   *
   * @default "button"
   */
  type?: 'button' | 'submit' | 'reset';

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
  size?: 'xs' | 'sm' | 'md' | 'lg';

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
   * Icon component to render alongside the button label.
   *
   * When the button has no label it to icon-only sizing.
   */
  icon?: React.ComponentType<{ size?: number | string } & React.ComponentProps<'svg'>>;

  /**
   * Placement of the icon relative to the label.
   *
   * @default "start"
   */
  iconPosition?: 'start' | 'end';
} & Omit<React.ComponentProps<'button'>, 'disabled' | 'type'>;

const buttonVariants = cva({
  base: 'relative inline-flex shrink-0 items-center justify-center rounded-lg font-medium whitespace-nowrap outline-offset-2 transition-all select-none focus-visible:outline-2 active:enabled:translate-y-px',
  variants: {
    variant: {
      'primary':
        'bg-accent-solid text-on-accent shadow-xs ring-1 inset-shadow-skeumorphic ring-primary-alpha outline-accent ring-inset before:absolute before:inset-px before:rounded-lg-minus-px before:border before:border-skeumorphic before:mask-b-from-0% hover:bg-accent-solid-hover',
      'secondary':
        'bg-primary text-secondary shadow-xs ring-1 inset-shadow-skeumorphic ring-primary outline-accent ring-inset hover:bg-primary-hover hover:text-secondary-hover',
      'tertiary': 'text-secondary outline-accent hover:bg-primary-hover hover:text-secondary-hover',
      'primary-destructive':
        'bg-negative-solid text-on-negative shadow-xs ring-1 inset-shadow-skeumorphic ring-primary-alpha outline-negative ring-inset before:absolute before:inset-px before:rounded-lg-minus-px before:border before:border-skeumorphic before:mask-b-from-0% hover:bg-negative-solid-hover',
      'secondary-destructive':
        'bg-primary text-negative shadow-xs ring-1 inset-shadow-skeumorphic ring-negative outline-negative ring-inset hover:bg-negative-hover hover:text-negative-hover',
      'tertiary-destructive':
        'text-negative outline-negative hover:bg-negative-hover hover:text-negative-hover',
      'primary-disabled': 'bg-disabled text-disabled shadow-xs ring-1 ring-disabled ring-inset',
      'secondary-disabled': 'bg-primary text-disabled shadow-xs ring-1 ring-disabled ring-inset',
      'tertiary-disabled': 'text-disabled',
    },
    size: {
      'xs': 'h-8 gap-1 px-2.5 text-sm',
      'sm': 'h-9 gap-1 px-3 text-sm',
      'md': 'h-10 gap-1 px-3.5 text-sm',
      'lg': 'h-11 gap-1.5 px-4 text-base',
      'xs-icon': 'size-8',
      'sm-icon': 'size-9',
      'md-icon': 'size-10',
      'lg-icon': 'size-11',
    },
  },
});

const iconSize = {
  xs: 16,
  sm: 16,
  md: 18,
  lg: 20,
} as const;

/**
 * Button component implementing the
 * [WAI-ARIA Button Pattern⁠](https://www.w3.org/WAI/ARIA/apg/patterns/button/).
 */
export function Button(props: ButtonProps): React.ReactNode {
  const {
    variant = 'secondary',
    size = 'md',
    destructive = false,
    disabled = false,
    type = 'button',
    icon: Icon,
    iconPosition = 'start',
    className,
    children,
    ...buttonProps
  } = props;

  const finalVariant =
    disabled ? (`${variant}-disabled` as const)
    : destructive ? (`${variant}-destructive` as const)
    : variant;

  const finalSize = Icon && !children ? (`${size}-icon` as const) : size;

  const icon =
    Icon ?
      <Icon aria-hidden size={iconSize[size]} className="pointer-events-none shrink-0" />
    : undefined;

  return (
    <ButtonPrimitive
      type={type}
      disabled={disabled}
      className={buttonVariants({ variant: finalVariant, size: finalSize, className })}
      {...buttonProps}
    >
      {iconPosition === 'start' && icon}
      {children ?
        <span className="px-0.5">{children}</span>
      : undefined}
      {iconPosition === 'end' && icon}
    </ButtonPrimitive>
  );
}
