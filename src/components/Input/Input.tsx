import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

export const inputVariants = cva(
  'flex w-full rounded-md border border-input bg-background text-foreground transition-[border-color,box-shadow] duration-normal ease-standard placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60',
  {
    variants: {
      size: {
        sm: 'h-8 px-2 text-xs',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
      },
      hasError: {
        true: 'border-destructive focus-visible:ring-destructive',
      },
    },
    defaultVariants: {
      size: 'md',
      hasError: false,
    },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  leadingIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, size, hasError, leadingIcon, type = 'text', ...props },
  ref,
) {
  return (
    <div className="relative">
      {leadingIcon ? (
        <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3 text-muted-foreground">
          {leadingIcon}
        </span>
      ) : null}
      <input
        ref={ref}
        type={type}
        className={cn(inputVariants({ size, hasError }), leadingIcon && 'ps-10', className)}
        {...props}
      />
    </div>
  );
});
