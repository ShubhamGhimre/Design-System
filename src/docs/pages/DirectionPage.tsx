import { Direction } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function DirectionPage() {
  return (
    <ComponentDoc
      name="Direction" description="Wraps content in a direction-aware container for LTR and RTL layout support."
      preview={
        <div className="flex flex-col gap-4">
          <Direction direction="ltr">
            <p className="text-sm">Left-to-Right text alignment</p>
          </Direction>
          <Direction direction="rtl">
            <p className="text-sm">النص من اليمين إلى اليسار</p>
          </Direction>
        </div>
      }
      code={`<Direction direction="ltr">
  <p>Left-to-Right text</p>
</Direction>

<Direction direction="rtl">
  <p>النص من اليمين إلى اليسار</p>
</Direction>`}
      props={[
        { name: 'direction', type: '"ltr" | "rtl"', defaultVal: '"ltr"', description: 'Text direction' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="LTR">
            <Direction direction="ltr" className="rounded-md border border-border bg-card p-4">
              <p className="text-sm">This text flows from left to right. English and most European languages use this direction.</p>
            </Direction>
          </Row>
          <Row label="RTL">
            <Direction direction="rtl" className="rounded-md border border-border bg-card p-4">
              <p className="text-sm">هذا النص يتدفق من اليمين إلى اليسار. العربية والعبرية والفارسية تستخدم هذا الاتجاه.</p>
            </Direction>
          </Row>
        </div>
      }
    />
  )
}
