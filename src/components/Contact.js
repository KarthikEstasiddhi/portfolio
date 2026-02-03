import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-[var(--primary)] uppercase tracking-wider mb-12">Get in Touch</h2>

            <div className="neo-card p-8 md:p-12">
                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="font-semibold ml-1 text-sm uppercase">Name</label>
                            <input type="text" className="w-full p-4 rounded-xl bg-transparent neo-inset outline-none focus:ring-2 ring-[var(--primary)]/50 transition-all font-medium" placeholder="John Doe" />
                        </div>

                        <div className="space-y-2">
                            <label className="font-semibold ml-1 text-sm uppercase">Email</label>
                            <input type="email" className="w-full p-4 rounded-xl bg-transparent neo-inset outline-none focus:ring-2 ring-[var(--primary)]/50 transition-all font-medium" placeholder="john@example.com" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="font-semibold ml-1 text-sm uppercase">Message</label>
                        <textarea rows="5" className="w-full p-4 rounded-xl bg-transparent neo-inset outline-none focus:ring-2 ring-[var(--primary)]/50 transition-all font-medium" placeholder="Say hello..."></textarea>
                    </div>

                    <button type="button" className="w-full neo-btn py-4 text-lg font-bold hover:text-[var(--primary)]">
                        Send Message
                    </button>
                </form>

                <div className="flex gap-6 justify-center mt-10 opacity-70">
                    <a href="https://github.com" className="hover:text-[var(--primary)] transition-colors"><FaGithub size={24} /></a>
                    <a href="https://linkedin.com" className="hover:text-[var(--primary)] transition-colors"><FaLinkedin size={24} /></a>
                    <a href="https://twitter.com" className="hover:text-[var(--primary)] transition-colors"><FaTwitter size={24} /></a>
                    <a href="mailto:estasiddhikarthik@gmail.com" className="hover:text-[var(--primary)] transition-colors"><FaEnvelope size={24} /></a>
                </div>
            </div>

            <p className="text-center mt-12 text-[var(--foreground)]/60 text-sm">
                © {new Date().getFullYear()} Rakshith. Built with Next.js & Neomorphism.
            </p>
        </section>
    );
}
