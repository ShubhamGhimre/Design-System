import { RadioGroup } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function RadioGroupPage() {
  return (
    <ComponentDoc
      name="RadioGroup" description="A set of radio buttons where only one option can be selected at a time."
      radixPrimitive="@radix-ui/react-radio-group"
      preview={
        <RadioGroup defaultValue="1" options={[
          { value: '1', label: 'Option A' },
          { value: '2', label: 'Option B' },
          { value: '3', label: 'Option C', disabled: true },
        ]} />
      }
      code={`<RadioGroup
  defaultValue="option-1"
  options={[
    { value: "option-1", label: "Option A" },
    { value: "option-2", label: "Option B" },
  ]}
/>`}
      props={[
        { name: 'options', type: '{ value: string; label: string; disabled? }[]', defaultVal: '—', description: 'Radio options' },
        { name: 'defaultValue', type: 'string', defaultVal: '—', description: 'Default selected value' },
        { name: 'value', type: 'string', defaultVal: '—', description: 'Controlled value' },
        { name: 'onValueChange', type: '(value: string) => void', defaultVal: '—', description: 'Change handler' },
        { name: 'orientation', type: '"vertical" | "horizontal"', defaultVal: '"vertical"', description: 'Layout direction' },
      ]}
    />
  )
}
