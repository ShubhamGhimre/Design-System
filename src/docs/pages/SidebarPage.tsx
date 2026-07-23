import { useState } from 'react'
import { Sidebar, SidebarHeader, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function SidebarPage() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <ComponentDoc
      name="Sidebar" description="A vertical sidebar navigation panel with collapsible support."
      preview={
        <div className="flex h-80 w-full max-w-sm overflow-hidden rounded-lg border border-border">
          <Sidebar collapsible collapsed={collapsed} onCollapse={setCollapsed} className="h-full">
            <SidebarHeader>
              <span className="text-sm font-semibold text-foreground">My App</span>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>General</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem><SidebarMenuButton isActive>Dashboard</SidebarMenuButton></SidebarMenuItem>
                    <SidebarMenuItem><SidebarMenuButton>Analytics</SidebarMenuButton></SidebarMenuItem>
                    <SidebarMenuItem><SidebarMenuButton>Reports</SidebarMenuButton></SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarGroup>
                <SidebarGroupLabel>Settings</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem><SidebarMenuButton>Profile</SidebarMenuButton></SidebarMenuItem>
                    <SidebarMenuItem><SidebarMenuButton>Security</SidebarMenuButton></SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
              <span className="text-xs text-muted-foreground">Signed in as user@example.com</span>
            </SidebarFooter>
          </Sidebar>
          <div className="flex flex-1 items-center justify-center bg-muted/30 p-4 text-sm text-muted-foreground">
            Main content area
          </div>
        </div>
      }
      code={`<Sidebar collapsible collapsed={collapsed} onCollapse={setCollapsed}>
  <SidebarHeader>
    <span className="font-semibold">My App</span>
  </SidebarHeader>
  <SidebarContent>
    <SidebarGroup>
      <SidebarGroupLabel>Section</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton isActive>Item</SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  </SidebarContent>
  <SidebarFooter>Footer</SidebarFooter>
</Sidebar>`}
      props={[
        { name: 'side', type: '"left" | "right"', defaultVal: '"left"', description: 'Which side the sidebar appears on' },
        { name: 'collapsible', type: 'boolean', defaultVal: '—', description: 'Enable collapse toggle' },
        { name: 'collapsed', type: 'boolean', defaultVal: 'false', description: 'Controlled collapsed state' },
        { name: 'onCollapse', type: '(collapsed: boolean) => void', defaultVal: '—', description: 'Collapse state change handler' },
        { name: 'width', type: 'string | number', defaultVal: '—', description: 'Custom width override' },
      ]}
      variants={
        <Row label="Collapsible sidebar">
          <div className="flex h-60 w-full max-w-xs overflow-hidden rounded-lg border border-border">
            <Sidebar collapsible collapsed={false} className="h-full">
              <SidebarHeader>
                <span className="text-sm font-semibold text-foreground">Menu</span>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Items</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem><SidebarMenuButton>Home</SidebarMenuButton></SidebarMenuItem>
                      <SidebarMenuItem><SidebarMenuButton>About</SidebarMenuButton></SidebarMenuItem>
                      <SidebarMenuItem><SidebarMenuButton>Contact</SidebarMenuButton></SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>
              </SidebarContent>
            </Sidebar>
            <div className="flex flex-1 items-center justify-center bg-muted/20 text-sm text-muted-foreground">Content</div>
          </div>
        </Row>
      }
    />
  )
}
