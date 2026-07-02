import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Articles from "@/components/Articles";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-bg font-sans text-fg">
      {/* CRT effects */}
      <div className="pointer-events-none fixed inset-0 z-50 crt-overlay opacity-60" />
      <div className="pointer-events-none fixed inset-0 z-40 crt-vignette" />
      <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-32 animate-scanline bg-gradient-to-b from-phosphor/10 to-transparent" />

      {/* Background grid */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#e8e9f0 1px, transparent 1px), linear-gradient(90deg, #e8e9f0 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <NavBar />

      <div className="relative z-10 mx-auto w-full px-6 animate-flicker md:max-w-[90%]">
        <Hero />
      </div>

      <div className="relative z-10">
        <Sobre />
        <Timeline />
        <Skills />
        <Projects />
        <Articles />
        <Contato />
        <Footer />
      </div>
    </div>
  );
}
