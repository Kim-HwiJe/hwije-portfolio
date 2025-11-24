'use client'

import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur border-b border-zinc-200 shadow-[0_1px_6px_rgba(0,0,0,0.04)]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-lg tracking-tight text-zinc-900 select-none cursor-pointer"
          aria-label="KHJ Portfolio Home"
        >
          KHJ Portfolio
        </Link>

        <nav className="flex items-center gap-3 sm:gap-5 text-sm text-zinc-700">
          <Link href="/#profile" className="hover:opacity-80 transition">
            Profile
          </Link>
          <Link href="/#projects" className="hover:opacity-80 transition">
            Projects
          </Link>
          <Link href="/#repos" className="hover:opacity-80 transition">
            Repositories
          </Link>

          <Link href="/team-projects" className="hover:opacity-80 transition">
            Team Projects
          </Link>

          <Link href="/#tech" className="hover:opacity-80 transition">
            Tech Used
          </Link>
          <Link href="/#contact" className="hover:opacity-80 transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
