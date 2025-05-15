
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

const BooksList = () => {
  const { theme, isChanging } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [filter, setFilter] = useState("all");
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    window.scrollTo(0, 0);
  }, []);

  const books = Array(20).fill(null).map((_, index) => ({
    id: index + 1,
    title: `Book Title ${index + 1}`,
    author: `Author ${index + 1}`,
    cover: `https://picsum.photos/id/${index + 70}/500/700`,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quidem.",
    category: ["Research", "Literature", "Poetry", "Philosophy", "Psychology", "Fiction", "Non-Fiction"][index % 7],
    slug: `book-${index + 1}`
  }));

  const filteredBooks = filter === "all" 
    ? books 
    : books.filter(book => book.category.toLowerCase() === filter);

  return (
    <div className={`${theme === 'dark' ? 'dark' : 'light'} bg-portfolio-bg min-h-screen transition-colors duration-500 ${isChanging ? 'animate-theme-transition' : ''}`}>
      <Header />
      
      <div className={`pt-32 pb-20 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0 transform translate-y-10"}`}>
        <div className="content-container">
          <div className="mb-12 flex flex-col items-center">
            <h1 className="hero-title text-5xl md:text-6xl font-black text-center mb-6">
              ALL BOOKS
            </h1>
            <p className="text-portfolio-text-muted max-w-2xl text-center mb-8">
              Explore my complete collection of published books across different genres.
            </p>
            
            <div className="flex flex-wrap justify-center gap-2">
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
                className={`tag px-4 py-2 transition-all duration-300 ${filter === 'literature' ? 'bg-white text-black' : 'hover:bg-white/10'}`}
                onClick={() => setFilter("literature")}
              >
                Literature
              </button>
              <button 
                className={`tag px-4 py-2 transition-all duration-300 ${filter === 'poetry' ? 'bg-white text-black' : 'hover:bg-white/10'}`}
                onClick={() => setFilter("poetry")}
              >
                Poetry
              </button>
              <button 
                className={`tag px-4 py-2 transition-all duration-300 ${filter === 'philosophy' ? 'bg-white text-black' : 'hover:bg-white/10'}`}
                onClick={() => setFilter("philosophy")}
              >
                Philosophy
              </button>
              <button 
                className={`tag px-4 py-2 transition-all duration-300 ${filter === 'psychology' ? 'bg-white text-black' : 'hover:bg-white/10'}`}
                onClick={() => setFilter("psychology")}
              >
                Psychology
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
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
            {filteredBooks.map((book, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#252525]/90 to-[#151515]/95 rounded-xl overflow-hidden animate-fade-in hover:shadow-[0_10px_30px_rgba(139,92,246,0.2)] transition-all duration-500 transform hover:scale-105 border border-white/5"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={book.cover} 
                    alt={book.title} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-portfolio-accent bg-portfolio-accent/10 px-2 py-1 rounded-full">
                      {book.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-2">{book.title}</h3>
                  <p className="text-portfolio-text-muted mb-4 text-sm">{book.author}</p>
                  <p className="text-sm mb-4 line-clamp-2">{book.description}</p>
                  
                  <Link 
                    to={`/book-details/${book.slug}`}
                    className="inline-flex items-center text-sm font-medium text-portfolio-accent hover:text-white transition-colors group"
                  >
                    View Details
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

export default BooksList;
