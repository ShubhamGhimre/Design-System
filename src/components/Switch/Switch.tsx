import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from '../../lib/utils';

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  label?: string;
}

export const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, SwitchProps>(
  function Switch({ className, label, id, ...props }, ref) {
    const switchId = id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
    return (
      <div className="flex items-center gap-2">
        <SwitchPrimitive.Root
          ref={ref}
          id={switchId}
          className={cn(
            'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-normal ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
            className,
          )}
          {...props}
        >
          <SwitchPrimitive.Thumb
            className={cn(
              'pointer-events-none block size-4 rounded-full bg-background shadow-xs transition-transform duration-normal ease-standard data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
            )}
          />
        </SwitchPrimitive.Root>
        {label && (
          <label
            htmlFor={switchId}
            className="cursor-pointer select-none text-sm text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-60"
          >
            {label}
          </label>
        )}
      </div>
    );
  },
);
