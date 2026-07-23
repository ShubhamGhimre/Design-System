import { useState } from 'react'
import { Button, Toast, ToastProvider, ToastViewport, ToastAction, ToastClose } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function ToastPage() {
  const [open, setOpen] = useState(false)
  return (
    <ComponentDoc
      name="Toast" description="A notification message that appears temporarily. Built on Radix UI Toast."
      radixPrimitive="@radix-ui/react-toast"
      preview={
        <ToastProvider swipeDirection="right">
          <Button onClick={() => setOpen(true)}>Show Toast</Button>
          <Toast open={open} onOpenChange={setOpen} title="Scheduled" description="Meeting at 3pm">
            <ToastAction altText="Undo">Undo</ToastAction>
            <ToastClose />
          </Toast>
          <ToastViewport />
        </ToastProvider>
      }
      code={`import { Toast, ToastProvider, ToastViewport, ToastAction, ToastClose, ToastTitle, ToastDescription } from '@/components'

function Demo() {
  const [open, setOpen] = useState(false)
  return (
    <ToastProvider>
      <button onClick={() => setOpen(true)}>Show Toast</button>
      <Toast open={open} onOpenChange={setOpen} title="Title" description="Description">
        <ToastAction altText="Undo">Undo</ToastAction>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  )
}`}
      props={[
        { name: 'title', type: 'string', defaultVal: '—', description: 'Toast title text' },
        { name: 'description', type: 'string', defaultVal: '—', description: 'Toast description text' },
        { name: 'variant', type: '"default" | "destructive" | "success"', defaultVal: '"default"', description: 'Visual style' },
        { name: 'action', type: 'ReactNode', defaultVal: '—', description: 'Action element rendered inside toast' },
        { name: 'onClose', type: '() => void', defaultVal: '—', description: 'Called when close button is clicked' },
      ]}
    />
  )
}
