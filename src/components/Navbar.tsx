"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";

export function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Publications", href: "#publications" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.header
            className={cn(
                "fixed inset-x-0 top-0 z-50 h-[72px] border-b border-transparent transition-all duration-300",
                scrolled
                    ? "bg-[rgba(15,23,42,0.92)] backdrop-blur-md border-[rgba(55,65,81,0.6)] shadow-lg"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-[1120px] mx-auto h-full px-6 flex items-center justify-between">
                <a href="#hero" className="flex items-center gap-2 no-underline">
                    <span className="flex items-center justify-center w-7 h-7 rounded-[9px] text-xs font-bold text-white bg-[radial-gradient(circle_at_0_0,#a855f7,#6366f1_50%,#22d3ee)] shadow-[0_10px_25px_rgba(59,130,246,0.65)]">
                        &lt;/&gt;
                    </span>
                    <span className="text-[0.95rem] tracking-[0.1em] uppercase text-muted font-sans">
                        Portfolio
                    </span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-5">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-[0.9rem] text-muted hover:text-text transition-colors py-1 group"
                        >
                            {link.name}
                            <span className="absolute left-0 right-0 bottom-[-0.2rem] mx-auto w-0 h-[2px] rounded-full bg-gradient-to-r from-[#6366f1] to-[#ec4899] transition-all duration-200 group-hover:w-full" />
                        </a>
                    ))}
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-1 text-text"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    {mobileMenuOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <div
                className={cn(
                    "fixed inset-x-0 top-[72px] bg-[rgba(15,23,42,0.98)] backdrop-blur-xl border-b border-[rgba(55,65,81,0.6)] p-6 flex flex-col gap-4 transition-all duration-300 md:hidden",
                    mobileMenuOpen
                        ? "translate-y-0 opacity-100 pointer-events-auto"
                        : "-translate-y-[120%] opacity-0 pointer-events-none"
                )}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="text-muted hover:text-text text-lg font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </motion.header>
    );
}
