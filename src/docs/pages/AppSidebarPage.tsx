import { AppSidebar } from '../../components'
import { LayoutDashboard, Settings, Users, HelpCircle } from 'lucide-react'
import { ComponentDoc } from '../components/ComponentDoc'

export function AppSidebarPage() {
  const sidebarItems = [
    { id: '1', label: 'Dashboard', icon: LayoutDashboard },
    { id: '2', label: 'Team', icon: Users, children: [
      { id: '2a', label: 'Members' },
      { id: '2b', label: 'Roles' },
    ]},
    { id: '3', label: 'Settings', icon: Settings, badge: '3' },
    { id: '4', label: 'Help', icon: HelpCircle },
  ]
  return (
    <ComponentDoc
      name="AppSidebar"
      description="A collapsible sidebar navigation with support for nested items, icons, badges, and brand/footer slots."
      radixPrimitive="—"
      preview={
        <div className="flex h-80 w-64 rounded-lg border border-border overflow-hidden">
          <AppSidebar
            items={sidebarItems}
            activeItemId="1"
            collapsible={false}
            brandSlot={<span className="text-sm font-bold text-foreground">MyApp</span>}
          />
        </div>
      }
      code={`import { AppSidebar } from 'design-system/components'

const items = [
  { id: '1', label: 'Dashboard', icon: LayoutDashboard },
  { id: '2', label: 'Settings', icon: Settings },
]

;<AppSidebar items={items} activeItemId="1" />`}
      props={[
        { name: 'items', type: 'SidebarItem[]', defaultVal: '[]', description: 'Array of navigation items with optional children' },
        { name: 'activeItemId', type: 'string', defaultVal: '—', description: 'Currently active item ID' },
        { name: 'onItemClick', type: '(item) => void', defaultVal: '—', description: 'Callback when an item is clicked' },
        { name: 'brandSlot', type: 'ReactNode', defaultVal: '—', description: 'Brand or logo slot at the top' },
        { name: 'footerSlot', type: 'ReactNode', defaultVal: '—', description: 'Content at the bottom' },
        { name: 'collapsed', type: 'boolean', defaultVal: 'false', description: 'Collapsed state' },
        { name: 'collapsible', type: 'boolean', defaultVal: 'true', description: 'Allow collapsing' },
      ]}
    />
  )
}
