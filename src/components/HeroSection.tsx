import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Clean geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-secondary/8 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-12">
          {/* Main content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="gradient-text">Hamza Yar Khan</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
              Full Stack Developer | AI Enthusiast
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Building scalable full-stack applications and exploring AI to
              solve real-world problems.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="group"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/hamza-yar-khan-9b2089173/",
                  "_blank"
                )
              }
            >
              <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group"
              onClick={() =>
                window.open("https://github.com/hamzakhan19", "_blank")
              }
            >
              <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              GitHub
            </Button>
            <Button asChild variant="secondary" size="lg" className="group">
              <a href="/Resume.pdf" download="Hamza_Yar_Khan_Resume.pdf">
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Resume
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="pt-8">
            <button
              onClick={scrollToNext}
              className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors group"
              aria-label="Scroll to about section"
            >
              <ChevronDown className="w-5 h-5 text-primary animate-bounce group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
