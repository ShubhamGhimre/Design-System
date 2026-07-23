import { NativeSelect } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

const fruits = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
]

export function NativeSelectPage() {
  return (
    <ComponentDoc
      name="NativeSelect" description="A native HTML select element with consistent styling and size variants."
      preview={
        <div className="w-72">
          <NativeSelect options={fruits} placeholder="Choose a fruit" />
        </div>
      }
      code={`<NativeSelect
  placeholder="Choose a fruit"
  options={[
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
  ]}
/>`}
      props={[
        { name: 'options', type: '{ value, label, disabled? }[]', defaultVal: '—', description: 'Array of selectable options' },
        { name: 'placeholder', type: 'string', defaultVal: '—', description: 'Placeholder text shown when no option is selected' },
        { name: 'size', type: '"sm" | "md" | "lg"', defaultVal: '"md"', description: 'Select height and font size' },
        { name: 'hasError', type: 'boolean', defaultVal: 'false', description: 'Shows error state styling' },
        { name: 'disabled', type: 'boolean', defaultVal: 'false', description: 'Disables the select element' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="Sizes">
            <div className="w-56"><NativeSelect size="sm" placeholder="Small" options={fruits} /></div>
            <div className="w-56"><NativeSelect size="md" placeholder="Medium" options={fruits} /></div>
            <div className="w-56"><NativeSelect size="lg" placeholder="Large" options={fruits} /></div>
          </Row>
          <Row label="States">
            <div className="w-72"><NativeSelect placeholder="Default" options={fruits} /></div>
            <div className="w-72"><NativeSelect hasError placeholder="Error" options={fruits} /></div>
            <div className="w-72"><NativeSelect disabled placeholder="Disabled" options={fruits} /></div>
          </Row>
        </div>
      }
    />
  )
}
