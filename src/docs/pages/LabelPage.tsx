import { Input, Label } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function LabelPage() {
  return (
    <ComponentDoc
      name="Label" description="Form label element that provides accessible labeling for inputs."
      preview={
        <div className="w-full max-w-xs space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="John Doe" />
        </div>
      }
      code={`<Label htmlFor="name">Full Name</Label>
<Input id="name" placeholder="John Doe" />`}
      props={[
        { name: 'children', type: 'ReactNode', defaultVal: '—', description: 'Label text content' },
        { name: 'htmlFor', type: 'string', defaultVal: '—', description: 'ID of the associated input element' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="With input">
            <div className="w-72 space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" />
            </div>
          </Row>
          <Row label="Disabled state">
            <div className="w-72 space-y-2">
              <Label htmlFor="disabled-input">Disabled</Label>
              <Input id="disabled-input" disabled value="Cannot edit" />
            </div>
          </Row>
        </div>
      }
    />
  )
}
