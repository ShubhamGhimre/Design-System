import * as React from 'react'
import { cn } from '../../lib/utils'

export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  role: 'user' | 'assistant' | 'system'
  timestamp?: string | Date
}

export function Message({ role, timestamp, className, children, ...props }: MessageProps) {
  return (
    <div
      className={cn(
        'flex w-full gap-2',
        role === 'user' ? 'justify-end' : 'justify-start',
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          'flex flex-col gap-1 max-w-[80%]',
          role === 'user' ? 'items-end' : 'items-start',
        )}
      >
        {children}
        {timestamp && (
          <span className="text-[10px] text-muted-foreground px-1">
            {typeof timestamp === 'string' ? timestamp : timestamp.toLocaleTimeString()}
          </span>
        )}
      </div>
    </div>
  )
}
