import { DatePicker } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function DatePickerPage() {
  return (
    <ComponentDoc
      name="DatePicker" description="A date picker that opens a calendar popover for selecting a single date."
      radixPrimitive="—"
      preview={
        <div className="w-full max-w-xs">
          <DatePicker placeholder="Pick a date" />
        </div>
      }
      code={`<DatePicker placeholder="Pick a date" />`}
      usage={`<DatePicker
  value={date}
  onValueChange={setDate}
  placeholder="Select date"
  disabled
/>`}
      props={[
        { name: 'value', type: 'Date', defaultVal: '—', description: 'Controlled selected date' },
        { name: 'onValueChange', type: '(date: Date | undefined) => void', defaultVal: '—', description: 'Callback when date changes' },
        { name: 'placeholder', type: 'string', defaultVal: '"Pick a date"', description: 'Placeholder text when no date selected' },
        { name: 'disabled', type: 'boolean', defaultVal: 'false', description: 'Disables the date picker' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="Default">
            <div className="w-64"><DatePicker placeholder="Pick a date" /></div>
          </Row>
          <Row label="Disabled">
            <div className="w-64"><DatePicker placeholder="Disabled" disabled /></div>
          </Row>
        </div>
      }
    />
  )
}
