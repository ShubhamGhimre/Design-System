import { Link } from 'react-router-dom'
import { Button, Badge, Input, Dialog, Tabs, Table } from '../../components'
import type { Column } from '../../components'

const componentCards = [
  { name: 'Button', desc: 'Triggers actions', href: '/component/button', category: 'Forms' },
  { name: 'Input', desc: 'Text input fields', href: '/component/input', category: 'Forms' },
  { name: 'Textarea', desc: 'Multi-line text', href: '/component/textarea', category: 'Forms' },
  { name: 'Select', desc: 'Option picker', href: '/component/select', category: 'Forms' },
  { name: 'Checkbox', desc: 'Toggle selection', href: '/component/checkbox', category: 'Forms' },
  { name: 'RadioGroup', desc: 'Single choice', href: '/component/radio-group', category: 'Forms' },
  { name: 'Badge', desc: 'Status labels', href: '/component/badge', category: 'Data Display' },
  { name: 'Table', desc: 'Data tables', href: '/component/table', category: 'Data Display' },
  { name: 'Tabs', desc: 'Tabbed views', href: '/component/tabs', category: 'Navigation' },
  { name: 'Accordion', desc: 'Collapsible sections', href: '/component/accordion', category: 'Navigation' },
  { name: 'Dialog', desc: 'Modal dialogs', href: '/component/dialog', category: 'Overlays' },
  { name: 'Tooltip', desc: 'Hover hints', href: '/component/tooltip', category: 'Overlays' },
  { name: 'Popover', desc: 'Floating panels', href: '/component/popover', category: 'Overlays' },
  { name: 'DropdownMenu', desc: 'Action menus', href: '/component/dropdown-menu', category: 'Overlays' },
]

const columnData: Column<{ name: string; type: string; defaultVal: string }>[] = [
  { key: 'name', header: 'Prop', cell: (r) => <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">{r.name}</code> },
  { key: 'type', header: 'Type', cell: (r) => <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">{r.type}</code> },
  { key: 'defaultVal', header: 'Default', cell: (r) => r.defaultVal || <span className="text-muted-foreground">—</span> },
]

export function HomePage() {
  return (
    <div>
      <section className="mb-16 pt-12 text-center">
        <h1 className="mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
          Design System
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          A collection of accessible, themeable React components built with Radix UI and Tailwind CSS v4.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link to="/getting-started">
            <Button size="lg">Get Started</Button>
          </Link>
          <Link to="/component/button">
            <Button variant="secondary" size="lg">Browse Components</Button>
          </Link>
        </div>
        <div className="mt-6 flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-primary" /> 14 Components</span>
          <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-primary" /> Radix UI</span>
          <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-primary" /> Tailwind v4</span>
          <span className="flex items-center gap-1.5"><span className="size-2 rounded-full bg-primary" /> TypeScript</span>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Components</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {componentCards.map((c) => (
            <Link key={c.name} to={c.href}
              className="group rounded-lg border border-border bg-card p-4 no-underline transition-all hover:border-primary/50 hover:shadow-sm"
            >
              <div className="mb-1 flex items-center justify-between">
                <span className="font-semibold text-foreground">{c.name}</span>
                <Badge variant="secondary" size="sm">{c.category}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Quick Preview</h2>
        <div className="rounded-lg border border-border bg-card p-6">
          <Tabs
            variant="pills"
            defaultValue="button"
            tabs={[
              { value: 'button', label: 'Button', content: <PreviewButton /> },
              { value: 'input', label: 'Input', content: <PreviewInput /> },
              { value: 'dialog', label: 'Dialog', content: <PreviewDialog /> },
              { value: 'table', label: 'Table', content: <PreviewTable /> },
            ]}
          />
        </div>
      </section>

      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold">Props</h2>
        <div className="rounded-lg border border-border">
          <Table
            data={[
              { name: 'variant', type: '"primary" | "secondary" | "ghost" | "destructive"', defaultVal: '"primary"' },
              { name: 'size', type: '"sm" | "md" | "lg"', defaultVal: '"md"' },
              { name: 'loading', type: 'boolean', defaultVal: 'false' },
              { name: 'disabled', type: 'boolean', defaultVal: 'false' },
              { name: 'iconOnly', type: 'boolean', defaultVal: 'false' },
              { name: 'leadingIcon', type: 'ReactNode', defaultVal: '—' },
              { name: 'trailingIcon', type: 'ReactNode', defaultVal: '—' },
            ]}
            columns={columnData}
          />
        </div>
      </section>
    </div>
  )
}

function PreviewButton() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
    </div>
  )
}

function PreviewInput() {
  return (
    <div className="flex flex-wrap items-end gap-3">
      <div className="w-56"><Input placeholder="Default" /></div>
      <div className="w-56"><Input placeholder="With icon" leadingIcon={<span className="text-muted-foreground">🔍</span>} /></div>
      <div className="w-56"><Input hasError placeholder="Error state" /></div>
    </div>
  )
}

function PreviewDialog() {
  return (
    <Dialog title="Hello" description="This is a dialog preview." trigger={<Button>Open Dialog</Button>}>
      <p className="text-sm text-muted-foreground">Dialog content goes here.</p>
    </Dialog>
  )
}

function PreviewTable() {
  const cols: Column<{ id: number; name: string; role: string }>[] = [
    { key: 'name', header: 'Name', cell: (r) => r.name },
    { key: 'role', header: 'Role', cell: (r) => <Badge variant="secondary" size="sm">{r.role}</Badge> },
  ]
  return <Table data={[{ id: 1, name: 'Alice', role: 'Admin' }]} columns={cols} />
}
