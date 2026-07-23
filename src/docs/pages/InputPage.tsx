import { Input } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function InputPage() {
  return (
    <ComponentDoc
      name="Input" description="Collects text input from users. Supports leading icons, error state, and multiple sizes."
      preview={
        <div className="w-full max-w-sm">
          <Input placeholder="Enter text..." />
        </div>
      }
      code={`<Input placeholder="Enter text..." size="md" />`}
      usage={`<Input placeholder="With icon" leadingIcon={<Search />} />
<Input hasError placeholder="Error state" />
<Input disabled value="Disabled" />`}
      props={[
        { name: 'size', type: '"sm" | "md" | "lg"', defaultVal: '"md"', description: 'Input height' },
        { name: 'hasError', type: 'boolean', defaultVal: 'false', description: 'Shows error styling' },
        { name: 'leadingIcon', type: 'ReactNode', defaultVal: '—', description: 'Icon inside the input start' },
        { name: 'disabled', type: 'boolean', defaultVal: 'false', description: 'Disables the input' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="Sizes">
            <div className="w-48"><Input size="sm" placeholder="Small" /></div>
            <div className="w-48"><Input size="md" placeholder="Medium" /></div>
            <div className="w-48"><Input size="lg" placeholder="Large" /></div>
          </Row>
          <Row label="States">
            <div className="w-64"><Input placeholder="Default" /></div>
            <div className="w-64"><Input placeholder="With icon" leadingIcon={<span className="text-muted-foreground">🔍</span>} /></div>
            <div className="w-64"><Input hasError placeholder="Error state" /></div>
            <div className="w-64"><Input disabled value="Disabled" /></div>
          </Row>
        </div>
      }
    />
  )
}
