import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Calendar } from "lucide-react";

interface AboutSectionProps {
  isActive: boolean;
}

const AboutSection = ({ isActive }: AboutSectionProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="about"
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
            About Me
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary"></span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Learn more about my background, expertise, and professional journey in cybersecurity
          </p>
        </div>

        {/* About Content */}
        <div className={cn("space-y-12", inView && "animate-fade-in")}>
          {/* Introduction */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-elegant">
            <h3 className="text-2xl font-bold mb-4">
              I'm Amos Saidi, <span className="text-primary">Cybersecurity Specialist</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dedicated cybersecurity professional passionate about protecting digital assets and ensuring robust security postures. 
              I specialize in SOC monitoring, penetration testing, vulnerability assessment, incident response, and security awareness training.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I combine technical skills with business understanding to implement practical security solutions that safeguard 
              organizations from evolving cyber threats. My approach integrates proactive defense strategies with real-world threat intelligence.
            </p>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Areas of Expertise:</h4>
              <ul className="grid md:grid-cols-2 gap-3">
                {[
                  "SOC Monitoring & Operations",
                  "Penetration Testing & Ethical Hacking",
                  "Vulnerability Assessment & Management",
                  "Incident Response & Forensics",
                  "Threat Intelligence & Analysis",
                  "Security Awareness Training",
                  "SIEM Tools (Splunk, QRadar)",
                  "Network Security & Hardening",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Personal Info */}
          <div className="bg-card border border-border rounded-xl p-8 shadow-elegant">
            <h3 className="text-2xl font-bold mb-6">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              {[
                { label: "Name:", value: "Amos Saidi" },
                { label: "Degree:", value: "BSc in IT" },
                { label: "Email:", value: "amossaidi03@gmail.com" },
                { label: "Phone:", value: "+254 759 236384" },
                { label: "Location:", value: "Nairobi, Kenya" },
                { label: "Languages:", value: "English, Swahili" },
                { label: "Availability:", value: "Open to Opportunities" },
                { label: "Experience:", value: "5+ Years" },
              ].map((item, i) => (
                <div key={i} className="pb-4 border-b border-border/50">
                  <p className="font-semibold">
                    {item.label}{" "}
                    <span className="font-normal text-muted-foreground ml-2">
                      {item.value}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-card border border-border rounded-xl p-8 shadow-elegant">
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "BSc in Information Technology",
                    period: "2018 - 2022",
                    institution: "Masinde Muliro University of Science and Technology (MMUST)",
                    description: "Comprehensive foundation in IT systems and security principles",
                  },
                  {
                    title: "Cybersecurity Bootcamp",
                    period: "2025 - Present",
                    institution: "Moringa School",
                    description: "Advanced training in ethical hacking, penetration testing, and security operations",
                  },
                ].map((item, i) => (
                  <div key={i} className="relative pl-8 pb-6 border-l-2 border-primary last:border-l-0 last:pb-0">
                    <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-primary rounded-full"></div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground italic mb-2">{item.institution}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="bg-card border border-border rounded-xl p-8 shadow-elegant">
              <h3 className="text-2xl font-bold mb-6">Experience</h3>
              <div className="space-y-6">
                {[
                  {
                    title: "SOC Analyst & Penetration Tester",
                    period: "2022 - Present",
                    company: "Freelance / Contract Work",
                    description: "Security operations, threat detection, penetration testing, and vulnerability assessments for various organizations",
                  },
                  {
                    title: "IT Security Specialist",
                    period: "2020 - 2022",
                    company: "Various Organizations",
                    description: "Network security, system hardening, and security awareness training",
                  },
                ].map((item, i) => (
                  <div key={i} className="relative pl-8 pb-6 border-l-2 border-primary last:border-l-0 last:pb-0">
                    <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-primary rounded-full"></div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar size={14} />
                      <span>{item.period}</span>
                    </div>
                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground italic mb-2">{item.company}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
