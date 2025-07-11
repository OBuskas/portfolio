"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Users } from "lucide-react"
import { useLanguage } from "./language-provider"

export function Skills() {
  const { t } = useLanguage()

  const hardSkills = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git",
    "Figma",
    "Tailwind CSS",
  ]

  const softSkills = [
    "Proactive",
    "Analytical",
    "Collaborative",
    "Problem Solving",
    "Communication",
    "Leadership",
    "Adaptability",
    "Time Management",
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {t("skills.title")}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center text-slate-100">
                <Code className="w-5 h-5 mr-2 text-blue-400" />
                {t("skills.hard")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {hardSkills.map((skill) => (
                  <Badge key={skill} className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border-blue-500/30 cursor-default">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center text-slate-100">
                <Users className="w-5 h-5 mr-2 text-purple-400" />
                {t("skills.soft")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <Badge
                    key={skill}
                    className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 border-purple-500/30 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
