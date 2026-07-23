import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

export const bubbleVariants = cva(
  'rounded-2xl px-4 py-2 text-sm leading-relaxed break-words',
  {
    variants: {
      role: {
        user: 'bg-primary text-primary-foreground rounded-br-sm',
        assistant: 'bg-muted text-foreground rounded-bl-sm',
        system: 'bg-muted/50 text-muted-foreground border border-border italic rounded-xl',
      },
    },
    defaultVariants: { role: 'assistant' },
  },
)

export interface BubbleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bubbleVariants> {
  role?: 'user' | 'assistant' | 'system'
}

export function Bubble({ role = 'assistant', className, ...props }: BubbleProps) {
  return <div className={cn(bubbleVariants({ role }), className)} {...props} />
}
