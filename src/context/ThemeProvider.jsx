import { useCallback, useEffect, useMemo, useReducer, useState } from 'react'
import { ThemeContext } from './theme-context'

const STORAGE_KEY = 'portfolio-theme'

function getSystemDark() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

function applyDomTheme(resolved) {
  const root = document.documentElement
  if (resolved === 'dark') root.classList.add('dark')
  else root.classList.remove('dark')
}

export function ThemeProvider({ children }) {
  const [preference, setPreferenceState] = useState(() => {
    if (typeof window === 'undefined') return null
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
    return null
  })
  const [, bumpSystem] = useReducer((n) => n + 1, 0)

  const resolved =
    preference === 'light' || preference === 'dark'
      ? preference
      : getSystemDark()
        ? 'dark'
        : 'light'

  useEffect(() => {
    applyDomTheme(resolved)
  }, [resolved])

  useEffect(() => {
    if (preference !== null) return
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = () => bumpSystem()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [preference])

  const setTheme = useCallback((mode) => {
    if (mode === 'system') {
      localStorage.removeItem(STORAGE_KEY)
      setPreferenceState(null)
      applyDomTheme(getSystemDark() ? 'dark' : 'light')
      return
    }
    localStorage.setItem(STORAGE_KEY, mode)
    setPreferenceState(mode)
  }, [])

  const value = useMemo(
    () => ({
      theme: preference,
      resolvedTheme: resolved,
      setTheme,
    }),
    [preference, resolved, setTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
