import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

interface ContactSectionProps {
  isActive: boolean;
}

const ContactSection = ({ isActive }: ContactSectionProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  const socialLinks = [
    { icon: Linkedin, url: "#", label: "LinkedIn" },
    { icon: Github, url: "#", label: "GitHub" },
    { icon: Twitter, url: "#", label: "Twitter" },
    { icon: Mail, url: "mailto:amos.saidi@example.com", label: "Email" },
  ];

  return (
    <section
      id="contact"
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
            Get In Touch
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-primary"></span>
          </h2>
          <p className="mt-6 text-primary text-xl font-medium">Have a Question or Want to Work Together?</p>
          <p className="text-muted-foreground">Feel free to reach out for collaborations or just a friendly chat</p>
        </div>

        {/* Social Links */}
        <div className={cn("flex justify-center gap-4 mb-12", inView && "animate-fade-in")}>
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-110 shadow-md"
                aria-label={social.label}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        {/* Contact Content */}
        <div className={cn("grid lg:grid-cols-5 gap-8", inView && "animate-fade-in")}>
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:amos.saidi@example.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      amos.saidi@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a
                      href="tel:+254700000000"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +254 700 000 000
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-muted-foreground">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 rounded-xl p-6">
              <h4 className="font-semibold mb-2">Available for:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Security Consulting</li>
                <li>• Penetration Testing Projects</li>
                <li>• Security Audits</li>
                <li>• Training & Workshops</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 shadow-elegant space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="rounded-full h-12 bg-background border-input"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="rounded-full h-12 bg-background border-input"
                  />
                </div>
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  required
                  className="rounded-full h-12 bg-background border-input"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="rounded-3xl bg-background border-input resize-none"
                />
              </div>
              <div className="text-center">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="rounded-full px-12 bg-primary hover:bg-primary/90 shadow-elegant"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
