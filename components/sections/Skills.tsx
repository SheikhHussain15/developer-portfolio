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
                whileHover={{ y: -12, boxShadow: '0 20px 40px rgba(0, 102, 255, 0.1)' }}
                className="relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-accent/50 transition-all group overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
                
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-4 text-foreground group-hover:text-accent transition-colors">
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
                        whileHover={{ scale: 1.05 }}
                      >
                        <TechBadge
                          label={item}
                          variant={category.title === 'AI' ? 'accent' : 'default'}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
