import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, CheckCircle } from "lucide-react";

interface ProjectsSectionProps {
  isActive: boolean;
}

const ProjectsSection = ({ isActive }: ProjectsSectionProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: "Enterprise SOC Dashboard",
      description:
        "Developed a comprehensive Security Operations Center dashboard integrating multiple SIEM tools for real-time threat monitoring and incident response.",
      features: [
        "Real-time threat visualization",
        "Automated alert correlation",
        "Custom threat intelligence feeds",
        "Incident workflow automation",
      ],
      tech: ["Splunk", "Python", "ELK Stack", "React", "API Integration"],
      outcomes: {
        metrics: [
          { value: "40%", label: "Reduced Response Time" },
          { value: "85%", label: "Alert Accuracy" },
          { value: "1000+", label: "Threats Detected" },
        ],
      },
    },
    {
      title: "Automated Vulnerability Scanner",
      description:
        "Built an automated vulnerability scanning system that continuously monitors network infrastructure and web applications for security weaknesses.",
      features: [
        "Scheduled automated scans",
        "Custom vulnerability database",
        "Risk prioritization engine",
        "Detailed remediation reports",
      ],
      tech: ["Python", "Nmap", "Nessus API", "PostgreSQL", "Docker"],
      outcomes: {
        metrics: [
          { value: "500+", label: "Assets Monitored" },
          { value: "95%", label: "Vulnerability Detection" },
          { value: "30%", label: "Faster Patching" },
        ],
      },
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className={cn(
        "min-h-screen py-20 px-6 lg:px-12",
        isActive ? "opacity-100" : "opacity-0 hidden"
      )}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground relative inline-block">
            Featured Projects
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary"></span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Showcase of significant cybersecurity projects and implementations
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={cn(
                "bg-card border border-border rounded-xl p-8 shadow-elegant",
                inView && "animate-fade-in"
              )}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle size={18} className="text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcomes */}
              <div className="bg-background rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-4">Project Outcomes:</h4>
                <div className="flex flex-wrap gap-6 justify-center">
                  {project.outcomes.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-bold text-primary">
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button variant="default" size="sm" className="gap-2">
                  <ExternalLink size={16} />
                  View Details
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Github size={16} />
                  Source Code
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={cn(
            "mt-16 gradient-hero text-white rounded-xl p-12 text-center shadow-elegant",
            inView && "animate-scale-in"
          )}
        >
          <h3 className="text-3xl font-bold mb-4">Interested in Collaboration?</h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-100 font-bold px-8"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Let's Talk
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
