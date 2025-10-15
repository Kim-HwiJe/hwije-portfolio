import Image from 'next/image'
import Link from 'next/link'
import { Github, Mail, User2 } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import RepoCard from '../components/RepoCard'
import ClientReveal from '../components/ClientReveal'
import ScrollNav from '../components/ScrollNav'

export default function Home() {
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID

  return (
    <main className="relative text-zinc-800">
      <ClientReveal />
      <ScrollNav />

      <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur border-b border-zinc-200 shadow-[0_1px_6px_rgba(0,0,0,0.04)]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a
            href="#profile"
            data-scroll
            className="font-semibold text-lg tracking-tight text-zinc-900 select-none cursor-pointer"
            aria-label="KHJ Portfolio Home"
          >
            KHJ Portfolio
          </a>
          <nav
            aria-label="Main navigation"
            className="flex items-center gap-3 sm:gap-5 text-sm text-zinc-700"
          >
            <a
              href="#profile"
              data-scroll
              className="hover:opacity-80 transition"
            >
              Profile
            </a>
            <a
              href="#projects"
              data-scroll
              className="hover:opacity-80 transition"
            >
              Projects
            </a>
            <a
              href="#repos"
              data-scroll
              className="hover:opacity-80 transition"
            >
              Repositories
            </a>
            <a href="#tech" data-scroll className="hover:opacity-80 transition">
              Tech Used
            </a>
            <a
              href="#contact"
              data-scroll
              className="hover:opacity-80 transition"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[300px] bg-[radial-gradient(100%_100%_at_50%_0%,rgba(107,114,128,0.08)_0,rgba(156,163,175,0.04)_40%,rgba(255,255,255,0)_70%)]" />

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

      <section id="projects" className="mx-auto max-w-5xl px-4 mt-12 reveal">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-zinc-900">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="hover:brightness-95 transition">
            <ProjectCard
              title="SafeShare"
              href="https://crypto-final.vercel.app/"
              description="암호화 기술을 이용한 안전한 파일 공유 시스템"
              tags={['Next.js', 'Crypto', 'SafeShare']}
            />
          </div>
          <div className="hover:brightness-95 transition">
            <ProjectCard
              title="Clerk Authentication App"
              href="https://clerk-app-nu.vercel.app"
              description="Clerk 인증 학습 프로젝트"
              tags={['Next.js', 'Clerk', 'Auth']}
            />
          </div>
        </div>
      </section>

      <section id="repos" className="mx-auto max-w-5xl px-4 mt-12 mb-10 reveal">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-zinc-900">
          GitHub Repositories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="hover:brightness-95 transition">
            <RepoCard owner="Kim-HwiJe" repo="crypto-final" />
          </div>
          <div className="hover:brightness-95 transition">
            <RepoCard owner="Kim-HwiJe" repo="clerk-app" />
          </div>
        </div>
      </section>

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
              >
                <Image
                  src={t.src}
                  alt={t.label}
                  width={48}
                  height={48}
                  className="h-10 w-auto object-contain"
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
          action={
            formspreeId
              ? `https://formspree.io/f/${formspreeId}`
              : 'https://formspree.io/f/REPLACE_FORM_ID'
          }
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

        <p className="text-xs text-zinc-500 mt-3">
          제출 시 Formspree를 통해 메일이 전송됩니다.
        </p>
      </section>

      <footer className="mx-auto max-w-6xl px-4 pb-10 text-xs text-zinc-500 text-center">
        © {new Date().getFullYear()} Hwije Kim · Portfolio
      </footer>
    </main>
  )
}
