"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { useLanguage } from "./language-provider"

export function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      name: "073 Labs",
      description: t("projects.073Labs.description"),
      image: "/073Labs_Brandmark.png?height=200&width=300",
      technologies: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn/ui"],
      github: "https://github.com/Projeto-Fintech/pagina-de-espera",
      demo: "https://073labs.com/",
      disabledGithub: true,
    },
    {
      name: "Dining Board",
      description: t("projects.diningBoard.description"),
      image: "/dining_board.jpg?height=200&width=300",
      technologies: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn/ui", "Recharts", "TanStack Table", "Zustand", "Zod"],
      github: "https://github.com/OBuskas/dining-board",
      demo: "https://dining-board.vercel.app/",
      disabledGithub: false,
    },
    {
      name: "1010!",
      description: t("projects.1010.description"),
      image: "/1010.jpg?height=200&width=300",
      technologies: ["React.js", "TypeScript", "PixiJS", "Zustand", "Vite"],
      github: "https://github.com/OBuskas/1010-like",
      demo: "https://1010-like.vercel.app/",
      disabledGithub: false,
    },
    {
      name: "Brazil IT Remote",
      description: t("projects.brazilIT.description"),
      image: "/brazilItRemote.png?height=200&width=300",
      technologies: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Vite"],
      github: "https://github.com/BrazilITRemote/brazilitremote-frontend",
      demo: "https://brazilitremote.com/",
      disabledGithub: false,
    },
    {
      name: "Anana Payroll",
      description: t("projects.ananaPayroll.description"),
      image: "/ananaPayroll.png?height=200&width=300",
      technologies: ["React.js", "TypeScript", "Next.js", "Tailwind CSS"],
      github: "https://github.com/OBuskas/ananaPayroll",
      demo: "https://anana-payroll.vercel.app/",
      disabledGithub: false,
    },
    {
      name: "Indie Game Pass",
      description: t("projects.indieGamePass.description"),
      image: "/igp-logo.png?height=200&width=300",
      technologies: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn/ui"],
      github: "https://github.com/OBuskas/indie-game-pass-site",
      demo: "https://site-preview-0.indiegamepass.men/",
      disabledGithub: true,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {t("projects.title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:auto-rows-fr justify-items-center">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="flex flex-col w-full h-full bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all duration-300 group"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 p-5">
                <CardTitle className="text-xl text-slate-100 mb-2">{project.name}</CardTitle>
                <div className="max-h-[120px] overflow-y-auto mb-4">
                  <p className="text-slate-300 text-sm">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-slate-800 text-slate-300 text-xs cursor-default">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col md:flex-row gap-2 items-stretch justify-end mt-auto">
                  <Button
                    disabled={project.disabledGithub || false}
                    variant="outline"
                    size="sm"
                    className="border-slate-700 bg-slate-800 hover:bg-slate-700 flex-1 h-14"
                    onClick={() => window.open(project.github, '_blank', 'noopener,noreferrer')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {t("projects.viewCode")}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-700 bg-slate-800 hover:bg-slate-700 flex-1 h-14"
                    onClick={() => window.open(project.demo, '_blank', 'noopener,noreferrer')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {t("projects.liveDemo")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
