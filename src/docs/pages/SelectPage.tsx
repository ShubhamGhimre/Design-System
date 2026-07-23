import { Select } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function SelectPage() {
  const opts = [
    { value: 'opt-1', label: 'Option 1' },
    { value: 'opt-2', label: 'Option 2' },
    { value: 'opt-3', label: 'Option 3' },
  ]
  return (
    <ComponentDoc
      name="Select" description="Displays a list of options for the user to pick from. Built on Radix UI Select."
      radixPrimitive="@radix-ui/react-select"
      preview={<div className="w-64"><Select placeholder="Choose..." options={opts} /></div>}
      code={`<Select
  placeholder="Select..."
  options={[
    { value: "option-1", label: "Option 1" },
    { value: "option-2", label: "Option 2" },
  ]}
/>`}
      props={[
        { name: 'placeholder', type: 'string', defaultVal: '"Select..."', description: 'Placeholder text' },
        { name: 'options', type: 'SelectOption[]', defaultVal: '—', description: 'Array of { value, label, disabled? }' },
        { name: 'value', type: 'string', defaultVal: '—', description: 'Controlled value' },
        { name: 'defaultValue', type: 'string', defaultVal: '—', description: 'Default value' },
        { name: 'onValueChange', type: '(value: string) => void', defaultVal: '—', description: 'Change handler' },
        { name: 'size', type: '"sm" | "md" | "lg"', defaultVal: '"md"', description: 'Trigger size' },
        { name: 'hasError', type: 'boolean', defaultVal: 'false', description: 'Error state' },
        { name: 'disabled', type: 'boolean', defaultVal: 'false', description: 'Disables the select' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="Sizes">
            <div className="w-48"><Select size="sm" placeholder="Small" options={[{ value: '1', label: 'Option' }]} /></div>
            <div className="w-48"><Select size="md" placeholder="Medium" options={[{ value: '1', label: 'Option' }]} /></div>
            <div className="w-48"><Select size="lg" placeholder="Large" options={[{ value: '1', label: 'Option' }]} /></div>
          </Row>
          <Row label="States">
            <div className="w-64"><Select placeholder="Default" options={opts} /></div>
            <div className="w-64"><Select hasError placeholder="Error state" options={opts} /></div>
            <div className="w-64"><Select disabled placeholder="Disabled" options={opts} /></div>
          </Row>
        </div>
      }
    />
  )
}
