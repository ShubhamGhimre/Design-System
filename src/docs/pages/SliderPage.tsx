import { Slider } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function SliderPage() {
  return (
    <ComponentDoc
      name="Slider" description="A range input that lets users select a value from a range. Built on Radix UI Slider."
      radixPrimitive="@radix-ui/react-slider"
      preview={<div className="w-full max-w-sm"><Slider showValue defaultValue={[65]} /></div>}
      code={`<Slider defaultValue={[50]} showValue />`}
      props={[
        { name: 'defaultValue', type: 'number[]', defaultVal: '[50]', description: 'Default value(s)' },
        { name: 'value', type: 'number[]', defaultVal: '—', description: 'Controlled value(s)' },
        { name: 'onValueChange', type: '(value: number[]) => void', defaultVal: '—', description: 'Change handler' },
        { name: 'showValue', type: 'boolean', defaultVal: 'false', description: 'Shows the current value' },
        { name: 'min', type: 'number', defaultVal: '0', description: 'Minimum value' },
        { name: 'max', type: 'number', defaultVal: '100', description: 'Maximum value' },
        { name: 'step', type: 'number', defaultVal: '1', description: 'Step increment' },
        { name: 'disabled', type: 'boolean', defaultVal: 'false', description: 'Disables the slider' },
      ]}
    />
  )
}
