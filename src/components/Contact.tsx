
import React, { useState } from "react";
import { Mail } from "lucide-react";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Form submission data:", {
        ...formState,
        timestamp: new Date().toISOString()
      });
      
      // Reset form
      setFormState({
        name: "",
        email: "",
        message: ""
      });
      
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const sendEmail = () => {
    window.location.href = "mailto:contact@example.com?subject=Inquiry from Website";
  };
  
  return (
    <section className="py-24 relative" id="contact">      
      <div className="content-container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in relative inline-block">
          <span className="hero-title">GET IN TOUCH</span>
          <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-portfolio-accent"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info Card */}
          <div className="bg-gradient-to-br from-[#252525]/90 to-[#151515]/95 rounded-xl p-8 border-l-2 border-t-2 border-r-0 border-b-0 border-white/5 backdrop-blur-sm hover:shadow-[0_15px_30px_rgba(139,92,246,0.2)] transition-all duration-500">
            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
            
            <div className="flex items-start space-x-4 mb-8">
              <div className="p-3 rounded-full bg-portfolio-accent/20 text-portfolio-accent">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-lg font-medium">Email</p>
                <p className="text-portfolio-text-muted">contact@example.com</p>
              </div>
            </div>
            
            <button 
              onClick={sendEmail} 
              className="shine-button w-full bg-[#6a0dad] px-6 py-3 rounded-2xl hover:bg-opacity-90 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] font-medium text-base flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </button>
          </div>
          
          {/* Contact Form Card */}
          <div className="bg-gradient-to-br from-[#252525]/90 to-[#151515]/95 rounded-xl p-8 border-l-2 border-t-2 border-r-0 border-b-0 border-white/5 backdrop-blur-sm hover:shadow-[0_15px_30px_rgba(139,92,246,0.2)] transition-all duration-500">
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="contact-input"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="contact-input"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  className="contact-input"
                  value={formState.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className={`shine-button w-full bg-[#6a0dad] px-6 py-3 rounded-2xl hover:bg-opacity-90 transition-all duration-300 hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] font-medium text-base ${isSubmitting ? 'opacity-70' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : isSubmitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
