import { Button, DropdownMenu, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function DropdownMenuPage() {
  return (
    <ComponentDoc
      name="DropdownMenu" description="Displays a menu of actions or options triggered by a button." radixPrimitive="@radix-ui/react-dropdown-menu"
      preview={
        <DropdownMenu trigger={<Button variant="secondary">Open Menu</Button>}>
          <DropdownMenuLabel>Account</DropdownMenuLabel>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenu>
      }
      code={`<DropdownMenu
  trigger={<Button variant="secondary">Menu</Button>}
>
  <DropdownMenuItem>Profile</DropdownMenuItem>
  <DropdownMenuSeparator />
  <DropdownMenuItem>Log out</DropdownMenuItem>
</DropdownMenu>`}
      props={[
        { name: 'trigger', type: 'ReactNode', defaultVal: '—', description: 'Trigger element' },
        { name: 'open', type: 'boolean', defaultVal: '—', description: 'Controlled open state' },
        { name: 'defaultOpen', type: 'boolean', defaultVal: 'false', description: 'Default open state' },
        { name: 'onOpenChange', type: '(open: boolean) => void', defaultVal: '—', description: 'Open state change handler' },
      ]}
    />
  )
}
