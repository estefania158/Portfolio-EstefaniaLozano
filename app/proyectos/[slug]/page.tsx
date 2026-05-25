import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github, CheckCircle2, FileCode, CircleHelp, Briefcase } from "lucide-react"
import { projects } from "@/components/sections/projects-section"
import { ProjectCarousel } from "@/components/project-carousel"

const techLogos: Record<string, string> = {
  "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Supabase": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
  "Firebase": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  "Typescript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
}

// Extended project data with more details
const projectDetails: Record<string, {
  subtitle: string
  longDescription: string
  problem: string
  participation: string
  features: string[]
  screenshots: string[]
  links: {
    demo?: string;
    github?: string;
    demoDisabled?: boolean;
    githubDisabled?: boolean;
    demoLabel?: string;
    githubLabel?: string;
  }
}> = {
  "plataforma-web-fundacion": {
    subtitle: "Plataforma web para la Corporación por la Cultura y el Deporte",

    longDescription:
      "Plataforma web full stack desarrollada para centralizar procesos administrativos, financieros y documentales de la organización. El sistema cuenta con una web pública orientada a la comunidad para mostrar proyectos, información institucional y canales de contacto, además de un panel administrativo privado para la gestión de usuarios, proveedores, proyectos, archivos y documentos financieros. Incluye autenticación por roles, generación automática de comprobantes PDF, almacenamiento en la nube y sincronización en tiempo real. Fue desarrollado con Next.js, JavaScript, Tailwind CSS y Supabase bajo una arquitectura serverless desplegada en Vercel. Puedes ver la web pública: ",

    problem:
      "La organización necesitaba centralizar múltiples procesos administrativos, financieros y documentales que anteriormente se gestionaban de forma dispersa. La plataforma permite administrar información institucional, proyectos, usuarios, proveedores y documentos desde un único sistema, optimizando la organización interna y facilitando el acceso público a la información de la corporación mediante una web institucional conectada en tiempo real con el panel administrativo.",

    participation:
      "Desarrollé el proyecto de forma independiente, encargándose del diseño de interfaz, arquitectura de la aplicación, modelado de base de datos, desarrollo frontend y backend, autenticación y control de roles, integración con Supabase, generación de documentos PDF, almacenamiento en la nube y despliegue en producción con Vercel. También diseñé la estructura responsive y la sincronización en tiempo real entre el panel administrativo y la web pública.",

    features: [
      "Web pública institucional para visualización de proyectos e información de la organización",

      "Panel administrativo privado con acceso protegido mediante autenticación y roles",

      "Gestión de usuarios, proveedores y proyectos internos",

      "CRUD completo con búsqueda, filtros y modales dinámicos",

      "Administración de proyectos públicos visibles en la página principal",

      "Formulario de contacto conectado al panel administrativo",

      "Generación automática de comprobantes PDF de ingresos y egresos",

      "Cálculo automático de valores financieros y retenciones",

      "Panel centralizado para gestión y descarga de archivos",

      "Almacenamiento de documentos e imágenes en la nube",

      "Galerías y carruseles dinámicos para proyectos públicos",

      "Sincronización en tiempo real entre la web pública y el panel administrativo",

      "Interfaz responsive optimizada para escritorio y dispositivos móviles",

      "Protección de rutas privadas y validación de permisos",

      "Arquitectura full stack serverless con Supabase y Vercel"
    ],
    screenshots: [
      "/culturaydeporte-img/1.png",
      "/culturaydeporte-img/2.png",
      "/culturaydeporte-img/3.png",
      "/culturaydeporte-img/4.png",
      "/culturaydeporte-img/5.png",
      "/culturaydeporte-img/6.png",
      "/culturaydeporte-img/7.png",
      "/culturaydeporte-img/8.png"
    ],
    links: { demo: "https://cultura-y-deporte-tal5.vercel.app/info", github: "#", githubDisabled: true }
  },
  "gestion-empresarial": {
    subtitle: "Plataforma web de gestion de procesos empresariales para AUMAL",
    longDescription: "plataforma web desarrollada para la gestión de mantenimientos empresariales. La aplicación permite registrar, consultar, editar y organizar información relacionada con mantenimientos realizados a diferentes empresas, manejando usuarios con distintos permisos y acceso controlado a la información. El sistema fue desarrollado utilizando HTML, CSS y JavaScript para el frontend, mientras que Firebase fue utilizado como backend y servicio principal para autenticación, almacenamiento y base de datos. El objetivo principal del proyecto fue centralizar la información de mantenimientos en una plataforma web segura, organizada y accesible desde cualquier lugar.",
    problem:
      "La empresa AUMAL carecía de un sistema centralizado para gestionar, registrar y dar seguimiento a los mantenimientos empresariales y procesos de facturación, lo que dificultaba la coordinación y el control de calidad. Esta plataforma unifica la administración de clientes, reportes de inspección y control administrativo de pagos en una solución segura y accesible en la nube, garantizando que el personal técnico e inspectores cuenten con sincronización en tiempo real desde cualquier dispositivo.",
    participation:
      "Lideré el desarrollo del sistema implementando una arquitectura serverless con Firebase. Diseñé e implementé la interfaz frontend utilizando HTML5, CSS3 y JavaScript vanilla, conectándola en tiempo real con Cloud Firestore. Desarrollé el control de acceso y roles con Firebase Auth, el almacenamiento de evidencias fotográficas en Firebase Storage, y programé módulos para la generación de reportes detallados en PDF y Excel, asegurando una experiencia completamente responsive y de alto rendimiento.",
    features: [
      "Autenticación de usuarios y gestión de roles con Firebase Auth",
      "Gestión completa de mantenimientos: creación, edición, seguimiento y estados",
      "Control de calidad: registro de inspecciones, validaciones y observaciones",
      "Módulo de facturación y control administrativo de pagos",
      "Control de facturación: seguimiento de facturas pendientes y pagadas",
      "Gestión de empresas y asociación de usuarios",
      "Panel administrativo para gestión de usuarios y permisos",
      "Subida y almacenamiento de imágenes en Firebase Storage",
      "Generación y descarga de reportes en PDF y Excel",
      "Sincronización en tiempo real con Firestore",
      "Interfaz responsive para escritorio y dispositivos móviles",
      "Arquitectura serverless escalable y segura"
    ],
    screenshots: [
      "/aumal-img/aumal1.png",
      "/aumal-img/aumal2.png",
      "/aumal-img/aumal3.png",
      "/aumal-img/aumal4.png",
      "/aumal-img/2.png"
    ],
    links: { demo: "#", demoDisabled: true, github: "#", githubDisabled: true }
  }
}

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.id === slug)

  if (!project) {
    return { title: "Proyecto no encontrado" }
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.id === slug)
  const details = projectDetails[slug]

  if (!project || !details) {
    notFound()
  }

  const projectIndex = projects.findIndex((p) => p.id === slug)
  const nextProject = projects[(projectIndex + 1) % projects.length]
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length]

  // Split features into two columns
  const midpoint = Math.ceil(details.features.length / 2)
  const featuresCol1 = details.features.slice(0, midpoint)
  const featuresCol2 = details.features.slice(midpoint)

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-12 lg:py-16 bg-card border-b border-border">
        <div className="container mx-auto px-8 md:px-12 lg:px-20">
          {/* Back link */}
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a proyectos
          </Link>

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            {/* Left column - Project info */}
            <div className="space-y-6">
              {/* <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 text-sm font-medium rounded-full">
                {project.category}
              </span> */}

              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight uppercase tracking-tight">
                {project.title}
              </h1>

              <p className="text-primary font-medium text-lg">
                {details.subtitle}
              </p>

              <p className="text-muted-foreground leading-relaxed">
                {details.longDescription}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                {details.links.demo !== undefined && (
                  details.links.demoDisabled ? (
                    <Button disabled className="bg-muted text-muted-foreground cursor-not-allowed gap-2 px-6">
                      <ExternalLink className="h-4 w-4" />
                      {details.links.demoLabel || "Demo no disponible"}
                    </Button>
                  ) : (
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 px-6">
                      <a href={details.links.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        {details.links.demoLabel || "Ver Proyecto"}
                      </a>
                    </Button>
                  )
                )}
                {details.links.github !== undefined && (
                  details.links.githubDisabled ? (
                    <Button disabled variant="outline" className="border-muted text-muted-foreground cursor-not-allowed gap-2">
                      <Github className="h-4 w-4" />
                      {details.links.githubLabel || "Código privado"}
                    </Button>
                  ) : (
                    <Button asChild variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/5 gap-2">
                      <a href={details.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        {details.links.githubLabel || "Ver código"}
                      </a>
                    </Button>
                  )
                )}
              </div>
            </div>

            {/* Right column - Project Carousel */}
            <div className="w-full">
              <ProjectCarousel images={details.screenshots} title={project.title} />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 bg-background border-b border-border">
        <div className="container mx-auto px-8 md:px-12 lg:px-20">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
            Tecnologías utilizadas
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => {
              const logoUrl = techLogos[tech]
              return (
                <div
                  key={tech}
                  className="p-2.5 bg-card border border-border hover:border-primary/50 transition-all duration-300 rounded flex items-center gap-2.5"
                >
                  <div className="p-1 bg-muted/40 rounded flex items-center justify-center shrink-0 w-8 h-8">
                    {logoUrl ? (
                      <img
                        src={logoUrl}
                        alt={`${tech} logo`}
                        className="h-5 w-5 object-contain shrink-0"
                      />
                    ) : (
                      <FileCode className="h-5 w-5 text-primary shrink-0" />
                    )}
                  </div>
                  <span className="font-semibold text-foreground text-xs sm:text-sm">{tech}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Problem & Role Section */}
      <section className="py-16 bg-card border-b border-border">
        <div className="container mx-auto px-8 md:px-12 lg:px-20">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Problem column */}
            <div className="p-6 md:p-8 bg-background border border-border/60 rounded-xl hover:border-primary/30 transition-all duration-300 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <CircleHelp className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground">
                    Problemática que resuelve
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {details.problem}
                </p>
              </div>
            </div>

            {/* Participation column */}
            <div className="p-6 md:p-8 bg-background border border-border/60 rounded-xl hover:border-primary/30 transition-all duration-300 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground">
                    Mi participación
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {details.participation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-8 md:px-12 lg:px-20">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-10">
            Funcionalidades principales
          </h2>

          <div className="grid gap-x-12 gap-y-5 md:grid-cols-2">
            {/* Column 1 */}
            <div className="space-y-5">
              {featuresCol1.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed text-sm">{feature}</span>
                </div>
              ))}
            </div>
            {/* Column 2 */}
            <div className="space-y-5">
              {featuresCol2.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground leading-relaxed text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-8 md:px-12 lg:px-20">
          <div className="grid gap-8 md:grid-cols-2">
            <Link
              href={`/proyectos/${prevProject.id}`}
              className="group p-6  transition-colors rounded-lg"
            >
              <span className="text-sm text-muted-foreground mb-2 block">Anterior</span>
              <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {prevProject.title}
              </h3>
            </Link>

            <Link
              href={`/proyectos/${nextProject.id}`}
              className="group p-6  transition-colors text-right rounded-lg"
            >
              <span className="text-sm text-muted-foreground mb-2 block">Siguiente</span>
              <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {nextProject.title}
              </h3>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
