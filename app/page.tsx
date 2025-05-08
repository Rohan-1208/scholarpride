import Hero from "@/components/hero"
import SchoolOverview from "@/components/school-overview"
import NewsSection from "@/components/news-section"
import QuickAccess from "@/components/quick-access"
import TestimonialSection from "@/components/testimonial-section"
import ImageCarousel from "@/components/image-carousel"

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pb-12">
      <Hero />
      <SchoolOverview />
      <QuickAccess />
      <NewsSection />
      <TestimonialSection />
      <ImageCarousel />
    </div>
  )
}
