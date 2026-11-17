'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Code, Link as LinkIcon, Mail, Download } from 'lucide-react'
import { CustomButton } from '../ui/CustomButton'

const resumePath = '/resume.pdf'

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-28 left-1/2 h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[110px]" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-orange-900/10 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: 'linear-gradient(rgba(214,161,95,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(214,161,95,.5) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Open to AI Developer Internship opportunities
        </div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">Karachi, Pakistan</p>
        <h1 className="text-balance text-5xl font-bold leading-[1.08] tracking-tight text-foreground md:text-7xl">
          Hussain Raza
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-xl font-medium leading-relaxed text-accent md:text-2xl">
          Agentic AI Developer <span className="text-muted-foreground">·</span> LLM Application Developer <span className="text-muted-foreground">·</span> CS Student
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
          I build autonomous AI agents, LLM applications, RAG pipelines, and full-stack automation systems with Python, FastAPI, and modern web technologies.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <CustomButton variant="primary" onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Projects <ArrowRight className="h-4 w-4" />
          </CustomButton>
          <a href={resumePath} download="Hussain-Raza-AI-Developer-CV.pdf" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-accent/40 bg-card px-5 py-3 font-semibold text-foreground transition-colors hover:border-accent hover:bg-accent/10">
            Download Resume <Download className="h-4 w-4 text-accent" />
          </a>
        </div>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a aria-label="GitHub profile" href="https://github.com/SheikhHussain15" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border bg-card p-3 text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"><Code className="h-5 w-5" /></a>
          <a aria-label="LinkedIn profile" href="https://linkedin.com/in/hussain-raza-0704a32b6" target="_blank" rel="noopener noreferrer" className="rounded-lg border border-border bg-card p-3 text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"><LinkIcon className="h-5 w-5" /></a>
          <a aria-label="Email Hussain Raza" href="mailto:hr773-774@gmail.com" className="rounded-lg border border-border bg-card p-3 text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"><Mail className="h-5 w-5" /></a>
        </div>
      </motion.div>
    </section>
  )
}
