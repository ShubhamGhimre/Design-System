import * as React from 'react'
import { cn } from '../../lib/utils'

export interface DirectionProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'ltr' | 'rtl'
}

export function Direction({ direction = 'ltr', className, children, ...props }: DirectionProps) {
  return (
    <div dir={direction} className={cn('', className)} {...props}>
      {children}
    </div>
  )
}
