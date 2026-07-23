import { OrderConfirmation } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function OrderConfirmationPage() {
  return (
    <ComponentDoc
      name="OrderConfirmation"
      description="An order confirmation page with success state, order summary, and action buttons."
      radixPrimitive="—"
      preview={
        <OrderConfirmation
          orderNumber="ORD-123456"
          items={[
            { id: '1', name: 'Classic T-Shirt', price: 29.99, quantity: 2 },
            { id: '2', name: 'Denim Jacket', price: 89.99, quantity: 1 },
          ]}
          onContinueShopping={() => {}}
          onViewOrder={() => {}}
        />
      }
      code={`import { OrderConfirmation } from 'design-system/components'

;<OrderConfirmation
  orderNumber="ORD-123456"
  items={[
    { id: '1', name: 'Product', price: 29.99, quantity: 1 },
  ]}
  onContinueShopping={() => {}}
  onViewOrder={() => {}}
/>`}
      props={[
        { name: 'orderNumber', type: 'string', defaultVal: '—', description: 'Order reference number' },
        { name: 'items', type: 'OrderLineItem[]', defaultVal: '[]', description: 'Order line items' },
        { name: 'subtotal', type: 'number', defaultVal: '—', description: 'Subtotal override' },
        { name: 'shipping', type: 'number', defaultVal: '0', description: 'Shipping cost' },
        { name: 'total', type: 'number', defaultVal: '—', description: 'Total override' },
        { name: 'onContinueShopping', type: '() => void', defaultVal: '—', description: 'Continue shopping callback' },
        { name: 'onViewOrder', type: '() => void', defaultVal: '—', description: 'View order details callback' },
        { name: 'brandSlot', type: 'ReactNode', defaultVal: '—', description: 'Brand slot' },
      ]}
    />
  )
}
