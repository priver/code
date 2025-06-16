import { cva } from 'cva';
import * as React from 'react';

export type ButtonProps = {
  intent?: 'primary' | 'secondary';
  size?: 'small' | 'medium';
  disabled?: boolean;
} & Omit<React.ComponentProps<'button'>, 'disabled'>;

const buttonVariants = cva({
  base: 'rounded border font-semibold',
  variants: {
    intent: {
      primary: 'border-transparent bg-blue-500 text-white',
      secondary: 'border-gray-400 bg-white text-gray-800',
    },
    size: {
      small: 'px-2 py-1 text-sm',
      medium: 'px-4 py-2 text-base',
    },
    disabled: {
      false: undefined,
      true: 'cursor-not-allowed opacity-50',
    },
  },
  compoundVariants: [
    {
      intent: 'primary',
      disabled: false,
      className: 'hover:bg-blue-600',
    },
    {
      intent: 'secondary',
      disabled: false,
      className: 'hover:bg-gray-100',
    },
    {
      intent: 'primary',
      size: 'medium',
      className: 'uppercase',
    },
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
    disabled: false,
  },
});

export function Button(props: ButtonProps): React.ReactNode {
  const { className, disabled, intent, size, type = 'button', ...buttonProps } = props;

  return (
    <button
      type={type}
      disabled={disabled ?? undefined}
      className={buttonVariants({ intent, size, disabled, className })}
      {...buttonProps}
    />
  );
}
