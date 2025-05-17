
import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme, isChanging } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Generate random stars
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 18; i++) {
      const size = Math.random() * 2 + 1;
      const top = Math.random() * 70 + 15;
      const left = Math.random() * 70 + 15;
      const delay = Math.random() * 2;
      
      stars.push(
        <div 
          key={i}
          className="star-container"
          style={{
            position: 'absolute',
            width: `${size * 3}px`,
            height: `${size * 3}px`,
            top: `${top}%`,
            left: `${left}%`,
            animationDelay: `${delay}s`
          }}
        >
          <svg 
            viewBox="0 0 10 10" 
            className="star"
            style={{
              width: '100%',
              height: '100%'
            }}
          >
            <polygon 
              points="5,0 6,4 10,4 7,7 8,10 5,8 2,10 3,7 0,4 4,4" 
              fill="white" 
            />
          </svg>
        </div>
      );
    }
    return stars;
  };

  return (
    <header className={`py-3 sm:py-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-portfolio-bg/80 shadow-lg shadow-black/10' : 'bg-transparent'}`}>
      <div className="content-container flex justify-between items-center">
        <div className="flex items-center space-x-1 xs:space-x-2">
          <img 
            src="/lovable-uploads/56f9f30e-b191-48c3-87d0-a7f463c49c62.png" 
            alt="Logo" 
            className="w-8 h-8 xs:w-9 xs:h-9 sm:w-11 sm:h-11 rounded-full object-cover animate-pulse-soft"
          />
          <img 
            src="/lovable-uploads/aceff394-cfb9-4c0b-9ef2-f50330110926.png" 
            alt="Abid Hasan Sarder" 
            className="h-8 xs:h-9 sm:h-12" 
          />
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Theme toggle with stars - matched height with Contact button and smaller width */}
          <button 
            onClick={toggleTheme} 
            className="relative h-8 w-[52px] xs:w-[56px] sm:w-[62px] rounded-full flex items-center justify-center overflow-hidden transition-all duration-300"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <div className={`absolute inset-0 transition-all duration-500 rounded-full flex items-center px-1 ${theme === 'dark' ? 'bg-[#1a237e]' : 'bg-[#a3d8f4]'}`}>
              {theme === 'dark' && renderStars()}
              <div className={`h-6 w-6 rounded-full flex items-center justify-center transition-all duration-500 transform ${theme === 'dark' ? 'ml-auto bg-[#0d1642]' : 'ml-0 bg-[#FFD700]'}`}>
                {theme === 'dark' ? (
                  <Moon size={12} className="text-white" />
                ) : (
                  <div className="relative">
                    <Sun size={12} className="text-[#FFD700]" />
                    <div className="absolute top-0 right-0 h-1.5 w-1.5 rounded-full bg-white transform translate-x-1 -translate-y-1"></div>
                  </div>
                )}
              </div>
            </div>
          </button>
          
          <button 
            className="bg-[#6a0dad] clean-shine-button h-8 w-[66px] xs:w-[72px] sm:w-[84px] rounded-full hover:bg-opacity-80 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] font-medium text-xs sm:text-sm text-white h-8"
            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
