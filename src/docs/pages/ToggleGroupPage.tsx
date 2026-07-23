import { ToggleGroup, ToggleGroupItem } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { AlignLeft, AlignCenter, AlignRight } from 'lucide-react'

export function ToggleGroupPage() {
  return (
    <ComponentDoc
      name="ToggleGroup" description="A set of toggle buttons for selecting alignment or options. Built on Radix UI Toggle Group."
      radixPrimitive="@radix-ui/react-toggle-group"
      preview={
        <ToggleGroup type="single" defaultValue="left">
          <ToggleGroupItem value="left" aria-label="Align left"><AlignLeft className="size-4" /></ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center"><AlignCenter className="size-4" /></ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right"><AlignRight className="size-4" /></ToggleGroupItem>
        </ToggleGroup>
      }
      code={`<ToggleGroup type="single" defaultValue="left">
  <ToggleGroupItem value="left">
    <AlignLeft className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center">
    <AlignCenter className="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right">
    <AlignRight className="size-4" />
  </ToggleGroupItem>
</ToggleGroup>`}
      props={[
        { name: 'type', type: '"single" | "multiple"', defaultVal: '"single"', description: 'Single or multiple selection' },
        { name: 'defaultValue', type: 'string | string[]', defaultVal: '—', description: 'Default selected value(s)' },
      ]}
    />
  )
}
