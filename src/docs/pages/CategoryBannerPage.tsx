import { CategoryBanner } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function CategoryBannerPage() {
  return (
    <ComponentDoc
      name="CategoryBanner"
      description="A full-width banner for category pages with title, description, and optional CTA."
      radixPrimitive="—"
      preview={
        <CategoryBanner
          title="Summer Collection"
          description="Explore our latest summer styles. Up to 50% off selected items."
          ctaText="Shop Now"
        />
      }
      code={`import { CategoryBanner } from 'design-system/components'

;<CategoryBanner
  title="Summer Collection"
  description="Explore our latest summer styles."
  ctaText="Shop Now"
/>`}
      props={[
        { name: 'title', type: 'string', defaultVal: '—', description: 'Banner title' },
        { name: 'description', type: 'string', defaultVal: '—', description: 'Description text' },
        { name: 'ctaText', type: 'string', defaultVal: '"Shop Now"', description: 'CTA button label' },
        { name: 'imageSrc', type: 'string', defaultVal: '—', description: 'Background image URL' },
        { name: 'itemCount', type: 'number', defaultVal: '—', description: 'Category item count' },
        { name: 'variant', type: '"default" | "centered" | "split"', defaultVal: '"default"', description: 'Banner layout variant' },
        { name: 'brandSlot', type: 'ReactNode', defaultVal: '—', description: 'Brand slot' },
        { name: 'onCtaClick', type: '() => void', defaultVal: '—', description: 'CTA click handler' },
      ]}
    />
  )
}
