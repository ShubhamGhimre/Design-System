import * as React from 'react'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'
import { cn } from '../../lib/utils'
import { buttonVariants } from '../Button'

export interface AlertDialogProps
  extends React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Root> {
  title?: string
  description?: string
  trigger?: React.ReactNode
  cancelLabel?: string
  actionLabel?: string
  onAction?: () => void
}

export function AlertDialog({
  title,
  description,
  trigger,
  cancelLabel = 'Cancel',
  actionLabel = 'Continue',
  onAction,
  children,
  ...props
}: AlertDialogProps) {
  return (
    <AlertDialogPrimitive.Root {...props}>
      {trigger && <AlertDialogPrimitive.Trigger asChild>{trigger}</AlertDialogPrimitive.Trigger>}
      <AlertDialogPrimitive.Portal>
        <AlertDialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 data-[state=closed]:opacity-0 data-[state=open]:opacity-100 data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <AlertDialogPrimitive.Content className="fixed start-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-lg border border-border bg-background p-6 shadow-lg transition-all duration-150 data-[state=closed]:opacity-0 data-[state=open]:opacity-100 data-[state=closed]:scale-95 data-[state=open]:scale-100">
          {title && <AlertDialogPrimitive.Title className="text-lg font-semibold text-foreground">{title}</AlertDialogPrimitive.Title>}
          {description && <AlertDialogPrimitive.Description className="mt-2 text-sm text-muted-foreground">{description}</AlertDialogPrimitive.Description>}
          {children && <div className="mt-4">{children}</div>}
          <div className="mt-6 flex justify-end gap-3">
            <AlertDialogPrimitive.Cancel className={cn(buttonVariants({ variant: 'secondary' }))}>
              {cancelLabel}
            </AlertDialogPrimitive.Cancel>
            <AlertDialogPrimitive.Action className={cn(buttonVariants({ variant: 'destructive' }))} onClick={onAction}>
              {actionLabel}
            </AlertDialogPrimitive.Action>
          </div>
        </AlertDialogPrimitive.Content>
      </AlertDialogPrimitive.Portal>
    </AlertDialogPrimitive.Root>
  )
}
