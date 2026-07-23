import { Button, Avatar, HoverCard } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function HoverCardPage() {
  return (
    <ComponentDoc
      name="HoverCard" description="An interactive preview card that appears on hover. Built on Radix UI HoverCard."
      radixPrimitive="@radix-ui/react-hover-card"
      preview={
        <HoverCard
          trigger={<Button variant="secondary">Hover me</Button>}
        >
          <div className="flex items-start gap-4">
            <Avatar fallback="DS" size="sm" />
            <div>
              <p className="text-sm font-medium text-foreground">Design System</p>
              <p className="text-xs text-muted-foreground">A collection of accessible React components.</p>
            </div>
          </div>
        </HoverCard>
      }
      code={`<HoverCard
  trigger={<Button>Hover me</Button>}
>
  <p>Card content</p>
</HoverCard>`}
      props={[
        { name: 'trigger', type: 'ReactNode', defaultVal: '—', description: 'Trigger element' },
        { name: 'side', type: '"top" | "right" | "bottom" | "left"', defaultVal: '"bottom"', description: 'Position' },
        { name: 'align', type: '"start" | "center" | "end"', defaultVal: '"center"', description: 'Alignment' },
        { name: 'sideOffset', type: 'number', defaultVal: '4', description: 'Offset from trigger' },
        { name: 'openDelay', type: 'number', defaultVal: '700', description: 'Delay before opening (ms)' },
        { name: 'closeDelay', type: 'number', defaultVal: '300', description: 'Delay before closing (ms)' },
      ]}
    />
  )
}
