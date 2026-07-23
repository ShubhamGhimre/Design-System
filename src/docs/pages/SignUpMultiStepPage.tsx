import { SignUpMultiStep } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'

export function SignUpMultiStepPage() {
  return (
    <ComponentDoc
      name="SignUpMultiStep"
      description="A multi-step sign-up form with step indicator, back/next navigation, and per-step validation."
      radixPrimitive="—"
      preview={
        <div className="w-full max-w-lg">
          <SignUpMultiStep
            onSubmit={(data) => console.log(data)}
          />
        </div>
      }
      code={`import { SignUpMultiStep } from 'design-system/components'

;<SignUpMultiStep
  onSubmit={(data) => console.log(data)}
  onToggleMode={() => console.log('switch to login')}
/>`}
      props={[
        { name: 'onSubmit', type: '(data) => void', defaultVal: '—', description: 'Final submit handler' },
        { name: 'onToggleMode', type: '() => void', defaultVal: '—', description: 'Switch to login' },
        { name: 'brandSlot', type: 'ReactNode', defaultVal: '—', description: 'Brand slot' },
        { name: 'socialButtons', type: 'ReactNode', defaultVal: '—', description: 'Social sign-up buttons' },
      ]}
    />
  )
}
