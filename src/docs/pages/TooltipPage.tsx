import { Button, Tooltip } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function TooltipPage() {
  return (
    <ComponentDoc
      name="Tooltip" description="A popup that displays information related to an element on hover or focus." radixPrimitive="@radix-ui/react-tooltip"
      preview={
        <div className="flex flex-wrap items-center gap-3">
          <Tooltip content="Tooltip on top"><Button variant="secondary">Hover me</Button></Tooltip>
          <Tooltip content="Below" side="bottom"><Button variant="secondary">Below</Button></Tooltip>
        </div>
      }
      code={`<Tooltip content="Tooltip content">
  <Button variant="secondary">Hover me</Button>
</Tooltip>`}
      props={[
        { name: 'content', type: 'ReactNode', defaultVal: '—', description: 'Tooltip content' },
        { name: 'side', type: '"top" | "right" | "bottom" | "left"', defaultVal: '"top"', description: 'Tooltip position' },
        { name: 'align', type: '"start" | "center" | "end"', defaultVal: '"center"', description: 'Alignment' },
        { name: 'delayDuration', type: 'number', defaultVal: '400', description: 'Delay before showing (ms)' },
      ]}
    />
  )
}
