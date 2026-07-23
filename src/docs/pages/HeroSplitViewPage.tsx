import { HeroSplitView } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function HeroSplitViewPage() {
  return (
    <ComponentDoc
      name="HeroSplitView"
      description="A split-screen hero with content on one side and an image on the other, with configurable media position."
      radixPrimitive="—"
      preview={
        <div className="w-full max-w-3xl">
          <HeroSplitView
            title="Build Better Products"
            subtitle="Platform"
            description="Everything you need to ship faster with our all-in-one design platform."
            ctaText="Get Started"
            secondaryCtaText="Watch Video"
            badge="New Release"
          />
        </div>
      }
      code={`import { HeroSplitView } from 'design-system/components'

;<HeroSplitView
  title="Build Better Products"
  subtitle="Platform"
  description="Everything you need to ship faster."
  ctaText="Get Started"
  secondaryCtaText="Watch Video"
  mediaPosition="right"
/>`}
      props={[
        { name: 'title', type: 'string', defaultVal: '—', description: 'Hero title' },
        { name: 'subtitle', type: 'string', defaultVal: '—', description: 'Subtitle above title' },
        { name: 'description', type: 'string', defaultVal: '—', description: 'Description text' },
        { name: 'ctaText', type: 'string', defaultVal: '"Get Started"', description: 'Primary CTA label' },
        { name: 'secondaryCtaText', type: 'string', defaultVal: '—', description: 'Secondary CTA label' },
        { name: 'imageSrc', type: 'string', defaultVal: '—', description: 'Media image URL' },
        { name: 'badge', type: 'string', defaultVal: '—', description: 'Badge label' },
        { name: 'mediaPosition', type: '"left" | "right"', defaultVal: '"right"', description: 'Side for the media' },
      ]}
    />
  )
}
