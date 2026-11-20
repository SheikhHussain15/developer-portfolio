import { Bot, Code2, Database, Workflow } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'

const focusAreas = [
  { icon: Bot, title: 'Agentic AI', description: 'Exploring tool-using agents and workflows with the OpenAI Agents SDK.' },
  { icon: Database, title: 'LLM applications & RAG', description: 'Building applications that combine language models with retrieval and structured data.' },
  { icon: Workflow, title: 'AI automation', description: 'Connecting APIs and repeatable workflows to make everyday tasks more useful.' },
  { icon: Code2, title: 'Full-stack development', description: 'Creating responsive interfaces and application backends with Next.js and FastAPI.' },
]

export function About() {
  return (
    <section id="about" className="section-shell scroll-mt-20">
      <SectionHeading title="Curiosity, turned into working software." subtitle="A little context on what I’m learning and building." />
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow mb-5">A bit about me</p>
          <div className="space-y-5 text-[15px] leading-8 text-slate-300 sm:text-base">
            <p>I&apos;m a Computer Science student in Karachi, Pakistan, pursuing an Agentic AI specialization at GIAIC. I learn by turning new ideas into practical projects and by paying attention to the details that make software useful.</p>
            <p>My work sits between AI applications and full-stack development: from an AI-assisted task manager to an automation concept for email and social workflows. I&apos;m currently designing an educational platform with a multi-agent and retrieval workflow.</p>
            <p>I&apos;m looking for an AI developer internship where I can contribute, learn from a team, and keep building thoughtful products.</p>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {focusAreas.map(({ icon: Icon, title, description }, index) => (
            <article key={title} className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-colors hover:border-indigo-300/30 hover:bg-indigo-300/[0.035] sm:p-6">
              <span className="mb-5 grid size-10 place-items-center rounded-xl border border-indigo-300/20 bg-indigo-300/[0.07] text-indigo-200"><Icon aria-hidden="true" size={19} /></span>
              <p className="mb-2 font-mono text-[10px] tracking-[0.15em] text-slate-600">0{index + 1}</p>
              <h3 className="mb-2 font-serif text-lg font-medium text-white">{title}</h3>
              <p className="text-sm leading-6 text-slate-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
