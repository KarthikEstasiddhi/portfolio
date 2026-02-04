"use client";
import { useState } from "react";
import Link from "next/link";
import { FaLaptopCode, FaRecycle, FaChartBar, FaFileAlt } from "react-icons/fa";

export default function Work() {
    const [activeTab, setActiveTab] = useState("projects");

    const projects = [
        {
            title: "CCTV Surveillance Analysis",
            desc: "Real-time video surveillance system detecting 15+ individuals per frame. Achieved 40% performance improvement via GPU acceleration.",
            tags: ["Python", "OpenCV", "YOLOv8", "NetworkX"],
            link: "https://github.com/KarthikEstasiddhi/CCTV_Analysis",
            icon: <img src="/images/projects/cctvimage.png" alt="CCTV Surveillance Analysis" className="w-full h-full object-cover" />
        },
        {
            title: "Eco-Sense: Smart Waste Management",
            desc: "Designed smart dustbins with ultrasonic sensors, GPS, and WiFi for real-time monitoring and route optimization.",
            tags: ["IoT", "Ultrasonic Sensors", "GPS", "WiFi"],
            link: "#",
            icon: <img src="/images/projects/ecosense.png" alt="Eco-Sense: Smart Waste Management" className="w-full h-full object-cover" />
        },
        {
            title: "Hospitality Revenue Dashboard",
            desc: "Power BI dashboard analyzing 3 months of revenue data. Provided insights targeting potential 20% recovery in revenue.",
            tags: ["Power BI", "Excel", "Data Analysis"],
            link: "https://github.com/KarthikEstasiddhi/Hospitality_domain",
            icon: <img src="/images/projects/dashboard.png" alt="Hospitality Revenue Dashboard" className="w-full h-full object-cover" />
        }
    ];

    const research = [
        {
            title: "Integrating Machine Learning and Deep Learning for Compressive Strength Prediction",
            conference: "ICDCC-2024 (IEEE)",
            abstract: "Presented and published at the 1st International Conference on Data, Computation, and Communication. Explored hybrid models for material strength analysis.",
            link: "https://ieeexplore.ieee.org/document/10961117"
        }
    ];

    return (
        <section id="work" className="py-24 px-6 max-w-6xl mx-auto">
            <div className="flex flex-col items-center mb-16">
                <h2 className="text-4xl font-bold text-[var(--primary)] uppercase tracking-wider mb-10 text-shadow-neo-sm">Work & Research</h2>

                {/* Tabs */}
                <div className="neo-card p-2 flex gap-4 rounded-2xl">
                    <button
                        onClick={() => setActiveTab("projects")}
                        className={`px-10 py-3 rounded-xl font-bold transition-all duration-300 text-lg ${activeTab === 'projects' ? 'neo-inset text-[var(--primary)]' : 'hover:text-[var(--primary)]'}`}
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => setActiveTab("research")}
                        className={`px-10 py-3 rounded-xl font-bold transition-all duration-300 text-lg ${activeTab === 'research' ? 'neo-inset text-[var(--primary)]' : 'hover:text-[var(--primary)]'}`}
                    >
                        Research
                    </button>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-10 animate-fadeIn">
                {activeTab === "projects" ? (
                    projects.map((proj, idx) => (
                        <div key={idx} className="neo-card p-8 flex flex-col hover:scale-[1.02] transition-transform group">
                            <div className="h-48 bg-gray-300/10 rounded-xl mb-6 flex items-center justify-center neo-inset group-hover:shadow-inner transition-shadow overflow-hidden">
                                <span className="w-full h-full flex items-center justify-center text-[var(--primary)]">
                                    {proj.icon}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{proj.title}</h3>
                            <p className="text-[var(--foreground)]/80 mb-6 flex-grow leading-relaxed">{proj.desc}</p>
                            <div className="flex flex-wrap gap-2.5 mb-8">
                                {proj.tags.map(tag => (
                                    <span key={tag} className="text-xs px-3 py-1.5 rounded-lg border border-[var(--primary)]/20 text-[var(--primary)] font-semibold">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Link href={proj.link} className="neo-btn py-3 text-center font-bold tracking-wide hover:text-[var(--primary)] uppercase text-sm">
                                View Project
                            </Link>
                        </div>
                    ))
                ) : (
                    research.map((paper, idx) => (
                        <div key={idx} className="neo-card p-10 flex flex-col hover:scale-[1.02] transition-transform h-full">
                            <span className="text-sm font-mono text-[var(--primary)] mb-3 uppercase tracking-wider">{paper.conference}</span>
                            <h3 className="text-2xl font-bold mb-4 leading-tight">{paper.title}</h3>
                            <p className="text-[var(--foreground)]/70 mb-8 flex-grow italic text-lg">&quot;{paper.abstract}&quot;</p>
                            <Link href={paper.link} className="self-start neo-btn px-8 py-3 text-sm font-bold hover:text-[var(--primary)] uppercase tracking-wide flex items-center gap-2">
                                <FaFileAlt /> Read Paper
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}
