"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react"

interface ProjectCarouselProps {
  images: string[]
  title: string
}

export function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/15 border border-border rounded-xl overflow-hidden flex items-center justify-center">
        <div className="text-center space-y-3 p-8">
          <span className="font-serif text-6xl md:text-7xl text-primary/20 font-bold block">
            {"</>"}
          </span>
          <p className="text-muted-foreground/60 text-sm">Vista previa del proyecto</p>
        </div>
      </div>
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    setCurrentIndex(0)
    setLightboxOpen(false)
  }, [images])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxOpen) {
        setLightboxOpen(false)
      }
    }

    if (lightboxOpen) {
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightboxOpen])

  return (
    <>
      {/* Carousel */}
      <div className="relative group w-full rounded-xl overflow-hidden">
        {/* Image viewport */}
        <div className="relative aspect-[4/3] w-full bg-transparent">
          {images.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={image}
                alt={`${title} - captura ${index + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>
          ))}

          {/* Expand button */}
          <button
            onClick={() => setLightboxOpen(true)}
            className="absolute top-3 right-3 z-20 w-9 h-9 rounded-lg bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 cursor-pointer"
            aria-label="Ver imagen completa"
          >
            <Expand className="h-4 w-4" />
          </button>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center transition-all shadow-md cursor-pointer opacity-0 group-hover:opacity-100"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center transition-all shadow-md cursor-pointer opacity-0 group-hover:opacity-100"
                aria-label="Siguiente imagen"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}

          {/* Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-12 right-0 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Full image */}
            <div className="relative w-full h-[80vh] rounded-lg overflow-hidden">
              <Image
                src={images[currentIndex]}
                alt={`${title} - captura ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
              />

              {/* Lightbox nav arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center transition-all shadow-lg cursor-pointer"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center transition-all shadow-lg cursor-pointer"
                    aria-label="Siguiente imagen"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}
            </div>

            {/* Counter */}
            <p className="text-white/60 text-sm text-center">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
