import { Button, Toaster, toast } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function SonnerPage() {
  return (
    <ComponentDoc
      name="Sonner" description="A toast notification system powered by the sonner library."
      radixPrimitive="—"
      preview={
        <div className="flex flex-wrap items-center gap-3">
          <Button onClick={() => toast.success('File saved successfully!')}>
            Show Success
          </Button>
          <Button variant="secondary" onClick={() => toast.error('Something went wrong.')}>
            Show Error
          </Button>
          <Toaster />
        </div>
      }
      code={`import { Toaster, toast } from 'sonner'

<Toaster richColors closeButton />
<button onClick={() => toast.success('Saved!')}>
  Show Toast
</button>`}
      props={[
        { name: 'position', type: '"top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center"', defaultVal: '"bottom-right"', description: 'Toast position on screen' },
        { name: 'richColors', type: 'boolean', defaultVal: 'false', description: 'Enable rich colored toasts' },
        { name: 'closeButton', type: 'boolean', defaultVal: 'false', description: 'Show close button on toasts' },
      ]}
    />
  )
}
