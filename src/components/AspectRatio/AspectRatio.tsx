import * as React from 'react'
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio'
import { cn } from '../../lib/utils'

export interface AspectRatioProps extends React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root> {}

export function AspectRatio({ className, ...props }: AspectRatioProps) {
  return <AspectRatioPrimitive.Root className={cn('overflow-hidden rounded-md', className)} {...props} />
}
