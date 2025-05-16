
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import TimelineSection from "@/components/Timeline";
import Books from "@/components/Books";
import ThoughtArchive from "@/components/ThoughtArchive";
import Music from "@/components/Music";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useTheme } from "@/hooks/useTheme";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const { theme, isChanging } = useTheme();
  const isMobile = useIsMobile();
  
  // Separate category states for each section
  const [projectCategory, setProjectCategory] = useState("All");
  const [bookCategory, setBookCategory] = useState("All");
  const [musicCategory, setMusicCategory] = useState("All");
  const [thoughtCategory, setThoughtCategory] = useState("All");
  const [timelineTab, setTimelineTab] = useState("footprints");
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Add scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    // Get all the elements to animate
    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${theme === 'dark' ? 'dark' : 'light'} bg-portfolio-bg min-h-screen transition-colors duration-500 ${isChanging ? 'animate-theme-transition' : ''}`}>
      <Header />

      <main className={isMobile ? "pt-16" : "pt-20"}>
        <Hero />
        <Projects activeCategory={projectCategory} setActiveCategory={setProjectCategory} />
        <Achievements />
        <TimelineSection activeTab={timelineTab} setActiveTab={setTimelineTab} />
        <Books activeCategory={bookCategory} setActiveCategory={setBookCategory} />
        <Music activeCategory={musicCategory} setActiveCategory={setMusicCategory} />
        <ThoughtArchive activeCategory={thoughtCategory} setActiveCategory={setThoughtCategory} />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
