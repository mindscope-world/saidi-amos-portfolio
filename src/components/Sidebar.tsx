import { Home, User, Briefcase, Code, Award, FolderOpen, Mail, Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
  isDark: boolean;
  toggleTheme: () => void;
}

const Sidebar = ({
  activeSection,
  setActiveSection,
  isOpen,
  toggleSidebar,
  isDark,
  toggleTheme,
}: SidebarProps) => {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "services", label: "Services", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
    { id: "certifications", label: "Certifications", icon: Award },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed left-4 top-4 z-50 p-2 bg-card border border-border rounded-md shadow-md"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 h-screen w-[270px] bg-sidebar border-r border-sidebar-border z-40 transition-transform duration-300 flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="pt-12 pb-8 px-6">
          <h1 className="text-3xl font-bold tracking-wider">
            <span className="text-primary">A</span>mos
          </h1>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-6">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setActiveSection(item.id);
                      if (window.innerWidth < 1024) {
                        toggleSidebar();
                      }
                    }}
                    className={cn(
                      "w-full flex items-center gap-4 px-4 py-3 rounded-md font-medium transition-all duration-200 border-b border-sidebar-border/50",
                      activeSection === item.id
                        ? "text-primary bg-accent"
                        : "text-sidebar-foreground hover:text-primary hover:pl-6"
                    )}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Theme Toggle */}
        <div className="p-6">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-between px-4 py-2 bg-muted rounded-full transition-all duration-300 hover:bg-accent"
            aria-label="Toggle theme"
          >
            <Sun size={16} className="text-muted-foreground" />
            <div className="relative w-8 h-4">
              <div
                className={cn(
                  "absolute w-4 h-4 bg-primary rounded-full transition-all duration-300",
                  isDark ? "left-4" : "left-0"
                )}
              />
            </div>
            <Moon size={16} className="text-muted-foreground" />
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
        />
      )}
    </>
  );
};

export default Sidebar;
