import { LoginCentered } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function LoginCenteredPage() {
  return (
    <ComponentDoc
      name="LoginCentered"
      description="A centered login card with email/password fields, social login options, and sign-up link."
      radixPrimitive="—"
      preview={
        <div className="w-full max-w-sm">
          <LoginCentered
            onSubmit={(data) => console.log(data)}
          />
        </div>
      }
      code={`import { LoginCentered } from 'design-system/components'

;<LoginCentered
  onSubmit={(data) => console.log(data)}
  onToggleMode={() => console.log('switch to sign up')}
/>`}
      props={[
        { name: 'onSubmit', type: '(data) => void', defaultVal: '—', description: 'Form submit handler' },
        { name: 'onToggleMode', type: '() => void', defaultVal: '—', description: 'Switch to sign-up' },
        { name: 'brandSlot', type: 'ReactNode', defaultVal: '—', description: 'Brand slot' },
        { name: 'socialButtons', type: 'ReactNode', defaultVal: '—', description: 'Social login buttons' },
        { name: 'title', type: 'string', defaultVal: '"Welcome back"', description: 'Card title' },
        { name: 'description', type: 'string', defaultVal: '"Sign in to your account to continue."', description: 'Card description' },
      ]}
    />
  )
}
