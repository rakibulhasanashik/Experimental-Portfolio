
import React, { useState, useEffect } from "react";
import { Linkedin, Github, Instagram, Facebook, Youtube, Music, Twitter, BookOpen, Calendar } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("Don't You?");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(fullText.slice(0, index + 1));
        setIndex(index + 1);
        
        if (index === fullText.length - 1) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(fullText.slice(0, index - 1));
        setIndex(index - 1);
        
        if (index <= 1) {
          setIsDeleting(false);
          setTimeout(() => {}, 500);
        }
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed);
    
    return () => clearTimeout(timer);
  }, [index, isDeleting, fullText, typingSpeed]);

  const socialLinks = [
    { href: "https://www.linkedin.com/in/abid-hasan-sarder", icon: <Linkedin size={14} />, label: "LinkedIn" },
    { href: "https://github.com/abidhasansarder", icon: <Github size={14} />, label: "GitHub" },
    { href: "https://www.instagram.com/abid_hasan_sarder", icon: <Instagram size={14} />, label: "Instagram" },
    { href: "https://www.facebook.com/profile.php?id=100000655539896", icon: <Facebook size={14} />, label: "Facebook" },
    { 
      href: "https://g.co/kgs/W2wVuDd", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
        </svg>
      ), 
      label: "Knowledge Panel" 
    },
    { href: "https://youtube.com/@Abid_Hasan_Sarder", icon: <Youtube size={14} />, label: "YouTube" },
    { href: "https://open.spotify.com/artist/3WGWYAdVrm9K1uZkT9SdxA", icon: <Music size={14} />, label: "Spotify" },
    { 
      href: "https://www.goodreads.com/author/show/40122953.Abid_Hasan_Sarder", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 448 512" fill="currentColor">
          <path d="M299.9 191.2c5.1 37.3-4.7 79-35.9 100.7-22.3 15.5-52.8 14.1-70.8 5.7-37.1-17.3-49.5-58.6-46.8-97.2 4.3-60.9 40.9-87.9 75.3-87.5 46.9-.2 71.8 31.8 78.2 78.3zM448 88v336c0 30.9-25.1 56 56 56H56c-30.9 0-56-25.1-56-56V88c0-30.9 25.1-56 56-56h336c30.9 0 56 25.1 56 56zM330 313.2s-.1-34-.1-217.3h-29v40.3c-.8.3-18.2-17.6-48.3-17.6-43.4 0-78.9 28.6-85.6 74.8-15.4-17.1-41.5-17.4-47.9-16.2v170c47.9-22.4 135.7-33.1 171.7 34.4 25.4-10.8 48.7-36.5 53.9-74.7 21.7 14.8 50.7 13.1 75.3 0 0-100.4-.1-121.7-.1-174.7zm-156 365c-34.2 0-50-22.5-50-44.2 0-20.5 12.7-41.8 50-41.8h50v40.2c0 26.1-15.7 45.8-50 45.8z"/>
        </svg>
      ), 
      label: "Goodreads" 
    },
    { href: "https://x.com/abidhasansarder", icon: <Twitter size={14} />, label: "Twitter" },
    { 
      href: "https://amazon.com/author/abid_hasan_sarder", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 448 512" fill="currentColor">
          <path d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z"/>
        </svg>
      ), 
      label: "Amazon Author Profile" 
    }
  ];

  return (
    <section className="min-h-[64vh] flex flex-col justify-center relative py-0" id="home">
      <div className="content-container z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="text-5xl md:text-7xl font-black mb-4 leading-tight">
              <div className="flex justify-center">
                <span className="hero-title">ABID HASAN SARDER</span>
              </div>
              <div className="text-2xl md:text-5xl mt-3 flex justify-center">
                You Know Me, <span className="typing-text ml-2 text-[#E5E4E2] font-bold">{text}</span>
                <span className={`inline-block w-1.5 h-6 bg-portfolio-accent ml-1 align-middle animate-[blink_0.7s_infinite]`}></span>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-button group flex items-center gap-1.5"
                  aria-label={link.label}
                >
                  {link.icon}
                  <span className="text-xs">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
