"use client";
import React from "react";
import { resumeData } from "@/data/resume";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { IconExternalLink, IconCode } from "@tabler/icons-react";

export function Projects() {
    return (
        <div className="max-w-[1120px] mx-auto px-6">
            <div className="flex flex-col gap-1 mb-9">
                <p className="text-[0.8rem] tracking-[0.26em] uppercase text-[rgba(129,140,248,0.85)] flex items-center gap-2">
                    <IconCode className="w-4 h-4" />
                    Projects
                </p>
                <h2 className="text-[1.7rem] m-0 font-bold text-text">Selected Work</h2>
            </div>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
                {resumeData.projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </div>
    );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        x.set(clientX - left);
        y.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            onMouseMove={onMouseMove}
            className="group relative overflow-hidden rounded-[18px] bg-[radial-gradient(circle_at_0_0,rgba(52,211,153,0.08),transparent_55%)] border border-transparent p-[1rem_1rem_1.1rem] cursor-pointer"
            style={{
                backgroundImage:
                    "radial-gradient(circle at 0 0, rgba(52, 211, 153, 0.08), transparent 55%), linear-gradient(135deg, rgba(59, 130, 246, 0.7), rgba(236, 72, 153, 0.7))",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
            }}
        >
            {/* Hover Gradient Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[18px] opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([newX, newY]) =>
                            `radial-gradient(600px circle at ${newX}px ${newY}px, rgba(244,114,182,0.15), transparent 40%)`
                    ),
                }}
            />

            <div className="relative z-10">
                <div className="flex justify-between items-start gap-2.5 mb-2">
                    <h3 className="text-[1rem] font-medium text-white group-hover:text-accent transition-colors">
                        {project.title}
                    </h3>
                    <motion.span
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="text-[0.65rem] uppercase tracking-[0.16em] px-2 py-0.5 rounded-full bg-[rgba(15,23,42,0.93)] border border-[rgba(148,163,184,0.7)] text-gray-300 whitespace-nowrap flex items-center gap-1"
                    >
                        <IconCode className="w-3 h-3" />
                        Project
                    </motion.span>
                </div>
                <p className="text-[0.9rem] text-[rgba(226,232,240,0.92)] mb-3 line-clamp-3">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-x-2 gap-y-1 mb-3">
                    {project.technologies.map((tech: string, i: number) => (
                        <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.05 }}
                            className="text-[0.72rem] text-[rgba(191,219,254,0.88)] px-[0.45rem] py-[0.1rem] rounded-full bg-[rgba(15,23,42,0.8)]"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[0.8rem] text-[rgba(191,219,254,0.95)] hover:text-accent transition-colors"
                    >
                        <IconExternalLink className="w-3.5 h-3.5" />
                        View Project
                    </a>
                )}
            </div>
        </motion.div>
    );
}
