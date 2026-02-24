"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Bot, Leaf, FileText, Users } from "lucide-react"

function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.15) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, threshold])
  return inView
}

const projects = [
  {
    icon: Users,
    title: "CSP - Customer Success Platform",
    description:
      "Enterprise-grade platform for managing customer success workflows. Built the frontend from scratch with React, implemented dark/light themes, JWT auth with RBAC, and contributed to the .NET backend.",
    tech: [".NET (C#)", "React", "TypeScript", "PostgreSQL"],
    highlights: [
      "Built frontend from scratch",
      "JWT auth with permission-based access",
      "Dark/Light theme support",
      "Scalable component architecture",
    ],
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: Bot,
    title: "Naible - AI Tools Platform",
    description:
      "Unified platform integrating multiple AI tools with voice assistant and content generation capabilities. Led frontend development with a flexible component architecture enabling rapid feature rollout.",
    tech: ["React", "TypeScript", "Node.js", "LLM"],
    highlights: [
      "Led frontend development",
      "Voice assistant integration",
      "Real-time content generation",
      "Mobile-responsive UI",
    ],
    color: "from-chart-2/20 to-chart-2/5",
  },
  {
    icon: Leaf,
    title: "Rize Farm - Agriculture Platform",
    description:
      "Agriculture platform serving farmers and agri-stakeholders across Southeast Asia. Delivered multiple feature modules with role-based access control and mobile-first responsive design.",
    tech: ["React", "Redux Toolkit", "Mobile-First Design"],
    highlights: [
      "Served users across Southeast Asia",
      "Role-based access control",
      "Multiple feature modules",
      "Mobile-first approach",
    ],
    color: "from-chart-4/20 to-chart-4/5",
  },
  {
    icon: FileText,
    title: "RFP Generator",
    description:
      "Proposal generation tool built entirely from business requirements without dedicated UX designs. Independently designed responsive layouts, reusable components, and the complete product UI.",
    tech: ["React", "TypeScript"],
    highlights: [
      "Built UI independently from requirements",
      "No UX designs provided",
      "Reusable component library",
      "Seamless API integration",
    ],
    color: "from-chart-5/20 to-chart-5/5",
  },
]

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: (typeof projects)[0]
  index: number
  inView: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-700 hover:border-primary/30 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gradient header */}
      <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
        <div
          className={`transition-all duration-500 ${hovered ? "scale-110" : "scale-100"}`}
        >
          <project.icon size={56} className="text-foreground/20" strokeWidth={1} />
        </div>
        {/* Floating dots */}
        <div className="absolute top-4 right-4 flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
          <div className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
          <div className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
          <ArrowUpRight
            size={18}
            className={`mt-1 shrink-0 text-muted-foreground transition-all duration-300 ${
              hovered ? "text-primary translate-x-0.5 -translate-y-0.5" : ""
            }`}
          />
        </div>

        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        <ul className="mt-4 grid grid-cols-2 gap-1.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-mono text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef)

  return (
    <section id="projects" ref={sectionRef} className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-sm font-mono text-primary tracking-wider uppercase">Projects</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Things I{"'"}ve built
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
            A selection of enterprise projects I{"'"}ve contributed to, spanning AI platforms,
            customer success tools, and agriculture tech.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
