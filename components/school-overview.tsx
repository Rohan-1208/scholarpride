import Image from "next/image"
import { BookOpen, Users, Award, Lightbulb, Calendar, GraduationCap, School, Languages } from "lucide-react"

export default function SchoolOverview() {
  return (
    <section className="container mx-auto px-4 relative bg-white">
      {/* Logo Background */}
      <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden">
        <div className="relative h-full w-full opacity-5">
          <Image src="/images/white.jpg" alt="School Logo Background" fill className="object-contain" />
        </div>
      </div>

      <div className="relative z-10">
        <div className="text-center">
          <h2 className="mb-2 text-3xl font-bold text-primary">Welcome to Scholar's Pride School</h2>
          <p className="mx-auto mb-12 max-w-3xl text-muted-foreground">
            A premier educational institution committed to nurturing young minds through a balanced approach to
            academics, character development, and extracurricular activities.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="relative aspect-video min-h-[350px] w-full overflow-hidden rounded-xl">
            <Image src="/images/reception.jpg" alt="School Campus" fill className="object-cover" />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-6 text-muted-foreground">
              At Scholar's Pride School, we believe in providing a nurturing environment where students can discover
              their potential and develop into responsible global citizens. Our comprehensive curriculum, combined with
              state-of-the-art facilities and dedicated faculty, ensures that each student receives a well-rounded
              education.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">Academic Excellence</h3>
                  <p className="text-sm text-muted-foreground">CBSE curriculum with focus on conceptual learning</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">Experienced Faculty</h3>
                  <p className="text-sm text-muted-foreground">35:1 student-teacher ratio with dedicated educators</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">Holistic Development</h3>
                  <p className="text-sm text-muted-foreground">Focus on sports, arts, and character building</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">Modern Infrastructure</h3>
                  <p className="text-sm text-muted-foreground">Smart classrooms, AC classes, and sports facilities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* School Facts */}
      <div className="mt-16 relative z-10">
        <h3 className="mb-8 text-center text-2xl font-semibold text-primary">School at a Glance</h3>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex items-start gap-4 rounded-lg border bg-card p-4 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Establishment</h4>
              <p className="text-lg font-semibold">Since 2010</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-lg border bg-card p-4 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
              <School className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Classification</h4>
              <p className="text-lg font-semibold">Co-Ed Day School</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-lg border bg-card p-4 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
              <GraduationCap className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Grades</h4>
              <p className="text-lg font-semibold">Nursery - XII</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-lg border bg-card p-4 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
              <Languages className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Medium</h4>
              <p className="text-lg font-semibold">English</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-lg border bg-card p-4 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Our Student Body</h4>
              <p className="text-lg font-semibold">500+ learners</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-lg border bg-card p-4 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 7h10" />
                <path d="M7 12h10" />
                <path d="M7 17h10" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Class Size</h4>
              <p className="text-lg font-semibold">35 Students</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-lg border bg-card p-4 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Student:Teacher</h4>
              <p className="text-lg font-semibold">35:1 Ratio</p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-lg border bg-card p-4 shadow-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
              </svg>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground">Entry Level Seats</h4>
              <p className="text-lg font-semibold">250 Seats</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
