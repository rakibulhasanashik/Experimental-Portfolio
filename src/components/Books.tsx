
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type Book = {
  id: number;
  title: string;
  author: string;
  coverUrl: string;
  description: string;
  slug: string;
  category: string;
};

interface BooksProps {
  activeCategory?: string;
  setActiveCategory?: React.Dispatch<React.SetStateAction<string>>;
}

const Books: React.FC<BooksProps> = ({ 
  activeCategory = "All", 
  setActiveCategory = () => {} 
}) => {
  const books: Book[] = [
    {
      id: 1,
      title: "The Art of Design",
      author: "John Smith",
      coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "A comprehensive guide to modern design principles and techniques.",
      slug: "the-art-of-design",
      category: "Research"
    },
    {
      id: 2,
      title: "Creative Thinking",
      author: "Jane Doe",
      coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Unlock your creative potential with innovative thinking methods.",
      slug: "creative-thinking",
      category: "Literature"
    },
    {
      id: 3,
      title: "Digital Future",
      author: "Alex Johnson",
      coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Exploring the digital landscape and future of technology.",
      slug: "digital-future",
      category: "Fiction"
    },
    {
      id: 4,
      title: "Design Patterns",
      author: "Sara Williams",
      coverUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Essential patterns and practices for modern design systems.",
      slug: "design-patterns",
      category: "Non-Fiction"
    }
  ];

  const categories = ["All", "Research", "Literature", "Poetry", "Philosophy", "Psychology", "Fiction", "Non-Fiction"];
  
  const displayedBooks = activeCategory === "All" 
    ? books 
    : books.filter(book => book.category === activeCategory);

  return (
    <section className="py-24 relative" id="books">
      <div className="absolute top-40 right-10 w-96 h-96 bg-portfolio-accent opacity-5 rounded-full filter blur-3xl"></div>
      
      <div className="content-container">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in relative inline-block">
          <span className="hero-title">BOOKS</span>
          <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-portfolio-accent"></span>
        </h2>
        
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
          {displayedBooks.map((book) => (
            <div 
              key={book.id} 
              className="project-card bg-gradient-to-br from-[#252525]/90 to-[#151515]/95 rounded-xl overflow-hidden animate-fade-in border border-white/5"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={book.coverUrl} 
                  alt={book.title} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                <p className="text-portfolio-text-muted mb-1 text-sm">{book.author}</p>
                <span className="text-xs font-medium text-portfolio-accent bg-portfolio-accent/10 px-3 py-1 rounded-full mb-3 inline-block">
                  {book.category}
                </span>
                <p className="text-sm mb-4 line-clamp-3">{book.description}</p>
                
                <Link 
                  to={`/book-details/${book.slug}`}
                  className="inline-flex items-center text-sm font-medium text-portfolio-accent hover:text-white transition-colors group"
                >
                  View Details
                  <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <Link 
            to="/books"
            className="social-button flex items-center space-x-2 animate-fade-in hover-effect group hover:bg-gradient-to-r hover:from-portfolio-accent/20 hover:to-purple-900/20 hover:border-portfolio-accent/50"
          >
            <span>Explore All</span>
            <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Books;
