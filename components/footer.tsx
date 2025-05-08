import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t bg-muted/40 relative">
      <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden">
        <div className="relative h-full w-full opacity-5">
          <Image src="/images/scholars-pride-logo.png" alt="School Logo Background" fill className="object-contain" />
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* School Info */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <div className="relative h-12 w-12 overflow-hidden">
                <Image
                  src="/images/scholars-pride-logo.png"
                  alt="Scholar's Pride Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-lg font-bold text-primary">Scholar's Pride</p>
                <p className="text-xs text-muted-foreground">CBSE Affiliated School</p>
              </div>
            </Link>
            <p className="mb-4 text-sm text-muted-foreground">
              Scholar's Pride School is committed to providing quality education that nurtures both academic excellence
              and character development.
            </p>
            <p className="mb-2 text-sm font-medium">CBSE Affiliation No: 1630732</p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about/page.tsx" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-muted-foreground hover:text-primary">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-muted-foreground hover:text-primary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  Calendar
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  Scholar's Pride School, Opp. Panchvati Mandir, Bagrian Road, DHURI
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  +91 70871 35842
                  <br />
                  +91 98144 00452
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-primary" />
                <span className="text-muted-foreground">
                  info@scholarspride.edu.in
                  <br />
                  admissions@scholarspride.edu.in
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Subscribe to our newsletter to receive updates on school events, activities, and announcements.
            </p>
            <form className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-l-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <button
                  type="submit"
                  className="rounded-r-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Scholar's Pride School. All rights reserved.</p>
          <p className="mt-1">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="#" className="hover:underline">
              {" "}
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
