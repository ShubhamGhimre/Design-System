import { Attachment } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Paperclip } from 'lucide-react'

export function AttachmentPage() {
  return (
    <ComponentDoc
      name="Attachment" description="A file attachment display with name, size, icon, and remove button."
      preview={
        <div className="w-full max-w-sm">
          <Attachment
            name="document.pdf"
            size={204800}
            icon={<Paperclip className="size-4" />}
            onRemove={() => {}}
          />
        </div>
      }
      code={`<Attachment
  name="document.pdf"
  size={204800}
  icon={<Paperclip className="size-4" />}
  onRemove={() => console.log('remove')}
/>`}
      props={[
        { name: 'name', type: 'string', defaultVal: '—', description: 'File name' },
        { name: 'size', type: 'number', defaultVal: '—', description: 'File size in bytes' },
        { name: 'icon', type: 'ReactNode', defaultVal: '—', description: 'Leading icon element' },
        { name: 'onRemove', type: '() => void', defaultVal: '—', description: 'Callback when remove is clicked' },
      ]}
    />
  )
}
