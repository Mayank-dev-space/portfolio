"use client";
import React from "react";
import { resumeData } from "@/data/resume";
import {
    IconMail,
    IconPhone,
    IconMapPin,
    IconBrandLinkedin,
    IconBrandGithub,
    IconBrandMedium,
    IconBrandDeviantart,
} from "@tabler/icons-react";

export function Contact() {
    return (
        <div className="max-w-[1120px] mx-auto px-6">
            <div className="flex flex-col gap-1 mb-9">
                <p className="text-[0.8rem] tracking-[0.26em] uppercase text-[rgba(129,140,248,0.85)]">
                    Contact
                </p>
                <h2 className="text-[1.7rem] m-0 font-bold text-text">
                    Let&apos;s Collaborate
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                {/* Contact Details Card */}
                <div className="rounded-[18px] bg-[rgba(15,23,42,0.96)] border border-[rgba(55,65,81,0.9)] p-[1.3rem_1.4rem_1.4rem] shadow-xs">
                    <h3 className="text-[1.1rem] font-medium text-white m-0">
                        Say Hello
                    </h3>
                    <p className="mt-1 text-[0.92rem] text-[rgba(209,213,219,0.9)]">
                        {resumeData.personalInfo.contactDescription}
                    </p>

                    <div className="mt-5 grid gap-4">
                        <div className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                                <IconMail className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <span className="block text-[0.75rem] tracking-[0.16em] uppercase text-[rgba(148,163,184,0.9)]">
                                    Email
                                </span>
                                <a
                                    href={`mailto:${resumeData.personalInfo.email}`}
                                    className="block text-[0.9rem] text-[rgba(226,232,240,0.95)] hover:text-accent transition-colors truncate"
                                >
                                    {resumeData.personalInfo.email}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                                <IconPhone className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                                <span className="block text-[0.75rem] tracking-[0.16em] uppercase text-[rgba(148,163,184,0.9)]">
                                    Phone
                                </span>
                                <a
                                    href={`tel:${resumeData.personalInfo.phone}`}
                                    className="block text-[0.9rem] text-[rgba(226,232,240,0.95)] hover:text-accent transition-colors"
                                >
                                    {resumeData.personalInfo.phone}
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                                <IconMapPin className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                                <span className="block text-[0.75rem] tracking-[0.16em] uppercase text-[rgba(148,163,184,0.9)]">
                                    Location
                                </span>
                                <span className="block text-[0.9rem] text-[rgba(226,232,240,0.95)]">
                                    {resumeData.personalInfo.location}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Links Card */}
                <div className="rounded-[18px] bg-[rgba(15,23,42,0.96)] border border-[rgba(55,65,81,0.9)] p-[1.3rem_1.4rem_1.4rem] shadow-xs">
                    <h3 className="text-[1.1rem] font-medium text-white m-0 mb-4">
                        Connect with me
                    </h3>
                    <div className="grid gap-3">
                        <a
                            href={resumeData.personalInfo.links.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 rounded-lg bg-[rgba(15,23,42,0.5)] border border-[rgba(55,65,81,0.8)] hover:border-[rgba(129,140,248,0.5)] transition-all duration-200 group"
                        >
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0077b5] to-[#005582] flex items-center justify-center flex-shrink-0">
                                <IconBrandLinkedin className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                                <div className="text-[0.9rem] font-medium text-white group-hover:text-accent transition-colors">
                                    LinkedIn
                                </div>
                                <div className="text-[0.75rem] text-muted">Professional network</div>
                            </div>
                        </a>

                        <a
                            href={resumeData.personalInfo.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 rounded-lg bg-[rgba(15,23,42,0.5)] border border-[rgba(55,65,81,0.8)] hover:border-[rgba(129,140,248,0.5)] transition-all duration-200 group"
                        >
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center flex-shrink-0">
                                <IconBrandGithub className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                                <div className="text-[0.9rem] font-medium text-white group-hover:text-accent transition-colors">
                                    GitHub
                                </div>
                                <div className="text-[0.75rem] text-muted">Code repositories</div>
                            </div>
                        </a>

                        <a
                            href={resumeData.personalInfo.links.medium}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 rounded-lg bg-[rgba(15,23,42,0.5)] border border-[rgba(55,65,81,0.8)] hover:border-[rgba(129,140,248,0.5)] transition-all duration-200 group"
                        >
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00ab6c] to-[#008556] flex items-center justify-center flex-shrink-0">
                                <IconBrandMedium className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                                <div className="text-[0.9rem] font-medium text-white group-hover:text-accent transition-colors">
                                    Medium
                                </div>
                                <div className="text-[0.75rem] text-muted">Blog posts</div>
                            </div>
                        </a>

                        <a
                            href={resumeData.personalInfo.links.devCommunity}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 rounded-lg bg-[rgba(15,23,42,0.5)] border border-[rgba(55,65,81,0.8)] hover:border-[rgba(129,140,248,0.5)] transition-all duration-200 group"
                        >
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                                <IconBrandDeviantart className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1">
                                <div className="text-[0.9rem] font-medium text-white group-hover:text-accent transition-colors">
                                    Dev Community
                                </div>
                                <div className="text-[0.75rem] text-muted">Articles & tutorials</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
