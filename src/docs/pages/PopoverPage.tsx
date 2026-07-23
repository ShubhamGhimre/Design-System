import { Button, Popover } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function PopoverPage() {
  return (
    <ComponentDoc
      name="Popover" description="An overlay that displays additional content anchored to a trigger element." radixPrimitive="@radix-ui/react-popover"
      preview={
        <Popover trigger={<Button variant="secondary">Open Popover</Button>}>
          <p className="text-sm text-foreground">Popover content here.</p>
        </Popover>
      }
      code={`<Popover
  trigger={<Button variant="secondary">Open popover</Button>}
>
  <p>Popover content</p>
</Popover>`}
      props={[
        { name: 'trigger', type: 'ReactNode', defaultVal: '—', description: 'Trigger element' },
        { name: 'side', type: '"top" | "right" | "bottom" | "left"', defaultVal: '"bottom"', description: 'Position' },
        { name: 'align', type: '"start" | "center" | "end"', defaultVal: '"center"', description: 'Alignment' },
        { name: 'sideOffset', type: 'number', defaultVal: '4', description: 'Offset from trigger' },
        { name: 'matchTriggerWidth', type: 'boolean', defaultVal: 'false', description: 'Match trigger width' },
      ]}
    />
  )
}
