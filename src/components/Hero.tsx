"use client";
import React from "react";
import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { IconBriefcase, IconCode, IconArrowDown } from "@tabler/icons-react";

export function Hero() {
    return (
        <section className="min-h-[calc(100vh-72px-2rem)] flex flex-col justify-center relative py-16">
            <div className="max-w-[1120px] mx-auto px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-[3fr_2.2fr] gap-14 items-center">
                    {/* Text Content */}
                    <div className="max-w-[560px]">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-[0.8rem] tracking-[0.28em] uppercase text-accent-strong mb-3 font-medium flex items-center gap-2"
                        >
                            <IconCode className="w-4 h-4" />
                            {resumeData.personalInfo.designation}
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-[clamp(2.3rem,5vw,3.4rem)] leading-[1.08] font-bold mb-2 text-text"
                        >
                            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent tracking-tight">
                                {resumeData.personalInfo.name}
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-[1.1rem] text-muted mb-1"
                        >
                            {resumeData.personalInfo.role}
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-[0.95rem] text-gray-400/80 mb-6"
                        >
                            {resumeData.personalInfo.location}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap gap-3 mb-6"
                        >
                            <a
                                href="#projects"
                                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-[0.9rem] font-medium bg-gradient-to-br from-indigo-500 to-pink-500 text-white shadow-soft hover:-translate-y-[1px] hover:scale-[1.02] hover:shadow-[0_22px_50px_rgba(79,70,229,0.9)] transition-all duration-200"
                            >
                                <IconBriefcase className="w-4 h-4" />
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-[0.9rem] font-medium bg-[rgba(15,23,42,0.5)] border border-[rgba(148,163,184,0.4)] text-muted hover:bg-[rgba(15,23,42,0.9)] hover:border-[rgba(148,163,184,0.8)] hover:text-text hover:-translate-y-[1px] transition-all duration-200"
                            >
                                Contact
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex flex-wrap gap-5 p-3.5 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.65),transparent_55%)] border border-transparent"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle at top, rgba(37, 99, 235, 0.65), transparent 55%), linear-gradient(120deg, rgba(99, 102, 241, 0.5), rgba(236, 72, 153, 0.5))",
                                backgroundOrigin: "border-box",
                                backgroundClip: "padding-box, border-box",
                            }}
                        >
                            <div className="min-w-[120px]">
                                <span className="block text-[0.7rem] tracking-[0.16em] uppercase text-gray-400/80">
                                    Experience
                                </span>
                                <span className="block text-[0.9rem] mt-0.5">{resumeData.personalInfo.experience}</span>
                            </div>
                            <div className="min-w-[120px]">
                                <span className="block text-[0.7rem] tracking-[0.16em] uppercase text-gray-400/80">
                                    Tech Stack
                                </span>
                                <span className="block text-[0.9rem] mt-0.5">
                                    {resumeData.personalInfo.techStack.join(", ")}
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Content (Orbit) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="flex justify-center order-first lg:order-last"
                    >
                        <div className="relative w-[min(340px,75vw)] aspect-square rounded-full bg-[radial-gradient(circle_at_20%_0,#1d4ed8,#020617_60%)] shadow-[0_18px_55px_rgba(15,23,42,0.9)] overflow-hidden">
                            {/* Orbit Circles with animation */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[12%] rounded-full border border-dashed border-[rgba(148,163,184,0.55)]"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[28%] rounded-full border border-solid border-[rgba(79,70,229,0.8)]"
                            />

                            {/* Avatar */}
                            <div className="absolute inset-[24%] rounded-full grid place-items-center bg-[radial-gradient(circle_at_30%_10%,#4f46e5,#020617)]">
                                <div className="absolute inset-[6%] rounded-full border border-[rgba(248,250,252,0.2)]" />
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative w-[56%] aspect-square rounded-[32%] bg-[radial-gradient(circle_at_50%_10%,#f97316,#ec4899_40%,#4f46e5_76%)] shadow-[0_18px_40px_#0f172a] grid place-items-center"
                                >
                                    <span className="font-extrabold text-white text-2xl tracking-widest">
                                        {resumeData.personalInfo.initials}
                                    </span>
                                </motion.div>
                            </div>

                            {/* Badges with enhanced animation */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ delay: 0.8, type: "spring" }}
                                className="absolute top-[16%] right-[8%] px-3.5 py-1.5 rounded-full text-[0.7rem] tracking-[0.16em] uppercase bg-[rgba(15,23,42,0.9)] text-gray-200 border border-[rgba(148,163,184,0.6)] cursor-default"
                            >
                                {resumeData.personalInfo.heroTags[0]}
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.1 }}
                                transition={{ delay: 0.9, type: "spring" }}
                                className="absolute bottom-[16%] left-[10%] px-3.5 py-1.5 rounded-full text-[0.7rem] tracking-[0.16em] uppercase bg-[rgba(15,23,42,0.9)] text-gray-200 border border-[rgba(148,163,184,0.6)] cursor-default"
                            >
                                {resumeData.personalInfo.heroTags[1]}
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="mt-12 text-center"
            >
                <p className="text-[0.8rem] uppercase tracking-[0.28em] text-gray-400/80 flex items-center justify-center gap-2">
                    Scroll to explore
                    <motion.span
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <IconArrowDown className="w-4 h-4" />
                    </motion.span>
                </p>
            </motion.div>
        </section>
    );
}
