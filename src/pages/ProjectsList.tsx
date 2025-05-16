
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
      category: "exploration",
      slug: "gaming-streaming-dashboard"
    },
    {
      title: "Music Player App",
      description: "Ultra modern design | Modern concept which I experimented with different colors, clean design and neat layout.",
      image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&q=80&w=1000",
      tags: ["Mobile", "App Design", "Music"],
      category: "case-study",
      slug: "music-player-app"
    },
    // ...plus 18 more projects to reach 20 total
  ];

  // Generate 18 more projects to reach a total of 20
  for (let i = 0; i < 18; i++) {
    projects.push({
      title: `Project Title ${i + 3}`,
      description: `Project description for project number ${i + 3}. This showcases the main features and benefits.`,
      image: `https://picsum.photos/id/${i + 20}/1000/700`,
      tags: [
        ["UI/UX", "Web Design", "Animation"][i % 3],
        ["Dashboard", "App Design", "Branding"][i % 3],
        ["Gaming", "E-commerce", "Education"][i % 3]
      ],
      category: ["exploration", "case-study"][i % 2],
      slug: `project-${i + 3}`
    });
  }

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className={`${theme === 'dark' ? 'dark' : 'light'} bg-portfolio-bg min-h-screen transition-colors duration-500 ${isChanging ? 'animate-theme-transition' : ''}`}>
      <Header />
      
      <div className={`pt-32 pb-20 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0 transform translate-y-10"}`}>
        <div className="content-container">
          <div className="mb-12 flex flex-col items-center">
            <h1 className="hero-title text-5xl md:text-6xl font-black text-center mb-6">
              ALL PROJECTS
            </h1>
            <p className="text-portfolio-text-muted max-w-2xl text-center mb-8">
              Explore my complete collection of design and development projects.
            </p>
            
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

export default ProjectsList;
