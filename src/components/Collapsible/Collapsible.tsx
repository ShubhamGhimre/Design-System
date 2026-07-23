import * as React from 'react'
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'
import { cn } from '../../lib/utils'

export interface CollapsibleProps
  extends React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root> {}

export function Collapsible({ className, ...props }: CollapsibleProps) {
  return <CollapsiblePrimitive.Root className={cn('', className)} {...props} />
}

export const CollapsibleTrigger = CollapsiblePrimitive.Trigger
export const CollapsibleContent = CollapsiblePrimitive.Content
