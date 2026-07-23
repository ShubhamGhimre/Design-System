import { components } from '../index.js'

const categories: Record<string, string[]> = {
  Layout: [
    'AspectRatio', 'Card', 'Direction', 'Item', 'Resizable',
    'ScrollArea', 'Separator', 'Sidebar',
  ],
  Form: [
    'Button', 'ButtonGroup', 'Checkbox', 'Combobox', 'DatePicker',
    'Field', 'Input', 'InputGroup', 'InputOTP', 'Label',
    'NativeSelect', 'RadioGroup', 'Select', 'Slider', 'Switch',
    'Textarea', 'Toggle', 'ToggleGroup',
  ],
  Data: [
    'Calendar', 'Chart', 'DataTable', 'Empty', 'Table',
  ],
  Overlay: [
    'AlertDialog', 'Dialog', 'DropdownMenu', 'HoverCard',
    'Menubar', 'NavigationMenu', 'Popover', 'Sheet', 'Tooltip',
  ],
  Feedback: [
    'Alert', 'Avatar', 'Badge', 'Breadcrumb', 'Kbd', 'Marker',
    'Progress', 'Skeleton', 'Sonner', 'Spinner', 'Toast',
  ],
  Navigation: [
    'Accordion', 'Collapsible', 'Pagination', 'Tabs',
  ],
  Media: [
    'Attachment', 'Bubble', 'Carousel', 'Message',
    'MessageScroller',
  ],
  Typography: [
    'Typography',
  ],
  Command: [
    'Command',
  ],
  Blocks: [
    'AppSidebar', 'CartDrawer', 'CategoryBanner', 'Dashboard',
    'HeroParallax', 'HeroSlideshow', 'HeroSplitView',
    'LoginCentered', 'LoginFullBleed', 'LoginSplitScreen',
    'Newsletter', 'OrderConfirmation', 'ProductCard',
    'ProductDetail', 'ProductListing',
    'SignUpCentered', 'SignUpMultiStep', 'SignUpSplitScreen',
    'Testimonials',
  ],
}

const RADIX_COMPONENTS = new Set([
  'Accordion', 'AlertDialog', 'AspectRatio', 'Avatar', 'Checkbox',
  'Collapsible', 'Combobox', 'Command', 'ContextMenu', 'Dialog',
  'DropdownMenu', 'HoverCard', 'Label', 'Menubar', 'NavigationMenu',
  'Popover', 'Progress', 'RadioGroup', 'ScrollArea', 'Select',
  'Separator', 'Sheet', 'Slider', 'Switch', 'Tabs', 'Toast',
  'Toggle', 'ToggleGroup', 'Tooltip',
])

function isRadixBased(name: string): boolean {
  return RADIX_COMPONENTS.has(name)
}

function getCategory(name: string): string | null {
  for (const [cat, comps] of Object.entries(categories)) {
    if (comps.includes(name)) return cat
  }
  return null
}

export async function list() {
  const maxNameLen = Math.max(...components.map((c) => c.length))

  console.log('\n  Available Components:\n')

  for (const [category, comps] of Object.entries(categories)) {
    console.log(`  ${category}:`)
    for (const comp of comps) {
      if (!components.includes(comp as typeof components[number])) continue
      const type = isRadixBased(comp) ? 'radix' : 'custom'
      const label = comp.padEnd(maxNameLen + 2)
      console.log(`    ${label} ${type === 'radix' ? '🔌 radix' : '⚡ custom'}`)
    }
    console.log()
  }
}
