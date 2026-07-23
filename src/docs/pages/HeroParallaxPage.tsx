import { HeroParallax } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function HeroParallaxPage() {
  return (
    <ComponentDoc
      name="HeroParallax"
      description="A full-viewport hero section with parallax scrolling effect on the background image."
      radixPrimitive="—"
      preview={
        <div className="w-full max-w-3xl">
          <HeroParallax
            title="Welcome to Our Platform"
            subtitle="Featured"
            description="Discover what we have to offer. A modern design system built for speed and scale."
            ctaText="Get Started"
            badge="Featured"
          />
        </div>
      }
      code={`import { HeroParallax } from 'design-system/components'

;<HeroParallax
  title="Welcome to Our Platform"
  subtitle="Featured"
  description="Discover what we have to offer."
  ctaText="Get Started"
/>`}
      props={[
        { name: 'title', type: 'string', defaultVal: '—', description: 'Hero title' },
        { name: 'subtitle', type: 'string', defaultVal: '—', description: 'Subtitle above title' },
        { name: 'description', type: 'string', defaultVal: '—', description: 'Description text' },
        { name: 'ctaText', type: 'string', defaultVal: '"Explore"', description: 'CTA button label' },
        { name: 'imageSrc', type: 'string', defaultVal: '—', description: 'Background image URL' },
        { name: 'badge', type: 'string', defaultVal: '—', description: 'Badge label' },
        { name: 'parallaxSpeed', type: 'number', defaultVal: '0.4', description: 'Parallax scroll speed factor' },
      ]}
    />
  )
}
