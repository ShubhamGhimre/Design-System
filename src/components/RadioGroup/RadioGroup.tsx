import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from '../../lib/utils';

export interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  options: { value: string; label: string; disabled?: boolean }[];
}

export const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(function RadioGroup({ className, options, orientation = 'vertical', ...props }, ref) {
  return (
    <RadioGroupPrimitive.Root
      ref={ref}
      orientation={orientation}
      className={cn(
        'flex gap-2',
        orientation === 'vertical' ? 'flex-col' : 'flex-row flex-wrap',
        className,
      )}
      {...props}
    >
      {options.map((option) => (
        <div key={option.value} className="flex items-center gap-2">
          <RadioGroupPrimitive.Item
            id={`radio-${option.value}`}
            value={option.value}
            disabled={option.disabled}
            className={cn(
              'size-4 rounded-full border border-input bg-background transition-[background-color,border-color,box-shadow] duration-normal ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60',
              'data-[state=checked]:border-primary data-[state=checked]:bg-primary',
            )}
          >
            <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
              <span className="size-1.5 rounded-full bg-primary" />
            </RadioGroupPrimitive.Indicator>
          </RadioGroupPrimitive.Item>
          <label
            htmlFor={`radio-${option.value}`}
            className="cursor-pointer select-none text-sm text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-60"
          >
            {option.label}
          </label>
        </div>
      ))}
    </RadioGroupPrimitive.Root>
  );
});
