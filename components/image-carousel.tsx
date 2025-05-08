"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample carousel data
const carouselImages = [
  {
    id: 1,
    src: "/images/classroom.png",
    alt: "Classrooms",
    caption: "Our Smart Classrooms",
  },
  {
    id: 2,
    src: "/images/computer_lab.jpg",
    alt: "Computer Lab",
    caption: "State-of-the-Art Computer Lab",
  },
  {
    id: 3,
    src: "/images/labb.png",
    alt: "Science Lab",
    caption: "Well-Equipped Science Lab",
  },
  {
    id: 4,
    src: "/images/ground.jpg",
    alt: "Sports Ground",
    caption: "Spacious Sports Ground",
  },
  {
    id: 5,
    src: "/images/library.jpeg",
    alt: "Library",
    caption: "Extensive Library Collection",
  },
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length)
  }

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-primary">School Facilities</h2>
        <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
          Explore our modern facilities designed to provide an optimal learning environment for our students.
        </p>
      </div>

      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden">
          <Image
            src={carouselImages[currentIndex].src || "/placeholder.svg"}
            alt={carouselImages[currentIndex].alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          <div className="absolute bottom-0 left-0 p-4 text-white bg-black/40 w-full">
            {carouselImages[currentIndex].caption}
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-black/30 text-white hover:bg-black/50"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous slide</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full bg-black/30 text-white hover:bg-black/50"
          onClick={nextSlide}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next slide</span>
        </Button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
              onClick={() => setCurrentIndex(index)}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
