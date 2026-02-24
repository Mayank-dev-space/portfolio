"use client"

import { useEffect, useRef } from "react"
import { ArrowDown, Linkedin, Mail, Phone } from "lucide-react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const children = el.querySelectorAll("[data-animate]")
    children.forEach((child, i) => {
      const htmlChild = child as HTMLElement
      htmlChild.style.opacity = "0"
      htmlChild.style.transform = "translateY(30px)"
      setTimeout(() => {
        htmlChild.style.transition = "opacity 0.8s ease, transform 0.8s ease"
        htmlChild.style.opacity = "1"
        htmlChild.style.transform = "translateY(0)"
      }, 200 + i * 150)
    })
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="grid-bg absolute inset-0" />

      {/* Glow orbs */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl animate-glow-pulse" />
      <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-primary/8 blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div ref={containerRef} className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div data-animate className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground font-mono">
          <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
          Available for opportunities
        </div>

        <h1 data-animate className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance">
          Hi, I{"'"}m{" "}
          <span className="text-primary">Mayank</span>
        </h1>

        <p data-animate className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">
          Fullstack Developer crafting enterprise-grade web experiences across AI, agriculture, and SaaS platforms. I turn complex problems into elegant, performant interfaces.
        </p>

        <div data-animate className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:brightness-110 hover:shadow-lg hover:shadow-primary/20"
          >
            View My Work
            <ArrowDown size={16} className="transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-secondary hover:border-primary/30"
          >
            Get in Touch
          </a>
        </div>

        <div data-animate className="mt-12 flex items-center justify-center gap-6">
          <a
            href="mailto:mayankvishwakarma.dev@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mayank-vishwakarma-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="tel:+919522309192"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Phone"
          >
            <Phone size={20} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground font-mono">scroll</span>
          <div className="h-8 w-5 rounded-full border border-border flex items-start justify-center p-1">
            <div className="h-2 w-1 rounded-full bg-primary animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
