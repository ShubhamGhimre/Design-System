import { Sun } from 'lucide-react'
import { Button } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function ButtonPage() {
  return (
    <ComponentDoc
      name="Button" description="Triggers an action or event. Supports multiple variants, sizes, loading state, and icon slots."
      radixPrimitive="—"
      preview={
        <div className="flex flex-wrap items-center gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      }
      code={`<Button variant="primary" size="md">
  Button
</Button>`}
      usage={`<Button loading>Loading</Button>
<Button disabled>Disabled</Button>
<Button iconOnly leadingIcon={<Sun />} aria-label="Search" />
<Button trailingIcon={<ArrowRight />}>Next</Button>`}
      props={[
        { name: 'variant', type: '"primary" | "secondary" | "ghost" | "destructive"', defaultVal: '"primary"', description: 'Visual style of the button' },
        { name: 'size', type: '"sm" | "md" | "lg"', defaultVal: '"md"', description: 'Button size' },
        { name: 'loading', type: 'boolean', defaultVal: 'false', description: 'Shows a loading spinner and disables the button' },
        { name: 'disabled', type: 'boolean', defaultVal: 'false', description: 'Disables the button' },
        { name: 'iconOnly', type: 'boolean', defaultVal: 'false', description: 'Removes padding for icon-only buttons' },
        { name: 'leadingIcon', type: 'ReactNode', defaultVal: '—', description: 'Icon displayed before the label' },
        { name: 'trailingIcon', type: 'ReactNode', defaultVal: '—', description: 'Icon displayed after the label' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="Variants">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </Row>
          <Row label="Sizes">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </Row>
          <Row label="States">
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
            <Button iconOnly leadingIcon={<Sun className="size-4" />} aria-label="Icon only" />
          </Row>
        </div>
      }
      anatomy={['<Button> — The root button element']}
      accessibility={['Supports standard button keyboard interactions', 'ARIA attributes managed automatically', 'Focus ring visible on keyboard navigation']}
    />
  )
}
