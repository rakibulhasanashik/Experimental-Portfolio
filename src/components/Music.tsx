
import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface MusicCardProps {
  title: string;
  artist: string;
  youtubeId: string;
  duration: string;
  category: string;
  slug: string;
  className?: string;
  animationDelay?: string;
}

interface MusicProps {
  activeCategory?: string;
  setActiveCategory?: React.Dispatch<React.SetStateAction<string>>;
}

const MusicCard: React.FC<MusicCardProps> = ({
  title,
  artist,
  youtubeId,
  duration,
  category,
  slug,
  className,
  animationDelay = "",
}) => {
  return (
    <div 
      className={cn(
        "bg-gradient-to-br from-[#252525]/90 to-[#151515]/95 rounded-xl p-6 animate-fade-in hover:shadow-[0_15px_30px_rgba(139,92,246,0.2)] transition-all duration-500 border-l-2 border-t-2 border-r-0 border-b-0 border-white/5 backdrop-blur-sm transform hover:scale-[1.02] group",
        animationDelay,
        className
      )}
    >
      <div className="mb-4 flex justify-between items-start">
        <span className="text-xs font-medium text-portfolio-accent bg-portfolio-accent/10 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>
      
      <div className="relative mb-6 aspect-square overflow-hidden rounded-lg">
        <iframe 
          src={`https://www.youtube.com/embed/${youtubeId}`} 
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full object-cover"
        />
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

const Music: React.FC<MusicProps> = ({ 
  activeCategory = "All", 
  setActiveCategory = () => {} 
}) => {
  const musicData = [
    {
      title: "Cosmic Harmony",
      artist: "Astral Echoes",
      youtubeId: "Io3Il8wJZS0",
      duration: "4:32",
      category: "Ambient",
      slug: "cosmic-harmony"
    },
    {
      title: "Digital Dreams",
      artist: "Electric Pulse",
      youtubeId: "Y8EIiVLG1E4",
      duration: "3:45",
      category: "Electronic",
      slug: "digital-dreams"
    },
    {
      title: "Midnight Wanderer",
      artist: "Lunar Eclipse",
      youtubeId: "5qap5aO4i9A",
      duration: "5:17",
      category: "Jazz",
      slug: "midnight-wanderer"
    },
    {
      title: "Neon Future",
      artist: "Synthetic Vision",
      youtubeId: "jfKfPfyJRdk",
      duration: "4:05",
      category: "Classical",
      slug: "neon-future"
    }
  ];

  const categories = ["All", "Electronic", "Ambient", "Jazz", "Classical", "Rock"];
  const filteredMusic = activeCategory === "All" 
    ? musicData 
    : musicData.filter(music => music.category === activeCategory);

  return (
    <section className="py-20 relative" id="music">
      <div className="absolute top-0 right-0 w-96 h-96 bg-portfolio-accent opacity-5 rounded-full filter blur-3xl"></div>
      
      <div className="content-container">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in relative inline-block">
          <span className="hero-title">MUSIC COMPOSITIONS</span>
          <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-portfolio-accent"></span>
        </h2>
        
        {/* Category filters with same style as Timeline section */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`tag px-4 py-2 transition-all duration-300 ${activeCategory === category ? 'bg-white text-black dark:bg-portfolio-accent dark:text-white' : 'hover:bg-white/10'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredMusic.map((music, index) => (
            <MusicCard
              key={index}
              title={music.title}
              artist={music.artist}
              youtubeId={music.youtubeId}
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
            className="social-button flex items-center space-x-2 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
          >
            <span>Unfold More</span>
            <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Music;
