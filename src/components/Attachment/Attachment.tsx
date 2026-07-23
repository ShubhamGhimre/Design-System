import * as React from 'react'
import { cn } from '../../lib/utils'

export interface AttachmentProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  size?: number
  icon?: React.ReactNode
  onRemove?: () => void
}

export function Attachment({ name, size, icon, onRemove, className, ...props }: AttachmentProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-2 text-sm',
        className,
      )}
      {...props}
    >
      {icon && <div className="shrink-0 text-muted-foreground">{icon}</div>}
      <div className="flex-1 min-w-0">
        <p className="truncate font-medium text-foreground">{name}</p>
        {size != null && (
          <p className="text-xs text-muted-foreground">{formatSize(size)}</p>
        )}
      </div>
      {onRemove && (
        <button
          onClick={onRemove}
          className="shrink-0 text-muted-foreground hover:text-foreground transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  )
}

function formatSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}
