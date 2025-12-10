'use client'

import { useEffect, useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'

interface Member {
  name: string
  role: string
  github: string
  portfolio: string
  avatar?: string
}

const extractGitHubUsername = (url: string): string => {
  const parts = url.split('github.com/')
  return parts[1]?.replace(/\/$/, '') ?? ''
}

export default function TeamProjectsContent() {
  const [members, setMembers] = useState<Member[]>([])

  const project = {
    title: '편의점 관리 시스템',
    description: '편의점 운영을 위한 재고/직원/QR/판매 기능을 갖춘 웹 서비스',
    repo: 'https://github.com/Kim-HwiJe/maket',
    deploy: 'https://maket-lovat-psi.vercel.app/',
    image: '/placeholder-project.png',
  }

  useEffect(() => {
    const data: Member[] = [
      {
        name: '이제혁',
        role: '팀장',
        github: 'https://github.com/dlwpgur03',
        portfolio: 'https://2-personal-project.vercel.app',
      },
      {
        name: '김민우',
        role: '팀원',
        github: 'https://github.com/vmaca123',
        portfolio: 'https://mongoporfolio.vercel.app/',
      },
      {
        name: '김휘제',
        role: '팀원',
        github: 'https://github.com/Kim-HwiJe',
        portfolio: 'https://hwije-portfolio.vercel.app/',
      },
      {
        name: '박용담',
        role: '팀원',
        github: 'https://github.com/ydam113',
        portfolio: 'https://nextjs-portfolio-flax-delta.vercel.app',
      },
      {
        name: '양유상',
        role: '팀원',
        github: 'https://github.com/yangyu0330',
        portfolio:
          'https://portfolio-git-main-yangyus-projects-dce9b625.vercel.app/',
      },
    ]

    const updated = data.map((m) => {
      const username = extractGitHubUsername(m.github)
      return {
        ...m,
        avatar: username ? `https://github.com/${username}.png` : undefined,
      }
    })

    setMembers(updated)
  }, [])

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
              className="border rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition flex gap-4 items-center"
            >
              {/* GitHub 프로필 이미지 */}
              {m.avatar && (
                <img
                  src={m.avatar}
                  alt={`${m.name} profile`}
                  className="w-16 h-16 rounded-full border object-cover"
                />
              )}

              <div className="flex flex-col gap-1 flex-1">
                <p className="text-lg font-semibold">{m.name}</p>

                {/* Badge 대신 span 사용 */}
                <span className="px-2 py-1 text-xs rounded-md bg-zinc-200 text-zinc-700 w-fit">
                  {m.role}
                </span>

                <div className="flex gap-2 mt-2">
                  <a
                    href={m.github}
                    target="_blank"
                    className="text-sm flex items-center gap-1 px-3 py-1 border rounded-md hover:bg-zinc-100 transition"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>

                  <a
                    href={m.portfolio}
                    target="_blank"
                    className="text-sm flex items-center gap-1 px-3 py-1 border rounded-md hover:bg-zinc-100 transition"
                  >
                    <ExternalLink className="w-4 h-4" /> Portfolio
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 프로젝트 */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Project</h2>

        <div className="border rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition duration-200">
          <div className="w-full bg-neutral-100 border-b">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-contain rounded-t-xl"
            />
          </div>

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
