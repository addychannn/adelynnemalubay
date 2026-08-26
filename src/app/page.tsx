import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { RoleMarquee } from "@/components/sections/RoleMarquee";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceEducationSection } from "@/components/sections/ExperienceEducationSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { ExpAndStack } from "@/components/sections/ExpAndStack";
import { ArtSection } from "@/components/sections/ArtSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF9F5] text-gray-900 flex flex-col font-sans selection:bg-[#D2E874] selection:text-[#1A2217]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <RoleMarquee />
        <AboutSection />
        <ExpAndStack/>
        <ProjectsSection />
        <ArtSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
