import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import MapDivider from "@/components/MapDivider";
import Sobre from "@/components/Sobre";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <MapDivider label="sobre" />
      <Sobre />
      <MapDivider label="trajetória" />
      <Timeline />
      <MapDivider label="stack" />
      <Skills />
      <MapDivider label="contato" />
      <Contato />
      <Footer />
    </>
  );
}
