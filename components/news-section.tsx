import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"

// Sample news data
const newsItems = [
  {
    id: 1,
    title: "Annual Sports Day",
    date: "December 15",
    description: "Scholar's Pride School celebrated its Annual Sports Day with great enthusiasm and sporting spirit.",
    image: "/images/annual_sports_day.png",
    link: "#",
  },
  {
    id: 2,
    title: "World Yoga Day",
    date: "June 21",
    description: "Our Kindergarten Department celebrates World Yoga Day every year, promoting health, mindfulness, and fitness from an early age  .",
    image: "/images/yoga.png",
    link: "#",
  },
  {
    id: 3,
    title: "Independence Day Celebration",
    date: "August 15",
    description: "The school celebrates Independence Day with patriotic fervor and cultural performances.",
    image: "/images/independence.jpg",
    link: "#",
  },
  {
    id: 4,
    title: "Diwali Celebration",
    date: "October 18",
    description: "To celebrate Diwali, our students participated in a vibrant Rangoli making competition showcasing creativity and festive spirit.",
    image: "/images/rangoli.jpeg",
    link: "#",
  },
]

export default function NewsSection() {
  return (
    <section className="container mx-auto px-4">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-primary">News & Announcements</h2>
        <Button variant="outline" asChild>
          <Link href="#">View All</Link>
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {newsItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
            </div>
            <CardHeader className="p-4">
              <CardTitle className="line-clamp-1">{item.title}</CardTitle>
              <CardDescription className="flex items-center gap-1">
                <CalendarDays className="h-3 w-3" />
                {item.date}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="line-clamp-2 text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button variant="link" className="p-0" asChild>
                <Link href={item.link}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
