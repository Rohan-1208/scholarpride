"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Admissions", href: "/admissions" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Scholar's Pride School</span>
            <div className="flex items-center gap-3">
              <div className="relative h-16 w-16 overflow-hidden sm:h-20 sm:w-20">
                <Image
                  src="/images/scholars-pride-logo.png"
                  alt="Scholar's Pride Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-xl font-bold text-primary">Scholar's Pride</p>
                <p className="text-sm text-muted-foreground">CBSE Affiliated School</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex flex-1 items-center justify-end gap-4">
          <Button asChild className="hidden lg:inline-flex">
            <Link href="/admissions">Apply Now</Link>
          </Button>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <span className="sr-only">Scholar's Pride School</span>
                  <div className="flex items-center gap-2">
                    <div className="relative h-14 w-14 overflow-hidden">
                      <Image
                        src="/images/scholars-pride-logo.png"
                        alt="Scholar's Pride Logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <p className="text-lg font-bold text-primary">Scholar's Pride</p>
                  </div>
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              <div className="mt-6 flow-root">
                <div className="divide-y">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-base font-medium text-foreground transition-colors hover:bg-muted"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Button asChild className="w-full">
                      <Link href="/admissions" onClick={() => setMobileMenuOpen(false)}>
                        Apply Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}