
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Star, Award } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const AchievementDetail = () => {
  const { theme, isChanging } = useTheme();
  const { slug } = useParams<{ slug: string }>();
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  return (
    <div className={`${theme === 'dark' ? 'dark' : 'light'} bg-portfolio-bg min-h-screen transition-colors duration-500 ${isChanging ? 'animate-theme-transition' : ''}`}>
      <Header />
      
      <div className={`pt-32 pb-20 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0 transform translate-y-10"}`}>
        <div className="content-container">
          <Link 
            to="/achievements" 
            className="inline-flex items-center mb-8 text-portfolio-text-muted hover:text-portfolio-accent transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            <span>Back to Achievements</span>
          </Link>
          
          <div className="bg-gradient-to-br from-[#1f1f1f]/80 to-[#0f0f0f]/90 rounded-xl p-8 md:p-12 backdrop-blur-sm border-l-2 border-t-2 border-r-0 border-b-0 border-white/5">
            <div className="flex items-center justify-between mb-8">
              <span className="text-sm px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full flex items-center gap-1.5 border border-white/10">
                <Award size={14} className="text-portfolio-accent" />
                <span>Design Challenge</span>
              </span>
              
              <div className="flex items-center gap-1">
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
                <Star size={16} className="text-yellow-500 fill-yellow-500" />
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              FASHION DESIGN CHALLENGE
            </h1>
            
            <h2 className="text-xl text-portfolio-text-muted mb-8">
              Made design with fashion items elegantly crafted by Organizer Studio
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <img
                src="https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Fashion Design Challenge"
                className="rounded-lg w-full h-60 md:h-80 object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold mb-4">Overview</h3>
                <p className="text-portfolio-text-muted mb-4">
                  The Fashion Design Challenge was a prestigious competition organized by the Design Federation in collaboration with Organizer Studio, bringing together the top UI/UX designers from around the world to create innovative interfaces for fashion e-commerce platforms.
                </p>
                <p className="text-portfolio-text-muted mb-4">
                  Among hundreds of submissions, my design concept stood out for its elegant aesthetics, intuitive navigation, and innovative approach to presenting fashion products in a digital environment.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="tag">UI/UX</span>
                  <span className="tag">Fashion</span>
                  <span className="tag">E-commerce</span>
                  <span className="tag">Award-winning</span>
                </div>
              </div>
            </div>
            
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-bold mt-10 mb-4">The Challenge</h3>
              <p>
                The challenge was to redesign the shopping experience for a high-end fashion brand that would elevate the digital presentation of luxury products while maintaining accessibility and ease of use. Key requirements included:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                <li>Creating a visually stunning interface that showcases the products effectively</li>
                <li>Designing an intuitive navigation system for browsing large collections</li>
                <li>Implementing innovative product visualization features</li>
                <li>Streamlining the checkout process for higher conversion rates</li>
                <li>Ensuring the design is responsive across all devices</li>
              </ul>
              
              <h3 className="text-2xl font-bold mt-10 mb-4">My Approach</h3>
              <p>
                I approached this challenge with a focus on creating an immersive and emotionally engaging experience. My solution introduced several innovative features:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                <li>Interactive 3D product views with customizable lighting conditions</li>
                <li>Context-aware product recommendations based on user behavior</li>
                <li>Virtual try-on capabilities using augmented reality</li>
                <li>Gesture-based navigation for touchscreen devices</li>
                <li>Subtle animations that enhance the luxury feel without compromising performance</li>
              </ul>
              
              <h3 className="text-2xl font-bold mt-10 mb-4">The Outcome</h3>
              <p>
                My design was selected as the winner by a panel of judges comprising industry leaders from fashion, technology, and design sectors. The submission was praised for its:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 mb-6">
                <li>Elegant visual aesthetics that elevate the brand perception</li>
                <li>Innovative interaction patterns that feel intuitive yet novel</li>
                <li>Careful attention to accessibility without compromising on style</li>
                <li>Technical feasibility alongside creative ambition</li>
              </ul>
              <p>
                Following the competition, I was approached by several fashion brands interested in implementing aspects of my design into their digital platforms. The concepts developed for this challenge have influenced my subsequent work and continue to shape my approach to luxury e-commerce design.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AchievementDetail;
