import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface AccordionItem {
  value: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
}

export type AccordionProps = {
  items: AccordionItem[];
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  defaultValue?: string | string[];
  value?: string | string[];
  onValueChange?: (value: string | string[]) => void;
  disabled?: boolean;
  className?: string;
};

export function Accordion({
  items,
  className,
  type = 'single',
  collapsible = true,
  defaultValue,
  value,
  onValueChange,
  disabled,
}: AccordionProps) {
  const rootProps = {
    type,
    collapsible,
    defaultValue,
    value,
    onValueChange,
    disabled,
    className: cn('w-full rounded-md border border-border', className),
  } as unknown as AccordionPrimitive.AccordionSingleProps;

  return (
    <AccordionPrimitive.Root {...rootProps}>
      {items.map((item) => (
        <AccordionPrimitive.Item
          key={item.value}
          value={item.value}
          className="border-b border-border last:border-b-0"
        >
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
              className={cn(
                'group flex flex-1 items-center justify-between px-4 py-3 text-sm font-medium text-foreground transition-[background-color] duration-fast ease-standard',
                'hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring',
              )}
            >
              {item.trigger}
              <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-normal ease-standard group-data-[state=open]:rotate-180" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content
            className={cn(
              'overflow-hidden px-4 pb-3 text-sm text-foreground',
              'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
            )}
          >
            {item.content}
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
