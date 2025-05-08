"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

// Sample gallery data
const galleryData = {
  "School Events": [
    { id: 1, src: "/images/certificate.png", alt: "Annual Certificate Distribution" },
    { id: 2, src: "/images/sandbag.png", alt: "Sandbag Race" },
    { id: 3, src: "/images/rally.png", alt: "Eco Club Rally" },
    { id: 4, src: "/images/womens_day.jpg", alt: "Women's Day" },
  ],
  "Facilities & Infrastructure": [
    { id: 5, src: "/images/OAT.jpg", alt: "Open Air Theatre" },
    { id: 6, src: "/images/library.jpeg", alt: "Library" },
    { id: 7, src: "/images/swings.jpg", alt: "Playground" },
    { id: 8, src: "/images/transport.jpg", alt: "Transport" },
  ],
  "Student Activities": [
    { id: 9, src: "/images/student_activity.jpeg", alt: "" },
    { id: 10, src: "/images/debate.png", alt: "Debate Competition" },
    { id: 11, src: "/images/indoor_game.jpg", alt: "Indoor Games" },
    { id: 12, src: "/images/music.png", alt: "Music Class" },
  ],
  "Celebrations & Functions": [
    { id: 13, src: "/images/rangoli.jpeg", alt: "Diwali Celebration" },
    { id: 14, src: "/images/christmas.jpg", alt: "Christmas Celebration" },
    { id: 15, src: "/images/mothersday.jpg", alt: "Mother's Day Card Making" },
    { id: 16, src: "/images/hawan.png", alt: "Hawan" },
  ],
  "Sports Competitions": [
    { id: 17, src: "/images/game.png", alt: "Khoo khoo" },
    { id: 18, src: "/images/parade.jpeg", alt: "School Parade" },
    { id: 19, src: "/images/hurdle.png", alt: "Athletics Meet" },
    { id: 20, src: "/images/yoga.png", alt: "Yoga" },
  ],
  "Cultural Performances": [
    { id: 21, src: "/images/dance.png", alt: "Dance Practise" },
    { id: 22, src: "/images/delex.jpg", alt: "Foreign Exchange" },
    { id: 23, src: "/images/music", alt: "Music Concert" },
    { id: 24, src: "/images/dance.jpg", alt: "Folk Dance" },
  ],
}

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMorningPrayerPlaying, setIsMorningPrayerPlaying] = useState(false)
  const morningPrayerRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    setIsPlaying(true)
    videoRef.current?.play()
  }
  const handleMorningPrayerPlay = () => {
    setIsMorningPrayerPlaying(true)
    morningPrayerRef.current?.play()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-primary">School Gallery</h1>
      <p className="mb-8 text-center text-muted-foreground">
        Explore the vibrant life at Scholar's Pride School through our collection of photos showcasing various events,
        activities, and facilities.
      </p>

      <Tabs defaultValue="School Events" className="w-full">
        <TabsList className="mb-8 flex w-full flex-nowrap overflow-x-auto whitespace-nowrap -mx-4 px-4 justify-start gap-2">
          {Object.keys(galleryData).map((category) => (
            <TabsTrigger key={category} value={category} className="px-4 py-2">
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(galleryData).map(([category, images]) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {images.map((image) => (
                <Dialog key={image.id}>
                  <DialogTrigger asChild>
                    <div
                      className="group relative h-64 cursor-pointer overflow-hidden rounded-lg transition-all hover:shadow-lg"
                      onClick={() => setSelectedImage(image)}
                    >
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
                        <p className="text-white">{image.alt}</p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <div className="relative h-[60vh] w-full">
                      <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-contain" />
                    </div>
                    <p className="mt-2 text-center font-medium">{image.alt}</p>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* Video Section */}
      <section className="mt-16">
        <h2 className="mb-8 text-center text-2xl font-semibold text-primary">School Videos</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-video w-full">
              <video
                ref={morningPrayerRef}
                src="/images/morning_prayer.mp4"
                className="object-cover w-full h-full"
                controls={isMorningPrayerPlaying}
                onPause={() => setIsMorningPrayerPlaying(false)}
                onEnded={() => setIsMorningPrayerPlaying(false)}
                aria-label="Morning Prayer"
              />
              {!isMorningPrayerPlaying && (
                <button
                  className="absolute inset-0 flex items-center justify-center bg-black/30 transition hover:bg-black/50"
                  onClick={handleMorningPrayerPlay}
                  aria-label="Play video"
                  type="button"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-white shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </button>
              )}
            </div>
            <h3 className="mt-2 text-center font-medium">Morning Prayer</h3>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-video w-full">
              <video
                ref={videoRef}
                src="/images/sports_day.mp4"
                className="object-cover w-full h-full"
                controls={isPlaying}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
              />
              {!isPlaying && (
                <button
                  className="absolute inset-0 flex items-center justify-center bg-black/30 transition hover:bg-black/50"
                  onClick={handlePlay}
                  aria-label="Play video"
                  type="button"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-white shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                </button>
              )}
            </div>
            <h3 className="mt-2 text-center font-medium">Sports Day Highlights</h3>
          </div>

          <div className="overflow-hidden rounded-lg">
            <div className="relative aspect-video w-full">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="School Tour Video"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-white">
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
                    className="ml-1"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="mt-2 text-center font-medium">Virtual School Tour</h3>
          </div>
        </div>
      </section>
    </div>
  )
}
