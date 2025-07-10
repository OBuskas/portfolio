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
      name: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      name: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, team collaboration, and progress tracking.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
    {
      name: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts, charts, and weather alerts.",
      image: "/placeholder.svg?height=200&width=300",
      technologies: ["React", "TypeScript", "Chart.js", "Weather API", "SASS"],
      github: "https://github.com",
      demo: "https://demo.com",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {t("projects.title")}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all duration-300 group"
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
              <CardContent className="p-6">
                <CardTitle className="text-xl text-slate-100 mb-2">{project.name}</CardTitle>
                <p className="text-slate-300 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-slate-800 text-slate-300 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-700 bg-slate-800 hover:bg-slate-700 flex-1"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    {t("projects.viewCode")}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-slate-700 bg-slate-800 hover:bg-slate-700 flex-1"
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
