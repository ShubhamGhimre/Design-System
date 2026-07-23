import { Link, useLocation } from 'react-router-dom'
import { X, Layout, Book, Cpu } from 'lucide-react'
import { cn } from '../../lib/utils'
import navItems from '../data/navs.json'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layout, Book, Cpu,
}

type NavLeaf = { label: string; href: string; icon?: string }
type NavGroup = { type: 'group'; label: string; icon?: string; children: { label: string; href: string; desc?: string }[] }

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <>
      {open && <div className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm lg:hidden" onClick={onClose} />}
      <aside className={cn(
        'fixed inset-y-0 start-0 z-40 w-64 shrink-0 border-e border-border bg-background pt-14 transition-all duration-300 ease-standard',
        'lg:relative lg:h-full lg:overflow-y-auto lg:pt-0 lg:translate-x-0 lg:z-0',
        open ? 'translate-x-0 shadow-xl' : '-translate-x-full',
      )}>
        <nav className="h-full overflow-y-auto px-3 py-4 scrollbar-thin">
          <div className="mb-3 flex items-center justify-between lg:hidden">
            <span className="px-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Navigation</span>
            <button onClick={onClose} className="flex size-7 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted">
              <X className="size-4" />
            </button>
          </div>
          {(navItems as (NavLeaf | NavGroup)[]).map((item, i) => {
            if ('type' in item && item.type === 'group') {
              const group = item as NavGroup
              const GroupIcon = group.icon ? iconMap[group.icon] : undefined
              return (
                <div key={i} className="mb-5">
                  <div className="mb-1.5 flex items-center gap-2 px-2">
                    {GroupIcon && <GroupIcon className="size-3 text-muted-foreground" />}
                    <p className="flex-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/70">{group.label}</p>
                    <span className="rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">{group.children.length}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    {group.children.map((child) => {
                      const isActive = pathname === child.href
                      return (
                        <Link key={child.href} to={child.href} onClick={onClose}
                          className={cn(
                            'group relative flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-sm no-underline transition-all duration-150',
                            isActive
                              ? 'bg-primary/10 font-medium text-primary'
                              : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                          )}
                        >
                          {isActive && (
                            <span className="absolute inset-y-1.5 start-0 w-0.5 rounded-full bg-primary" />
                          )}
                          <span className="flex-1 truncate">{child.label}</span>
                          {child.desc && (
                            <span className="hidden text-[10px] text-muted-foreground/50 group-hover:inline">{child.desc}</span>
                          )}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            }
            const navItem = item as NavLeaf
            const Icon = navItem.icon ? iconMap[navItem.icon] : undefined
            const isActive = pathname === navItem.href
            return (
              <Link key={navItem.href} to={navItem.href} onClick={onClose}
                className={cn(
                  'mb-0.5 flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-sm no-underline transition-all duration-150',
                  isActive
                    ? 'bg-primary/10 font-medium text-primary'
                    : 'text-muted-foreground hover:bg-muted/60 hover:text-foreground'
                )}
              >
                {Icon && <Icon className="size-4" />}
                {navItem.label}
              </Link>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
