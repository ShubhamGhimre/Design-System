import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const tabsListVariants = cva('inline-flex items-center gap-1', {
  variants: {
    variant: {
      underline: 'border-b border-border',
      pills: '',
    },
  },
  defaultVariants: {
    variant: 'underline',
  },
});

const tabsTriggerVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium text-muted-foreground transition-all duration-fast ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        underline:
          'border-b-2 border-transparent px-3 py-2 data-[state=active]:border-primary data-[state=active]:text-foreground',
        pills:
          'rounded-md px-3 py-1.5 data-[state=active]:bg-muted data-[state=active]:text-foreground',
      },
    },
    defaultVariants: {
      variant: 'underline',
    },
  },
);

export interface TabsProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>,
    VariantProps<typeof tabsListVariants> {
  tabs: { value: string; label: string; content: React.ReactNode; disabled?: boolean }[];
}

export function Tabs({ tabs, variant, className, ...props }: TabsProps) {
  return (
    <TabsPrimitive.Root className={cn('w-full', className)} {...props}>
      <TabsPrimitive.List className={tabsListVariants({ variant })}>
        {tabs.map((tab) => (
          <TabsPrimitive.Trigger
            key={tab.value}
            value={tab.value}
            disabled={tab.disabled}
            className={tabsTriggerVariants({ variant })}
          >
            {tab.label}
          </TabsPrimitive.Trigger>
        ))}
      </TabsPrimitive.List>
      {tabs.map((tab) => (
        <TabsPrimitive.Content key={tab.value} value={tab.value} className="mt-4 text-sm text-foreground">
          {tab.content}
        </TabsPrimitive.Content>
      ))}
    </TabsPrimitive.Root>
  );
}
