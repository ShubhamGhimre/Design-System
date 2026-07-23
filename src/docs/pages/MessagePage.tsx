import { Message, Bubble } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function MessagePage() {
  return (
    <ComponentDoc
      name="Message" description="Displays a chat message in a conversation with role-based styling."
      preview={
        <div className="w-full max-w-md space-y-3">
          <Message role="user" timestamp="12:30 PM">
            <Bubble role="user">Hey, can you help me with the design system?</Bubble>
          </Message>
          <Message role="assistant" timestamp="12:31 PM">
            <Bubble role="assistant">Of course! What do you need help with?</Bubble>
          </Message>
          <Message role="user" timestamp="12:32 PM">
            <Bubble role="user">How do I use the Message component?</Bubble>
          </Message>
          <Message role="assistant" timestamp="12:33 PM">
            <Bubble role="assistant">Just wrap your content in Message and Bubble components with the right role prop.</Bubble>
          </Message>
        </div>
      }
      code={`<Message role="user" timestamp="12:30 PM">
  <Bubble role="user">Message content</Bubble>
</Message>
<Message role="assistant" timestamp="12:31 PM">
  <Bubble role="assistant">Reply content</Bubble>
</Message>`}
      props={[
        { name: 'role', type: '"user" | "assistant" | "system"', defaultVal: '—', description: 'Who sent the message' },
        { name: 'timestamp', type: 'string | Date', defaultVal: '—', description: 'Optional timestamp displayed below the bubble' },
        { name: 'children', type: 'ReactNode', defaultVal: '—', description: 'Content, typically a Bubble component' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="User message">
            <div className="w-full max-w-sm">
              <Message role="user">
                <Bubble role="user">This is a user message aligned to the right</Bubble>
              </Message>
            </div>
          </Row>
          <Row label="Assistant message">
            <div className="w-full max-w-sm">
              <Message role="assistant">
                <Bubble role="assistant">This is an assistant message aligned to the left</Bubble>
              </Message>
            </div>
          </Row>
          <Row label="System message">
            <div className="w-full max-w-sm">
              <Message role="system">
                <Bubble role="system">System notification or instruction</Bubble>
              </Message>
            </div>
          </Row>
        </div>
      }
    />
  )
}
