import { projects } from "@/components/sections/projects-section"
import { ProjectCard } from "@/components/project-card"

export const metadata = {
  title: "Proyectos | Portfolio",
  description: "Explora mis proyectos de desarrollo web frontend y backend",
}

export default function ProjectsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="py-10 bg-primary">
        <div className="container mx-auto px-8 md:px-12 lg:px-20">
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-white">
            Proyectos
          </h1>
        </div>
      </section>

      {/* Filter Tabs */}
      {/* <section className="py-8 border-b border-border bg-background sticky top-[73px] z-40">
        <div className="container mx-auto px-8 md:px-12 lg:px-20">
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-primary text-primary-foreground font-medium">
              Todos
            </span>
            <span className="px-4 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              Frontend
            </span>
            <span className="px-4 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              Backend
            </span>
            <span className="px-4 py-2 text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
              Full Stack
            </span>
          </div>
        </div>
      </section> */}

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-8 md:px-12 lg:px-20">
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

