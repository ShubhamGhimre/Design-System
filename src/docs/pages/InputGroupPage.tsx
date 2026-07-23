import { Input, InputGroup } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function InputGroupPage() {
  return (
    <ComponentDoc
      name="InputGroup" description="Groups an input with add-on elements on either side (e.g. @ username, domain suffixes)."
      preview={
        <div className="flex flex-col gap-4">
          <InputGroup startAddon="@">
            <Input placeholder="username" />
          </InputGroup>
          <InputGroup endAddon=".com">
            <Input placeholder="domain" />
          </InputGroup>
        </div>
      }
      code={`<InputGroup startAddon="@">
  <Input placeholder="username" />
</InputGroup>

<InputGroup endAddon=".com">
  <Input placeholder="domain" />
</InputGroup>`}
      props={[
        { name: 'startAddon', type: 'ReactNode', defaultVal: '—', description: 'Element displayed before the input' },
        { name: 'endAddon', type: 'ReactNode', defaultVal: '—', description: 'Element displayed after the input' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="Start addon">
            <div className="w-64">
              <InputGroup startAddon="https://">
                <Input placeholder="example.com" />
              </InputGroup>
            </div>
          </Row>
          <Row label="End addon">
            <div className="w-64">
              <InputGroup endAddon=".com">
                <Input placeholder="website" />
              </InputGroup>
            </div>
          </Row>
          <Row label="Both sides">
            <div className="w-72">
              <InputGroup startAddon="$" endAddon="USD">
                <Input placeholder="0.00" />
              </InputGroup>
            </div>
          </Row>
        </div>
      }
    />
  )
}
