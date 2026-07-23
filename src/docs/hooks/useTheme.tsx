import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type ThemeName = 'default' | 'ocean' | 'forest' | 'sunset' | 'rose' | 'violet' | 'slate' | 'amber' | 'emerald' | 'ruby'

export interface ThemeVars {
  light: Record<string, string>
  dark: Record<string, string>
}

export interface ThemeContextValue {
  theme: ThemeName
  setTheme: (name: ThemeName) => void
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

let styleEl: HTMLStyleElement | null = null

function applyCustomVars(vars: ThemeVars | null) {
  if (!styleEl) {
    styleEl = document.createElement('style')
    styleEl.id = 'ds-custom-theme'
    document.head.appendChild(styleEl)
  }
  const light = vars?.light ?? {}
  const dark = vars?.dark ?? {}
  if (Object.keys(light).length === 0 && Object.keys(dark).length === 0) {
    styleEl.textContent = ''
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
  styleEl.textContent = lines.join('\n')
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    try { return (localStorage.getItem(STORAGE_THEME) as ThemeName) || 'default' } catch { return 'default' }
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
    } catch { return null }
  })
  const [isDark, setIsDarkState] = useState<boolean>(() => {
    try { return localStorage.getItem(STORAGE_DARK) === 'true' || document.documentElement.classList.contains('dark') } catch { return false }
  })

  const setTheme = (name: ThemeName) => {
    setThemeState(name)
    try { localStorage.setItem(STORAGE_THEME, name) } catch {}
    document.documentElement.className = document.documentElement.className
      .replace(/theme-\w+/g, '')
      .trim()
    if (name !== 'default') {
      document.documentElement.classList.add(`theme-${name}`)
    }
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const setCustomTheme = (vars: ThemeVars) => {
    setCustomThemeState(vars)
    try { localStorage.setItem(STORAGE_CUSTOM, JSON.stringify(vars)) } catch {}
    applyCustomVars(vars)
  }

  const resetTheme = () => {
    setTheme('default')
    setCustomThemeState(null)
    try { localStorage.removeItem(STORAGE_CUSTOM) } catch {}
    applyCustomVars(null)
  }

  const setIsDark = (dark: boolean) => {
    setIsDarkState(dark)
    try { localStorage.setItem(STORAGE_DARK, String(dark)) } catch {}
    document.documentElement.classList.toggle('dark', dark)
  }

  useEffect(() => {
    document.documentElement.classList.remove('dark')
    if (theme !== 'default') document.documentElement.classList.add(`theme-${theme}`)
    applyCustomVars(customTheme)
    if (isDark) document.documentElement.classList.add('dark')
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, customTheme, setCustomTheme, resetTheme, isDark, setIsDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function applyThemeVars(vars: ThemeVars | null) {
  applyCustomVars(vars)
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
