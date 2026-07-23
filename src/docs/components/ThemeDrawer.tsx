import { useState } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '../../components'
import { useTheme, type ThemeName } from '../hooks/useTheme'
import { cn } from '../../lib/utils'

const themes: { name: ThemeName; label: string; colors: string[] }[] = [
  { name: 'default', label: 'Default', colors: ['#3b82f6', '#f8fafc', '#f1f5f9', '#94a3b8'] },
  { name: 'ocean', label: 'Ocean', colors: ['#0d9488', '#ecfeff', '#ccfbf1', '#5eead4'] },
  { name: 'forest', label: 'Forest', colors: ['#16a34a', '#f0fdf4', '#dcfce7', '#86efac'] },
  { name: 'sunset', label: 'Sunset', colors: ['#ea580c', '#fff7ed', '#ffedd5', '#fdba74'] },
  { name: 'rose', label: 'Rose', colors: ['#e11d48', '#fff1f2', '#ffe4e6', '#fda4af'] },
  { name: 'violet', label: 'Violet', colors: ['#7c3aed', '#f5f3ff', '#ede9fe', '#c4b5fd'] },
  { name: 'slate', label: 'Slate', colors: ['#475569', '#f8fafc', '#f1f5f9', '#94a3b8'] },
  { name: 'amber', label: 'Amber', colors: ['#d97706', '#fffbeb', '#fef3c7', '#fcd34d'] },
  { name: 'emerald', label: 'Emerald', colors: ['#059669', '#ecfdf5', '#d1fae5', '#6ee7b7'] },
  { name: 'ruby', label: 'Ruby', colors: ['#dc2626', '#fef2f2', '#fee2e2', '#fca5a5'] },
]

const CUSTOMIZABLE_VARS = [
  { key: '--primary', label: 'Primary', default: 'oklch(0.6171 0.1375 39.0427)' },
  { key: '--primary-foreground', label: 'Primary Foreground', default: 'oklch(1 0 0)' },
  { key: '--secondary', label: 'Secondary', default: 'oklch(0.9245 0.0138 92.9892)' },
  { key: '--secondary-foreground', label: 'Secondary Foreground', default: 'oklch(0.4334 0.0177 98.6048)' },
  { key: '--accent', label: 'Accent', default: 'oklch(0.9245 0.0138 92.9892)' },
  { key: '--accent-foreground', label: 'Accent Foreground', default: 'oklch(0.2671 0.0196 98.9390)' },
  { key: '--muted', label: 'Muted', default: 'oklch(0.9341 0.0153 90.2390)' },
  { key: '--muted-foreground', label: 'Muted Foreground', default: 'oklch(0.6059 0.0075 97.4233)' },
  { key: '--background', label: 'Background', default: 'oklch(0.9818 0.0054 95.0986)' },
  { key: '--foreground', label: 'Foreground', default: 'oklch(0.3438 0.0269 95.7226)' },
  { key: '--border', label: 'Border', default: 'oklch(0.8847 0.0069 97.3627)' },
  { key: '--ring', label: 'Ring', default: 'oklch(0.6171 0.1375 39.0427)' },
  { key: '--radius', label: 'Radius', default: '0.5rem' },
  { key: '--font-sans', label: 'Font Sans', default: 'Inter, ui-sans-serif, system-ui, sans-serif' },
  { key: '--font-mono', label: 'Font Mono', default: 'JetBrains Mono, ui-monospace, monospace' },
  { key: '--font-serif', label: 'Font Serif', default: 'Georgia, ui-serif, serif' },
]

const FONT_OPTIONS = {
  '--font-sans': [
    'Inter, ui-sans-serif, system-ui, sans-serif',
    'ui-sans-serif, system-ui, -apple-system, sans-serif',
    'SF Pro, ui-sans-serif, system-ui, sans-serif',
    'Geist, ui-sans-serif, system-ui, sans-serif',
    'Plus Jakarta Sans, ui-sans-serif, system-ui, sans-serif',
  ],
  '--font-mono': [
    'JetBrains Mono, ui-monospace, monospace',
    'ui-monospace, SFMono-Regular, Menlo, Monaco, monospace',
    'Fira Code, ui-monospace, monospace',
    'Source Code Pro, ui-monospace, monospace',
    'Geist Mono, ui-monospace, monospace',
  ],
  '--font-serif': [
    'Georgia, ui-serif, serif',
    'ui-serif, Georgia, Cambria, Times New Roman, serif',
    'Playfair Display, ui-serif, serif',
    'Merriweather, ui-serif, serif',
    'Lora, ui-serif, serif',
  ],
}

export function ThemeDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { theme, setTheme, customTheme, setCustomTheme, resetTheme } = useTheme()
  const [showCustom, setShowCustom] = useState(!!customTheme)
  const [editedVars, setEditedVars] = useState<Record<string, string>>(customTheme ?? {})

  const handleVarChange = (key: string, value: string) => {
    const next = { ...editedVars, [key]: value }
    setEditedVars(next)
    setCustomTheme(next)
  }

  const startCustom = () => {
    setShowCustom(true)
    const initial: Record<string, string> = {}
    CUSTOMIZABLE_VARS.forEach((v) => {
      initial[v.key] = editedVars[v.key] || v.default
    })
    setEditedVars(initial)
    setCustomTheme(initial)
  }

  return (
    <Sheet open={open} onOpenChange={(o) => { if (!o) onClose() }}>
      <SheetContent side="right" className="w-full max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Themes</SheetTitle>
          <SheetDescription>Choose a preset or create your own theme.</SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          <section>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Presets</h3>
            <div className="grid grid-cols-2 gap-3">
              {themes.map((t) => (
                <button
                  key={t.name}
                  onClick={() => { setTheme(t.name); setShowCustom(false) }}
                  className={cn(
                    'flex flex-col items-start gap-2 rounded-lg border p-3 text-left transition-all hover:border-ring',
                    theme === t.name && !showCustom
                      ? 'border-ring ring-1 ring-ring'
                      : 'border-border',
                  )}
                >
                  <div className="flex gap-1">
                    {t.colors.map((c, i) => (
                      <span key={i} className="size-4 rounded-full border border-border/50" style={{ background: c }} />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-foreground">{t.label}</span>
                </button>
              ))}

              <button
                onClick={startCustom}
                className={cn(
                  'flex flex-col items-start gap-2 rounded-lg border p-3 text-left transition-all hover:border-ring',
                  showCustom ? 'border-ring ring-1 ring-ring' : 'border-border',
                )}
              >
                <div className="flex size-8 items-center justify-center rounded-full border border-dashed border-muted-foreground">
                  <span className="text-lg text-muted-foreground">+</span>
                </div>
                <span className="text-sm font-medium text-foreground">Custom</span>
              </button>
            </div>
          </section>

          {showCustom && (
            <section>
              <h3 className="mb-3 text-sm font-semibold text-foreground">Customize</h3>
              <div className="space-y-3">
                {CUSTOMIZABLE_VARS.map((v) => {
                  const isColor = !v.key.includes('font') && v.key !== '--radius'
                  const isFont = v.key.includes('font')
                  const isRadius = v.key === '--radius'
                  const val = editedVars[v.key] ?? v.default

                  return (
                    <div key={v.key}>
                      <label className="mb-1 block text-xs text-muted-foreground">{v.label}</label>
                      {isFont ? (
                        <select
                          value={val}
                          onChange={(e) => handleVarChange(v.key, e.target.value)}
                          className="w-full rounded-md border border-input bg-background px-2 py-1.5 text-xs text-foreground"
                        >
                          {(FONT_OPTIONS as Record<string, string[]>)[v.key]?.map((opt) => (
                            <option key={opt} value={opt}>{opt.split(',')[0]}</option>
                          ))}
                        </select>
                      ) : isRadius ? (
                        <div className="flex items-center gap-2">
                          <input
                            type="range"
                            min="0"
                            max="1.5"
                            step="0.0625"
                            value={parseFloat(val) || 0.5}
                            onChange={(e) => handleVarChange(v.key, `${e.target.value}rem`)}
                            className="flex-1"
                          />
                          <span className="w-12 text-right text-xs text-muted-foreground">{val}</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <input
                            value={val}
                            onChange={(e) => handleVarChange(v.key, e.target.value)}
                            className="flex-1 rounded-md border border-input bg-background px-2 py-1.5 font-mono text-xs text-foreground"
                          />
                          {isColor && (
                            <span
                              className="size-6 shrink-0 rounded-full border border-border"
                              style={{ background: val.startsWith('oklch') ? `oklch(${val.slice(6, -1)})` : val }}
                            />
                          )}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </section>
          )}

          <div className="flex gap-2 pt-2">
            <button
              onClick={resetTheme}
              className="flex-1 rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Reset to Default
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
