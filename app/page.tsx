import { Navbar } from '@/components/ui/Navbar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { SkillsInteractive as Skills } from '@/components/sections/SkillsInteractive'
import { Projects } from '@/components/sections/Projects'
import { Timeline } from '@/components/sections/Timeline'
import { Education } from '@/components/sections/Education'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export default function Page() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-background focus:px-4 focus:py-3">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="overflow-x-clip bg-background">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
