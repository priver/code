import * as React from 'react';

import { buttonVariants, type ButtonVariantProps } from './button.variants.ts';

export type ButtonProps = Omit<React.ComponentProps<'button'>, 'disabled'> & ButtonVariantProps;

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
