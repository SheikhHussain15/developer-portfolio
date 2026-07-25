'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Link as LinkIcon, Code, Send } from 'lucide-react'
import { useState } from 'react'
import { SectionHeading } from '../ui/SectionHeading'
import { AnimatedCard } from '../ui/AnimatedCard'
import { ScrollReveal } from '../animations/ScrollReveal'
import { CustomButton } from '../ui/CustomButton'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // TODO: Implement form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
    }, 1000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hussain@example.com',
      href: 'mailto:hussain@example.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Karachi, Pakistan',
      href: '#',
    },
    {
      icon: Code,
      label: 'GitHub',
      value: 'github.com/sheikhhussain',
      href: 'https://github.com',
    },
    {
      icon: LinkIcon,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sheikhhussain',
      href: 'https://linkedin.com',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Get In Touch"
          subtitle="Let's build something amazing together"
        />

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          {/* Contact Form */}
          <ScrollReveal>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 p-8 rounded-2xl glassmorphism group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Full Name
                </label>
                <motion.input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder-muted-foreground focus:border-accent/50 focus:bg-white/10 focus:outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Email Address
                </label>
                <motion.input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder-muted-foreground focus:border-accent/50 focus:bg-white/10 focus:outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Message
                </label>
                <motion.textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  whileFocus={{ scale: 1.01 }}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-foreground placeholder-muted-foreground focus:border-accent/50 focus:bg-white/10 focus:outline-none transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <CustomButton variant="primary" className="w-full">
                {isSubmitting ? (
                  <motion.span animate={{ opacity: [0.6, 1] }} transition={{ repeat: Infinity }}>
                    Sending...
                  </motion.span>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </CustomButton>
            </motion.form>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 8, y: -4 }}
                    className="relative group flex items-start gap-4 p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-accent/50 transition-all"
                  >
                    {/* Glow effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur -z-10" />

                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-accent/30 to-accent/10 border border-accent/50 group-hover:border-accent/80 transition-colors"
                      >
                        <Icon className="w-6 h-6 text-accent" />
                      </motion.div>
                    </div>
                    <div className="flex-grow">
                      <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                        {info.label}
                      </p>
                      <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
