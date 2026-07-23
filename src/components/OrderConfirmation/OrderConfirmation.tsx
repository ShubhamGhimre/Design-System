import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { CheckCircle2, ShoppingBag } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from '../Button'
import { Card } from '../Card'
import { Empty } from '../Empty'
import { Separator } from '../Separator'

const orderConfirmationVariants = cva('w-full', {
  variants: {
    variant: {
      confirm: '',
      'empty-cart': '',
    },
  },
  defaultVariants: { variant: 'confirm' },
})

export interface OrderLineItem {
  id: string
  name: string
  quantity: number
  price: number
}

export interface OrderConfirmationProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof orderConfirmationVariants> {
  orderNumber?: string
  items?: OrderLineItem[]
  subtotal?: number
  shipping?: number
  total?: number
  onContinueShopping?: () => void
  onViewOrder?: () => void
  brandSlot?: React.ReactNode
}

function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)
}

export function OrderConfirmation({
  className,
  variant = 'confirm',
  orderNumber,
  items = [],
  subtotal = 0,
  shipping = 0,
  total = 0,
  onContinueShopping,
  onViewOrder,
  brandSlot,
  ...props
}: OrderConfirmationProps) {
  if (variant === 'empty-cart') {
    return (
      <div className={cn('flex flex-col items-center gap-6 py-16', className)} {...props}>
        {brandSlot}
        <Empty
          icon={<ShoppingBag className="h-8 w-8" />}
          title="Your cart is empty"
          description="Looks like you haven't added anything to your cart yet."
          action={<Button onClick={onContinueShopping}>Continue Shopping</Button>}
        />
      </div>
    )
  }

  return (
    <div className={cn('mx-auto max-w-lg', className)} {...props}>
      {brandSlot}
      <Card className="p-8 text-center">
        <div className="flex flex-col items-center gap-3">
          <CheckCircle2 className="h-12 w-12 text-primary" />
          <h2 className="text-2xl font-bold text-foreground">Order Confirmed!</h2>
          <p className="text-sm text-muted-foreground">
            Thank you for your purchase.
            {orderNumber ? <> Your order number is <span className="font-medium text-foreground">{orderNumber}</span>.</> : null}
          </p>
        </div>

        {items.length > 0 ? (
          <div className="mt-6 text-left">
            <Separator />
            <div className="mt-4 space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between text-sm">
                  <span className="text-foreground">
                    {item.name} <span className="text-muted-foreground">×{item.quantity}</span>
                  </span>
                  <span className="font-medium text-foreground">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
            <Separator className="my-4" />
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-foreground">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span className="text-foreground">{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-semibold text-foreground">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
            </div>
          </div>
        ) : null}

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
          <Button variant="outline" onClick={onViewOrder}>View Order</Button>
          <Button onClick={onContinueShopping}>Continue Shopping</Button>
        </div>
      </Card>
    </div>
  )
}
