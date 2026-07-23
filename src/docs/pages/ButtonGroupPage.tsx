import { Button, ButtonGroup } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function ButtonGroupPage() {
  return (
    <ComponentDoc
      name="ButtonGroup"
      description="Groups related buttons together. Supports horizontal and vertical orientations."
      preview={
        <div className="flex flex-wrap items-center gap-6">
          <ButtonGroup>
            <Button variant="outline">Left</Button>
            <Button variant="outline">Center</Button>
            <Button variant="outline">Right</Button>
          </ButtonGroup>
        </div>
      }
      code={`<ButtonGroup>
  <Button variant="outline">Left</Button>
  <Button variant="outline">Center</Button>
  <Button variant="outline">Right</Button>
</ButtonGroup>`}
      props={[
        { name: 'orientation', type: '"horizontal" | "vertical"', defaultVal: '"horizontal"', description: 'Layout direction of the group' },
        { name: 'attached', type: 'boolean', defaultVal: 'true', description: 'Whether buttons are attached with no gap' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="Horizontal (attached)">
            <ButtonGroup orientation="horizontal" attached>
              <Button variant="outline">One</Button>
              <Button variant="outline">Two</Button>
              <Button variant="outline">Three</Button>
            </ButtonGroup>
          </Row>
          <Row label="Horizontal (separated)">
            <ButtonGroup orientation="horizontal" attached={false}>
              <Button variant="outline">One</Button>
              <Button variant="outline">Two</Button>
              <Button variant="outline">Three</Button>
            </ButtonGroup>
          </Row>
          <Row label="Vertical (attached)">
            <ButtonGroup orientation="vertical" attached>
              <Button variant="outline">Top</Button>
              <Button variant="outline">Middle</Button>
              <Button variant="outline">Bottom</Button>
            </ButtonGroup>
          </Row>
        </div>
      }
      anatomy={['<ButtonGroup> — The root container for button grouping']}
      accessibility={['Buttons within a group are focusable individually', 'Use aria-label on icon-only buttons for screen readers']}
    />
  )
}
