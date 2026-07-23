import { HeroSlideshow } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function HeroSlideshowPage() {
  return (
    <ComponentDoc
      name="HeroSlideshow"
      description="A full-width hero carousel with dots navigation, previous/next arrows, and per-slide content."
      radixPrimitive="—"
      preview={
        <div className="w-full max-w-3xl">
          <HeroSlideshow
            slides={[
              { id: '1', title: 'Summer Sale', subtitle: 'Limited Time', description: 'Up to 50% off on selected items.', ctaText: 'Shop Now' },
              { id: '2', title: 'New Collection', subtitle: '2024', description: 'Explore our latest arrivals.', ctaText: 'Explore' },
            ]}
          />
        </div>
      }
      code={`import { HeroSlideshow } from 'design-system/components'

const slides = [
  { id: '1', title: 'Summer Sale', subtitle: 'Limited Time', ctaText: 'Shop Now' },
  { id: '2', title: 'New Collection', subtitle: '2024', ctaText: 'Explore' },
]

;<HeroSlideshow slides={slides} />`}
      props={[
        { name: 'slides', type: 'HeroSlide[]', defaultVal: '[]', description: 'Array of slides with title, subtitle, CTA, image' },
        { name: 'brandSlot', type: 'ReactNode', defaultVal: '—', description: 'Brand slot' },
        { name: 'onCtaClick', type: '(slideId) => void', defaultVal: '—', description: 'CTA click handler' },
      ]}
    />
  )
}
