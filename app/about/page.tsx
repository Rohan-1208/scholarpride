import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Timeline, TimelineItem } from "@/components/timeline"
import { BookOpen, Heart, Award, Users, Target, Lightbulb } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 bg-white">
      <h1 className="mb-8 text-center text-4xl font-bold text-primary">About Scholar's Pride School</h1>

      {/* School Overview */}
      <section className="mb-16 relative">
        <div className="grid gap-8 md:grid-cols-2 relative z-10">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-primary">A Co-ed Sr. Sec. CBSE Affiliated School</h2>
            <p className="mb-4 text-muted-foreground">
              Scholar's Pride School is a Co-educational Senior Secondary School affiliated with the Central Board of
              Secondary Education (CBSE). Located opposite Panchvati Mandir on Bagrian Road in Dhuri, our school has
              been providing quality education since 2010.
            </p>
            <p className="mb-4 text-muted-foreground">
              With our motto "LEARN. DREAM. GROW.." and our commitment to "Transform Education Through Humane Touch," we
              strive to create a nurturing environment where students can develop academically, socially, and
              emotionally.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-muted/50 p-4">
                <p className="font-medium">CBSE Affiliation No:</p>
                <p className="text-muted-foreground">1630732</p>
              </div>
              <div className="rounded-lg bg-muted/50 p-4">
                <p className="font-medium">Established:</p>
                <p className="text-muted-foreground">2010</p>
              </div>
              <div className="rounded-lg bg-muted/50 p-4">
                <p className="font-medium">School Type:</p>
                <p className="text-muted-foreground">Co-Ed Day School</p>
              </div>
              <div className="rounded-lg bg-muted/50 p-4">
                <p className="font-medium">Classes:</p>
                <p className="text-muted-foreground">Nursery to XII</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-64 w-64 md:h-80 md:w-80">
              <Image src="/images/scholars-pride-logo.png" alt="School Logo" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* School History */}
      <section className="mb-16">
        <h2 className="mb-6 text-2xl font-semibold text-primary">Our History</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-muted-foreground">
            Scholar's Pride school is a Co-Educational Sr. Sec. CBSE Affiliated day-boarding School that provides holistic growth with state-of-the-art child-centered and child-friendly facilities. Scholar's Pride was established in the year 2010 and is situated in the heart of Dhuri Town. This school is initiative of the "P.L. Bansal Memorial Educational Society" and Inaugurated by Hon'ble Mr. Justice Rajesh Bindal (Punjab & Haryana High Court, Chandigarh) & S. H.S. Sohi I.R.S (Commissioner of Income Tax). The school is founded & managed by Advocate B.B. Bansal & Er. and Author Raman Bansal with the mission to empower all its pupils to be problem solvers, users of technology, effective communicators and lifelong learners in a rapidly changing global community by providing challenging experience in a safe, caring, supportive and co-operative and to prepare a winning generation for the 21st Century. Scholar's pride is successfully progressing every year by providing high quality education to its students.
            </p>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
            <Image src="/images/kid.jpeg" alt="School Building" fill className="object-cover" />
          </div>
        </div>

        <Timeline className="mt-12">
          <TimelineItem
            year="2010"
            title="Foundation"
            description="Scholar's Pride School was established with a vision to transform education."
          />
          <TimelineItem
            year="2015"
            title="CBSE Affiliation"
            description="Received CBSE affiliation (Code No: 1630732)."
          />
          <TimelineItem
            year="2018"
            title="Campus Expansion"
            description="Expanded our facilities to include modern laboratories and sports infrastructure."
          />
          <TimelineItem
            year="2022"
            title="Excellence Award"
            description="Recognized for educational excellence and innovative teaching methodologies."
          />
        </Timeline>
      </section>

      {/* Mission and Vision */}
      <section className="mb-16 rounded-xl bg-muted/50 p-8">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-semibold text-primary">Our Mission</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            To provide a nurturing educational environment that fosters academic excellence, personal growth, and social
            responsibility, preparing students to become lifelong learners and responsible global citizens.
          </p>
        </div>

        <div className="text-center">
          <h2 className="mb-2 text-2xl font-semibold text-primary">Our Vision</h2>
          <p className="mx-auto max-w-3xl text-muted-foreground">
            To be a leading educational institution that transforms lives through innovative teaching practices,
            holistic development, and a commitment to excellence in all aspects of education.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-semibold text-primary">Our Core Values</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <BookOpen className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-medium">Academic Excellence</h3>
              <p className="text-center text-muted-foreground">
                Striving for the highest standards in teaching and learning.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <Heart className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-medium">Compassion</h3>
              <p className="text-center text-muted-foreground">
                Nurturing empathy and kindness in all our interactions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <Award className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-medium">Integrity</h3>
              <p className="text-center text-muted-foreground">Upholding honesty, ethics, and moral principles.</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <Users className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-medium">Inclusivity</h3>
              <p className="text-center text-muted-foreground">
                Embracing diversity and creating an environment where everyone belongs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <Target className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-medium">Perseverance</h3>
              <p className="text-center text-muted-foreground">
                Encouraging determination and resilience in facing challenges.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col items-center p-6">
              <Lightbulb className="mb-4 h-12 w-12 text-primary" />
              <h3 className="mb-2 text-xl font-medium">Innovation</h3>
              <p className="text-center text-muted-foreground">
                Fostering creativity and forward-thinking approaches to education.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* School Facilities */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-semibold text-primary">Our Facilities</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border bg-card p-6 text-center shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto mb-4 h-10 w-10 text-primary"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 7h10" />
              <path d="M7 12h10" />
              <path d="M7 17h10" />
            </svg>
            <h3 className="mb-2 text-lg font-medium">Smart Classrooms</h3>
            <p className="text-sm text-muted-foreground">
              Equipped with modern teaching aids and interactive technology
            </p>
          </div>

          <div className="rounded-lg border bg-card p-6 text-center shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto mb-4 h-10 w-10 text-primary"
            >
              <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
            </svg>
            <h3 className="mb-2 text-lg font-medium">Air-Conditioned Classes</h3>
            <p className="text-sm text-muted-foreground">Comfortable learning environment throughout the year</p>
          </div>

          <div className="rounded-lg border bg-card p-6 text-center shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto mb-4 h-10 w-10 text-primary"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="m4.93 4.93 4.24 4.24" />
              <path d="m14.83 9.17 4.24-4.24" />
              <path d="m14.83 14.83 4.24 4.24" />
              <path d="m9.17 14.83-4.24 4.24" />
              <circle cx="12" cy="12" r="4" />
            </svg>
            <h3 className="mb-2 text-lg font-medium">Indoor Sports</h3>
            <p className="text-sm text-muted-foreground">Facilities for table tennis, chess, carrom, and more</p>
          </div>

          <div className="rounded-lg border bg-card p-6 text-center shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto mb-4 h-10 w-10 text-primary"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="m2 12 20 0" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <h3 className="mb-2 text-lg font-medium">Outdoor Sports</h3>
            <p className="text-sm text-muted-foreground">Spacious playgrounds for cricket, football, and athletics</p>
          </div>

          <div className="rounded-lg border bg-card p-6 text-center shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto mb-4 h-10 w-10 text-primary"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
            <h3 className="mb-2 text-lg font-medium">Library</h3>
            <p className="text-sm text-muted-foreground">Well-stocked with books, journals, and digital resources</p>
          </div>

          <div className="rounded-lg border bg-card p-6 text-center shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto mb-4 h-10 w-10 text-primary"
            >
              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
            </svg>
            <h3 className="mb-2 text-lg font-medium">Language Lab</h3>
            <p className="text-sm text-muted-foreground">Advanced facilities for language learning and development</p>
          </div>

          <div className="rounded-lg border bg-card p-6 text-center shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto mb-4 h-10 w-10 text-primary"
            >
              <path d="M9 3H5a2 2 0 0 0-2 2v4" />
              <path d="M9 21H5a2 2 0 0 1-2-2v-4" />
              <path d="M15 3h4a2 2 0 0 1 2 2v4" />
              <path d="M15 21h4a2 2 0 0 0 2-2v-4" />
              <path d="M9 9h6" />
              <path d="M9 15h6" />
              <path d="M9 12h6" />
            </svg>
            <h3 className="mb-2 text-lg font-medium">Science Labs</h3>
            <p className="text-sm text-muted-foreground">Fully equipped physics, chemistry, and biology laboratories</p>
          </div>

          <div className="rounded-lg border bg-card p-6 text-center shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto mb-4 h-10 w-10 text-primary"
            >
              <rect width="20" height="14" x="2" y="3" rx="2" />
              <line x1="8" x2="16" y1="21" y2="21" />
              <line x1="12" x2="12" y1="17" y2="21" />
            </svg>
            <h3 className="mb-2 text-lg font-medium">Computer Lab</h3>
            <p className="text-sm text-muted-foreground">Modern computers with internet access and latest software</p>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="mb-16 rounded-xl bg-muted/50 p-8">
        <h2 className="mb-8 text-center text-2xl font-semibold text-primary">Message from the Chairman</h2>
        <div className="grid gap-8 md:grid-cols-[1fr_3fr]">
          <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
            <Image src="/images/chairman.jpg" alt="Chairman" fill className="object-cover" />
          </div>
          <div>
            <blockquote className="border-l-4 border-primary pl-4">
              <p className="mb-4 italic text-muted-foreground">
                "At Scholar's Pride School, we believe that education is not just about academic achievement, but about
                nurturing well-rounded individuals who are prepared to face the challenges of tomorrow. Our commitment
                is to provide a learning environment that encourages curiosity, critical thinking, and character
                development.
              </p>
              <p className="mb-4 italic text-muted-foreground">
                We strive to instill in our students the values of respect, responsibility, and resilience. Our
                dedicated faculty works tirelessly to ensure that each child receives personalized attention and
                guidance to help them discover their unique talents and abilities.
              </p>
              <p className="italic text-muted-foreground">
                Together, we can create a brighter future for our children and our community."
              </p>
            </blockquote>
            <div className="mt-4">
              <p className="font-semibold">Mr. Brij Bhushan Bansal</p>
              <p className="text-sm text-muted-foreground">Chairman, Scholar's Pride School</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16 rounded-xl bg-muted/50 p-8">
        <h2 className="mb-8 text-center text-2xl font-semibold text-primary">Message from the Director</h2>
        <div className="grid gap-8 md:grid-cols-[1fr_3fr]">
          <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
            <Image src="/images/director.jpg" alt="Chairman" fill className="object-cover" />
          </div>
          <div>
            <blockquote className="border-l-4 border-primary pl-4">
              <p className="mb-4 italic text-muted-foreground">
              "Education today goes beyond textbooks — it's about inspiring young minds to think critically, adapt confidently, and grow with integrity. We are committed to nurturing scholars who are not only academically sound but also socially aware and globally competent. </p>
              <p className="mb-4 italic text-muted-foreground">
              By blending technology with traditional values, and offering a supportive, inclusive environment, we guide each child to explore their strengths and shape their future with purpose.
               </p>
              <p className="italic text-muted-foreground">
              With dedication from our teachers and support from parents, we believe every scholar can rise to meet the challenges of tomorrow."
              </p>
            </blockquote>
            <div className="mt-4">
              <p className="font-semibold">Mr. Raman Bansal</p>
              <p className="text-sm text-muted-foreground">Director, Scholar's Pride School</p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section>
        <h2 className="mb-8 text-center text-2xl font-semibold text-primary">Our Curriculum</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-medium">CBSE Curriculum</h3>
            <p className="mb-4 text-muted-foreground">
              Scholar's Pride School follows the Central Board of Secondary Education (CBSE) curriculum, which is
              designed to provide a balanced education that emphasizes both theoretical knowledge and practical skills.
            </p>
            <p className="text-muted-foreground">
              Our teaching methodology focuses on conceptual understanding, critical thinking, and application-based
              learning. We supplement the core curriculum with a variety of co-curricular activities to ensure the
              holistic development of our students.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-medium">Beyond Academics</h3>
            <p className="mb-4 text-muted-foreground">
              We believe that education extends beyond textbooks. Our comprehensive program includes sports, arts,
              music, dance, and various clubs that allow students to explore their interests and develop their talents.
            </p>
            <p className="text-muted-foreground">
              Regular field trips, workshops, and guest lectures provide students with real-world exposure and help them
              connect classroom learning with practical applications.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}