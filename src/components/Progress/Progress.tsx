import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cn } from '../../lib/utils';

export interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value: number;
  showValue?: boolean;
}

export const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
  function Progress({ className, value, showValue = false, ...props }, ref) {
    return (
      <div className="flex items-center gap-3">
        <ProgressPrimitive.Root
          ref={ref}
          value={value}
          className={cn(
            'relative h-2 w-full overflow-hidden rounded-full bg-secondary',
            className,
          )}
          {...props}
        >
          <ProgressPrimitive.Indicator
            className="h-full w-full flex-1 rounded-full bg-primary transition-all duration-normal ease-standard"
            style={{ transform: `translateX(-${100 - Math.max(0, Math.min(100, value))}%)` }}
          />
        </ProgressPrimitive.Root>
        {showValue && (
          <span className="min-w-[3ch] text-right text-sm tabular-nums text-muted-foreground">
            {Math.round(value)}%
          </span>
        )}
      </div>
    );
  },
);
