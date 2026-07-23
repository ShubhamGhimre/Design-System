import { Field, Input } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function FieldPage() {
  return (
    <ComponentDoc
      name="Field" description="Form field wrapper with label, error message, hint text, and required indicator."
      preview={
        <div className="w-full max-w-xs space-y-4">
          <Field label="Email" required>
            <Input placeholder="you@example.com" />
          </Field>
          <Field label="Password" error="Password must be at least 8 characters.">
            <Input type="password" hasError placeholder="Enter password" />
          </Field>
        </div>
      }
      code={`<Field label="Email" required>
  <Input placeholder="you@example.com" />
</Field>

<Field label="Password" error="Password must be at least 8 characters.">
  <Input type="password" hasError placeholder="Enter password" />
</Field>`}
      props={[
        { name: 'label', type: 'string', defaultVal: '—', description: 'Field label text' },
        { name: 'error', type: 'string', defaultVal: '—', description: 'Error message (shows destructive style)' },
        { name: 'hint', type: 'string', defaultVal: '—', description: 'Hint text below the input' },
        { name: 'required', type: 'boolean', defaultVal: 'false', description: 'Shows a required asterisk' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="Default">
            <div className="w-72">
              <Field label="Username" hint="Choose a unique username.">
                <Input placeholder="johndoe" />
              </Field>
            </div>
          </Row>
          <Row label="Required">
            <div className="w-72">
              <Field label="Full name" required>
                <Input placeholder="John Doe" />
              </Field>
            </div>
          </Row>
          <Row label="Error">
            <div className="w-72">
              <Field label="Email" error="Please enter a valid email address.">
                <Input hasError placeholder="invalid" />
              </Field>
            </div>
          </Row>
        </div>
      }
    />
  )
}
