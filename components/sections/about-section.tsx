import { 
  Shield, 
  Activity, 
  Users, 
  Network, 
  Sparkles 
} from "lucide-react"

const coreSkills = [
  { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", label: "HTML" },
  { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", label: "CSS" },
  { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", label: "JavaScript" },
  { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", label: "Next.js" },
  { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", label: "SQL" },
  { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", label: "Python" },
  { logoUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg", label: "Java" },
]

const otherSkills = [
  { icon: Shield, label: "Ciberseguridad", color: "text-[#10B981]", bgColor: "bg-[#10B981]/10" },
  { icon: Activity, label: "Análisis de Sistemas", color: "text-[#0EA5E9]", bgColor: "bg-[#0EA5E9]/10" },
  { icon: Users, label: "Metodologías Ágiles", color: "text-[#F59E0B]", bgColor: "bg-[#F59E0B]/10" },
  { icon: Network, label: "Redes", color: "text-[#8B5CF6]", bgColor: "bg-[#8B5CF6]/10" },
  { icon: Sparkles, label: "IA Generativa", color: "text-[#EC4899]", bgColor: "bg-[#EC4899]/10" },
]

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-16 bg-card">
      <div className="container mx-auto px-8 md:px-12 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Content Column (Left) */}
          <div className="space-y-6 lg:col-span-7">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
              Sobre mí
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                Soy Ingeniera de Sistemas graduada con Grado de Honor, enfocada en el desarrollo web Full Stack. Tengo experiencia creando aplicaciones completas de forma independiente, liderando todo el ciclo de vida del proyecto: desde el diseño conceptual y la arquitectura de bases de datos, hasta su despliegue en producción. Mi stack principal incluye JavaScript, Next.js, SQL, Supabase y Firebase, complementado con un sólido manejo de Python y Java.
              </p>
              <p>
                Mi formación también me ha brindado conocimientos en ciberseguridad, redes, metodologías ágiles e IA generativa, lo que me permite desarrollar soluciones con una visión más integral, aplicando buenas prácticas de seguridad, trabajo colaborativo y uso eficiente de herramientas modernas.
              </p>
              <p>
                Me apasiona el aprendizaje continuo y destaco por mi pensamiento analítico y atención al detalle, cualidades que me permiten adaptarme y aportar valor en entornos tecnológicos dinámicos.
              </p>
            </div>
          </div>

          {/* Skills Column (Right) */}
          <div className="space-y-8 lg:col-span-5">
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                Tecnologías
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {coreSkills.map((skill) => (
                  <div
                    key={skill.label}
                    className="p-2.5 bg-background border border-border hover:border-primary/50 transition-all duration-300 rounded flex items-center gap-2.5 animate-fade-in"
                  >
                    <div className="p-1 bg-muted/40 rounded flex items-center justify-center shrink-0 w-8 h-8">
                      <img 
                        src={skill.logoUrl} 
                        alt={`${skill.label} logo`} 
                        className="h-5 w-5 object-contain shrink-0"
                      />
                    </div>
                    <span className="font-semibold text-foreground text-xs sm:text-sm">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                Otras habilidades y conocimientos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {otherSkills.map((skill) => (
                  <div
                    key={skill.label}
                    className="p-2.5 bg-background border border-border hover:border-primary/50 transition-all duration-300 rounded flex items-center gap-2.5"
                  >
                    <div className={`p-1.5 ${skill.bgColor} rounded flex items-center justify-center shrink-0`}>
                      <skill.icon className={`h-4 w-4 ${skill.color}`} />
                    </div>
                    <span className="font-semibold text-foreground text-xs sm:text-sm">{skill.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
