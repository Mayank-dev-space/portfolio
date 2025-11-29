"use client";
import React from "react";
import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { IconBook, IconExternalLink } from "@tabler/icons-react";

export function Publications() {
    return (
        <div className="max-w-[1120px] mx-auto px-6">
            <div className="flex flex-col gap-1 mb-9">
                <p className="text-[0.8rem] tracking-[0.26em] uppercase text-[rgba(129,140,248,0.85)] flex items-center gap-2">
                    <IconBook className="w-4 h-4" />
                    Writing
                </p>
                <h2 className="text-[1.7rem] m-0 font-bold text-text">Blogs & Notes</h2>
            </div>

            <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-5">
                {resumeData.publications.map((pub, index) => (
                    <motion.a
                        key={index}
                        href={pub.link ?? "#"}
                        target="_blank"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -3, scale: 1.02 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="relative overflow-hidden rounded-[18px] bg-[rgba(15,23,42,0.95)] border border-[rgba(55,65,81,0.9)] p-[1rem_1rem_1.05rem] shadow-xs hover:border-[rgba(129,140,248,0.5)] hover:shadow-[0_12px_28px_rgba(79,70,229,0.3)] transition-all duration-300 group block no-underline"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(129,140,248,0.08),transparent_30%,rgba(236,72,153,0.08))] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="relative z-10">
                            <h3 className="text-[0.98rem] m-0 mb-1.5 text-white font-medium group-hover:text-accent transition-colors flex items-start gap-2">
                                <IconBook className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <span>{pub.title}</span>
                            </h3>
                            <div className="text-[0.75rem] text-muted mb-2">{pub.platform}</div>
                            <span className="inline-flex items-center gap-1 text-[0.82rem] text-[rgba(191,219,254,0.95)] group-hover:text-accent transition-colors">
                                <IconExternalLink className="w-3.5 h-3.5" />
                                Read Article
                            </span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
}
