"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase } from "lucide-react"

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

const contributions = [
  "Optimized frontend performance through code splitting, lazy loading, and React memoization for performance-sensitive workflows.",
  "Architected scalable React applications with TypeScript and Redux Toolkit across AI, agriculture, and BI platforms.",
  "Engineered JWT-based authentication and RBAC system for multi-tenant enterprise applications.",
  "Developed production-grade REST APIs using Node.js and PostgreSQL with schema design and query optimization.",
  "Transitioned into .NET ecosystem, contributing to enterprise CSP backend development.",
  "Designed reusable UI component library using Tailwind CSS and Shadcn UI.",
]

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef)

  return (
    <section id="experience" ref={sectionRef} className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-sm font-mono text-primary tracking-wider uppercase">Experience</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Where I{"'"}ve worked
          </h2>
        </div>

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          {/* Work experience */}
          <div
            className={`relative md:pl-24 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-5 top-2 hidden h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background md:flex">
              <div className="h-2 w-2 rounded-full bg-primary" />
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 transition-colors hover:border-primary/20">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="inline-flex rounded-lg bg-primary/10 p-2.5 text-primary md:hidden">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      Promact Infotech Pvt. Ltd.
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      Software Engineer - Fullstack Developer
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 flex items-center gap-2 text-sm text-muted-foreground font-mono">
                  <span>Jan 2023 - Present</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs text-primary font-medium">
                    3 Years
                  </span>
                </div>
              </div>

              <p className="mt-2 text-sm text-muted-foreground">Vadodara, Gujarat</p>

              <ul className="mt-6 flex flex-col gap-3">
                {contributions.map((item, i) => (
                  <li
                    key={i}
                    className={`flex gap-3 transition-all duration-500 ${
                      inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${400 + i * 100}ms` }}
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js", ".NET (C#)", "PostgreSQL", "Redux Toolkit", "Tailwind CSS", "REST APIs"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-mono text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
