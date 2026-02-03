import { FaAward, FaTrophy, FaCertificate } from "react-icons/fa";

export default function Certifications() {
    const certs = [
        {
            name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
            id: "101962320OCI25GAIOCP",
            date: "Jul 2025"
        },
        {
            name: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
            id: "101962320OCI25DSOCP",
            date: "Jul 2025"
        },
        {
            name: "Microsoft Azure Data Fundamentals",
            id: "",
            date: "Aug 2024"
        }
    ];

    const achievements = [
        "Top 10 finalist in the Smart City Challenge conducted by IIIT Hyderabad and Silicon Labs.",
        "Extended Eco Sense project by integrating Wi-SUN Technology."
    ];

    return (
        <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">

                {/* Certifications */}
                <div>
                    <h2 className="text-3xl font-bold text-[var(--primary)] uppercase tracking-wider mb-10 text-center md:text-left flex items-center gap-3">
                        <FaCertificate size={28} /> Certifications
                    </h2>
                    <div className="space-y-6">
                        {certs.map((cert, idx) => (
                            <div key={idx} className="neo-card p-6 flex flex-col gap-2 hover:shadow-[var(--shadow-neo-sm)] transition-all">
                                <h3 className="text-lg font-bold leading-tight">{cert.name}</h3>
                                <div className="flex justify-between items-center text-sm text-[var(--foreground)]/70">
                                    {cert.id && <span>ID: {cert.id}</span>}
                                    <span className="font-semibold">{cert.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div>
                    <h2 className="text-3xl font-bold text-[var(--primary)] uppercase tracking-wider mb-10 text-center md:text-left flex items-center gap-3">
                        <FaTrophy size={28} /> Achievements
                    </h2>
                    <div className="neo-card p-8 min-h-[300px] flex flex-col justify-center gap-6">
                        {achievements.map((item, idx) => (
                            <div key={idx} className="flex gap-4 items-start">
                                <span className="neo-inset w-8 h-8 flex-shrink-0 rounded-full flex items-center justify-center text-[var(--primary)]">
                                    <FaAward />
                                </span>
                                <p className="text-lg leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
