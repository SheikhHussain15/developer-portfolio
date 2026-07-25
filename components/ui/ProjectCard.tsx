'use client'

import { motion } from 'framer-motion'
import { Code as CodeIcon, ExternalLink, Clock, AlertCircle, Lightbulb } from 'lucide-react'
import { useState } from 'react'

interface ProjectCardProps {
  title: string
  description: string
  problem: string
  solution: string
  features: string[]
  tech: string[]
  github: string
  demo: string
  image?: string
  timeline?: string
  challenges?: string[]
  lessonsLearned?: string
  architecture?: string
  metrics?: string
  index?: number
}

export function ProjectCard({
  title,
  description,
  problem,
  solution,
  features,
  tech,
  github,
  demo,
  image,
  timeline,
  challenges,
  lessonsLearned,
  architecture,
  metrics,
  index = 0,
}: ProjectCardProps) {
  const [showDetails, setShowDetails] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const x = (e.clientY - rect.top - centerY) / 10
    const y = (e.clientX - rect.left - centerX) / -10

    setTilt({ x, y })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      style={{
        transformStyle: 'preserve-3d',
        transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
      className="relative h-full"
    >
      {/* Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/30 to-accent/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300 blur" />

      {/* Card Container */}
      <div className="relative bg-card/60 backdrop-blur-md border border-border/50 hover:border-accent/50 rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300">
        {/* Featured Badge */}
        {index === 0 && (
          <div className="absolute top-4 right-4 px-3 py-1 bg-accent/20 border border-accent/50 rounded-full text-xs font-semibold text-accent z-10">
            Featured
          </div>
        )}

        {/* Image Placeholder */}
        {image && (
          <div className="relative h-40 md:h-48 bg-gradient-to-br from-accent/10 to-accent/5 border-b border-border/50 overflow-hidden group">
            <div className="w-full h-full bg-gray-900 flex items-center justify-center text-muted-foreground">
              [Project Preview]
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center"
            >
              <ExternalLink className="w-8 h-8 text-accent" />
            </motion.div>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 p-6 md:p-8 space-y-4">
          {/* Title */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-2 font-serif">{title}</h3>
            <p className="text-muted-foreground text-sm md:text-base">{description}</p>
          </div>

          {/* Problem & Solution */}
          <div className="space-y-3 py-4 border-y border-border/30">
            <div>
              <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">Problem</p>
              <p className="text-sm text-foreground">{problem}</p>
            </div>
            <div>
              <p className="text-xs font-bold text-accent uppercase tracking-wider mb-1">Solution</p>
              <p className="text-sm text-foreground">{solution}</p>
            </div>
          </div>

          {/* Features */}
          <div>
            <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Key Features</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {features.slice(0, 3).map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-accent mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-accent/10 border border-accent/30 text-accent rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics */}
          {metrics && (
            <div className="p-3 bg-accent/5 border border-accent/20 rounded-lg">
              <p className="text-xs text-accent font-semibold mb-1">Impact</p>
              <p className="text-sm text-foreground">{metrics}</p>
            </div>
          )}

          {/* Timeline */}
          {timeline && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4 text-accent" />
              <span>{timeline}</span>
            </div>
          )}
        </div>

        {/* Expandable Details */}
        <motion.div
          animate={{ height: showDetails ? 'auto' : 0 }}
          className="overflow-hidden border-t border-border/30"
        >
          <div className="p-6 md:p-8 space-y-4">
            {challenges && (
              <div>
                <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Challenges
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {lessonsLearned && (
              <div>
                <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  Lessons Learned
                </p>
                <p className="text-sm text-foreground">{lessonsLearned}</p>
              </div>
            )}

            {architecture && (
              <div>
                <p className="text-xs font-bold text-accent uppercase tracking-wider mb-2">Architecture</p>
                <p className="text-sm text-foreground">{architecture}</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Footer */}
        <div className="p-6 md:p-8 border-t border-border/30 flex gap-3 pt-4">
          <motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent hover:bg-accent/20 transition-all font-semibold text-sm"
          >
            <CodeIcon className="w-4 h-4" />
            GitHub
          </motion.a>
          <motion.a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent/20 border border-accent/40 text-accent hover:bg-accent/30 transition-all font-semibold text-sm"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </motion.a>

          {/* Expand Details Button */}
          {(challenges || lessonsLearned || architecture) && (
            <motion.button
              onClick={() => setShowDetails(!showDetails)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-lg bg-card border border-border/50 hover:border-accent/50 transition-colors text-sm font-semibold"
            >
              {showDetails ? 'Less' : 'More'}
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
