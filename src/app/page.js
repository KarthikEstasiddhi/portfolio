import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col gap-6 md:gap-12 pb-20">
      <Hero />
      <About />
      <Experience />
      <Work />
      <Certifications />
      <Contact />
    </main>
  );
}
