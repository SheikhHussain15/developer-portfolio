'use client'

import { motion } from 'framer-motion'
import { Code, ExternalLink } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { AnimatedCard } from '../ui/AnimatedCard'

export function GitHub() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="GitHub" subtitle="Repositories and activity on my GitHub profile" />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} className="mt-12">
          <AnimatedCard className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <div className="mb-2 flex items-center justify-center gap-3 sm:justify-start">
                <Code className="h-6 w-6 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">SheikhHussain15</h3>
              </div>
              <p className="text-muted-foreground">Visit my GitHub profile for repository details and activity.</p>
            </div>
            <motion.a href="https://github.com/SheikhHussain15" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.04 }} className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-accent px-5 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent/90">
              Visit GitHub <ExternalLink className="h-4 w-4" />
            </motion.a>
          </AnimatedCard>
        </motion.div>
      </div>
    </section>
  )
}
