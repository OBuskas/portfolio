"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "en" | "pt" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    // Navigation
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.education": "Education",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Front-end Developer",
    "hero.description":
      "Proactive and analytical Front-end Developer with experience in TypeScript, React, and UI/UX, focused on innovative solutions and teamwork.",
    "hero.cta": "Get In Touch",

    // Experience
    "experience.title": "Experience",
    "experience.job1.title": "Senior Front-end Developer",
    "experience.job1.company": "Tech Solutions Inc.",
    "experience.job1.period": "2022 - Present",
    "experience.job1.description":
      "Led development of enterprise web applications using React, TypeScript, and Node.js. Implemented CI/CD pipelines and mentored junior developers.",

    // Skills
    "skills.title": "Skills",
    "skills.hard": "Hard Skills",
    "skills.soft": "Soft Skills",

    // Projects
    "projects.title": "Featured Projects",
    "projects.viewCode": "View Code",
    "projects.liveDemo": "Live Demo",

    // Education
    "education.title": "Education & Certifications",

    // Contact
    "contact.title": "Get In Touch",
    "contact.description": "I'm always open to discussing new opportunities and interesting projects.",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send Message",

    // Chat
    "chat.title": "Chat Assistant",
    "chat.placeholder": "Ask me anything...",
  },
  pt: {
    // Navigation
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.skills": "Habilidades",
    "nav.projects": "Projetos",
    "nav.education": "Educação",
    "nav.contact": "Contato",

    // Hero
    "hero.title": "Desenvolvedor Front-end",
    "hero.description":
      "Desenvolvedor Front-end proativo e analítico, com experiência em TypeScript, React e UI/UX, focado em soluções inovadoras e trabalho em equipe.",
    "hero.cta": "Entre em Contato",

    // Experience
    "experience.title": "Experiência",
    "experience.job1.title": "Desenvolvedor Front-end Sênior",
    "experience.job1.company": "Tech Solutions Inc.",
    "experience.job1.period": "2022 - Presente",
    "experience.job1.description":
      "Liderei o desenvolvimento de aplicações web empresariais usando React, TypeScript e Node.js. Implementei pipelines CI/CD e mentorei desenvolvedores júnior.",

    // Skills
    "skills.title": "Habilidades",
    "skills.hard": "Habilidades Técnicas",
    "skills.soft": "Habilidades Interpessoais",

    // Projects
    "projects.title": "Projetos em Destaque",
    "projects.viewCode": "Ver Código",
    "projects.liveDemo": "Demo ao Vivo",

    // Education
    "education.title": "Educação e Certificações",

    // Contact
    "contact.title": "Entre em Contato",
    "contact.description": "Estou sempre aberto para discutir novas oportunidades e projetos interessantes.",
    "contact.name": "Nome",
    "contact.email": "Email",
    "contact.message": "Mensagem",
    "contact.send": "Enviar Mensagem",

    // Chat
    "chat.title": "Assistente de Chat",
    "chat.placeholder": "Pergunte-me qualquer coisa...",
  },
  es: {
    // Navigation
    "nav.about": "Acerca",
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.education": "Educación",
    "nav.contact": "Contacto",

    // Hero
    "hero.title": "Desarrollador Front-end",
    "hero.description":
      "Desarrollador Front-end proactivo y analítico, con experiencia en TypeScript, React y UI/UX, enfocado en soluciones innovadoras y trabajo en equipo",
    "hero.cta": "Contactar",

    // Experience
    "experience.title": "Experiencia",
    "experience.job1.title": "Desarrollador Front-end Senior",
    "experience.job1.company": "Tech Solutions Inc.",
    "experience.job1.period": "2022 - Presente",
    "experience.job1.description":
      "Lideré el desarrollo de aplicaciones web empresariales usando React, TypeScript y Node.js. Implementé pipelines CI/CD y mentoré desarrolladores junior.",

    // Skills
    "skills.title": "Habilidades",
    "skills.hard": "Habilidades Técnicas",
    "skills.soft": "Habilidades Blandas",

    // Projects
    "projects.title": "Proyectos Destacados",
    "projects.viewCode": "Ver Código",
    "projects.liveDemo": "Demo en Vivo",

    // Education
    "education.title": "Educación y Certificaciones",

    // Contact
    "contact.title": "Contactar",
    "contact.description": "Siempre estoy abierto a discutir nuevas oportunidades y proyectos interesantes.",
    "contact.name": "Nombre",
    "contact.email": "Email",
    "contact.message": "Mensaje",
    "contact.send": "Enviar Mensaje",

    // Chat
    "chat.title": "Asistente de Chat",
    "chat.placeholder": "Pregúntame cualquier cosa...",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
