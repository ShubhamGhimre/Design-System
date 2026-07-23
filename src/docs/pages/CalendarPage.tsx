import { Calendar } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function CalendarPage() {
  return (
    <ComponentDoc
      name="Calendar"
      description="A date picker calendar component. Built on react-day-picker."
      radixPrimitive="—"
      preview={
        <div className="rounded-lg border border-border">
          <Calendar mode="single" />
        </div>
      }
      code={`const [date, setDate] = useState<Date>()

return (
  <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
  />
)`}
      props={[
        { name: 'mode', type: '"single" | "multiple" | "range"', defaultVal: '—', description: 'Selection mode' },
        { name: 'selected', type: 'Date | Date[] | DateRange', defaultVal: '—', description: 'The selected date(s)' },
        { name: 'onSelect', type: '(date) => void', defaultVal: '—', description: 'Callback when a date is selected' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="Single mode">
            <div className="rounded-lg border border-border">
              <Calendar mode="single" />
            </div>
          </Row>
          <Row label="With footer">
            <div className="rounded-lg border border-border">
              <Calendar mode="single" footer={<p className="text-xs text-muted-foreground">Select a date</p>} />
            </div>
          </Row>
        </div>
      }
      anatomy={['<Calendar> — The root calendar component']}
      accessibility={['Full keyboard navigation with arrow keys', 'ARIA grid pattern for screen readers', 'Focus management for selected and focused dates']}
    />
  )
}
