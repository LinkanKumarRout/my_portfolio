import { hero } from '../data/portfolio'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-20"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,165,233,0.18),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,165,233,0.12),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/3 h-72 w-72 rounded-full bg-primary-400/10 blur-3xl motion-safe:animate-pulse dark:bg-primary-500/5"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center motion-safe:animate-fade-in">
          <div className="relative">
            <img
              src={hero.avatarSrc}
              alt={hero.avatarAlt}
              className="h-40 w-40 rounded-full object-cover shadow-2xl ring-4 ring-primary-500/25 dark:ring-primary-500/30 md:h-52 md:w-52"
              width={208}
              height={208}
            />
            {hero.availability.show && (
              <span
                className="absolute bottom-2 right-2 flex h-4 w-4 rounded-full border-2 border-white bg-emerald-500 dark:border-dark-950"
                title={hero.availability.label}
                aria-label={`Status: ${hero.availability.label}`}
              />
            )}
          </div>
        </div>
        <h1
          id="hero-heading"
          className="mb-3 text-4xl font-bold tracking-tight text-slate-900 motion-safe:animate-fade-in dark:text-white sm:text-5xl md:text-6xl"
        >
          {hero.greeting}{' '}
          <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent dark:from-primary-400 dark:to-primary-300">
            {hero.name}
          </span>
        </h1>
        <p className="mb-4 text-lg font-medium text-primary-700 dark:text-primary-400 sm:text-xl">{hero.role}</p>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 motion-safe:animate-slide-up dark:text-dark-400 sm:text-xl">
          {hero.tagline}
        </p>
        <div className="flex flex-wrap justify-center gap-4 motion-safe:animate-slide-up">
          <a
            href={hero.primaryCta.href}
            className="rounded-lg bg-primary-600 px-6 py-3 font-medium text-white shadow-lg shadow-primary-600/25 transition hover:bg-primary-700 hover:shadow-primary-600/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:bg-primary-500 dark:hover:bg-primary-600 dark:focus-visible:ring-offset-dark-950"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="rounded-lg border border-slate-300 bg-white/50 px-6 py-3 font-medium text-slate-700 backdrop-blur-sm transition hover:border-primary-500 hover:text-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 dark:border-dark-600 dark:bg-dark-900/30 dark:text-dark-200 dark:hover:border-primary-500 dark:hover:text-primary-400 dark:focus-visible:ring-offset-dark-950"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  )
}
