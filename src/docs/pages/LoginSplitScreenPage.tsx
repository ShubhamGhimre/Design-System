import { LoginSplitScreen } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function LoginSplitScreenPage() {
  return (
    <ComponentDoc
      name="LoginSplitScreen"
      description="A split-screen login with a brand panel on one side and the form on the other."
      radixPrimitive="—"
      preview={
        <div className="w-full max-w-2xl">
          <LoginSplitScreen
            onSubmit={(data) => console.log(data)}
          />
        </div>
      }
      code={`import { LoginSplitScreen } from 'design-system/components'

;<LoginSplitScreen
  onSubmit={(data) => console.log(data)}
  onToggleMode={() => console.log('switch to sign up')}
/>`}
      props={[
        { name: 'onSubmit', type: '(data) => void', defaultVal: '—', description: 'Form submit handler' },
        { name: 'onToggleMode', type: '() => void', defaultVal: '—', description: 'Switch to sign-up' },
        { name: 'brandSlot', type: 'ReactNode', defaultVal: '—', description: 'Brand slot' },
        { name: 'imageSlot', type: 'ReactNode', defaultVal: '—', description: 'Image slot' },
        { name: 'socialButtons', type: 'ReactNode', defaultVal: '—', description: 'Social login buttons' },
      ]}
    />
  )
}
