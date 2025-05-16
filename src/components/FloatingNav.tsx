
import React, { useState, useEffect } from "react";
import { Home, Briefcase, Award, Book, Menu, Music, PenTool, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const FloatingNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const navItems = [
    { icon: <Home className="w-5 h-5" />, label: "Home", href: "/" },
    { icon: <Briefcase className="w-5 h-5" />, label: "Projects", href: "/projects" },
    { icon: <Award className="w-5 h-5" />, label: "Achievements", href: "/achievements" },
    { icon: <Book className="w-5 h-5" />, label: "Books", href: "/books" },
    { icon: <Music className="w-5 h-5" />, label: "Music", href: "/music" },
    { icon: <PenTool className="w-5 h-5" />, label: "Thoughts", href: "/thoughts" },
  ];
  
  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      {/* Menu button with bouncing animation */}
      <button 
        onClick={toggleMenu}
        className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center bg-black/70 border border-portfolio-accent/30 backdrop-blur-md transition-all duration-300 shadow-lg",
          isOpen ? "" : "animate-bounce"
        )}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white transition-all duration-300" />
        ) : (
          <Menu className="w-6 h-6 text-white transition-all duration-300" />
        )}
      </button>
      
      {/* Floating menu with enhanced animation */}
      <div 
        className={cn(
          "absolute bottom-16 left-1/2 transform -translate-x-1/2 transition-all duration-200 ease-out rounded-full backdrop-blur-lg bg-black/80 border border-white/10 overflow-hidden",
          isOpen 
            ? "opacity-100 scale-100 w-auto h-auto py-3 px-6 shadow-[0_0_30px_rgba(139,92,246,0.6)]" 
            : "opacity-0 scale-95 w-0 h-0 pointer-events-none"
        )}
      >
        <div className="flex space-x-4">
          {navItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.href}
              aria-label={item.label}
              className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-[#1f1f1f]/80 to-[#0f0f0f]/90 border border-white/10 hover:border-portfolio-accent transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] group relative"
              onClick={() => setTimeout(() => setIsOpen(false), 300)}
              style={{
                transitionDelay: `${index * 30}ms`,
                transform: isOpen ? 'translateY(0)' : 'translateY(10px)',
                opacity: isOpen ? 1 : 0
              }}
            >
              <div className="text-white group-hover:text-portfolio-accent transition-colors duration-300">
                {item.icon}
              </div>
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/70 text-xs rounded-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingNav;
