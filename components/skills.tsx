"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Languages, Users } from "lucide-react"
import { useLanguage } from "./language-provider"

export function Skills() {
  const { t } = useLanguage()

  const hardSkills = [
    "JavaScript", 
    "TypeScript", 
    "React.js", 
    "Next.js", 
    "Tailwind", 
    "Shadcn/ui", 
    "Ant Design", 
    "npm", 
    "Yarn", 
    "ESLint", 
    "Vite", 
    "Vercel", 
    "Git", 
    "Github", 
    "Node.js"
  ]

  const languageSkills = [
    { key: "Portuguese", name: t("skills.languageSkills.portuguese") },
    { key: "Spanish", name: t("skills.languageSkills.spanish") },
    { key: "English", name: t("skills.languageSkills.english") },
  ]

  const softSkills = [
    { key: "proactive", name: t("skills.soft.proactive") },
    { key: "analytical", name: t("skills.soft.analytical") },
    { key: "sociability", name: t("skills.soft.sociability") },
    { key: "agile_methodology", name: t("skills.soft.agile_methodology") },
    { key: "time_management", name: t("skills.soft.time_management") },
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {t("skills.title")}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
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
                <Languages className="w-5 h-5 mr-2 text-indigo-400" />
                {t("skills.languageSkills")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {languageSkills.map((skill) => (
                  <Badge key={skill.key} className="bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 border-indigo-500/30 cursor-default">
                    {skill.name}
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
                    key={skill.key}
                    className="bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 border-purple-500/30 cursor-default"
                  >
                    {skill.name}
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
