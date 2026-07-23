import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

export const buttonGroupVariants = cva('inline-flex', {
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    attached: {
      true: '[&>:not(:first-child):not(:last-child)]:rounded-none',
      false: 'gap-2',
    },
  },
  defaultVariants: { orientation: 'horizontal', attached: true },
})

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {}

export function ButtonGroup({ className, orientation, attached, ...props }: ButtonGroupProps) {
  return (
    <div
      className={cn(
        buttonGroupVariants({ orientation, attached }),
        attached && orientation === 'horizontal' && '[&>:first-child]:rounded-e-none [&>:last-child]:rounded-s-none',
        attached && orientation === 'vertical' && '[&>:first-child]:rounded-b-none [&>:last-child]:rounded-t-none',
        className,
      )}
      {...props}
    />
  )
}
