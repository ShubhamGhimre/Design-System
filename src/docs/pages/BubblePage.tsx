import { Bubble } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function BubblePage() {
  return (
    <ComponentDoc
      name="Bubble" description="A chat bubble component that displays messages from different roles."
      preview={
        <div className="flex w-full max-w-sm flex-col gap-3">
          <Bubble role="user">What is the weather today?</Bubble>
          <Bubble role="assistant">It is sunny and 72°F.</Bubble>
          <Bubble role="system">User joined the conversation.</Bubble>
        </div>
      }
      code={`<Bubble role="user">What is the weather?</Bubble>`}
      props={[
        { name: 'role', type: '"user" | "assistant" | "system"', defaultVal: '"assistant"', description: 'Bubble role determining style' },
      ]}
      variants={
        <div className="flex w-full max-w-sm flex-col gap-3">
          <Row label="User"><Bubble role="user">User message</Bubble></Row>
          <Row label="Assistant"><Bubble role="assistant">Assistant reply</Bubble></Row>
          <Row label="System"><Bubble role="system">System notification</Bubble></Row>
        </div>
      }
    />
  )
}
