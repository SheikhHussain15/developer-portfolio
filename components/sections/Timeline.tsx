'use client'

import { motion } from 'framer-motion'
import { Briefcase, BookOpen, Award, Star, Target } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../animations/ScrollReveal'

interface TimelineEvent {
  date: string
  title: string
  description: string
  type: 'education' | 'certification' | 'project' | 'milestone' | 'goal'
  icon: React.ReactNode
}

const timelineEvents: TimelineEvent[] = [
  {
    date: 'Jan 2022',
    title: 'Started Learning Web Development',
    description: 'Began journey with HTML, CSS, and JavaScript',
    type: 'milestone',
    icon: <Star className="w-5 h-5" />,
  },
  {
    date: 'Aug 2022',
    title: 'Built First Full Stack App',
    description: 'Created a React + Node.js project with database',
    type: 'project',
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    date: 'Dec 2022',
    title: 'Earned TypeScript Certification',
    description: 'Advanced TypeScript fundamentals and patterns',
    type: 'certification',
    icon: <Award className="w-5 h-5" />,
  },
  {
    date: 'Mar 2023',
    title: 'Currently: BS in Computer Science',
    description: 'University Education - Graduating 2025',
    type: 'education',
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    date: 'Jun 2023',
    title: 'Mastered React & Next.js',
    description: 'Deep expertise in modern React patterns and Next.js 13+',
    type: 'milestone',
    icon: <Star className="w-5 h-5" />,
  },
  {
    date: 'Sep 2023',
    title: 'Started AI Engineering Journey',
    description: 'Began learning LLMs, prompt engineering, and agentic AI',
    type: 'milestone',
    icon: <Star className="w-5 h-5" />,
  },
  {
    date: 'Dec 2023',
    title: 'Prompt Engineering Mastery',
    description: 'Advanced techniques for optimal LLM outputs',
    type: 'certification',
    icon: <Award className="w-5 h-5" />,
  },
  {
    date: 'Feb 2024',
    title: 'Goal: Secure Internship',
    description: 'Aiming for AI/Full Stack internship at top tech company',
    type: 'goal',
    icon: <Target className="w-5 h-5" />,
  },
  {
    date: 'Jun 2024',
    title: 'Multiple AI Projects Deployed',
    description: 'Shipped AI-powered applications in production',
    type: 'project',
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    date: 'Present',
    title: 'Building the Future',
    description: 'Continuously learning and shipping innovative products',
    type: 'milestone',
    icon: <Star className="w-5 h-5" />,
  },
]

const typeConfig = {
  education: { color: 'from-blue-500/20 to-blue-500/5', border: 'border-blue-500/30', label: 'Education' },
  certification: { color: 'from-purple-500/20 to-purple-500/5', border: 'border-purple-500/30', label: 'Certification' },
  project: { color: 'from-green-500/20 to-green-500/5', border: 'border-green-500/30', label: 'Project' },
  milestone: { color: 'from-accent/20 to-accent/5', border: 'border-accent/30', label: 'Milestone' },
  goal: { color: 'from-orange-500/20 to-orange-500/5', border: 'border-orange-500/30', label: 'Goal' },
}

export function Timeline() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="My Journey"
          subtitle="Key milestones, projects, and achievements"
        />

        <div className="mt-16 space-y-8">
          {timelineEvents.map((event, index) => (
            <ScrollReveal key={event.title} delay={index * 0.05}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline line */}
                {index !== timelineEvents.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-12 bg-gradient-to-b from-accent/50 to-transparent" />
                )}

                <div className="flex gap-6">
                  {/* Timeline dot and icon */}
                  <div className="flex flex-col items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${typeConfig[event.type].color} border-2 ${typeConfig[event.type].border} flex items-center justify-center text-accent`}
                    >
                      {event.icon}
                      {/* Glow effect */}
                      <div className="absolute -inset-1 bg-accent/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <motion.div
                    whileHover={{ x: 8 }}
                    className={`flex-1 p-6 rounded-xl bg-gradient-to-br ${typeConfig[event.type].color} border ${typeConfig[event.type].border} hover:border-accent/50 transition-all group cursor-pointer`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </div>
                      <div className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/20 text-accent whitespace-nowrap ml-4">
                        {typeConfig[event.type].label}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground font-semibold uppercase tracking-wider mt-3">{event.date}</p>
                  </motion.div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
