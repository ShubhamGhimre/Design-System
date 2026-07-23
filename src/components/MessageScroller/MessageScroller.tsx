import * as React from 'react'
import { cn } from '../../lib/utils'

export interface MessageScrollerProps extends React.HTMLAttributes<HTMLDivElement> {
  autoScroll?: boolean
}

export function MessageScroller({ autoScroll = true, className, children, ...props }: MessageScrollerProps) {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!autoScroll || !ref.current) return
    const observer = new MutationObserver(() => {
      ref.current?.scrollTo({ top: ref.current.scrollHeight, behavior: 'smooth' })
    })
    observer.observe(ref.current, { childList: true, subtree: true })
    return () => observer.disconnect()
  }, [autoScroll])

  return (
    <div
      ref={ref}
      className={cn('flex flex-col gap-3 overflow-y-auto p-4', className)}
      {...props}
    >
      {children}
    </div>
  )
}
