import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Rajiv Sharma",
    role: "Parent",
    quote:
      "Scholar's Pride School has provided an excellent learning environment for my child. The teachers are dedicated and the curriculum is comprehensive. I've seen remarkable growth in my child's academic and personal development.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Priya Malhotra",
    role: "Parent",
    quote:
      "What sets Scholar's Pride apart is their focus on holistic development. My daughter has not only excelled academically but has also developed confidence through various extracurricular activities offered by the school.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Arjun Singh",
    role: "Alumni",
    quote:
      "The years I spent at Scholar's Pride School were transformative. The values instilled and the quality of education provided have been instrumental in shaping my career and personal life. I'm proud to be an alumnus.",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialSection() {
  return (
    <section className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="mb-2 text-3xl font-bold text-primary">What People Say</h2>
        <p className="mx-auto mb-12 max-w-2xl text-muted-foreground">
          Hear from our parents, students, and alumni about their experiences at Scholar's Pride School.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="overflow-hidden">
            <CardContent className="p-6">
              <Quote className="mb-4 h-8 w-8 text-primary/40" />
              <p className="mb-6 text-muted-foreground">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
