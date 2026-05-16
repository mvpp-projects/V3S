import React, { createContext, useContext, PropsWithChildren, useEffect, useState } from 'react'

type ThemeMode = 'light' | 'dark' | 'system'

type ThemeContextValue = {
  presenceColors: string[]
  getPresenceColor: (idx: number) => string
  themeMode: ThemeMode
  setThemeMode: (mode: ThemeMode) => void
  isDark: boolean
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: PropsWithChildren<{}>) {
  const [themeMode, setThemeModeState] = useState<ThemeMode>('dark')

  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', 'dark')
    setIsDark(true)
  }, [themeMode])

  const setThemeMode = (_mode: ThemeMode) => {
    setThemeModeState('dark')
    localStorage.setItem('theme-mode', 'dark')
  }

  const presenceColors = [
    'var(--presence-blue)',
    'var(--presence-orange)',
    'var(--accent-100)',
    'var(--accent-300)'
  ]

  const value: ThemeContextValue = {
    presenceColors,
    getPresenceColor: (idx: number) => presenceColors[idx % presenceColors.length],
    themeMode,
    setThemeMode,
    isDark
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
