import pyudemy from "@/public/certs/python-udemy.png";
import frontMeta from "@/public/certs/front-end.png";
import pyMeta from "@/public/certs/python-meta.png";
import dbIntro from "@/public/certs/db-meta.png";
import cetuc from "@/public/certs/cetuc.jpg";
import zapier from "@/public/certs/zapier.png";
import seo from "@/public/certs/seo-tecnico.png";
import console from "@/public/certs/search-console.png";

export const PERSONAL_INFO = {
  name: "González Leonardo Antonio",
  title: "Candidato a Business Analyst Intern",
  subtitle: "Apasionado en cómo la tecnología y los negocios se unen para crear soluciones",
  email: "your.email@example.com",
  linkedIn: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  whatsapp: "+1234567890",
};

export const EDUCATION = [
  {
    degree: "Licenciatura en Lingüística Inglesa",
    level: "3er año | C1 en inglés",
    institution: "Facultad de Filosofía y Letras",
    year: "En progreso",
  },
  {
    degree: "Formación en Data Science e Inteligencia Artificial",
    level: "",
    institution: "Anyone AI",
    year: "En progreso",
  },
  {
    degree: "Secundario completo",
    level: "",
    institution: "Instituto San Pedro",
    year: "2020",
  },
  {
    degree: "Curso de Inglés",
    level: "5to año de adolescentes | B2 en inglés",
    institution: "A.T.I.C.A.N.A",
    year: "2018",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Aprendiendo análisis de datos con Python, NumPy y Pandas",
    issuer: "Udemy",
    date: "2025",
    description: "Desde la limpieza de datos hasta la visualización avanzada usando bibliotecas de Python.",
    image: pyudemy.src,
    link: "https://www.udemy.com/certificate/UC-0810c123-c65e-4526-8765-d2fade39f28b/",
  },
  {
    title: "Certificado Profesional de Desarrollo Front-End",
    issuer: "Coursera - Meta",
    date: "2024",
    description: "Programa intensivo de 9 cursos diseñado por Meta. Aprendí a construir aplicaciones web interactivas con HTML5, CSS, JavaScript y React, a utilizar herramientas como Git, GitHub y Figma, y completé proyectos prácticos y un proyecto final con una app front-end real.",
    image: frontMeta.src,
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/xyz"
  },
  {
    title: "Programación en Python",
    issuer: "Coursera - Meta",
    date: "2024",
    description: "Lógica de programación, estructuras de control y desarrollo en Python.",
    image: pyMeta.src,
    link: "https://www.coursera.org/account/accomplishments/certificate/xyz",
  },
  {
    title: "Introducción a bases de datos",
    issuer: "Coursera - Meta",
    date: "2024",
    description: "Fundamentos de modelado de datos, SQL y diseño relacional.",
    image: dbIntro.src,
    link: "https://www.coursera.org/account/accomplishments/certificate/xyz",
  },
  {
    title: "Operador de PC Avanzado",
    issuer: "Centro de Estudios Del Tucuman (CETUC)",
    date: "2019",
    description: "Manejo avanzado de herramientas de oficina: Word, Excel, Access y PowerPoint.",
    image: cetuc.src,
    link: "https://drive.google.com/file/d/1-Kd2IBUNzazj3ix6W7T5yaKkANAuXwyn/view?usp=drive_link",
  },
  {
    title: "Automatización con Zapier",
    issuer: "Platzi",
    date: "2024",
    description: "Automatización de flujos de trabajo sin código usando Zapier.",
    image: zapier.src,
    link: "https://drive.google.com/file/d/13YYDRVed2uLZ9PHRfXfTGgvsigDYQAHK/view?usp=drive_link",
  },
  {
    title: "Google Search Console",
    issuer: "Platzi",
    date: "2024",
    description: "Uso de Google Search Console para análisis de tráfico y rendimiento de sitios web.",
    image: console.src,
    link: "https://platzi.com/p/diploma-search-console",
  },
  {
    title: "SEO Técnico",
    issuer: "Platzi",
    date: "2024",
    description: "Implementación de estrategias técnicas para optimización SEO en sitios web.",
    image: seo.src,
    link: "https://platzi.com/p/diploma-seo-tecnico",
  },
];

export const SKILLS = [
  {
    category: "Programación",
    items: ["Python", "SQL", "JavaScript", "TypeScript", "HTML"],
  },
  {
    category: "Análisis de datos",
    items: ["NumPy", "Pandas", "Excel"],
  },
  {
    category: "Bases de datos",
    items: ["MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Desarrollo web",
    items: ["Next.js", "React", "CSS"],
  },
  {
    category: "Automatización de procesos",
    items: ["Zapier", "Make.com"],
  },
  {
    category: "Lenguajes",
    items: ["Inglés (C1-C2)", "Francés A1"],
  },
];

export const PROJECTS = [
  {
    title: "Blog full-stack",
    description:
      "Una plataforma completa de blog construida con Next.js, React y MongoDB como base de datos. Incluye autenticación de usuarios, gestión de contenido y diseño responsive.",
    status: "En desarrollo",
    features: ["Next.js", "React", "MongoDB", "TypeScript"],
    demoLink: "",
    githubLink: "https://github.com/LeonAntGon/blog",
    image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Periferia Digital",
    description:
      "Proyecto propio de desarrollo web enfocado en marketing digital. Utilicé Next.js para crear un sitio optimizado para SEO, que logré posicionar en Google para el término 'periferia digital'. También integré Google My Business y herramientas de contacto como WhatsApp. Actualmente planeo implementar un Blog y automatizaciones al mismo para adquirir clientes mediante posicionamiento SEO.",
    features: ["Next.js", "SEO", "Google My Business", "Vercel", "UI/UX", "Optimización Web"],
    demoLink: "https://periferiadigital.tech",
    githubLink: "",
    image: "https://github.com/LeonAntGon/PERIFERIA-DIGITAL/blob/main/src/app/opengraph-image.png?raw=true",
  },
  {
    title: "Análisis de datos con Anyone AI",
    description:
      "Transformé datasets en Excel a SQL, extraje insights y creé visualizaciones de datos con Python (NumPy, Pandas, Matplotlib) como parte de mi formación en Anyone AI.",
    status: "Completado",
    features: ["Excel", "SQL", "Python", "NumPy", "Pandas", "Matplotlib", "IA"],
    demoLink: "https://drive.google.com/drive/folders/1lS4bQFQbHI1FQ7KdzbbkB-XjljV0bdh0?usp=drive_link",
    githubLink: "",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export const EXPERIENCE = [
  {
    title: "Desarrollador web freelance",
    company: "Proyectos personales y negocios locales",
    period: "2024",
    responsibilities: [
      "Desarrollo de sitios web a medida para clientes locales, incluyendo negocios pequeños y emprendimientos",
      "Adquisición de clientes a través de llamadas en frío, mensajes de descubrimiento y contacto directo con comercios",
      "Diseño y despliegue de sitios usando Next.js, HTML, CSS y herramientas de despliegue como Vercel",
    ],
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Profesor particular de inglés",
    company: "Clases particulares a domicilio",
    period: "2020–2023",
    responsibilities: [
      "Enseñanza personalizada de inglés a estudiantes de distintas edades: niños, adolescentes y universitarios",
      "Diseño de materiales didácticos adaptados a diferentes niveles y objetivos",
      "Evaluación del progreso y adaptación del enfoque pedagógico según necesidades individuales",
    ],
    image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Profesor de inglés – formación profesional",
    company: "Legislatura de Tucumán",
    period: "2019",
    responsibilities: [
      "Dictado de clases a trabajadores adultos (entre 40 y 50 años) cursando la Licenciatura en Ciencias Políticas",
      "Elaboración de contenidos lingüísticos orientados al ámbito académico y profesional",
      "Evaluación inicial y seguimiento del avance para garantizar el cumplimiento de objetivos formativos",
    ],
    image: "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export const ADDITIONAL_INFO = [
  "Todavía no domino Agile, pero lo aprenderé rápido",
  "Me encanta aprender cosas nuevas cada día",
  "Me considero autodidacta: encuentro lo que necesito, ya sea en español o en inglés, y lo pongo en práctica",
  "Actualmente estoy mejorando mis conocimientos en automatizaciones de procesos con Zapier y Make.com",
];

export const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "Education", href: "#education" },
  { name: "Habilidades", href: "#skills" },
  { name: "Proyectos", href: "#projects" },
  { name: "Experiencia", href: "#experience" },
  { name: "Contacto", href: "#contact" },
];
