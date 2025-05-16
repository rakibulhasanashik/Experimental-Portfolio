
import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Music, Youtube } from "lucide-react";

const MusicDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Simulated music details (in a real app, fetch this from an API)
  const musicItem = {
    title: "Cosmic Harmony",
    artist: "Astral Echoes",
    youtubeId: "Io3Il8wJZS0",
    spotifyId: "6rqhFgbbKwnb9MLmUQDhG6",
    youtubeMusic: "Io3Il8wJZS0",
    description: "A mesmerizing journey through ambient soundscapes that blend electronic elements with organic textures. This piece creates a sense of cosmic vastness while maintaining an intimate emotional core.",
    releaseYear: 2025,
    genre: "Ambient Electronic",
    duration: "4:32",
    producer: "Nebula Productions",
    coverImage: "https://images.unsplash.com/photo-1614149162883-504ce4d13909?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    slug: "cosmic-harmony",
    lyrics: `
      Floating through the cosmic void
      Particles of light in endless dance
      Harmony of stars and silence
      Echoes of the universe's expanse
      
      (Chorus)
      We are stardust in motion
      Cosmic harmony, celestial devotion
      Across the heavens we roam
      In this universe we call home
    `
  };
  
  const platformLinks = [
    { 
      name: "Spotify", 
      url: `https://open.spotify.com/track/${musicItem.spotifyId}`,
      icon: <Music className="w-5 h-5" />,
      color: "bg-[#1DB954] hover:bg-[#1DB954]/90"
    },
    { 
      name: "YouTube Music", 
      url: `https://music.youtube.com/watch?v=${musicItem.youtubeMusic}`,
      icon: <Music className="w-5 h-5" />,
      color: "bg-[#FF0000] hover:bg-[#FF0000]/90"
    },
    { 
      name: "YouTube", 
      url: `https://www.youtube.com/watch?v=${musicItem.youtubeId}`,
      icon: <Youtube className="w-5 h-5" />,
      color: "bg-[#FF0000] hover:bg-[#FF0000]/90"
    }
  ];
  
  return (
    <div className="min-h-screen py-24">
      <div className="content-container">
        <Link to="/music" className="flex items-center text-portfolio-accent mb-8 hover:underline">
          <ArrowLeft size={18} className="mr-2" />
          Back to Music
        </Link>
      
        <div className="bg-gradient-to-br from-[#252525]/90 to-[#151515]/95 rounded-xl overflow-hidden border border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{musicItem.title}</h1>
              <p className="text-portfolio-text-muted mb-6">{musicItem.artist}</p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {platformLinks.map((platform, index) => (
                  <a 
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${platform.color} text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-all hover:shadow-lg`}
                  >
                    {platform.icon}
                    <span>Listen on {platform.name}</span>
                  </a>
                ))}
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">About</h3>
                <p className="text-sm text-portfolio-text-muted">{musicItem.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs uppercase text-portfolio-text-muted">Genre</h4>
                  <p>{musicItem.genre}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase text-portfolio-text-muted">Release Year</h4>
                  <p>{musicItem.releaseYear}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase text-portfolio-text-muted">Duration</h4>
                  <p>{musicItem.duration}</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase text-portfolio-text-muted">Producer</h4>
                  <p>{musicItem.producer}</p>
                </div>
              </div>
            </div>
            
            <div className="p-8 flex flex-col">
              <div className="aspect-square rounded-lg overflow-hidden mb-6">
                <iframe 
                  src={`https://www.youtube.com/embed/${musicItem.youtubeId}`}
                  title={musicItem.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              <div className="mt-auto">
                <h3 className="text-xl font-semibold mb-2">Lyrics</h3>
                <pre className="whitespace-pre-wrap text-sm text-portfolio-text-muted font-inter">{musicItem.lyrics}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicDetail;
