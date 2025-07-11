"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Github, Linkedin, Send } from "lucide-react"
import { useLanguage } from "./language-provider"

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {t("contact.title")}
          </h2>
          <p className="text-slate-400 text-lg">{t("contact.description")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-slate-900/50 border-slate-800">
            <CardHeader>
              <CardTitle className="text-slate-100">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-slate-300">
                    {t("contact.name")}
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-slate-800 border-slate-700 text-slate-100"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-slate-300">
                    {t("contact.email")}
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-slate-800 border-slate-700 text-slate-100"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-slate-300">
                    {t("contact.message")}
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="bg-slate-800 border-slate-700 text-slate-100"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {t("contact.send")}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="bg-slate-900/50 border-slate-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-100 mb-4">Connect With Me</h3>
                <div className="space-y-4">
                  <a
                    target="_blank"
                    href="mailto:lucas.barbosa12397@gmail.com"
                    className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>lucas.barbosa12397@gmail.com</span>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/OBuskas"
                    className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>github.com/OBuskas</span>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/lucasbarbosadecarvalho/"
                    className="flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>linkedin.com/in/lucasbarbosa</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-slate-100 mb-2">Let's Build Something Amazing</h3>
                <p className="text-slate-300">
                  I'm always excited to work on innovative projects and collaborate with talented teams. Whether you
                  have a project in mind or just want to connect, feel free to reach out!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
