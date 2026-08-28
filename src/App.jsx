import { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillSection from "./components/SkillSection";
import ProjectsSection from "./components/ProjectsSection";
import Contact from "./components/Contact";
import { ArrowUp } from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FBFBFD] text-[#1D1D1F] relative selection:bg-purple-500/20 selection:text-purple-900 overflow-x-hidden">
      {/* Floating Apple-style Navigation */}
      <Navigation
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Hero Section */}
      <Hero scrollToSection={scrollToSection} />

      {/* About Section */}
      <About />

      {/* Skills Section (Apple Bento Grid) */}
      <SkillSection />

      {/* Projects Section (Keynote Product Showcase) */}
      <ProjectsSection />

      {/* Contact Section */}
      <Contact />

      {/* Apple-style Minimalist Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-200/80 bg-white/70 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-800">Ilerioluwa Odusanya</span>
            <span>•</span>
            <span>Software Engineer & AI Researcher</span>
          </div>

          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-medium transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp size={12} />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;
