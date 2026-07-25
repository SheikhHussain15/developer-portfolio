'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Code as CodeIcon, Link as LinkIcon, Mail, FileText } from 'lucide-react'

interface Command {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  action: () => void
  category: string
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)

  const commands: Command[] = [
    {
      id: 'home',
      title: 'Go to Home',
      description: 'Back to hero section',
      icon: <FileText className="w-4 h-4" />,
      action: () => {
        document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
      category: 'Navigation',
    },
    {
      id: 'projects',
      title: 'View Projects',
      description: 'See all my projects',
      icon: <FileText className="w-4 h-4" />,
      action: () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
      category: 'Navigation',
    },
    {
      id: 'skills',
      title: 'View Skills',
      description: 'My tech stack and expertise',
      icon: <FileText className="w-4 h-4" />,
      action: () => {
        document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
      category: 'Navigation',
    },
    {
      id: 'contact',
      title: 'Contact Me',
      description: 'Get in touch',
      icon: <Mail className="w-4 h-4" />,
      action: () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
      category: 'Navigation',
    },
    {
      id: 'github',
      title: 'Open GitHub',
      description: 'Visit my GitHub profile',
      icon: <CodeIcon className="w-4 h-4" />,
      action: () => {
        window.open('https://github.com/sheikhhussain15', '_blank')
      },
      category: 'Social',
    },
    {
      id: 'linkedin',
      title: 'Open LinkedIn',
      description: 'Visit my LinkedIn profile',
      icon: <LinkIcon className="w-4 h-4" />,
      action: () => {
        window.open('https://linkedin.com', '_blank')
      },
      category: 'Social',
    },
    {
      id: 'resume',
      title: 'Download Resume',
      description: 'Get my resume PDF',
      icon: <FileText className="w-4 h-4" />,
      action: () => {
        console.log('Resume download initiated')
        setIsOpen(false)
      },
      category: 'Documents',
    },
  ]

  const filteredCommands = commands.filter(cmd =>
    cmd.title.toLowerCase().includes(search.toLowerCase()) ||
    cmd.description.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(!isOpen)
        setSearch('')
        setSelectedIndex(0)
      }

      if (!isOpen) return

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex(prev => (prev + 1) % filteredCommands.length)
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length)
          break
        case 'Enter':
          e.preventDefault()
          if (filteredCommands[selectedIndex]) {
            filteredCommands[selectedIndex].action()
          }
          break
        case 'Escape':
          setIsOpen(false)
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, search, selectedIndex, filteredCommands])

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg bg-card/50 border border-border/50 text-muted-foreground hover:border-accent/50 transition-all"
        whileHover={{ scale: 1.05 }}
      >
        <Search className="w-4 h-4" />
        <span className="text-sm">Cmd+K</span>
      </motion.button>

      {/* Modal Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          >
            {/* Command Palette */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              onClick={e => e.stopPropagation()}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl z-50"
            >
              <div className="bg-card border border-border/50 rounded-xl shadow-xl">
                {/* Search Input */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
                  <Search className="w-4 h-4 text-muted-foreground" />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search commands..."
                    value={search}
                    onChange={e => {
                      setSearch(e.target.value)
                      setSelectedIndex(0)
                    }}
                    className="flex-1 bg-transparent text-foreground placeholder-muted-foreground outline-none"
                  />
                  <kbd className="text-xs text-muted-foreground bg-muted/20 px-2 py-1 rounded">ESC</kbd>
                </div>

                {/* Commands List */}
                <div className="max-h-96 overflow-y-auto">
                  {filteredCommands.length === 0 ? (
                    <div className="p-6 text-center text-muted-foreground">
                      No commands found
                    </div>
                  ) : (
                    filteredCommands.map((cmd, index) => (
                      <motion.button
                        key={cmd.id}
                        onClick={() => cmd.action()}
                        onMouseEnter={() => setSelectedIndex(index)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`w-full px-4 py-3 flex items-start gap-3 transition-all ${
                          index === selectedIndex
                            ? 'bg-accent/10 border-l-2 border-accent'
                            : 'border-l-2 border-transparent'
                        }`}
                      >
                        <div className={index === selectedIndex ? 'text-accent' : 'text-muted-foreground'}>
                          {cmd.icon}
                        </div>
                        <div className="text-left flex-1">
                          <p className="text-sm font-semibold text-foreground">{cmd.title}</p>
                          <p className="text-xs text-muted-foreground">{cmd.description}</p>
                        </div>
                      </motion.button>
                    ))
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
