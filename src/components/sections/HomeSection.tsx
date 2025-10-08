import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import profilePhoto from "@/assets/profile-photo.jpeg";

interface HomeSectionProps {
  isActive: boolean;
}

const HomeSection = ({ isActive }: HomeSectionProps) => {
  const typingRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typingRef.current) return;

    const roles = [
      "Cybersecurity Specialist",
      "SOC Analyst",
      "Penetration Tester",
      "Ethical Hacker",
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      if (!typingRef.current) return;

      const currentRole = roles[roleIndex];

      if (isDeleting) {
        typingRef.current.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typingRef.current.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 60 : 100;

      if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    };

    type();
  }, []);

  return (
    <section
      id="home"
      className={cn(
        "min-h-screen flex items-center px-6 lg:px-12 transition-opacity duration-500",
        isActive ? "opacity-100" : "opacity-0 hidden"
      )}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-[60%_40%] gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl lg:text-3xl font-light">
              Hello, I'm <span className="text-primary font-bold italic" style={{ fontFamily: 'cursive' }}>Amos</span>
            </h3>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
              Amos Saidi
            </h1>
            <div className="text-2xl lg:text-3xl text-primary font-medium min-h-[40px]">
              I'm a <span ref={typingRef} className="border-r-2 border-primary"></span>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Dedicated cybersecurity professional passionate about protecting digital assets and ensuring robust security postures. 
              With expertise in security operations and penetration testing, I combine technical skills with business understanding 
              to implement practical security solutions that safeguard organizations from evolving cyber threats.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="rounded-full px-8 bg-primary hover:bg-primary/90 shadow-elegant"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Hire Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white"
              >
                Download CV
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 border-t-[10px] border-l-[10px] border-primary"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-[10px] border-r-[10px] border-primary"></div>
              <div className="relative rounded-lg overflow-hidden shadow-elegant bg-gradient-to-br from-primary/10 to-purple-500/10 p-1">
                <div className="bg-card rounded-lg overflow-hidden">
                  <img
                    src={profilePhoto}
                    alt="Amos Saidi"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
