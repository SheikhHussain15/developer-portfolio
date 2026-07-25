'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../animations/ScrollReveal'

export function About() {
  const features = [
    { title: 'Full Stack Developer', description: 'Building modern web applications with React, Next.js, and Python', icon: '⚡' },
    { title: 'AI Engineer', description: 'Leveraging AI APIs and agentic systems for intelligent automation', icon: '🤖' },
    { title: 'Prompt Engineer', description: 'Crafting context-rich prompts for optimal AI model outputs', icon: '✨' },
  ]

  const stats = [
    { label: 'Years Learning', value: '3+' },
    { label: 'Projects Built', value: '20+' },
    { label: 'Technologies', value: '25+' },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/2.5">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Learn more about my background and expertise"
        />

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 md:gap-8 my-12 px-4 md:px-0"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          {/* Left Column - Text */}
          <ScrollReveal>
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                I&apos;m a passionate Computer Science student from Karachi, Pakistan, with a deep love for
                building innovative solutions at the intersection of web development and artificial intelligence.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                My journey began with a fascination for how technology can solve real-world problems. Over the years,
                I&apos;ve developed expertise in full-stack development, from crafting responsive user interfaces to
                architecting robust backends with FastAPI and modern databases.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                But my true passion lies in AI engineering. I&apos;m particularly interested in prompt engineering and
                context engineering to unlock the full potential of large language models.
              </motion.p>
            </div>
          </ScrollReveal>

          {/* Right Column - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 12, y: -4 }}
                  className="relative group p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-accent/50 transition-all"
                >
                  {/* Glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur -z-10" />
                  
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold mb-1 text-foreground group-hover:text-accent transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
