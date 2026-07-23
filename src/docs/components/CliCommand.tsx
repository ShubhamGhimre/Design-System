import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { cn } from '../../lib/utils'

interface CliCommandProps {
  command: string
  className?: string
}

const managers = [
  { label: 'npm', prefix: 'npx' },
  { label: 'pnpm', prefix: 'pnpm dlx' },
  { label: 'yarn', prefix: 'yarn dlx' },
  { label: 'bun', prefix: 'bunx --bun' },
] as const

const STORAGE_KEY = 'ds-pm'

function loadPm() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const idx = managers.findIndex((m) => m.label === saved)
      if (idx >= 0) return managers[idx]
    }
  } catch {}
  return managers[0]
}

function savePm(label: string) {
  try { localStorage.setItem(STORAGE_KEY, label) } catch {}
}

export function CliCommand({ command, className }: CliCommandProps) {
  const [pm, setPm] = useState(loadPm)
  const [copied, setCopied] = useState(false)
  const fullCommand = `${pm.prefix} design-system@latest ${command}`

  const handleCopy = async () => {
    await navigator.clipboard.writeText(fullCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handlePm = (m: (typeof managers)[number]) => {
    setPm(m)
    savePm(m.label)
  }

  return (
    <div className={cn('group relative overflow-hidden rounded-lg border border-border bg-muted/90', className)}>
      <div className="flex items-center justify-between border-b border-border/20 px-4 py-2">
        <div className="flex items-center gap-0.5">
          {managers.map((m) => (
            <button
              key={m.label}
              onClick={() => handlePm(m)}
              className={cn(
                'rounded-md px-2 py-1 text-xs font-medium transition-colors',
                pm.label === m.label
                  ? 'bg-accent text-accent-foreground'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              {m.label}
            </button>
          ))}
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-foreground">
        <code>{fullCommand}</code>
      </pre>
    </div>
  )
}
