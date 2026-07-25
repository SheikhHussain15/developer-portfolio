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
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:border-accent/50 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:border-accent/50 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder-muted-foreground focus:border-accent/50 focus:outline-none transition-colors resize-none"
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
                    className="flex items-start gap-4 p-4 rounded-lg border border-border/50 bg-background/50 hover:border-accent/50 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/20 border border-accent/50">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {info.label}
                      </p>
                      <p className="text-muted-foreground">
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
