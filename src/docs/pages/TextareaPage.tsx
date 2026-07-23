import { Textarea } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function TextareaPage() {
  return (
    <ComponentDoc
      name="Textarea" description="Collects multi-line text input. Supports error state and multiple sizes."
      preview={<div className="w-full max-w-sm"><Textarea placeholder="Enter text..." rows={3} /></div>}
      code={`<Textarea placeholder="Enter text..." rows={4} />`}
      props={[
        { name: 'size', type: '"sm" | "md" | "lg"', defaultVal: '"md"', description: 'Textarea padding/size' },
        { name: 'hasError', type: 'boolean', defaultVal: 'false', description: 'Shows error styling' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="Sizes">
            <div className="w-full max-w-md"><Textarea size="sm" placeholder="Small" rows={2} /></div>
            <div className="w-full max-w-md"><Textarea size="md" placeholder="Medium" rows={2} /></div>
            <div className="w-full max-w-md"><Textarea size="lg" placeholder="Large" rows={2} /></div>
          </Row>
          <Row label="States">
            <div className="w-full max-w-md"><Textarea placeholder="Default" rows={2} /></div>
            <div className="w-full max-w-md"><Textarea hasError placeholder="Error state" rows={2} /></div>
            <div className="w-full max-w-md"><Textarea disabled value="Disabled" rows={2} /></div>
          </Row>
        </div>
      }
    />
  )
}
