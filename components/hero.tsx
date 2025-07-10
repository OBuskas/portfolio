"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "./language-provider"

export function Hero() {
  const { t } = useLanguage()

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <Avatar className="w-32 h-32 border-4 border-blue-500/20">
            <AvatarImage src="/placeholder.svg?height=128&width=128" alt="Profile" />
            <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl">
              JD
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-slate-400 text-lg mb-2">{t("hero.greeting")}</p>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              John Developer
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 font-semibold">{t("hero.title")}</h2>
          </div>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">{t("hero.description")}</p>

          <div className="flex justify-center space-x-4 mb-8">
            <Button variant="outline" size="icon" className="border-slate-700 bg-slate-800 hover:bg-slate-700">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="border-slate-700 bg-slate-800 hover:bg-slate-700">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" className="border-slate-700 bg-slate-800 hover:bg-slate-700">
              <Mail className="w-5 h-5" />
            </Button>
          </div>

          <Button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
          >
            {t("hero.cta")}
          </Button>
        </div>
      </div>
    </section>
  )
}
