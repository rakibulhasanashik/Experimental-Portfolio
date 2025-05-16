
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BookDetails from "./pages/BookDetails";
import ProjectDetails from "./pages/ProjectDetails";
import { ThemeProvider } from "@/hooks/useTheme";
import FloatingNav from "@/components/FloatingNav";
import ThoughtsList from "./pages/ThoughtsList";
import ThoughtDetail from "./pages/ThoughtDetail";
import ProjectsList from "./pages/ProjectsList";
import BooksList from "./pages/BooksList";
import AchievementsList from "./pages/AchievementsList";
import AchievementDetail from "./pages/AchievementDetail";
import MusicList from "./pages/MusicList";
import MusicDetail from "./pages/MusicDetail";

const queryClient = new QueryClient();

// ScrollToTop component to ensure all pages scroll to top on navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <FloatingNav />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/books" element={<BooksList />} />
            <Route path="/book-details/:slug" element={<BookDetails />} />
            <Route path="/projects" element={<ProjectsList />} />
            <Route path="/project-details/:slug" element={<ProjectDetails />} />
            <Route path="/thoughts" element={<ThoughtsList />} />
            <Route path="/thought-detail/:slug" element={<ThoughtDetail />} />
            <Route path="/achievements" element={<AchievementsList />} />
            <Route path="/achievement-detail/:slug" element={<AchievementDetail />} />
            <Route path="/music" element={<MusicList />} />
            <Route path="/music-detail/:slug" element={<MusicDetail />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
