import { useState } from 'react'
import { CartDrawer, Button } from '../../components'
import { ShoppingCart } from 'lucide-react'
import { ComponentDoc } from '../components/ComponentDoc'

export function CartDrawerPage() {
  const [open, setOpen] = useState(false)
  const cartItems = [
    { id: '1', name: 'Classic T-Shirt', price: 29.99, quantity: 2 },
    { id: '2', name: 'Denim Jacket', price: 89.99, quantity: 1 },
  ]
  return (
    <ComponentDoc
      name="CartDrawer"
      description="A slide-out shopping cart panel with quantity controls, totals, and checkout action."
      radixPrimitive="—"
      preview={
        <>
          <Button onClick={() => setOpen(true)}>
            <ShoppingCart className="h-4 w-4" /> Cart ({cartItems.length})
          </Button>
          <CartDrawer
            open={open}
            onOpenChange={setOpen}
            items={cartItems}
            onUpdateQuantity={(id, qty) => console.log(id, qty)}
            onRemoveItem={(id) => console.log(id)}
            shipping={5.99}
          />
        </>
      }
      code={`import { CartDrawer } from 'design-system/components'
import { ShoppingCart } from 'lucide-react'

;<CartDrawer
  trigger={<Button><ShoppingCart /> Cart (2)</Button>}
  items={[
    { id: '1', name: 'Product', price: 29.99, quantity: 1 },
  ]}
/>`}
      props={[
        { name: 'open', type: 'boolean', defaultVal: '—', description: 'Controlled open state' },
        { name: 'onOpenChange', type: '(open) => void', defaultVal: '—', description: 'Open state change handler' },
        { name: 'trigger', type: 'ReactNode', defaultVal: '—', description: 'Element to open the drawer' },
        { name: 'items', type: 'CartItem[]', defaultVal: '[]', description: 'Cart items' },
        { name: 'onUpdateQuantity', type: '(id, qty) => void', defaultVal: '—', description: 'Quantity change handler' },
        { name: 'onRemoveItem', type: '(id) => void', defaultVal: '—', description: 'Remove item handler' },
        { name: 'onCheckout', type: '() => void', defaultVal: '—', description: 'Checkout callback' },
        { name: 'shipping', type: 'number', defaultVal: '0', description: 'Shipping cost' },
      ]}
    />
  )
}
