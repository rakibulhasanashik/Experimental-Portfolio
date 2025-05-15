
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const ThoughtDetail = () => {
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
            to="/thoughts" 
            className="inline-flex items-center mb-8 text-portfolio-text-muted hover:text-portfolio-accent transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" />
            <span>Back to Thoughts</span>
          </Link>
          
          <div className="bg-gradient-to-br from-[#1f1f1f]/80 to-[#0f0f0f]/90 rounded-xl p-8 md:p-12 backdrop-blur-sm border-l-2 border-t-2 border-r-0 border-b-0 border-white/5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-portfolio-accent bg-portfolio-accent/10 px-3 py-1 rounded-full">Design Theory</span>
              <span className="text-sm text-portfolio-text-muted">May 12, 2025</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The Intersection of Design and Psychology
            </h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-portfolio-text-muted mb-6">
                As designers, we're not just creating visually appealing interfaces; we're crafting experiences that engage with the human mind. Understanding the psychological principles that drive user behavior is essential for creating effective designs.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4">How Psychology Shapes User Experience</h2>
              <p>
                The field of psychology offers valuable insights into how people perceive, process, and respond to visual information. By leveraging principles such as Gestalt psychology, cognitive load theory, and emotional design, we can create interfaces that resonate with users on a deeper level.
              </p>
              
              <h3 className="text-xl font-bold mt-8 mb-3">Gestalt Principles in Design</h3>
              <p>
                The Gestalt principles explain how humans naturally perceive objects as organized patterns rather than discrete elements. Principles like proximity, similarity, continuity, and closure guide us in creating layouts that users intuitively understand.
              </p>
              <p>
                For example, when elements are grouped closely together, users perceive them as related. This principle of proximity helps us organize content in a way that communicates relationships without explicitly stating them.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-3">Cognitive Load and User Interface</h3>
              <p>
                Cognitive load theory suggests that our working memory has limited capacity. When designing interfaces, minimizing cognitive load ensures that users can focus on their tasks without feeling overwhelmed.
              </p>
              <p>
                This is why progressive disclosure — revealing information as needed — is such an effective technique. By showing only what's necessary at each step, we reduce cognitive load and improve the user's ability to process information.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4">Emotional Design: Beyond Usability</h2>
              <p>
                Don Norman's concept of emotional design reminds us that great products don't just work well; they forge emotional connections. These connections exist on three levels:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Visceral:</strong> The immediate emotional impact of visual design</li>
                <li><strong>Behavioral:</strong> The satisfaction derived from effective functionality</li>
                <li><strong>Reflective:</strong> The long-term relationship and meaning users associate with the product</li>
              </ul>
              
              <p className="mt-6">
                By designing for all three levels, we create experiences that are not only usable but also enjoyable and meaningful.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4">Applying Psychological Insights</h2>
              <p>
                Understanding these psychological principles enables designers to make more informed decisions. Rather than relying solely on aesthetic preferences, we can ground our choices in how humans actually perceive and interact with digital interfaces.
              </p>
              <p>
                The most successful designs seamlessly blend psychology with aesthetics, creating interfaces that feel natural and intuitive to users.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4">Conclusion</h2>
              <p>
                The intersection of design and psychology represents a rich territory for exploration. As designers continue to deepen their understanding of human psychology, they'll be better equipped to create experiences that truly resonate with users.
              </p>
              <p>
                After all, great design isn't just about how something looks—it's about how it makes people feel and think. By embracing psychological insights, we can create interfaces that speak directly to the human mind.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ThoughtDetail;
