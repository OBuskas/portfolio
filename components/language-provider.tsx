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
      "Brazilian Front-end developer, 27 years old, focused on React. Analytical, proactive, and communicative profile. I currently work at Transfero, within the startup Dinx, developing a BackOffice and a website for the onboarding of a children's financial education platform. I use Next.js, TypeScript, Tailwind, Shadcn/ui, and Ant Design. I began my career in 2023 at PUAH Consultoria, working on custom projects using JavaScript, TypeScript, and React.",
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
    "skills.languageSkills": "Language Skills",
    "skills.languageSkills.portuguese": "Portuguese: Native",
    "skills.languageSkills.spanish": "Spanish: B2",
    "skills.languageSkills.english": "English: B2", 
    "skills.soft": "Soft Skills",
    "skills.soft.proactive": "Proactive",
    "skills.soft.analytical": "Analytical",
    "skills.soft.sociability": "High Sociability",
    "skills.soft.agile_methodology": "Agile Methodology",
    "skills.soft.time_management": "Time Management",

    // Projects
    "projects.title": "Featured Projects",
    "projects.indieGamePass.description": "Indie Game Pass is a subscription platform that offers monthly access to exclusive indie games, allowing users to take part in the development process through voting and the IGP community.",
    "projects.taskManagementApp.description": "Test English",
    "projects.weatherDashboard.description": "Test English",
    "projects.viewCode": "View Code",
    "projects.liveDemo": "Live Demo",

    // Education
    "education.title": "Education & Certifications",
    "education.degree1.title": "Systems Analysis and Development - Associate Degree",
    "education.degree1.institution": "FIAP - Faculdade de Informática e Administração Paulista",
    "education.degree1.period": "July 2023 - July 2025",
    "education.degree1.description": "The Associate Degree in Systems Analysis and Development prepares professionals to work in software development, covering backend, frontend, databases, mobile applications (Android/iOS), and technologies such as AI, IoT, and DevOps. The program uses agile methodologies and practical projects in partnership with companies like Oracle, Microsoft, and AWS, and offers professional certifications each semester.",

    "education.cert1.title": "ONE - Front-end track",
    "education.cert1.institution": "Oracle",
    "education.cert1.period": "2023",
    "education.cert1.description": "HTML, CSS, JavaScript, and React.js - 560 hours.",

    "education.cert2.title": "Web Development 2020",
    "education.cert2.institution": "Estudonauta platform",
    "education.cert2.period": "2022",
    "education.cert2.description": "HTML5 + CSS3: Modules 1 to 4 - 160 hours.",

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
      "Desenvolvedor Front-end brasileiro, 27 anos, com foco em React. Perfil analítico, proativo e comunicativo. Atuo na Transfero, dentro da startup Dinx, desenvolvendo um BackOffice e um site para contratação de uma plataforma de educação financeira infantil. Utilizo Next.js, TypeScript, Tailwind, Shadcn/ui e Ant Design. Iniciei minha carreira em 2023 na PUAH Consultoria, com projetos personalizados em JavaScript, TypeScript e React.",
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
    "skills.languageSkills": "Habilidades com Idiomas",
    "skills.languageSkills.portuguese": "Português: Nativo",
    "skills.languageSkills.spanish": "Espanhol: B2",
    "skills.languageSkills.english": "Inglês: B2", 
    "skills.soft": "Habilidades Interpessoais",
    "skills.soft.proactive": "Proativo",
    "skills.soft.analytical": "Analítico",
    "skills.soft.sociability": "Altamente sociável",
    "skills.soft.agile_methodology": "Metodologias ágeis",
    "skills.soft.time_management": "Gestão de tempo",
    
    // Projects
    "projects.title": "Projetos em Destaque",
    "projects.indieGamePass.description": "O Indie Game Pass é uma plataforma de assinatura que dá acesso mensal a jogos indie exclusivos, permitindo aos usuários participar do desenvolvimento por meio de votações e da comunidade.",
    "projects.taskManagementApp.description": "Teste português",
    "projects.weatherDashboard.description": "Teste português",
    "projects.viewCode": "Ver Código",
    "projects.liveDemo": "Demo ao Vivo",

    // Education
    "education.title": "Educação e Certificações",
    "education.degree1.title": "Análise e Desenvolvimento de Sistemas - Tecnólogo",
    "education.degree1.institution": "FIAP - Faculdade de Informática e Administração Paulista",
    "education.degree1.period": "Julho 2023 - Julho 2025",
    "education.degree1.description": "Graduação em análise e desenvolvimento de sistemas prepara profissionais para atuar no desenvolvimento de software, abrangendo desde backend e frontend até bancos de dados, aplicativos móveis (Android/iOS) e tecnologias como IA, IoT e DevOps. Com metodologias ágeis e projetos práticos em parceria com empresas como Oracle, Microsoft e AWS e oferece certificações profissionais por semestre",

    "education.cert1.title": "ONE - Trilha Front-end",
    "education.cert1.institution": "Oracle",
    "education.cert1.period": "2023",
    "education.cert1.description": "HTML, CSS, JavaScript, and React.js - 560 horas.",

    "education.cert2.title": "Desenvolvimento Web 2020",
    "education.cert2.institution": "Plataforma Estudonauta",
    "education.cert2.period": "2022",
    "education.cert2.description": "HTML5 + CSS3: Modulos 1 a 4 - 160 horas.",

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
      "Desarrollador Front-end brasileño, de 27 años, enfocado en React. Perfil analítico, proactivo y comunicativo. Actualmente trabajo en Transfero, dentro de la startup Dinx, desarrollando un BackOffice y un sitio web para la contratación de una plataforma de educación financiera infantil. Utilizo Next.js, TypeScript, Tailwind, Shadcn/ui y Ant Design. Comencé mi carrera en 2023 en PUAH Consultoria, con proyectos personalizados en JavaScript, TypeScript y React.",
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
    "skills.languageSkills": "Habilidades con Idiomas",
    "skills.languageSkills.portuguese": "Portugués: Nativo",
    "skills.languageSkills.spanish": "Español: B2",
    "skills.languageSkills.english": "Inglés: B2", 
    "skills.soft": "Habilidades Personales",
    "skills.soft.proactive": "Proactivo",
    "skills.soft.analytical": "Analítico",
    "skills.soft.sociability": "Altamente sociable",
    "skills.soft.agile_methodology": "Metodologías agiles",
    "skills.soft.time_management": "Gestión del tiempo",

    // Projects
    "projects.title": "Proyectos Destacados",
    "projects.indieGamePass.description": "Indie Game Pass es una plataforma de suscripción que ofrece acceso mensual a juegos indie exclusivos, permitiendo a los usuarios participar en el desarrollo a través de votaciones y la comunidad de IGP.",
    "projects.taskManagementApp.description": "Teste español",
    "projects.weatherDashboard.description": "Teste español",
    "projects.viewCode": "Ver Código",
    "projects.liveDemo": "Demo en Vivo",

    // Education
    "education.title": "Educación y Certificaciones",
    "education.degree1.title": "Análisis y Desarrollo de Sistemas - Tecnicatura / Tecnólogo",
    "education.degree1.institution": "FIAP - Faculdade de Informática e Administração Paulista",
    "education.degree1.period": "Julio 2023 - Julio 2025",
    "education.degree1.description": "La Tecnicatura en Análisis y Desarrollo de Sistemas forma profesionales para trabajar en el desarrollo de software, abarcando backend, frontend, bases de datos, aplicaciones móviles (Android/iOS) y tecnologías como IA, IoT y DevOps. El programa utiliza metodologías ágiles y proyectos prácticos en colaboración con empresas como Oracle, Microsoft y AWS, y ofrece certificaciones profesionales por semestre.",

    "education.cert1.title": "ONE - Ruta Front-end",
    "education.cert1.institution": "Oracle",
    "education.cert1.period": "2023",
    "education.cert1.description": "HTML, CSS, JavaScript, and React.js - 560 horas.",

    "education.cert2.title": "Desarrollo Web 2020",
    "education.cert2.institution": "Plataforma Estudonauta",
    "education.cert2.period": "2022",
    "education.cert2.description": "HTML5 + CSS3: Módulos del 1 al 4 - 160 horas.",

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
