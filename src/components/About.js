export default function About() {
    const skills = [
        "Java", "Python", "SQL", "R",
        "Power BI", "Git/GitHub", "Figma", "Canva",
        "VS Code", "Google Colab", "Machine Learning", "Data Analysis"
    ];

    const education = [
        {
            degree: "B.Tech in Computer Science",
            school: "Vellore Institute of Technology, Amaravathi, A.P.",
            year: "Oct 2022 - June 2026",
            description: "CGPA: 8.22/10"
        }
    ];

    return (
        <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-12 gap-12">
                {/* Title Column */}
                <div className="md:col-span-3 text-center md:text-left">
                    <h2 className="text-4xl font-bold text-[var(--primary)] sticky top-24 uppercase tracking-wider text-shadow-neo-sm">About Me</h2>
                </div>

                {/* Content Column */}
                <div className="md:col-span-9 space-y-16">

                    {/* Bio */}
                    <div className="neo-card p-8 md:p-10 transform hover:scale-[1.01] transition-transform">
                        <p className="leading-relaxed text-lg md:text-xl text-[var(--foreground)]/90">
                            I am a Computer Science student at VIT-AP University with a strong foundation in Data Science and Software Development.
                            With experience leading technical clubs and organizing large-scale hackathons, I combine technical expertise with leadership skills.
                            I have published research in Machine Learning and actively work on projects involving AI, IoT, and Data Analytics.
                        </p>
                    </div>

                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center justify-center md:justify-start gap-3">
                            <span className="w-1.5 h-8 bg-[var(--primary)] rounded-full"></span>
                            Education
                        </h3>
                        <div className="space-y-6">
                            {education.map((edu, idx) => (
                                <div key={idx} className="neo-card p-8 flex flex-col md:flex-row gap-6 justify-between items-start hover:shadow-[var(--shadow-neo-sm)] transition-shadow">
                                    <div>
                                        <h4 className="text-xl font-bold">{edu.degree}</h4>
                                        <p className="text-[var(--primary)] font-medium text-lg">{edu.school}</p>
                                        <p className="mt-3 text-base text-[var(--foreground)]/80 font-medium">{edu.description}</p>
                                    </div>
                                    <span className="neo-inset px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap tracking-wide">{edu.year}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center justify-center md:justify-start gap-3">
                            <span className="w-1.5 h-8 bg-[var(--primary)] rounded-full"></span>
                            Technical Skills
                        </h3>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            {skills.map((skill) => (
                                <span key={skill} className="neo-btn px-6 py-3 rounded-xl cursor-default hover:text-[var(--primary)] hover:-translate-y-0.5 transition-all text-sm font-medium">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
