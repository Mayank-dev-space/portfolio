"use client";
import React from "react";
import { resumeData } from "@/data/resume";
import { motion } from "framer-motion";
import { IconCode, IconBrandReact, IconBrandJavascript, IconBrandTypescript, IconBrandNodejs, IconTools } from "@tabler/icons-react";

export function Skills() {
    // Group skills by category
    const skillGroups = [
        {
            title: "Frontend",
            skills: resumeData.skills.frontend,
            icon: IconBrandReact,
            gradient: "from-cyan-500 to-blue-500",
        },
        {
            title: "Languages",
            skills: resumeData.skills.languages,
            icon: IconBrandJavascript,
            gradient: "from-yellow-500 to-orange-500",
        },
        {
            title: "Backend & APIs",
            skills: resumeData.skills.backend,
            icon: IconBrandNodejs,
            gradient: "from-green-500 to-emerald-500",
        },
        {
            title: "UI Frameworks",
            skills: resumeData.skills.frameworks,
            icon: IconBrandTypescript,
            gradient: "from-blue-500 to-indigo-500",
        },
        {
            title: "Tools & DevOps",
            skills: resumeData.skills.tools,
            icon: IconTools,
            gradient: "from-purple-500 to-pink-500",
        },
    ];

    return (
        <div className="max-w-[1120px] mx-auto px-6">
            <div className="flex flex-col gap-1 mb-9">
                <p className="text-[0.8rem] tracking-[0.26em] uppercase text-[rgba(129,140,248,0.85)] flex items-center gap-2">
                    <IconCode className="w-4 h-4" />
                    Skills
                </p>
                <h2 className="text-[1.7rem] m-0 font-bold text-text">Tech Toolbox</h2>
            </div>

            <div className="space-y-8">
                {skillGroups.map((group, groupIndex) => {
                    const IconComponent = group.icon;
                    return (
                        <motion.div
                            key={groupIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: groupIndex * 0.1, duration: 0.5 }}
                        >
                            <h3 className="text-[1.1rem] font-semibold text-white mb-4 flex items-center gap-2">
                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${group.gradient} flex items-center justify-center`}>
                                    <IconComponent className="w-5 h-5 text-white" />
                                </div>
                                {group.title}
                            </h3>
                            <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-4">
                                {group.skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        transition={{ delay: groupIndex * 0.1 + index * 0.03, duration: 0.3 }}
                                        className="relative overflow-hidden rounded-xl p-[0.85rem_0.9rem] bg-[radial-gradient(circle_at_0_0,rgba(52,211,153,0.18),transparent_55%)] border border-transparent shadow-[0_12px_28px_rgba(15,23,42,0.8)] flex items-center justify-center gap-2.5 cursor-default group"
                                        style={{
                                            backgroundImage:
                                                "radial-gradient(circle at 0 0, rgba(52, 211, 153, 0.18), transparent 55%), linear-gradient(135deg, rgba(52, 211, 153, 0.7), rgba(59, 130, 246, 0.85))",
                                            backgroundOrigin: "border-box",
                                            backgroundClip: "padding-box, border-box",
                                        }}
                                    >
                                        <span className="text-[0.9rem] font-medium text-white relative z-10">
                                            {skill}
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
