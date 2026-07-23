import { Breadcrumb } from '../../components'
import { ComponentDoc } from '../components/ComponentDoc'
import { Row } from '../components/Row'

export function BreadcrumbPage() {
  return (
    <ComponentDoc
      name="Breadcrumb"
      description="Shows the current location within a hierarchy of pages."
      preview={
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Docs', href: '/docs' },
            { label: 'Components' },
          ]}
        />
      }
      code={`<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Docs', href: '/docs' },
    { label: 'Components' },
  ]}
/>`}
      props={[
        { name: 'items', type: 'BreadcrumbItem[]', defaultVal: '—', description: 'Array of breadcrumb items with label and optional href' },
        { name: 'separator', type: 'ReactNode', defaultVal: '—', description: 'Custom separator between items (default: ChevronRight icon)' },
      ]}
      variants={
        <div className="space-y-6">
          <Row label="Default">
            <Breadcrumb
              items={[
                { label: 'Home', href: '/' },
                { label: 'Category', href: '/category' },
                { label: 'Item' },
              ]}
            />
          </Row>
          <Row label="Many Items">
            <Breadcrumb
              items={[
                { label: 'Root', href: '/' },
                { label: 'Section', href: '/section' },
                { label: 'Subsection', href: '/subsection' },
                { label: 'Page', href: '/page' },
                { label: 'Detail' },
              ]}
            />
          </Row>
        </div>
      }
      anatomy={['<nav> — The breadcrumb navigation landmark', '<ol> / <li> — List structure for items', '<a> or <span> — Individual breadcrumb links or text']}
      accessibility={['Uses nav element with aria-label="Breadcrumb"', 'Current page uses font-medium to distinguish from links']}
    />
  )
}
