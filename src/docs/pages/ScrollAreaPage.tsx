import { ScrollArea } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

const loremIpsum = Array.from({ length: 20 }, (_, i) => (
  <p key={i} className="text-sm text-muted-foreground mb-3">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
))

export function ScrollAreaPage() {
  return (
    <ComponentDoc
      name="ScrollArea" description="A custom styled scroll area with cross-browser consistent behavior. Built on Radix UI Scroll Area."
      radixPrimitive="@radix-ui/react-scroll-area"
      preview={
        <ScrollArea className="h-48 w-80 rounded-lg border border-border p-4">
          {loremIpsum}
        </ScrollArea>
      }
      code={`<ScrollArea className="h-48 w-80">
  <p>Long content that scrolls...</p>
</ScrollArea>`}
      props={[
        { name: 'type', type: '"auto" | "always" | "scroll" | "hover"', defaultVal: '"hover"', description: 'Visibility behavior of the scrollbar' },
        { name: 'scrollHideDelay', type: 'number', defaultVal: '600', description: 'Delay before scrollbar hides in ms' },
        { name: 'className', type: 'string', defaultVal: '—', description: 'CSS class name (set height/width)' },
      ]}
      variants={
        <Row label="Tall scrollable area">
          <ScrollArea className="h-56 w-80 rounded-lg border border-border p-4">
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-sm text-muted-foreground">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              <p className="text-sm text-muted-foreground">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              <p className="text-sm text-muted-foreground">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
              </p>
              <p className="text-sm text-muted-foreground">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
              </p>
            </div>
          </ScrollArea>
        </Row>
      }
    />
  )
}
