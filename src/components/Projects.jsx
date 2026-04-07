import { projectsSection } from '../data/portfolio'

export default function Projects() {
  const { title, projects } = projectsSection

  return (
    <section id="projects" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200/80 bg-slate-100/50 p-6 dark:border-dark-800 dark:bg-dark-900/40 md:p-10">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
          {title}
        </h2>
        <div className="mb-10 h-1 w-20 rounded-full bg-primary-500" />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-400/40 hover:shadow-xl dark:border-dark-700 dark:bg-dark-800/50 dark:hover:border-primary-500/40"
            >
              <a
                href={project.link}
                className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary-500"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt ?? ''}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-2 flex items-start justify-between gap-2">
                    <h3 className="text-xl font-semibold text-slate-900 transition group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-400">
                      {project.title}
                    </h3>
                    <span className="shrink-0 text-slate-400 opacity-0 transition group-hover:opacity-100 dark:text-dark-500" aria-hidden>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </div>
                  <p className="mb-4 text-sm text-slate-600 dark:text-dark-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 dark:bg-dark-700 dark:text-dark-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
