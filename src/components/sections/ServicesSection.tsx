import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Shield, Target, Eye } from "lucide-react";

interface ServicesSectionProps {
  isActive: boolean;
}

const ServicesSection = ({ isActive }: ServicesSectionProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Target,
      title: "Vulnerability Assessment",
      description: "Comprehensive system scanning and threat identification to discover security weaknesses before attackers do. Detailed reporting with actionable remediation strategies.",
    },
    {
      icon: Shield,
      title: "Penetration Testing",
      description: "Ethical hacking services to test your security controls and identify exploitable vulnerabilities. Real-world attack simulations to strengthen your defenses.",
    },
    {
      icon: Eye,
      title: "Security Monitoring",
      description: "24/7 network and application monitoring using advanced SIEM solutions. Real-time threat detection, incident response, and continuous security operations.",
    },
  ];

  return (
    <section
      id="services"
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
            My Services
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary"></span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cybersecurity solutions to protect your digital assets and ensure business continuity
          </p>
        </div>

        {/* Services Grid */}
        <div className={cn("grid md:grid-cols-3 gap-8", inView && "animate-fade-in")}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 shadow-md hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
