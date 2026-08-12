import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/EngineeringFocus";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Journey } from "@/components/sections/Journey";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { BackgroundDesigns } from "@/components/ui/BackgroundDesigns";
import { Navbar } from "@/components/ui/Navbar";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen bg-[#09090b] selection:bg-accent/30 selection:text-white overflow-hidden">
      {/* Background Interactive Particles & Designs */}
      <BackgroundDesigns />
      <ParticleBackground />

      {/* Main Portfolio Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <FeaturedProject />
          <Journey />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
