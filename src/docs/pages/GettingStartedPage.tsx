import { CliCommand } from '../components/CliCommand'
import { CodeBlock } from '../components/CodeBlock'

export function GettingStartedPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="mb-2 text-3xl font-bold tracking-tight">Getting Started</h1>
      <p className="mb-8 text-lg text-muted-foreground">
        Learn how to install and use the design system in your project.
      </p>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Quick Start with CLI</h2>
        <p className="mb-4 text-sm text-muted-foreground">Initialize the design system in your project:</p>
        <CliCommand command="ds init" />
        <p className="mt-6 mb-4 text-sm text-muted-foreground">Add individual components as needed:</p>
        <CliCommand command="ds add Button" />
        <p className="mt-6 mb-4 text-sm text-muted-foreground">Browse all available components:</p>
        <CliCommand command="ds list" />
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Manual Installation</h2>
        <p className="mb-4 text-sm text-muted-foreground">Install the package and its peer dependencies:</p>
        <CodeBlock code="npm install design-system @radix-ui/react-accordion @radix-ui/react-checkbox @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-popover @radix-ui/react-radio-group @radix-ui/react-select @radix-ui/react-tabs @radix-ui/react-tooltip class-variance-authority clsx tailwind-merge" />
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Add the CSS</h2>
        <p className="mb-4 text-sm text-muted-foreground">Import the design system styles in your app entry:</p>
        <CodeBlock code={`import 'design-system/style.css'`} />
        <p className="mt-4 text-sm text-muted-foreground">Then wrap your app with the theme provider:</p>
        <CodeBlock code={`import { ThemeProvider } from 'design-system'

function App() {
  return (
    <ThemeProvider>
      <YourComponents />
    </ThemeProvider>
  )
}`} />
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Use a Component</h2>
        <CodeBlock code={`import { Button } from 'design-system'

function MyComponent() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  )
}`} />
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold">Dark Mode</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Add the <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">.dark</code> class to your root element to enable dark mode:
        </p>
        <CodeBlock code={`document.documentElement.classList.add('dark')`} />
      </section>
    </div>
  )
}
