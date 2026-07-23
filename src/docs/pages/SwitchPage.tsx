import { Switch } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function SwitchPage() {
  return (
    <ComponentDoc
      name="Switch" description="A toggle control that allows users to switch between two states. Built on Radix UI Switch."
      radixPrimitive="@radix-ui/react-switch"
      preview={<Switch label="Airplane mode" defaultChecked />}
      code={`<Switch label="Airplane mode" />`}
      usage={`<Switch label="Checked" defaultChecked />
<Switch label="Disabled" disabled />`}
      props={[
        { name: 'label', type: 'string', defaultVal: '—', description: 'Label text rendered next to the switch' },
        { name: 'disabled', type: 'boolean', defaultVal: 'false', description: 'Disables the switch' },
      ]}
      variants={
        <Row label="States">
          <Switch label="Unchecked" />
          <Switch label="Checked" defaultChecked />
          <Switch label="Disabled" disabled />
        </Row>
      }
    />
  )
}
