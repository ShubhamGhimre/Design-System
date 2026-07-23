import type { ReactNode } from 'react'

export function Row({ label, children }: { label?: string; children: ReactNode }) {
  return (
    <div className="mb-6 last:mb-0">
      {label && (
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
      )}
      <div className="flex flex-wrap items-center gap-4">
        {children}
      </div>
    </div>
  )
}
