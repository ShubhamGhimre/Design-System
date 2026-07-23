import { Button, Dialog, DialogClose } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function DialogPage() {
  return (
    <ComponentDoc
      name="Dialog" description="A modal dialog that interrupts the user with critical content. Built on Radix UI Dialog."
      radixPrimitive="@radix-ui/react-dialog"
      preview={
        <Dialog title="Confirm" description="Are you sure?" trigger={<Button>Open Dialog</Button>}>
          <div className="flex justify-end gap-2">
            <DialogClose asChild><Button variant="secondary">Cancel</Button></DialogClose>
            <Button>Confirm</Button>
          </div>
        </Dialog>
      }
      code={`<Dialog
  title="Confirm"
  description="Are you sure?"
  trigger={<Button>Open dialog</Button>}
>
  <Button variant="primary">Confirm</Button>
</Dialog>`}
      props={[
        { name: 'title', type: 'string', defaultVal: '—', description: 'Dialog title' },
        { name: 'description', type: 'string', defaultVal: '—', description: 'Dialog description' },
        { name: 'trigger', type: 'ReactNode', defaultVal: '—', description: 'Element that opens the dialog' },
        { name: 'size', type: '"sm" | "md" | "lg"', defaultVal: '"md"', description: 'Dialog width' },
        { name: 'open', type: 'boolean', defaultVal: '—', description: 'Controlled open state' },
        { name: 'defaultOpen', type: 'boolean', defaultVal: 'false', description: 'Default open state' },
      ]}
      variants={
        <Row label="Sizes">
          <Dialog title="Small" size="sm" trigger={<Button size="sm">Small</Button>}><p className="text-sm text-muted-foreground">Content</p></Dialog>
          <Dialog title="Medium" size="md" trigger={<Button size="sm">Medium</Button>}><p className="text-sm text-muted-foreground">Content</p></Dialog>
          <Dialog title="Large" size="lg" trigger={<Button size="sm">Large</Button>}><p className="text-sm text-muted-foreground">Content</p></Dialog>
        </Row>
      }
    />
  )
}
