"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <ThemeProvider>
      <main>
        <HeroSection />
        <ProjectsSection />
        <TechStackSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </ThemeProvider>
  );
}
