import { useEffect, useState } from 'react'
import { sectionIds } from '../data/portfolio'

export function useScrollSpy(offset = 100) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? 'home')

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + offset
      let current = sectionIds[0] ?? 'home'
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (!el) continue
        const top = el.offsetTop
        if (top <= y) current = id
      }
      setActiveId((prev) => (prev === current ? prev : current))
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])

  return activeId
}
