import React, { useState } from "react"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { cn } from "@/utils"
import MusicCard from "./MusicCard"

const Music: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Electronic", "Ambient", "Jazz", "Classical", "Rock"]

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
      coverImage: "https://images.unsplash.com/photo-1526327760257-75f515c8cfe8?auto=format&fit=crop&q=80&w=1000",
      duration: "5:17",
      category: "Jazz",
      slug: "midnight-wanderer"
    },
    {
      title: "Neon Future",
      artist: "Synthetic Vision",
      coverImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=1000",
      duration: "4:05",
      category: "Rock",
      slug: "neon-future"
    },
    {
      title: "Moonlight Sonata",
      artist: "Ludwig van Beethoven",
      coverImage: "https://images.unsplash.com/photo-1502136969935-8d5f3dd6f7a5?auto=format&fit=crop&q=80&w=1000",
      duration: "6:00",
      category: "Classical",
      slug: "moonlight-sonata"
    }
  ]

  const filteredMusic = selectedCategory === "All"
    ? musicData
    : musicData.filter((music) => music.category === selectedCategory)

  return (
    <section className="py-24 relative" id="music">
      <div className="absolute top-40 left-10 w-96 h-96 bg-portfolio-accent opacity-5 rounded-full filter blur-3xl" />

      <div className="content-container">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in relative inline-block">
          <span className="hero-title">MUSIC</span>
          <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-portfolio-accent" />
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "transition-all px-5 py-2 text-sm rounded-full font-medium border duration-200 ease-in-out",
                selectedCategory === cat
                  ? "bg-portfolio-accent text-white border-portfolio-accent shadow-md scale-105"
                  : "text-portfolio-accent border-portfolio-accent/30 hover:bg-portfolio-accent/10 hover:scale-105"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Music Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredMusic.map((music, index) => (
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

        {/* View More Button */}
        <div className="flex justify-center mt-16">
          <Link
            to="/music"
            className="social-button flex items-center space-x-2 px-6 py-2 border border-portfolio-accent rounded-full text-portfolio-accent transition-all duration-300 hover:bg-portfolio-accent/10 group"
          >
            <span className="group-hover:underline">Unfold More</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-200 transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Music
