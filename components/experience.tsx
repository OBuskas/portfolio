"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"
import { useLanguage } from "./language-provider"

export function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      title: t("experience.job1.title"),
      company: t("experience.job1.company"),
      period: t("experience.job1.period"),
      location: "Remote",
      description: t("experience.job1.description"),
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Docker"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      location: "New York, NY",
      description:
        "Developed responsive web applications and collaborated with design teams to create pixel-perfect user interfaces.",
      technologies: ["React", "JavaScript", "SASS", "Figma", "Git"],
    },
    {
      title: "Junior Web Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      location: "San Francisco, CA",
      description:
        "Built and maintained company website and internal tools. Gained experience in full-stack development.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {t("experience.title")}
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-colors">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <CardTitle className="text-xl text-slate-100 mb-1">{exp.title}</CardTitle>
                    <p className="text-blue-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end mt-2 md:mt-0">
                    <div className="flex items-center text-slate-400 text-sm mb-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-slate-400 text-sm">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-slate-800 text-slate-300 hover:bg-slate-700 cursor-default">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
