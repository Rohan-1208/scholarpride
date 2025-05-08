import Link from "next/link"
import { UserPlus, Users, Phone, CalendarDays, BookOpen, Award } from "lucide-react"

export default function QuickAccess() {
  return (
    <section className="container mx-auto px-4">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        <Link
          href="/admissions"
          className="flex flex-col items-center justify-center rounded-lg bg-primary/10 p-6 text-center transition-colors hover:bg-primary/20"
        >
          <UserPlus className="mb-4 h-10 w-10 text-primary" />
          <h3 className="font-medium">Admissions</h3>
          <p className="mt-1 text-xs text-muted-foreground">Apply Now</p>
        </Link>

        <Link
          href="/gallery"
          className="flex flex-col items-center justify-center rounded-lg bg-primary/10 p-6 text-center transition-colors hover:bg-primary/20"
        >
          <Users className="mb-4 h-10 w-10 text-primary" />
          <h3 className="font-medium">Gallery</h3>
          <p className="mt-1 text-xs text-muted-foreground">Our Team</p>
        </Link>

        <Link
          href="/contact"
          className="flex flex-col items-center justify-center rounded-lg bg-primary/10 p-6 text-center transition-colors hover:bg-primary/20"
        >
          <Phone className="mb-4 h-10 w-10 text-primary" />
          <h3 className="font-medium">Contact</h3>
          <p className="mt-1 text-xs text-muted-foreground">Get in Touch</p>
        </Link>

        <Link
          href="/admissions"
          className="flex flex-col items-center justify-center rounded-lg bg-primary/10 p-6 text-center transition-colors hover:bg-primary/20"
        >
          <CalendarDays className="mb-4 h-10 w-10 text-primary" />
          <h3 className="font-medium">FAQs</h3>
          <p className="mt-1 text-xs text-muted-foreground">Events & Dates</p>
        </Link>

        <Link
          href="#"
          className="flex flex-col items-center justify-center rounded-lg bg-primary/10 p-6 text-center transition-colors hover:bg-primary/20"
        >
          <BookOpen className="mb-4 h-10 w-10 text-primary" />
          <h3 className="font-medium">Academics</h3>
          <p className="mt-1 text-xs text-muted-foreground">Curriculum</p>
        </Link>

        <Link
          href="/about"
          className="flex flex-col items-center justify-center rounded-lg bg-primary/10 p-6 text-center transition-colors hover:bg-primary/20"
        >
          <Award className="mb-4 h-10 w-10 text-primary" />
          <h3 className="font-medium">Achievements</h3>
          <p className="mt-1 text-xs text-muted-foreground">Our Pride</p>
        </Link>
      </div>
    </section>
  )
}
