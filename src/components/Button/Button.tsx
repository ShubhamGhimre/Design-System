import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { LoaderCircle } from '../../icons';
import { cn } from '../../lib/utils';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md border font-medium text-sm transition-[background-color,box-shadow,color,transform] duration-normal ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60',
  {
    variants: {
      variant: {
        primary:
          'border-transparent bg-primary text-primary-foreground shadow-xs hover:shadow-md',
        secondary:
          'border-border bg-background text-foreground shadow-xs hover:bg-muted',
        outline: 'border-border bg-background text-foreground hover:bg-muted',
        ghost: 'border-transparent bg-transparent text-foreground hover:bg-muted',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground shadow-xs hover:shadow-md',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-5 text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  iconOnly?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    className,
    children,
    disabled,
    iconOnly = false,
    loading = false,
    leadingIcon,
    trailingIcon,
    size,
    type = 'button',
    variant,
    ...props
  },
  ref,
) {
  const isDisabled = disabled || loading;
  const showText = !iconOnly && children != null;
  const showLeadingIcon = !iconOnly && leadingIcon != null;
  const showTrailingIcon = !iconOnly && trailingIcon != null;
  const iconClassName = 'size-4 shrink-0';

  return (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ size, variant }), iconOnly && 'aspect-square px-0', className)}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      data-loading={loading || undefined}
      {...props}
    >
      {loading ? <LoaderCircle className={cn(iconClassName, 'animate-spin')} aria-hidden="true" /> : null}
      {!loading && showLeadingIcon ? (
        <span className={iconClassName} aria-hidden="true">
          {leadingIcon}
        </span>
      ) : null}
      {showText ? <span>{children}</span> : null}
      {!loading && showTrailingIcon ? (
        <span className={iconClassName} aria-hidden="true">
          {trailingIcon}
        </span>
      ) : null}
      {iconOnly && !loading && leadingIcon ? (
        <span className={iconClassName} aria-hidden="true">
          {leadingIcon}
        </span>
      ) : null}
    </button>
  );
});