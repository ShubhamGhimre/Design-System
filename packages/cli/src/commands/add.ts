import prompts from 'prompts'
import { existsSync, readFileSync } from 'fs'
import { join, resolve } from 'path'
import { copySync, ensureDirSync } from 'fs-extra'
import { components } from '../index.js'

const LIBRARY_PATH = resolve(import.meta.dirname, '..', '..', '..', '..', 'src', 'components')

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

function getComponentDeps(name: string): string[] {
  const deps: string[] = []
  if (isRadixBased(name)) {
    const radixMap: Record<string, string> = {
      Accordion: '@radix-ui/react-accordion',
      AlertDialog: '@radix-ui/react-alert-dialog',
      AspectRatio: '@radix-ui/react-aspect-ratio',
      Avatar: '@radix-ui/react-avatar',
      Checkbox: '@radix-ui/react-checkbox',
      Collapsible: '@radix-ui/react-collapsible',
      ContextMenu: '@radix-ui/react-context-menu',
      Dialog: '@radix-ui/react-dialog',
      DropdownMenu: '@radix-ui/react-dropdown-menu',
      HoverCard: '@radix-ui/react-hover-card',
      Label: '@radix-ui/react-label',
      Menubar: '@radix-ui/react-menubar',
      NavigationMenu: '@radix-ui/react-navigation-menu',
      Popover: '@radix-ui/react-popover',
      Progress: '@radix-ui/react-progress',
      RadioGroup: '@radix-ui/react-radio-group',
      ScrollArea: '@radix-ui/react-scroll-area',
      Select: '@radix-ui/react-select',
      Separator: '@radix-ui/react-separator',
      Sheet: '@radix-ui/react-sheet',
      Slider: '@radix-ui/react-slider',
      Switch: '@radix-ui/react-switch',
      Tabs: '@radix-ui/react-tabs',
      Toast: '@radix-ui/react-toast',
      Toggle: '@radix-ui/react-toggle',
      ToggleGroup: '@radix-ui/react-toggle-group',
      Tooltip: '@radix-ui/react-tooltip',
    }
    const pkg = radixMap[name]
    if (pkg) deps.push(pkg)
  }
  return deps
}

function checkDepsInstalled(name: string): string[] {
  const missing: string[] = []
  const deps = getComponentDeps(name)
  for (const dep of deps) {
    try {
      const pkgPath = join(process.cwd(), 'node_modules', dep, 'package.json')
      if (!existsSync(pkgPath)) {
        missing.push(dep)
      }
    } catch {
      missing.push(dep)
    }
  }
  return missing
}

function writeTailwindConfig(name: string): void {
  const tailwindPath = join(process.cwd(), 'tailwind.config.ts')
  if (existsSync(tailwindPath)) {
    const content = readFileSync(tailwindPath, 'utf-8')
    const marker = `./src/components/ui/${name.toLowerCase()}/**/*.{ts,tsx}`
    if (!content.includes(marker)) {
      console.log(`  ℹ Update your tailwind.config.ts to include: "${marker}"`)
    }
  }
}

export async function add(componentName?: string) {
  let name = componentName

  if (!name) {
    const response = await prompts({
      type: 'autocomplete',
      name: 'component',
      message: 'Which component would you like to add?',
      choices: components.map((c) => ({ title: c, value: c })),
    })
    if (!response.component) {
      console.log('Aborted.')
      return
    }
    name = response.component
  }

  if (!name) return

  const normalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()

  if (!components.includes(normalized as typeof components[number])) {
    console.log(`Component "${normalized}" not found. Run \`ds list\` to see available components.`)
    return
  }

  const sourcePath = join(LIBRARY_PATH, normalized)
  if (!existsSync(sourcePath)) {
    console.log(`Source for "${normalized}" not found at ${sourcePath}`)
    return
  }

  const missing = checkDepsInstalled(normalized)
  if (missing.length > 0) {
    console.log(`  ℹ This component requires the following Radix packages:`)
    for (const dep of missing) {
      console.log(`    - ${dep}`)
    }
    console.log(`  Run: npm install ${missing.join(' ')}`)
    console.log()
  }

  const destPath = join(process.cwd(), 'src', 'components', 'ui', normalized)
  ensureDirSync(destPath)
  copySync(sourcePath, destPath, { overwrite: true })

  writeTailwindConfig(normalized)

  console.log()
  console.log(`✔ Component "${normalized}" added successfully!`)
  console.log()
  console.log(`  Location: ${resolve(destPath)}`)
  console.log(`  Import:`)
  console.log(`  import { ${normalized} } from "@/components/ui/${normalized}"`)
  console.log()
}
