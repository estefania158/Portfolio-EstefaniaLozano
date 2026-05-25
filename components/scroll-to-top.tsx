"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  useEffect(() => {
    // Check initially in case of hydration variations
    setIsLightboxOpen(document.body.classList.contains("lightbox-open"))

    const observer = new MutationObserver(() => {
      setIsLightboxOpen(document.body.classList.contains("lightbox-open"))
    })

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"]
    })

    return () => observer.disconnect()
  }, [])

  // If the lightbox is open, completely remove the button from the DOM to avoid overlaps
  if (isLightboxOpen) return null

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-all duration-300 hover:scale-110 hover:bg-primary/95 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 cursor-pointer scroll-to-top-btn ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      aria-label="Volver arriba"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
