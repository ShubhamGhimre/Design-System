import { Button, Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function SheetPage() {
  return (
    <ComponentDoc
      name="Sheet" description="A slide-in panel for contextual content. Built on Radix UI Dialog."
      radixPrimitive="@radix-ui/react-dialog"
      preview={
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="secondary">Open Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit Profile</SheetTitle>
              <SheetDescription>Make changes to your profile here.</SheetDescription>
            </SheetHeader>
            <div className="flex-1 py-4 text-sm text-muted-foreground">
              Profile settings content goes here.
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button variant="secondary">Cancel</Button>
              </SheetClose>
              <Button>Save Changes</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      }
      code={`<Sheet>
  <SheetTrigger asChild>
    <Button>Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
      <SheetDescription>Description</SheetDescription>
    </SheetHeader>
    Content
    <SheetFooter>
      <SheetClose asChild>
        <Button variant="secondary">Cancel</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
      props={[
        { name: 'side', type: '"top" | "bottom" | "left" | "right"', defaultVal: '"right"', description: 'Which side the sheet slides in from' },
        { name: 'showClose', type: 'boolean', defaultVal: 'true', description: 'Show close button' },
        { name: 'open', type: 'boolean', defaultVal: '—', description: 'Controlled open state' },
        { name: 'onOpenChange', type: '(open: boolean) => void', defaultVal: '—', description: 'Open state change handler' },
      ]}
      variants={
        <Row label="Right side sheet">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" size="sm">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Notifications</SheetTitle>
                <SheetDescription>Your recent notifications.</SheetDescription>
              </SheetHeader>
              <div className="py-4 text-sm text-muted-foreground">
                No new notifications.
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button variant="secondary" size="sm">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </Row>
      }
    />
  )
}
