import { Award, BookOpen, GraduationCap } from 'lucide-react'
import { certifications, education } from '@/lib/data'
import { SectionHeading } from '../ui/SectionHeading'

export function Education() {
  return (
    <section id="education" className="section-shell scroll-mt-16">
      <SectionHeading title="Education & training" subtitle="Academic study and learning milestones from my current portfolio and brief." />
      <div className="grid gap-12 md:grid-cols-2 md:gap-10">
        <div>
          <p className="eyebrow mb-5 flex items-center gap-2"><GraduationCap aria-hidden="true" size={14} /> Education</p>
          <ul className="space-y-3">
            {education.map((item) => (
              <li key={item.degree} className="flex gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-indigo-300/[0.08] text-indigo-200"><BookOpen aria-hidden="true" size={18} /></span>
                <div className="min-w-0"><h3 className="font-serif text-base font-medium text-white">{item.degree}</h3><p className="mt-1 text-sm text-slate-300">{item.school}</p><p className="mt-1 font-mono text-[10px] text-slate-500">{item.graduation}</p></div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-5 flex items-center gap-2"><Award aria-hidden="true" size={14} /> Certifications & training</p>
          <ul className="space-y-2">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex items-start justify-between gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3.5">
                <div className="min-w-0"><h3 className="text-sm font-medium leading-6 text-slate-200">{cert.name}</h3><p className="mt-0.5 text-xs text-slate-500">{cert.issuer}{cert.date ? ` · ${cert.date}` : ''}</p></div>
                <span className="shrink-0 rounded-full border border-white/[0.08] px-2 py-1 font-mono text-[8px] uppercase tracking-[0.1em] text-slate-400">{cert.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
