import { Progress } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function ProgressPage() {
  return (
    <ComponentDoc
      name="Progress" description="A progress bar that shows the completion status of a task. Built on Radix UI Progress."
      radixPrimitive="@radix-ui/react-progress"
      preview={<div className="w-full max-w-sm"><Progress value={65} showValue /></div>}
      code={`<Progress value={65} showValue />`}
      props={[
        { name: 'value', type: 'number', defaultVal: '—', description: 'Progress value (0-100)' },
        { name: 'showValue', type: 'boolean', defaultVal: 'false', description: 'Shows percentage text' },
      ]}
    />
  )
}
