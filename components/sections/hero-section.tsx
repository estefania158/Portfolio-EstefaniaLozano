import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="flex items-center bg-background">
      <div className="container mx-auto px-8 md:px-12 lg:px-20 py-10 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-5">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wider uppercase">
                Estefanía Lozano Ochoa
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Ingeniera
                <br />
                <span className="text-primary">de Sistemas</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Desarrolladora web Full-Stack | Desarrolladora de Software             </p>
            <p>📍 Bucaramanga, Santander, Colombia</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                <Link href="#contacto">Contacto</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-foreground text-foreground hover:bg-foreground hover:text-background px-8">
                <Link href="/proyectos">Ver proyectos</Link>
              </Button>
            </div>
          </div>

          <div className="relative aspect-square md:aspect-[4/3] w-full max-w-md mx-auto lg:max-w-none">
            {/* Light mode image */}
            <Image
              src="/hero-img.png"
              alt="Estefanía Lozano"
              fill
              className="object-contain transition-opacity duration-500 dark:opacity-0"
              priority
            />
            {/* Dark mode image */}
            <Image
              src="/hero-img-alt.png"
              alt="Estefanía Lozano"
              fill
              className="object-contain transition-opacity duration-500 opacity-0 dark:opacity-100"
              priority
            />
          </div>
        </div>

        {/* <div className="mt-8 flex justify-center">
          <Link
            href="#sobre-mi"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll hacia abajo"
          >
            <span className="text-sm">Conoce más</span>
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </Link>
        </div> */}
      </div>
    </section>
  )
}
