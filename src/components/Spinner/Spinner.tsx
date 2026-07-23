import { cva, type VariantProps } from 'class-variance-authority'
import { LoaderCircle } from '../../icons'
import { cn } from '../../lib/utils'

export const spinnerVariants = cva('animate-spin text-muted-foreground', {
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-5',
      lg: 'size-8',
    },
  },
  defaultVariants: { size: 'md' },
})

export interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string
}

export function Spinner({ size, className }: SpinnerProps) {
  return <LoaderCircle className={cn(spinnerVariants({ size }), className)} aria-hidden="true" />
}
