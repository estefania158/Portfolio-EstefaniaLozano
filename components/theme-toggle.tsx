"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  // Avoid hydration mismatch — only render after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Hide when lightbox is open (same pattern as ScrollToTop)
  useEffect(() => {
    setIsLightboxOpen(document.body.classList.contains("lightbox-open"))

    const observer = new MutationObserver(() => {
      setIsLightboxOpen(document.body.classList.contains("lightbox-open"))
    })

    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  if (!mounted || isLightboxOpen) return null

  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50
        flex items-center justify-center
        w-10 h-10
        bg-card/80 backdrop-blur-md
        border border-border/50 border-r-0
        rounded-l-xl
        shadow-lg shadow-black/5
        translate-x-1 hover:translate-x-0
        hover:shadow-xl hover:shadow-primary/10
        hover:border-primary/30
        transition-all duration-300 ease-out
        cursor-pointer
        group"
      aria-label={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
    >
      <div className="relative w-5 h-5 overflow-hidden">
        {/* Sun icon — visible in dark mode */}
        <Sun
          className={`absolute inset-0 h-5 w-5 text-amber-400
            transition-all duration-500 ease-out
            ${isDark
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0"
            }`}
        />
        {/* Moon icon — visible in light mode */}
        <Moon
          className={`absolute inset-0 h-5 w-5 text-primary
            transition-all duration-500 ease-out
            ${isDark
              ? "-rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
            }`}
        />
      </div>
    </button>
  )
}
