import { useState, useEffect, useRef } from 'react'
import { Search, Cpu } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import navItems from '../data/navs.json'

function flattenNav() {
  const items: { label: string; href: string; desc?: string }[] = []
  for (const item of navItems) {
    if ('children' in item && item.children) {
      for (const child of item.children) {
        items.push(child)
      }
    } else {
      items.push(item)
    }
  }
  return items
}

const ALL_COMPONENTS = flattenNav()

export function SearchDialog() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(true)
        setQuery('')
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  const results = query.length > 0
    ? ALL_COMPONENTS.filter(item => item.label.toLowerCase().includes(query.toLowerCase()))
    : ALL_COMPONENTS

  return (
    <>
      <button onClick={() => { setOpen(true); setQuery('') }}
        className="flex w-full max-w-xs items-center gap-2 rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-border hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Search className="size-3.5 shrink-0" />
        <span className="flex-1 text-start">Search components...</span>
        <kbd className="hidden rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[10px] font-medium text-muted-foreground sm:inline-flex items-center gap-0.5">
          <span>⌘</span>K
        </kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/50 pt-[15vh]" onClick={() => setOpen(false)}>
          <div className="w-full max-w-lg rounded-xl border border-border bg-background shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <Search className="size-4 shrink-0 text-muted-foreground" />
              <input ref={inputRef} value={query} onChange={e => setQuery(e.target.value)}
                placeholder={query.length === 0 ? 'Type to filter components...' : 'Search components...'}
                className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">ESC</kbd>
            </div>
            <div className="max-h-80 overflow-y-auto p-2">
              {query.length === 0 && (
                <p className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">Suggested</p>
              )}
              {results.length === 0 && query.length > 0 && (
                <p className="p-4 text-center text-sm text-muted-foreground">No results found.</p>
              )}
              {results.map(item => (
                <a key={item.href} href={item.href} onClick={e => { e.preventDefault(); navigate(item.href); setOpen(false) }}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-muted"
                >
                  <span className="flex size-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Cpu className="size-3.5" />
                  </span>
                  <div>
                    <p className="font-medium">{item.label}</p>
                    {item.desc && <p className="text-xs text-muted-foreground">{item.desc}</p>}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
