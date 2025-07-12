import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { FloatingChat } from "@/components/floating-chat"
import { LanguageProvider } from "@/components/language-provider"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100">
        <Navigation />
        <main>
          <Hero />
          <Projects />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
        {/* <FloatingChat /> */}
      </div>
    </LanguageProvider>
  )
}
