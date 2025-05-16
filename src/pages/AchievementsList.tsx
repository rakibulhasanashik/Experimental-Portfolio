
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Award, Star, Trophy, Medal } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

const AchievementsList = () => {
  const { theme, isChanging } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  // Generate 20 achievements
  const achievements = [
    {
      title: "FASHION DESIGN CHALLENGE",
      subtitle: "Made design with fashion items elegantly crafted by Organizer Studio",
      description: "Participated and won the fashion design challenge with innovative and elegant UI solutions that captivated judges and users alike.",
      slug: "fashion-design-challenge",
      icon: <Award size={12} className="text-portfolio-accent" />
    },
    {
      title: "PROPERTIES & TRAVEL APP",
      subtitle: "Made designs with Properties & Travel app themes organized by Hot Onion",
      description: "Created an award-winning travel application interface focusing on user experience and visual appeal that exceeded client expectations.",
      slug: "properties-travel-app",
      icon: <Star size={12} className="text-portfolio-accent" />
    },
    {
      title: "DESIGN INNOVATION AWARD",
      subtitle: "Recognized for innovation in user interface design at the Global Design Awards",
      description: "Received prestigious recognition for creating groundbreaking interfaces that push the boundaries of digital design aesthetics and functionality.",
      slug: "design-innovation-award",
      icon: <Trophy size={12} className="text-portfolio-accent" />
    },
    {
      title: "MOBILE EXCELLENCE BADGE",
      subtitle: "Top 10 mobile applications of the year by Design Federation",
      description: "Application design was selected among thousands of submissions for exceptional mobile user experience and innovative interaction patterns.",
      slug: "mobile-excellence-badge",
      icon: <Medal size={12} className="text-portfolio-accent" />
    }
  ];
  
  // Generate 16 more achievements to reach a total of 20
  for (let i = 0; i < 16; i++) {
    achievements.push({
      title: `ACHIEVEMENT TITLE ${i + 5}`,
      subtitle: `Subtitle for achievement number ${i + 5}`,
      description: `Detailed description about the achievement, what it involved, and why it matters in the field of design and development.`,
      slug: `achievement-${i + 5}`,
      icon: [<Award size={12} className="text-portfolio-accent" />, 
             <Star size={12} className="text-portfolio-accent" />,
             <Trophy size={12} className="text-portfolio-accent" />,
             <Medal size={12} className="text-portfolio-accent" />][i % 4]
    });
  }

  return (
    <div className={`${theme === 'dark' ? 'dark' : 'light'} bg-portfolio-bg min-h-screen transition-colors duration-500 ${isChanging ? 'animate-theme-transition' : ''}`}>
      <Header />
      
      <div className={`pt-32 pb-20 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0 transform translate-y-10"}`}>
        <div className="content-container">
          <div className="mb-12 flex flex-col items-center">
            <h1 className="hero-title text-5xl md:text-6xl font-black text-center mb-6">
              ALL ACHIEVEMENTS
            </h1>
            <p className="text-portfolio-text-muted max-w-2xl text-center">
              A showcase of awards, recognitions, and milestones throughout my career.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#1f1f1f]/80 to-[#0f0f0f]/90 p-8 rounded-xl card-hover border-l-2 border-t-2 border-r-0 border-b-0 border-white/5 backdrop-blur-sm relative overflow-hidden group animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="mb-6 flex justify-between items-center relative z-10">
                  <span className="text-xs px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full flex items-center gap-1.5 border border-white/10 group-hover:border-portfolio-accent/30 transition-all duration-300">
                    {achievement.icon}
                    <span className="group-hover:text-white transition-colors duration-300">Design Challenge</span>
                  </span>
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-yellow-500 fill-yellow-500 animate-pulse-soft" />
                    <Star size={14} className="text-yellow-500 fill-yellow-500 animate-pulse-soft animate-delay-100" />
                    <Star size={14} className="text-yellow-500 fill-yellow-500 animate-pulse-soft animate-delay-200" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 group-hover:text-portfolio-accent transition-colors duration-300 relative">
                  {achievement.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-portfolio-accent group-hover:w-1/3 transition-all duration-500 ease-out"></span>
                </h3>
                
                <p className="text-sm text-portfolio-text-muted mb-6 group-hover:text-white/80 transition-colors duration-300">{achievement.subtitle}</p>
                
                <p className="text-portfolio-text-muted mb-8 relative z-10 group-hover:text-white/70 transition-colors duration-300 line-clamp-3">{achievement.description}</p>
                
                <Link 
                  to={`/achievement-detail/${achievement.slug}`}
                  className="inline-block px-5 py-2.5 border border-white/20 rounded-full group-hover:bg-portfolio-accent group-hover:border-portfolio-accent transition-all duration-500 group flex items-center gap-2 relative overflow-hidden bg-gradient-to-r from-transparent to-transparent hover:from-portfolio-accent/20 hover:to-purple-900/20"
                >
                  <span className="relative z-10">Full Insight</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform relative z-10" />
                  
                  <span className="absolute inset-0 bg-portfolio-accent/0 group-hover:bg-portfolio-accent/10 blur-md transition-all duration-500"></span>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Link 
              to="/"
              className="social-button flex items-center space-x-2 animate-fade-in group"
            >
              <span>Back Home</span>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AchievementsList;
