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
    "experience.job1.title": "Front-End Developer",
    "experience.job1.company": "Transfero Group",
    "experience.job1.period": "May 2024 - Present",
    "experience.job1.description":
      "Develop and deploy web applications using JavaScript, TypeScript, and React. I led the backoffice development process using TypeScript, React, and Ant Design, working closely with the CTO and PO. I was also responsible for the product onboarding website, built with React, Next.js, Shadcn, and Tailwind. Additionally, I collaborated with backend teams as needed to ensure product specifications were met.",
    "experience.job1.location": "Rio de Janeiro, Rio de Janeiro, Brazil - Remote",

    "experience.job2.title": "Front-End Developer",
    "experience.job2.company": "Puah Consultoria e Sistemas LTDA",
    "experience.job2.period": "Sep 2023 - Feb 2024",
    "experience.job2.description": "Use technologies such as HTML, CSS, JavaScript, React.js, and TypeScript to develop dynamic, engaging, and functional user interfaces. In this process, closely collaborate with the design team to ensure UI/UX concepts and layouts are accurately and efficiently translated into code, creating experiences that meet user needs.",
    "experience.job2.location": "São José dos Campos, São Paulo, Brazil - Remote",

    "experience.job3.title": "Bilingual Customer Support Agent",
    "experience.job3.company": "Teleperformance CRM S.A.",
    "experience.job3.period": "Oct 2021 - Jun 2022",
    "experience.job3.description": "Make and receive calls in Portuguese, English, and Spanish for clients across Latin America, providing assistance with technical issues and clarifying doubts with a focus on consulting and negotiation.",
    "experience.job3.location": "São Paulo, São Paulo, Brazil - Remote",

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
    "experience.job1.title": "Desenvolvedor Front-End",
    "experience.job1.company": "Transfero Group",
    "experience.job1.period": "05/2024 - atualmente",
    "experience.job1.description":
      "Desenvolver e implantar aplicações web com JavaScript, TypeScript e React. Liderei o processo de desenvolvimento do backoffice utilizando TypeScript, React e Ant Design, em conjunto com CTO e PO; Fui responsável também pelo site de contratação do produto, feito com React, Next.js, Shadcn e Tailwind. Além de colaborar conforme necessário com as equipes de back-end para garantir as especificidades dos produtos.",
    "experience.job1.location": "Rio de Janeiro, Rio de Janeiro, Brasil - Remoto",

    "experience.job2.title": "Desenvolvedor Frontend",
    "experience.job2.company": "Puah Consultoria e Sistemas LTDA",
    "experience.job2.period": "09/2023 - 02/2024",
    "experience.job2.description": "Utilizar tecnologias como HTML, CSS, Javascript, React.js e TypeScript para desenvolver interfaces de usuário dinâmicas, atraentes e funcionais. Nesse processo, colaborar de forma estreita com a equipe de design para garantir que os conceitos e layouts de UI/UX sejam traduzidos com precisão e eficiência em código, criando experiências atendem às necessidades do usuário.",
    "experience.job2.location": "São José dos Campos, São Paulo, Brasil - Remoto",

    "experience.job3.title": "Operador de Telemarketing Ativo e Receptivo Bilíngue",
    "experience.job3.company": "Teleperformance CRM S.A.",
    "experience.job3.period": "10/2021 - 06/2022",
    "experience.job3.description": "Fazer e receber ligações em português, inglês e espanhol, para clientes de toda a América Latina, auxiliando com questões técnicas e esclarecimento de dúvidas com foco em consultoria e negociação.",
    "experience.job3.location": "São Paulo, São Paulo, Brasil - Remoto",

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
    "experience.job1.title": "Desarrollador Front-End",
    "experience.job1.company": "Transfero Group",
    "experience.job1.period": "May 2024 - Presente",
    "experience.job1.description":
      "Desarrollar e implementar aplicaciones web con JavaScript, TypeScript y React. Lideré el proceso de desarrollo del backoffice utilizando TypeScript, React y Ant Design, en colaboración con el CTO y el PO. También fui responsable del sitio web de contratación del producto, desarrollado con React, Next.js, Shadcn y Tailwind. Además, colaboré con los equipos de backend según fuera necesario para garantizar las especificaciones del producto.",
    "experience.job1.location": "Rio de Janeiro, Rio de Janeiro, Brasil - Remoto",

    "experience.job2.title": "Desarrollador Frontend",
    "experience.job2.company": "Puah Consultoria e Sistemas LTDA",
    "experience.job2.period": "Sep 2023 - Feb 2024",
    "experience.job2.description": "Utilizar tecnologías como HTML, CSS, Javascript, React.js y TypeScript para desarrollar interfaces de usuario dinámicas, atractivas y funcionales. En este proceso, colaborar estrechamente con el equipo de diseño para garantizar que los conceptos y diseños de UI/UX se traduzcan con precisión y eficiencia en código, creando experiencias que satisfagan las necesidades del usuario.",
    "experience.job2.location": "São José dos Campos, São Paulo, Brasil - Remoto",

    "experience.job3.title": "Operador de Telemarketing Ativo e Receptivo Bilíngue",
    "experience.job3.company": "Teleperformance CRM S.A.",
    "experience.job3.period": "Oct 2021 - Jun 2022",
    "experience.job3.description": "Realizar y recibir llamadas en portugués, inglés y español para clientes de toda América Latina, ayudando con cuestiones técnicas y aclaración de dudas con enfoque en consultoría y negociación.",
    "experience.job3.location": "São Paulo, São Paulo, Brasil - Remoto",

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
