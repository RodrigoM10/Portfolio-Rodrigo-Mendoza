import { AllProjects } from "./components/AllProjects";

export const portfolioData = {
  es: {
    hero: {
      name: "Rodrigo Mendoza",
      title: "Full Stack Developer | Ingeniero Químico",
      description: "Conectando sistemas físicos y necesidades de negocio con inteligencia digital. Creo herramientas tecnológicas escalables integrando desarrollo fullstack, ciencia de datos y automatización.",
      location: "Tucumán, Argentina",
      available: "DISPONIBLE PARA TRABAJAR",
      btnProjects: "VER PROYECTOS",
      btnContact: "CONTACTO"
    },
    about: {
        label: "01 / Sobre mí",
        titleLine1: "Donde la Ingeniería",
        titleHighlight: "evoluciana en",
        titleLine2: "software y datos",
        description1: "Ingeniero Químico con sólida experiencia en desarrollo fullstack y una creciente especialización en Data Science y Data Engineering. Interesado en actuar como puente entre los desafíos del mundo real y la inteligencia digital, conectando sistemas físicos con soluciones tecnológicas.",
        description2: "Desde el modelado y simulación de reactores como tesis de grado, hasta pipelines en la nube, plataformas de e-commerce, aplicaciones móviles y sistemas de gestión empresarial; construyo soluciones que traducen el conocimiento técnico en herramientas de negocio escalables.",
        stats: [
            { value: "5+", label: "2020/2021" },
            { value: "10+", label: "Proyectos" },
            { value: "3", label: "IT|Negocios|Industria Qca." } 
        ],
        stackLabel: "Stack Tecnológico",
        stackCategories: ["Desarrollo Web", "Datos", "Ingeniería"]
    },
   projectsSection: {
      label: "02 / Proyectos",
      title: "Trabajos Destacados",
      items: [
        {
          id: "reactor",
          title: "Reactor Batch Modeling & Simulation",
          subtitle: "Python · Simulación Industrial",
          description: "Proyecto de Tesis de Ingeniería: Desarrollo de un modelo de simulación interactivo en Python para predecir y optimizar el comportamiento termodinámico de un reactor químico.",
          tags: ["Python", "React", "Ing. Química", "Simulación"],
          link: "https://batch-reactor-front.vercel.app/",
          linkGitHub: "https://github.com/RodrigoM10/Batch-Reactor-Simulate",
        },
        {
          id: "telemetry",
          title: "Digital Twin & Cloud SCADA HMI",
          subtitle: "Digital Twin · BigQuery · Python ",
          description: "Este proyecto es una implementación completa End-to-End de 3 GemeloS Digitales para equipamiento industrial. Fusiona la ingeniería de procesos con el Data Engineering moderno, simulando el comportamiento físico y el control automático (PID) de sistemas reales, mientras transmite telemetría asíncrona a la nube para su monitoreo y análisis en una interfaz web de alto rendimiento.",
          tags: ["Python", "BigQuery", "Data Eng", "Ing. Química"],
          link: "https://digital-twin-wine.vercel.app/",
          linkGitHub: "https://github.com/RodrigoM10/Digital-Twin"
        },
        {
          id: "automation",
          title: "Automatización de Facturación - In Process",
          subtitle: "Python · Scripts · SM Contenedores",
          description: "Digitalización de operaciones logísticas y desarrollo de pipelines para automatizar la facturación mensual y la gestión administrativa de la empresa.",
          tags: ["Python", "Automatización", "Logística"],
          link: "",
          linkGitHub: ""
        },
        {
          id: "b2b",
          title: "Sistema de Gestión Interno - In Process ",
          subtitle: "Full-Stack · SM Contenedores",
          description: "Desarrollo e implementación de módulos de software escalables para un sistema de gestión corporativa. Trackeo en tiempo real y logistica.",
          tags: ["Web Dev", "Software Arch", "B2B"],
          link: "",
          linkGitHub: ""
        },
      ],
      allProjects: [
        {
          id: "reactor",
          title: "Reactor Batch Modeling & Simulation",
          subtitle: "Python · Simulación Industrial",
          description: "Proyecto de Tesis de Ingeniería: Desarrollo de un modelo de simulación interactivo en Python para predecir y optimizar el comportamiento termodinámico de un reactor químico.",
          tags: ["Python", "React", "Ing. Química", "Simulación"],
          link: "https://batch-reactor-front.vercel.app/",
          linkGitHub: "https://github.com/RodrigoM10/Batch-Reactor-Simulate",
        },
        {
          id: "telemetry",
          title: "Digital Twin & Cloud SCADA HMI",
          subtitle: "Digital Twin · BigQuery · Python ",
          description: "Este proyecto es una implementación completa End-to-End de 3 GemeloS Digitales para equipamiento industrial. ",
          tags: ["Python", "BigQuery", "Data Eng", "Ing. Química"],
          link: "https://digital-twin-wine.vercel.app/",
          linkGitHub: "https://github.com/RodrigoM10/Digital-Twin"
        },
        {
          id: "automation",
          title: "Automatización de Facturación - In Process",
          subtitle: "Python · Scripts · SM Contenedores",
          description: "Digitalización de operaciones logísticas y desarrollo de pipelines para automatizar la facturación mensual y la gestión administrativa de la empresa.",
          tags: ["Python", "Automatización", "Logística"],
          link: "",
          linkGitHub: ""
        },
        {
          id: "smContendores-web",
          title: "SM Contenedores - Web Platform",
          subtitle: "React · Tailwind · SM Contenedores",
          description: "Plataforma web oficial para SM Contenedores, empresa especializada en el servicio de alquiler de contenedores y gestión de residuos para obras de construcción, industrias y particulares en San Miguel de Tucumán y alrededores.",
          tags: ["TypeScript", "Comercio", "Logística"],
          link: "https://www.smcontenedores.com/",
          linkGitHub: "https://github.com/RodrigoM10/SM-CONTENEDORES-WEB"
        },
        {
          id: "gemsa",
          title: "Gemsa Admin & e-Commerce",
          subtitle: "Next.js · Fullstack · RollingCode",
          description: "Digitalización de operaciones logísticas y desarrollo de pipelines para automatizar la facturación mensual y la gestión administrativa de la empresa.",
          tags: ["TypeScript", "e-commerce", "teamWork"],
          link: "https://gemsa-dev-3ev2.vercel.app/",
          linkGitHub: "https://github.com/RodrigoM10/gemsaDev"
        },
        {
          id: "Series&TV",
          title: "Series & TV POP",
          subtitle: "Full-Stack ",
          description: "Desarrollo e implementación de módulos de software escalables para un sistema de gestión corporativa (ERP) trabajando de forma remota en equipo.",
          tags: ["Next.js", "Typescript", "Taiilwind css", "MongoDB"],
          link: "https://app-movie-v2.vercel.app/",
          linkGitHub: "https://github.com/RodrigoM10/AppMovie-V2"
        },
          {
          id: "Portfolio-1",
          title: "Resume",
          subtitle: "HTML5 · CSS",
          description: "Portafolio web personal (2022) creado como carta de presentación digital para exhibir mi formación, trayectoria y proyectos como desarrollador. Este proyecto fue galardonado con el 3.º puesto en el Challenge de Portfolios de la comunidad de Rolling Code School.",
          tags: ["Web Dev", "SPA", "Challenge"],
          link: "https://rodrigomendoza-cv.netlify.app/",
          linkGitHub: "https://github.com/RodrigoM10/Resume"
        },
         {
          id: "rick&morty",
          title: "Rick & Morty Multiverse Explorer",
          subtitle: "React (Create React App) · Context API",
          description: "Esta es una aplicación web interactiva desarrollada con React que consume la Rick and Morty API oficial para explorar el vasto multiverso de la serie. Este proyecto destaca por una arquitectura de componentes limpia, manejo de estado global y la implementación de filtros dinámicos complejos.",
          tags: ["Web Dev", "Diseño Modular", "Custom Hooks"],
          link: "https://rick-and-morty-api-beta.vercel.app/",
          linkGitHub: "https://github.com/RodrigoM10/Rick-and-Morty-API"
        },
         {
          id: "rollingWine",
          title: "Rolling Winery",
          subtitle: "Full-Stack · MERN",
          description: "Rolling Winery - Proyecto Final Se trata de una web e-commerce de bebidas buotique. Cuanta con una landing page, una tienda online donde puedes agregar productos al carrito y a una lista de favoritos. Tambien cuenta con inicio de sesion, registro de usuarios, seccion de contacto y nosotros. ",
          tags: ["Web Dev", "GIT", "MERN"],
          link: "https://proyecto-final-rolling.vercel.app/",
          linkGitHub: "https://github.com/RodrigoM10/proyecto-final-rolling"
        },
      
        {
          id: "TLTurismo",
          title: "Travel Life Turismo 2021",
          subtitle: "THML · CSS",
          description: "Proyecto grupal utilizando HTML5, CSS y BOOSTRAP. Blog para el viajero, destinos, promociones de precios, hoteles convenientes y vuelos baratos. ",
          tags: ["Web Blog", "HTML", "CSS", "Bootstrap"],
          link: "https://travelife-proyecto-1.netlify.app",
          linkGitHub: "https://github.com/RodrigoM10/Proyecto-Grupal-"
        },
        {
          id: "Proyecto-Notas",
          title: "Death Notes",
          subtitle: "HTML5 · CSS",
          description: "Desarrollo e implementación de módulos de software escalables para un sistema de gestión corporativa (ERP) trabajando de forma remota en equipo.",
          tags: ["Block de Notas", "HTML", "CSS", "Bootstrap"],
          link: "https://deathsnotes-proyecto.netlify.app/",
          linkGitHub: "https://github.com/RodrigoM10/Proyecto-Notas"
        },
        {
          id: "kimetsu",
          title: "Kimetsu no Yaiba - Personajes",
          subtitle: "THML · CSS",
          description: "Mi primer proyecto: Kimetsu no Yaiba - Personajes! Esta es una aplicación web estática, sencilla y altamente visual desarrollada exclusivamente con HTML5 y CSS3",
          tags: ["Learning", "HTML", "CSS"],
          link: "https://kimetsurodrisenpai.netlify.app/",
          linkGitHub: "https://github.com/RodrigoM10/Proyecto-KIMETSU"
        },
      ]
    },
    experienceSection: {
      label: "03 / Experiencia",
      title: "Trayectoria",
      typeConfig: {
        current: { label: "Actualidad", color: "#00D084" },
        remote: { label: "Remoto", color: "#5B9BD5" },
        onsite: { label: "Presencial", color: "#E8965A" },
        education: { label: "Educación", color: "#888" },
      },
      items: [
        {
          period: "Oct '24 – Actualidad",
          role: "Full Stack Developer & Cloud Engineer",
          company: "SM Contenedores · Tucumán",
          type: "current",
          description: "Desarrollo de backend en Python para automatizar el ciclo de facturación. Diseño y despliegue de telemetría en la nube, y construcción integral del sitio web corporativo.",
          tags: ["Python", "Google Cloud", "Full Stack", "Automatización"],
          highlight: true,
        },
        {
          period: "Sep '24 – Oct '25",
          role: "Process Engineer & Data Analyst Assistant JR",
          company: "Citromax S.A.C.I. · Tucumán",
          type: "onsite",
          description: "Creación de pipelines automatizados en Python para la ingesta y limpieza de altos volúmenes de datos de producción. Monitoreo de KPIs industriales mediante dashboards interactivos.",
          tags: ["Python", "Data Engineering", "Power BI", "KPIs"],
          highlight: false,
        },
        {
          period: "Oct '22 – Feb '24",
          role: "Full Stack Web Developer & Tutor",
          company: "Rolling Code · Tucumán",
          type: "hybrid",
          description: "Desarrollo end-to-end de aplicaciones web escalables con el ecosistema JavaScript (React.js/Next.js y Node.js). Mentoría técnica, code reviews y facilitación de sesiones de live coding.",
          tags: ["React.js", "Node.js", "APIs REST", "Code Review"],
          highlight: false,
        },
        {
          period: "Mar '22 – Sept '22",
          role: "Desarrollador de Software JR",
          company: "WeKnow INC · Remoto",
          type: "remote",
          description: "Integración de sistemas ERP/CRM conectando infraestructuras web (WordPress/MySQL) con aplicaciones móviles nativas desarrolladas en Android Studio.",
          tags: ["Java/Kotlin", "MySQL", "ERP/CRM", "Integración"],
          highlight: false,
        },
        {
          period: "Feb '17 – Dic '21",
          role: "Gerente en Transformación Digital",
          company: "SM Contenedores · Tucumán",
          type: "onsite",
          description: "Migración de sistemas tradicionales hacia ecosistemas digitales. Implementación de dashboards para el control financiero y optimización de la cadena de suministro en tiempo real.",
          tags: ["Transformación Digital", "Business Intelligence", "Liderazgo"],
          highlight: false,
        }
      ]
    },
    educationSection: {
      label: "04 / Educación",
      title: "Formación Académica",
      items: [
      {
        degree: "Cloud Data Engineering",
        institution: "ITBA",
        period: "May 2026 - Actualidad",
        description: "Programa avanzado enfocado en el diseño, despliegue y mantenimiento de arquitecturas de datos escalables en la nube para entornos empresariales.",
        tags: ["Cloud", "Data Engineering", "Arquitectura"],
        iconColor: "#9B59B6"
      },
      {
        degree: "Diplomado en Industria 4.0 (Python & Data Science)",
        institution: "Ingelearn",
        period: "Dic 2025 - Abr 2026",
        description: "Especialización en la aplicación del ecosistema de Python y ciencia de datos para la digitalización, análisis y optimización de procesos industriales.",
        tags: ["Industria 4.0", "Python", "Data Science"],
        iconColor: "#F1C40F"
      },
      {
        degree: "Desarrollo Web Full-Stack",
        institution: "Rolling Code School",
        period: "2021",
        description: "Formación intensiva en creación de aplicaciones web escalables, arquitecturas frontend y backend, y gestión de bases de datos.",
        tags: ["React", "Node.js", "Arquitectura Web"],
        iconColor: "#5B9BD5" 
      },
      {
        degree: "Ingeniería Química",
        institution: "Universidad Nacional de Tucumán (UNT)",
        period: "Agosto 2025",
        description: "Formación integral en procesos físicos, químicos, termodinámica y operaciones unitarias. Proyecto de tesis: Desarrollo de un Simulador de Reactor Batch interactivo utilizando Python.",
        tags: ["Termodinámica", "Simulación", "Python", "Procesos"],
        iconColor: "#E8965A"
      },
    ]
    },
    contactSection: {
      label: "04 / Contacto",
      titleLine1: "Construyamos algo",
      titleHighlight: "juntos.",
      description: "Disponible para proyectos remotos en desarrollo de datos, automatización y full-stack. Ya sea un pipeline en la nube, un modelo de simulación o un sistema de gestión completo, me encantaría conocer tu propuesta.",
      cta: "ENVIAR MENSAJE",
      status: "Disponible",
      copyright: "Rodrigo Mendoza · Python Data Developer & Ingeniero Químico"
    }
  },
  en: {
    hero: {
    name: "Rodrigo Mendoza",
    title: "Software & Data Developer | Chemical Engineer",
    description: "Connecting physical systems and business needs with digital intelligence. I create scalable technology tools integrating fullstack development, data science and automation.",
    location: "Tucumán, Argentina",
    available: "OPEN TO WORK",
    btnProjects: "PROJECTS",
    btnContact: "CONTACT"
  },
  about: {
    label: "01 / About",
      titleLine1: "Where the Engineering",
      titleHighlight: "evolves in",
      titleLine2: "software and data",
      description1: "Chemical Engineer with strong experience in fullstack development and a growing specialization in Data Science and Data Engineering. Interested in acting as a bridge between real-world challenges and digital intelligence, connecting physical systems with technological solutions.",
      description2: "From reactor modeling and simulation as a thesis to cloud pipelines, e-commerce platforms, mobile applications and business management systems, I build solutions that translate technical knowledge into scalable business tools.",
      stats: [
        { value: "5+", label: "2021/2022" },
        { value: "10+", label: "Projects" },
        { value: "3", label: "IT | Businesses | Chemical Industry" }
      ],
      stackLabel: "Technical Stack",
      stackCategories: ["Web Dev", "Data", "Engineering"]
  },
  projectsSection: {
      label: "02 / Projects",
      title: "Selected Work",
      items: [
        {
          id: "reactor",
          title: "Batch Reactor Modeling & Simulation",
          subtitle: "Python · Industrial Simulation",
          description: "Engineering Thesis Project: Development of an interactive simulation model in Python to predict and optimize the thermodynamic behavior of a chemical reactor.",
          tags: ["Python", "React", "Chem Eng", "Simulation"],
          link: "https://batch-reactor-front.vercel.app/",
          linkGitHub: "https://github.com/RodrigoM10/Batch-Reactor-Simulate",
        },
        {
          id: "telemetry",
          title: "Digital Twin & Cloud SCADA HMI",
          subtitle: "Digital Twin · BigQuery · Python",
          description: "End-to-End implementation of 3 Digital Twins for industrial equipment. It bridges process engineering with modern Data Engineering, simulating the physical behavior and automatic control (PID) of real systems, while streaming asynchronous telemetry to the cloud for monitoring and analysis on a high-performance web interface.",
          tags: ["Python", "BigQuery", "Data Eng", "Chem Eng"],
          link: "https://digital-twin-wine.vercel.app/",
          linkGitHub: "https://github.com/RodrigoM10/Digital-Twin"
        },
        {
          id: "automation",
          title: "Billing Automation Suite - In Process",
          subtitle: "Python · Scripts · SM Contenedores",
          description: "Digitalization of logistics operations and development of pipelines to automate monthly billing and administrative management for the company.",
          tags: ["Python", "Automation", "Logistics"],
          link: "",
          linkGitHub: ""
        },
        {
          id: "b2b",
          title: "Internal Management System - In Process",
          subtitle: "Full-Stack · SM Contenedores",
          description: "Development and implementation of scalable software modules for a corporate management system. Features include real-time tracking and logistics.",
          tags: ["Web Dev", "Software Arch", "B2B"],
          link: "",
          linkGitHub: ""
        },
      ],
      allProjects: [
        {
          id: "reactor",
          title: "Batch Reactor Modeling & Simulation",
          subtitle: "Python · Industrial Simulation",
          description: "Engineering Thesis Project: Development of an interactive simulation model in Python to predict and optimize the thermodynamic behavior of a chemical reactor.",
          tags: ["Python", "React", "Chem Eng", "Simulation"],
          link: "https://batch-reactor-front.vercel.app/",
          linkGitHub: "https://github.com/RodrigoM10/Batch-Reactor-Simulate",
        },
        {
          id: "telemetry",
          title: "Digital Twin & Cloud SCADA HMI",
          subtitle: "Digital Twin · BigQuery · Python",
          description: "This project is a complete End-to-End implementation of 3 Digital Twins for industrial equipment.",
          tags: ["Python", "BigQuery", "Data Eng", "Chem Eng"],
          link: "https://digital-twin-wine.vercel.app/",
          linkGitHub: "https://github.com/RodrigoM10/Digital-Twin"
        },
        {
          id: "automation",
          title: "Billing Automation Suite - In Process",
          subtitle: "Python · Scripts · SM Contenedores",
          description: "Digitalization of logistics operations and development of pipelines to automate monthly billing and administrative management for the company.",
          tags: ["Python", "Automation", "Logistics"],
          link: "",
          linkGitHub: ""
        },
        {
          id: "smContendores-web",
          title: "SM Contenedores - Web Platform",
          subtitle: "React · Tailwind · SM Contenedores",
          description: "Official web platform for SM Contenedores, a company specialized in container rental and waste management services for construction sites, industries, and individuals in San Miguel de Tucumán and surrounding areas.",
          tags: ["TypeScript", "Commerce", "Logistics"],
          link: "https://www.smcontenedores.com/",
          linkGitHub: "https://github.com/RodrigoM10/SM-CONTENEDORES-WEB"
        },
        {
          id: "gemsa",
          title: "Gemsa Admin & e-Commerce",
          subtitle: "Next.js · Full-Stack · RollingCode",
          description: "Digitalization of logistics operations and development of pipelines to automate monthly billing and administrative management for the company.",
          tags: ["TypeScript", "E-commerce", "Teamwork"],
          link: "https://gemsa-dev-3ev2.vercel.app/",
          linkGitHub: "https://github.com/RodrigoM10/gemsaDev"
        },
        {
          id: "Series&TV",
          title: "Series & TV POP",
          subtitle: "Full-Stack",
          description: "Development and implementation of scalable software modules for a corporate management system (ERP) working remotely within a team.",
          tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
          link: "https://app-movie-v2.vercel.app/",
          linkGitHub: "https://github.com/RodrigoM10/AppMovie-V2"
        },
        {
          id: "Portfolio-1",
          title: "Resume",
          subtitle: "HTML5 · CSS",
          description: "Personal web portfolio (2022) created as a digital cover letter to showcase my background, career, and projects as a developer. This project was awarded 3rd place in the Rolling Code School community's Portfolio Challenge.",
          tags: ["Web Dev", "SPA", "Challenge"],
          link: "https://rodrigomendoza-cv.netlify.app/",
          linkGitHub: "https://github.com/RodrigoM10/Resume"
        },
        {
          id: "rick&morty",
          title: "Rick & Morty Multiverse Explorer",
          subtitle: "React (Create React App) · Context API",
          description: "This is an interactive web application developed with React that consumes the official Rick and Morty API to explore the vast multiverse of the series. This project stands out for its clean component architecture, global state management, and the implementation of complex dynamic filters.",
          tags: ["Web Dev", "Modular Design", "Custom Hooks"],
          link: "https://rick-and-morty-api-beta.vercel.app/",
          linkGitHub: "https://github.com/RodrigoM10/Rick-and-Morty-API"
        },
        {
          id: "rollingWine",
          title: "Rolling Winery",
          subtitle: "Full-Stack · MERN",
          description: "Rolling Winery - Final Project. This is an e-commerce website for boutique beverages. It features a landing page and an online store where you can add products to a cart and a favorites list. It also includes user login, registration, a contact section, and an about us page.",
          tags: ["Web Dev", "GIT", "MERN"],
          link: "https://proyecto-final-rolling.vercel.app/",
          linkGitHub: "https://github.com/RodrigoM10/proyecto-final-rolling"
        },
        {
          id: "TLTurismo",
          title: "Travel Life Turismo 2021",
          subtitle: "HTML · CSS",
          description: "Group project using HTML5, CSS, and Bootstrap. A travel blog featuring destinations, price promotions, convenient hotels, and cheap flights.",
          tags: ["Web Blog", "HTML", "CSS", "Bootstrap"],
          link: "https://travelife-proyecto-1.netlify.app",
          linkGitHub: "https://github.com/RodrigoM10/Proyecto-Grupal-"
        },
        {
          id: "Proyecto-Notas",
          title: "Death Notes",
          subtitle: "HTML5 · CSS",
          description: "Development and implementation of scalable software modules for a corporate management system (ERP) working remotely within a team.",
          tags: ["Notepad", "HTML", "CSS", "Bootstrap"],
          link: "https://deathsnotes-proyecto.netlify.app/",
          linkGitHub: "https://github.com/RodrigoM10/Proyecto-Notas"
        },
        {
          id: "kimetsu",
          title: "Kimetsu no Yaiba - Characters",
          subtitle: "HTML · CSS",
          description: "My first project: Kimetsu no Yaiba - Characters! This is a simple, highly visual static web application developed exclusively with HTML5 and CSS3.",
          tags: ["Learning", "HTML", "CSS"],
          link: "https://kimetsurodrisenpai.netlify.app/",
          linkGitHub: "https://github.com/RodrigoM10/Proyecto-KIMETSU"
        }
      ]
    },
  experienceSection: {
      label: "03 / Experience",
      title: "Career Timeline",
      typeConfig: {
        current: { label: "Present", color: "#00D084" },
        remote: { label: "Remote", color: "#5B9BD5" },
        onsite: { label: "On-site", color: "#E8965A" },
        education: { label: "Education", color: "#888" },
      },
      items: [
        {
          period: "Oct '24 – Present",
          role: "Full Stack Developer & Cloud Engineer",
          company: "SM Contenedores · Tucumán",
          type: "current",
          description: "Python backend development to automate the billing cycle. Design and deployment of cloud telemetry (BigQuery) and end-to-end corporate website construction.",
          tags: ["Python", "Google Cloud", "Full Stack", "Automation"],
          highlight: true,
        },
        {
          period: "Sep '24 – Oct '25",
          role: "Process Engineer & Data Analyst Assistant JR",
          company: "Citromax S.A.C.I. · Tucumán",
          type: "onsite",
          description: "Creation of automated Python pipelines for the ingestion and cleaning of high-volume production data. Monitoring of industrial KPIs through interactive dashboards.",
          tags: ["Python", "Data Engineering", "Power BI", "KPIs"],
          highlight: false,
        },
        {
          period: "Oct '22 – Feb '24",
          role: "Full Stack Web Developer & Tutor",
          company: "Rolling Code · Tucumán",
          type: "hybrid",
          description: "End-to-end development of scalable web applications using the JavaScript ecosystem (React.js/Next.js and Node.js). Provided technical mentoring, code reviews, and live coding sessions.",
          tags: ["React.js", "Node.js", "REST APIs", "Code Review"],
          highlight: false,
        },
        {
          period: "Mar '22 – Sept '22",
          role: "JR Software Developer",
          company: "WeKnow INC · Remote",
          type: "remote",
          description: "Integration of ERP/CRM systems by connecting existing web infrastructures (WordPress/MySQL) with native mobile applications developed in Android Studio.",
          tags: ["Java/Kotlin", "MySQL", "ERP/CRM", "Integration"],
          highlight: false,
        },
        {
          period: "Feb '17 – Dec '21",
          role: "Digital Transformation Manager",
          company: "SM Contenedores · Tucumán",
          type: "onsite",
          description: "Migration of traditional systems to digital ecosystems. Implementation of dashboards for real-time financial control and supply chain optimization.",
          tags: ["Digital Transformation", "Business Intelligence", "Leadership"],
          highlight: false,
        }
      ]
    },
  educationSection: {
      label: "04 / Education",
      title: "Academic Background",
      items: [
      
      {
      degree: "Cloud Data Engineering",
      institution: "ITBA",
      period: "May 2026 - Present",
      description: "Advanced program focused on designing, deploying, and maintaining scalable cloud data architectures for enterprise environments.",
      tags: ["Cloud", "Data Engineering", "Architecture"],
      iconColor: "#9B59B6"
    },
    {
      degree: "Diploma in Industry 4.0 (Python & Data Science)",
      institution: "Ingelearn",
      period: "Dec 2025 - Apr 2026",
      description: "Specialization in applying the Python ecosystem and data science for the digitalization, analysis, and optimization of industrial processes.",
      tags: ["Industry 4.0", "Python", "Data Science"],
      iconColor: "#F1C40F"
    },
      {
        degree: "Full-Stack Web Development",
        institution: "Rolling Code School",
        period: "2021",
        description: "Intensive training in the creation of scalable web applications, frontend and backend architectures, and database management.",
        tags: ["React", "Node.js", "Web Architecture"],
        iconColor: "#5B9BD5" 
      },
      {
        degree: "Chemical Engineering",
        institution: "Universidad Nacional de Tucumán (UNT)",
        period: "August 2025",
        description: "Comprehensive education in physical and chemical processes, thermodynamics, and unit operations. Degree thesis: Development of an interactive Batch Reactor Simulator using Python.",
        tags: ["Thermodynamics", "Simulation", "Python", "Processes"],
        iconColor: "#E8965A"
      },
    ]
    },
  contactSection: {
      label: "04 / Contact",
      titleLine1: "Let's build something",
      titleHighlight: "together.",
      description: "Available for remote data engineering, automation and full-stack projects. Whether it's a cloud pipeline, a simulation model, or a complete enterprise system — I'd love to hear about it.",
      cta: "GET IN TOUCH",
      status: "Available for work",
      copyright: "Rodrigo Mendoza · Python Data Developer & Chemical Engineer"
    }
  }
};

export type Language = 'es' | 'en';
