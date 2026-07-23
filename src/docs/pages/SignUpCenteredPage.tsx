import { SignUpCentered } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function SignUpCenteredPage() {
  return (
    <ComponentDoc
      name="SignUpCentered"
      description="A centered sign-up card with name, email, password fields, social sign-up, and login link."
      radixPrimitive="—"
      preview={
        <div className="w-full max-w-sm">
          <SignUpCentered
            onSubmit={(data) => console.log(data)}
          />
        </div>
      }
      code={`import { SignUpCentered } from 'design-system/components'

;<SignUpCentered
  onSubmit={(data) => console.log(data)}
  onToggleMode={() => console.log('switch to login')}
/>`}
      props={[
        { name: 'onSubmit', type: '(data) => void', defaultVal: '—', description: 'Form submit handler' },
        { name: 'onToggleMode', type: '() => void', defaultVal: '—', description: 'Switch to login' },
        { name: 'brandSlot', type: 'ReactNode', defaultVal: '—', description: 'Brand slot' },
        { name: 'socialButtons', type: 'ReactNode', defaultVal: '—', description: 'Social sign-up buttons' },
      ]}
    />
  )
}
