import { ProductCard } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function ProductCardPage() {
  return (
    <ComponentDoc
      name="ProductCard"
      description="A compact product card with image, name, price, rating, and optional CTA."
      radixPrimitive="—"
      preview={
        <div className="w-64">
          <ProductCard
            title="Classic T-Shirt"
            price={29.99}
            originalPrice={39.99}
            rating={4.5}
            reviewCount={128}
            sale
            imageSrc="https://picsum.photos/seed/tshirt/400/400"
            onAddToCart={() => {}}
            onWishlist={() => {}}
          />
        </div>
      }
      code={`import { ProductCard } from 'design-system/components'

;<ProductCard
  title="Classic T-Shirt"
  price={29.99}
  sale
  onAddToCart={() => {}}
/>`}
      props={[
        { name: 'title', type: 'string', defaultVal: '—', description: 'Product title' },
        { name: 'price', type: 'number', defaultVal: '—', description: 'Product price' },
        { name: 'originalPrice', type: 'number', defaultVal: '—', description: 'Original price for discount display' },
        { name: 'imageSrc', type: 'string', defaultVal: '—', description: 'Product image URL' },
        { name: 'rating', type: 'number', defaultVal: '—', description: 'Rating (0-5)' },
        { name: 'sale', type: 'boolean', defaultVal: 'false', description: 'Show sale badge' },
        { name: 'onAddToCart', type: '() => void', defaultVal: '—', description: 'Add to cart callback' },
        { name: 'onWishlist', type: '() => void', defaultVal: '—', description: 'Wishlist toggle callback' },
      ]}
    />
  )
}
