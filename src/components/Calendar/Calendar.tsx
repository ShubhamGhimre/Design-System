import * as React from 'react'
import { DayPicker, UI } from 'react-day-picker'
import { cn } from '../../lib/utils'

export type CalendarProps = React.ComponentProps<typeof DayPicker>

export function Calendar({ className, classNames, ...props }: CalendarProps) {
  return (
    <DayPicker
      className={cn('p-3', className)}
      classNames={{
        [UI.Root]: cn('', classNames?.[UI.Root]),
        [UI.Months]: cn('flex flex-col sm:flex-row gap-4', classNames?.[UI.Months]),
        [UI.Month]: cn('flex flex-col gap-2', classNames?.[UI.Month]),
        [UI.MonthCaption]: cn(
          'flex justify-center pt-1 relative items-center',
          classNames?.[UI.MonthCaption],
        ),
        [UI.CaptionLabel]: cn('text-sm font-medium', classNames?.[UI.CaptionLabel]),
        [UI.Nav]: cn('flex items-center gap-1', classNames?.[UI.Nav]),
        [UI.PreviousMonthButton]: cn(
          'inline-flex items-center justify-center size-7 rounded-md border border-border bg-background text-foreground hover:bg-muted transition-colors',
          classNames?.[UI.PreviousMonthButton],
        ),
        [UI.NextMonthButton]: cn(
          'inline-flex items-center justify-center size-7 rounded-md border border-border bg-background text-foreground hover:bg-muted transition-colors',
          classNames?.[UI.NextMonthButton],
        ),
        [UI.MonthGrid]: cn('w-full border-collapse', classNames?.[UI.MonthGrid]),
        [UI.Weekdays]: cn('flex', classNames?.[UI.Weekdays]),
        [UI.Weekday]: cn(
          'w-9 text-xs font-medium text-muted-foreground text-center',
          classNames?.[UI.Weekday],
        ),
        [UI.Weeks]: cn('flex flex-col gap-1', classNames?.[UI.Weeks]),
        [UI.Week]: cn('flex', classNames?.[UI.Week]),
        [UI.Day]: cn(
          'size-9 text-center text-sm p-0 relative focus-within:relative focus-within:z-20',
          classNames?.[UI.Day],
        ),
        [UI.DayButton]: cn(
          'size-9 rounded-md font-normal text-foreground hover:bg-accent hover:text-accent-foreground transition-colors',
          'aria-selected:bg-primary aria-selected:text-primary-foreground',
          'aria-selected:hover:bg-primary aria-selected:hover:text-primary-foreground',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          classNames?.[UI.DayButton],
        ),
        [UI.Footer]: cn('', classNames?.[UI.Footer]),
        ...classNames,
      }}
      {...props}
    />
  )
}

// Re-export react-day-picker types
export type { DateRange } from 'react-day-picker'
export { UI } from 'react-day-picker'
