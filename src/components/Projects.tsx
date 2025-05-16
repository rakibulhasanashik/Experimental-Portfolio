import React from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  category: string;
  slug: string;
};

interface ProjectCardProps {
  project: Project; 
  animationDelay: string;
}

interface ProjectsProps {
  activeCategory?: string;
  setActiveCategory?: React.Dispatch<React.SetStateAction<string>>;
}

const ProjectCard = ({ project, animationDelay }: ProjectCardProps) => (
  <div 
    className={`project-card card-hover animate-fade-in glow-effect backdrop-blur-sm ${animationDelay}`}
  >
    <div className="relative group overflow-hidden rounded-t-xl">
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={project.imageUrl} 
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
      <p className="text-portfolio-text-muted mb-5 text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span 
          className="tag bg-black/30 hover:bg-portfolio-accent/20 transition-all duration-300 transform hover:scale-105"
        >
          {project.category}
        </span>
        {project.technologies.map((tech, idx) => (
          <span 
            key={idx} 
            className="tag bg-black/30 hover:bg-portfolio-accent/20 transition-all duration-300 transform hover:scale-105"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <Link 
          to={`/project-details/${project.slug}`}
          className="inline-flex items-center text-sm font-medium text-portfolio-accent hover:text-portfolio-accent/80 transition-colors group"
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
);

const Projects: React.FC<ProjectsProps> = ({ 
  activeCategory = "All", 
  setActiveCategory = () => {} 
}) => {
  const categories = ["All", "Web App", "Mobile", "Dashboard", "Social"];
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A fully functional e-commerce platform with user authentication, product catalog, shopping cart, and checkout process.",
      imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      technologies: ["React", "Node.js", "Express"],
      category: "Web App",
      slug: "ecommerce-platform"
    },
    {
      id: 2,
      title: "Mobile Task Manager",
      description: "A mobile application for managing tasks, setting reminders, and tracking progress.",
      imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vYmlsZSUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      technologies: ["React Native", "Firebase"],
      category: "Mobile",
      slug: "mobile-task-manager"
    },
    {
      id: 3,
      title: "Data Visualization Dashboard",
      description: "A web-based dashboard for visualizing data from various sources, with interactive charts and graphs.",
      imageUrl: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRhc2hib2FyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      technologies: ["React", "D3.js", "GraphQL"],
      category: "Dashboard",
      slug: "data-visualization-dashboard"
    },
    {
      id: 4,
      title: "Social Media App",
      description: "A social media application for connecting with friends, sharing updates, and joining communities.",
      imageUrl: "https://images.unsplash.com/photo-1505051589839-6036ac548a68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      technologies: ["React", "Redux", "Firebase"],
      category: "Social",
      slug: "social-media-app"
    }
  ];
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="py-24 relative" id="work">
      <div className="absolute top-0 left-0 w-96 h-96 bg-portfolio-accent opacity-5 rounded-full filter blur-3xl"></div>
      
      <div className="content-container">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in relative inline-block">
          <span className="hero-title">FEATURED PROJECTS</span>
          <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-portfolio-accent"></span>
        </h2>

        {/* Category buttons with same style as Timeline section */}
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
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              project={project} 
              key={project.id} 
              animationDelay={`animate-delay-${(index + 1) * 100}`} 
            />
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
