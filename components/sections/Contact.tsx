import { ArrowUpRight, Code2, Link2, Mail, MapPin } from 'lucide-react'
import { socials } from '@/lib/data'
import { SectionHeading } from '../ui/SectionHeading'

const contacts = [
  { label: 'Email', value: socials.email, href: `mailto:${socials.email}`, icon: Mail },
  { label: 'GitHub', value: 'github.com/SheikhHussain15', href: socials.github, icon: Code2 },
  { label: 'LinkedIn', value: 'linkedin.com/in/hussain-raza-0704a32b6', href: socials.linkedin, icon: Link2 },
  { label: 'Location', value: socials.location, href: 'https://maps.google.com/?q=Karachi,Pakistan', icon: MapPin },
]

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-white/[0.06] bg-white/[0.012]">
      <div className="section-shell">
        <SectionHeading title="Let’s build something useful." subtitle="Open to AI developer internships and thoughtful conversations about technology." />
        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="rounded-2xl border border-indigo-300/15 bg-gradient-to-br from-indigo-300/[0.08] to-sky-300/[0.025] p-6 sm:p-8">
            <p className="eyebrow">Get in touch</p>
            <h3 className="mt-5 font-serif text-2xl font-medium text-white sm:text-3xl">Have an opportunity or a project in mind?</h3>
            <p className="mt-4 text-sm leading-7 text-slate-400">Send me an email. It opens your email app with my address ready—no nonfunctional form or backend in the middle.</p>
            <a href={`mailto:${socials.email}?subject=${encodeURIComponent('Hello, Hussain')}`} className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-xl bg-indigo-300 px-5 font-semibold text-slate-950 transition hover:bg-indigo-200">Email Hussain <ArrowUpRight aria-hidden="true" size={16} /></a>
            <p className="mt-6 flex items-center gap-2 text-xs text-slate-500"><span className="size-1.5 rounded-full bg-emerald-400" /> Available for internships</p>
          </div>
          <ul className="grid content-center gap-2 sm:grid-cols-2">
            {contacts.map(({ label, value, href, icon: Icon }) => (
              <li key={label}>
                <a href={href} target={label === 'Email' ? undefined : '_blank'} rel={label === 'Email' ? undefined : 'noopener noreferrer'} className="group flex min-h-[88px] items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 transition-colors hover:border-indigo-300/30 hover:bg-white/[0.035]">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/[0.08] text-sky-200"><Icon aria-hidden="true" size={17} /></span>
                  <span className="min-w-0 flex-1"><span className="block font-mono text-[9px] uppercase tracking-[0.15em] text-slate-500">{label}</span><span className="mt-1 block break-words text-xs text-slate-200 sm:text-sm">{value}</span></span>
                  {label !== 'Email' && <ArrowUpRight aria-hidden="true" size={14} className="shrink-0 text-slate-600 transition group-hover:text-sky-200" />}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
