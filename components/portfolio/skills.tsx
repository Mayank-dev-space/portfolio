"use client"

import { useEffect, useRef, useState } from "react"

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

const skillCategories = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "C#"],
  },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "Shadcn UI",
    ],
  },
  {
    title: "Backend",
    skills: [
      ".NET (C#)",
      "Entity Framework",
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Auth",
      "RBAC",
    ],
  },
  {
    title: "Database",
    skills: ["PostgreSQL"],
  },
  {
    title: "Testing",
    skills: ["Jest", "Playwright"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Jira", "Postman"],
  },
]

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef)

  return (
    <section id="skills" ref={sectionRef} className="relative py-32 px-6">
      {/* Subtle grid background */}
      <div className="grid-bg absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-6xl">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-sm font-mono text-primary tracking-wider uppercase">Skills</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            My tech stack
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground leading-relaxed">
            Technologies and tools I use to bring products to life.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`rounded-xl border border-border bg-card p-6 transition-all duration-700 hover:border-primary/20 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${200 + catIndex * 100}ms` }}
            >
              <h3 className="text-sm font-mono text-primary uppercase tracking-wider">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center rounded-lg bg-secondary/80 px-3 py-2 text-sm text-foreground transition-all duration-500 hover:bg-primary/10 hover:text-primary ${
                      inView ? "opacity-100 scale-100" : "opacity-0 scale-90"
                    }`}
                    style={{
                      transitionDelay: `${300 + catIndex * 100 + skillIndex * 50}ms`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
