import { Testimonials } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function TestimonialsPage() {
  return (
    <ComponentDoc
      name="Testimonials"
      description="A testimonials section with cards or carousel displaying customer quotes, avatars, names, and roles."
      radixPrimitive="—"
      preview={
        <Testimonials
          testimonials={[
            { id: '1', name: 'Jane Doe', role: 'CTO, TechCorp', avatarSrc: 'https://i.pravatar.cc/40?u=jane', content: 'This platform transformed our workflow. Incredible speed and reliability.', rating: 5 },
            { id: '2', name: 'John Smith', role: 'Lead Designer, DesignCo', avatarSrc: 'https://i.pravatar.cc/40?u=john', content: 'The best design system we have ever used.', rating: 5 },
            { id: '3', name: 'Alice Johnson', role: 'Developer, StartupX', avatarSrc: 'https://i.pravatar.cc/40?u=alice', content: 'Customer support is outstanding. They truly care about their users.', rating: 4 },
          ]}
          title="What Our Customers Say"
          variant="grid"
        />
      }
      code={`import { Testimonials } from 'design-system/components'

const testimonials = [
  { id: '1', name: 'Jane Doe', role: 'Developer', avatarSrc: 'https://i.pravatar.cc/40?u=1', content: 'Amazing product!', rating: 5 },
  { id: '2', name: 'John Smith', role: 'Designer', avatarSrc: 'https://i.pravatar.cc/40?u=2', content: 'Love this platform.', rating: 4 },
]

;<Testimonials testimonials={testimonials} variant="grid" />`}
      props={[
        { name: 'testimonials', type: 'Testimonial[]', defaultVal: '[]', description: 'Array of testimonials' },
        { name: 'variant', type: '"grid" | "carousel"', defaultVal: '"grid"', description: 'Layout variant' },
        { name: 'title', type: 'string', defaultVal: '—', description: 'Section title' },
        { name: 'description', type: 'string', defaultVal: '—', description: 'Section description' },
        { name: 'brandSlot', type: 'ReactNode', defaultVal: '—', description: 'Brand slot' },
      ]}
    />
  )
}
