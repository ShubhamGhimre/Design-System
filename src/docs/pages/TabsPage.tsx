import { Tabs } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function TabsPage() {
  const tabs = [
    { value: 't1', label: 'Tab 1', content: <p className="text-sm text-muted-foreground">Content 1</p> },
    { value: 't2', label: 'Tab 2', content: <p className="text-sm text-muted-foreground">Content 2</p> },
    { value: 't3', label: 'Tab 3', content: <p className="text-sm text-muted-foreground">Content 3</p> },
  ]
  return (
    <ComponentDoc
      name="Tabs" description="Organizes content into separate views where only one view is visible at a time." radixPrimitive="@radix-ui/react-tabs"
      preview={<Tabs variant="underline" defaultValue="t1" tabs={tabs} />}
      code={`<Tabs
  defaultValue="tab-1"
  tabs={[
    { value: "tab-1", label: "Tab 1", content: <p>Content</p> },
    { value: "tab-2", label: "Tab 2", content: <p>Content</p> },
  ]}
/>`}
      props={[
        { name: 'tabs', type: '{ value: string; label: string; content: ReactNode }[]', defaultVal: '—', description: 'Tab definitions' },
        { name: 'variant', type: '"underline" | "pills"', defaultVal: '"underline"', description: 'Tab style' },
        { name: 'defaultValue', type: 'string', defaultVal: '—', description: 'Default active tab' },
        { name: 'value', type: 'string', defaultVal: '—', description: 'Controlled active tab' },
        { name: 'onValueChange', type: '(value: string) => void', defaultVal: '—', description: 'Tab change handler' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="Underline"><Tabs variant="underline" defaultValue="a" tabs={tabs} /></Row>
          <Row label="Pills"><Tabs variant="pills" defaultValue="a" tabs={tabs} /></Row>
        </div>
      }
    />
  )
}
