import { type ReactNode } from 'react'
import { Badge, Table } from '../../components'
import { CliCommand } from './CliCommand'
import { CodeBlock } from './CodeBlock'

interface PropDef {
  name: string
  type: string
  defaultVal: string
  description: string
}

interface ComponentDocProps {
  name: string
  description: string
  preview: ReactNode
  code: string
  usage?: string
  props: PropDef[]
  variants?: ReactNode
  radixPrimitive?: string
  anatomy?: string[]
  accessibility?: string[]
}

function nameToCliCommand(name: string): string {
  return name.split(/\s+/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')
}

const propColumns = [
  { key: 'name', header: 'Prop', cell: (r: PropDef) => <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">{r.name}</code> },
  { key: 'type', header: 'Type', cell: (r: PropDef) => <code className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono text-foreground">{r.type}</code> },
  { key: 'defaultVal', header: 'Default', cell: (r: PropDef) => r.defaultVal || <span className="text-muted-foreground">—</span> },
  { key: 'description', header: 'Description', cell: (r: PropDef) => <span className="text-sm text-muted-foreground">{r.description}</span> },
]

export function ComponentDoc({
  name, description, preview, code, usage, props, variants,
  radixPrimitive, anatomy, accessibility,
}: ComponentDocProps) {
  const cliCommand = nameToCliCommand(name)
  return (
    <div className="max-w-3xl">
      <div className="mb-8">
        <div className="mb-2 flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">{name}</h1>
          {radixPrimitive && (
            <Badge variant="secondary" size="sm">Radix: {radixPrimitive}</Badge>
          )}
        </div>
        <p className="text-lg text-muted-foreground">{description}</p>
      </div>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Preview</h2>
        <div className="flex min-h-32 items-center justify-center rounded-lg border border-border bg-card p-8">
          {preview}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">CLI</h2>
        <CliCommand command={`ds add ${cliCommand}`} />
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Usage</h2>
        <CodeBlock code={code} />
        {usage && (
          <>
            <h3 className="mb-3 mt-6 text-base font-semibold">Advanced Usage</h3>
            <CodeBlock code={usage} />
          </>
        )}
      </section>

      {variants && (
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold">Variants</h2>
          <div className="rounded-lg border border-border bg-card p-6">
            {variants}
          </div>
        </section>
      )}

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Props</h2>
        <div className="rounded-lg border border-border">
          <Table data={props} columns={propColumns} />
        </div>
      </section>

      {(anatomy && anatomy.length > 0) || (accessibility && accessibility.length > 0) ? (
        <section className="mb-10">
          <h2 className="mb-4 text-xl font-semibold">Anatomy & Accessibility</h2>
          {anatomy && anatomy.length > 0 && (
            <>
              <h3 className="mb-2 text-base font-semibold">Anatomy</h3>
              <ul className="mb-6 space-y-1.5 text-sm text-muted-foreground">
                {anatomy.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </>
          )}
          {accessibility && accessibility.length > 0 && (
            <>
              <h3 className="mb-2 text-base font-semibold">Accessibility</h3>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {accessibility.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </>
          )}
        </section>
      ) : null}
    </div>
  )
}
