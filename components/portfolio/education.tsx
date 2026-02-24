"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, BookOpen, Code2, Award } from "lucide-react"

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

const highlights = [
  {
    icon: Code2,
    title: "Computer Science",
    description: "Core focus on algorithms, data structures, software engineering, and system design.",
  },
  {
    icon: BookOpen,
    title: "Academic Foundation",
    description: "Strong fundamentals in OOP, DBMS, operating systems, and computer networks.",
  },
  {
    icon: Award,
    title: "Practical Learning",
    description: "Applied classroom knowledge through real-world projects and hands-on development.",
  },
]

export function Education() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef)

  return (
    <section id="education" ref={sectionRef} className="relative py-32 px-6">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl relative">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-sm font-mono text-primary tracking-wider uppercase">Education</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Academic background
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* Main education card */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="group relative rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 h-full">
              {/* Glow effect on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                  <GraduationCap size={28} />
                </div>

                <div className="mt-6">
                  <p className="text-sm font-mono text-primary tracking-wider">2019 - 2023</p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground leading-tight">
                    Bachelor of Technology
                  </h3>
                  <p className="mt-1 text-lg text-primary font-medium">
                    Computer Science Engineering
                  </p>
                </div>

                <div className="mt-6 border-t border-border pt-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Truba Institute of Engineering & Information Technology
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground/70">Bhopal, Madhya Pradesh</p>
                </div>

                {/* Decorative element */}
                <div className="mt-8 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
                  <span className="text-xs font-mono text-muted-foreground/50">B.Tech CSE</span>
                  <div className="h-px flex-1 bg-gradient-to-l from-primary/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>

          {/* Highlights grid */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            {highlights.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className={`group relative rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/20 ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${300 + i * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex shrink-0 rounded-lg bg-secondary p-2.5 text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{item.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
