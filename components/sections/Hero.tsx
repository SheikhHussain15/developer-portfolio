'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code, Link as LinkIcon, Mail, ChevronDown, Github, Star } from 'lucide-react'
import { CustomButton } from '../ui/CustomButton'
import { useState, useEffect } from 'react'
import { CountUp } from 'react-countup'
import { githubStats } from '@/lib/data'

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    setIsVisible(true)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
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
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mouse-follow spotlight */}
        <motion.div
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 200 }}
          className="absolute w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
        />

        {/* Floating accent orbs */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 102, 255, 0.05) 25%, rgba(0, 102, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 102, 255, 0.05) 75%, rgba(0, 102, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 102, 255, 0.05) 25%, rgba(0, 102, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 102, 255, 0.05) 75%, rgba(0, 102, 255, 0.05) 76%, transparent 77%, transparent)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Status Badge with Availability */}
        <motion.div variants={itemVariants} className="mb-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/50 text-accent font-semibold text-sm">
            <span className="inline-block w-2 h-2 bg-accent rounded-full animate-pulse" />
            Open to Internship
          </div>
          <span className="inline-block px-4 py-2 rounded-full bg-card border border-border/50 text-muted-foreground font-semibold text-sm">
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

        {/* GitHub Stats Counters */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-6 md:gap-12 my-16 px-4"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold text-accent mb-2"
            >
              {isVisible && <CountUp end={githubStats.repositories} duration={2} />}+
            </motion.div>
            <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-semibold">Projects</p>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-accent mb-2"
            >
              {isVisible && <CountUp end={githubStats.stars} duration={2} />}
            </motion.div>
            <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-semibold">Stars</p>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold text-accent mb-2"
            >
              {isVisible && <CountUp end={githubStats.followers} duration={2} />}
            </motion.div>
            <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-semibold">Followers</p>
          </div>
        </motion.div>

        {/* Code Snippet Card */}
        <motion.div
          variants={itemVariants}
          className="my-12 max-w-2xl mx-auto p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all"
        >
          <div className="flex items-center gap-2 mb-4">
            <Code className="w-4 h-4 text-accent" />
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Featured Snippet</p>
          </div>
          <pre className="text-sm md:text-xs text-foreground overflow-x-auto">
            <code>{`const buildAwesomeThings = () => {
  return skills.map(skill => ({
    passion: '100%',
    impact: 'global',
    result: 'life-changing'
  }))
}`}</code>
          </pre>
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-20 flex flex-col items-center gap-3"
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-accent/50 rounded-full flex items-start justify-center p-2 hover:border-accent/80 transition-colors">
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-2 bg-accent rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
