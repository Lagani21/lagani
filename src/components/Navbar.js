"use client";
import { useState, useEffect } from "react";
import { FaLinkedin, FaEnvelope, FaGithubSquare, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [hasMounted, setHasMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent hydration mismatch and detect initial section
  useEffect(() => {
    setHasMounted(true);
    
    // Detect initial section based on scroll position or URL hash
    const detectInitialSection = () => {
      const sections = ["home", "skills", "projects", "experience", "education", "beyond code"];
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is visible in viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    // Small delay to ensure DOM is ready
    setTimeout(detectInitialSection, 100);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    const handleScroll = () => {
      const sections = ["home", "skills", "experience", "education", "beyond code"];
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (
            rect.top <= window.innerHeight * 0.3 &&
            rect.bottom >= window.innerHeight * 0.3
          ) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
      // Debug: log the current section for troubleshooting
      console.log('Current section:', currentSection);
    };

    // Call handleScroll immediately to detect initial section
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMounted]);

  if (!hasMounted) return null;

  // Background color based on active section
  const getNavbarColor = () => {
    switch (activeSection) {
      case "skills":
        return "bg-[#0C2851]";
      case "projects":
        return "bg-[#173162]";
      case "experience":
        return "bg-[#4C638D]";
      case "education":
        return "bg-[#8194B8]";
      case "beyond code":
        return "bg-[#E7EFFF]";
      default:
        return "bg-[#001F3F]";
    }
  };

  // Text color based on active section
  const getNavbarTextColor = () => {
    switch (activeSection) {
      case "education":
      case "beyond code":
        return "text-black";
      default:
        return "text-white";
    }
  };

  const handleNavClick = (section) => {
    const target = document.getElementById(section);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // Increased offset for better mobile experience
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-16 sm:h-20 p-3 sm:p-4 flex items-center justify-between z-50 transition-all duration-500 ${getNavbarColor()} ${getNavbarTextColor()} shadow-lg`}
      style={{ margin: 0, borderBottom: "none" }}
    >
      {/* Left spacer */}
      <div className="flex-1" />

      {/* Center links - Desktop */}
      <div className="hidden sm:flex space-x-4 md:space-x-6 lg:space-x-8">
        {[
          "home",
          "skills",
          "projects",
          "experience",
          "education",
          "beyond code",
        ].map((section) => (
          <button
            key={section}
            onClick={() => handleNavClick(section)}
            className={`px-3 md:px-4 lg:px-5 py-2 text-sm md:text-base lg:text-lg transition-all duration-300 rounded-lg hover:bg-white/10 ${
              activeSection === section ? "font-bold scale-105" : "hover:scale-105"
            }`}
          >
            {section
              .replace(/-/g, " ")
              .replace(/^\w/, (c) => c.toUpperCase())}
          </button>
        ))}
      </div>

      {/* Mobile menu button */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`p-2 rounded-lg hover:bg-white/10 transition-all duration-300 ${getNavbarTextColor()}`}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Right icons */}
      <div className="flex space-x-3 md:space-x-4 lg:space-x-5 flex-1 justify-end pr-2 md:pr-4">
        <a
          href="https://github.com/Lagani21"
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-lg hover:bg-white/10 transition-all duration-300 ${getNavbarTextColor()}`}
          aria-label="GitHub"
        >
          <FaGithubSquare size={20} className="md:w-6 md:h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/laganipatel/"
          target="_blank"
          rel="noopener noreferrer"
          className={`p-2 rounded-lg hover:bg-white/10 transition-all duration-300 ${getNavbarTextColor()}`}
          aria-label="LinkedIn"
        >
          <FaLinkedin size={20} className="md:w-6 md:h-6" />
        </a>
        <a
          href="mailto:laganipatel@gmail.com"
          className={`p-2 rounded-lg hover:bg-white/10 transition-all duration-300 ${getNavbarTextColor()}`}
          aria-label="Email"
        >
          <FaEnvelope size={20} className="md:w-6 md:h-6" />
        </a>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 sm:top-20 left-0 w-full bg-[#001F3F]/95 backdrop-blur-sm shadow-2xl sm:hidden border-t border-white/20">
          <div className="flex flex-col space-y-2 p-4">
            {[
              "home",
              "skills",
              "projects",
              "experience",
              "education",
              "beyond code",
            ].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`text-left px-4 py-3 text-white transition-all duration-300 rounded-lg ${
                  activeSection === section 
                    ? "font-bold text-blue-300" 
                    : "hover:bg-white/10 hover:text-blue-200"
                }`}
              >
                {section
                  .replace(/-/g, " ")
                  .replace(/^\w/, (c) => c.toUpperCase())}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
