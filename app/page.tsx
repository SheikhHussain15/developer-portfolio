import { Navbar } from '@/components/ui/Navbar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { SkillsInteractive as Skills } from '@/components/sections/SkillsInteractive'
import { Projects } from '@/components/sections/Projects'
import { Timeline } from '@/components/sections/Timeline'
import { CurrentlyBuilding } from '@/components/sections/CurrentlyBuilding'
import { Experience } from '@/components/sections/Experience'
import { Education } from '@/components/sections/Education'
import { GitHub } from '@/components/sections/GitHub'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip bg-background">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <CurrentlyBuilding />
        <Experience />
        <Education />
        <GitHub />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
