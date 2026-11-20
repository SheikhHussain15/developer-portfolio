import { ArrowUp, Code2, Link2, Mail } from 'lucide-react'
import { socials } from '@/lib/data'

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] px-5 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <a href="#hero" className="inline-flex items-center gap-2.5 rounded-lg text-sm font-semibold text-white"><span className="grid size-8 place-items-center rounded-lg border border-indigo-300/25 bg-indigo-300/[0.07] font-serif text-xs text-indigo-200">HR</span> Hussain Raza</a>
          <p className="mt-2 text-xs text-slate-500">Agentic AI Developer · Karachi, Pakistan</p>
        </div>
        <div className="flex items-center gap-2">
          <a aria-label="GitHub profile" href={socials.github} target="_blank" rel="noopener noreferrer" className="grid size-10 place-items-center rounded-lg border border-white/10 text-slate-400 transition hover:text-white"><Code2 aria-hidden="true" size={17} /></a>
          <a aria-label="LinkedIn profile" href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="grid size-10 place-items-center rounded-lg border border-white/10 text-slate-400 transition hover:text-white"><Link2 aria-hidden="true" size={17} /></a>
          <a aria-label="Email Hussain Raza" href={`mailto:${socials.email}`} className="grid size-10 place-items-center rounded-lg border border-white/10 text-slate-400 transition hover:text-white"><Mail aria-hidden="true" size={17} /></a>
          <a href="#hero" aria-label="Back to top" className="ml-2 inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/10 px-3 text-xs text-slate-300 transition hover:text-white">Back to top <ArrowUp aria-hidden="true" size={14} /></a>
        </div>
        <p className="text-xs text-slate-600">© {new Date().getFullYear()} Hussain Raza</p>
      </div>
    </footer>
  )
}
