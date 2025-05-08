"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, FileText, Calendar, HelpCircle, ChevronDown } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Types
interface FaqItem {
  id: number
  question: string
  answer: string | React.ReactNode
}

interface FaqItemProps {
  question: string
  answer: string | React.ReactNode
  isOpen: boolean
  onClick: () => void
}

// FAQ Data
const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What is the admission process for new students?",
    answer: (
      <div>
        The admission process involves five simple steps:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Submit the application form with required documents</li>
          <li>Complete the entrance assessment</li>
          <li>Attend parent-student interview</li>
          <li>Receive admission confirmation</li>
          <li>Complete fee payment</li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    question: "What is the age requirement for Nursery admission?",
    answer: "For Nursery admission, the child should be at least 3 years old as of 31st March of the academic year.",
  },
  {
    id: 3,
    question: "Is transportation facility available?",
    answer: "Yes, we provide transportation facilities for students from various locations in and around Dhuri. The transportation fee varies based on the distance from the school.",
  },
  {
    id: 4,
    question: "What is the student-teacher ratio?",
    answer: "We maintain a student-teacher ratio of 20:1 to ensure personalized attention and effective classroom management.",
  },
  {
    id: 5,
    question: "Can I apply for mid-session admission?",
    answer: "Yes, mid-session admissions are considered subject to seat availability and meeting the eligibility criteria. Please contact the admission office for more information.",
  },
  {
    id: 6,
    question: "What extracurricular activities are offered?",
    answer: (
      <div>
        We offer a wide range of activities including:
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Sports and athletics</li>
          <li>Music and dance</li>
          <li>Art and craft</li>
          <li>Debate and public speaking</li>
          </ul>
      </div>
    ),
  },
]

// FAQ Item Component
function FaqItem({ question, answer, isOpen, onClick }: FaqItemProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <div 
      className="border rounded-lg mb-4 hover:border-primary/50 transition-all duration-200"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <div className="w-full px-6 py-4 flex items-center justify-between cursor-pointer">
        <h3 className="font-medium text-lg pr-4">{question}</h3>
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="h-6 w-6 text-primary flex-shrink-0" />
        </div>
      </div>
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <div className="text-muted-foreground">
          {answer}
        </div>
      </div>
    </div>
  )
}

export default function AdmissionsPage() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem((current) => current === id ? null : id)
  }

  return (
    <div className="container mx-auto px-4 py-12 relative">
      <div className="absolute inset-0 flex items-center justify-center z-0 overflow-hidden">
        <div className="relative h-full w-full opacity-5">
          <Image src="/images/scholars-pride-logo.png" alt="School Logo Background" fill className="object-contain" />
        </div>
      </div>
      <h1 className="mb-8 text-center text-4xl font-bold text-primary">Admissions</h1>
      <p className="mb-12 text-center text-muted-foreground">
        Join the Scholar's Pride family and embark on a journey of academic excellence and holistic development.
      </p>

      {/* Admission Process */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-semibold text-primary">Admission Process</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
            <Image
              src="/images/coat.png"
              alt="Students in classroom"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="mb-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">1</div>
                <div>
                  <h3 className="font-medium">Application Submission</h3>
                  <p className="text-muted-foreground">
                    Complete and submit the application form along with required documents.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">2</div>
                <div>
                  <h3 className="font-medium">Entrance Assessment</h3>
                  <p className="text-muted-foreground">
                    Students undergo an assessment to evaluate their academic readiness.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">3</div>
                <div>
                  <h3 className="font-medium">Parent-Student Interview</h3>
                  <p className="text-muted-foreground">
                    A brief interaction with the Principal and admission committee.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">4</div>
                <div>
                  <h3 className="font-medium">Admission Confirmation</h3>
                  <p className="text-muted-foreground">Selected students receive an admission offer letter.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">5</div>
                <div>
                  <h3 className="font-medium">Fee Payment</h3>
                  <p className="text-muted-foreground">Complete the admission process by paying the required fees.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="#application-form">Apply Now</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#documents">Required Documents</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="mb-16" id="eligibility">
        <h2 className="mb-8 text-center text-2xl font-semibold text-primary">Eligibility Criteria</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Pre-Primary (Nursery to KG)</CardTitle>
              <CardDescription>Age requirements for pre-primary classes</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                  <span>Nursery: 3+ years as of 31st March</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                  <span>LKG: 4+ years as of 31st March</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                  <span>UKG: 5+ years as of 31st March</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Primary (Classes I-V)</CardTitle>
              <CardDescription>Requirements for primary classes</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                  <span>Age appropriate for the class applied</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                  <span>Successful completion of previous class</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                  <span>Transfer Certificate from previous school</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Middle & Secondary (VI-XII)</CardTitle>
              <CardDescription>Requirements for higher classes</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                  <span>Minimum 60% marks in previous class</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                  <span>Transfer Certificate from previous school</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                  <span>Character Certificate</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-5 w-5 text-primary" />
                  <span>Report Card of previous academic year</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Required Documents */}
      <section className="mb-16" id="documents">
        <h2 className="mb-8 text-center text-2xl font-semibold text-primary">Required Documents</h2>
        <div className="mx-auto max-w-3xl rounded-xl bg-muted/50 p-6">
          <ul className="grid gap-4 sm:grid-cols-2">
            <li className="flex items-start gap-3">
              <FileText className="mt-0.5 h-5 w-5 text-primary" />
              <span>Completed Application Form</span>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="mt-0.5 h-5 w-5 text-primary" />
              <span>Birth Certificate (Original + Copy)</span>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="mt-0.5 h-5 w-5 text-primary" />
              <span>Transfer Certificate (Original)</span>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="mt-0.5 h-5 w-5 text-primary" />
              <span>Report Card of Previous Class</span>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="mt-0.5 h-5 w-5 text-primary" />
              <span>Passport Size Photographs (4)</span>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="mt-0.5 h-5 w-5 text-primary" />
              <span>Aadhar Card (Copy)</span>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="mt-0.5 h-5 w-5 text-primary" />
              <span>Residential Proof (Copy)</span>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="mt-0.5 h-5 w-5 text-primary" />
              <span>Medical Fitness Certificate</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-semibold text-primary">Fee Structure</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Class</TableHead>
                <TableHead>Admission Fee (One Time)</TableHead>
                <TableHead>Annual Fee</TableHead>
                <TableHead>Quarterly Fee</TableHead>
                <TableHead>Monthly Fee</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Nursery - KG</TableCell>
                <TableCell>₹1,000</TableCell>
                <TableCell>₹12,000</TableCell>
                <TableCell>₹3,000</TableCell>
                <TableCell>₹1,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">I - II</TableCell>
                <TableCell>₹1,000</TableCell>
                <TableCell>₹14,400</TableCell>
                <TableCell>₹3,600</TableCell>
                <TableCell>₹1,200</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">III - V</TableCell>
                <TableCell>₹1,200</TableCell>
                <TableCell>₹18,000</TableCell>
                <TableCell>₹4,500</TableCell>
                <TableCell>₹1,500</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">VI - VIII</TableCell>
                <TableCell>₹1,500</TableCell>
                <TableCell>₹20,400</TableCell>
                <TableCell>₹5,100</TableCell>
                <TableCell>₹1,700</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">IX - X </TableCell>
                <TableCell>₹2,000</TableCell>
                <TableCell>₹24,000</TableCell>
                <TableCell>₹6,000</TableCell>
                <TableCell>₹2,000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="mt-4 text-sm text-muted-foreground">
          <p>
            * Additional charges for transportation, uniform, and books are not included in the above fee structure.
          </p>
          <p>* Fee structure is subject to change. Please contact the admission office for the latest information.</p>
        </div>
      </section>

      {/* Important Dates */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-semibold text-primary">Important Dates</h2>
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardContent className="flex items-start gap-4 p-6">
                <Calendar className="mt-0.5 h-10 w-10 text-primary" />
                <div>
                  <h3 className="font-medium">Application Submission</h3>
                  <p className="text-muted-foreground">November 15, 2023 - January 31, 2024</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 p-6">
                <Calendar className="mt-0.5 h-10 w-10 text-primary" />
                <div>
                  <h3 className="font-medium">Entrance Assessment</h3>
                  <p className="text-muted-foreground">February 10-15, 2024</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 p-6">
                <Calendar className="mt-0.5 h-10 w-10 text-primary" />
                <div>
                  <h3 className="font-medium">Results Declaration</h3>
                  <p className="text-muted-foreground">February 25, 2024</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-start gap-4 p-6">
                <Calendar className="mt-0.5 h-10 w-10 text-primary" />
                <div>
                  <h3 className="font-medium">Fee Payment Deadline</h3>
                  <p className="text-muted-foreground">March 15, 2024</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="mb-16" id="application-form">
        <h2 className="mb-8 text-center text-2xl font-semibold text-primary">Application Form</h2>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-muted-foreground">
            You can download the application form or visit the school office to collect a physical copy.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="w-full sm:w-auto">
              <FileText className="mr-2 h-4 w-4" />
              Download Application Form
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule a School Visit
            </Button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq) => (
            <FaqItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItem === faq.id}
              onClick={() => toggleItem(faq.id)}
            />
          ))}

          <div className="mt-8 flex items-center justify-center gap-2 p-4 bg-muted rounded-lg">
            <HelpCircle className="h-5 w-5 text-primary" />
            <p className="text-muted-foreground">
              Have more questions?{" "}
              <Link 
                href="/contact/page.tsx" 
                className="inline-block font-medium text-primary hover:underline cursor-pointer"
                prefetch={true}
              >
                Contact us
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
