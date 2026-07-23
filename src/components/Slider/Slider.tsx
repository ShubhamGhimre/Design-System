import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '../../lib/utils';

export interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  showValue?: boolean;
}

export const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  function Slider({ className, showValue, value, defaultValue, ...props }, ref) {
    const [internalValue, setInternalValue] = React.useState(defaultValue ?? [50]);
    const currentValue = value ?? internalValue;
    const setValue = value !== undefined ? props.onValueChange ?? setInternalValue : setInternalValue;

    return (
      <div className="flex items-center gap-3">
        <SliderPrimitive.Root
          ref={ref}
          value={currentValue}
          onValueChange={(v) => { setValue(v); props.onValueChange?.(v); }}
          className={cn(
            'relative flex h-5 w-full touch-none select-none items-center',
            className,
          )}
          {...props}
        >
          <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-secondary">
            <SliderPrimitive.Range className="absolute h-full bg-primary" />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb className="block size-4 rounded-full border-2 border-primary bg-background shadow-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50" />
        </SliderPrimitive.Root>
        {showValue && (
          <span className="min-w-[2ch] text-right text-sm tabular-nums text-muted-foreground">
            {currentValue[0]}
          </span>
        )}
      </div>
    );
  },
);
