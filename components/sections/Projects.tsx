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
              <motion.div
                whileHover={{ y: -8 }}
                className="relative group h-full"
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur" />
                
                <AnimatedCard delay={index * 0.1} className="relative flex flex-col h-full bg-white/5 backdrop-blur-md border border-white/10 group-hover:border-accent/30 transition-colors">
                  {/* Featured Ribbon */}
                  {index === 0 && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-accent/20 border border-accent/50 rounded-full text-xs font-semibold text-accent">
                      Featured
                    </div>
                  )}

                  {/* Project Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Problem & Solution */}
                  <div className="mb-4 space-y-3 flex-grow">
                    <div>
                      <p className="text-xs font-semibold text-accent/70 uppercase tracking-wider mb-1">Problem</p>
                      <p className="text-sm text-muted-foreground">
                        {project.problem}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-accent/70 uppercase tracking-wider mb-1">Solution</p>
                      <p className="text-sm text-muted-foreground">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <TechBadge key={tech} label={tech} />
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-white/5">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-foreground hover:bg-white/10 hover:border-accent/50 transition-all text-sm font-semibold group/link"
                    >
                      <Code className="w-4 h-4 group-hover/link:text-accent transition-colors" />
                      GitHub
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-accent/20 border border-accent/30 text-accent hover:bg-accent/30 hover:border-accent/50 transition-all text-sm font-semibold"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  </div>
                </AnimatedCard>
              </motion.div>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
