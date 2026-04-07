import { about } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200/80 bg-slate-100/50 p-6 shadow-sm dark:border-dark-800 dark:bg-dark-900/40 md:p-10">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
          {about.title}
        </h2>
        <div className="mb-10 h-1 w-20 rounded-full bg-primary-500" />
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-xl shadow-lg ring-1 ring-slate-200/80 dark:ring-dark-700">
            <img
              src={about.imageSrc}
              alt={about.imageAlt}
              className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
          <div className="space-y-4 leading-relaxed text-slate-600 dark:text-dark-300">
            {about.paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
            <p className="font-medium text-primary-600 dark:text-primary-400">{about.closingLine}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
