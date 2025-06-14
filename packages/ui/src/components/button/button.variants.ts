import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva('font-semibold border rounded', {
  variants: {
    intent: {
      primary: 'bg-blue-500 text-white border-transparent',
      secondary: 'bg-white text-gray-800 border-gray-400',
    },
    size: {
      small: 'text-sm py-1 px-2',
      medium: 'text-base py-2 px-4',
    },
    // `boolean` variants are also supported!
    disabled: {
      false: undefined,
      true: 'opacity-50 cursor-not-allowed',
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

export type ButtonVariantProps = VariantProps<typeof buttonVariants>;
