'use client'

import dynamic from 'next/dynamic'
import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowDownRight, ArrowRight, Code2, Link2, Mail, Pause, Play } from 'lucide-react'

const PortfolioScene = dynamic(() => import('../ui/PortfolioScene').then((module) => module.PortfolioScene), {
  ssr: false,
  loading: () => <div className="scene-fallback h-full w-full">Loading portrait</div>,
})

export function Hero() {
  const prefersReducedMotion = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [supportsWebGL, setSupportsWebGL] = useState(false)
  const handleVideoReady = useCallback((video: HTMLVideoElement | null) => { videoRef.current = video }, [])

  useEffect(() => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('webgl2') || canvas.getContext('webgl')
    const isSupported = Boolean(context)
    setSupportsWebGL(isSupported)
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
    <section id="hero" className="relative flex min-h-[100svh] scroll-mt-0 items-center overflow-hidden px-5 pb-12 pt-28 sm:px-8 lg:px-10">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-44 top-[13%] size-[28rem] rounded-full bg-indigo-500/10 blur-[120px]" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-4">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative z-10 mx-auto w-full max-w-2xl lg:mx-0"
        >
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="eyebrow rounded-full border border-sky-300/20 bg-sky-300/5 px-3 py-1.5">Agentic AI Developer</span>
            <span className="inline-flex items-center gap-2 text-xs text-slate-300"><span className="size-1.5 rounded-full bg-emerald-400" /> Available for internships</span>
          </div>
          <p className="mb-4 font-mono text-xs text-slate-500">KARACHI, PAKISTAN <span className="px-1 text-indigo-300">/</span> 24.86° N</p>
          <h1 className="max-w-3xl text-balance font-serif text-[clamp(2.65rem,10vw,4rem)] font-semibold leading-[0.99] tracking-[-0.055em] text-white lg:text-[clamp(3.2rem,4vw,3.75rem)]">
            Building intelligent systems that <span className="bg-gradient-to-r from-indigo-300 via-sky-200 to-indigo-300 bg-clip-text text-transparent">think, act & create.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            I&apos;m Hussain Raza, a Computer Science student and developer focused on building intelligent AI applications, agentic workflows, and modern full-stack experiences.
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[380px]:flex-row">
            <a href="#projects" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-indigo-300 px-5 font-semibold text-slate-950 transition hover:bg-indigo-200">
              Explore my work <ArrowRight aria-hidden="true" size={17} />
            </a>
            <a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-5 font-medium text-white transition hover:border-sky-200/50 hover:bg-white/[0.06]">
              Let&apos;s connect <ArrowDownRight aria-hidden="true" size={17} />
            </a>
          </div>
          <div className="mt-7 flex items-center gap-3">
            <a aria-label="GitHub profile" href="https://github.com/SheikhHussain15" target="_blank" rel="noopener noreferrer" className="grid size-10 place-items-center rounded-xl border border-white/10 text-slate-300 transition hover:border-indigo-300/50 hover:text-white"><Code2 aria-hidden="true" size={18} /></a>
            <a aria-label="LinkedIn profile" href="https://linkedin.com/in/hussain-raza-0704a32b6" target="_blank" rel="noopener noreferrer" className="grid size-10 place-items-center rounded-xl border border-white/10 text-slate-300 transition hover:border-indigo-300/50 hover:text-white"><Link2 aria-hidden="true" size={18} /></a>
            <a aria-label="Email Hussain Raza" href="mailto:hr773-774@gmail.com" className="grid size-10 place-items-center rounded-xl border border-white/10 text-slate-300 transition hover:border-indigo-300/50 hover:text-white"><Mail aria-hidden="true" size={18} /></a>
            <span className="ml-1 h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500">Building with purpose</span>
          </div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-[680px] lg:ml-auto">
          <div className="scene-aura pointer-events-none absolute inset-[10%] rounded-full blur-[80px]" aria-hidden="true" />
          <div className={`relative w-full overflow-hidden rounded-[1.5rem] border border-white/10 bg-card shadow-2xl ${supportsWebGL && !prefersReducedMotion ? 'h-[290px] sm:h-[420px] lg:h-[min(68vh,610px)]' : 'aspect-[1.18]'}`}>
            {supportsWebGL && !prefersReducedMotion ? (
              <>
                <p className="sr-only">Animated 3D portrait video of Hussain working at a laptop.</p>
                <PortfolioScene onVideoReady={handleVideoReady} />
              </>
            ) : (
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                src="/portfolio-motion.mp4"
                autoPlay={prefersReducedMotion !== true}
                loop={prefersReducedMotion !== true}
                controls={prefersReducedMotion === true}
                playsInline
                muted
                preload="metadata"
                aria-label="Hussain working at a laptop"
              />
            )}
            {!prefersReducedMotion && (
              <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#080a12]/75 px-3 py-2 backdrop-blur-md sm:inset-x-8 sm:bottom-8 sm:px-4">
                <span className="flex min-w-0 items-center gap-2 text-[10px] font-medium uppercase tracking-[0.13em] text-slate-300 sm:text-xs"><span className="size-1.5 shrink-0 rounded-full bg-sky-300" /> A little about how I work</span>
                <button type="button" onClick={toggleVideo} aria-label={isPlaying ? 'Pause portrait video' : 'Play portrait video'} className="pointer-events-auto grid size-9 shrink-0 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-sky-200/60">
                  {isPlaying ? <Pause aria-hidden="true" size={15} /> : <Play aria-hidden="true" size={15} />}
                </button>
              </div>
            )}
          </div>
          <a href="#about" className="absolute -bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.17em] text-slate-500 transition hover:text-sky-200 sm:flex">
            Scroll to explore <ArrowDown aria-hidden="true" size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
