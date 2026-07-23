import { Button } from '../../components'
import { AlertDialog } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function AlertDialogPage() {
  return (
    <ComponentDoc
      name="AlertDialog"
      description="A modal dialog that interrupts the user with a critical message requiring confirmation."
      radixPrimitive="@radix-ui/react-alert-dialog"
      preview={
        <div className="flex flex-wrap items-center gap-3">
          <AlertDialog
            title="Delete Account"
            description="Are you sure you want to delete your account? This action cannot be undone."
            trigger={<Button variant="destructive">Delete Account</Button>}
            cancelLabel="Cancel"
            actionLabel="Delete"
          />
        </div>
      }
      code={`<AlertDialog
  title="Delete Account"
  description="Are you sure?"
  trigger={<Button variant="destructive">Delete</Button>}
  cancelLabel="Cancel"
  actionLabel="Delete"
  onAction={() => console.log('confirmed')}
/>`}
      props={[
        { name: 'title', type: 'string', defaultVal: '—', description: 'Title displayed in the dialog header' },
        { name: 'description', type: 'string', defaultVal: '—', description: 'Description text below the title' },
        { name: 'trigger', type: 'ReactNode', defaultVal: '—', description: 'Element that opens the dialog' },
        { name: 'cancelLabel', type: 'string', defaultVal: '"Cancel"', description: 'Label for the cancel button' },
        { name: 'actionLabel', type: 'string', defaultVal: '"Continue"', description: 'Label for the action button' },
        { name: 'onAction', type: '() => void', defaultVal: '—', description: 'Callback when the action button is clicked' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="Destructive">
            <AlertDialog
              title="Delete Item"
              description="This will permanently delete this item."
              trigger={<Button variant="destructive">Open</Button>}
              cancelLabel="Cancel"
              actionLabel="Delete"
            />
          </Row>
          <Row label="Informational">
            <AlertDialog
              title="Terms Updated"
              description="Our terms of service have been updated. Please review the changes."
              trigger={<Button variant="secondary">Review</Button>}
              cancelLabel="Later"
              actionLabel="Review"
            />
          </Row>
        </div>
      }
    />
  )
}
