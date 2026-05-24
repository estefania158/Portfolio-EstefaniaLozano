import Link from "next/link"

export interface Project {
  id: string
  title: string
  category: string
  description: string
  technologies: string[]
  year: string
  color: string
  image?: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      href={`/proyectos/${project.id}`}
      className="group block"
    >
      <article className="h-full border border-border bg-card hover:border-primary/50 transition-all duration-300">
        <div className="relative overflow-hidden group-hover:opacity-95 transition-opacity">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className={`aspect-[4/3] ${project.color} w-full flex items-center justify-center`}>
              <span className="font-serif text-5xl md:text-6xl text-white/20 font-bold">
                0{index + 1}
              </span>
            </div>
          )}
          <div className="absolute bottom-4 left-4 z-10">
            <span className="bg-white/90 text-foreground px-3 py-1 text-sm font-medium">
              {project.category}
            </span>
          </div>
        </div>
        <div className="p-4 md:p-6">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="font-serif text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <span className="text-sm text-muted-foreground shrink-0">
              {project.year}
            </span>
          </div>
          <p className="text-muted-foreground mb-3 line-clamp-2 leading-relaxed text-sm">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-muted text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}
