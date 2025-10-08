import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Award, Flame, Sword, Shield } from "lucide-react";

interface CertificationsSectionProps {
  isActive: boolean;
}

const CertificationsSection = ({ isActive }: CertificationsSectionProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const tryhackme = [
    {
      icon: Flame,
      title: "3 Day Streak",
      description: "Consistent engagement and learning on TryHackMe platform",
      color: "text-orange-500",
    },
    {
      icon: Flame,
      title: "7 Day Streak",
      description: "Dedicated week of continuous cybersecurity practice and skill development",
      color: "text-red-500",
    },
    {
      icon: Sword,
      title: "Sword Apprentice",
      description: "Offensive security badge demonstrating proficiency in penetration testing techniques",
      color: "text-primary",
    },
  ];

  const professional = [
    {
      icon: Shield,
      title: "CISCO Cybersecurity Fundamentals",
      description: "Foundation certification covering essential cybersecurity concepts, network security, and threat defense strategies",
      issuer: "Cisco Networking Academy",
    },
    {
      icon: Award,
      title: "Cyber Threat Intelligence",
      description: "Specialized certification in threat intelligence gathering, analysis, and strategic application for security operations",
      issuer: "Professional Certification Body",
    },
  ];

  return (
    <section
      id="certifications"
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
            Certifications & Achievements
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary"></span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements demonstrating expertise and commitment to continuous learning
          </p>
        </div>

        <div className="space-y-12">
          {/* TryHackMe Badges */}
          <div className={cn(inView && "animate-fade-in")}>
            <h3 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b-2 border-primary inline-block">
              TryHackMe Achievements
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {tryhackme.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={cn("w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4", badge.color)}>
                      <Icon size={32} />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{badge.title}</h4>
                    <p className="text-sm text-muted-foreground">{badge.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Professional Certifications */}
          <div className={cn(inView && "animate-fade-in")}>
            <h3 className="text-2xl font-bold text-foreground mb-6 pb-3 border-b-2 border-primary inline-block">
              Professional Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {professional.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div
                    key={index}
                    className="bg-card border border-border rounded-xl p-8 hover:shadow-elegant transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon size={28} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-2">{cert.title}</h4>
                        <p className="text-sm text-primary font-medium mb-3">{cert.issuer}</p>
                        <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
                      </div>
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

export default CertificationsSection;
