"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"
import { useLanguage } from "./language-provider"

export function Education() {
  const { t } = useLanguage()

  const education = [
    {
      type: "degree",
      title: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2015 - 2019",
      description: "Focused on software engineering, algorithms, and data structures.",
    },
    {
      type: "certification",
      title: "AWS Certified Solutions Architect",
      institution: "Amazon Web Services",
      period: "2023",
      description: "Professional certification for designing distributed systems on AWS.",
    },
    {
      type: "certification",
      title: "React Developer Certification",
      institution: "Meta",
      period: "2022",
      description: "Advanced React concepts, hooks, and modern development practices.",
    },
    {
      type: "course",
      title: "Full Stack Web Development",
      institution: "FreeCodeCamp",
      period: "2021",
      description: "Comprehensive course covering frontend and backend technologies.",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 bg-slate-900/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {t("education.title")}
        </h2>

        <div className="space-y-6">
          {education.map((item, index) => (
            <Card key={index} className="bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    <div className="mt-1">
                      {item.type === "degree" ? (
                        <GraduationCap className="w-5 h-5 text-blue-400" />
                      ) : (
                        <Award className="w-5 h-5 text-purple-400" />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-lg text-slate-100 mb-1">{item.title}</CardTitle>
                      <p className="text-blue-400 font-semibold">{item.institution}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="border-slate-600 text-slate-300">
                    {item.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
