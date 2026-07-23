import { LoginFullBleed } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function LoginFullBleedPage() {
  return (
    <ComponentDoc
      name="LoginFullBleed"
      description="A full-screen login page with a background image overlay and centered form."
      radixPrimitive="—"
      preview={
        <div className="w-full max-w-sm">
          <LoginFullBleed
            onSubmit={(data) => console.log(data)}
          />
        </div>
      }
      code={`import { LoginFullBleed } from 'design-system/components'

;<LoginFullBleed
  onSubmit={(data) => console.log(data)}
  onToggleMode={() => console.log('switch to sign up')}
/>`}
      props={[
        { name: 'onSubmit', type: '(data) => void', defaultVal: '—', description: 'Form submit handler' },
        { name: 'onToggleMode', type: '() => void', defaultVal: '—', description: 'Switch to sign-up' },
        { name: 'brandSlot', type: 'ReactNode', defaultVal: '—', description: 'Brand slot' },
        { name: 'socialButtons', type: 'ReactNode', defaultVal: '—', description: 'Social login buttons' },
        { name: 'bgImage', type: 'string', defaultVal: '—', description: 'Background image URL' },
      ]}
    />
  )
}
