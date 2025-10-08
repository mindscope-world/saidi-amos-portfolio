import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Terminal, Network, Lock, Code, Shield, Brain, AlertCircle, Server, Wrench, FileSearch, GraduationCap, Users } from "lucide-react";

interface SkillsSectionProps {
  isActive: boolean;
}

const SkillsSection = ({ isActive }: SkillsSectionProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const skills = [
    { icon: Terminal, name: "Linux Exploitation", level: "Advanced" },
    { icon: Network, name: "Networking & Security", level: "Expert" },
    { icon: Lock, name: "Cryptography", level: "Advanced" },
    { icon: Code, name: "Python Development", level: "Expert" },
    { icon: Shield, name: "Threat Detection & Analysis", level: "Expert" },
    { icon: Brain, name: "Threat Intelligence", level: "Advanced" },
    { icon: AlertCircle, name: "Incident Response", level: "Expert" },
    { icon: Server, name: "System Hardening", level: "Expert" },
    { icon: Wrench, name: "Security Tools", level: "Expert" },
    { icon: FileSearch, name: "Risk Assessment", level: "Advanced" },
    { icon: GraduationCap, name: "Security Training", level: "Expert" },
    { icon: Users, name: "Teamwork & Leadership", level: "Expert" },
  ];

  return (
    <section
      id="skills"
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
            Skills & Expertise
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary"></span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Technical competencies and professional skills developed through hands-on experience and continuous learning
          </p>
        </div>

        {/* Skills Grid */}
        <div className={cn("grid md:grid-cols-3 lg:grid-cols-4 gap-6", inView && "animate-fade-in")}>
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={28} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{skill.name}</h4>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                  {skill.level}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
