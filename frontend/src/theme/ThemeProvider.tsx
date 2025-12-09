import React, { createContext, useContext, PropsWithChildren } from 'react'

type ThemeContextValue = {
  presenceColors: string[]
  getPresenceColor: (idx: number) => string
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: PropsWithChildren<{}>) {
  const presenceColors = [
    'var(--presence-blue)',
    'var(--presence-orange)',
    'var(--accent-100)',
    'var(--accent-300)'
  ]
  const value: ThemeContextValue = {
    presenceColors,
    getPresenceColor: (idx: number) => presenceColors[idx % presenceColors.length]
  }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
