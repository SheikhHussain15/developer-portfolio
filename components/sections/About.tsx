'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '../ui/SectionHeading'
import { ScrollReveal } from '../animations/ScrollReveal'

export function About() {
  const features = [
    { title: 'Full Stack Developer', description: 'Building modern web applications with React, Next.js, and Python' },
    { title: 'AI Engineer', description: 'Leveraging AI APIs and agentic systems for intelligent automation' },
    { title: 'Prompt Engineer', description: 'Crafting context-rich prompts for optimal AI model outputs' },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Learn more about my background and expertise"
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
          {/* Left Column - Text */}
          <ScrollReveal>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a passionate Computer Science student from Karachi, Pakistan, with a deep love for
                building innovative solutions at the intersection of web development and artificial intelligence.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey began with a fascination for how technology can solve real-world problems. Over the years,
                I&apos;ve developed expertise in full-stack development, from crafting responsive user interfaces to
                architecting robust backends with FastAPI and modern databases.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                But my true passion lies in AI engineering. I&apos;m particularly interested in prompt engineering and
                context engineering to unlock the full potential of large language models. I believe that the future of
                software development is deeply intertwined with AI, and I&apos;m committed to staying at the forefront
                of this revolution.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new AI tools, learning about agentic systems,
                or thinking about how to make technology more accessible and impactful.
              </p>
            </div>
          </ScrollReveal>

          {/* Right Column - Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ x: 8 }}
                  className="p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm hover:border-accent/50 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
