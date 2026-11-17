'use client'

import { motion } from 'framer-motion'
import { Award, BookOpen, Briefcase } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../animations/ScrollReveal'

const timelineEvents = [
  { date: '2023', title: 'CIT Certificate', description: 'Completed CIT training at ARFA Tech.', type: 'certification', icon: <Award className="w-5 h-5" /> },
  { date: '2024', title: 'Agentic AI Specialization', description: 'Started the ongoing specialization at GIAIC, Karachi.', type: 'education', icon: <BookOpen className="w-5 h-5" /> },
  { date: '2024', title: 'Matriculation in Computer Science', description: 'Public Secondary School, Karachi.', type: 'education', icon: <BookOpen className="w-5 h-5" /> },
  { date: '2025', title: 'Personal AI Employee', description: 'Built an AI automation system integrating Gmail and social platform APIs.', type: 'project', icon: <Briefcase className="w-5 h-5" /> },
  { date: '2025', title: 'Full-Stack Todo App with AI Chatbot', description: 'Built a task-management app with authentication and natural-language task actions.', type: 'project', icon: <Briefcase className="w-5 h-5" /> },
  { date: '2026–Present', title: 'AI Educational Platform', description: 'Designing a multi-agent educational SaaS platform; currently in development.', type: 'project', icon: <Briefcase className="w-5 h-5" /> },
] as const

const typeConfig = {
  education: { color: 'from-accent/15 to-accent/5', border: 'border-accent/30', label: 'Education' },
  certification: { color: 'from-accent/15 to-accent/5', border: 'border-accent/30', label: 'Training' },
  project: { color: 'from-orange-900/20 to-accent/5', border: 'border-accent/30', label: 'Project' },
}

export function Timeline() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Development Journey" subtitle="Project and learning milestones from my CV" />
        <div className="mt-16 space-y-8">
          {timelineEvents.map((event, index) => (
            <ScrollReveal key={event.title} delay={index * 0.05}>
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
                {index !== timelineEvents.length - 1 && <div className="absolute left-8 top-16 h-12 w-0.5 bg-gradient-to-b from-accent/40 to-transparent" />}
                <div className="flex gap-5">
                  <div className={`relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 bg-gradient-to-br text-accent ${typeConfig[event.type].color} ${typeConfig[event.type].border}`}>
                    {event.icon}
                  </div>
                  <div className={`flex-1 rounded-xl border bg-gradient-to-br p-5 ${typeConfig[event.type].color} ${typeConfig[event.type].border}`}>
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{event.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{event.description}</p>
                      </div>
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">{typeConfig[event.type].label}</span>
                    </div>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{event.date}</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
