import { SignUpSplitScreen } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function SignUpSplitScreenPage() {
  return (
    <ComponentDoc
      name="SignUpSplitScreen"
      description="A split-screen sign-up with a brand panel on one side and the form on the other."
      radixPrimitive="—"
      preview={
        <div className="w-full max-w-2xl">
          <SignUpSplitScreen
            onSubmit={(data) => console.log(data)}
          />
        </div>
      }
      code={`import { SignUpSplitScreen } from 'design-system/components'

;<SignUpSplitScreen
  onSubmit={(data) => console.log(data)}
  onToggleMode={() => console.log('switch to login')}
/>`}
      props={[
        { name: 'onSubmit', type: '(data) => void', defaultVal: '—', description: 'Form submit handler' },
        { name: 'onToggleMode', type: '() => void', defaultVal: '—', description: 'Switch to login' },
        { name: 'brandSlot', type: 'ReactNode', defaultVal: '—', description: 'Brand slot' },
        { name: 'imageSlot', type: 'ReactNode', defaultVal: '—', description: 'Image slot' },
        { name: 'socialButtons', type: 'ReactNode', defaultVal: '—', description: 'Social sign-up buttons' },
      ]}
    />
  )
}
