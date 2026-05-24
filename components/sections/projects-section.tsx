import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ProjectCard, type Project } from "@/components/project-card"

export const projects: Project[] = [
  {
    id: "plataforma-web-fundacion",
    title: "Sistema web administrativo y portal público institucional",
    category: "Full Stack",
    description: "Desarrollo de aplicación web fullstack para la gestión integral de información, control de acceso por roles y almacenamiento en la nube.",
    technologies: ["Next.js", "Supabase", "React", "Tailwind CSS", "Typescript"],
    year: "2025",
    color: "bg-primary",
    image: "/culturaydeporte-img/1.png",
  },
  {
    id: "gestion-empresarial",
    title: "Aplicación de Gestión Empresarial",
    category: "Full Stack",
    description: "Desarrollo de sistema administrativo enfocado en la gestión de datos en tiempo real y generación de facturas automáticas.",
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    year: "2024",
    color: "bg-accent",
    image: "/aumal-img/aumal1.png",
  },
]

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-12 bg-background">
      <div className="container mx-auto px-8 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Proyectos
            </h2>
            {/* <p className="text-muted-foreground max-w-lg leading-relaxed">
              Una selección de mis trabajos más recientes en desarrollo web frontend y backend.
            </p> */}
          </div>
          <Button asChild variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background w-fit">
            <Link href="/proyectos" className="gap-2">
              Ver todos <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

