"use client";
import React from "react";
import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { IconBriefcase, IconCalendar, IconMapPin } from "@tabler/icons-react";

export function Experience() {
    return (
        <div className="max-w-[1120px] mx-auto px-6">
            <div className="flex flex-col gap-1 mb-9">
                <p className="text-[0.8rem] tracking-[0.26em] uppercase text-[rgba(129,140,248,0.85)] flex items-center gap-2">
                    <IconBriefcase className="w-4 h-4" />
                    Experience
                </p>
                <h2 className="text-[1.7rem] m-0 font-bold text-text">Work Timeline</h2>
            </div>

            <div className="relative pl-[1.6rem] border-l-2 border-transparent">
                {/* Gradient Line */}
                <div className="absolute left-[0.5rem] top-[0.2rem] bottom-[0.2rem] w-[2px] rounded-full bg-gradient-to-b from-[#6366f1] to-[#ec4899] opacity-70" />

                {resumeData.experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="relative mb-[1.6rem] pl-[0.9rem] last:mb-0 group"
                    >
                        {/* Dot with pulse animation */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                            className="absolute left-[-1.35rem] top-[1.5rem] w-[11px] h-[11px] rounded-full border-[2px] border-[#020617] bg-[radial-gradient(circle_at_30%_10%,#f97316,#ec4899_70%)] shadow-[0_0_0_7px_rgba(79,70,229,0.22)] z-10"
                        >
                            <motion.div
                                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_10%,#f97316,#ec4899_70%)]"
                            />
                        </motion.div>

                        {/* Card */}
                        <div className="rounded-[18px] bg-[rgba(15,23,42,0.96)] border border-[rgba(55,65,81,0.9)] p-[0.9rem_1rem] shadow-xs hover:border-[rgba(129,140,248,0.5)] hover:shadow-[0_12px_28px_rgba(79,70,229,0.3)] transition-all duration-300">
                            <div className="text-[0.98rem] font-medium text-white">
                                {exp.role}
                            </div>
                            <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1 text-[0.75rem] text-muted">
                                <span className="px-[0.45rem] py-[0.1rem] rounded-full border border-[rgba(31,41,55,0.9)] bg-[rgba(17,24,39,0.9)] flex items-center gap-1">
                                    <IconMapPin className="w-3 h-3" />
                                    {exp.company}
                                </span>
                                <span className="px-[0.45rem] py-[0.1rem] rounded-full border border-[rgba(31,41,55,0.9)] bg-[rgba(17,24,39,0.9)] flex items-center gap-1">
                                    <IconCalendar className="w-3 h-3" />
                                    {exp.period}
                                </span>
                            </div>
                            <ul className="mt-2 text-[0.88rem] text-[rgba(209,213,219,0.92)] list-disc list-inside space-y-1">
                                {exp.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
