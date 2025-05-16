
import React from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ThoughtCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
  className?: string;
  animationDelay?: string;
}

interface ThoughtArchiveProps {
  activeCategory?: string;
  setActiveCategory?: React.Dispatch<React.SetStateAction<string>>;
}

const ThoughtCard: React.FC<ThoughtCardProps> = ({
  title,
  excerpt,
  date,
  category,
  slug,
  className,
  animationDelay = "",
}) => {
  return (
    <div className={cn(
      "bg-gradient-to-br from-[#252525]/90 to-[#151515]/95 p-8 rounded-xl animate-fade-in card-hover border-l-2 border-t-2 border-r-0 border-b-0 border-white/5 backdrop-blur-sm relative overflow-hidden group",
      animationDelay,
      className
    )}>
      <div className="mb-4 flex justify-between items-start">
        <span className="text-xs font-medium text-portfolio-accent bg-portfolio-accent/10 px-3 py-1 rounded-full">{category}</span>
        <div className="flex items-center text-xs text-portfolio-text-muted">
          <Calendar size={12} className="mr-1" />
          {date}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-2 group-hover:text-portfolio-accent transition-colors duration-300 relative">
        {title}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-portfolio-accent group-hover:w-1/3 transition-all duration-500 ease-out"></span>
      </h3>
      
      <p className="text-portfolio-text-muted mb-6 text-sm line-clamp-3 group-hover:text-white/70 transition-colors duration-300">{excerpt}</p>
      
      <Link 
        to={`/thought-detail/${slug}`}
        className="inline-block px-5 py-2.5 border border-white/20 rounded-full group-hover:bg-portfolio-accent group-hover:border-portfolio-accent transition-all duration-500 group flex items-center gap-2 relative overflow-hidden bg-gradient-to-r from-transparent to-transparent hover:from-portfolio-accent/20 hover:to-purple-900/20"
      >
        <span className="relative z-10">Continue Reading</span>
        <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform relative z-10" />
        
        <span className="absolute inset-0 bg-portfolio-accent/0 group-hover:bg-portfolio-accent/10 blur-md transition-all duration-500"></span>
      </Link>
    </div>
  );
};

const ThoughtArchive: React.FC<ThoughtArchiveProps> = ({ 
  activeCategory = "All", 
  setActiveCategory = () => {} 
}) => {
  const categories = ["All", "Design Theory", "UI Trends", "Future Tech", "Design Systems"];
  
  const thoughts = [
    {
      title: "The Intersection of Design and Psychology",
      excerpt: "Exploring how understanding human psychology can lead to more intuitive and effective design solutions that resonate with users on a deeper level.",
      date: "May 2, 2025",
      category: "Design Theory",
      slug: "design-psychology-intersection"
    },
    {
      title: "Minimalism vs. Maximalism in UI Design",
      excerpt: "Analyzing the strengths and weaknesses of both minimalist and maximalist approaches in modern interface design and finding the balance.",
      date: "April 15, 2025",
      category: "UI Trends",
      slug: "minimalism-maximalism-ui"
    },
    {
      title: "The Future of Human-Computer Interaction",
      excerpt: "Predicting how emerging technologies like AR/VR, voice interfaces, and haptic feedback will transform how we interact with digital products.",
      date: "March 28, 2025",
      category: "Future Tech",
      slug: "future-human-computer-interaction"
    },
    {
      title: "Design Systems: Beyond Component Libraries",
      excerpt: "How modern design systems are evolving from mere component libraries to comprehensive design languages that unify product experiences.",
      date: "March 10, 2025",
      category: "Design Systems",
      slug: "design-systems-evolution"
    }
  ];

  const filteredThoughts = activeCategory === "All" 
    ? thoughts 
    : thoughts.filter(thought => thought.category === activeCategory);

  return (
    <section className="py-24 relative" id="thoughts">
      <div className="absolute top-20 right-20 w-80 h-80 bg-portfolio-accent opacity-5 rounded-full filter blur-3xl"></div>
      
      <div className="content-container">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in relative inline-block">
          <span className="hero-title">THOUGHT ARCHIVE</span>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredThoughts.map((thought, index) => (
            <ThoughtCard
              key={index}
              title={thought.title}
              excerpt={thought.excerpt}
              date={thought.date}
              category={thought.category}
              slug={thought.slug}
              animationDelay={`animate-delay-${(index + 1) * 100}`}
              className="hover:shadow-[0_10px_50px_rgba(139,92,246,0.15)] transition-all duration-700"
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <Link 
            to="/thoughts"
            className="social-button flex items-center space-x-2 animate-fade-in hover-effect group hover:bg-gradient-to-r hover:from-portfolio-accent/20 hover:to-purple-900/20 hover:border-portfolio-accent/50"
          >
            <span>Unfold More</span>
            <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThoughtArchive;
