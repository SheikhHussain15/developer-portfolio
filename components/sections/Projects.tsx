'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Code } from 'lucide-react'
import { projects } from '@/lib/data'
import { SectionHeading } from '../ui/SectionHeading'
import { TechBadge } from '../ui/TechBadge'
import { ScrollReveal } from '../animations/ScrollReveal'
import { AnimatedCard } from '../ui/AnimatedCard'

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Featured Projects"
          subtitle="Showcasing my best work and technical achievements"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <AnimatedCard delay={index * 0.1} className="flex flex-col h-full">
                {/* Project Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                {/* Problem & Solution */}
                <div className="mb-4 space-y-3 flex-grow">
                  <div>
                    <p className="text-sm font-semibold text-accent mb-1">Problem:</p>
                    <p className="text-sm text-muted-foreground">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-accent mb-1">Solution:</p>
                    <p className="text-sm text-muted-foreground">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-sm font-semibold text-foreground mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <TechBadge key={tech} label={tech} />
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border/50">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-muted/50 text-foreground hover:bg-muted hover:text-accent transition-colors text-sm font-semibold"
                  >
                    <Code className="w-4 h-4" />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-accent/20 text-accent hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-semibold"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </motion.a>
                </div>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
