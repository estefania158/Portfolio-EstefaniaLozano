import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-8 md:px-12 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-2">
        <Link href="/" className="font-serif text-base font-bold hover:opacity-80 transition-opacity">
          Portfolio Estefanía Lozano Ochoa
        </Link>
        <div className="text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Portfolio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
