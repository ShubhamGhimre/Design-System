import { Newsletter } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function NewsletterPage() {
  return (
    <ComponentDoc
      name="Newsletter"
      description="A newsletter sign-up section with email input, submit button, and optional brand/badge slots."
      radixPrimitive="—"
      preview={
        <Newsletter
          title="Stay in the Loop"
          description="Get the latest updates and offers."
          onSubmit={(email) => console.log(email)}
        />
      }
      code={`import { Newsletter } from 'design-system/components'

;<Newsletter
  title="Stay in the Loop"
  description="Get the latest updates and offers."
  onSubmit={(email) => console.log(email)}
/>`}
      props={[
        { name: 'title', type: 'string', defaultVal: '"Subscribe"', description: 'Section title' },
        { name: 'description', type: 'string', defaultVal: '—', description: 'Description text' },
        { name: 'onSubmit', type: '(email: string) => void', defaultVal: '—', description: 'Submit handler with email' },
        { name: 'placeholder', type: 'string', defaultVal: '"Enter your email"', description: 'Input placeholder' },
        { name: 'ctaText', type: 'string', defaultVal: '"Subscribe"', description: 'Button label' },
        { name: 'badge', type: 'string', defaultVal: '—', description: 'Badge label' },
        { name: 'brandSlot', type: 'ReactNode', defaultVal: '—', description: 'Brand slot' },
      ]}
    />
  )
}
