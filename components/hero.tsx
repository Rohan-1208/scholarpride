import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-[70vh] font-sans">
      <div className="absolute inset-0">
        <Image
          src="/images/school_bg.jpg"
          alt="School Background"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-white/70" />
      </div>
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="mb-2 text-4xl font-extrabold tracking-tight text-emerald-800 sm:text-5xl md:text-6xl font-logo">
              SCHOLAR'S PRIDE SCHOOL
            </h1> 
            <p className="mb-2 text-2xl font-semibold text-purple-500 md:text-3xl tracking-wide">
              LEARN. DREAM. GROW..
            </p>
            <p className="mb-6 text-lg text-emerald-700 md:text-xl font-medium">
              Transforms Education Through Humane Touch
            </p>
            <p className="mb-8 text-emerald-600 font-medium">
              A Co-ed Sr. Sec. CBSE Affiliated School (Code No: 1630732)
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md"
                asChild
              >
                <Link href="/admissions">Apply for Admission</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-semibold px-8 py-3 rounded-lg"
                asChild
              >
                <Link href="/about">Discover More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}