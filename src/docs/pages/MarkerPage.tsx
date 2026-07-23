import { Marker } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function MarkerPage() {
  return (
    <ComponentDoc
      name="Marker" description="A message status indicator that shows sending, sent, delivered, read, or error state."
      preview={<Marker status="read" />}
      code={`<Marker status="read" />`}
      props={[
        { name: 'status', type: '"sending" | "sent" | "delivered" | "read" | "error"', defaultVal: '"sent"', description: 'Message status' },
      ]}
      variants={
        <Row label="Statuses">
          <Marker status="sending" />
          <Marker status="sent" />
          <Marker status="delivered" />
          <Marker status="read" />
          <Marker status="error" />
        </Row>
      }
    />
  )
}
