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
    title: '편의점 관리 시스템',
    description: '편의점 운영을 위한 재고/직원/QR/판매 기능을 갖춘 웹 서비스',
    repo: 'https://github.com/Kim-HwiJe/maket',
    deploy: 'https://maket-lovat-psi.vercel.app/',
    image: '/placeholder-project.png',
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
              className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition"
            >
              <p className="text-lg font-semibold">{m.name}</p>
              <p className="text-sm text-zinc-600">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 프로젝트 카드 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Project</h2>

        <div className="border rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-200">
          {/* 이미지 */}
          <div className="w-full bg-neutral-100 border-b">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-contain rounded-t-xl"
            />
          </div>

          {/* 내용 */}
          <div className="p-6">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm text-zinc-600 mt-1">{project.description}</p>

            <div className="mt-5 flex gap-3">
              <a
                href={project.deploy}
                target="_blank"
                className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 transition"
              >
                사이트 방문
              </a>
              <a
                href={project.repo}
                target="_blank"
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition"
              >
                GitHub 보기
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
