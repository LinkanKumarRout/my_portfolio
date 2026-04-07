import { site } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 px-4 py-8 dark:border-dark-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-center text-sm text-slate-500 dark:text-dark-500 sm:text-left">
          © {year} {site.copyrightName}. {site.footerNote}
        </p>
        <div className="flex gap-6">
          <a
            href="#home"
            className="text-sm text-slate-500 transition hover:text-primary-600 dark:text-dark-500 dark:hover:text-primary-400"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
