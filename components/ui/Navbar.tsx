'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Download } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const sections = ['hero', ...navLinks.map(({ href }) => href.slice(1))]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-25% 0px -55% 0px', threshold: [0, 0.15, 0.4, 0.7] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  const links = (mobile = false) => navLinks.map((link) => (
    <a
      key={link.href}
      href={link.href}
      aria-current={activeSection === link.href.slice(1) ? 'location' : undefined}
      onClick={() => setIsOpen(false)}
      className={`rounded-full px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 ${activeSection === link.href.slice(1) ? 'text-white' : 'text-slate-400 hover:text-white'} ${mobile ? 'block w-full rounded-xl px-4 py-3 text-base' : ''}`}
    >
      {link.label}
    </a>
  ))

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-3 pt-3 sm:px-6">
      <nav aria-label="Main navigation" className="glassmorphism mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2 sm:px-5">
        <a href="#hero" className="group flex min-h-11 items-center gap-3 rounded-xl" aria-label="Hussain Raza — home">
          <span className="grid size-9 place-items-center rounded-xl border border-indigo-300/30 bg-indigo-400/10 font-serif text-sm font-semibold text-indigo-200">HR</span>
          <span className="hidden text-sm font-semibold tracking-wide text-white sm:inline">Hussain Raza</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">{links()}</div>
        <div className="flex items-center gap-2">
          <a href="/resume.pdf" download="Hussain-Raza-CV.pdf" className="hidden min-h-10 items-center gap-2 rounded-xl border border-white/10 px-3 text-sm text-slate-200 transition-colors hover:border-indigo-300/50 hover:text-white sm:inline-flex">
            <Download aria-hidden="true" size={15} /> Resume
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-xl border border-white/10 text-white md:hidden"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
          </button>
        </div>
        {isOpen && (
          <div id="mobile-navigation" className="absolute inset-x-3 top-[calc(100%+0.5rem)] rounded-2xl border border-white/10 bg-[#0d1220]/95 p-3 shadow-2xl backdrop-blur-xl md:hidden">
            {links(true)}
            <a href="/resume.pdf" download="Hussain-Raza-CV.pdf" className="mt-2 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-indigo-300 px-4 font-semibold text-slate-950">
              <Download aria-hidden="true" size={16} /> Download resume
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
