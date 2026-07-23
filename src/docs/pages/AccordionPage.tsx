import { Accordion } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function AccordionPage() {
  return (
    <ComponentDoc
      name="Accordion" description="A vertically stacked set of interactive headings that reveal or hide associated content." radixPrimitive="@radix-ui/react-accordion"
      preview={
        <Accordion type="single" collapsible defaultValue="a"
          items={[
            { value: 'a', trigger: 'Section 1', content: <p className="text-sm text-muted-foreground">Content 1</p> },
            { value: 'b', trigger: 'Section 2', content: <p className="text-sm text-muted-foreground">Content 2</p> },
          ]}
        />
      }
      code={`<Accordion
  items={[
    { value: "item-1", trigger: "Section 1", content: <p>Content</p> },
    { value: "item-2", trigger: "Section 2", content: <p>Content</p> },
  ]}
/>`}
      props={[
        { name: 'items', type: 'AccordionItem[]', defaultVal: '—', description: 'Array of { value, trigger, content }' },
        { name: 'type', type: '"single" | "multiple"', defaultVal: '"single"', description: 'Allow multiple open items' },
        { name: 'collapsible', type: 'boolean', defaultVal: 'true', description: 'Allow collapsing the open item' },
        { name: 'defaultValue', type: 'string | string[]', defaultVal: '—', description: 'Default open item(s)' },
      ]}
    />
  )
}
