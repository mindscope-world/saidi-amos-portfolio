import { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
      
      <main className="lg:ml-[270px] transition-all duration-300">
        <HomeSection isActive={activeSection === "home"} />
        <AboutSection isActive={activeSection === "about"} />
        <ServicesSection isActive={activeSection === "services"} />
        <SkillsSection isActive={activeSection === "skills"} />
        <CertificationsSection isActive={activeSection === "certifications"} />
        <ProjectsSection isActive={activeSection === "projects"} />
        <ContactSection isActive={activeSection === "contact"} />
      </main>
    </div>
  );
};

export default Index;
