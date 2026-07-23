import { ChevronDown } from 'lucide-react'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function CollapsiblePage() {
  return (
    <ComponentDoc
      name="Collapsible"
      description="An interactive component that expands and collapses content."
      radixPrimitive="@radix-ui/react-collapsible"
      preview={
        <div className="w-full max-w-sm">
          <Collapsible defaultOpen>
            <div className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3">
              <span className="text-sm font-medium">Show Details</span>
              <CollapsibleTrigger asChild>
                <button className="rounded-md p-1 hover:bg-muted transition-colors">
                  <ChevronDown className="size-4 transition-transform ui-open:rotate-180" />
                </button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="overflow-hidden transition-all data-[state=closed]:animate-collapse-up data-[state=open]:animate-collapse-down">
              <div className="mt-2 rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground">
                This content can be toggled open and closed.
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      }
      code={`<Collapsible defaultOpen>
  <CollapsibleTrigger asChild>
    <button>Toggle</button>
  </CollapsibleTrigger>
  <CollapsibleContent>
    Hidden content here.
  </CollapsibleContent>
</Collapsible>`}
      props={[
        { name: 'defaultOpen', type: 'boolean', defaultVal: 'false', description: 'Whether the collapsible is open by default' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="Closed by default">
            <div className="w-full max-w-sm">
              <Collapsible>
                <div className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3">
                  <span className="text-sm font-medium">Click to expand</span>
                  <CollapsibleTrigger asChild>
                    <button className="rounded-md p-1 hover:bg-muted transition-colors">
                      <ChevronDown className="size-4 transition-transform ui-open:rotate-180" />
                    </button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="overflow-hidden transition-all data-[state=closed]:animate-collapse-up data-[state=open]:animate-collapse-down">
                  <div className="mt-2 rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground">
                    Revealed content.
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </Row>
        </div>
      }
      anatomy={['<Collapsible> — The root container', '<CollapsibleTrigger> — The element that toggles the collapsible', '<CollapsibleContent> — The collapsible content area']}
      accessibility={['Uses button role for trigger', 'ARIA attributes (aria-expanded, aria-controls) managed automatically', 'Content is hidden from screen readers when collapsed']}
    />
  )
}
