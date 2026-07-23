import { MessageScroller, Message, Bubble } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function MessageScrollerPage() {
  return (
    <ComponentDoc
      name="MessageScroller" description="A scrollable container for chat messages with optional auto-scroll behavior."
      preview={
        <div className="h-60 w-full max-w-md rounded-lg border border-border">
          <MessageScroller autoScroll className="h-full">
            <Message role="user"><Bubble role="user">Hello!</Bubble></Message>
            <Message role="assistant"><Bubble role="assistant">Hi there! How can I help?</Bubble></Message>
            <Message role="user"><Bubble role="user">What is the weather like?</Bubble></Message>
            <Message role="assistant"><Bubble role="assistant">I don't have access to real-time data, sorry!</Bubble></Message>
            <Message role="user"><Bubble role="user">No problem, thanks anyway!</Bubble></Message>
          </MessageScroller>
        </div>
      }
      code={`<MessageScroller autoScroll className="h-60">
  <Message role="user">
    <Bubble role="user">Message content</Bubble>
  </Message>
  <Message role="assistant">
    <Bubble role="assistant">Reply content</Bubble>
  </Message>
</MessageScroller>`}
      props={[
        { name: 'autoScroll', type: 'boolean', defaultVal: 'true', description: 'Automatically scrolls to the bottom when children change' },
        { name: 'children', type: 'ReactNode', defaultVal: '—', description: 'Message components to scroll through' },
      ]}
      variants={
        <Row label="Scrollable chat container">
          <div className="h-48 w-full max-w-sm rounded-lg border border-border">
            <MessageScroller className="h-full">
              <Message role="user"><Bubble role="user">Message one</Bubble></Message>
              <Message role="assistant"><Bubble role="assistant">Reply one</Bubble></Message>
              <Message role="user"><Bubble role="user">Message two</Bubble></Message>
              <Message role="assistant"><Bubble role="assistant">Reply two</Bubble></Message>
              <Message role="system"><Bubble role="system">System message</Bubble></Message>
            </MessageScroller>
          </div>
        </Row>
      }
    />
  )
}
