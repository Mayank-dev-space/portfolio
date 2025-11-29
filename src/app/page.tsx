import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Publications } from "@/components/Publications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative" role="main">
      <Navbar />
      <section id="hero" aria-label="Introduction">
        <Hero />
      </section>
      <section id="about" className="py-16 border-t border-[rgba(15,23,42,0.7)]" aria-label="About Me">
        {/* About section is combined with Hero/Skills in the design flow, but let's keep a dedicated slot if needed or just use Skills as the start of 'content' */}
        {/* The user design had a specific 'About' section with stats. I'll implement a simple version here or reuse Skills structure if it fits better. 
            Actually, looking at the design, 'About' had 'Who I am' and stats. I missed creating a dedicated About component. 
            I'll add a simple About section inline or create a component. Let's create a simple inline one for now to match the structure. */}
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="flex flex-col gap-1 mb-9">
            <p className="text-[0.8rem] tracking-[0.26em] uppercase text-[rgba(129,140,248,0.85)]">About</p>
            <h2 className="text-[1.7rem] m-0 font-bold text-text">Who I am</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[1.65fr_1.25fr] gap-7">
            <div className="p-[1.4rem_1.5rem] rounded-[18px] bg-[radial-gradient(circle_at_0_0,rgba(79,70,229,0.18),transparent_60%)] border border-transparent shadow-xs text-[0.96rem] leading-[1.6] text-[rgba(226,232,240,0.9)]"
              style={{
                backgroundImage: "radial-gradient(circle at 0 0, rgba(79, 70, 229, 0.18), transparent 60%), linear-gradient(135deg, rgba(56, 189, 248, 0.5), rgba(79, 70, 229, 0.5))",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box"
              }}>
              Frontend Developer with 2 years of experience specializing in React.js and modern frontend technologies. Skilled in building scalable, responsive, and high-performance web applications.
            </div>
            <div className="grid gap-3">
              <div className="p-[0.9rem_1rem] rounded-[12px] bg-[rgba(15,23,42,0.96)] border border-[rgba(75,85,99,0.8)]">
                <span className="block text-[0.75rem] uppercase tracking-[0.15em] text-[rgba(148,163,184,0.9)]">Current Role</span>
                <span className="block mt-0.5 text-[0.95rem]">Software Engineer I</span>
              </div>
              <div className="p-[0.9rem_1rem] rounded-[12px] bg-[rgba(15,23,42,0.96)] border border-[rgba(75,85,99,0.8)]">
                <span className="block text-[0.75rem] uppercase tracking-[0.15em] text-[rgba(148,163,184,0.9)]">Company</span>
                <span className="block mt-0.5 text-[0.95rem]">Promact Infotech Pvt. Ltd.</span>
              </div>
            </div>
          </div>
        </div>
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
