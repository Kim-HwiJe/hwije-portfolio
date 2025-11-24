'use client'

import { useEffect } from 'react'

export default function ClientReveal() {
  useEffect(() => {
    // Next.js SSR 환경 보호
    if (typeof window === 'undefined') return

    // DOM이 실제 렌더링될 때까지 안전하게 실행
    const run = () => {
      const elements = document.querySelectorAll<HTMLElement>('.reveal')
      if (elements.length === 0) return

      // IntersectionObserver 생성
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              obs.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1 }
      )

      // 각 요소 감시 시작
      elements.forEach((el) => observer.observe(el))

      // cleanup
      return () => observer.disconnect()
    }

    // 약간의 딜레이를 주면 SSR → CSR 전환 타이밍 이슈 해결됨
    const timeout = setTimeout(run, 50)

    return () => clearTimeout(timeout)
  }, [])

  return null
}
