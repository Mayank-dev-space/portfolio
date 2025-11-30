"use client";
import React from "react";
import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { IconCode, IconExternalLink } from "@tabler/icons-react";

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resumeData.projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </div>
    );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col h-full overflow-hidden rounded-[18px] bg-[rgba(15,23,42,0.95)] border border-[rgba(55,65,81,0.9)] p-[1.2rem] shadow-xs hover:border-[rgba(129,140,248,0.5)] hover:shadow-[0_12px_28px_rgba(79,70,229,0.15)] transition-all duration-300"
        >
            <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(129,140,248,0.03),transparent_40%,rgba(236,72,153,0.03))] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start gap-2.5 mb-3">
                    <h3 className="text-[1.1rem] font-medium text-white group-hover:text-accent transition-colors">
                        {project.title}
                    </h3>
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted hover:text-accent transition-colors p-1"
                        >
                            <IconExternalLink className="w-4 h-4" />
                        </a>
                    )}
                </div>

                <p className="text-[0.9rem] text-muted mb-4 line-clamp-3">
                    {project.description}
                </p>

                {project.responsibilities && project.responsibilities.length > 0 && (
                    <div className="mb-4">
                        <h4 className="text-[0.85rem] font-medium text-[rgba(129,140,248,0.9)] mb-1.5">Key Responsibilities</h4>
                        <ul className="list-disc list-inside space-y-1">
                            {project.responsibilities.map((item: string, i: number) => (
                                <li key={i} className="text-[0.8rem] text-[rgba(203,213,225,0.8)] leading-relaxed pl-1">
                                    <span className="-ml-1">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {project.impact && project.impact.length > 0 && (
                    <div className="mb-4">
                        <h4 className="text-[0.85rem] font-medium text-[rgba(129,140,248,0.9)] mb-1.5">Impact</h4>
                        <ul className="list-disc list-inside space-y-1">
                            {project.impact.map((item: string, i: number) => (
                                <li key={i} className="text-[0.8rem] text-[rgba(203,213,225,0.8)] leading-relaxed pl-1">
                                    <span className="-ml-1">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="mt-auto">
                    {project.technologies && project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.technologies.slice(0, 4).map((tech: string, i: number) => (
                                <span
                                    key={i}
                                    className="text-[0.75rem] text-[rgba(191,219,254,0.88)] px-2.5 py-1 rounded-full bg-[rgba(30,41,59,0.6)] border border-[rgba(51,65,85,0.5)]"
                                >
                                    {tech}
                                </span>
                            ))}
                            {project.technologies.length > 4 && (
                                <span className="text-[0.75rem] text-muted px-2 py-1">
                                    +{project.technologies.length - 4}
                                </span>
                            )}
                        </div>
                    )}

                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[0.85rem] text-[rgba(191,219,254,0.95)] group-hover:text-accent transition-colors"
                        >
                            View Project <IconExternalLink className="w-3.5 h-3.5" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
