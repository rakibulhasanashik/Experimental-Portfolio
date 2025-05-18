import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BooksProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  sectionTitle: string;
}

const Books: React.FC<BooksProps> = ({ activeCategory, setActiveCategory, sectionTitle }) => {
  const categories = ["All", "Research", "Literature", "Poetry", "Philosophy", "Psychology", "Fiction", "Non-Fiction"];
  
  const booksData = [
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      category: "Psychology",
      coverUrl: "https://images-na.ssl-images-amazon.com/images/I/71F+5mKHEUL._AC_UL600_SR600,400_.jpg",
      slug: "psychology-of-money"
    },
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      category: "Fiction",
      coverUrl: "https://images-na.ssl-images-amazon.com/images/I/81hyQNu8PnL._AC_UL600_SR600,400_.jpg",
      slug: "silent-patient"
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      category: "Philosophy",
      coverUrl: "https://images-na.ssl-images-amazon.com/images/I/71HMshrT3lL._AC_UL600_SR600,400_.jpg",
      slug: "sapiens"
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      category: "Non-Fiction",
      coverUrl: "https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL600_SR600,400_.jpg",
      slug: "atomic-habits"
    }
  ];

  const filteredBooks = activeCategory === "All" 
    ? booksData 
    : booksData.filter(book => book.category === activeCategory);

  return (
    <section className="py-24 relative" id="books">
      <div className="absolute top-0 left-0 w-96 h-96 bg-portfolio-accent opacity-5 rounded-full filter blur-3xl"></div>
      
      <div className="content-container">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in relative inline-block">
          <span className="hero-title">{sectionTitle}</span>
          <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-portfolio-accent"></span>
        </h2>

        {/* Add categories for books */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`tag ${activeCategory === category ? "bg-white text-black dark:bg-portfolio-accent dark:text-white" : ""}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredBooks.map((book, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-[#252525]/90 to-[#151515]/95 rounded-xl p-6 animate-fade-in hover:shadow-[0_15px_30px_rgba(139,92,246,0.2)] transition-all duration-500 border-l-2 border-t-2 border-r-0 border-b-0 border-white/5 backdrop-blur-sm transform hover:scale-[1.02] group light:from-white/90 light:to-gray-100/95 light:border-black/5"
            >
              <div className="mb-4">
                <span className="text-xs font-medium text-portfolio-accent bg-portfolio-accent/10 px-3 py-1 rounded-full">
                  {book.category}
                </span>
              </div>
              
              <div className="relative mb-6 aspect-[2/3] overflow-hidden rounded-lg">
                <img 
                  src={book.coverUrl} 
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-1 group-hover:text-portfolio-accent transition-colors duration-300">{book.title}</h3>
              <p className="text-portfolio-text-muted mb-4 text-sm">{book.author}</p>
              
              <Link 
                to={`/book-details/${book.slug}`}
                className="inline-flex items-center text-sm font-medium text-portfolio-accent hover:text-white transition-colors group light:hover:text-black"
              >
                Read More
                <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <Link 
            to="/books"
            className="social-button flex items-center space-x-2 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]"
          >
            <span>View All Books</span>
            <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Books;
