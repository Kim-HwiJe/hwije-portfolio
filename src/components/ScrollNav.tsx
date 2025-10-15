'use client'

import { useEffect } from 'react'

export default function ScrollNav() {
  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      const el = e.currentTarget as HTMLAnchorElement
      const targetId = el.getAttribute('href')?.replace('#', '') || ''
      const targetEl = document.getElementById(targetId)
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }

    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('a[data-scroll]')
    )
    links.forEach((l) => l.addEventListener('click', handler))

    return () => {
      links.forEach((l) => l.removeEventListener('click', handler))
    }
  }, [])

  return null
}
