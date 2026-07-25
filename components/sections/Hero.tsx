'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code, Link as LinkIcon, Mail } from 'lucide-react'
import { CustomButton } from '../ui/CustomButton'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Greeting Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 border border-accent/50 text-accent font-semibold text-sm">
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 text-balance"
        >
          Full Stack Developer &amp; <span className="text-accent">AI Engineer</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Crafting intelligent web solutions with cutting-edge technology. Specializing in Full Stack
          Development, AI Engineering, and Prompt Engineering to build products that matter.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <CustomButton variant="primary" onClick={() => {
            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            View Projects <ArrowRight className="w-4 h-4" />
          </CustomButton>
          <CustomButton variant="outline">
            Download Resume
          </CustomButton>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            className="p-3 rounded-lg bg-card border border-border/50 text-foreground hover:border-accent/50 hover:text-accent transition-colors"
          >
            <Code className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            className="p-3 rounded-lg bg-card border border-border/50 text-foreground hover:border-accent/50 hover:text-accent transition-colors"
          >
            <LinkIcon className="w-5 h-5" />
          </motion.a>
          <motion.a
            href="mailto:contact@example.com"
            whileHover={{ scale: 1.1, y: -5 }}
            className="p-3 rounded-lg bg-card border border-border/50 text-foreground hover:border-accent/50 hover:text-accent transition-colors"
          >
            <Mail className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 flex justify-center"
        >
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1 bg-accent rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
