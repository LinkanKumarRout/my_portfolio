import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { navigation, site } from '../data/portfolio'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const activeId = useScrollSpy(96)

  const linkClass = (id) =>
    id === activeId
      ? 'text-primary-600 dark:text-primary-400 font-semibold'
      : 'text-slate-600 hover:text-primary-600 dark:text-dark-300 dark:hover:text-primary-400'

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-md dark:border-dark-800 dark:bg-dark-950/80"
      aria-label="Primary"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <a
            href="#home"
            className="text-xl font-semibold tracking-tight text-slate-900 transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:text-white dark:hover:text-primary-300 dark:focus-visible:ring-offset-dark-950"
          >
            {site.brandName}
          </a>

          <div className="hidden items-center gap-6 md:flex">
            <ul className="flex items-center gap-8">
              {navigation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`${linkClass(link.id)} text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-dark-950 rounded-md`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle className="border-slate-200 dark:border-dark-700" />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle className="border-slate-200 dark:border-dark-700" />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 dark:text-dark-300 dark:hover:bg-dark-800"
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <ul id="mobile-nav" className="space-y-1 border-t border-slate-200 py-4 dark:border-dark-800 md:hidden">
            {navigation.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`${linkClass(link.id)} block rounded-lg py-2.5 px-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  )
}
