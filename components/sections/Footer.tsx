'use client'

import { motion } from 'framer-motion'
import { Code, Link as LinkIcon, Mail, ExternalLink } from 'lucide-react'

export function Footer() {
  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const socials = [
    { icon: Code, href: 'https://github.com', label: 'GitHub' },
    { icon: LinkIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hussain@example.com', label: 'Email' },
  ]

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">SH</span>
              </div>
              <span className="font-bold text-foreground">Sheikh Hussain</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Full Stack Developer &amp; AI Engineer crafting innovative solutions.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 4 }}
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <motion.a
                  href="#"
                  whileHover={{ x: 4 }}
                  className="text-muted-foreground hover:text-accent transition-colors text-sm flex items-center gap-2"
                >
                  Resume <ExternalLink className="w-3 h-3" />
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://github.com"
                  whileHover={{ x: 4 }}
                  className="text-muted-foreground hover:text-accent transition-colors text-sm flex items-center gap-2"
                >
                  GitHub <ExternalLink className="w-3 h-3" />
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://vercel.com"
                  whileHover={{ x: 4 }}
                  className="text-muted-foreground hover:text-accent transition-colors text-sm flex items-center gap-2"
                >
                  Vercel <ExternalLink className="w-3 h-3" />
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="p-2 rounded-lg bg-card border border-border/50 text-foreground hover:border-accent/50 hover:text-accent transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground"
        >
          <p>&copy; {new Date().getFullYear()} Sheikh Hussain. All rights reserved.</p>
          <p>Built with React, Next.js, TailwindCSS, and Framer Motion</p>
        </motion.div>
      </div>
    </footer>
  )
}
