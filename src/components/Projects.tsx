
import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

const ProjectsList = () => {
  const { theme, isChanging } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [filter, setFilter] = useState("all");
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  const projects = [
    {
      title: "Gaming Streaming Dashboard",
      description: "With this concept of the website you can see your stats during games when you are streaming and a lot of viewer stats.",
      image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?auto=format&fit=crop&q=80&w=1000",
      tags: ["UI/UX", "Dashboard", "Gaming"],
      category: "case-study",
      slug: "gaming-streaming-dashboard"
    },
    {
      title: "Music Player App",
      description: "Ultra modern design | Modern concept which I experimented with different colors, clean design and neat layout.",
      image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&q=80&w=1000",
      tags: ["Mobile", "App Design", "Music"],
      category: "exploration",
      slug: "music-player-app"
    },
    {
      title: "Fitness Tracker Dashboard",
      description: "Interactive dashboard design to track workouts, health stats, and progress towards fitness goals in real time.",
      image: "https://images.unsplash.com/photo-1571019613914-85f342c49f4b?auto=format&fit=crop&q=80&w=1000",
      tags: ["Dashboard", "Health", "Fitness"],
      category: "case-study",
      slug: "fitness-tracker-dashboard"
    },
    {
      title: "AI Chat Assistant UI",
      description: "A minimal and elegant UI concept for a smart AI chat assistant, focusing on clarity, tone adaptation, and dark/light modes.",
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c6?auto=format&fit=crop&q=80&w=1000",
      tags: ["UI/UX", "AI", "Chatbot"],
      category: "exploration",
      slug: "ai-chat-assistant-ui"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className={`${theme === 'dark' ? 'dark' : 'light'} bg-portfolio-bg min-h-screen transition-colors duration-500 ${isChanging ? 'animate-theme-transition' : ''}`}>

  <div className="flex flex-wrap justify-center gap-2">
              <button 
                className={`tag px-4 py-2 transition-all duration-300 ${filter === 'all' ? 'bg-white text-black' : 'hover:bg-white/10'}`}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button 
                className={`tag px-4 py-2 transition-all duration-300 ${filter === 'exploration' ? 'bg-white text-black' : 'hover:bg-white/10'}`}
                onClick={() => setFilter("exploration")}
              >
                Exploration
              </button>
              <button 
                className={`tag px-4 py-2 transition-all duration-300 ${filter === 'case-study' ? 'bg-white text-black' : 'hover:bg-white/10'}`}
                onClick={() => setFilter("case-study")}
              >
                Case Study
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="project-card card-hover animate-fade-in glow-effect backdrop-blur-sm"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative group overflow-hidden rounded-t-xl">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <div className="p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <Link 
                        to={`/project-details/${project.slug}`} 
                        className="text-sm font-medium flex items-center text-white hover:text-portfolio-accent transition-colors group"
                      >
                        View Full Project
                        <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-bold mb-2 hover:text-portfolio-accent transition-colors duration-300">{project.title}</h3>
                  <p className="text-portfolio-text-muted mb-5">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="tag bg-black/30 hover:bg-portfolio-accent/20 transition-all duration-300 transform hover:scale-105"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <Link 
                      to={`/project-details/${project.slug}`}
                      className="inline-flex items-center text-sm font-medium hover:text-portfolio-accent transition-colors group"
                    >
                      Full Insight
                      <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a href="#" className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-300">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        
        <div className="flex justify-center mt-16">
          <Link 
            to="/projects"
            className="social-button flex items-center space-x-2 animate-fade-in group hover-effect hover:bg-gradient-to-r hover:from-portfolio-accent/20 hover:to-purple-900/20 hover:border-portfolio-accent/50"
          >
            <span>Unfold More</span>
            <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
