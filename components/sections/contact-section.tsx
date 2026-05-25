"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Send, Copy, Check, Loader2, CheckCircle2, XCircle, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")
  const encodedEmail = "ZXN0ZWZhbmlhbG96YW5vMTUyQGdtYWlsLmNvbQ==" // estefanialozano152@gmail.com

  const handleCopyEmail = () => {
    const email = atob(encodedEmail)
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopiedEmail(true)
        setTimeout(() => setCopiedEmail(false), 2000)
      })
      .catch((err) => {
        console.error("Error al copiar el correo: ", err)
      })
  }

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+573152818199")
      .then(() => {
        setCopiedPhone(true)
        setTimeout(() => setCopiedPhone(false), 2000)
      })
      .catch((err) => {
        console.error("Error al copiar el teléfono: ", err)
      })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "7f3e4f8e-c1b7-4ccf-b22a-7c94295d23c8",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Nuevo mensaje de ${formData.name} desde tu portafolio`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus("success")
        setStatusMessage("¡Mensaje enviado con éxito! Te contactaré pronto.")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("error")
        setStatusMessage("Hubo un error al enviar el mensaje. Intenta de nuevo.")
      }
    } catch {
      setStatus("error")
      setStatusMessage("Error de conexión. Verifica tu internet e intenta de nuevo.")
    }

    setTimeout(() => {
      setStatus("idle")
      setStatusMessage("")
    }, 5000)
  }

  return (
    <section id="contacto" className="py-20 bg-card">
      <div className="container mx-auto px-8 md:px-12 lg:px-20">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-10">
          Contacto
        </h2>

        <div className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column */}
          <div className="space-y-6 lg:col-span-5">
            <div
              onClick={handleCopyEmail}
              className="flex items-center gap-4 cursor-pointer group"
              title="Copiar correo al portapapeles"
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground">Email</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                    estefanialozano152@gmail.com
                  </span>
                  <div className="flex items-center">
                    {copiedEmail ? (
                      <span className="text-emerald-500 flex items-center gap-1 text-xs font-medium">
                        <Check className="h-3 w-3" /> Copiado
                      </span>
                    ) : (
                      <Copy className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div
              onClick={handleCopyPhone}
              className="flex items-center gap-4 cursor-pointer group"
              title="Copiar teléfono al portapapeles"
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground">Teléfono</p>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                    (+57) 315 2818199
                  </span>
                  <div className="flex items-center">
                    {copiedPhone ? (
                      <span className="text-emerald-500 flex items-center gap-1 text-xs font-medium">
                        <Check className="h-3 w-3" /> Copiado
                      </span>
                    ) : (
                      <Copy className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                <Linkedin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/estefanía-lozano-161b30226"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors line-clamp-1"
                  title="www.linkedin.com/in/estefanía-lozano-161b30226"
                >
                  Estefanía Lozano
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                <Github className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">GitHub</p>
                <a
                  href="https://github.com/estefania158"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors line-clamp-1"
                  title="github.com/estefania158"
                >
                  estefania158
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Ubicación</p>
                <p className="text-muted-foreground">Bucaramanga, Santander, Colombia</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-background p-6 border border-border lg:col-span-7 w-full">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground text-sm">
                  Nombre
                </Label>
                <Input
                  id="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-border focus:border-primary text-sm py-2"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground text-sm">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-border focus:border-primary text-sm py-2"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground text-sm">
                  Mensaje
                </Label>
                <Textarea
                  id="message"
                  placeholder="Escribe tu mensaje..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="border-border focus:border-primary resize-none text-sm"
                />
              </div>

              <Button
                type="submit"
                size="default"
                disabled={status === "loading"}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 py-2.5 text-sm disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>Enviando... <Loader2 className="h-4 w-4 animate-spin" /></>
                ) : (
                  <>Enviar mensaje <Send className="h-4 w-4" /></>
                )}
              </Button>

              {statusMessage && (
                <div
                  className={`flex items-center gap-2 p-3 text-sm rounded-md ${status === "success"
                      ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20"
                      : "bg-red-500/10 text-red-600 border border-red-500/20"
                    }`}
                >
                  {status === "success" ? (
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                  ) : (
                    <XCircle className="h-4 w-4 shrink-0" />
                  )}
                  {statusMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
