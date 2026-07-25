'use client'

import { motion } from 'framer-motion'
import { Code } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { AnimatedCard } from '../ui/AnimatedCard'
import { ScrollReveal } from '../animations/ScrollReveal'

export function GitHub() {
  const stats = [
    { label: 'Public Repos', value: '15+' },
    { label: 'Followers', value: '50+' },
    { label: 'Stars', value: '100+' },
    { label: 'Contributions', value: '500+' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="GitHub Activity"
          subtitle="Check out my open source contributions"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 mb-12"
        >
          <AnimatedCard className="flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-3 mb-2">
                <Code className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">
                  github.com/sheikhhussain
                </h3>
              </div>
              <p className="text-muted-foreground">
                Explore my projects, contributions, and collaboration history
              </p>
            </div>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors whitespace-nowrap"
            >
              Visit GitHub
            </motion.a>
          </AnimatedCard>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <AnimatedCard className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-3xl font-bold text-accent mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </motion.div>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
