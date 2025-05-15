
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, User, Calendar, Tag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ProjectDetails: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="bg-portfolio-bg min-h-screen">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="content-container">
          <Link to="/#work" className="inline-flex items-center text-portfolio-text-muted hover:text-portfolio-accent transition-colors mb-8">
            <ArrowLeft size={16} className="mr-2" /> Back to Projects
          </Link>
          
          <div className={`mb-16 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Gaming Streaming Dashboard</h1>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center text-portfolio-text-muted">
                <User size={16} className="mr-2" />
                <span>UI/UX Design</span>
              </div>
              <div className="flex items-center text-portfolio-text-muted">
                <Calendar size={16} className="mr-2" />
                <span>June 2023</span>
              </div>
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center text-portfolio-accent">
                <ExternalLink size={16} className="mr-2" />
                <span>Live Preview</span>
              </a>
            </div>
            
            <div className="rounded-xl overflow-hidden mb-12 bg-gradient-to-br from-[#1f1f1f]/80 to-[#0f0f0f]/90 border-l-2 border-t-2 border-r-0 border-b-0 border-white/5 p-2">
              <img 
                src="https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?auto=format&fit=crop&q=80&w=2000" 
                alt="Gaming Dashboard Preview" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 mb-12">
              <span className="tag">UI/UX</span>
              <span className="tag">Dashboard</span>
              <span className="tag">Gaming</span>
              <span className="tag">Streaming</span>
              <span className="tag">Analytics</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-[#1f1f1f]/80 to-[#0f0f0f]/90 p-8 rounded-xl border-l-2 border-t-2 border-r-0 border-b-0 border-white/5">
                <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
                <p className="text-portfolio-text-muted">Create a comprehensive streaming dashboard that provides gamers with real-time analytics, viewer engagement metrics, and stream performance data in an intuitive interface.</p>
              </div>
              <div className="bg-gradient-to-br from-[#1f1f1f]/80 to-[#0f0f0f]/90 p-8 rounded-xl border-l-2 border-t-2 border-r-0 border-b-0 border-white/5">
                <h3 className="text-xl font-semibold mb-4">My Role</h3>
                <p className="text-portfolio-text-muted">Lead UI/UX Designer responsible for user research, wireframing, prototyping, and final design implementation. Collaborated with developers for the frontend implementation.</p>
              </div>
              <div className="bg-gradient-to-br from-[#1f1f1f]/80 to-[#0f0f0f]/90 p-8 rounded-xl border-l-2 border-t-2 border-r-0 border-b-0 border-white/5">
                <h3 className="text-xl font-semibold mb-4">Technologies</h3>
                <p className="text-portfolio-text-muted">Figma, Adobe XD, React.js, Tailwind CSS, Chart.js, WebSocket API for real-time data visualization and user interaction.</p>
              </div>
            </div>
            
            <div className={`mb-16 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '200ms'}}>
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <div className="prose prose-invert max-w-none">
                <p>This gaming streaming dashboard was designed to provide streamers with comprehensive insights into their channel performance, viewer engagement, and revenue metrics in a visually appealing and intuitive interface.</p>
                
                <p>The dashboard includes multiple data visualization components that present complex information in an easily digestible format, allowing streamers to make informed decisions about their content and engagement strategies.</p>
                
                <h3>Key Features</h3>
                <ul>
                  <li>Real-time viewer count and engagement metrics</li>
                  <li>Customizable widget layout with drag-and-drop functionality</li>
                  <li>Advanced analytics with historical data comparison</li>
                  <li>Chat moderation tools with AI-powered toxicity detection</li>
                  <li>Monetization insights and donation tracking</li>
                  <li>Stream health and technical performance monitoring</li>
                </ul>
                
                <h3>Design Process</h3>
                <p>The design process began with extensive user research involving interviews with professional streamers to understand their pain points and needs. This informed the creation of user personas and journey maps that guided the wireframing phase.</p>
                
                <p>Low-fidelity wireframes were developed and tested with users before moving to high-fidelity prototypes. The visual design language was crafted to appeal to gamers while ensuring accessibility and usability.</p>
              </div>
            </div>
            
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '300ms'}}>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000" 
                  alt="Dashboard Wireframes" 
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000" 
                  alt="Dashboard Prototype" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className={`mb-16 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '400ms'}}>
              <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
              <div className="prose prose-invert max-w-none">
                <p>The dashboard was successfully implemented and has received overwhelmingly positive feedback from the streaming community. Key outcomes include:</p>
                
                <ul>
                  <li>30% increase in average stream engagement metrics for users</li>
                  <li>25% reduction in time spent on analytics and channel management</li>
                  <li>Featured on multiple gaming and tech publications</li>
                  <li>98% user satisfaction rating in post-launch surveys</li>
                </ul>
                
                <p>The project was awarded "Best Streaming Tool" at the annual Gaming Innovation Awards and has been adopted by several major streaming platforms as their recommended analytics solution.</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-16">
              <Link to="/#work" className="inline-flex items-center text-portfolio-text-muted hover:text-portfolio-accent transition-colors">
                <ArrowLeft size={16} className="mr-2" /> Back to Projects
              </Link>
              <Link to="#" className="social-button flex items-center space-x-2 group hover:bg-gradient-to-r hover:from-portfolio-accent/20 hover:to-purple-900/20 hover:border-portfolio-accent/50">
                <span>Next Project</span>
                <ArrowLeft size={16} className="transform rotate-180 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetails;
