import { Alert } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function AlertPage() {
  return (
    <ComponentDoc
      name="Alert"
      description="Displays a brief message. Supports multiple variants for different severity levels."
      preview={
        <div className="flex w-full flex-col gap-3">
          <Alert variant="default" title="Default">This is a default alert.</Alert>
          <Alert variant="info" title="Info">This is an informational alert.</Alert>
          <Alert variant="success" title="Success">Operation completed successfully.</Alert>
          <Alert variant="warning" title="Warning">Please review before proceeding.</Alert>
          <Alert variant="destructive" title="Error">Something went wrong.</Alert>
        </div>
      }
      code={`<Alert variant="info" title="Info">
  This is an informational alert.
</Alert>`}
      props={[
        { name: 'variant', type: '"default" | "info" | "success" | "warning" | "destructive"', defaultVal: '"default"', description: 'Visual style of the alert' },
        { name: 'icon', type: 'ReactNode', defaultVal: '—', description: 'Icon displayed before the title' },
        { name: 'title', type: 'string', defaultVal: '—', description: 'Optional title text' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="Default">
            <Alert variant="default" title="Default">Default alert message.</Alert>
          </Row>
          <Row label="Info">
            <Alert variant="info" title="Info">Informational alert message.</Alert>
          </Row>
          <Row label="Success">
            <Alert variant="success" title="Success">Success alert message.</Alert>
          </Row>
          <Row label="Warning">
            <Alert variant="warning" title="Warning">Warning alert message.</Alert>
          </Row>
          <Row label="Destructive">
            <Alert variant="destructive" title="Destructive">Destructive alert message.</Alert>
          </Row>
        </div>
      }
      anatomy={['<Alert> — The root alert container']}
      accessibility={['Uses region role for screen readers', 'Color is not the only means of conveying information']}
    />
  )
}
