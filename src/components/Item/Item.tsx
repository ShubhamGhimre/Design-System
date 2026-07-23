import * as React from 'react'
import { cn } from '../../lib/utils'
import type { ReactNode } from 'react'

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  leading?: ReactNode
  trailing?: ReactNode
}

export function Item({ leading, trailing, className, children, ...props }: ItemProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-md px-3 py-2 transition-colors duration-fast',
        className,
      )}
      {...props}
    >
      {leading && <div className="shrink-0 text-muted-foreground">{leading}</div>}
      <div className="flex-1 text-sm text-foreground">{children}</div>
      {trailing && <div className="shrink-0 text-muted-foreground">{trailing}</div>}
    </div>
  )
}
