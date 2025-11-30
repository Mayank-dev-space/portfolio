import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Publications } from "@/components/Publications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";

export default function Home() {
  return (
    <main className="relative" role="main">
      <Navbar />
      <section id="hero" aria-label="Introduction">
        <Hero />
      </section>
      <section id="about" className="py-16 border-t border-[rgba(15,23,42,0.7)]" aria-label="About Me">
        <About />
      </section>
      <section id="skills" className="py-16 border-t border-[rgba(15,23,42,0.7)]" aria-label="Technical Skills">
        <Skills />
      </section>
      <section id="experience" className="py-16 border-t border-[rgba(15,23,42,0.7)]" aria-label="Work Experience">
        <Experience />
      </section>
      <section id="projects" className="py-16 border-t border-[rgba(15,23,42,0.7)]" aria-label="Projects">
        <Projects />
      </section>
      <section id="publications" className="py-16 border-t border-[rgba(15,23,42,0.7)]" aria-label="Publications and Blogs">
        <Publications />
      </section>
      <section id="contact" className="py-16 border-t border-[rgba(15,23,42,0.7)]" aria-label="Contact Information">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
