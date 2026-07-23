import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function NavigationMenuPage() {
  return (
    <ComponentDoc
      name="NavigationMenu" description="A horizontal navigation bar with dropdown sections. Built on Radix UI Navigation Menu."
      radixPrimitive="@radix-ui/react-navigation-menu"
      preview={
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-80 gap-1 p-4 md:w-96 md:grid-cols-2">
                  <li><NavigationMenuLink href="#">Overview</NavigationMenuLink></li>
                  <li><NavigationMenuLink href="#">Features</NavigationMenuLink></li>
                  <li><NavigationMenuLink href="#">Pricing</NavigationMenuLink></li>
                  <li><NavigationMenuLink href="#">Integrations</NavigationMenuLink></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-64 gap-1 p-4">
                  <li><NavigationMenuLink href="#">Documentation</NavigationMenuLink></li>
                  <li><NavigationMenuLink href="#">API Reference</NavigationMenuLink></li>
                  <li><NavigationMenuLink href="#">Tutorials</NavigationMenuLink></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#">Pricing</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      }
      code={`<NavigationMenu>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Products</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink href="#">Overview</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenu>`}
      props={[
        { name: 'NavigationMenu', type: '—', defaultVal: '—', description: 'Root navigation container' },
        { name: 'NavigationMenuList', type: '—', defaultVal: '—', description: 'Wrapper for navigation items' },
        { name: 'NavigationMenuItem', type: '—', defaultVal: '—', description: 'A single navigation item' },
        { name: 'NavigationMenuTrigger', type: '—', defaultVal: '—', description: 'Button that opens the dropdown' },
        { name: 'NavigationMenuContent', type: '—', defaultVal: '—', description: 'Dropdown content panel' },
        { name: 'NavigationMenuLink', type: '—', defaultVal: '—', description: 'A clickable link within the menu' },
      ]}
      variants={
        <Row label="Example with dropdown">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-80 gap-2 p-4 md:w-96 md:grid-cols-2">
                    <li><NavigationMenuLink href="#">Overview</NavigationMenuLink></li>
                    <li><NavigationMenuLink href="#">Features</NavigationMenuLink></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Row>
      }
    />
  )
}
