'use client'

import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { AnimatedCard } from '../ui/AnimatedCard'
import { ScrollReveal } from '../animations/ScrollReveal'

export function Experience() {
  const experiences = [
    {
      title: 'Internship Search',
      company: 'Open to Opportunities',
      period: '2024 - 2025',
      description: 'Actively seeking internship opportunities to apply my skills in Full Stack Development and AI Engineering. Eager to contribute to innovative projects and grow professionally.',
      highlights: [
        'Open to relocation',
        'Available for full-time and internship roles',
        'Interested in startups and established companies',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and growth"
        />

        <div className="space-y-8 mt-16">
          {experiences.map((exp, index) => (
            <ScrollReveal key={exp.title} delay={index * 0.1}>
              <AnimatedCard className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/20 border border-accent/50">
                    <Briefcase className="w-6 h-6 text-accent" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-accent font-semibold">
                        {exp.company}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground md:text-right mt-1 md:mt-0">
                      {exp.period}
                    </p>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight) => (
                      <motion.li
                        key={highlight}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
