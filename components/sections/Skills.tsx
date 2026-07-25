'use client'

import { motion } from 'framer-motion'
import { skills } from '@/lib/data'
import { SectionHeading } from '../ui/SectionHeading'
import { TechBadge } from '../ui/TechBadge'
import { ScrollReveal } from '../animations/ScrollReveal'

export function Skills() {
  const skillCategories = [
    { title: 'Programming', items: skills.programming },
    { title: 'Frontend', items: skills.frontend },
    { title: 'Backend', items: skills.backend },
    { title: 'Databases', items: skills.databases },
    { title: 'CMS', items: skills.cms },
    { title: 'AI', items: skills.ai },
    { title: 'Tools', items: skills.tools },
  ]

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
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Skills &amp; Expertise"
          subtitle="A comprehensive overview of my technical toolkit"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
        >
          {skillCategories.map((category) => (
            <ScrollReveal key={category.title}>
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="p-6 rounded-lg border border-border/50 bg-background/50 backdrop-blur-sm hover:border-accent/50 transition-all"
              >
                <h3 className="text-xl font-semibold mb-4 text-accent">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <TechBadge
                        label={item}
                        variant={category.title === 'AI' ? 'accent' : 'default'}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
