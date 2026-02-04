"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle | loading | success | error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("loading");

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = "YOUR_SERVICE_ID";
        const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
        const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_name: "Estasiddhi Karthik",
        };

        import("@emailjs/browser").then((emailjs) => {
            emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setStatus("success");
                    setFormData({ name: "", email: "", message: "" });
                    setTimeout(() => setStatus("idle"), 5000);
                }, (err) => {
                    console.log('FAILED...', err);
                    setStatus("error");
                    setTimeout(() => setStatus("idle"), 5000);
                });
        });
    };

    return (
        <section id="contact" className="py-20 px-6 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[var(--primary)] uppercase tracking-wider mb-12">Get in Touch</h2>

            <div className="neo-card p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="font-semibold ml-1 text-sm uppercase">Name</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                type="text"
                                className="w-full p-4 rounded-xl bg-transparent neo-inset outline-none focus:ring-2 ring-[var(--primary)]/50 transition-all font-medium"
                                placeholder="John Doe"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="font-semibold ml-1 text-sm uppercase">Email</label>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                type="email"
                                className="w-full p-4 rounded-xl bg-transparent neo-inset outline-none focus:ring-2 ring-[var(--primary)]/50 transition-all font-medium"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="font-semibold ml-1 text-sm uppercase">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            className="w-full p-4 rounded-xl bg-transparent neo-inset outline-none focus:ring-2 ring-[var(--primary)]/50 transition-all font-medium"
                            placeholder="Say hello..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full neo-btn py-4 text-lg font-bold hover:text-[var(--primary)] disabled:opacity-50"
                    >
                        {status === "loading" ? "Sending..." : "Send Message"}
                    </button>

                    {status === "success" && (
                        <p className="text-center text-green-500 font-semibold animate-fadeIn">Message sent successfully!</p>
                    )}
                </form>

                <div className="flex gap-6 justify-center mt-10 opacity-70">
                    <a href="https://github.com/KarthikEstasiddhi" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors"><FaGithub size={24} /></a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors"><FaLinkedin size={24} /></a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary)] transition-colors"><FaTwitter size={24} /></a>
                    <a href="mailto:estasiddhikarthik@gmail.com" className="hover:text-[var(--primary)] transition-colors"><FaEnvelope size={24} /></a>
                </div>
            </div>

            <p className="text-center mt-12 text-[var(--foreground)]/60 text-sm">
                © {new Date().getFullYear()} KarthikEstasiddhi. Built with passion.
            </p>
        </section>
    );
}
