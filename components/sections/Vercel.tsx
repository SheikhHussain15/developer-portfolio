'use client'

import { motion } from 'framer-motion'
import { Zap, ExternalLink } from 'lucide-react'
import { SectionHeading } from '../ui/SectionHeading'
import { AnimatedCard } from '../ui/AnimatedCard'
import { ScrollReveal } from '../animations/ScrollReveal'

export function Vercel() {
  const deployments = [
    { name: 'AI Todo App', url: 'https://vercel.com', status: 'Live' },
    { name: 'Ecommerce Platform', url: 'https://vercel.com', status: 'Live' },
    { name: 'Portfolio Site', url: 'https://vercel.com', status: 'Live' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Deployments"
          subtitle="All my projects deployed and hosted on Vercel"
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
                <Zap className="w-6 h-6 text-accent" />
                <h3 className="text-2xl font-bold text-foreground">
                  Vercel Projects
                </h3>
              </div>
              <p className="text-muted-foreground">
                Fast, scalable deployments with automatic CI/CD pipelines
              </p>
            </div>
            <motion.a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors whitespace-nowrap"
            >
              View All
            </motion.a>
          </AnimatedCard>
        </motion.div>

        {/* Deployments List */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-4"
        >
          {deployments.map((deploy, index) => (
            <ScrollReveal key={deploy.name} delay={index * 0.1}>
              <AnimatedCard className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground mb-1">
                    {deploy.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Deployed on Vercel
                  </p>
                </div>
                <motion.a
                  href={deploy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-accent border border-accent/50 rounded-lg hover:bg-accent/10 transition-colors"
                >
                  Visit
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </AnimatedCard>
            </ScrollReveal>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
