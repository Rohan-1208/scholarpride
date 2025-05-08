import type { ReactNode } from "react"

interface TimelineProps {
  children: ReactNode
  className?: string
}

export function Timeline({ children, className = "" }: TimelineProps) {
  return <div className={`space-y-8 ${className}`}>{children}</div>
}

interface TimelineItemProps {
  year: string
  title: string
  description: string
}

export function TimelineItem({ year, title, description }: TimelineItemProps) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
        <span className="sr-only">Year</span>
      </div>
      <div className="absolute bottom-0 left-3 top-6 w-px bg-border" />
      <div className="pb-8">
        <p className="mb-1 text-sm font-medium text-primary">{year}</p>
        <h3 className="mb-2 text-lg font-medium">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
