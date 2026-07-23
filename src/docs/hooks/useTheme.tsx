import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type ThemeName = 'default' | 'ocean' | 'forest' | 'sunset' | 'rose' | 'violet' | 'slate' | 'amber' | 'emerald' | 'ruby'

export interface ThemeContextValue {
  theme: ThemeName
  setTheme: (name: ThemeName) => void
  customTheme: Record<string, string> | null
  setCustomTheme: (vars: Record<string, string>) => void
  resetTheme: () => void
  isDark: boolean
  setIsDark: (dark: boolean) => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

const STORAGE_THEME = 'ds-theme'
const STORAGE_CUSTOM = 'ds-theme-custom'
const STORAGE_DARK = 'ds-theme-dark'

let styleEl: HTMLStyleElement | null = null

function applyCustomVars(vars: Record<string, string> | null) {
  if (!styleEl) {
    styleEl = document.createElement('style')
    styleEl.id = 'ds-custom-theme'
    document.head.appendChild(styleEl)
  }
  if (!vars || Object.keys(vars).length === 0) {
    styleEl.textContent = ''
    return
  }
  const css = `:root, .dark {\n${Object.entries(vars).map(([k, v]) => `  ${k}: ${v};`).join('\n')}\n}`
  styleEl.textContent = css
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>(() => {
    try { return (localStorage.getItem(STORAGE_THEME) as ThemeName) || 'default' } catch { return 'default' }
  })
  const [customTheme, setCustomThemeState] = useState<Record<string, string> | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_CUSTOM)
      return saved ? JSON.parse(saved) : null
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
    if (isDark) document.documentElement.classList.add('dark')
  }

  const setCustomTheme = (vars: Record<string, string>) => {
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

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
