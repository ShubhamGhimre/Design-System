import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { themes, type ThemeDefinition } from '../data/themes'

export interface ThemeVars {
  light: Record<string, string>
  dark: Record<string, string>
}

export type ThemeName = string

export interface ThemeContextValue {
  theme: ThemeName
  setTheme: (name: ThemeName) => void
  themeDef: ThemeDefinition | null
  customTheme: ThemeVars | null
  setCustomTheme: (vars: ThemeVars) => void
  resetTheme: () => void
  isDark: boolean
  setIsDark: (dark: boolean) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const STORAGE_THEME = 'ds-theme'
const STORAGE_CUSTOM = 'ds-theme-custom'
const STORAGE_DARK = 'ds-theme-dark'

let customStyleEl: HTMLStyleElement | null = null

function applyCustomVars(vars: ThemeVars | null) {
  if (!customStyleEl) {
    customStyleEl = document.createElement('style')
    customStyleEl.id = 'ds-custom-theme'
    document.head.appendChild(customStyleEl)
  }
  const light = vars?.light ?? {}
  const dark = vars?.dark ?? {}
  if (Object.keys(light).length === 0 && Object.keys(dark).length === 0) {
    customStyleEl.textContent = ''
    return
  }
  const lines: string[] = []
  if (Object.keys(light).length > 0) {
    lines.push(':root {')
    lines.push(...Object.entries(light).map(([k, v]) => `  ${k}: ${v};`))
    lines.push('}')
  }
  if (Object.keys(dark).length > 0) {
    lines.push('.dark {')
    lines.push(...Object.entries(dark).map(([k, v]) => `  ${k}: ${v};`))
    lines.push('}')
  }
  customStyleEl.textContent = lines.join('\n')
}

function applyThemeVarsToRoot(def: ThemeDefinition | null, isDark: boolean) {
  // Clear all previously-set theme vars
  const root = document.documentElement
  const knownKeys = [
    'background', 'foreground', 'card', 'card-foreground', 'popover', 'popover-foreground',
    'primary', 'primary-foreground', 'secondary', 'secondary-foreground',
    'muted', 'muted-foreground', 'accent', 'accent-foreground',
    'destructive', 'destructive-foreground', 'border', 'input', 'ring',
    'chart-1', 'chart-2', 'chart-3', 'chart-4', 'chart-5',
    'sidebar', 'sidebar-foreground', 'sidebar-primary', 'sidebar-primary-foreground',
    'sidebar-accent', 'sidebar-accent-foreground', 'sidebar-border', 'sidebar-ring',
    'radius', 'font-sans', 'font-serif', 'font-mono',
  ]
  // Clear old values
  knownKeys.forEach((k) => root.style.removeProperty(`--${k}`))

  if (!def) return

  // Apply theme vars (fonts, radius) to root
  if (def.cssVars.theme) {
    Object.entries(def.cssVars.theme).forEach(([k, v]) => {
      root.style.setProperty(`--${k}`, v)
    })
  }

  // Apply mode-specific vars
  const modeVars = isDark ? def.cssVars.dark : def.cssVars.light
  if (modeVars) {
    Object.entries(modeVars).forEach(([k, v]) => {
      root.style.setProperty(`--${k}`, v)
    })
  }
}

function findTheme(name: string): ThemeDefinition | null {
  return themes.find((t) => t.name === name) ?? themes[0] ?? null
}

export function applyThemeVars(vars: ThemeVars | null) {
  applyCustomVars(vars)
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_THEME)
      if (saved) {
        const found = themes.find((t) => t.name === saved)
        if (found) return found.name
      }
      return themes[0]?.name ?? 'default'
    } catch {
      return themes[0]?.name ?? 'default'
    }
  })
  const [customTheme, setCustomThemeState] = useState<ThemeVars | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_CUSTOM)
      if (!saved) return null
      const parsed = JSON.parse(saved)
      if (parsed && typeof parsed === 'object' && 'light' in parsed && 'dark' in parsed) {
        return parsed as ThemeVars
      }
      if (parsed && typeof parsed === 'object' && !('light' in parsed)) {
        const migrated: ThemeVars = { light: parsed, dark: {} }
        localStorage.setItem(STORAGE_CUSTOM, JSON.stringify(migrated))
        return migrated
      }
      return null
    } catch {
      return null
    }
  })
  const [isDark, setIsDarkState] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_DARK) === 'true' || document.documentElement.classList.contains('dark')
    } catch {
      return false
    }
  })

  const themeDef = findTheme(theme)

  const setTheme = (name: ThemeName) => {
    setThemeState(name)
    try {
      localStorage.setItem(STORAGE_THEME, name)
    } catch {}
    const def = findTheme(name)
    applyThemeVarsToRoot(def, isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const setCustomTheme = (vars: ThemeVars) => {
    setCustomThemeState(vars)
    try {
      localStorage.setItem(STORAGE_CUSTOM, JSON.stringify(vars))
    } catch {}
    applyCustomVars(vars)
  }

  const resetTheme = () => {
    const first = themes[0]
    if (first) {
      setThemeState(first.name)
      try {
        localStorage.setItem(STORAGE_THEME, first.name)
      } catch {}
      applyThemeVarsToRoot(first, isDark)
    }
    setCustomThemeState(null)
    try {
      localStorage.removeItem(STORAGE_CUSTOM)
    } catch {}
    applyCustomVars(null)
  }

  const setIsDark = (dark: boolean) => {
    setIsDarkState(dark)
    try {
      localStorage.setItem(STORAGE_DARK, String(dark))
    } catch {}
    document.documentElement.classList.toggle('dark', dark)
    // Re-apply theme vars so dark/light mode vars take effect
    const def = findTheme(theme)
    if (def) {
      applyThemeVarsToRoot(def, dark)
    }
  }

  useEffect(() => {
    document.documentElement.classList.remove('dark')
    const def = findTheme(theme)
    applyThemeVarsToRoot(def, isDark)
    applyCustomVars(customTheme)
    if (isDark) document.documentElement.classList.add('dark')
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        themeDef,
        customTheme,
        setCustomTheme,
        resetTheme,
        isDark,
        setIsDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
