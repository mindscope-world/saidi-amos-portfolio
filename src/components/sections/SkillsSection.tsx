import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface SkillsSectionProps {
  isActive: boolean;
}

const SkillsSection = ({ isActive }: SkillsSectionProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const skills = [
    { name: "Network Security", level: "Expert", icon: "🛡️" },
    { name: "Penetration Testing", level: "Advanced", icon: "🎯" },
    { name: "SIEM (Splunk, QRadar)", level: "Expert", icon: "📊" },
    { name: "Python & Bash Scripting", level: "Advanced", icon: "💻" },
    { name: "Threat Intelligence", level: "Expert", icon: "🔍" },
    { name: "Incident Response", level: "Expert", icon: "🚨" },
    { name: "Malware Analysis", level: "Intermediate", icon: "🦠" },
    { name: "Cloud Security (AWS, Azure)", level: "Advanced", icon: "☁️" },
    { name: "Vulnerability Scanning", level: "Expert", icon: "🔬" },
    { name: "Firewall Management", level: "Expert", icon: "🔥" },
    { name: "Digital Forensics", level: "Advanced", icon: "🕵️" },
    { name: "Security Compliance", level: "Advanced", icon: "📋" },
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
            Technical Skills
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary"></span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Core competencies and technical expertise in cybersecurity
          </p>
        </div>

        {/* Skills Grid */}
        <div
          className={cn(
            "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
            inView && "animate-fade-in"
          )}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 text-center"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {skill.name}
              </h3>
              <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                {skill.level}
              </span>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className={cn("mt-16", inView && "animate-fade-in")}>
          <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Kali Linux",
                "Metasploit",
                "Burp Suite",
                "Wireshark",
                "Nmap",
                "Nessus",
                "Splunk",
                "ELK Stack",
                "Snort",
                "OSSEC",
                "Carbon Black",
                "CrowdStrike",
              ].map((tool, i) => (
                <span
                  key={i}
                  className="bg-card border border-border px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-200 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
