'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { skills } from '@/lib/data'
import { SectionHeading } from '../ui/SectionHeading'

const skillGroups = Object.entries(skills).flatMap(([category, names]) => names.map((name) => ({ name, category })))
const formatCategory = (category: string) => ({ ai: 'AI & LLM', rag: 'RAG' }[category] ?? category)

export function SkillsInteractive() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const categories = Array.from(new Set(skillGroups.map((skill) => skill.category)))
  const filteredSkills = useMemo(() => skillGroups.filter((skill) => skill.name.toLowerCase().includes(searchQuery.toLowerCase()) && (!selectedCategory || skill.category === selectedCategory)), [searchQuery, selectedCategory])

  return (
    <section id="skills" className="section-shell scroll-mt-16">
      <SectionHeading title="Tools I’m learning and building with" subtitle="A practical toolkit reflected in my current coursework and projects." />
      <div className="mx-auto max-w-4xl">
        <label className="relative mx-auto block max-w-md">
          <span className="sr-only">Search skills</span>
          <Search aria-hidden="true" size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
          <input type="search" placeholder="Find a technology…" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} className="min-h-12 w-full rounded-xl border border-white/10 bg-white/[0.025] pl-11 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-indigo-300/60 focus:outline-none focus:ring-2 focus:ring-indigo-300/15" />
        </label>
        <div className="mt-4 flex flex-wrap justify-center gap-2" aria-label="Filter skills by category">
          <button type="button" aria-pressed={selectedCategory === null} onClick={() => setSelectedCategory(null)} className={`min-h-10 rounded-lg px-3.5 text-xs capitalize transition ${selectedCategory === null ? 'bg-indigo-300 text-slate-950' : 'border border-white/10 text-slate-400 hover:text-white'}`}>All</button>
          {categories.map((category) => <button key={category} type="button" aria-pressed={selectedCategory === category} onClick={() => setSelectedCategory(category)} className={`min-h-10 rounded-lg px-3.5 text-xs capitalize transition ${selectedCategory === category ? 'bg-indigo-300 text-slate-950' : 'border border-white/10 text-slate-400 hover:text-white'}`}>{formatCategory(category)}</button>)}
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4" aria-live="polite">
          {filteredSkills.map((skill) => <li key={skill.name} className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-4 transition-colors hover:border-indigo-300/25"><span className="block text-sm font-medium text-slate-200">{skill.name}</span><span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.12em] text-slate-500">{formatCategory(skill.category)}</span></li>)}
          {filteredSkills.length === 0 && <li className="col-span-full py-8 text-center text-sm text-slate-400">No skills match that search.</li>}
        </ul>
      </div>
    </section>
  )
}
