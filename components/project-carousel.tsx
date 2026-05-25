"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react"

interface ProjectCarouselProps {
  images: string[]
  title: string
}

export function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  // Use useRef to store swipe coordinates. This avoids triggering constant component re-renders
  // on touchStart and touchMove, which can cancel subsequent click events on mobile browsers.
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null
    touchStartX.current = e.targetTouches[0].clientX
  }

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const onTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance
    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }

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

  useEffect(() => {
    if (lightboxOpen) {
      document.body.classList.add("lightbox-open")
      document.body.style.overflow = "hidden"
    } else {
      document.body.classList.remove("lightbox-open")
      document.body.style.overflow = ""
    }
    return () => {
      document.body.classList.remove("lightbox-open")
      document.body.style.overflow = ""
    }
  }, [lightboxOpen])

  return (
    <>
      {/* Carousel */}
      <div className="relative group w-full rounded-xl overflow-hidden">
        {/* Image viewport */}
        <div
          className="relative aspect-[4/3] w-full bg-transparent touch-pan-y"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {images.map((image, index) => (
            <div
              key={image}
              onClick={() => index === currentIndex && setLightboxOpen(true)}
              className={`absolute inset-0 cursor-zoom-in transition-opacity duration-300 ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
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
            onClick={(e) => {
              e.stopPropagation()
              setLightboxOpen(true)
            }}
            onTouchStart={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
            className="absolute top-3 right-3 z-20 w-9 h-9 rounded-lg bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 cursor-pointer"
            aria-label="Ver imagen completa"
          >
            <Expand className="h-4 w-4" />
          </button>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevSlide()
                }}
                onTouchStart={(e) => e.stopPropagation()}
                onTouchEnd={(e) => e.stopPropagation()}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center transition-all shadow-md cursor-pointer opacity-100 md:opacity-0 md:group-hover:opacity-100"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextSlide()
                }}
                onTouchStart={(e) => e.stopPropagation()}
                onTouchEnd={(e) => e.stopPropagation()}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center transition-all shadow-md cursor-pointer opacity-100 md:opacity-0 md:group-hover:opacity-100"
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
                  onClick={(e) => {
                    e.stopPropagation()
                    goToSlide(index)
                  }}
                  onTouchStart={(e) => e.stopPropagation()}
                  onTouchEnd={(e) => e.stopPropagation()}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${index === currentIndex
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
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 touch-pan-y"
          onClick={() => setLightboxOpen(false)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxOpen(false)}
            onTouchStart={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
            className="fixed top-4 right-4 z-[60] w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg"
            aria-label="Cerrar"
          >
            <X className="h-6 w-6" />
          </button>

          <div
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
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
                    onClick={(e) => {
                      e.stopPropagation()
                      prevSlide()
                    }}
                    onTouchStart={(e) => e.stopPropagation()}
                    onTouchEnd={(e) => e.stopPropagation()}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center transition-all shadow-lg cursor-pointer"
                    aria-label="Imagen anterior"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      nextSlide()
                    }}
                    onTouchStart={(e) => e.stopPropagation()}
                    onTouchEnd={(e) => e.stopPropagation()}
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
