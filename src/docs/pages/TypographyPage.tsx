import { Typography } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function TypographyPage() {
  return (
    <ComponentDoc
      name="Typography" description="A versatile text component with predefined typographic styles."
      preview={<Typography variant="h1">Heading 1</Typography>}
      code={`<Typography variant="h1">Heading 1</Typography>`}
      props={[
        { name: 'variant', type: '"h1" | "h2" | "h3" | "h4" | "p" | "lead" | "muted" | "small"', defaultVal: '"p"', description: 'Text style variant' },
        { name: 'as', type: 'keyof JSX.IntrinsicElements', defaultVal: '—', description: 'Override rendered HTML element' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="Headings">
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>
          </Row>
          <Row label="Body">
            <Typography variant="p">Paragraph text</Typography>
            <Typography variant="lead">Lead text — larger and lighter</Typography>
            <Typography variant="muted">Muted text — subdued tone</Typography>
            <Typography variant="small">Small text — fine print</Typography>
          </Row>
        </div>
      }
    />
  )
}
