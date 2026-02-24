"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Layers, Zap } from "lucide-react"

function useInView(ref: React.RefObject<HTMLElement | null>, threshold = 0.2) {
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
    title: "Frontend Architect",
    desc: "Building scalable React applications with TypeScript, Redux Toolkit, and modern design systems.",
  },
  {
    icon: Layers,
    title: "Full-Stack Capable",
    desc: "End-to-end ownership from UI to API with Node.js, .NET, and PostgreSQL backends.",
  },
  {
    icon: Zap,
    title: "Performance Focused",
    desc: "Code splitting, lazy loading, memoization, and API optimization for blazing-fast UX.",
  },
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef)

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-sm font-mono text-primary tracking-wider uppercase">About</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Crafting digital experiences <br className="hidden sm:block" />
            that make an impact
          </h2>
        </div>

        <div className={`mt-8 max-w-3xl transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-muted-foreground leading-relaxed text-lg">
            I{"'"}m a Frontend-focused Developer with 3 years of experience at Promact Infotech,
            where I{"'"}ve built enterprise-grade web applications for clients across AI, agriculture,
            and SaaS domains. My expertise lies in React and TypeScript, but I{"'"}ve extended into
            backend development with Node.js and .NET to own features end-to-end.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed text-lg">
            I graduated with a B.Tech in Computer Science from Truba Institute of Engineering,
            Bhopal in 2023. I{"'"}m passionate about turning complex business requirements into
            clean, maintainable, and performant code.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {highlights.map((item, i) => (
            <div
              key={item.title}
              className={`group rounded-xl border border-border bg-card p-6 transition-all duration-500 hover:border-primary/30 hover:bg-secondary/50 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${400 + i * 150}ms` }}
            >
              <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
