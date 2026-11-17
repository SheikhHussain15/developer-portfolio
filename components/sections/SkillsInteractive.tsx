'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { skills } from '@/lib/data'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../animations/ScrollReveal'

const skillGroups = Object.entries(skills).flatMap(([category, names]) =>
  names.map(name => ({ name, category }))
)

const formatCategory = (category: string) => ({ ai: 'AI & LLM', rag: 'RAG' }[category] ?? category)

export function SkillsInteractive() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const categories = Array.from(new Set(skillGroups.map(skill => skill.category)))
  const filteredSkills = useMemo(() => skillGroups.filter(skill =>
    skill.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (!selectedCategory || skill.category === selectedCategory)
  ), [searchQuery, selectedCategory])

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Technical Skills" subtitle="Tools and technologies reflected in my project work" />
        <ScrollReveal>
          <div className="mt-12 space-y-6">
            <label className="relative block">
              <span className="sr-only">Search skills</span>
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
              <input
                type="search"
                placeholder="Search skills..."
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/30"
              />
            </label>
            <div className="flex flex-wrap gap-2" aria-label="Filter skills by category">
              <button type="button" aria-pressed={selectedCategory === null} onClick={() => setSelectedCategory(null)} className={`px-4 py-2 rounded-lg text-sm transition-colors ${selectedCategory === null ? 'bg-accent text-accent-foreground' : 'bg-card border border-border text-foreground hover:border-accent/60'}`}>All</button>
              {categories.map(category => (
                <button key={category} type="button" aria-pressed={selectedCategory === category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-lg text-sm capitalize transition-colors ${selectedCategory === category ? 'bg-accent text-accent-foreground' : 'bg-card border border-border text-foreground hover:border-accent/60'}`}>
                  {formatCategory(category)}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
          {filteredSkills.map(skill => (
            <div key={skill.name} className="p-5 rounded-xl bg-card border border-border hover:border-accent/60 transition-colors">
              <h3 className="font-semibold text-foreground">{skill.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{formatCategory(skill.category)}</p>
            </div>
          ))}
          {filteredSkills.length === 0 && <p className="col-span-full text-center text-muted-foreground py-8">No skills match that search.</p>}
        </div>
      </div>
    </section>
  )
}
