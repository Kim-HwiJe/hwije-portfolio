type Repo = {
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  updated_at: string
  language: string | null
}

function langColor(lang?: string | null) {
  const map: Record<string, string> = {
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    Python: '#3572A5',
    Java: '#b07219',
    C: '#555555',
    'C++': '#f34b7d',
    Go: '#00ADD8',
    Rust: '#dea584',
    HTML: '#e34c26',
    CSS: '#563d7c',
  }
  return map[lang || ''] || '#94a3b8'
}

export default async function RepoCard({
  owner,
  repo,
}: {
  owner: string
  repo: string
}) {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
  }
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  }

  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    headers,
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-white/80 p-5 shadow-sm">
        <div className="text-sm text-zinc-600">
          레포 정보를 불러오지 못했습니다: {owner}/{repo}
        </div>
      </div>
    )
  }

  const data = (await res.json()) as Repo
  const updated = new Intl.DateTimeFormat('ko-KR', {
    dateStyle: 'medium',
  }).format(new Date(data.updated_at))

  return (
    <a
      href={data.html_url}
      target="_blank"
      className="group block rounded-2xl border border-zinc-200 bg-white/80 p-5 shadow-sm hover:shadow-md transition"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
          {data.name}
        </h3>
        <svg
          className="h-4 w-4 opacity-60 transition group-hover:translate-x-[1px]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </div>
      {data.description && (
        <p className="mt-1 text-sm text-zinc-600">{data.description}</p>
      )}
      <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-zinc-600">
        <span>★ {data.stargazers_count}</span>
        <span>⑂ {data.forks_count}</span>
        <span>업데이트: {updated}</span>
        {data.language && (
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-2 py-1 bg-zinc-50">
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: '9999px',
                background: langColor(data.language),
              }}
            />
            {data.language}
          </span>
        )}
      </div>
    </a>
  )
}
