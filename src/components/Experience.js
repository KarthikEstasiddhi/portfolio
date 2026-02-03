export default function Experience() {
    const experiences = [
        {
            role: "Software Development Intern",
            company: "Appe Nexus Private Limited",
            period: "Jan 2025 – Jun 2025",
            description: "Contributing to live software development projects and tasks. Recognized for professionalism, responsibility, and proactiveness through a formal Letter of Appreciation.",
            tags: ["Software Development", "Live Projects"]
        },
        {
            role: "President",
            company: "GeeksforGeeks Club (VIT-AP University)",
            period: "Aug 2024 – July 2025",
            description: "Led strategic direction for 40+ core members. Organized 5 large-scale hackathons with 1000+ participants and 25+ tech events. Collaborated with industry experts for sessions on AI and Open Source.",
            tags: ["Leadership", "Event Management", "Team Building"]
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12">
                <div className="md:col-span-3 text-center md:text-left">
                    <h2 className="text-4xl font-bold text-[var(--primary)] sticky top-24 uppercase tracking-wider text-shadow-neo-sm">Experience</h2>
                </div>

                <div className="md:col-span-9">
                    <div className="relative border-l-2 border-[var(--primary)]/20 ml-3 md:ml-4 space-y-16">
                        {experiences.map((exp, idx) => (
                            <div key={idx} className="relative pl-8 md:pl-12 group">
                                {/* Timeline Dot */}
                                <span className="absolute -left-[9px] top-8 w-5 h-5 rounded-full bg-[var(--background)] border-4 border-[var(--primary)] shadow-sm group-hover:scale-125 transition-transform duration-300"></span>

                                <div className="neo-card p-8 md:p-10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold">{exp.role}</h3>
                                            <p className="text-lg text-[var(--primary)] font-medium">{exp.company}</p>
                                        </div>
                                        <span className="neo-inset px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap self-start md:self-auto text-[var(--foreground)]/80">
                                            {exp.period}
                                        </span>
                                    </div>

                                    <p className="mb-6 leading-relaxed text-[var(--foreground)]/90 text-lg">
                                        {exp.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {exp.tags.map(tag => (
                                            <span key={tag} className="text-xs font-semibold px-4 py-1.5 neo-inset rounded-lg text-[var(--primary)] opacity-80">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
