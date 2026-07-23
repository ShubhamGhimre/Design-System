import { ProductDetail } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function ProductDetailPage() {
  return (
    <ComponentDoc
      name="ProductDetail"
      description="A full product detail view with image gallery, pricing, size/color selectors, quantity, and tabs."
      radixPrimitive="—"
      preview={
        <div className="w-full max-w-4xl">
          <ProductDetail
            title="Classic T-Shirt"
            price={29.99}
            originalPrice={39.99}
            description="High-quality cotton tee with a modern fit. Perfect for everyday wear."
            sizes={[{ label: 'S', value: 's' }, { label: 'M', value: 'm' }, { label: 'L', value: 'l' }]}
            colors={[{ label: 'Black', value: 'black' }, { label: 'White', value: 'white' }, { label: 'Navy', value: 'navy' }]}
            rating={4.5}
            reviewCount={128}
            onAddToCart={(data) => console.log(data)}
          />
        </div>
      }
      code={`import { ProductDetail } from 'design-system/components'

;<ProductDetail
  title="Classic T-Shirt"
  price={29.99}
  originalPrice={39.99}
  description="High-quality cotton tee."
  sizes={[{ label: 'S', value: 's' }, { label: 'M', value: 'm' }]}
  colors={[{ label: 'Black', value: 'black' }, { label: 'White', value: 'white' }]}
  onAddToCart={(data) => console.log(data)}
/>`}
      props={[
        { name: 'title', type: 'string', defaultVal: '—', description: 'Product title' },
        { name: 'price', type: 'number', defaultVal: '—', description: 'Product price' },
        { name: 'originalPrice', type: 'number', defaultVal: '—', description: 'Original price' },
        { name: 'description', type: 'string', defaultVal: '—', description: 'Product description' },
        { name: 'images', type: 'string[]', defaultVal: '—', description: 'Image URLs for carousel' },
        { name: 'sizes', type: 'ProductVariant[]', defaultVal: '—', description: 'Size options' },
        { name: 'colors', type: 'ProductVariant[]', defaultVal: '—', description: 'Color options' },
        { name: 'loading', type: 'boolean', defaultVal: 'false', description: 'Loading skeleton state' },
      ]}
    />
  )
}
