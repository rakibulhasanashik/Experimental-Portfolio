
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingBag, BookOpen, Star, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BookDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // This would normally come from an API or database
  const bookData = {
    title: slug?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'Book Title',
    author: 'Your Name',
    publishDate: 'June 15, 2023',
    publisher: 'Global Publishing House',
    pages: '356',
    isbn: '978-3-16-148410-0',
    description: 'This compelling book explores the intersection of technology, philosophy, and human existence. Through vivid storytelling and deeply researched insights, it challenges readers to reconsider their relationship with modern digital life and contemplate the future of humanity in an increasingly automated world.',
    longDescription: `
      <p>In an era defined by rapid technological advancement, this thought-provoking work delves into the profound questions that arise as artificial intelligence, robotics, and digital platforms become increasingly integrated into our daily lives.</p>
      
      <p>The book is divided into three parts:</p>
      
      <p><strong>Part I: The Digital Revolution</strong> - Examines the historical context of our current technological paradigm, tracing the evolution of computing from early theoretical models to today's sophisticated AI systems.</p>
      
      <p><strong>Part II: The Human Response</strong> - Explores how individuals and societies are adapting to technological change, with particular focus on the psychological, social, and ethical dimensions of our increasingly digital existence.</p>
      
      <p><strong>Part III: Possible Futures</strong> - Presents several potential scenarios for humanity's future relationship with technology, ranging from utopian visions of harmony to cautionary tales of dependence and alienation.</p>
      
      <p>Drawing on insights from computer science, philosophy, psychology, and cultural studies, this interdisciplinary work offers a balanced perspective on one of the most significant transitions in human history.</p>
    `,
    reviews: [
      { name: 'The Times', text: 'A brilliant examination of our digital present and future.', rating: 5 },
      { name: 'Science Today', text: 'Thoroughly researched and engagingly written.', rating: 4 },
      { name: 'Literary Review', text: 'Thought-provoking insights on every page.', rating: 5 }
    ],
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
    price: '$24.99',
    categories: ['Non-Fiction', 'Technology', 'Philosophy']
  };
  
  return (
    <div className="bg-portfolio-bg min-h-screen">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="content-container">
          <Link to="/#books" className="inline-flex items-center text-portfolio-text-muted hover:text-portfolio-accent transition-colors mb-8">
            <ArrowLeft size={16} className="mr-2" /> Back to Books
          </Link>
          
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="md:col-span-1">
              <div className="aspect-[2/3] rounded-xl overflow-hidden bg-gradient-to-br from-[#1f1f1f]/80 to-[#0f0f0f]/90 border-l-2 border-t-2 border-r-0 border-b-0 border-white/5 shadow-xl">
                <img 
                  src={bookData.image} 
                  alt={bookData.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{bookData.title}</h1>
              
              <p className="text-xl text-portfolio-text-muted mb-6">By {bookData.author}</p>
              
              <div className="flex items-center mb-6">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star} 
                      size={18} 
                      className={star <= 5 ? "text-yellow-500 fill-yellow-500" : "text-gray-400"} 
                    />
                  ))}
                </div>
                <span className="ml-2 text-portfolio-text-muted">(32 reviews)</span>
              </div>
              
              <p className="text-lg mb-8">{bookData.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <p className="text-portfolio-text-muted">Publisher</p>
                  <p>{bookData.publisher}</p>
                </div>
                <div>
                  <p className="text-portfolio-text-muted">Publication Date</p>
                  <p>{bookData.publishDate}</p>
                </div>
                <div>
                  <p className="text-portfolio-text-muted">Pages</p>
                  <p>{bookData.pages}</p>
                </div>
                <div>
                  <p className="text-portfolio-text-muted">ISBN</p>
                  <p>{bookData.isbn}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {bookData.categories.map((category, index) => (
                  <span 
                    key={index} 
                    className="tag bg-black/30 hover:bg-portfolio-accent/20 transition-all duration-300 transform hover:scale-105"
                  >
                    {category}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://amazon.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-portfolio-accent text-white rounded-full hover:bg-opacity-80 transition-all duration-300 flex items-center"
                >
                  <ShoppingBag size={18} className="mr-2" /> Buy for {bookData.price}
                </a>
                <a 
                  href="#"
                  className="inline-block px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition-all duration-300 flex items-center"
                >
                  <BookOpen size={18} className="mr-2" /> Read Sample
                </a>
                <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-all duration-300">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </div>
          
          <div className={`bg-gradient-to-br from-[#1f1f1f]/80 to-[#0f0f0f]/90 rounded-xl p-8 mb-16 border-l-2 border-t-2 border-r-0 border-b-0 border-white/5 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '200ms'}}>
            <h2 className="text-2xl font-bold mb-6">About the Book</h2>
            <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: bookData.longDescription }} />
          </div>
          
          <div className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '300ms'}}>
            <h2 className="text-2xl font-bold mb-6">Reviews</h2>
            <div className="space-y-6">
              {bookData.reviews.map((review, index) => (
                <div key={index} className="bg-gradient-to-br from-[#1f1f1f]/80 to-[#0f0f0f]/90 rounded-xl p-6 border-l-2 border-t-2 border-r-0 border-b-0 border-white/5">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold">{review.name}</h3>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          size={16} 
                          className={star <= review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-400"} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-portfolio-text-muted">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookDetails;
