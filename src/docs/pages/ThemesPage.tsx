import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme, applyThemeVars, type ThemeVars } from '../hooks/useTheme'
import { themes } from '../data/themes'
import { cn } from '../../lib/utils'
import { ColorPicker } from '../components/ColorPicker'

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
]

const OTHER_VARS = [
  { key: '--radius', label: 'Radius', default: '0.5rem', type: 'radius' as const },
  { key: '--font-sans', label: 'Font Sans', default: 'Inter, ui-sans-serif, system-ui, sans-serif', type: 'font' as const },
  { key: '--font-mono', label: 'Font Mono', default: 'JetBrains Mono, ui-monospace, monospace', type: 'font' as const },
  { key: '--font-serif', label: 'Font Serif', default: 'Georgia, ui-serif, serif', type: 'font' as const },
]

const FONT_OPTIONS: Record<string, string[]> = {
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

const LIGHT_DEFAULTS: Record<string, string> = {
  '--primary': 'oklch(0.6171 0.1375 39.0427)',
  '--primary-foreground': 'oklch(1 0 0)',
  '--secondary': 'oklch(0.9245 0.0138 92.9892)',
  '--secondary-foreground': 'oklch(0.4334 0.0177 98.6048)',
  '--accent': 'oklch(0.9245 0.0138 92.9892)',
  '--accent-foreground': 'oklch(0.2671 0.0196 98.9390)',
  '--muted': 'oklch(0.9341 0.0153 90.2390)',
  '--muted-foreground': 'oklch(0.6059 0.0075 97.4233)',
  '--background': 'oklch(0.9818 0.0054 95.0986)',
  '--foreground': 'oklch(0.3438 0.0269 95.7226)',
  '--border': 'oklch(0.8847 0.0069 97.3627)',
  '--ring': 'oklch(0.6171 0.1375 39.0427)',
  '--radius': '0.5rem',
  '--font-sans': 'Inter, ui-sans-serif, system-ui, sans-serif',
  '--font-mono': 'JetBrains Mono, ui-monospace, monospace',
  '--font-serif': 'Georgia, ui-serif, serif',
}

const DARK_DEFAULTS: Record<string, string> = {
  '--primary': 'oklch(0.6724 0.1308 38.7559)',
  '--primary-foreground': 'oklch(1 0 0)',
  '--secondary': 'oklch(0.9818 0.0054 95.0986)',
  '--secondary-foreground': 'oklch(0.3085 0.0035 106.6039)',
  '--accent': 'oklch(0.2130 0.0078 95.4245)',
  '--accent-foreground': 'oklch(0.9663 0.0080 98.8792)',
  '--muted': 'oklch(0.2213 0.0038 106.7070)',
  '--muted-foreground': 'oklch(0.7713 0.0169 99.0657)',
  '--background': 'oklch(0.2679 0.0036 106.6427)',
  '--foreground': 'oklch(0.8074 0.0142 93.0137)',
  '--border': 'oklch(0.3618 0.0101 106.8928)',
  '--ring': 'oklch(0.6724 0.1308 38.7559)',
}

function buildPreviewVars(light: Record<string, string>, dark: Record<string, string>): ThemeVars {
  return { light, dark }
}

export function ThemesPage() {
  const navigate = useNavigate()
  const { theme, setTheme, customTheme, setCustomTheme, resetTheme } = useTheme()

  const [mode, setMode] = useState<'presets' | 'custom'>(customTheme ? 'custom' : 'presets')
  const [editedLight, setEditedLight] = useState<Record<string, string>>(customTheme?.light ?? {})
  const [editedDark, setEditedDark] = useState<Record<string, string>>(customTheme?.dark ?? {})
  const preview = (light: Record<string, string>, dark: Record<string, string>) => {
    applyThemeVars(buildPreviewVars(light, dark))
  }

  const handleLightChange = (key: string, value: string) => {
    const next = { ...editedLight, [key]: value }
    setEditedLight(next)
    preview(next, editedDark)
  }

  const handleDarkChange = (key: string, value: string) => {
    const next = { ...editedDark, [key]: value }
    setEditedDark(next)
    preview(editedLight, next)
  }

  const startCustom = () => {
    setMode('custom')
    const light: Record<string, string> = {}
    const dark: Record<string, string> = {}
    CUSTOMIZABLE_VARS.forEach((v) => {
      light[v.key] = editedLight[v.key] ?? LIGHT_DEFAULTS[v.key] ?? v.default
      dark[v.key] = editedDark[v.key] ?? DARK_DEFAULTS[v.key] ?? v.default
    })
    OTHER_VARS.forEach((v) => {
      light[v.key] = editedLight[v.key] ?? LIGHT_DEFAULTS[v.key] ?? v.default
    })
    setEditedLight(light)
    setEditedDark(dark)
    preview(light, dark)
  }

  const handleSave = () => {
    setCustomTheme({ light: editedLight, dark: editedDark })
  }

  const handleCancel = () => {
    if (customTheme) {
      setEditedLight({ ...customTheme.light })
      setEditedDark({ ...customTheme.dark })
      preview(customTheme.light, customTheme.dark)
    } else {
      const empty: Record<string, string> = {}
      setEditedLight({})
      setEditedDark({})
      preview(empty, empty)
    }
    setMode('presets')
  }

  const handleSelectPreset = (name: string) => {
    setTheme(name)
    setMode('presets')
  }

  const hasUnsaved = (): boolean => {
    const saved = customTheme ?? { light: {}, dark: {} }
    return JSON.stringify({ light: editedLight, dark: editedDark }) !== JSON.stringify(saved)
  }

  return (
    <div className="mx-auto max-w-4xl space-y-8 py-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Themes</h1>
          <p className="text-sm text-muted-foreground">
            Choose a preset or create your own custom theme.
          </p>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          Back
        </button>
      </div>

      <section>
        <h2 className="mb-3 text-sm font-semibold text-foreground">Presets</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {themes.map((t) => (
            <button
              key={t.name}
              onClick={() => handleSelectPreset(t.name)}
              className={cn(
                'flex flex-col items-start gap-2 rounded-lg border p-3 text-left transition-all hover:border-ring',
                theme === t.name && mode === 'presets'
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
              mode === 'custom' ? 'border-ring ring-1 ring-ring' : 'border-border',
            )}
          >
            <div className="flex size-8 items-center justify-center rounded-full border border-dashed border-muted-foreground">
              <span className="text-lg text-muted-foreground">+</span>
            </div>
            <span className="text-sm font-medium text-foreground">Custom</span>
          </button>
        </div>
      </section>

      {mode === 'custom' && (
        <section className="rounded-lg border border-border p-6">
          <h2 className="mb-4 text-lg font-semibold text-foreground">Customize</h2>

          <div className="space-y-4">
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-2 text-[10px] font-medium text-muted-foreground">
              <span>Variable</span>
              <span>Light</span>
              <span>Dark</span>
            </div>

            {CUSTOMIZABLE_VARS.map((v) => (
              <div key={v.key} className="grid grid-cols-[1fr_1fr_1fr] gap-2 items-start">
                <div className="pt-2">
                  <span className="text-xs text-muted-foreground">{v.label}</span>
                </div>
                <ColorPicker
                  value={editedLight[v.key] ?? LIGHT_DEFAULTS[v.key] ?? v.default}
                  onChange={(val) => handleLightChange(v.key, val)}
                />
                <ColorPicker
                  value={editedDark[v.key] ?? DARK_DEFAULTS[v.key] ?? v.default}
                  onChange={(val) => handleDarkChange(v.key, val)}
                />
              </div>
            ))}

            {OTHER_VARS.map((v) => {
              if (v.type === 'font') return (
                <div key={v.key} className="grid grid-cols-[1fr_2fr] gap-2 items-start">
                  <div className="pt-2">
                    <span className="text-xs text-muted-foreground">{v.label}</span>
                  </div>
                  <select
                    value={editedLight[v.key] ?? LIGHT_DEFAULTS[v.key] ?? v.default}
                    onChange={(e) => {
                      handleLightChange(v.key, e.target.value)
                      handleDarkChange(v.key, e.target.value)
                    }}
                    className="w-full rounded-md border border-input bg-background px-2 py-1.5 text-xs text-foreground"
                  >
                    {FONT_OPTIONS[v.key]?.map((opt) => (
                      <option key={opt} value={opt}>{opt.split(',')[0]}</option>
                    ))}
                  </select>
                </div>
              )
              if (v.type === 'radius') {
                const val = editedLight['--radius'] ?? LIGHT_DEFAULTS['--radius'] ?? '0.5rem'
                return (
                  <div key={v.key} className="grid grid-cols-[1fr_2fr] gap-2 items-start">
                    <div className="pt-2">
                      <span className="text-xs text-muted-foreground">{v.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="range"
                        min="0"
                        max="1.5"
                        step="0.0625"
                        value={parseFloat(val) || 0.5}
                        onChange={(e) => {
                          const r = `${e.target.value}rem`
                          handleLightChange(v.key, r)
                          handleDarkChange(v.key, r)
                        }}
                        className="flex-1"
                      />
                      <span className="w-12 text-right text-xs text-muted-foreground">{val}</span>
                    </div>
                  </div>
                )
              }
              return null
            })}
          </div>

          <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
            <button
              onClick={handleSave}
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Save Theme
            </button>
            <button
              onClick={handleCancel}
              className="rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Cancel
            </button>
            {hasUnsaved() && (
              <span className="text-xs text-muted-foreground/70">Unsaved changes</span>
            )}
          </div>
        </section>
      )}

      <div className="flex gap-2">
        <button
          onClick={() => {
            resetTheme()
            setMode('presets')
            setEditedLight({})
            setEditedDark({})
          }}
          className="rounded-md border border-border px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          Reset to Default
        </button>
      </div>
    </div>
  )
}
