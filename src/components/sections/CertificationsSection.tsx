import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Award } from "lucide-react";

interface CertificationsSectionProps {
  isActive: boolean;
}

const CertificationsSection = ({ isActive }: CertificationsSectionProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const certifications = {
    professional: [
      {
        name: "Certified Ethical Hacker (CEH)",
        issuer: "EC-Council",
        description: "Advanced knowledge in ethical hacking and penetration testing methodologies",
      },
      {
        name: "CompTIA Security+",
        issuer: "CompTIA",
        description: "Industry-standard certification covering core security functions",
      },
      {
        name: "Certified Information Systems Security Professional (CISSP)",
        issuer: "(ISC)²",
        description: "Advanced certification in information security and risk management",
      },
    ],
    specialized: [
      {
        name: "GIAC Security Essentials (GSEC)",
        issuer: "SANS Institute",
        description: "Demonstrates hands-on security skills and knowledge",
      },
      {
        name: "Offensive Security Certified Professional (OSCP)",
        issuer: "Offensive Security",
        description: "Practical penetration testing certification with hands-on exam",
      },
      {
        name: "Certified Cloud Security Professional (CCSP)",
        issuer: "(ISC)²",
        description: "Specialized certification in cloud security architecture and operations",
      },
    ],
  };

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
            Certifications
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary"></span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise and commitment
          </p>
        </div>

        {/* Professional Certifications */}
        <div className={cn("mb-12", inView && "animate-fade-in")}>
          <h3 className="text-2xl font-bold mb-8 pb-3 border-b-2 border-primary inline-block">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.professional.map((cert, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 flex flex-col"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                  <Award size={32} className="text-primary" />
                </div>
                <h4 className="text-lg font-bold text-center mb-2 text-foreground">
                  {cert.name}
                </h4>
                <p className="text-sm text-primary text-center mb-4 font-medium">
                  {cert.issuer}
                </p>
                <p className="text-sm text-muted-foreground text-center flex-grow">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Specialized Certifications */}
        <div className={cn(inView && "animate-fade-in")} style={{ animationDelay: "300ms" }}>
          <h3 className="text-2xl font-bold mb-8 pb-3 border-b-2 border-primary inline-block">
            Specialized Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.specialized.map((cert, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 shadow-md hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 flex flex-col"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                  <Award size={32} className="text-primary" />
                </div>
                <h4 className="text-lg font-bold text-center mb-2 text-foreground">
                  {cert.name}
                </h4>
                <p className="text-sm text-primary text-center mb-4 font-medium">
                  {cert.issuer}
                </p>
                <p className="text-sm text-muted-foreground text-center flex-grow">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
