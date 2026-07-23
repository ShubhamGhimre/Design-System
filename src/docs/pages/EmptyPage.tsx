import { Inbox } from 'lucide-react'
import { Button, Empty } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function EmptyPage() {
  return (
    <ComponentDoc
      name="Empty" description="Displays an empty state with an icon, message, and optional action button."
      preview={
        <div className="w-full max-w-sm">
          <Empty
            icon={<Inbox className="size-10" />}
            title="No messages"
            description="You don't have any messages yet. Start a conversation to get going."
            action={<Button variant="primary" size="sm">New Message</Button>}
          />
        </div>
      }
      code={`<Empty
  icon={<Inbox className="size-10" />}
  title="No messages"
  description="You don't have any messages yet."
  action={<Button variant="primary">New Message</Button>}
/>`}
      props={[
        { name: 'icon', type: 'ReactNode', defaultVal: '—', description: 'Icon displayed above the title' },
        { name: 'title', type: 'string', defaultVal: '—', description: 'Empty state heading' },
        { name: 'description', type: 'string', defaultVal: '—', description: 'Descriptive message' },
        { name: 'action', type: 'ReactNode', defaultVal: '—', description: 'Call-to-action element' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="Basic">
            <div className="w-full max-w-sm rounded-lg border border-border">
              <Empty title="No results" description="Try adjusting your search or filters." />
            </div>
          </Row>
          <Row label="With icon and action">
            <div className="w-full max-w-sm rounded-lg border border-border">
              <Empty
                icon={<Inbox className="size-10" />}
                title="Inbox zero"
                description="You've read everything. Nice work."
                action={<Button variant="primary" size="sm">Compose</Button>}
              />
            </div>
          </Row>
        </div>
      }
    />
  )
}
