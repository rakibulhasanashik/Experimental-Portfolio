
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const TimelineSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"footprints" | "academia">("footprints");

  const academiaData = [
    {
      degree: "Computer Science and Engineering",
      institution: "North-South University",
      year: "2020-2024",
    },
    {
      degree: "Machine Learning Specialization",
      institution: "Stanford University (Online)",
      year: "2022-2023",
    },
    {
      degree: "UI/UX Design Certification",
      institution: "Google Design Academy",
      year: "2021-2022",
    },
    {
      degree: "Data Science with Python",
      institution: "MIT OpenCourseWare",
      year: "2021",
    },
    {
      degree: "High School Diploma",
      institution: "International School of Technology",
      year: "2016-2020",
    },
    {
      degree: "Web Development Bootcamp",
      institution: "Tech Innovators",
      year: "2019",
    },
    {
      degree: "Computer Graphics and Animation",
      institution: "Digital Arts Academy",
      year: "2018-2019",
    },
  ];

  const footprintsData = [
    {
      position: "Researcher and Activist",
      company: "Suicide Prevention Youth Society",
      year: "2022-Present",
    },
    {
      position: "UI/UX Designer",
      company: "Creative Technology Solutions",
      year: "2021-Present",
    },
    {
      position: "Frontend Developer",
      company: "InnoTech Startups",
      year: "2020-2021",
    },
    {
      position: "Design Lead",
      company: "Student Innovation Lab",
      year: "2019-2020",
    },
    {
      position: "Research Assistant",
      company: "University Research Center",
      year: "2019-2020",
    },
    {
      position: "Design Intern",
      company: "Creative Studios Inc.",
      year: "2019",
    },
    {
      position: "Volunteer Coordinator",
      company: "Community Outreach Program",
      year: "2018-2019",
    },
    {
      position: "Junior Web Developer",
      company: "Tech Solutions Ltd.",
      year: "2018",
    },
    {
      position: "Conference Speaker",
      company: "Young Innovators Summit",
      year: "2018",
    },
    {
      position: "Graphic Design Freelancer",
      company: "Self-Employed",
      year: "2017-2018",
    },
    {
      position: "Student Ambassador",
      company: "Global Youth Leadership Program",
      year: "2017-2019",
    },
    {
      position: "Technology Writer",
      company: "Tech Magazine",
      year: "2017-2018",
    },
    {
      position: "Hackathon Participant",
      company: "National Code Challenge",
      year: "2017",
    },
    {
      position: "Photography Club President",
      company: "School Arts Association",
      year: "2016-2017",
    },
    {
      position: "Junior Researcher",
      company: "Young Scientists Program",
      year: "2016",
    },
  ];

  const TimelineItem = ({ 
    title, 
    subtitle, 
    year, 
    isLeft = false 
  }: { 
    title: string; 
    subtitle: string; 
    year: string;
    isLeft: boolean;
  }) => {
    return (
      <div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} w-full mb-8`}>
        <div className="w-5/12"></div>
        
        <div className="w-2/12 flex justify-center">
          <div className="relative flex flex-col items-center">
            <div className="h-full w-0.5 bg-gradient-to-b from-portfolio-accent via-portfolio-accent/50 to-portfolio-accent/20"></div>
            <div className="absolute w-5 h-5 rounded-full bg-portfolio-accent z-10 shadow-[0_0_10px_rgba(139,92,246,0.5)] animate-pulse-soft"></div>
          </div>
        </div>
        
        <div 
          className={cn(
            "w-5/12 bg-gradient-to-br from-[#1f1f1f]/80 to-[#0f0f0f]/90 p-6 rounded-xl border-l-2 border-t-2 border-r-0 border-b-0 border-white/5 backdrop-blur-sm animate-fade-in hover:shadow-[0_10px_30px_rgba(139,92,246,0.2)] transition-all duration-500 transform hover:scale-105",
            isLeft ? 'animate-fade-in-right' : 'animate-fade-in-left'
          )}
        >
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <h4 className="text-portfolio-text-muted mb-2">{subtitle}</h4>
          <div className="inline-block bg-portfolio-accent/20 px-3 py-1 rounded-full text-sm">
            {year}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 relative overflow-hidden" id="timeline">
      <div className="content-container">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 animate-fade-in relative inline-block">
          <span className="hero-title">TIMELINE</span>
          <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-portfolio-accent"></span>
        </h2>
        
        <div className="flex space-x-4 mb-12 animate-fade-in">
          <button 
            className={`tag px-4 py-2 transition-all duration-300 ${activeTab === 'footprints' ? 'bg-white text-black' : 'hover:bg-white/10'}`}
            onClick={() => setActiveTab("footprints")}
          >
            Footprints
          </button>
          <button 
            className={`tag px-4 py-2 transition-all duration-300 ${activeTab === 'academia' ? 'bg-white text-black' : 'hover:bg-white/10'}`}
            onClick={() => setActiveTab("academia")}
          >
            Academia
          </button>
        </div>
        
        <div className="relative">
          {activeTab === "academia" && (
            <div className="animate-fade-in">
              {academiaData.map((item, index) => (
                <TimelineItem 
                  key={index}
                  title={item.degree}
                  subtitle={item.institution}
                  year={item.year}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          )}
          
          {activeTab === "footprints" && (
            <div className="animate-fade-in">
              {footprintsData.map((item, index) => (
                <TimelineItem 
                  key={index}
                  title={item.position}
                  subtitle={item.company}
                  year={item.year}
                  isLeft={index % 2 === 0}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
