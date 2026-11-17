'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/data'
import { SectionHeading } from '../ui/SectionHeading'
import { TechBadge } from '../ui/TechBadge'
import { ScrollReveal } from '../animations/ScrollReveal'

const skillCategories = [
  { title: 'Programming', items: skills.programming },
  { title: 'AI & LLM', items: skills.ai },
  { title: 'RAG', items: skills.rag },
  { title: 'Backend', items: skills.backend },
  { title: 'Frontend', items: skills.frontend },
  { title: 'Databases', items: skills.databases },
  { title: 'Observability', items: skills.observability },
  { title: 'Tools', items: skills.tools },
]

export function Skills() {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }
  const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Technical Skills" subtitle="Tools and technologies reflected in my project work" />
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map(category => (
            <ScrollReveal key={category.title}>
              <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="group relative h-full overflow-hidden rounded-xl border border-border bg-card p-6 transition-colors hover:border-accent/50">
                <h3 className="mb-4 text-lg font-bold text-foreground group-hover:text-accent">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map(item => <TechBadge key={item} label={item} variant={category.title === 'AI & LLM' ? 'accent' : 'default'} />)}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
