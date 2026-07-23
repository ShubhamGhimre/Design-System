import { Checkbox } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function CheckboxPage() {
  return (
    <ComponentDoc
      name="Checkbox" description="A control that allows the user to toggle between checked and unchecked. Supports indeterminate state."
      radixPrimitive="@radix-ui/react-checkbox"
      preview={
        <div className="flex flex-wrap items-center gap-6">
          <Checkbox label="Accept terms" />
          <Checkbox label="Checked" defaultChecked />
          <Checkbox label="Indeterminate" indeterminate />
        </div>
      }
      code={`<Checkbox label="Accept terms" />`}
      usage={`<Checkbox label="Checked" defaultChecked />
<Checkbox label="Indeterminate" indeterminate />
<Checkbox label="Disabled" disabled />`}
      props={[
        { name: 'label', type: 'string', defaultVal: '—', description: 'Label text rendered next to the checkbox' },
        { name: 'indeterminate', type: 'boolean', defaultVal: 'false', description: 'Shows a minus icon instead of check' },
        { name: 'disabled', type: 'boolean', defaultVal: 'false', description: 'Disables the checkbox' },
      ]}
      variants={
        <Row label="States">
          <Checkbox label="Unchecked" />
          <Checkbox label="Checked" defaultChecked />
          <Checkbox label="Indeterminate" indeterminate />
          <Checkbox label="Disabled" disabled />
        </Row>
      }
    />
  )
}
