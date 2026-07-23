import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandSeparator, CommandShortcut } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function CommandPage() {
  return (
    <ComponentDoc
      name="Command"
      description="A fast, composable command palette. Built on cmdk."
      radixPrimitive="—"
      preview={
        <div className="w-full max-w-sm rounded-lg border border-border shadow-lg">
          <Command>
            <CommandInput placeholder="Search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  Profile
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  Billing
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      }
      code={`<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions">
      <CommandItem>Calendar</CommandItem>
      <CommandItem>Search Emoji</CommandItem>
    </CommandGroup>
    <CommandSeparator />
    <CommandGroup heading="Settings">
      <CommandItem>
        Profile
        <CommandShortcut>⌘P</CommandShortcut>
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}
      props={[
        { name: 'Command', type: 'component', defaultVal: '—', description: 'Root command palette container' },
        { name: 'CommandInput', type: 'component', defaultVal: '—', description: 'Search input field' },
        { name: 'CommandList', type: 'component', defaultVal: '—', description: 'Scrollable list of items' },
        { name: 'CommandEmpty', type: 'component', defaultVal: '—', description: 'Displayed when no results match' },
        { name: 'CommandGroup', type: 'component', defaultVal: '—', description: 'Groups related items with a heading' },
        { name: 'CommandItem', type: 'component', defaultVal: '—', description: 'A selectable item in the list' },
        { name: 'CommandSeparator', type: 'component', defaultVal: '—', description: 'Visual separator between groups' },
        { name: 'CommandShortcut', type: 'component', defaultVal: '—', description: 'Keyboard shortcut indicator' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="With sub-items">
            <div className="w-full max-w-sm rounded-lg border border-border shadow-lg">
              <Command>
                <CommandInput placeholder="Search commands..." />
                <CommandList>
                  <CommandGroup heading="Navigation">
                    <CommandItem>Dashboard</CommandItem>
                    <CommandItem>Team</CommandItem>
                    <CommandItem>Projects</CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Actions">
                    <CommandItem>New File<CommandShortcut>⌘N</CommandShortcut></CommandItem>
                    <CommandItem>Save All<CommandShortcut>⌘S</CommandShortcut></CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
          </Row>
        </div>
      }
      anatomy={['<Command> — Root container', '<CommandInput> — Search input with icon', '<CommandList> — Scrollable results area', '<CommandEmpty> — Empty state message', '<CommandGroup> — Grouped items with heading', '<CommandItem> — Individual selectable item', '<CommandSeparator> — Horizontal divider', '<CommandShortcut> — Keyboard shortcut hint']}
      accessibility={['Uses combobox role with listbox pattern', 'Full keyboard navigation support', 'ARIA attributes managed by cmdk']}
    />
  )
}
