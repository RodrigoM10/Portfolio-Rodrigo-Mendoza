import { AllProjects } from "./components/AllProjects";

export const portfolioData = {
  es: {
    hero: {
      name: "Rodrigo Mendoza",
      title: "Software & Data Developer | Ingeniero Químico",
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
        stackCategories: ["Datos", "Desarrollo Web", "Ingeniería"]
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
          link: "https://batch-reactor-front.vercel.app/",
          linkGitHub: "https://github.com/RodrigoM10/Digital-Twin"

        },
        {
          id: "automation",
          title: "Automatización de Facturación",
          subtitle: "Python · Scripts · SM Contenedores",
          description: "Digitalización de operaciones logísticas y desarrollo de pipelines para automatizar la facturación mensual y la gestión administrativa de la empresa.",
          tags: ["Python", "Automatización", "Logística"],
          link: "https://batch-reactor-front.vercel.app/",
          linkGitHub: ""

        },
        {
          id: "b2b",
          title: "Sistema de Gestión Empresarial",
          subtitle: "Full-Stack · We Know Inc",
          description: "Desarrollo e implementación de módulos de software escalables para un sistema de gestión corporativa (ERP) trabajando de forma remota en equipo.",
          tags: ["Web Dev", "Software Arch", "B2B"],
          link: "https://batch-reactor-front.vercel.app/",
          linkGitHub: ""

        },
      ],
      allProjects: [
         {
          id: "project 1",
          title: "Sistema de Gestión Empresarial",
          subtitle: "Full-Stack.",
          description: "Desarrollo e implementación de módulos de software escalables para un sistema de gestión corporativa (ERP) trabajando de forma remota en equipo.",
          tags: ["Web Dev", "Software Arch", "B2B"],
          link: "https://batch-reactor-front.vercel.app/",
          linkGitHub: "https://batch-reactor-front.vercel.app/"
        },
         {
          id: "project 2",
          title: "Sistema de Gestión Empresarial",
          subtitle: "Full-Stack.",
          description: "Desarrollo e implementación de módulos de software escalables para un sistema de gestión corporativa (ERP) trabajando de forma remota en equipo.",
          tags: ["Web Dev", "Software Arch", "B2B"],
          link: "https://batch-reactor-front.vercel.app/",
          linkGitHub: "https://batch-reactor-front.vercel.app/"
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
          period: "Actualidad",
          role: "Digitalización y Gestión",
          company: "SM Contenedores · Tucumán",
          type: "current",
          description: "Liderazgo en la transformación digital de la empresa. Implementación de automatización de facturación mensual y modernización integral de los procesos operativos y administrativos.",
          tags: ["Python", "Automatización", "Gestión Empresarial"],
          highlight: true,
        },
        {
          period: "2023",
          role: "Desarrollador de Software",
          company: "We Know Inc · Proyecto Remoto",
          type: "remote",
          description: "Desarrollo y mantenimiento de módulos para un Sistema de Gestión Empresarial (B2B). Colaboración en equipos remotos para entregar software escalable y funcional.",
          tags: ["Node.js", "React", "Arquitectura de Software"],
          highlight: false,
        },
        {
          period: "2022",
          role: "Tutor / Profesor FullStack",
          company: "RollingCodeSchool · Remoto",
          type: "education",
          description: "Profesor y tutor del curso FullStack. Acompañamiento, corrección de proyectos y formación técnica de nuevos desarrolladores en tecnologías web modernas.",
          tags: ["React", "Educación IT", "Liderazgo"],
          highlight: false,
        },
        {
          period: "2021",
          role: "Asistente de Producción",
          company: "Citromax SACI · Tucumán",
          type: "onsite",
          description: "Control, monitoreo y asistencia técnica directa en los procesos de producción industrial, aplicando los fundamentos de ingeniería química en campo.",
          tags: ["Procesos Industriales", "Ing. Química", "Control"],
          highlight: false,
        },
      ]
    },
    educationSection: {
      label: "04 / Educación",
      title: "Formación Académica",
      items: [
        {
          degree: "Ingeniería Química",
          institution: "Universidad Nacional de Tucumán (UNT)",
          period: "Agosto 2025",
          description: "Formación integral en procesos físicos, químicos, termodinámica y operaciones unitarias. Proyecto de tesis: Desarrollo de un Simulador de Reactor Batch interactivo utilizando Python.",
          tags: ["Termodinámica", "Simulación", "Python", "Procesos"],
          iconColor: "#E8965A"
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
        degree: "Certificación en Google Cloud Data Engineering",
        institution: "Google Cloud / Coursera",
        period: "2026",
        description: "Especialización en creación de pipelines de datos distribuidos, Data Lakes y Data Warehouses usando BigQuery y Dataflow.",
        tags: ["GCP", "BigQuery", "Dataflow"],
        iconColor: "#00D084" 
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
      stackCategories: ["Data", "Web Dev", "Engineering"]
  },
  projectsSection: {
      label: "02 / Projects",
      title: "Selected Work",
      items: [
        {
          id: "telemetry",
          title: "Cloud Telemetry Platform",
          subtitle: "BigQuery · Python · GCP",
          description: "Development of a cloud-native data architecture closing the full lifecycle of a telemetry system, ingesting and processing logs for analysis.",
          tags: ["Python", "BigQuery", "Data Eng"],
          link: "",
          linkGitHub: ""
        },
        {
          id: "reactor",
          title: "Digital Twin: Batch Reactor",
          subtitle: "Python · Industrial Simulation",
          description: "Thesis Project: Development of an interactive simulation model in Python to predict and optimize the thermodynamic behavior of a chemical reactor.",
          tags: ["Python", "Chem Eng", "Simulation"],
          link: "",
          linkGitHub: ""
        },
        {
          id: "automation",
          title: "Billing Automation Suite",
          subtitle: "Python · Scripts · SM Contenedores",
          description: "Digitalization of logistics operations and development of pipelines to automate monthly billing and administrative management for the company.",
          tags: ["Python", "Automation", "Logistics"],
          link: "",
          linkGitHub: ""
        },
        {
          id: "b2b",
          title: "Enterprise Management System",
          subtitle: "Full-Stack · We Know Inc",
          description: "Development and implementation of scalable software modules for a corporate management system (ERP) working remotely within a team.",
          tags: ["Web Dev", "Software Arch", "B2B"],
          link: "",
          linkGitHub: ""
        },
      ],
       allProjects: [
         {
          id: "project 1",
          title: "Sistema de Gestión Empresarial",
          subtitle: "Full-Stack.",
          description: "Desarrollo e implementación de módulos de software escalables para un sistema de gestión corporativa (ERP) trabajando de forma remota en equipo.",
          tags: ["Web Dev", "Software Arch", "B2B"],
          link: "https://batch-reactor-front.vercel.app/",
          linkGitHub: "https://batch-reactor-front.vercel.app/"
        },
         {
          id: "project 2",
          title: "Sistema de Gestión Empresarial",
          subtitle: "Full-Stack.",
          description: "Desarrollo e implementación de módulos de software escalables para un sistema de gestión corporativa (ERP) trabajando de forma remota en equipo.",
          tags: ["Web Dev", "Software Arch", "B2B"],
          link: "https://batch-reactor-front.vercel.app/",
          linkGitHub: "https://batch-reactor-front.vercel.app/"
        },
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
          period: "Present",
          role: "Digitalization & Management",
          company: "SM Contenedores · Tucumán",
          type: "current",
          description: "Leading the company's digital transformation. Implementing monthly billing automation and comprehensively modernizing operational and administrative processes.",
          tags: ["Python", "Automation", "Business Management"],
          highlight: true,
        },
        {
          period: "2023",
          role: "Software Developer",
          company: "We Know Inc · Remote Project",
          type: "remote",
          description: "Development and maintenance of modules for an Enterprise Management System (B2B). Collaborated in remote teams to deliver scalable and functional software.",
          tags: ["Node.js", "React", "Software Arch"],
          highlight: false,
        },
        {
          period: "2022",
          role: "FullStack Tutor / Instructor",
          company: "RollingCodeSchool · Remote",
          type: "education",
          description: "Professor and tutor for the FullStack course. Mentoring, project evaluation, and technical training of new developers in modern web technologies.",
          tags: ["React", "IT Education", "Leadership"],
          highlight: false,
        },
        {
          period: "2021",
          role: "Production Assistant",
          company: "Citromax SACI · Tucumán",
          type: "onsite",
          description: "Control, monitoring, and direct technical assistance in industrial production processes, applying chemical engineering fundamentals in the field.",
          tags: ["Industrial Processes", "Chem Eng", "Control"],
          highlight: false,
        },
      ]
    },
  educationSection: {
      label: "04 / Education",
      title: "Academic Background",
      items: [
        {
          degree: "Chemical Engineering",
          institution: "Universidad Nacional de Tucumán (UNT)",
          period: "August 2025",
          description: "Comprehensive training in physical and chemical processes, thermodynamics, and unit operations. Thesis Project: Development of an interactive Batch Reactor Simulator using Python.",
          tags: ["Thermodynamics", "Simulation", "Python", "Processes"],
          iconColor: "#E8965A"
        },
        {
          degree: "Full-Stack Web Development",
          institution: "Rolling Code School",
          period: "2021",
          description: "Intensive training in building scalable web applications, frontend and backend architectures, and database management.",
          tags: ["React", "Node.js", "Web Architecture"],
          iconColor: "#5B9BD5"
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