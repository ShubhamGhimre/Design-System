import * as React from 'react'
import { cn } from '../../lib/utils'

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: 'left' | 'right'
  collapsible?: boolean
  collapsed?: boolean
  onCollapse?: (collapsed: boolean) => void
  width?: string | number
}

export function Sidebar({
  side = 'left',
  collapsible,
  collapsed,
  onCollapse,
  width,
  className,
  children,
  ...props
}: SidebarProps) {
  return (
    <div
      className={cn(
        'flex flex-col bg-card border-border',
        side === 'left' ? 'border-r' : 'border-l',
        collapsible && 'transition-[width] duration-normal ease-standard overflow-hidden',
        className,
      )}
      style={{ width: width ?? (collapsible && collapsed ? '3rem' : '16rem') }}
      {...props}
    >
      {collapsible && (
        <button
          onClick={() => onCollapse?.(!collapsed)}
          className="flex items-center justify-end px-3 py-2 text-muted-foreground hover:text-foreground"
        >
          <CollapseIcon collapsed={!!collapsed} />
        </button>
      )}
      {children}
    </div>
  )
}

function CollapseIcon({ collapsed }: { collapsed: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('transition-transform', collapsed && 'rotate-180')}
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

export const SidebarHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('px-3 py-2', className)} {...props} />
)

export const SidebarContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex-1 overflow-y-auto px-3', className)} {...props} />
)

export const SidebarGroup = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('py-2', className)} {...props} />
)

export const SidebarGroupLabel = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('px-2 pb-1 text-xs font-medium text-muted-foreground uppercase tracking-wider', className)}
    {...props}
  />
)

export const SidebarGroupContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('', className)} {...props} />
)

export const SidebarMenu = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col gap-0.5', className)} {...props} />
)

export const SidebarMenuItem = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('', className)} {...props} />
)

export const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { isActive?: boolean }
>(function SidebarMenuButton({ isActive, className, ...props }, ref) {
  return (
    <button
      ref={ref}
      className={cn(
        'flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium text-sidebar-foreground transition-colors duration-fast hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        isActive && 'bg-sidebar-accent text-sidebar-accent-foreground',
        className,
      )}
      {...props}
    />
  )
})

export const SidebarFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('px-3 py-2', className)} {...props} />
)

export const SidebarRail = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  function SidebarRail({ className, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={cn(
          'absolute right-0 top-1/2 -translate-y-1/2 size-4 flex items-center justify-center',
          'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-sm',
          className,
        )}
        {...props}
      >
        <svg width="4" height="16" viewBox="0 0 4 16" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M1 1v14M3 1v14" />
        </svg>
      </button>
    )
  },
)
