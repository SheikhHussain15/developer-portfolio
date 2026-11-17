'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../animations/ScrollReveal'

export function About() {
  const features = [
    { title: 'Agentic AI & LLM Applications', description: 'Developing AI agents, LLM applications, RAG pipelines, and multi-agent systems.', icon: 'AI' },
    { title: 'Full-Stack Development', description: 'Building with Python, FastAPI, Next.js, TypeScript, and relational databases.', icon: 'FS' },
    { title: 'AI Automation', description: 'Applying Claude, OpenAI Agents SDK, and spec-driven development to automation projects.', icon: 'AU' },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/2.5">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Learn more about my background and expertise"
        />

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
                I&apos;m a Computer Science student based in Karachi, Pakistan, specializing in Agentic AI at GIAIC. I build AI agents, LLM applications, and full-stack projects.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                My project work includes a personal AI employee that connects email and social APIs, an AI-assisted todo application, and a responsive vehicle rental and ecommerce platform.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                I&apos;m currently designing a multi-agent educational platform with a RAG workflow. I&apos;m seeking an AI Developer Internship or Junior AI Developer opportunity where I can continue learning and contribute to real products.
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
