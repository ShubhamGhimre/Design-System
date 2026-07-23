import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuLabel, ContextMenuCheckboxItem, ContextMenuRadioItem } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function ContextMenuPage() {
  return (
    <ComponentDoc
      name="ContextMenu"
      description="A right-click context menu with support for items, separators, labels, checkboxes, and radio items."
      radixPrimitive="@radix-ui/react-context-menu"
      preview={
        <ContextMenu>
          <ContextMenuTrigger asChild>
            <div className="flex h-32 w-64 cursor-default items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/30 text-sm text-muted-foreground">
              Right-click here
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Edit</ContextMenuItem>
            <ContextMenuItem>Duplicate</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Delete</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      }
      code={`<ContextMenu>
  <ContextMenuTrigger asChild>
    <div>Right-click here</div>
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Edit</ContextMenuItem>
    <ContextMenuItem>Duplicate</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
      props={[
        { name: 'ContextMenu', type: 'component', defaultVal: '—', description: 'Root context menu wrapper' },
        { name: 'ContextMenuTrigger', type: 'component', defaultVal: '—', description: 'Element that triggers the context menu on right-click' },
        { name: 'ContextMenuContent', type: 'component', defaultVal: '—', description: 'Popover content container' },
        { name: 'ContextMenuItem', type: 'component', defaultVal: '—', description: 'A selectable menu item' },
        { name: 'ContextMenuSeparator', type: 'component', defaultVal: '—', description: 'Horizontal divider' },
        { name: 'ContextMenuLabel', type: 'component', defaultVal: '—', description: 'Non-interactive label for grouping' },
        { name: 'ContextMenuCheckboxItem', type: 'component', defaultVal: '—', description: 'Item with checkbox state' },
        { name: 'ContextMenuRadioItem', type: 'component', defaultVal: '—', description: 'Item with radio state' },
        { name: 'ContextMenuSub', type: 'component', defaultVal: '—', description: 'Nested submenu container' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="With checkboxes and radio items">
            <ContextMenu>
              <ContextMenuTrigger asChild>
                <div className="flex h-32 w-64 cursor-default items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted/30 text-sm text-muted-foreground">
                  Right-click for more
                </div>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuLabel>View Options</ContextMenuLabel>
                <ContextMenuCheckboxItem checked>Show Grid</ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem>Show Sidebar</ContextMenuCheckboxItem>
                <ContextMenuSeparator />
                <ContextMenuLabel>Sort By</ContextMenuLabel>
                <ContextMenuRadioItem value="name">Name</ContextMenuRadioItem>
                <ContextMenuRadioItem value="date">Date</ContextMenuRadioItem>
                <ContextMenuRadioItem value="size">Size</ContextMenuRadioItem>
              </ContextMenuContent>
            </ContextMenu>
          </Row>
        </div>
      }
      anatomy={['<ContextMenu> — Root container', '<ContextMenuTrigger> — Right-click target', '<ContextMenuContent> — Menu popover', '<ContextMenuItem> — Clickable item', '<ContextMenuSeparator> — Divider', '<ContextMenuLabel> — Group label', '<ContextMenuCheckboxItem> — Toggleable checkbox item', '<ContextMenuRadioItem> — Radio item', '<ContextMenuSub> — Nested submenu']}
      accessibility={['Right-click trigger with keyboard alternative', 'Arrow key navigation within menu', 'Escape to close', 'ARIA menu pattern with menuitem roles']}
    />
  )
}
