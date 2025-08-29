import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Digital Immersion",
      location: "Melbourne, Australia",
      period: "Jul 2024 – Jan 2025",
      type: "Full-time",
      achievements: [
        "Redesigned Shopify website using Liquid, CSS, and JavaScript, enhancing customer experience",
        "Developed dynamic web applications using React and .NET Core Web APIs",
        "Led Shopify POS migration, ensuring seamless synchronization across physical and online stores"
      ],
      technologies: ["React", ".NET Core", "Shopify", "Liquid", "JavaScript", "CSS"]
    },
    {
      role: "Senior Full Stack Developer",
      company: "Tasman Logistics",
      location: "Melbourne, Australia",
      period: "Feb 2024 – Jun 2024",
      type: "Full-time",
      achievements: [
        "Built e-commerce platform with microservices architecture using .NET Core and React",
        "Customized Shopify Checkout UI Extensions, increasing conversion rates by 15%"
      ],
      technologies: ["React", ".NET Core", "Microservices", "Shopify"]
    },
    {
      role: "Senior Software Engineer / Technical BC Developer",
      company: "Folio3 Software",
      location: "Karachi, Pakistan",
      period: "Feb 2022 – Nov 2023",
      type: "Full-time",
      achievements: [
        "Designed modular integrations between ERP systems and e-commerce platforms using .NET Core and REST APIs",
        "Developed AL-based extensions and reports for Microsoft Dynamics 365 Business Central",
        "Implemented CI/CD pipelines in Azure DevOps, reducing deployment time by 40%",
        "Provided Level 2 support for production environments"
      ],
      technologies: [".NET Core", "REST APIs", "Microsoft Dynamics 365", "Azure DevOps", "AL"]
    },
    {
      role: "Software Engineer",
      company: "CEE Solutions",
      location: "Karachi, Pakistan",
      period: "Jan 2020 – Feb 2022",
      type: "Full-time",
      achievements: [
        "Developed inventory management system using .NET Core and React",
        "Integrated ticketing and procurement modules into existing systems",
        "Enhanced performance and ensured secure development lifecycle"
      ],
      technologies: [".NET Core", "React", "SQL Server", "Entity Framework"]
    }
  ];

  return (
    <section id="experience" className="section-container bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building impactful solutions across diverse industries and technologies
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {exp.role}
                    </CardTitle>
                    <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {exp.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-6">
                  {/* Key Achievements */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start gap-3 text-muted-foreground">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="border-primary/20 text-primary hover:bg-primary/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;