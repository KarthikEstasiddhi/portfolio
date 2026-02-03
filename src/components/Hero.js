import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaUserGraduate } from "react-icons/fa";
import Image from "next/image";
export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 md:pt-0">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">

                {/* Left Side - Text Content */}
                <div className="order-2 md:order-1 text-center md:text-left space-y-8">
                    <div>
                        <h2 className="text-xl md:text-2xl font-medium text-[var(--primary)] uppercase tracking-wide mb-2">
                            Computer Science Student
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-shadow-neo leading-tight">
                            Hi, I&apos;m <br /> <span className="text-[var(--primary)]">Estasiddhi Karthik</span>
                        </h1>
                    </div>

                    <p className="text-lg md:text-xl text-[var(--foreground)]/80 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Passionate about <span className="font-semibold text-[var(--primary)]">Data Science</span>, <span className="font-semibold text-[var(--primary)]">AI/ML</span>, and <span className="font-semibold text-[var(--primary)]">Software Development</span>.
                        Transforming data into insights and building impactful digital solutions.
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-5 justify-center md:justify-start pt-4">
                        <a
                            href="https://github.com/KarthikEstasiddhi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="neo-btn w-14 h-14 flex items-center justify-center text-2xl rounded-full hover:text-[var(--primary)] hover:-translate-y-1 transition-all"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="neo-btn w-14 h-14 flex items-center justify-center text-2xl rounded-full hover:text-[var(--primary)] hover:-translate-y-1 transition-all"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="neo-btn w-14 h-14 flex items-center justify-center text-2xl rounded-full hover:text-[var(--primary)] hover:-translate-y-1 transition-all"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>
                        <a
                            href="mailto:estasiddhikarthik@gmail.com"
                            className="neo-btn w-14 h-14 flex items-center justify-center text-2xl rounded-full hover:text-[var(--primary)] hover:-translate-y-1 transition-all"
                            aria-label="Email"
                        >
                            <FaEnvelope />
                        </a>
                    </div>

                    <div className="flex gap-4 justify-center md:justify-start pt-2">
                        <Link href="#contact" className="neo-btn px-8 py-3.5 font-bold tracking-wide hover:text-[var(--primary)] text-sm md:text-base">
                            Contact Me
                        </Link>
                        <Link href="#work" className="neo-btn px-8 py-3.5 font-bold tracking-wide hover:text-[var(--primary)] text-sm md:text-base">
                            View Work
                        </Link>
                    </div>
                </div>

                {/* Right Side - Image/Profile */}
                <div className="order-1 md:order-2 flex justify-center md:justify-end">
                    <div className="relative">
                        <div className="w-64 h-64 md:w-96 md:h-96  neo-card flex items-center justify-center p-4 animate-float overflow-hidden">
                            <div className="w-full h-full rounded-xl  bg-gradient-to-br from-[var(--background)] to-[var(--background)] shadow-inner flex items-center justify-center overflow-hidden text-[var(--foreground)]/30">
                                {/* Placeholder for actual image */}
                                <img src="/images/hero/profile.png" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute top-8 -right-4 w-20 h-20 rounded-full neo-card animate-pulse delay-700 opacity-80"></div>
                        <div className="absolute bottom-10 -left-8 w-12 h-12 rounded-full neo-card animate-pulse delay-300 opacity-60"></div>
                    </div>
                </div>

            </div>
        </section>
    );
}
