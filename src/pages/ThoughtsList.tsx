import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "@/hooks/useTheme";

interface Thought {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

const ThoughtCard: React.FC<Thought> = ({
  title,
  excerpt,
  date,
  category,
  slug,
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <p>{date}</p>
      <p>{category}</p>
    </div>
  );
};

const ThoughtsList = () => {
  const { theme, isChanging } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
  }, []);

  const thoughtsData: Thought[] = [
    {
      title: "The Art of Sustainable Design",
      excerpt:
        "Explore how design can contribute to a more sustainable future by minimizing environmental impact and promoting responsible consumption.",
      date: "2024-01-15",
      category: "Sustainability",
      slug: "art-of-sustainable-design",
    },
    {
      title: "The Future of UX Writing",
      excerpt:
        "Discover the evolving role of UX writers in creating user-centered digital experiences that are both informative and engaging.",
      date: "2024-02-20",
      category: "UX Writing",
      slug: "future-of-ux-writing",
    },
    {
      title: "Accessibility in Web Design",
      excerpt:
        "Learn how to create inclusive web experiences that are accessible to users of all abilities, ensuring equal access to information and functionality.",
      date: "2024-03-25",
      category: "Accessibility",
      slug: "accessibility-in-web-design",
    },
    {
      title: "The Power of Visual Storytelling",
      excerpt:
        "Uncover the secrets of visual storytelling and how it can be used to captivate audiences, convey complex ideas, and create memorable brand experiences.",
      date: "2024-04-30",
      category: "Visual Design",
      slug: "power-of-visual-storytelling",
    },
    {
      title: "The Impact of AI on Design",
      excerpt:
        "Examine the transformative impact of artificial intelligence on the design industry, from automating tasks to generating creative ideas.",
      date: "2024-05-05",
      category: "Artificial Intelligence",
      slug: "impact-of-ai-on-design",
    },
    {
      title: "The Ethics of User Research",
      excerpt:
        "Consider the ethical implications of user research and how to conduct studies that respect user privacy, autonomy, and well-being.",
      date: "2024-06-10",
      category: "User Research",
      slug: "ethics-of-user-research",
    },
    {
      title: "The Psychology of Color in Design",
      excerpt:
        "Delve into the psychology of color and how it can be used to evoke emotions, influence behavior, and create visually appealing designs.",
      date: "2024-07-15",
      category: "Color Theory",
      slug: "psychology-of-color-in-design",
    },
    {
      title: "The Importance of Typography",
      excerpt:
        "Understand the crucial role of typography in creating readable, legible, and visually harmonious designs that enhance the user experience.",
      date: "2024-08-20",
      category: "Typography",
      slug: "importance-of-typography",
    },
    {
      title: "The Principles of Interaction Design",
      excerpt:
        "Explore the fundamental principles of interaction design and how they can be applied to create intuitive, efficient, and enjoyable user interfaces.",
      date: "2024-09-25",
      category: "Interaction Design",
      slug: "principles-of-interaction-design",
    },
    {
      title: "The Future of Design Education",
      excerpt:
        "Reflect on the future of design education and how it can adapt to meet the evolving needs of the industry and prepare students for success.",
      date: "2024-10-30",
      category: "Design Education",
      slug: "future-of-design-education",
    },
  ];

  const [thoughts, setThoughts] = useState<Thought[]>(thoughtsData);

  const filteredThoughts =
    filter === "all"
      ? thoughts
      : thoughts.filter((thought) => thought.category.toLowerCase() === filter);

  const categories = ["all", ...new Set(thoughts.map((t) => t.category.toLowerCase()))];

  return (
    <div
      className={`${
        theme === "dark" ? "dark" : "light"
      } bg-portfolio-bg min-h-screen transition-colors duration-500 ${
        isChanging ? "animate-theme-transition" : ""
      }`}
    >
      <Header />

      <div
        className={`pt-32 pb-20 transition-all duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0 transform translate-y-10"
        }`}
      >
        <div className="content-container">
          <div className="mb-12 flex flex-col items-center">
            <h1 className="hero-title text-5xl md:text-6xl font-black text-center mb-6">
              ALL THOUGHTS
            </h1>
            <p className="text-portfolio-text-muted max-w-2xl text-center mb-8">
              Explore my complete collection of thoughts and musings on design,
              technology, and the world around us.
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`tag px-4 py-2 transition-all duration-300 ${
                    filter === category ? "bg-white text-black" : "hover:bg-white/10"
                  }`}
                  onClick={() => setFilter(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {filteredThoughts.map((thought, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#252525]/90 to-[#151515]/95 p-8 rounded-xl animate-fade-in card-hover border-l-2 border-t-2 border-r-0 border-b-0 border-white/5 backdrop-blur-sm relative overflow-hidden group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="mb-4 flex justify-between items-start">
                  <span className="text-xs font-medium text-portfolio-accent bg-portfolio-accent/10 px-3 py-1 rounded-full">
                    {thought.category}
                  </span>
                  <span className="text-xs text-portfolio-text-muted flex items-center">
                    <Calendar size={12} className="mr-1" />
                    {thought.date}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-2 group-hover:text-portfolio-accent transition-colors duration-300 relative">
                  {thought.title}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-portfolio-accent group-hover:w-1/3 transition-all duration-500 ease-out"></span>
                </h3>

                <p className="text-portfolio-text-muted mb-6 text-sm line-clamp-3 group-hover:text-white/70 transition-colors duration-300">
                  {thought.excerpt}
                </p>

                <div className="flex justify-between items-center">
                  <Link
                    to={`/thought-detail/${thought.slug}`}
                    className="text-portfolio-accent font-medium text-sm flex items-center gap-1 hover:underline"
                  >
                    Full Insight <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Link
              to="/"
              className="social-button flex items-center space-x-2 animate-fade-in hover-effect group"
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

export default ThoughtsList;
