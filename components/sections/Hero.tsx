'use client'

import { useCallback, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, Code, Download, Link as LinkIcon, Mail, Pause, Play } from 'lucide-react'
import { CustomButton } from '../ui/CustomButton'
import { PortfolioScene } from '../ui/PortfolioScene'

const resumePath = '/resume.pdf'
const videoPath = '/portfolio-motion.mp4'

export function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const handleVideoReady = useCallback((video: HTMLVideoElement | null) => {
    videoRef.current = video
  }, [])

  const toggleVideo = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      void video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  return (
    <section id="hero" className="hero-stage relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden px-4 pb-12 pt-24 sm:px-6 lg:px-8">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-900/10 blur-[120px]" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-4 lg:grid-cols-[0.92fr_1.08fr] lg:gap-2">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="relative z-10 mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(214,161,95,.8)]" />
            Open to AI Developer Internship opportunities
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Karachi, Pakistan · 24°51&apos;N</p>
          <h1 className="text-balance text-5xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
            Hussain <span className="text-accent">Raza</span>
          </h1>
          <p className="mt-5 text-lg font-medium leading-relaxed text-accent sm:text-xl">
            Agentic AI Developer <span className="text-muted-foreground">·</span> LLM Application Developer <span className="text-muted-foreground">·</span> CS Student
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
            I build autonomous AI agents, LLM applications, RAG pipelines, and full-stack automation systems with Python, FastAPI, and modern web technologies.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <CustomButton variant="primary" onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })}>
              View Projects <ArrowRight className="h-4 w-4" />
            </CustomButton>
            <a href={resumePath} download="Hussain-Raza-AI-Developer-CV.pdf" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-accent/40 bg-card/70 px-5 py-3 font-semibold text-foreground transition-colors hover:border-accent hover:bg-accent/10">
              Download Resume <Download className="h-4 w-4 text-accent" />
            </a>
          </div>
          <div className="mt-7 flex items-center justify-center gap-3 lg:justify-start">
            <a aria-label="GitHub profile" href="https://github.com/SheikhHussain15" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border bg-card/70 p-3 text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"><Code className="h-5 w-5" /></a>
            <a aria-label="LinkedIn profile" href="https://linkedin.com/in/hussain-raza-0704a32b6" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border bg-card/70 p-3 text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"><LinkIcon className="h-5 w-5" /></a>
            <a aria-label="Email Hussain Raza" href="mailto:hr773-774@gmail.com" className="rounded-lg border border-border bg-card/70 p-3 text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"><Mail className="h-5 w-5" /></a>
          </div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-[760px] lg:-mr-10">
          <div className="scene-aura pointer-events-none absolute inset-[12%] rounded-full bg-accent/15 blur-[90px]" aria-hidden="true" />
          {prefersReducedMotion ? (
            <div className="relative aspect-[1.2] w-full overflow-hidden rounded-[2rem] border border-accent/25 bg-card/70 p-3 shadow-[0_28px_100px_rgba(0,0,0,.48)] sm:aspect-[1.35]">
              <video
                className="h-full w-full rounded-[1.5rem] object-cover"
                src={videoPath}
                controls
                playsInline
                muted
                preload="metadata"
                aria-label="Hussain working at a laptop, portfolio profile video"
              />
            </div>
          ) : (
            <div className="relative h-[340px] w-full sm:h-[440px] lg:h-[min(72vh,660px)]">
              <p className="sr-only">3D animated video portrait of Hussain working at a laptop, surrounded by warm floating elements.</p>
              <PortfolioScene onVideoReady={handleVideoReady} />
              <div className="pointer-events-none absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-background/75 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground shadow-xl backdrop-blur-md sm:bottom-9">
                <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(214,161,95,.8)]" />
                Interactive portrait
              </div>
              <button
                type="button"
                onClick={toggleVideo}
                aria-label={isPlaying ? 'Pause portrait video' : 'Play portrait video'}
                className="absolute bottom-4 right-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-background/75 text-foreground shadow-xl backdrop-blur-md transition hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:bottom-8 sm:right-7"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>
            </div>
          )}
          <div className="pointer-events-none absolute -bottom-1 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground/80 sm:flex">
            <ArrowDown className="h-3 w-3" /> Scroll to explore
          </div>
        </div>
      </div>
    </section>
  )
}
