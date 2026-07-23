import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'
import type { ReactNode } from 'react'

export const alertVariants = cva(
  'relative flex items-start gap-3 rounded-lg border p-4',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground border-border',
        info: 'border-info/50 bg-info/10 text-info-foreground [&_svg]:text-info',
        success: 'border-success/50 bg-success/10 text-success-foreground [&_svg]:text-success',
        warning: 'border-warning/50 bg-warning/10 text-warning-foreground [&_svg]:text-warning',
        destructive: 'border-destructive/50 bg-destructive/10 text-destructive-foreground [&_svg]:text-destructive',
      },
    },
    defaultVariants: { variant: 'default' },
  },
)

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  icon?: ReactNode
  title?: string
}

export function Alert({ className, variant, icon, title, children, ...props }: AlertProps) {
  return (
    <div className={cn(alertVariants({ variant }), className)} {...props}>
      {icon && <div className="mt-0.5 shrink-0">{icon}</div>}
      <div className="flex-1">
        {title && <h5 className="mb-1 text-sm font-semibold">{title}</h5>}
        <div className="text-sm text-muted-foreground [&_p]:leading-relaxed">{children}</div>
      </div>
    </div>
  )
}
