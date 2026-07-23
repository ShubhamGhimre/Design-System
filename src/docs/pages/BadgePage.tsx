import { Badge } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function BadgePage() {
  return (
    <ComponentDoc
      name="Badge" description="A small label that displays status, counts, or categories."
      preview={
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      }
      code={`<Badge variant="default" size="md">
  Badge
</Badge>`}
      props={[
        { name: 'variant', type: '"default" | "secondary" | "destructive" | "outline"', defaultVal: '"default"', description: 'Visual style' },
        { name: 'size', type: '"sm" | "md" | "lg"', defaultVal: '"md"', description: 'Badge size' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="Variants">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </Row>
          <Row label="Sizes">
            <Badge size="sm">Small</Badge>
            <Badge size="md">Medium</Badge>
            <Badge size="lg">Large</Badge>
          </Row>
        </div>
      }
    />
  )
}
