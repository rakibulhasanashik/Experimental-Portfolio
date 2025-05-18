
import React, { useState } from "react";
import { ArrowRight, Book, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface BookCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  className?: string;
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  description,
  image,
  tags,
  className,
}) => {
  return (
    <div className={cn(
      "project-card card-hover animate-fade-in glow-effect backdrop-blur-sm bg-gradient-to-br from-[#1f1f1f]/80 to-[#0f0f0f]/90 border-l-2 border-t-2 border-r-0 border-b-0 border-white/5 rounded-xl overflow-hidden", 
      className
    )}>
      <div className="relative group overflow-hidden rounded-t-xl">
        <div className="aspect-[2/3] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
          <div className="p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <Link 
              to={`/book-details/${title.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium flex items-center text-white hover:text-portfolio-accent transition-colors group"
            >
              View Book Details
              <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="p-6 relative z-10">
        <h3 className="text-2xl font-bold mb-2 hover:text-portfolio-accent transition-colors duration-300">{title}</h3>
        <p className="text-portfolio-text-muted mb-5">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="tag bg-black/30 hover:bg-portfolio-accent/20 transition-all duration-300 transform hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link 
          to={`/book-details/${title.toLowerCase().replace(/\s+/g, '-')}`}
          className="inline-block px-5 py-2.5 border border-white/20 rounded-full hover:bg-portfolio-accent hover:border-portfolio-accent transition-all duration-500 flex items-center gap-2 relative overflow-hidden bg-gradient-to-r from-transparent to-transparent hover:from-portfolio-accent/20 hover:to-purple-900/20"
        >
          <span className="relative z-10">View Details</span>
          <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform relative z-10" />
        </Link>
      </div>
    </div>
  );
};

const Books: React.FC = () => {
  const [filter, setFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);
  
  const booksData = [
    {
      title: "The Digital Mind",
      description: "A comprehensive exploration of artificial intelligence and its impact on human cognition and society.",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
      tags: ["Non-Fiction", "Technology", "AI"],
      category: "research"
    },
    {
      title: "Echoes of Silence",
      description: "A collection of poems exploring themes of solitude, reflection, and the human condition in modern society.",
      image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800",
      tags: ["Poetry", "Literature", "Art"],
      category: "poetry"
    },
    {
      title: "Beyond the Horizon",
      description: "A science fiction novel set in a distant future where humanity faces its greatest challenge yet.",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800",
      tags: ["Fiction", "Sci-Fi", "Adventure"],
      category: "fiction"
    },
    {
      title: "The Art of Being",
      description: "A philosophical exploration of consciousness, existence, and finding meaning in a complex world.",
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800",
      tags: ["Philosophy", "Non-Fiction", "Psychology"],
      category: "philosophical"
    },

  const getFilteredBooks = () => {
    const filtered = filter === "all" 
      ? booksData 
      : booksData.filter(book => book.category === filter);
    
    return showAll ? filtered : filtered.slice(0, 4);
  };
  
  
  return (
    <section className="py-24 relative" id="books">
      <div className="content-container px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in relative inline-block">
          <span className="hero-title">BOOKS</span>
          <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-portfolio-accent"></span>
        </h2>
        
        <div className="flex flex-wrap gap-4 mb-12 animate-fade-in">
          <button 
            className={`tag px-4 py-2 transition-all duration-300 ${filter === 'all' ? 'bg-white text-black' : 'hover:bg-white/10'}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button 
            className={`tag px-4 py-2 transition-all duration-300 ${filter === 'research' ? 'bg-white text-black' : 'hover:bg-white/10'}`}
            onClick={() => setFilter("research")}
          >
            Research
          </button>
          <button 
            className={`tag px-4 py-2 transition-all duration-300 ${filter === 'poetry' ? 'bg-white text-black' : 'hover:bg-white/10'}`}
            onClick={() => setFilter("poetry")}
          >
            Literature & Poetry
          </button>
          <button 
            className={`tag px-4 py-2 transition-all duration-300 ${filter === 'fiction' ? 'bg-white text-black' : 'hover:bg-white/10'}`}
            onClick={() => setFilter("fiction")}
          >
            Fiction
          </button>
          <button 
            className={`tag px-4 py-2 transition-all duration-300 ${filter === 'non-fiction' ? 'bg-white text-black' : 'hover:bg-white/10'}`}
            onClick={() => setFilter("non-fiction")}
          >
            Non-Fiction
          </button>
          <button 
            className={`tag px-4 py-2 transition-all duration-300 ${filter === 'philosophical' ? 'bg-white text-black' : 'hover:bg-white/10'}`}
            onClick={() => setFilter("philosophical")}
          >
            Philosophical
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {getFilteredBooks().map((book, index) => (
            <BookCard
              key={index}
              title={book.title}
              description={book.description}
              image={book.image}
              tags={book.tags}
              category={book.category}
              className={`animate-delay-${(index + 1) * 100}`}
            />
          ))}
        </div>
                      
        <div className="flex justify-center mt-10">
          <Link 
            to="/books"
            className="social-button flex items-center space-x-2 animate-fade-in group"
          >
            <span>View All Books</span>
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Books;
