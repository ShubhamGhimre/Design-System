import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function CardPage() {
  return (
    <ComponentDoc
      name="Card" description="A flexible content container with optional header, title, description, and footer sections."
      preview={
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Main content area. Put anything here.</p>
          </CardContent>
        </Card>
      }
      code={`<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content</p>
  </CardContent>
</Card>`}
      props={[
        { name: 'className', type: 'string', defaultVal: '—', description: 'Additional CSS classes' },
      ]}
      variants={
        <Row label="Subcomponents">
          <Card className="w-64">
            <CardHeader><CardTitle>Header + Title</CardTitle></CardHeader>
            <CardContent><p className="text-sm text-muted-foreground">Content with no description.</p></CardContent>
          </Card>
        </Row>
      }
      anatomy={['<Card> — The root container', '<CardHeader> — Optional header section', '<CardTitle> — Title inside header', '<CardDescription> — Description inside header', '<CardContent> — Main content', '<CardFooter> — Optional footer']}
    />
  )
}
