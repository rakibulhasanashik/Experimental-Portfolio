
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, Award, Star, Trophy, Medal } from "lucide-react";
import { Link } from "react-router-dom";

interface AchievementCardProps {
  title: string;
  subtitle: string;
  description: string;
  slug: string;
  className?: string;
  icon?: React.ReactNode;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  title,
  subtitle,
  description,
  slug,
  className,
  icon
}) => {
  return (
    <div className={cn(
      "bg-gradient-to-br from-[#1f1f1f]/80 to-[#0f0f0f]/90 p-8 rounded-xl animate-fade-in card-hover border-l-2 border-t-2 border-r-0 border-b-0 border-white/5 backdrop-blur-sm relative overflow-hidden group", 
      className
    )}>
      <div className="mb-6 flex justify-between items-center relative z-10">
        <span className="text-xs px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full flex items-center gap-1.5 border border-white/10 group-hover:border-portfolio-accent/30 transition-all duration-300">
          {icon || <Award size={12} className="text-portfolio-accent" />}
          <span className="group-hover:text-white transition-colors duration-300">Design Challenge</span>
        </span>
        <div className="flex items-center gap-1">
          <Star size={14} className="text-yellow-500 fill-yellow-500 animate-pulse-soft" />
          <Star size={14} className="text-yellow-500 fill-yellow-500 animate-pulse-soft animate-delay-100" />
          <Star size={14} className="text-yellow-500 fill-yellow-500 animate-pulse-soft animate-delay-200" />
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-2 group-hover:text-portfolio-accent transition-colors duration-300 relative">
        {title}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-portfolio-accent group-hover:w-1/3 transition-all duration-500 ease-out"></span>
      </h3>
      
      <p className="text-sm text-portfolio-text-muted mb-6 group-hover:text-white/80 transition-colors duration-300">{subtitle}</p>
      
      <p className="text-portfolio-text-muted mb-8 relative z-10 group-hover:text-white/70 transition-colors duration-300">{description}</p>
      
      <Link 
        to={`/achievement-detail/${slug}`}
        className="inline-block px-5 py-2.5 border border-white/20 rounded-full group-hover:bg-portfolio-accent group-hover:border-portfolio-accent transition-all duration-500 group flex items-center gap-2 relative overflow-hidden bg-gradient-to-r from-transparent to-transparent hover:from-portfolio-accent/20 hover:to-purple-900/20"
      >
        <span className="relative z-10">Full Insight</span>
        <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform relative z-10" />
        
        {/* Glow effect on hover */}
        <span className="absolute inset-0 bg-portfolio-accent/0 group-hover:bg-portfolio-accent/10 blur-md transition-all duration-500"></span>
      </Link>
    </div>
  );
};

const Achievements: React.FC = () => {
  // Achievement data
  const achievementData = [
    {
      title: "FASHION DESIGN CHALLENGE",
      subtitle: "Made design with fashion items elegantly crafted by Organizer Studio",
      description: "Participated and won the fashion design challenge with innovative and elegant UI solutions that captivated judges and users alike.",
      slug: "fashion-design-challenge",
      category: "Design",
      icon: <Award size={12} className="text-portfolio-accent" />
    },
    {
      title: "PROPERTIES & TRAVEL APP",
      subtitle: "Made designs with Properties & Travel app themes organized by Hot Onion",
      description: "Created an award-winning travel application interface focusing on user experience and visual appeal that exceeded client expectations.",
      slug: "properties-travel-app",
      category: "Design",
      icon: <Star size={12} className="text-portfolio-accent" />
    },
    {
      title: "DESIGN INNOVATION AWARD",
      subtitle: "Recognized for innovation in user interface design at the Global Design Awards",
      description: "Received prestigious recognition for creating groundbreaking interfaces that push the boundaries of digital design aesthetics and functionality.",
      slug: "design-innovation-award",
      category: "Awards",
      icon: <Trophy size={12} className="text-portfolio-accent" />
    },
    {
      title: "MOBILE EXCELLENCE BADGE",
      subtitle: "Top 10 mobile applications of the year by Design Federation",
      description: "Application design was selected among thousands of submissions for exceptional mobile user experience and innovative interaction patterns.",
      slug: "mobile-excellence-badge",
      category: "Recognition",
      icon: <Medal size={12} className="text-portfolio-accent" />
    }
  ];
  
  return (
    <section className="py-24 relative overflow-hidden" id="achievements">
      <div className="content-container">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 animate-fade-in relative inline-block">
          <span className="hero-title">ACHIEVEMENTS</span>
          <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-portfolio-accent"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievementData.map((achievement, index) => (
            <AchievementCard
              key={index}
              title={achievement.title}
              subtitle={achievement.subtitle}
              description={achievement.description}
              slug={achievement.slug}
              className={`animate-fade-in animate-delay-${index * 100} hover:shadow-[0_10px_50px_rgba(139,92,246,0.15)] transition-all duration-700`}
              icon={achievement.icon}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <Link 
            to="/achievements"
            className="social-button flex items-center space-x-2 animate-fade-in group hover:bg-gradient-to-r hover:from-portfolio-accent/20 hover:to-purple-900/20 hover:border-portfolio-accent/50"
          >
            <span>Unfold More</span>
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
