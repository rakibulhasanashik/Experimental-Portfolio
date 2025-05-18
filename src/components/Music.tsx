

import React, { useState } from "react";
import { ArrowRight, Play, Pause, Music as MusicIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface MusicCardProps {
  title: string;
  artist: string;
  coverImage: string;
  duration: string;
  category: string; // Added category field
  slug: string;
  className?: string;
  animationDelay?: string;
}

const MusicCard: React.FC<MusicCardProps> = ({
  title,
  artist,
  coverImage,
  duration,
  category, // Added category prop
  slug,
  className,
  animationDelay = "",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  return (
    <div 
      className={cn(
        "bg-gradient-to-br from-[#252525]/90 to-[#151515]/95 rounded-xl p-6 animate-fade-in hover:shadow-[0_15px_30px_rgba(139,92,246,0.2)] transition-all duration-500 border-l-2 border-t-2 border-r-0 border-b-0 border-white/5 backdrop-blur-sm transform hover:scale-[1.02] group",
        animationDelay,
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-4 flex justify-between items-start">
        <span className="text-xs font-medium text-portfolio-accent bg-portfolio-accent/10 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      
      <div className="relative mb-6 aspect-square overflow-hidden rounded-lg">
        <img 
          src={coverImage} 
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className={cn(
          "absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}>
          <button 
            onClick={togglePlay}
            className="w-14 h-14 rounded-full bg-portfolio-accent/90 flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            {isPlaying ? (
              <Pause size={24} className="text-white" />
            ) : (
              <Play size={24} className="text-white ml-1" />
            )}
          </button>
        </div>
        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 rounded-md text-xs font-medium">
          {duration}
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-1 group-hover:text-portfolio-accent transition-colors duration-300">{title}</h3>
      <p className="text-portfolio-text-muted mb-4 text-sm">{artist}</p>
      
      <Link 
        to={`/music-detail/${slug}`}
        className="inline-flex items-center text-sm font-medium text-portfolio-accent hover:text-white transition-colors group"
      >
        Full Experience
        <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

const Music: React.FC = () => {
  const musicData = [
    {
      title: "Cosmic Harmony",
      artist: "Astral Echoes",
      coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000",
      duration: "4:32",
      category: "Ambient",
      slug: "cosmic-harmony"
    },
    {
      title: "Digital Dreams",
      artist: "Electric Pulse",
      coverImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1000",
      duration: "3:45",
      category: "Electronic",
      slug: "digital-dreams"
    },
    {
      title: "Midnight Wanderer",
      artist: "Lunar Eclipse",
      coverImage: "https://images.unsplash.com/photo-1526327760257-75f515c8cfe8?auto=format&fit=crop&q=80&w=1000", // Updated image URL
      duration: "5:17",
      category: "Lo-Fi",
      slug: "midnight-wanderer"
    },
    {
      title: "Neon Future",
      artist: "Synthetic Vision",
      coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1000",
      duration: "4:05",
      category: "Synthwave",
      slug: "neon-future"
    }
  ];

  return (
    <section className="py-24 relative" id="music">
      <div className="absolute top-40 left-10 w-96 h-96 bg-portfolio-accent opacity-5 rounded-full filter blur-3xl"></div>
      
      <div className="content-container">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in relative inline-block">
          <span className="hero-title">MUSIC</span>
          <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-portfolio-accent"></span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {musicData.map((music, index) => (
            <MusicCard
              key={index}
              title={music.title}
              artist={music.artist}
              coverImage={music.coverImage}
              duration={music.duration}
              category={music.category}
              slug={music.slug}
              animationDelay={`animate-delay-${(index + 1) * 100}`}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <Link 
            to="/music"
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

export default Music;
