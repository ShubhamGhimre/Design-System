#!/usr/bin/env node

import { Command } from 'commander'
import { init } from './commands/init.js'
import { add } from './commands/add.js'
import { list } from './commands/list.js'

const LOGO = `
╔══════════════════════════════════════════╗
║       Design System CLI v0.1.0           ║
║     Add beautiful components fast        ║
╚══════════════════════════════════════════╝
`

export const components = [
  'Accordion',
  'Alert',
  'AlertDialog',
  'AspectRatio',
  'Attachment',
  'Avatar',
  'Badge',
  'Breadcrumb',
  'Bubble',
  'Button',
  'ButtonGroup',
  'Calendar',
  'Card',
  'Carousel',
  'Chart',
  'Checkbox',
  'Collapsible',
  'Combobox',
  'Command',
  'ContextMenu',
  'DataTable',
  'DatePicker',
  'Dialog',
  'Direction',
  'DropdownMenu',
  'Empty',
  'Field',
  'HoverCard',
  'Input',
  'InputGroup',
  'InputOTP',
  'Item',
  'Kbd',
  'Label',
  'Marker',
  'Menubar',
  'Message',
  'MessageScroller',
  'NativeSelect',
  'NavigationMenu',
  'Pagination',
  'Popover',
  'Progress',
  'RadioGroup',
  'Resizable',
  'ScrollArea',
  'Select',
  'Separator',
  'Sheet',
  'Sidebar',
  'Skeleton',
  'Slider',
  'Sonner',
  'Spinner',
  'Switch',
  'Table',
  'Tabs',
  'Textarea',
  'Toast',
  'Toggle',
  'ToggleGroup',
  'Tooltip',
  'Typography',
  // Blocks
  'AppSidebar',
  'CartDrawer',
  'CategoryBanner',
  'Dashboard',
  'HeroParallax',
  'HeroSlideshow',
  'HeroSplitView',
  'LoginCentered',
  'LoginFullBleed',
  'LoginSplitScreen',
  'Newsletter',
  'OrderConfirmation',
  'ProductCard',
  'ProductDetail',
  'ProductListing',
  'SignUpCentered',
  'SignUpMultiStep',
  'SignUpSplitScreen',
  'Testimonials',
] as const

const program = new Command()
  .name('ds')
  .description('CLI to add design-system components to your project')
  .version('0.1.0')
  .addHelpText('beforeAll', LOGO)
  .hook('preAction', (thisCommand) => {
    const args = thisCommand.args
    if (args.length === 0) {
      console.log(LOGO)
    }
  })

program
  .command('init')
  .description('Initialize design-system in your project')
  .action(init)

program
  .command('add')
  .argument('[component]', 'Component name to add')
  .description('Add a component to your project')
  .action(add)

program
  .command('list')
  .description('List all available components')
  .action(list)

program.parse(process.argv)
