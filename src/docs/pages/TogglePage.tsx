import { Toggle } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'
import { Bold, Italic } from 'lucide-react'

export function TogglePage() {
  return (
    <ComponentDoc
      name="Toggle" description="A two-state toggle button. Built on Radix UI Toggle."
      radixPrimitive="@radix-ui/react-toggle"
      preview={
        <div className="flex gap-2">
          <Toggle aria-label="Toggle bold"><Bold className="size-4" /></Toggle>
          <Toggle aria-label="Toggle italic"><Italic className="size-4" /></Toggle>
        </div>
      }
      code={`<Toggle aria-label="Toggle bold">
  <Bold className="size-4" />
</Toggle>`}
      props={[
        { name: 'variant', type: '"default" | "outline"', defaultVal: '"default"', description: 'Toggle style' },
        { name: 'size', type: '"sm" | "md" | "lg"', defaultVal: '"md"', description: 'Toggle size' },
        { name: 'pressed', type: 'boolean', defaultVal: '—', description: 'Controlled pressed state' },
        { name: 'defaultPressed', type: 'boolean', defaultVal: 'false', description: 'Default pressed state' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="Variants">
            <Toggle variant="default" aria-label="Bold" defaultPressed><Bold className="size-4" /></Toggle>
            <Toggle variant="outline" aria-label="Italic"><Italic className="size-4" /></Toggle>
          </Row>
          <Row label="Sizes">
            <Toggle size="sm" aria-label="Small"><Bold className="size-3" /></Toggle>
            <Toggle size="md" aria-label="Medium"><Bold className="size-4" /></Toggle>
            <Toggle size="lg" aria-label="Large"><Bold className="size-5" /></Toggle>
          </Row>
        </div>
      }
    />
  )
}
