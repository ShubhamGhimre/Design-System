import { Combobox } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function ComboboxPage() {
  return (
    <ComponentDoc
      name="Combobox"
      description="A searchable dropdown select with autocomplete."
      radixPrimitive="—"
      preview={
        <div className="w-64">
          <Combobox
            options={[
              { value: 'apple', label: 'Apple' },
              { value: 'banana', label: 'Banana' },
              { value: 'cherry', label: 'Cherry' },
            ]}
            placeholder="Pick a fruit..."
          />
        </div>
      }
      code={`<Combobox
  options={[
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
  ]}
  placeholder="Pick a fruit..."
/>`}
      props={[
        { name: 'options', type: 'ComboboxOption[]', defaultVal: '—', description: 'Array of options with value and label' },
        { name: 'value', type: 'string', defaultVal: '—', description: 'Controlled selected value' },
        { name: 'onValueChange', type: '(value: string) => void', defaultVal: '—', description: 'Callback when selection changes' },
        { name: 'placeholder', type: 'string', defaultVal: '"Select..."', description: 'Placeholder text when nothing is selected' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="Fruits">
            <div className="w-64">
              <Combobox
                options={[
                  { value: 'apple', label: 'Apple' },
                  { value: 'banana', label: 'Banana' },
                  { value: 'cherry', label: 'Cherry' },
                  { value: 'date', label: 'Date' },
                  { value: 'elderberry', label: 'Elderberry' },
                ]}
                placeholder="Choose a fruit..."
              />
            </div>
          </Row>
        </div>
      }
      anatomy={['<Combobox> — The root combobox component']}
      accessibility={['Uses combobox role for screen readers', 'Keyboard navigable with arrow keys', 'Supports type-to-filter']}
    />
  )
}
