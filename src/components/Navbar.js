"use client";
import Link from "next/link";
import { useTheme } from "@/app/theme-provider";
import { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Work", href: "#work" },
        { name: "Awards", href: "#certifications" },
        { name: "Contact", href: "#contact" },
    ];

    /* Optional: Highlight active section on scroll */
    useEffect(() => {
        // Moved inside useEffect to prevent dependency warning
        const links = [
            { href: "#hero" },
            { href: "#about" },
            { href: "#experience" },
            { href: "#work" },
            { href: "#certifications" },
            { href: "#contact" },
        ];

        const handleScroll = () => {
            const sections = links.map(link => document.querySelector(link.href));
            const scrollPos = window.scrollY + 200; // Offset

            sections.forEach(section => {
                if (section && section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (href) => {
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[var(--background)]/80 backdrop-blur-md transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter text-[var(--primary)] neon-text">
                    Portfolio
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => {
                        // Remove # for ID comparison
                        const sectionId = link.href.substring(1);
                        const isActive = activeSection === sectionId || (sectionId === 'hero' && activeSection === '');

                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                className={`transition-colors font-medium relative group ${isActive ? 'text-[var(--primary)]' : 'text-[var(--foreground)] hover:text-[var(--primary)]'}`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--primary)] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </a>
                        );
                    })}

                    <button
                        onClick={toggleTheme}
                        className="neo-btn w-10 h-10 flex items-center justify-center rounded-full text-[var(--foreground)]"
                        aria-label="Toggle Theme"
                    >
                        {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="neo-btn w-10 h-10 flex items-center justify-center rounded-full text-[var(--foreground)]"
                    >
                        {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
                    </button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="neo-btn w-10 h-10 flex items-center justify-center p-2 text-[var(--foreground)]"
                    >
                        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--background)] border-t border-[var(--primary)]/10 shadow-lg p-6 flex flex-col items-center space-y-6 animate-slideDown">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                            className="text-lg font-medium text-[var(--foreground)]"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}
