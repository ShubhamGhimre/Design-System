import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from '../Button'
import { Calendar } from '../Calendar'
import { Popover } from '../Popover'

export interface DatePickerProps {
  value?: Date
  onValueChange?: (date: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}

export function DatePicker({
  value,
  onValueChange,
  placeholder = 'Pick a date',
  disabled,
  className,
}: DatePickerProps) {
  return (
    <Popover
      matchTriggerWidth={false}
      trigger={
        <Button
          variant="outline"
          disabled={disabled}
          className={cn(
            'w-full justify-start gap-2 font-normal',
            !value && 'text-muted-foreground',
            className,
          )}
        >
          <CalendarIcon className="size-4" />
          {value ? format(value, 'PPP') : placeholder}
        </Button>
      }
    >
      <Calendar
        mode="single"
        selected={value}
        onSelect={(date: Date | undefined) => onValueChange?.(date)}
        autoFocus
      />
    </Popover>
  )
}
