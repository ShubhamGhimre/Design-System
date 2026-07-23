import { Spinner } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function SpinnerPage() {
  return (
    <ComponentDoc
      name="Spinner" description="A loading spinner that indicates an ongoing process."
      preview={<Spinner size="lg" />}
      code={`<Spinner size="md" />`}
      props={[
        { name: 'size', type: '"sm" | "md" | "lg"', defaultVal: '"md"', description: 'Spinner size' },
      ]}
      variants={
        <Row label="Sizes">
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </Row>
      }
    />
  )
}
