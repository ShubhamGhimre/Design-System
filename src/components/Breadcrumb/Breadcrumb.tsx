import * as React from 'react'
import { ChevronRight } from 'lucide-react'
import { cn } from '../../lib/utils'
import type { ReactNode } from 'react'

export interface BreadcrumbItem {
  label: string
  href?: string
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  separator?: ReactNode
  className?: string
}

export function Breadcrumb({ items, separator, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('', className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <React.Fragment key={i}>
              <li className="inline-flex items-center gap-1.5">
                {item.href ? (
                  <a href={item.href} className="transition-colors hover:text-foreground">
                    {item.label}
                  </a>
                ) : (
                  <span className={cn(isLast && 'text-foreground font-medium')}>{item.label}</span>
                )}
              </li>
              {!isLast && (
                <li className="inline-flex items-center text-muted-foreground/50" aria-hidden="true">
                  {separator || <ChevronRight className="size-4" />}
                </li>
              )}
            </React.Fragment>
          )
        })}
      </ol>
    </nav>
  )
}
