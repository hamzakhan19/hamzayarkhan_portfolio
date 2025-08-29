import React, { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { ThemeProvider, useTheme } from "@/components/ThemeProvider";

// Main Portfolio Component
const PortfolioContent = () => {
  const { toggleDarkMode, isDarkMode } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    // Update SEO meta tags
    if (typeof document !== "undefined") {
      document.title = "Hamza Yar Khan - Full Stack Developer & AI Enthusiast";
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "Experienced Full Stack Developer specializing in React, .NET Core, and AI solutions. Expert in e-commerce platforms, cloud architecture, and scalable web applications."
        );
      }
    }
  }, []);

  return (
    <>
      <div
        className={`min-h-screen transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navigation toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        {/* <Footer /> */}
      </div>
    </>
  );
};

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="hamza-portfolio-theme">
      <PortfolioContent />
    </ThemeProvider>
  );
};

export default Index;
