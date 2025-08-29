import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  Database,
  ShoppingCart,
  Bot,
} from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Inventory Management System",
      description:
        "A secure inventory dashboard with real-time tracking capabilities, designed and deployed using modern web technologies with JWT-based authentication for enhanced security.",
      technologies: [
        ".NET Core",
        "React",
        "Redux Toolkit",
        "JWT",
        "Azure App Services",
      ],
      features: [
        "Built a secure inventory dashboard with real-time tracking",
        "Designed and deployed JWT-based APIs on Azure App Services",
        "Implemented Redux Toolkit for efficient state management",
        "Developed responsive user interface with React",
        "Integrated secure authentication and authorization",
      ],
      icon: <Database className="w-8 h-8" />,
      category: "Enterprise Software",
      status: "Production",
    },
  ];

  return (
    <section id="projects" className="section-container">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions that combine technical excellence
            with real-world impact
          </p>
        </div>

        <div className="grid lg:grid-cols-1 xl:grid-cols-1 gap-8 max-w-2xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 flex flex-col h-full"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {project.icon}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <Badge
                      variant={
                        project.status === "Production" ? "default" : "outline"
                      }
                      className="text-xs"
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="space-y-6">
                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-primary/20 text-primary hover:bg-primary/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6 pt-4 border-t border-border/50">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="default" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        {/* <div className="mt-16 text-center">
          <div className="p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
            <h3 className="text-2xl font-bold mb-4">Explore More on GitHub</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Discover additional projects, open-source contributions, and experimental AI repositories 
              showcasing the latest in machine learning and data science research.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg">
                <Github className="w-5 h-5 mr-2" />
                Visit GitHub Profile
              </Button>
              <Button variant="outline" size="lg">
                <Bot className="w-5 h-5 mr-2" />
                AI Research Repos
              </Button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
