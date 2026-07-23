import { InputOTP, InputOTPSeparator } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function InputOTPPage() {
  return (
    <ComponentDoc
      name="InputOTP" description="One-time password input with individual character slots and automatic focus management."
      preview={
        <InputOTP maxLength={6} />
      }
      code={`<InputOTP maxLength={6} />`}
      usage={`<InputOTP
  maxLength={6}
  value={otp}
  onValueChange={setOtp}
/>`}
      props={[
        { name: 'maxLength', type: 'number', defaultVal: '6', description: 'Number of OTP digits' },
        { name: 'value', type: 'string', defaultVal: '—', description: 'Controlled value' },
        { name: 'onValueChange', type: '(value: string) => void', defaultVal: '—', description: 'Callback when value changes' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="Default (6 digits)">
            <InputOTP maxLength={6} />
          </Row>
          <Row label="4 digits">
            <InputOTP maxLength={4} />
          </Row>
          <Row label="With separator">
            <div className="flex items-center gap-2">
              <InputOTP maxLength={3} />
              <InputOTPSeparator />
              <InputOTP maxLength={3} />
            </div>
          </Row>
        </div>
      }
    />
  )
}
