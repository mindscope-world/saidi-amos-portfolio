import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Heart, Shield, Terminal, Target, Eye, Network } from "lucide-react";

interface ProjectsSectionProps {
  isActive: boolean;
}

const ProjectsSection = ({ isActive }: ProjectsSectionProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const featuredProjects = [
    {
      icon: Heart,
      title: "Build Life Reintegration Initiative",
      subtitle: "Social Impact Project",
      description: "A comprehensive platform aiding ex-convict reintegration into society through work placement, financial systems, mentorship programs, and skills validation.",
      features: [
        "Work Placement System",
        "Financial Management Tools",
        "Mentorship Matching",
        "Skills Validation Platform",
      ],
      tech: ["React", "Node.js", "PostgreSQL", "AWS"],
      outcomes: [
        { label: "Participants Helped", value: "50+" },
        { label: "Retention Rate", value: "85%" },
        { label: "Success Stories", value: "30+" },
      ],
      githubUrl: "#",
    },
    {
      icon: Shield,
      title: "Cyber Threat Whisper",
      subtitle: "Real-Time Threat Detection System",
      description: "Advanced threat detection system identifying Command & Control (C2) traffic patterns using machine learning and real-time packet analysis.",
      features: [
        "Real-time Packet Analysis",
        "ML Anomaly Detection",
        "Custom Rule Engine",
        "Visualization Dashboard",
      ],
      tech: ["Python", "Scapy", "TensorFlow", "Elastic Stack", "Redis"],
      outcomes: [
        { label: "Detection Rate", value: "100%" },
        { label: "Uptime", value: "24/7" },
        { label: "Threats Blocked", value: "500+" },
      ],
      githubUrl: "#",
    },
  ];

  const labs = [
    {
      icon: Target,
      title: "Offensive Pentesting Lab",
      description: "Comprehensive penetration testing environment focusing on enumeration, privilege escalation, and lateral movement techniques.",
      tools: ["Nmap", "Burp Suite", "Metasploit", "Hydra", "SQLMap"],
      highlight: "Advanced exploitation techniques and post-exploitation strategies",
    },
    {
      icon: Eye,
      title: "SOC Operations Lab",
      description: "Security Operations Center simulation for incident response, threat hunting, and security monitoring practice.",
      tools: ["Splunk", "Wireshark", "Snort", "Nessus", "OSSEC"],
      highlight: "Real-world incident response scenarios and threat analysis",
    },
    {
      icon: Terminal,
      title: "Windows Exploitation Lab",
      description: "Focused environment for Windows security testing, shellcode crafting, and bypassing security controls.",
      tools: ["Metasploit", "PowerSploit", "Mimikatz", "BloodHound"],
      highlight: "Advanced Windows exploitation and Active Directory attacks",
    },
    {
      icon: Network,
      title: "TryHackMe: Cyber Security 101",
      description: "Comprehensive training covering networking fundamentals, cryptography, Windows Active Directory, and security tools.",
      tools: ["Wireshark", "Splunk", "Nessus", "Nmap", "Burp Suite"],
      highlight: "Foundation skills in cybersecurity operations and analysis",
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
            Projects & Labs
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary"></span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Featured projects and hands-on laboratory work demonstrating practical cybersecurity skills
          </p>
        </div>

        <div className="space-y-16">
          {/* Featured Projects */}
          <div className={cn("space-y-12", inView && "animate-fade-in")}>
            <h3 className="text-2xl font-bold text-foreground mb-8 pb-3 border-b-2 border-primary inline-block">
              Featured Projects
            </h3>
            {featuredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div key={index} className="bg-card border border-border rounded-xl p-8 shadow-elegant">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-foreground mb-1">{project.title}</h4>
                      <p className="text-primary font-medium">{project.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Key Features:</h5>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-muted-foreground">
                            <span className="w-2 h-2 bg-primary rounded-full"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Technology Stack:</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-background/50 rounded-lg p-6 mb-6">
                    <h5 className="font-semibold text-foreground mb-4">Project Outcomes:</h5>
                    <div className="grid grid-cols-3 gap-4">
                      {project.outcomes.map((outcome, i) => (
                        <div key={i} className="text-center">
                          <div className="text-3xl font-bold text-primary mb-1">{outcome.value}</div>
                          <div className="text-sm text-muted-foreground">{outcome.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90">
                      <Github className="mr-2" size={18} />
                      View on GitHub
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white">
                      <ExternalLink className="mr-2" size={18} />
                      Live Demo
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Learning Labs */}
          <div className={cn("space-y-8", inView && "animate-fade-in")}>
            <h3 className="text-2xl font-bold text-foreground mb-8 pb-3 border-b-2 border-primary inline-block">
              Learning Journey - Hands-On Labs
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {labs.map((lab, index) => {
                const Icon = lab.icon;
                return (
                  <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon size={24} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-2">{lab.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">{lab.description}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm font-medium text-foreground mb-2">Tools & Technologies:</p>
                      <div className="flex flex-wrap gap-2">
                        {lab.tools.map((tool, i) => (
                          <span key={i} className="px-2 py-1 bg-background text-muted-foreground rounded text-xs">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="bg-primary/5 border-l-4 border-primary p-3 rounded">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Highlight: </span>
                        {lab.highlight}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
