import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Cloud, Database, Cpu } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full Stack Development",
      description: "Expert in React, .NET Core, and modern web technologies",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Solutions",
      description: "Proficient in building scalable cloud solutions",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "E-commerce Systems",
      description: "Shopify customizations and enterprise-level integrations",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "AI & Machine Learning",
      description: "Data-driven applications and ML research exploration",
    },
  ];

  return (
    <section id="about" className="section-container bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate developer combining technical excellence with
            innovative AI solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Bio */}
          <div className="space-y-6">
            <div className="prose prose-lg text-foreground max-w-none">
              <p className="text-lg leading-relaxed">
                I am a dedicated <strong>Full Stack Developer</strong> with
                expertise in building scalable web applications using{" "}
                <strong>React</strong> and <strong>.NET Core</strong>. My
                experience spans across enterprise-level systems, e-commerce
                platforms, and cloud-based solutions on <strong>Azure</strong>.
              </p>

              <p className="text-lg leading-relaxed">
                With a strong foundation in{" "}
                <strong>Shopify customizations</strong> and ERP system
                integrations, I have successfully delivered projects that
                streamline business operations and enhance user experiences.
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-border/50"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {highlight.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                        {highlight.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
