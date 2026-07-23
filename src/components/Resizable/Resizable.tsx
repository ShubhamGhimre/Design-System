import * as React from 'react'
import { Group, Panel, Separator } from 'react-resizable-panels'
import { GripVertical } from 'lucide-react'
import { cn } from '../../lib/utils'

export { Group as ResizablePanelGroup, Panel as ResizablePanel }

export interface ResizableHandleProps extends React.ComponentPropsWithoutRef<typeof Separator> {
  withHandle?: boolean
}

export function ResizableHandle({ withHandle, className, ...props }: ResizableHandleProps) {
  return (
    <Separator
      className={cn(
        'relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1',
        'data-[resize-handle-active]:bg-ring',
        'group',
        className,
      )}
      {...props}
    >
      {withHandle && (
        <div className="z-10 flex size-4 items-center justify-center rounded-sm border border-border bg-background shadow-xs">
          <GripVertical className="size-3 text-muted-foreground" />
        </div>
      )}
    </Separator>
  )
}
