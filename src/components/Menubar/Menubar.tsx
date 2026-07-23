import * as React from 'react'
import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { cn } from '../../lib/utils'

export function Menubar({ className, ...props }: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      className={cn('flex h-10 items-center gap-1 rounded-md border border-border bg-background p-1 shadow-xs', className)}
      {...props}
    />
  )
}

export function MenubarMenu({ ...props }: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu {...props} />
}

export function MenubarTrigger({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      className={cn(
        'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium text-foreground outline-none transition-colors duration-fast hover:bg-muted focus-visible:bg-accent focus-visible:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
        className,
      )}
      {...props}
    />
  )
}

export function MenubarContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPrimitive.Portal>
      <MenubarPrimitive.Content
        sideOffset={sideOffset}
        className={cn(
          'z-50 min-w-48 overflow-hidden rounded-md border border-border bg-popover p-1 shadow-md',
          'transition-all duration-150 data-[state=closed]:opacity-0 data-[state=open]:opacity-100',
          className,
        )}
        {...props}
      />
    </MenubarPrimitive.Portal>
  )
}

export function MenubarItem({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item>) {
  return (
    <MenubarPrimitive.Item
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm text-foreground outline-none transition-colors duration-fast data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
        className,
      )}
      {...props}
    />
  )
}

export function MenubarSeparator({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>) {
  return <MenubarPrimitive.Separator className={cn('-mx-1 my-1 h-px bg-border', className)} {...props} />
}

export function MenubarLabel({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label>) {
  return (
    <MenubarPrimitive.Label
      className={cn('px-2 py-1.5 text-xs font-semibold text-muted-foreground', className)}
      {...props}
    />
  )
}

export const MenubarCheckboxItem = MenubarPrimitive.CheckboxItem
export const MenubarRadioItem = MenubarPrimitive.RadioItem
export const MenubarRadioGroup = MenubarPrimitive.RadioGroup
export const MenubarSub = MenubarPrimitive.Sub
export const MenubarSubTrigger = MenubarPrimitive.SubTrigger
export const MenubarSubContent = MenubarPrimitive.SubContent
export const MenubarShortcut = MenubarPrimitive.SubTrigger
