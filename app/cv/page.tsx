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
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
    description: "Plataforma web Full Stack para centralizar la gestión de información corporativa, control administrativo y automatización de flujos de trabajo de la organización, integrando un portal público institucional con un panel de control privado.",
    achievements: [
      "Diseñé y desarrollé la arquitectura completa utilizando Next.js, React, TypeScript y Tailwind CSS.",
      "Implementé el despliegue continuo y la configuración en producción a través de Vercel.",
      "Desarrollé un panel administrativo modular con múltiples secciones interrelacionadas, operaciones CRUD completas y flujos de búsqueda avanzados.",
      "Diseñé y estructuré la base de datos relacional utilizando Supabase.",
      "Implementé la sincronización de datos en tiempo real entre la web pública y el panel privado.",
      "Integré un flujo seguro de autenticación de usuarios con control de acceso basado en roles (RBAC).",
      "Programé la lógica para cálculo automático de valores contables y generación automática de comprobantes PDF.",
      "Estructuré el almacenamiento de documentos e imágenes en la nube utilizando Supabase Storage."
    ]
  },
  {
    title: "Plataforma web de gestión de procesos empresariales para AUMAL",
    company: "Desarrollo independiente",
    period: "2024",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    description: "Sistema de administración y reportes técnicos en la nube para centralizar y realizar el seguimiento en tiempo real del historial de mantenimientos correctivos y preventivos de múltiples empresas aliadas.",
    achievements: [
      "Diseñé e implementé la arquitectura de la aplicación en un entorno serverless con Firebase.",
      "Desarrollé una interfaz responsive, ágil y de alto rendimiento utilizando HTML, CSS y JavaScript moderno.",
      "Modelé la base de datos no relacional utilizando Cloud Firestore.",
      "Programé la sincronización en tiempo real de registros, órdenes de trabajo e inspecciones de calidad.",
      "Configuré el flujo de registro e inicio de sesión seguro utilizando Firebase Auth.",
      "Implementé permisos y roles específicos para la gestión granular de técnicos, inspectores y clientes.",
      "Programé la automatización de facturas y la exportación de reportes de servicio técnico a formatos PDF y Excel.",
      "Integré la carga y el almacenamiento de evidencias fotográficas en la nube utilizando Firebase Storage."
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
  {
    label: "Frontend",
    items: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    label: "Backend & Bases de Datos",
    items: [
      "Firebase",
      "Supabase",
      "SQL",
      "PostgreSQL",
      "Autenticación y Roles",
    ],
  },
  {
    label: "Lenguajes",
    items: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
    ],
  },
  {
    label: "Herramientas & Despliegue",
    items: [
      "Git",
      "GitHub",
      "Vercel",
      "IA Generativa",
    ],
  },
]

const complementarySkills = [
  {
    label: "Habilidades Profesionales",
    items: [
      "Resolución de problemas",
      "Pensamiento analítico",
      "Organización y autonomía",
      "Adaptabilidad",
      "Colaboración técnica",
    ],
  },
  {
    label: "Conocimientos Complementarios",
    items: [
      "Modelado de datos",
      "Fundamentos de ciberseguridad",
      "Redes y soporte TI",
      "Metodologías ágiles (Scrum)",
    ],
  },
]

const certifications = [
  { name: "Generación de códigos de software con inteligencia artificial", issuer: "SENA", year: "2026" },
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
            <strong>Ingeniera de Sistemas</strong> enfocada en el desarrollo de aplicaciones web <strong>Full Stack</strong> y soluciones digitales orientadas a la optimización de procesos. Cuento con experiencia práctica desarrollando plataformas completas de forma independiente, participando en etapas como análisis, diseño, arquitectura, implementación y despliegue. Me caracterizo por la capacidad de adaptar soluciones a necesidades reales, estructurar sistemas funcionales y mantener una visión integral entre la experiencia de usuario y la lógica de negocio. Destaco por el aprendizaje continuo, el pensamiento analítico y la autonomía para abordar proyectos tecnológicos de manera organizada y eficiente.          </p>
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
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <p className="font-medium text-muted-foreground">{job.company}</p>
                    <span className="hidden sm:inline text-muted-foreground/30 text-xs">•</span>
                    <div className="flex flex-wrap gap-1.5">
                      {job.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-primary/10 text-primary text-xs font-semibold rounded-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
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
