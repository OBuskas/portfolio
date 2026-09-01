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
    "hero.description": "Brazilian front-end developer, 28 years old, graduated in Systems Analysis and Development at FIAP, with an analytical, proactive, and communicative profile. \nAt Dinx, a Transfero Group startup, I am responsible for the company's entire web front-end and also work on the mobile front-end, across six products (from the Back Office and the subscription website to the parents' app) using React, Next.js, TypeScript, React Native, Tailwind, Shadcn/UI, and Ant Design. \nI started my career in 2023 at PUAH Consultoria, turning business and design requirements into accessible, responsive interfaces. Day to day, I integrate REST APIs, follow Spec-Driven Development practices, and cover critical flows with tests.",
    "hero.cta": "Get In Touch",

    // Experience
    "experience.title": "Experience",
    "experience.job1.title": "Front-End Developer",
    "experience.job1.company": "Transfero Group",
    "experience.job1.period": "May 2024 - Present",
    "experience.job1.description":
      "Responsible for the company's entire web front-end and also working on the mobile front-end, across 6 projects:",
    "experience.job1.highlight1":
      "Back Office: I lead the development in React, TypeScript, Ant Design, Axios, and Konva, together with the CTO and the PO.",
    "experience.job1.highlight2":
      "Subscription website: I built the platform where the user purchases the product, in React, Next.js, Shadcn/UI, Tailwind, Zustand, Zod, and React Hook Form.",
    "experience.job1.highlight3":
      "Form website: I migrated it from WordPress/Elementor to React, Astro, and Zod, keeping the previous version running during the transition.",
    "experience.job1.highlight4":
      "Parents' mobile app: I develop features and fixes in React Native, Expo, TypeScript, NativeWind, and React Query.",
    "experience.job1.highlight5": "Institutional website: I handle the maintenance in WordPress/Elementor.",
    "experience.job1.highlight6": "Emails: development of transactional and marketing emails in pure HTML and CSS.",
    "experience.job1.footer":
      "I collaborate with the back-end teams as needed to ensure the integration and the specifics of each product.",
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
    "skills.languageSkills.spanish": "Spanish: C1",
    "skills.languageSkills.english": "English: B2", 
    "skills.soft": "Soft Skills",
    "skills.soft.proactive": "Proactive",
    "skills.soft.analytical": "Analytical",
    "skills.soft.sociability": "High Sociability",
    "skills.soft.agile_methodology": "Agile Methodology",
    "skills.soft.time_management": "Time Management",

    // Projects
    "projects.title": "Featured Projects",
    "projects.073Labs.description": "073 Labs is a software studio focused on building digital products and custom solutions, combining technology, design, and experimentation to create scalable and impactful systems.",
    "projects.ananaPayroll.description": "Ananá Payroll is a Web3, trustless payroll platform that uses stablecoins to enable transparent, secure, and reliable payments between companies and workers.",
    "projects.indieGamePass.description": "Indie Game Pass is a subscription platform that offers monthly access to exclusive indie games, allowing users to take part in the development process through voting and the IGP community.",
    "projects.neuro21.description": "Neuro21 is a Web3 gamified platform that helps neurodivergent individuals build healthier habits through daily goals, rewarding them with tokens that can be exchanged for therapy sessions.",
    "projects.1010.description": "A web-based puzzle game inspired by 1010! Drag pieces onto a 10x10 board, complete full rows or columns to clear them, and chain combos for extra points. Game ends when no piece fits.",
    "projects.siteDeEsperaDinx.description": "The Dinx waiting site is a static page of the child financial education ecosystem project. It serves as a temporary environment until the official launch.",
    "projects.brazilIT.description": "Community of IT professionals that promotes workshops, book clubs, and online events, focusing on collaborative learning, inclusion, and support for minority groups.",
    "projects.diningBoard.description": "Business Intelligence dashboard for restaurant chains and franchises. Consolidates operational and financial metrics (KPIs, comparative charts, analytical tables, contextual filters) into a professional interface. Study project with 100% mocked data.",
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
    "contact.connect": "Connect with me",
    "contact.let": "Let's build something amazing",
    "contact.fullDescription": "I'm always excited to work on innovative projects and collaborate with talented teams. Whether you have a project in mind or just want to connect, feel free to reach out!",

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
    "hero.description": "Desenvolvedor front-end brasileiro, 28 anos, formado em Análise e Desenvolvimento de Sistemas pela FIAP, com perfil analítico, proativo e comunicativo. \nNa Dinx, startup do Transfero Group, sou responsável por toda a frente web da empresa e atuo também na frente mobile, em seis produtos (do Back Office ao site de assinatura e ao app dos pais) com React, Next.js, TypeScript, React Native, Tailwind, Shadcn/UI e Ant Design. \nIniciei minha carreira em 2023 na PUAH Consultoria, traduzindo requisitos de negócio e design em interfaces acessíveis e responsivas. No dia a dia, integro APIs REST, sigo práticas de Spec-Driven Development e cubro fluxos críticos com testes.",
    "hero.cta": "Entre em Contato",

    // Experience
    "experience.title": "Experiência",
    "experience.job1.title": "Desenvolvedor Front-End",
    "experience.job1.company": "Transfero Group",
    "experience.job1.period": "05/2024 - atualmente",
    "experience.job1.description":
      "Responsável por toda a frente web da empresa e atuando também na frente mobile, em 6 projetos:",
    "experience.job1.highlight1":
      "Back Office: lidero o desenvolvimento em React, TypeScript, Ant Design, Axios e Konva, em conjunto com CTO e PO.",
    "experience.job1.highlight2":
      "Site de assinatura: desenvolvi a plataforma onde o usuário contrata o produto, em React, Next.js, Shadcn/UI, Tailwind, Zustand, Zod e React Hook Form.",
    "experience.job1.highlight3":
      "Site de formulário: migrei de WordPress/Elementor para React, Astro e Zod, mantendo a versão anterior durante a transição.",
    "experience.job1.highlight4":
      "App mobile dos pais: desenvolvo features e correções em React Native, Expo, TypeScript, NativeWind e React Query.",
    "experience.job1.highlight5": "Site institucional: realizo a manutenção em WordPress/Elementor.",
    "experience.job1.highlight6": "E-mails: desenvolvimento de e-mails transacionais e de marketing em HTML e CSS puro.",
    "experience.job1.footer":
      "Colaboro com as equipes de back-end conforme necessário para garantir a integração e as especificidades de cada produto.",
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
    "skills.languageSkills.spanish": "Espanhol: C1",
    "skills.languageSkills.english": "Inglês: B2", 
    "skills.soft": "Habilidades Interpessoais",
    "skills.soft.proactive": "Proativo",
    "skills.soft.analytical": "Analítico",
    "skills.soft.sociability": "Altamente sociável",
    "skills.soft.agile_methodology": "Metodologias ágeis",
    "skills.soft.time_management": "Gestão de tempo",
    
    // Projects
    "projects.title": "Projetos em Destaque",
    "projects.073Labs.description": "A 073 Labs é um estúdio de software focado na criação de produtos digitais e soluções sob medida, unindo tecnologia, design e experimentação para desenvolver sistemas escaláveis e de impacto.",
    "projects.ananaPayroll.description": "Ananá Payroll é uma plataforma de folha de pagamento Web3 e trustless que usa stablecoins para garantir pagamentos transparentes, seguros e confiáveis entre empresas e trabalhadores.",
    "projects.indieGamePass.description": "O Indie Game Pass é uma plataforma de assinatura que dá acesso mensal a jogos indie exclusivos, permitindo aos usuários participar do desenvolvimento por meio de votações e da comunidade.",
    "projects.neuro21.description": "Neuro21 é uma plataforma Web3 gamificada que ajuda pessoas neurodivergentes a criarem hábitos mais saudáveis por meio de metas diárias, recompensando-as com tokens que podem ser trocados por sessões de terapia.",
    "projects.1010.description": "Jogo de quebra-cabeça inspirado no 1010!. Arraste peças para um tabuleiro 10x10, complete linhas ou colunas inteiras para limpá-las e faça combos para pontos extras. O jogo termina quando nenhuma peça cabe mais.",
    "projects.siteDeEsperaDinx.description": "O site de espera da Dinx é uma página estática do projeto ecossistema de educação financeira infantil. Ele funciona como ambiente provisório até o lançamento oficial.",
    "projects.brazilIT.description": "Comunidade de profissionais de TI que promove oficinas, clubes de leitura e eventos online, com foco em aprendizado colaborativo, inclusão e apoio a grupos minoritários.",
    "projects.diningBoard.description": "Dashboard de Business Intelligence para redes de restaurantes e franquias. Consolida métricas operacionais e financeiras (KPIs, gráficos comparativos, tabelas analíticas, filtros contextuais) em uma interface profissional. Projeto de estudo com dados 100% mockados.",
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
    "contact.connect": "Conecte-se comigo",
    "contact.let": "Vamos Construir Algo Incrível",
    "contact.fullDescription": "Adoro trabalhar em projetos inovadores e fazer parte de equipes talentosas. Se você tem algum projeto em mente ou só quer conversar, entre em contato!",


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
    "hero.description": "Desarrollador front-end brasileño, 28 años, graduado en Análisis y Desarrollo de Sistemas en FIAP, con perfil analítico, proactivo y comunicativo. \nEn Dinx, startup del Transfero Group, soy responsable de todo el front-end web de la empresa y también participo en el front-end mobile, en seis productos (del Back Office al sitio de suscripción y a la app de los padres) con React, Next.js, TypeScript, React Native, Tailwind, Shadcn/UI y Ant Design. \nInicié mi carrera en 2023 en PUAH Consultoria, traduciendo requisitos de negocio y diseño en interfaces accesibles y responsivas. En el día a día integro APIs REST, sigo prácticas de Spec-Driven Development y cubro flujos críticos con pruebas.",
    "hero.cta": "Contactar",

    // Experience
    "experience.title": "Experiencia",
    "experience.job1.title": "Desarrollador Front-End",
    "experience.job1.company": "Transfero Group",
    "experience.job1.period": "May 2024 - Presente",
    "experience.job1.description":
      "Responsable de todo el front-end web de la empresa y participando también en el front-end mobile, en 6 proyectos:",
    "experience.job1.highlight1":
      "Back Office: lidero el desarrollo en React, TypeScript, Ant Design, Axios y Konva, junto con el CTO y el PO.",
    "experience.job1.highlight2":
      "Sitio de suscripción: desarrollé la plataforma donde el usuario contrata el producto, en React, Next.js, Shadcn/UI, Tailwind, Zustand, Zod y React Hook Form.",
    "experience.job1.highlight3":
      "Sitio de formulario: lo migré de WordPress/Elementor a React, Astro y Zod, manteniendo la versión anterior durante la transición.",
    "experience.job1.highlight4":
      "App mobile de los padres: desarrollo features y correcciones en React Native, Expo, TypeScript, NativeWind y React Query.",
    "experience.job1.highlight5": "Sitio institucional: realizo el mantenimiento en WordPress/Elementor.",
    "experience.job1.highlight6": "E-mails: desarrollo de e-mails transaccionales y de marketing en HTML y CSS puro.",
    "experience.job1.footer":
      "Colaboro con los equipos de back-end según sea necesario para garantizar la integración y las especificidades de cada producto.",
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
    "skills.languageSkills.spanish": "Español: C1",
    "skills.languageSkills.english": "Inglés: B2", 
    "skills.soft": "Habilidades Personales",
    "skills.soft.proactive": "Proactivo",
    "skills.soft.analytical": "Analítico",
    "skills.soft.sociability": "Altamente sociable",
    "skills.soft.agile_methodology": "Metodologías agiles",
    "skills.soft.time_management": "Gestión del tiempo",

    // Projects
    "projects.title": "Proyectos Destacados",
    "projects.073Labs.description": "073 Labs es un estudio de software enfocado en crear productos digitales y soluciones a medida, combinando tecnología, diseño y experimentación para desarrollar sistemas escalables y de alto impacto.",
    "projects.ananaPayroll.description": "Ananá Payroll es una plataforma de nómina Web3 y trustless que utiliza stablecoins para garantizar pagos transparentes, seguros y confiables entre empresas y trabajadores.",
    "projects.indieGamePass.description": "Indie Game Pass es una plataforma de suscripción que ofrece acceso mensual a juegos indie exclusivos, permitiendo a los usuarios participar en el desarrollo a través de votaciones y la comunidad de IGP.",
    "projects.neuro21.description": "Neuro21 es una plataforma Web3 gamificada que ayuda a personas neurodivergentes a desarrollar hábitos más saludables mediante metas diarias, recompensándolas con tokens que pueden canjear por sesiones de terapia.",
    "projects.1010.description": "Juego de puzzles inspirado en el 1010!. Arrastra piezas a un tablero 10x10, completa filas o columnas enteras para limpiarlas y encadena combos para puntos extra. El juego termina cuando ninguna pieza encaja.",
    "projects.siteDeEsperaDinx.description": "El sitio de espera de Dinx es una página estática del proyecto de ecosistema de educación financiera infantil. Funciona como un entorno provisional hasta el lanzamiento oficial.",
    "projects.brazilIT.description": "Comunidad de profesionales de TI que impulsa talleres, clubes de lectura y eventos en línea, con enfoque en aprendizaje colaborativo, inclusión y apoyo a grupos minoritarios.",
    "projects.diningBoard.description": "Dashboard de Business Intelligence para cadenas de restaurantes y franquicias. Consolida métricas operativas y financieras (KPIs, gráficos comparativos, tablas analíticas, filtros contextuales) en una interfaz profesional. Proyecto de estudio con datos 100% simulados.",
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
    "contact.connect": "Conéctate conmigo",
    "contact.let": "Construyamos Algo Increíble",
    "contact.fullDescription": "Me encanta trabajar en proyectos innovadores y formar parte de equipos talentosos. Si tenés algún proyecto en mente o simplemente querés charlar, escribime!",

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
