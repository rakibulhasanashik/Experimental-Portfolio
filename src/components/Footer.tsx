
import React from "react";
import { ArrowUp, Linkedin, Github, Instagram, Facebook, Youtube, Twitter, BookOpen, Music } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 border-t border-white/10 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-portfolio-accent opacity-5 rounded-full filter blur-3xl"></div>
      
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">UI Designer</h3>
            <p className="text-portfolio-text-muted mb-4">Creating beautiful digital experiences through design and code.</p>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-portfolio-text-muted hover:text-white transition-colors">About</a></li>
              <li><a href="#work" className="text-portfolio-text-muted hover:text-white transition-colors">Projects</a></li>
              <li><a href="#achievements" className="text-portfolio-text-muted hover:text-white transition-colors">Achievements</a></li>
              <li><a href="#timeline" className="text-portfolio-text-muted hover:text-white transition-colors">Timeline</a></li>
              <li><a href="#books" className="text-portfolio-text-muted hover:text-white transition-colors">Books</a></li>
              <li><a href="#music" className="text-portfolio-text-muted hover:text-white transition-colors">Music</a></li>
              <li><a href="#thoughts" className="text-portfolio-text-muted hover:text-white transition-colors">Thoughts</a></li>
              <li><a href="#contact" className="text-portfolio-text-muted hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-portfolio-text-muted mb-2">hello@yourname.com</p>
            <a 
              href="mailto:hello@yourname.com" 
              className="inline-block text-portfolio-accent hover:underline"
            >
              Send me an email
            </a>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="flex flex-wrap gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full hover:bg-portfolio-accent/20 transition-all duration-300">
                <Linkedin size={14} />
                <span className="text-xs">LinkedIn</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full hover:bg-portfolio-accent/20 transition-all duration-300">
                <Github size={14} />
                <span className="text-xs">Github</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full hover:bg-portfolio-accent/20 transition-all duration-300">
                <Instagram size={14} />
                <span className="text-xs">Instagram</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full hover:bg-portfolio-accent/20 transition-all duration-300">
                <Facebook size={14} />
                <span className="text-xs">Facebook</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full hover:bg-portfolio-accent/20 transition-all duration-300">
                <Youtube size={14} />
                <span className="text-xs">YouTube</span>
              </a>
              <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full hover:bg-portfolio-accent/20 transition-all duration-300">
                <Music size={14} />
                <span className="text-xs">Spotify</span>
              </a>
              <a href="https://goodreads.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full hover:bg-portfolio-accent/20 transition-all duration-300">
                <BookOpen size={14} />
                <span className="text-xs">Goodreads</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full hover:bg-portfolio-accent/20 transition-all duration-300">
                <Twitter size={14} />
                <span className="text-xs">Twitter</span>
              </a>
              <a href="https://amazon.com/author" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full hover:bg-portfolio-accent/20 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.074-1.052-.872-1.238-1.276-1.814-2.106-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.095v-.41c0-.753.06-1.642-.384-2.294-.385-.578-1.124-.818-1.776-.818-1.209 0-2.291.62-2.554 1.903-.054.293-.262.582-.548.596l-3.061-.333c-.259-.056-.548-.266-.476-.66.711-3.71 4.073-4.83 7.09-4.83 1.545 0 3.56.41 4.774 1.579 1.545 1.44 1.395 3.37 1.395 5.466v4.962c0 1.487.614 2.141 1.192 2.948.204.287.247.63-.01.839-.647.541-1.794 1.537-2.423 2.099l-.008-.006zm3.559 1.988c-2.748 1.472-5.735 2.181-8.453 2.181-4.027 0-7.927-1.393-11.081-3.706-.277-.202-.481.154-.251.416 2.925 3.326 6.786 5.326 11.076 5.326 3.061 0 6.614-1.214 9.066-3.494.406-.377.058-.945-.357-.723zm.67 2.396c-.511.977-1.193 1.681-1.903 2.28-.834.705-1.7 1.286-2.629 1.741-1.367.667-2.746 1.085-4.12 1.254-1.245.154-2.379.269-3.526.233-1.336-.042-2.609-.269-3.797-.629-1.145-.347-2.201-.826-3.201-1.441-1.043-.647-1.911-1.412-2.705-2.304-.623-.706-1.172-1.465-1.623-2.286-.409-.751-.75-1.549-1.015-2.411-.292-.953-.493-1.906-.506-2.881-.013-.89.074-1.777.295-2.657.258-1.024.683-2.019 1.184-2.843.489-.799.915-1.368 1.463-1.937.675-.698 1.472-1.304 2.384-1.772.88-.453 1.841-.791 2.867-1.035 1.006-.239 2.032-.32 3.061-.32.804 0 1.584.053 2.324.17 1.293.205 2.489.586 3.626 1.128 1.132.536 2.195 1.24 3.143 2.1.963.87 1.759 1.895 2.353 3.041.747 1.436 1.216 3.083 1.269 4.751.055 1.725-.212 3.351-.889 4.719z"/>
                </svg>
                <span className="text-xs">Amazon Author Profile</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div>
            <p className="text-portfolio-text-muted text-sm text-center md:text-left">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>

          <div className="relative bg-black text-white py-8 px-6 md:px-12">
          <div className="pb-6"> {/* Add padding-bottom here */}
          <div className="flex flex-col md:flex-row items-center gap-8 mt-4 md:mt-0">
            <div className="flex space-x-6">
              <Link to="#" className="text-portfolio-text-muted hover:text-white text-sm transition-colors underline-effect">Privacy Policy</Link>
              <Link to="#" className="text-portfolio-text-muted hover:text-white text-sm transition-colors underline-effect">Terms of Service</Link>
            </div>
            
            <button 
              onClick={scrollToTop} 
              className="absolute bottom-4 right-4 p-3 rounded-full border border-white/20 hover:bg-white/10 hover:border-portfolio-accent transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} className="text-portfolio-text-muted group-hover:text-portfolio-accent transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
