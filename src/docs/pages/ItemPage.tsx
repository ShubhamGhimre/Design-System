import { Inbox, Sparkles } from 'lucide-react'
import { Badge, Item } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function ItemPage() {
  return (
    <ComponentDoc
      name="Item" description="A flexible list item with leading, content, and trailing slots."
      preview={
        <div className="w-full max-w-sm rounded-lg border border-border">
          <Item leading={<Inbox className="size-5" />} trailing={<Badge variant="secondary">12</Badge>}>
            Inbox
          </Item>
        </div>
      }
      code={`<Item
  leading={<Inbox className="size-5" />}
  trailing={<Badge variant="secondary">12</Badge>}
>
  Inbox
</Item>`}
      props={[
        { name: 'leading', type: 'ReactNode', defaultVal: '—', description: 'Element displayed before the content' },
        { name: 'trailing', type: 'ReactNode', defaultVal: '—', description: 'Element displayed after the content' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="Default">
            <div className="w-full max-w-sm rounded-lg border border-border">
              <Item>Simple item</Item>
            </div>
          </Row>
          <Row label="With leading icon">
            <div className="w-full max-w-sm rounded-lg border border-border">
              <Item leading={<Sparkles className="size-5 text-amber-500" />}>Featured</Item>
            </div>
          </Row>
          <Row label="With trailing badge">
            <div className="w-full max-w-sm rounded-lg border border-border">
              <Item trailing={<Badge variant="secondary">New</Badge>}>Notifications</Item>
            </div>
          </Row>
          <Row label="Both slots">
            <div className="w-full max-w-sm rounded-lg border border-border">
              <Item leading={<Inbox className="size-5" />} trailing={<Badge>99+</Badge>}>
                Messages
              </Item>
            </div>
          </Row>
        </div>
      }
    />
  )
}
