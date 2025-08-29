import React from "react";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["TypeScript", "JavaScript", "C#", "SQL", "HTML", "CSS"],
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      category: "Frontend Frameworks",
      skills: [
        "React",
        "Next.js",
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design",
      ],
      color: "bg-secondary/10 text-secondary border-secondary/20",
    },
    {
      category: "Backend & APIs",
      skills: [
        ".NET Core",
        "Node.js",
        "ASP.NET MVC",
        "Entity Framework",
        "RESTful APIs",
        "GraphQL",
        "Swagger",
      ],
      color: "bg-success/10 text-success border-success/20",
    },
    {
      category: "Cloud & DevOps",
      skills: [
        "Microsoft Azure",
        "Git",
        "CI/CD Pipelines",
        "Docker",
        "SQL Server",
        "Azure DevOps",
      ],
      color: "bg-warning/10 text-warning border-warning/20",
    },
    {
      category: "Security & Auth",
      skills: [
        "OAuth2",
        "JWT",
        "Identity Management",
        "API Security",
        "HTTPS/SSL",
      ],
      color: "bg-destructive/10 text-destructive border-destructive/20",
    },
    {
      category: "E-commerce & CMS",
      skills: [
        "Shopify",
        "Shopify Plus",
        "ERP Integration",
        "Payment Gateways",
        "POS Systems",
      ],
      color:
        "bg-accent-foreground/10 text-accent-foreground border-accent-foreground/20",
    },
  ];

  return (
    <section id="skills" className="section-container">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold mb-4 group-hover:text-primary transition-colors">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className={`${category.color} hover:scale-105 transition-transform duration-200 cursor-default font-medium text-xs`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Note */}
        {/* <div className="mt-12 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
          <div className="text-center">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Always Learning:</strong>{" "}
              Currently exploring advanced AI/ML technologies, serverless
              architectures, and modern development patterns to stay at the
              forefront of technology.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SkillsSection;
