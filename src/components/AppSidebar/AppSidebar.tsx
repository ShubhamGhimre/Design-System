import * as React from 'react'
import { ChevronDown, ChevronRight, type LucideIcon } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from '../Button'
import { ScrollArea } from '../ScrollArea'
import { Separator } from '../Separator'

export interface SidebarItem {
  id: string
  label: string
  icon?: LucideIcon
  badge?: string
  href?: string
  children?: SidebarItem[]
}

export interface AppSidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SidebarItem[]
  activeItemId?: string
  onItemClick?: (item: SidebarItem) => void
  brandSlot?: React.ReactNode
  footerSlot?: React.ReactNode
  collapsed?: boolean
  onCollapse?: (collapsed: boolean) => void
  collapsible?: boolean
}

export function AppSidebar({
  className,
  items,
  activeItemId,
  onItemClick,
  brandSlot,
  footerSlot,
  collapsed = false,
  onCollapse,
  collapsible = true,
  ...props
}: AppSidebarProps) {
  return (
    <div
      className={cn(
        'flex flex-col border-r border-border bg-card text-card-foreground',
        collapsed ? 'w-16' : 'w-64',
        'transition-all duration-200',
        className,
      )}
      {...props}
    >
      {brandSlot ? (
        <div className="flex h-14 items-center gap-2 px-4">{brandSlot}</div>
      ) : null}

      <Separator />

      <ScrollArea className="flex-1">
        <nav className="space-y-1 p-2">
          {items.map((item) => (
            <SidebarNavItem
              key={item.id}
              item={item}
              collapsed={collapsed}
              activeItemId={activeItemId}
              onItemClick={onItemClick}
              depth={0}
            />
          ))}
        </nav>
      </ScrollArea>

      {footerSlot ? (
        <>
          <Separator />
          <div className="p-4">{footerSlot}</div>
        </>
      ) : null}
    </div>
  )
}

interface SidebarNavItemProps {
  item: SidebarItem
  collapsed: boolean
  activeItemId?: string
  onItemClick?: (item: SidebarItem) => void
  depth: number
}

function SidebarNavItem({ item, collapsed, activeItemId, onItemClick, depth }: SidebarNavItemProps) {
  const [expanded, setExpanded] = React.useState(true)
  const hasChildren = item.children && item.children.length > 0
  const isActive = activeItemId === item.id || item.children?.some((c) => c.id === activeItemId)

  if (collapsed) {
    return (
      <div className="group relative">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className={cn('w-full justify-center', isActive && 'bg-accent')}
          onClick={() => onItemClick?.(item)}
          title={item.label}
        >
          {item.icon ? <item.icon className="h-4 w-4" /> : null}
          <span className="sr-only">{item.label}</span>
        </Button>
        {hasChildren && (
          <div className="absolute left-full top-0 z-50 ml-2 hidden rounded-md border border-border bg-popover p-2 shadow-md group-hover:block">
            {item.children!.map((child) => (
              <Button
                key={child.id}
                type="button"
                variant="ghost"
                size="sm"
                className={cn('w-full justify-start', activeItemId === child.id && 'bg-accent')}
                onClick={() => onItemClick?.(child)}
              >
                {child.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className={cn('w-full justify-start gap-2', isActive && 'bg-accent')}
        style={{ paddingLeft: `${12 + depth * 16}px` }}
        onClick={() => {
          if (hasChildren) {
            setExpanded((v) => !v)
          } else {
            onItemClick?.(item)
          }
        }}
      >
        {item.icon ? <item.icon className="h-4 w-4 flex-shrink-0" /> : null}
        <span className="flex-1 text-left text-sm">{item.label}</span>
        {item.badge ? (
          <span className="rounded-full bg-primary px-2 py-0.5 text-xs text-primary-foreground">{item.badge}</span>
        ) : null}
        {hasChildren ? (
          expanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />
        ) : null}
      </Button>
      {hasChildren && expanded ? (
        <div>
          {item.children!.map((child) => (
            <SidebarNavItem
              key={child.id}
              item={child}
              collapsed={collapsed}
              activeItemId={activeItemId}
              onItemClick={onItemClick}
              depth={depth + 1}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
