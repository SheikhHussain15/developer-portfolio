'use client'

import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { Search, Zap } from 'lucide-react'
import { skills, currentlyLearning } from '@/lib/data'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../animations/ScrollReveal'

interface SkillWithProficiency {
  name: string
  category: string
  proficiency: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'
  years?: number
  icon?: string
}

const skillsWithProficiency: SkillWithProficiency[] = [
  // Programming
  { name: 'Python', category: 'Programming', proficiency: 'Expert', years: 3, icon: '🐍' },
  { name: 'JavaScript', category: 'Programming', proficiency: 'Expert', years: 3, icon: '⚡' },
  { name: 'TypeScript', category: 'Programming', proficiency: 'Advanced', years: 2, icon: '📘' },

  // Frontend
  { name: 'React', category: 'Frontend', proficiency: 'Expert', years: 2.5, icon: '⚛️' },
  { name: 'Next.js', category: 'Frontend', proficiency: 'Expert', years: 2, icon: '▲' },
  { name: 'TailwindCSS', category: 'Frontend', proficiency: 'Advanced', years: 2, icon: '🎨' },
  { name: 'HTML', category: 'Frontend', proficiency: 'Expert', years: 3, icon: '🏗️' },
  { name: 'CSS', category: 'Frontend', proficiency: 'Advanced', years: 3, icon: '🎭' },

  // Backend
  { name: 'FastAPI', category: 'Backend', proficiency: 'Advanced', years: 1.5, icon: '⚙️' },
  { name: 'OpenAI Agents SDK', category: 'Backend', proficiency: 'Advanced', years: 1, icon: '🤖' },

  // Databases
  { name: 'MySQL', category: 'Databases', proficiency: 'Advanced', years: 2, icon: '🗄️' },
  { name: 'Neon SQL', category: 'Databases', proficiency: 'Intermediate', years: 1, icon: '⚡' },

  // CMS
  { name: 'Sanity', category: 'CMS', proficiency: 'Intermediate', years: 1, icon: '📝' },

  // AI
  { name: 'Prompt Engineering', category: 'AI', proficiency: 'Expert', years: 1.5, icon: '✨' },
  { name: 'Context Engineering', category: 'AI', proficiency: 'Advanced', years: 1, icon: '🎯' },
  { name: 'Agentic AI', category: 'AI', proficiency: 'Advanced', years: 1, icon: '🧠' },
  { name: 'Claude Code', category: 'AI', proficiency: 'Advanced', years: 1, icon: '🚀' },
  { name: 'Gemini CLI', category: 'AI', proficiency: 'Intermediate', years: 0.5, icon: '💎' },

  // Tools
  { name: 'Git', category: 'Tools', proficiency: 'Advanced', years: 3, icon: '🔗' },
  { name: 'GitHub', category: 'Tools', proficiency: 'Advanced', years: 3, icon: '🐙' },
  { name: 'VS Code', category: 'Tools', proficiency: 'Expert', years: 3, icon: '💻' },
  { name: 'Figma', category: 'Tools', proficiency: 'Intermediate', years: 1, icon: '🎨' },
]

const proficiencyColors = {
  Beginner: 'from-blue-500/20 to-blue-500/5',
  Intermediate: 'from-purple-500/20 to-purple-500/5',
  Advanced: 'from-accent/20 to-accent/5',
  Expert: 'from-accent/40 to-accent/10',
}

const proficiencyBorders = {
  Beginner: 'border-blue-500/30',
  Intermediate: 'border-purple-500/30',
  Advanced: 'border-accent/30',
  Expert: 'border-accent/60',
}

export function SkillsInteractive() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(skillsWithProficiency.map(s => s.category)))

  const filteredSkills = useMemo(() => {
    return skillsWithProficiency.filter(skill => {
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesCategory = !selectedCategory || skill.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchQuery, selectedCategory])

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Comprehensive tech stack and proficiency levels"
        />

        {/* Search and Filter */}
        <ScrollReveal>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 space-y-6"
          >
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                placeholder="Search skills..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-card/50 border border-border/50 text-foreground placeholder-muted-foreground focus:border-accent/50 focus:outline-none transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              <motion.button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === null
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-card/50 border border-border/50 text-foreground hover:border-accent/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                All
              </motion.button>
              {categories.map(category => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    selectedCategory === category
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-card/50 border border-border/50 text-foreground hover:border-accent/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className={`relative group p-4 rounded-lg bg-gradient-to-br ${proficiencyColors[skill.proficiency]} border ${proficiencyBorders[skill.proficiency]} hover:border-accent/60 transition-all cursor-pointer`}
            >
              {/* Glow on Hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur -z-10" />

              <div className="relative">
                {/* Icon */}
                <div className="text-3xl mb-2">{skill.icon}</div>

                {/* Name and Category */}
                <h3 className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">{skill.name}</h3>
                <p className="text-xs text-muted-foreground">{skill.category}</p>

                {/* Proficiency Bar */}
                <div className="mt-3 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-accent">{skill.proficiency}</span>
                    {skill.years && <span className="text-xs text-muted-foreground">{skill.years}y</span>}
                  </div>
                  <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(skill.proficiency === 'Beginner' ? 25 : skill.proficiency === 'Intermediate' ? 50 : skill.proficiency === 'Advanced' ? 75 : 100)}%` }}
                      transition={{ delay: index * 0.05, duration: 0.8 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Currently Learning Section */}
        <ScrollReveal delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-xl bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold text-foreground font-serif">Currently Learning</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {currentlyLearning.map((item, index) => (
                <motion.div
                  key={item.skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-lg bg-card/50 border border-border/50 hover:border-accent/50 transition-all"
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-foreground mb-1">{item.skill}</h4>
                  <div className="inline-block px-2 py-1 rounded text-xs font-semibold text-accent bg-accent/20">
                    {item.proficiency}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
