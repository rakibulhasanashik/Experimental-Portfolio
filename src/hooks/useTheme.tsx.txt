
import { createContext, useState, useContext, useEffect } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isChanging: boolean;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
  isChanging: false
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");
  const [isChanging, setIsChanging] = useState(false);
  
  const updateTheme = (newTheme: Theme) => {
    setIsChanging(true);
    
    // Update theme state
    setTheme(newTheme);
    
    // Update document class
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    
    // Save to localStorage
    localStorage.setItem("theme", newTheme);
    
    // Reset the changing state after animation completes
    setTimeout(() => {
      setIsChanging(false);
    }, 600);
  };

  useEffect(() => {
    // Force dark mode by default regardless of system preference or localStorage
    updateTheme("dark");
    
    // Only allow manual theme switching
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    if (savedTheme) {
      updateTheme(savedTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme, isChanging }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
