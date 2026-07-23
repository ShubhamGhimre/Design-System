import type { ReactNode } from 'react'
import { cn } from '../../lib/utils'

export interface EmptyProps {
  icon?: ReactNode
  title?: string
  description?: string
  action?: ReactNode
  className?: string
}

export function Empty({ icon, title, description, action, className }: EmptyProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-2 py-12 text-center', className)}>
      {icon && <div className="text-muted-foreground">{icon}</div>}
      {title && <h3 className="text-lg font-semibold text-foreground">{title}</h3>}
      {description && <p className="max-w-xs text-sm text-muted-foreground">{description}</p>}
      {action && <div className="mt-2">{action}</div>}
    </div>
  )
}
