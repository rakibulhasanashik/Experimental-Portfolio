import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  className?: string;
  animationDelay?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  className,
  animationDelay = "",
}) => {
  return (
    <div className={cn(
      "project-card card-hover animate-fade-in glow-effect backdrop-blur-sm bg-gradient-to-br from-[#1f1f1f]/80 to-[#0f0f0f]/90 border-l-2 border-t-2 border-r-0 border-b-0 border-white/5 rounded-xl overflow-hidden", 
      animationDelay, 
      className
    )}>
      <div className="relative group overflow-hidden rounded-t-xl">
        <div className="aspect-[16/9] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
          <div className="p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <a href="#" className="text-sm font-medium flex items-center text-white hover:text-portfolio-accent transition-colors group">
              View Full Project
              <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
            </a>
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
        <div className="flex justify-between items-center">
          <a href="#" className="inline-flex items-center text-sm font-medium hover:text-portfolio-accent transition-colors group">
            Details
            <ArrowRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#" className="text-portfolio-text-muted hover:text-portfolio-accent transition-colors p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-300">
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-portfolio-accent/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 rounded-xl"></div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState("all");
  
  const projectsData = [
    {
      title: "Gaming Streaming Dashboard",
      description: "With this concept of the website you can see your stats during games when you are streaming and a lot of viewer stats.",
      image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?auto=format&fit=crop&q=80&w=1000",
      tags: ["UI/UX", "Dashboard", "Gaming"],
      category: "case-study"
    },
    {
      title: "Music Player App",
      description: "Ultra modern design | Modern concept which I experimented with different colors, clean design and neat layout.",
      image: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?auto=format&fit=crop&q=80&w=1000",
      tags: ["Mobile", "App Design", "Music"],
      category: "exploration"
    },
    {
      title: "Task Management App",
      description: "Clean and minimalist task management mobile app design with user-friendly interface.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      tags: ["Mobile", "UI Design", "Productivity"],
      category: "case-study"
    },
    {
      title: "Real Estate Landing Page",
      description: "Custom landing page for real estate agency designed to boost conversion rates.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000",
      tags: ["Web Design", "Landing Page", "Real Estate"],
      category: "exploration"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section className="py-24 relative" id="work">
      <div className="content-container">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in relative inline-block">
            <span className="hero-title">FEATURED PROJECTS</span>
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-portfolio-accent"></span>
          </h2>
          
          <div className="flex space-x-4 animate-fade-in">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              animationDelay={`animate-delay-${(index + 1) * 100}`}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <button className="social-button flex items-center space-x-2 animate-fade-in group hover:bg-gradient-to-r hover:from-portfolio-accent/20 hover:to-purple-900/20 hover:border-portfolio-accent/50">
            <span>See More</span>
            <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
