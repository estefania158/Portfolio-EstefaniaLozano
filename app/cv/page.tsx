import { Button } from "@/components/ui/button"
import { Download, Briefcase, GraduationCap, Award, Code2, User } from "lucide-react"

export const metadata = {
  title: "Hoja de Vida | Portfolio",
  description: "Experiencia profesional, educación y habilidades",
}

const experience = [
  {
    title: "Plataforma web para la Corporación por la Cultura y el Deporte",
    company: "Desarrollo independiente",
    period: "2025",
    description: "Diseño y desarrollo de una aplicación web fullstack para la gestión de información corporativa y automatización de procesos.",
    achievements: [
      "Este proyecto consiste en una plataforma web integrada para la difusión y gestión administrativa en la Corporación por la Cultura y el Deporte. La aplicación permite registrar, consultar, editar y organizar información relacionada con proveedores, proyectos internos, mensajes de la comunidad y documentos financieros de ingresos y egresos , manejando usuarios con distintos permisos y acceso controlado a la información según su rol. El sistema fue desarrollado utilizando Next.js y Tailwind CSS para el frontend , mientras que Supabase fue utilizado como backend y servicio principal para autenticación (Supabase Auth), almacenamiento (Supabase Storage) y base de datos (PostgreSQL). El objetivo principal del proyecto fue centralizar la información institucional y administrativa en una plataforma web segura, organizada y accesible, optimizando los procesos financieros internos y fortaleciendo el impacto social de la organización"
    ]
  },
  {
    title: "Plataforma web de gestion de procesos empresariales para AUMAL",
    company: "Desarrollo independiente",
    period: "2024",
    description: "Desarrollo de un sistema administrativo e integral enfocado en la gestión de datos en tiempo real y arquitectura serverless.",
    achievements: [
      "Este proyecto consiste en una plataforma web desarrollada para la gestión de mantenimientos empresariales. La aplicación permite registrar, consultar, editar y organizar información relacionada con mantenimientos realizados a diferentes empresas, manejando usuarios con distintos permisos y acceso controlado a la información. El sistema fue desarrollado utilizando HTML, CSS y JavaScript para el frontend, mientras que Firebase fue utilizado como backend y servicio principal para autenticación, almacenamiento y base de datos. El objetivo principal del proyecto fue centralizar la información de mantenimientos en una plataforma web segura, organizada y accesible desde cualquier lugar."
    ]
  }
]

const education = [
  {
    degree: "Ingeniería de Sistemas",
    institution: "UNICIENCIA, Bucaramanga, Santander",
    period: "2022 - 2026",
    description: "Graduada con Grado de Honor."
  },
  {
    degree: "Bachiller con especialidad en Comercio",
    institution: "Colegio Santa Isabel de Hungría, Floridablanca",
    period: "2014 - 2019",
  }
]

const technicalSkills = [
  { label: "Frontend", items: ["HTML", "CSS", "Tailwind CSS", "Next.js"] },
  { label: "Backend & Bases de Datos", items: ["Firebase", "Supabase", "SQL", "APIs REST", "Autenticación y control de roles"] },
  { label: "Lenguajes", items: ["JavaScript", "Java", "Python", "Typescript"] },
  { label: "Herramientas", items: ["GitHub", "Scrum", "IA Generativa"] },
]

const complementarySkills = [
  { label: "Conocimientos Complementarios", items: ["Redes y Soporte TI", "Ciberseguridad básica", "Modelado de datos"] },
  { label: "Habilidades Blandas", items: ["Aprendizaje rápido", "Organización", "Atención al detalle", "Pensamiento analítico", "Trabajo en equipo"] },
]

const certifications = [
  { name: "Desarrollo de Aplicaciones con Interfaz Gráfica (Java)", issuer: "SENA", year: "2025" },
  { name: "Aplicación del Marco de Trabajo SCRUM para Software", issuer: "SENA", year: "2025" },
  { name: "Curso de Programación en Java", issuer: "Politécnico de Colombia", year: "2025" },
  { name: "Redes y Seguridad de Información", issuer: "SENA", year: "2024" },
  { name: "Apropiación de Conceptos en Ciberseguridad", issuer: "SENA", year: "2024" },
  { name: "Certificado de Ciberseguridad de Google", issuer: "Google", year: "2023" },
]

export default function CVPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-10 bg-primary">
        <div className="container mx-auto px-8 md:px-12 lg:px-20">
          <div className="flex flex-row items-center justify-between">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-white">
              Hoja de Vida
            </h1>
            <a href="/HV ESTEFANIA LOZANO - SISTEMAS.pdf" download="HV ESTEFANIA LOZANO - SISTEMAS.pdf">
              <Button className="bg-white text-primary hover:bg-white/90 gap-2 w-fit cursor-pointer">
                <Download className="h-4 w-4" />
                Descargar PDF
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Perfil Profesional Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-8 md:px-12 lg:px-20">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-primary/10 flex items-center justify-center">
              <User className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">
              Perfil Profesional
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            Ingeniera de Sistemas con conocimientos en desarrollo web, bases de datos, ciberseguridad, redes y
            metodologías ágiles. He aplicado estos conocimientos en proyectos independientes reales, desarrollando
            soluciones completas desde el diseño hasta el despliegue en producción. Me caracterizo por ser organizada,
            autodidacta y con fuerte orientación al detalle. Estoy en búsqueda de mi primera experiencia profesional para
            aportar desde el área de sistemas y continuar creciendo en un entorno tecnológico dinámico.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-8 md:px-12 lg:px-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
              <Briefcase className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
              Experiencia Profesional
            </h2>
          </div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <div
                key={index}
                className="p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors flex flex-col shadow-sm"
              >
                <div className="mb-6">
                  <p className="text-sm font-medium text-primary mb-2">{job.period}</p>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-2 leading-tight">
                    {job.title}
                  </h3>
                  <p className="font-medium text-muted-foreground">{job.company}</p>
                </div>
                <div className="flex-grow">
                  <p className="text-foreground mb-5 leading-relaxed font-medium">
                    {job.description}
                  </p>
                  <ul className="space-y-4">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2.5 shrink-0" />
                        <span className="leading-relaxed text-sm md:text-base">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-8 md:px-12 lg:px-20">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
              Educación
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="w-full max-w-[380px] p-6 bg-card border border-border hover:border-primary/50 transition-colors text-left"
              >
                <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {edu.degree}
                </h3>
                <p className="text-primary font-medium mb-3">{edu.institution}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-8 md:px-12 lg:px-20">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
              <Code2 className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
              Habilidades
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Technical Skills Card */}
            <div className="p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-foreground mb-6">Habilidades Técnicas</h3>
              <div className="space-y-5">
                {technicalSkills.map((group) => (
                  <div key={group.label}>
                    <p className="text-sm font-medium text-primary mb-2">{group.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Complementary & Soft Skills Card */}
            <div className="p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-foreground mb-6">Otras Habilidades</h3>
              <div className="space-y-5">
                {complementarySkills.map((group) => (
                  <div key={group.label}>
                    <p className="text-sm font-medium text-primary mb-2">{group.label}</p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-8 md:px-12 lg:px-20">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary">
              Certificaciones
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.75rem)] min-w-[250px] p-4 border border-border hover:border-primary/50 transition-colors text-left"
              >
                <p className="font-bold text-foreground mb-1">{cert.name}</p>
                <p className="text-sm text-muted-foreground">
                  {cert.issuer} - {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
