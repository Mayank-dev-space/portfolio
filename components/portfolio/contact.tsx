"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Linkedin, Phone, ArrowUpRight } from "lucide-react"

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

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "mayankvishwakarma.dev@gmail.com",
    href: "mailto:mayankvishwakarma.dev@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "mayank-vishwakarma-dev",
    href: "https://www.linkedin.com/in/mayank-vishwakarma-dev",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9522309192",
    href: "tel:+919522309192",
  },
]

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef)

  return (
    <section id="contact" ref={sectionRef} className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <span className="text-sm font-mono text-primary tracking-wider uppercase">Contact</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Let{"'"}s work together
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed text-lg">
            I{"'"}m always open to discussing new projects, creative ideas, or opportunities to be
            part of your vision.
          </p>
        </div>

        <div className={`mt-14 grid gap-4 sm:grid-cols-3 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "LinkedIn" ? "_blank" : undefined}
              rel={link.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              className="group relative flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-primary/30 hover:bg-secondary/50"
            >
              <div className="rounded-full bg-primary/10 p-4 text-primary transition-colors group-hover:bg-primary/20">
                <link.icon size={24} />
              </div>
              <span className="text-sm font-medium text-foreground">{link.label}</span>
              <span className="text-xs text-muted-foreground break-all">{link.value}</span>
              <ArrowUpRight
                size={14}
                className="absolute right-4 top-4 text-muted-foreground/50 transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
