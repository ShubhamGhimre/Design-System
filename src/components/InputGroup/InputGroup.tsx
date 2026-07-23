import * as React from 'react'
import { cn } from '../../lib/utils'
import type { ReactNode } from 'react'

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  startAddon?: ReactNode
  endAddon?: ReactNode
}

export function InputGroup({ startAddon, endAddon, className, children, ...props }: InputGroupProps) {
  return (
    <div className={cn('flex items-center', className)} {...props}>
      {startAddon && (
        <div className="inline-flex items-center rounded-s-md border border-e-0 border-input bg-muted px-3 text-sm text-muted-foreground">
          {startAddon}
        </div>
      )}
      <div className="flex-1 [&>input]:rounded-none [&>input]:focus-visible:z-10">
        {children}
      </div>
      {endAddon && (
        <div className="inline-flex items-center rounded-e-md border border-s-0 border-input bg-muted px-3 text-sm text-muted-foreground">
          {endAddon}
        </div>
      )}
    </div>
  )
}
