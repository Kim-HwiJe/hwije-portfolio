import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'KHJ PortFolio',
  description: 'SafeShare 등 프로젝트 소개 포트폴리오',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  )
}
