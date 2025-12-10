import Image from 'next/image'
import Link from 'next/link'
import { Github, Mail, User2 } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import RepoCard from '../components/RepoCard'
import ClientReveal from '../components/ClientReveal'
import ScrollNav from '../components/ScrollNav'
import { getUserRepos } from '@/lib/github'

type GitHubRepo = {
  name: string
  owner: {
    login: string
  }
}

export default async function Home() {
  const repos = await getUserRepos()

  const mainRepos = repos.slice(0, 2)
  const moreRepos = repos.slice(2, 20)

  return (
    <main className="relative text-zinc-800">
      <ClientReveal />
      <ScrollNav />

      {/* Top background */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[300px] bg-[radial-gradient(100%_100%_at_50%_0%,rgba(107,114,128,0.08)_0,rgba(156,163,175,0.04)_40%,rgba(255,255,255,0)_70%)]" />

      {/* Profile */}
      <section id="profile" className="mx-auto max-w-5xl px-4 mt-28 reveal">
        <div className="rounded-2xl border border-zinc-200 bg-white/80 backdrop-blur p-5 sm:p-6 shadow-sm hover:shadow-md transition">
          <div className="flex gap-5 sm:gap-6 items-start">
            <div className="shrink-0">
              <Image
                src="/profile.jpg"
                alt="프로필 사진"
                width={96}
                height={96}
                className="rounded-full object-cover ring-1 ring-zinc-200 shadow-sm"
                priority
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-lg font-semibold text-zinc-800">
                <User2 className="h-5 w-5" />
                <span>Profile</span>
              </div>
              <div className="mt-3 grid gap-1 text-sm sm:text-base text-zinc-700">
                <p>
                  <span className="font-medium">이름</span>: 김휘제
                </p>
                <p className="break-all flex items-center gap-2">
                  <Mail className="h-4 w-4" /> hwije207@naver.com
                </p>
                <p>
                  <span className="font-medium">소속</span>: 중부대학교
                  정보보호학전공
                </p>
                <p>
                  <span className="font-medium">학번</span>: 92313867
                </p>
                <p className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  <Link
                    href="https://github.com/Kim-HwiJe/"
                    target="_blank"
                    className="underline underline-offset-4 hover:opacity-90"
                  >
                    GitHub 프로필 링크
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-5xl px-4 mt-12 reveal">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-zinc-900">
          Projects
        </h2>

        {/* 기본 노출 2개 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* 1️⃣ 편의점 관리 시스템 (맨 위 배치) */}
          <ProjectCard
            title="편의점 관리 시스템"
            href="https://maket-lovat-psi.vercel.app/"
            description="편의점 운영을 위한 재고/직원/QR/판매 기능을 갖춘 웹 서비스"
            tags={['Next.js', 'Express', 'MongoDB', 'FullStack']}
          />
          {/* 2️⃣ SafeShare */}
          <ProjectCard
            title="SafeShare"
            href="https://crypto-final.vercel.app/"
            description="암호화 기술을 이용한 안전한 파일 공유 시스템"
            tags={['Next.js', 'Crypto', 'SafeShare']}
          />
        </div>

        {/* 더보기 */}
        <details className="mt-6 group">
          <summary className="list-none flex justify-center items-center gap-2 text-sm text-zinc-700 hover:text-zinc-900 cursor-pointer select-none">
            <span className="group-open:hidden">더보기</span>
            <span className="hidden group-open:inline">접기</span>
            <svg
              className="w-4 h-4 transition group-open:rotate-180"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </summary>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Clerk */}
            <ProjectCard
              title="Clerk Authentication App"
              href="https://clerk-app-nu.vercel.app"
              description="Clerk 인증 학습 프로젝트"
              tags={['Next.js', 'Clerk', 'Auth']}
            />
            {/* Portfolio */}
            <ProjectCard
              title="Portfolio"
              href="https://hwije-portfolio.vercel.app/"
              description="포트폴리오 사이트 입니다."
              tags={['Next.js', 'TailwindCSS', 'TypeScript']}
            />
            {/* 쇼핑몰 */}
            <ProjectCard
              title="Shopping"
              href="https://my-app-eight-zeta-68.vercel.app/"
              description="쇼핑몰 예제 사이트입니다."
              tags={['Next.js', 'Shopping']}
            />
          </div>
        </details>
      </section>

      {/* GitHub Repositories (자동) */}
      <section id="repos" className="mx-auto max-w-5xl px-4 mt-12 reveal">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-zinc-900">
          GitHub Repositories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {mainRepos.map((repo: GitHubRepo) => (
            <RepoCard
              key={repo.name}
              owner={repo.owner.login}
              repo={repo.name}
            />
          ))}
        </div>

        <details className="mt-6 group">
          <summary className="list-none flex justify-center items-center gap-2 text-sm text-zinc-700 hover:text-zinc-900 cursor-pointer select-none">
            <span className="group-open:hidden">더보기</span>
            <span className="hidden group-open:inline">접기</span>
            <svg
              className="w-4 h-4 transition group-open:rotate-180"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </summary>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {moreRepos.map((repo: GitHubRepo) => (
              <RepoCard
                key={repo.name}
                owner={repo.owner.login}
                repo={repo.name}
              />
            ))}
          </div>
        </details>
      </section>

      {/* Tech Used */}
      <section id="tech" className="mx-auto max-w-5xl px-4 mt-16 reveal">
        <h2 className="text-xl sm:text-2xl font-bold mb-6 text-zinc-900 text-center">
          Tech Used
        </h2>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
          {[
            {
              src: '/nextjs-icon.svg',
              label: 'Next.js',
              url: 'https://nextjs.org/',
            },
            {
              src: '/typescript-icon.svg',
              label: 'TypeScript',
              url: 'https://www.typescriptlang.org/',
            },
            {
              src: '/tailwindcss-icon.svg',
              label: 'Tailwind CSS',
              url: 'https://tailwindcss.com/',
            },
            {
              src: '/vercel-icon.svg',
              label: 'Vercel',
              url: 'https://vercel.com/',
            },
            {
              src: '/github-icon.svg',
              label: 'GitHub API',
              url: 'https://docs.github.com/en/rest',
            },
          ].map((t) => (
            <div key={t.label} className="w-28 flex flex-col items-center">
              <Link
                href={t.url}
                target="_blank"
                className="h-12 flex items-center justify-center transform transition duration-300 hover:-translate-y-1 hover:opacity-70"
                aria-label={t.label}
              >
                <Image
                  src={t.src}
                  alt={t.label}
                  width={48}
                  height={48}
                  className="h-10 w-auto object-contain"
                  priority={t.label === 'Next.js'}
                />
              </Link>
              <span className="text-sm mt-2 text-zinc-700">{t.label}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-zinc-500 mt-8">
          이 포트폴리오는 Next.js, Tailwind, TypeScript, GitHub API, Vercel로
          제작되었습니다.
        </p>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-5xl px-4 mt-16 mb-20 reveal text-center"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-zinc-900">
          Contact
        </h2>
        <p className="text-zinc-700">
          프로젝트나 협업 제안은 아래 폼으로 보내주세요.
        </p>

        <form
          action="https://formspree.io/f/REPLACE_FORM_ID"
          method="POST"
          className="max-w-md mx-auto mt-6 text-left flex flex-col gap-3"
        >
          <input
            type="text"
            name="name"
            placeholder="이름"
            required
            className="w-full rounded-xl border border-zinc-200 bg-white/90 px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-300"
          />
          <input
            type="email"
            name="email"
            placeholder="이메일"
            required
            className="w-full rounded-xl border border-zinc-200 bg-white/90 px-3 py-2 outline-none focus:ring-2 focus:ring-zinc-300"
          />
          <textarea
            name="message"
            placeholder="메시지"
            required
            className="w-full h-28 rounded-xl border border-zinc-200 bg-white/90 px-3 py-2 outline-none resize-none focus:ring-2 focus:ring-zinc-300"
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-zinc-900 text-white py-2 font-medium hover:bg-zinc-800 transition"
          >
            보내기
          </button>
          <input type="hidden" name="_subject" value="포트폴리오 문의" />
        </form>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-4 pb-10 text-xs text-zinc-500 text-center">
        © {new Date().getFullYear()} Hwije Kim · Portfolio
      </footer>
    </main>
  )
}
