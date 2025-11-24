export const metadata = {
  title: 'Team Projects',
}

export default function TeamProjectsPage() {
  const members = [
    { name: '이제혁', role: '팀장' },
    { name: '김민우', role: '팀원' },
    { name: '김휘제', role: '팀원' },
    { name: '박용담', role: '팀원' },
    { name: '양유상', role: '팀원' },
  ]

  const project = {
    title: 'Team Project',
    description: '우리 팀이 함께 개발한 프로젝트입니다.',
    repo: 'https://github.com/YourTeam/YourRepo', // 수정 필요
    deploy: 'https://your-project.vercel.app', // 배포 주소 수정
  }

  return (
    <main className="max-w-5xl mx-auto px-4 py-10 text-zinc-800">
      <h1 className="text-3xl font-bold mb-10">Team Project</h1>

      {/* 팀원 */}
      <section className="mb-14">
        <h2 className="text-2xl font-semibold mb-4">Team Members</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {members.map((m) => (
            <div
              key={m.name}
              className="border rounded-xl p-4 bg-white shadow-sm"
            >
              <p className="text-lg font-semibold">{m.name}</p>
              <p className="text-sm text-zinc-600">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 팀 프로젝트 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Project</h2>

        <div className="p-5 border rounded-xl bg-white shadow-sm">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm text-zinc-600 mt-1">{project.description}</p>

          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a
              href={project.repo}
              target="_blank"
              className="text-blue-600 underline"
            >
              GitHub Repository
            </a>
            <a
              href={project.deploy}
              target="_blank"
              className="text-green-600 underline"
            >
              배포된 사이트 바로가기
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
