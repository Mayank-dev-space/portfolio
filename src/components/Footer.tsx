"use client";
import React from "react";
import { resumeData } from "@/data/resume";

export function Footer() {
    return (
        <footer className="border-t border-[rgba(31,41,55,0.9)] py-6 bg-[radial-gradient(circle_at_top,#020617_0,#020617_70%,#020617_100%)]">
            <div className="max-w-[1120px] mx-auto px-6 text-center">
                <p className="text-[0.8rem] text-[rgba(148,163,184,0.9)] mb-1">
                    <span className="font-medium text-gray-300">
                        {resumeData.personalInfo.name}
                    </span>{" "}
                    &mdash; <span>{resumeData.personalInfo.role}</span>
                </p>
            </div>
        </footer>
    );
}
