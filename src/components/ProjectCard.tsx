import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function ProjectCard({
  title,
  description,
  href,
  tags = [],
}: {
  title: string
  description?: string
  href: string
  tags?: string[]
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="group block rounded-2xl border border-zinc-200 bg-white/80 p-5 shadow-sm hover:shadow-lg transition hover:scale-[1.01]"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <ExternalLink className="h-4 w-4 opacity-60 transition group-hover:translate-x-[1px]" />
      </div>

      {description && (
        <p className="mt-1 text-sm text-zinc-600">{description}</p>
      )}

      {!!tags.length && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="text-[11px] font-medium rounded-full border border-transparent bg-zinc-100 px-2 py-1 text-zinc-700"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </Link>
  )
}
