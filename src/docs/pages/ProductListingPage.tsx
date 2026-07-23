import { ProductListing } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function ProductListingPage() {
  const products = [
    { id: '1', name: 'Classic T-Shirt', price: 29.99, originalPrice: 39.99, rating: 4.5, badge: 'Sale' },
    { id: '2', name: 'Denim Jacket', price: 89.99, rating: 4.2, badge: 'New' },
    { id: '3', name: 'Canvas Sneakers', price: 59.99, originalPrice: 79.99, rating: 4.7 },
    { id: '4', name: 'Wool Beanie', price: 19.99, rating: 4.0 },
  ]
  return (
    <ComponentDoc
      name="ProductListing"
      description="A responsive product grid with image, price, rating, wishlist, and add-to-cart actions."
      radixPrimitive="—"
      preview={
        <div className="w-full max-w-4xl">
          <ProductListing
            products={products}
            columns={4}
            onProductClick={(p) => console.log(p)}
            onAddToCart={(p) => console.log(p)}
            onWishlist={(p) => console.log(p)}
          />
        </div>
      }
      code={`import { ProductListing } from 'design-system/components'

const products = [
  { id: '1', name: 'T-Shirt', price: 29.99, badge: 'New' },
  { id: '2', name: 'Jeans', price: 59.99, originalPrice: 79.99 },
]

;<ProductListing products={products} columns={3} />`}
      props={[
        { name: 'products', type: 'ProductItem[]', defaultVal: '[]', description: 'Array of products to display' },
        { name: 'columns', type: '2 | 3 | 4', defaultVal: '3', description: 'Number of grid columns' },
        { name: 'onProductClick', type: '(product) => void', defaultVal: '—', description: 'Product click handler' },
        { name: 'onAddToCart', type: '(product) => void', defaultVal: '—', description: 'Add to cart handler' },
        { name: 'onWishlist', type: '(product) => void', defaultVal: '—', description: 'Wishlist toggle handler' },
        { name: 'wishlistedIds', type: 'string[]', defaultVal: '[]', description: 'Wishlisted product IDs' },
      ]}
    />
  )
}
