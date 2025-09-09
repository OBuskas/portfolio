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
      title: t("education.degree1.title"),
      institution: t("education.degree1.institution"),
      period: t("education.degree1.period"),
      description: t("education.degree1.description"),
    },
    {
      type: "certification",
      title: t("education.cert1.title"),
      institution: t("education.cert1.institution"),
      period: t("education.cert1.period"),
      description: t("education.cert1.description"),
    },
    {
      type: "certification",
      title: t("education.cert2.title"),
      institution: t("education.cert2.institution"),
      period: t("education.cert2.period"),
      description: t("education.cert2.description"),
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
                <div className="flex items-start justify-between gap-4 sm:flex-grow">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 self-start">
                      {item.type === "degree" ? (
                        <GraduationCap className="w-5 h-5 text-blue-400" />
                      ) : (
                        <Award className="w-5 h-5 text-purple-400" />
                      )}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 ">
                      <CardTitle className="text-lg text-slate-100">{item.title}</CardTitle>
                        <div className="flex-shrink-0 sm:self-end">
                          <Badge variant="outline" className="border-slate-600 text-slate-300 cursor-default whitespace-nowrap">
                            {item.period}
                          </Badge>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="p-0 m-0">
                  <p className="text-blue-400 font-semibold">{item.institution}</p>
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
