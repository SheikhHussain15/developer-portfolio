import { ArrowUpRight, BookOpen, Code2, GraduationCap } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

const milestones = [
  { date: '2023', title: 'CIT training', description: 'Completed a Certificate in Information Technology at ARFA Tech.', icon: BookOpen, kind: 'Training' },
  { date: '2024', title: 'Computer Science foundations', description: 'Completed Matriculation in Computer Science at Public Secondary School, Karachi.', icon: GraduationCap, kind: 'Education' },
  { date: '2024 — present', title: 'Agentic AI specialization', description: 'Continuing a GIAIC specialization while learning through hands-on AI and full-stack projects.', icon: BookOpen, kind: 'Ongoing' },
  { date: '2025', title: 'AI and full-stack projects', description: 'Built a personal AI employee concept and a task manager with an AI chatbot.', icon: Code2, kind: 'Projects' },
  { date: '2026', title: 'Building an educational platform', description: 'Designing a multi-agent learning experience with a planned retrieval workflow.', icon: Code2, kind: 'In progress' },
]

export function Timeline() {
  return (
    <section id="journey" className="scroll-mt-16 border-y border-white/[0.06] bg-white/[0.012]">
      <div className="section-shell">
        <SectionHeading title="Learning & building journey" subtitle="A timeline of study, training, and projects—not formal employment history." />
        <ol className="mx-auto max-w-3xl">
          {milestones.map(({ date, title, description, icon: Icon, kind }, index) => (
            <li key={title} className="relative grid grid-cols-[2.5rem_1fr] gap-4 pb-9 last:pb-0 sm:grid-cols-[7rem_2.75rem_1fr] sm:gap-5">
              {index < milestones.length - 1 && <span className="absolute bottom-0 left-5 top-10 w-px bg-gradient-to-b from-indigo-300/30 to-white/[0.04] sm:left-[8.35rem]" aria-hidden="true" />}
              <span className="hidden pt-2 text-right font-mono text-[10px] uppercase tracking-[0.1em] text-slate-500 sm:block">{date}</span>
              <span className="relative z-10 grid size-10 place-items-center rounded-full border border-indigo-300/20 bg-[#111522] text-indigo-200"><Icon aria-hidden="true" size={17} /></span>
              <div className="min-w-0 pt-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-serif text-base font-medium text-white sm:text-lg">{title}</h3>
                  <span className="font-mono text-[9px] uppercase tracking-[0.13em] text-sky-300/80 sm:hidden">{date}</span>
                  <span className="hidden rounded-full border border-white/[0.08] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-slate-500 sm:inline-flex">{kind}</span>
                </div>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">{description}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap gap-x-5 gap-y-2 border-t border-white/[0.07] pt-5 text-xs text-slate-500">
          <a href="https://github.com/SheikhHussain15" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-10 items-center gap-1.5 transition hover:text-sky-200">More projects on GitHub <ArrowUpRight aria-hidden="true" size={13} /></a>
        </div>
      </div>
    </section>
  )
}
