import * as React from 'react'
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react'
import { Button } from '../Button'
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../Sheet'
import { Separator } from '../Separator'
import { Empty } from '../Empty'

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  imageSrc?: string
}

export interface CartDrawerProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  trigger?: React.ReactNode
  items?: CartItem[]
  onUpdateQuantity?: (id: string, qty: number) => void
  onRemoveItem?: (id: string) => void
  onCheckout?: () => void
  onContinueShopping?: () => void
  brandSlot?: React.ReactNode
  shipping?: number
}

function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)
}

export function CartDrawer({
  open,
  onOpenChange,
  trigger,
  items = [],
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onContinueShopping,
  brandSlot,
  shipping = 0,
}: CartDrawerProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const total = subtotal + shipping

  const content = items.length === 0 ? (
    <div className="flex flex-1 items-center justify-center p-6">
      <Empty
        icon={<ShoppingBag className="h-8 w-8" />}
        title="Your cart is empty"
        description="Looks like you haven't added anything yet."
        action={
          <SheetClose asChild>
            <Button variant="outline" onClick={onContinueShopping}>Continue Shopping</Button>
          </SheetClose>
        }
      />
    </div>
  ) : (
    <>
      <div className="flex-1 space-y-3 overflow-y-auto p-6">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3">
            {item.imageSrc ? (
              <img src={item.imageSrc} alt={item.name} className="h-20 w-20 flex-shrink-0 rounded-md object-cover" />
            ) : (
              <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-md bg-muted text-xs text-muted-foreground">No img</div>
            )}
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex justify-between">
                <p className="text-sm font-medium text-foreground">{item.name}</p>
                <button
                  type="button"
                  onClick={() => onRemoveItem?.(item.id)}
                  className="text-muted-foreground hover:text-destructive"
                  aria-label={`Remove ${item.name}`}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground">{formatPrice(item.price)}</p>
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  iconOnly
                  disabled={item.quantity <= 1}
                  onClick={() => onUpdateQuantity?.(item.id, item.quantity - 1)}
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-6 text-center text-sm text-foreground">{item.quantity}</span>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  iconOnly
                  onClick={() => onUpdateQuantity?.(item.id, item.quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border p-6">
        <div className="space-y-1 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="text-foreground">{formatPrice(subtotal)}</span>
          </div>
          {shipping > 0 ? (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-foreground">{formatPrice(shipping)}</span>
            </div>
          ) : (
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-primary">Free</span>
            </div>
          )}
        </div>
        <Separator className="my-3" />
        <div className="flex justify-between font-semibold text-foreground">
          <span>Total</span>
          <span>{formatPrice(total)}</span>
        </div>
        <Button className="mt-4 w-full" size="lg" onClick={onCheckout}>Checkout</Button>
        <SheetClose asChild>
          <Button variant="outline" className="mt-2 w-full" onClick={onContinueShopping}>Continue Shopping</Button>
        </SheetClose>
      </div>
    </>
  )

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      {trigger ? <SheetTrigger asChild>{trigger}</SheetTrigger> : null}
      <SheetContent side="right" className="flex w-full flex-col sm:max-w-md">
        <SheetHeader className="flex flex-row items-center justify-between border-b border-border px-6 py-4">
          <div className="flex items-center gap-2">
            {brandSlot}
            <SheetTitle className="text-lg">Shopping Cart ({items.length})</SheetTitle>
          </div>
          <SheetClose className="rounded-sm opacity-70 transition-opacity hover:opacity-100">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetClose>
        </SheetHeader>
        {content}
        <SheetFooter />
      </SheetContent>
    </Sheet>
  )
}
