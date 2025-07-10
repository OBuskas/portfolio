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
    "hero.greeting": "Hi, I'm",
    "hero.title": "Full Stack Developer",
    "hero.description":
      "Passionate about creating innovative solutions with modern technologies. Specialized in React, TypeScript, and building scalable web applications.",
    "hero.cta": "Get In Touch",

    // Experience
    "experience.title": "Experience",
    "experience.job1.title": "Senior Full Stack Developer",
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
    "hero.greeting": "Olá, eu sou",
    "hero.title": "Desenvolvedor Full Stack",
    "hero.description":
      "Apaixonado por criar soluções inovadoras com tecnologias modernas. Especializado em React, TypeScript e desenvolvimento de aplicações web escaláveis.",
    "hero.cta": "Entre em Contato",

    // Experience
    "experience.title": "Experiência",
    "experience.job1.title": "Desenvolvedor Full Stack Sênior",
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
    "hero.greeting": "Hola, soy",
    "hero.title": "Desarrollador Full Stack",
    "hero.description":
      "Apasionado por crear soluciones innovadoras con tecnologías modernas. Especializado en React, TypeScript y desarrollo de aplicaciones web escalables.",
    "hero.cta": "Contactar",

    // Experience
    "experience.title": "Experiencia",
    "experience.job1.title": "Desarrollador Full Stack Senior",
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
