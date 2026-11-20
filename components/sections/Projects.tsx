import { ArrowUpRight, Code2 } from 'lucide-react'
import { projects } from '@/lib/data'
import { SectionHeading } from '../ui/SectionHeading'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 border-y border-white/[0.06] bg-white/[0.012]">
      <div className="section-shell">
        <SectionHeading title="Selected work" subtitle="Projects grounded in learning, experimentation, and real use cases." />
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.number} className={`project-card group relative flex min-h-[330px] flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0d1220]/80 p-6 transition-all duration-300 hover:border-indigo-300/30 sm:p-8 ${index === 0 ? 'md:row-span-2 md:min-h-full' : ''}`}>
              <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-indigo-400/[0.06] blur-3xl transition group-hover:bg-indigo-400/[0.12]" aria-hidden="true" />
              <div className="relative flex items-start justify-between gap-4">
                <span className="font-mono text-xs tracking-[0.15em] text-sky-300/80">{project.number} <span className="text-slate-600">/</span> {project.category}</span>
                <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-slate-400">{project.status}</span>
              </div>
              <div className="relative mt-auto pt-16 sm:pt-20">
                <h3 className="max-w-md font-serif text-2xl font-medium tracking-tight text-white sm:text-3xl">{project.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-7 text-slate-400">{project.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technologies`}>
                  {project.tech.map((technology) => <li key={technology} className="rounded-md border border-white/[0.08] bg-white/[0.025] px-2.5 py-1 font-mono text-[10px] text-slate-300">{technology}</li>)}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-indigo-300 px-3.5 text-sm font-semibold text-slate-950 transition hover:bg-indigo-200">Open live demo <ArrowUpRight aria-hidden="true" size={15} /></a>}
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/10 px-3.5 text-sm text-slate-200 transition hover:border-white/25 hover:text-white"><Code2 aria-hidden="true" size={15} /> Source code <ArrowUpRight aria-hidden="true" size={14} /></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
