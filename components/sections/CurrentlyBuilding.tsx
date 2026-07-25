'use client'

import { motion } from 'framer-motion'
import { Zap, Code, Rocket } from 'lucide-react'
import { aiProjects } from '@/lib/data'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../animations/ScrollReveal'

export function CurrentlyBuilding() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const statusStyles = {
    'In Development': 'from-green-500/20 to-green-500/5 border-green-500/30',
    'Planning': 'from-yellow-500/20 to-yellow-500/5 border-yellow-500/30',
    'Coming Soon': 'from-purple-500/20 to-purple-500/5 border-purple-500/30',
  }

  const statusColors = {
    'In Development': 'text-green-400',
    'Planning': 'text-yellow-400',
    'Coming Soon': 'text-purple-400',
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Currently Building"
          subtitle="AI-powered projects in development"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-8 mt-16"
        >
          {aiProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <motion.div variants={itemVariants}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`relative group h-full p-8 rounded-2xl bg-gradient-to-br ${
                    statusStyles[project.status as keyof typeof statusStyles]
                  } border-2 hover:border-accent/60 transition-all`}
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/30 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur -z-10" />

                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground font-serif mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                    </div>
                    <Rocket className="w-6 h-6 text-accent flex-shrink-0 ml-4" />
                  </div>

                  {/* Status Badge */}
                  <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
                    <Zap className={`w-4 h-4 ${statusColors[project.status as keyof typeof statusColors]}`} />
                    <span className={`text-sm font-semibold ${statusColors[project.status as keyof typeof statusColors]}`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Technologies */}
                  <div>
                    <p className="text-xs font-bold text-accent uppercase tracking-wider mb-3">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1 text-xs bg-accent/10 border border-accent/30 text-accent rounded-full hover:bg-accent/20 transition-all cursor-pointer"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Progress indicator */}
                  {project.status === 'In Development' && (
                    <div className="mt-6 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-green-400">Progress</span>
                        <span className="text-xs text-green-400">60%</span>
                      </div>
                      <div className="h-2 bg-background rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '60%' }}
                          transition={{ duration: 1 }}
                          viewport={{ once: true }}
                          className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full"
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </motion.div>

        {/* Call to Action */}
        <ScrollReveal delay={0.3}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-accent/20 to-accent/10 border-2 border-accent/30 text-center"
          >
            <Code className="w-8 h-8 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2 font-serif">Interested in these projects?</h3>
            <p className="text-muted-foreground mb-6">Let&apos;s collaborate or discuss ideas. Reach out on GitHub or LinkedIn!</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.a
                href="https://github.com/sheikhhussain15"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-2 rounded-lg bg-accent/20 border border-accent/50 text-accent hover:bg-accent/30 font-semibold transition-all"
              >
                View on GitHub
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-2 rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 font-semibold transition-all"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
