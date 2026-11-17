'use client'

import { motion } from 'framer-motion'
import { BookOpen, Award } from 'lucide-react'
import { education, certifications } from '@/lib/data'
import { SectionHeading } from '../ui/SectionHeading'
import { AnimatedCard } from '../ui/AnimatedCard'
import { ScrollReveal } from '../animations/ScrollReveal'

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Education & Certifications"
          subtitle="Academic background and training listed in my CV"
        />

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <ScrollReveal>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
              <div className="space-y-4">
                {education.map(item => (
                  <AnimatedCard key={item.degree} className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-accent/15 border border-accent/30">
                        <BookOpen className="w-5 h-5 text-accent" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{item.degree}</h4>
                      <p className="text-accent font-medium">{item.school}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.graduation}</p>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Certifications */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="p-3 rounded-lg border border-border/50 bg-card/50 hover:border-accent/50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">
                          {cert.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer}{cert.date && ` • ${cert.date}`}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
