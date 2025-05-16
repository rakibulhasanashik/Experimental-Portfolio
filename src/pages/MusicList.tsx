
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Play, Pause } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

const MusicList = () => {
  const { theme, isChanging } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [filter, setFilter] = useState("all");
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  const togglePlay = (index: number) => {
    if (playingIndex === index) {
      setPlayingIndex(null);
    } else {
      setPlayingIndex(index);
    }
  };

  // Generate 20 music items
  const music = Array(20).fill(null).map((_, index) => ({
    id: index + 1,
    title: `Music Title ${index + 1}`,
    artist: `Artist Name ${index % 5 + 1}`,
    coverImage: `https://picsum.photos/id/${index + 100}/500/500`,
    duration: `${Math.floor(Math.random() * 4) + 2}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    genre: ["Electronic", "Ambient", "Jazz", "Classical", "Rock"][index % 5],
    slug: `music-${index + 1}`
  }));

  const filteredMusic = filter === "all" 
    ? music 
    : music.filter(m => m.genre.toLowerCase().replace(" & ", "-").replace(" ", "-") === filter);

  return (
    <div className={`${theme === 'dark' ? 'dark' : 'light'} bg-portfolio-bg min-h-screen transition-colors duration-500 ${isChanging ? 'animate-theme-transition' : ''}`}>
      <Header />
      
      <div className={`pt-32 pb-20 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0 transform translate-y-10"}`}>
        <div className="content-container">
          <div className="mb-12 flex flex-col items-center">
            <h1 className="hero-title text-5xl md:text-6xl font-black text-center mb-6">
              ALL MUSIC
            </h1>
            <p className="text-portfolio-text-muted max-w-2xl text-center mb-8">
              Explore my complete collection of music across various genres.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2">
              <button 
                className={`tag px-4 py-2 transition-all duration-300 ${filter === 'all' ? 'bg-white text-black' : 'hover:bg-white/10'}`}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button 
                className={`tag px-4 py-2 transition-all duration-300 ${filter === 'electronic' ? 'bg-white text-black' : 'hover:bg-white/10'}`}
                onClick={() => setFilter("electronic")}
              >
                Electronic
              </button>
              <button 
                className={`tag px-4 py-2 transition-all duration-300 ${filter === 'ambient' ? 'bg-white text-black' : 'hover:bg-white/10'}`}
                onClick={() => setFilter("ambient")}
              >
                Ambient
              </button>
              <button 
                className={`tag px-4 py-2 transition-all duration-300 ${filter === 'jazz' ? 'bg-white text-black' : 'hover:bg-white/10'}`}
                onClick={() => setFilter("jazz")}
              >
                Jazz
              </button>
              <button 
                className={`tag px-4 py-2 transition-all duration-300 ${filter === 'classical' ? 'bg-white text-black' : 'hover:bg-white/10'}`}
                onClick={() => setFilter("classical")}
              >
                Classical
              </button>
              <button 
                className={`tag px-4 py-2 transition-all duration-300 ${filter === 'rock' ? 'bg-white text-black' : 'hover:bg-white/10'}`}
                onClick={() => setFilter("rock")}
              >
                Rock
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
            {filteredMusic.map((track, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#252525]/90 to-[#151515]/95 rounded-xl overflow-hidden animate-fade-in hover:shadow-[0_15px_30px_rgba(139,92,246,0.2)] transition-all duration-500 border border-white/5 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={track.coverImage} 
                    alt={track.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                      className="w-16 h-16 rounded-full bg-portfolio-accent/80 flex items-center justify-center hover:scale-110 transition-all duration-300"
                      onClick={() => togglePlay(index)}
                    >
                      {playingIndex === index ? (
                        <Pause size={30} className="text-white" />
                      ) : (
                        <Play size={30} className="text-white ml-1" />
                      )}
                    </button>
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 rounded-full text-xs">
                    {track.duration}
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-portfolio-accent bg-portfolio-accent/10 px-2 py-1 rounded-full">
                      {track.genre}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-1 line-clamp-1">{track.title}</h3>
                  <p className="text-sm text-portfolio-text-muted mb-3">{track.artist}</p>
                  
                  <Link 
                    to={`/music-detail/${track.slug}`}
                    className="inline-flex items-center text-xs font-medium text-portfolio-accent hover:text-white transition-colors group"
                  >
                    Full Experience
                    <ArrowRight size={14} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
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

export default MusicList;
