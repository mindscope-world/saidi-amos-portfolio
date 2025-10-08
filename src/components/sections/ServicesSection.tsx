import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Shield, Search, Lock, AlertTriangle, FileSearch, Users } from "lucide-react";

interface ServicesSectionProps {
  isActive: boolean;
}

const ServicesSection = ({ isActive }: ServicesSectionProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Shield,
      title: "Security Operations",
      description:
        "24/7 security monitoring and threat detection using advanced SIEM tools and threat intelligence platforms.",
    },
    {
      icon: Search,
      title: "Penetration Testing",
      description:
        "Comprehensive security assessments to identify vulnerabilities before attackers can exploit them.",
    },
    {
      icon: Lock,
      title: "Vulnerability Assessment",
      description:
        "Systematic identification and classification of security weaknesses in your infrastructure.",
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description:
        "Rapid response to security incidents with forensic analysis and recovery procedures.",
    },
    {
      icon: FileSearch,
      title: "Security Audits",
      description:
        "Detailed compliance audits ensuring adherence to industry standards like ISO 27001 and NIST.",
    },
    {
      icon: Users,
      title: "Security Training",
      description:
        "Employee awareness programs and technical training to build a security-conscious culture.",
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
            Comprehensive cybersecurity services tailored to protect your organization
          </p>
        </div>

        {/* Services Grid */}
        <div
          className={cn(
            "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
            inView && "animate-fade-in"
          )}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl p-8 shadow-md hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-accent transition-all duration-300 group-hover:bg-primary">
                    <Icon
                      size={32}
                      className="text-primary transition-all duration-300 group-hover:text-white"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-center text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
