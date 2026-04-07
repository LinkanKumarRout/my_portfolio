import { useTheme } from '../context/useTheme'

export default function ThemeToggle({ className = '' }) {
  const { resolvedTheme, theme, setTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  return (
    <div className={`flex items-center gap-1 rounded-xl border p-1 ${className}`}>
      <button
        type="button"
        onClick={() => setTheme('light')}
        className={`rounded-lg p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-dark-950 ${
          !isDark ? 'bg-primary-500/15 text-primary-600 dark:text-primary-400' : 'text-slate-500 hover:bg-slate-100 dark:text-dark-400 dark:hover:bg-dark-800'
        }`}
        aria-pressed={!isDark}
        aria-label="Light theme"
        title="Light"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => setTheme('dark')}
        className={`rounded-lg p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-dark-950 ${
          isDark ? 'bg-primary-500/20 text-primary-400' : 'text-slate-500 hover:bg-slate-100 dark:text-dark-400 dark:hover:bg-dark-800'
        }`}
        aria-pressed={isDark}
        aria-label="Dark theme"
        title="Dark"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => setTheme('system')}
        className={`rounded-lg p-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-dark-950 ${
          theme === null
            ? 'bg-slate-200 text-slate-800 dark:bg-dark-700 dark:text-primary-300'
            : 'text-slate-500 hover:bg-slate-100 dark:text-dark-400 dark:hover:bg-dark-800'
        }`}
        aria-pressed={theme === null}
        aria-label="Use system theme"
        title="System"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </button>
    </div>
  )
}
