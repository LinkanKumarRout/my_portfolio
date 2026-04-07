import { useMemo, useState } from 'react'
import { skillsSection } from '../data/portfolio'

export default function Skills() {
  const { title, intro, skills } = skillsSection
  const categories = useMemo(() => ['All', ...new Set(skills.map((s) => s.category))], [skills])
  const [filter, setFilter] = useState('All')

  const visible = filter === 'All' ? skills : skills.filter((s) => s.category === filter)

  return (
    <section id="skills" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
          {title}
        </h2>
        <div className="mb-8 h-1 w-20 rounded-full bg-primary-500" />
        <p className="mb-6 max-w-2xl text-slate-600 dark:text-dark-400">{intro}</p>
        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter skills by category">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-dark-950 ${
                filter === cat
                  ? 'bg-primary-600 text-white shadow-md shadow-primary-600/20 dark:bg-primary-500'
                  : 'border border-slate-200 bg-white text-slate-700 hover:border-primary-400 hover:text-primary-700 dark:border-dark-600 dark:bg-dark-900/40 dark:text-dark-200 dark:hover:border-primary-500/50 dark:hover:text-primary-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <ul className="flex flex-wrap gap-3" aria-live="polite">
          {visible.map((skill) => (
            <li key={skill.name}>
              <span className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-400/60 hover:shadow-md dark:border-dark-700 dark:bg-dark-800/80 dark:text-dark-200 dark:hover:border-primary-500/50 dark:hover:text-primary-400">
                {skill.name}
                <span className="ml-2 text-xs text-slate-400 dark:text-dark-500">· {skill.category}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
