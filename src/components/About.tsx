import { resumeData } from "@/data/resume";

export const About = () => {
    return (
        <div className="max-w-[1120px] mx-auto px-6">
            <div className="flex flex-col gap-1 mb-9">
                <p className="text-[0.8rem] tracking-[0.26em] uppercase text-[rgba(129,140,248,0.85)]">About</p>
                <h2 className="text-[1.7rem] m-0 font-bold text-text">Who I am</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[1.65fr_1.25fr] gap-7 mb-8">
                <div className="p-[1.4rem_1.5rem] rounded-[18px] bg-[radial-gradient(circle_at_0_0,rgba(79,70,229,0.18),transparent_60%)] border border-transparent shadow-xs text-[0.96rem] leading-[1.6] text-[rgba(226,232,240,0.9)]"
                    style={{
                        backgroundImage: "radial-gradient(circle at 0 0, rgba(79, 70, 229, 0.18), transparent 60%), linear-gradient(135deg, rgba(56, 189, 248, 0.5), rgba(79, 70, 229, 0.5))",
                        backgroundOrigin: "border-box",
                        backgroundClip: "padding-box, border-box"
                    }}>
                    {resumeData.personalInfo.summary}
                </div>
                <div className="grid gap-3">
                    <div className="p-[0.9rem_1rem] rounded-[12px] bg-[rgba(15,23,42,0.96)] border border-[rgba(75,85,99,0.8)]">
                        <span className="block text-[0.75rem] uppercase tracking-[0.15em] text-[rgba(148,163,184,0.9)]">Current Role</span>
                        <span className="block mt-0.5 text-[0.95rem]">{resumeData.personalInfo.role}</span>
                    </div>
                    <div className="p-[0.9rem_1rem] rounded-[12px] bg-[rgba(15,23,42,0.96)] border border-[rgba(75,85,99,0.8)]">
                        <span className="block text-[0.75rem] uppercase tracking-[0.15em] text-[rgba(148,163,184,0.9)]">Company</span>
                        <span className="block mt-0.5 text-[0.95rem]">{resumeData.experience[0].company}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

