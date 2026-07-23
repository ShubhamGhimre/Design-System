import { Separator } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function SeparatorPage() {
  return (
    <ComponentDoc
      name="Separator" description="A visual divider between sections. Built on Radix UI Separator."
      radixPrimitive="@radix-ui/react-separator"
      preview={
        <div className="w-full max-w-sm">
          <div className="space-y-2">
            <p className="text-sm text-foreground">Section above</p>
            <Separator />
            <p className="text-sm text-foreground">Section below</p>
          </div>
        </div>
      }
      code={`<Separator />`}
      usage={`<Separator orientation="vertical" className="mx-2 h-8" />`}
      props={[
        { name: 'orientation', type: '"horizontal" | "vertical"', defaultVal: '"horizontal"', description: 'Divider orientation' },
        { name: 'decorative', type: 'boolean', defaultVal: 'true', description: 'Whether the element is decorative' },
      ]}
    />
  )
}
