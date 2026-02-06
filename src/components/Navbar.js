"use client";
import { useState, useEffect } from "react";
import { FaLinkedin, FaEnvelope, FaGithubSquare, FaBars, FaTimes, FaFileAlt } from "react-icons/fa";

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
      const sections = ["home", "skills", "projects", "experience", "education", "beyond code"];
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
    };

    // Call handleScroll immediately to detect initial section
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMounted]);

  if (!hasMounted) return null;

  const getNavbarStyle = () => {
    const base = "bg-cream/95 backdrop-blur-sm border-b border-[#388BC5]/10";
    const text = "text-[#2a2a28]";
    const active = "text-[#388BC5] font-medium";
    return { base, text, active };
  };
  const navStyle = getNavbarStyle();

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
      className={`fixed top-0 left-0 w-full h-14 sm:h-16 p-3 sm:p-4 flex items-center justify-between z-50 transition-all duration-300 ${navStyle.base} ${navStyle.text}`}
      style={{ margin: 0 }}
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
            className={`px-3 md:px-4 py-2 text-sm transition-colors duration-200 rounded ${
              activeSection === section ? navStyle.active : "hover:text-[#388BC5]"
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
          className="p-2 rounded transition-colors duration-200 hover:text-[#388BC5]"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Right icons */}
      <div className="flex space-x-3 md:space-x-4 lg:space-x-5 flex-1 justify-end pr-2 md:pr-4">
        <a href="https://github.com/Lagani21" target="_blank" rel="noopener noreferrer" className="p-2 rounded transition-colors duration-200 hover:text-[#388BC5]" aria-label="GitHub">
          <FaGithubSquare size={20} className="md:w-5 md:h-5" />
        </a>
        <a href="https://www.linkedin.com/in/laganipatel/" target="_blank" rel="noopener noreferrer" className="p-2 rounded transition-colors duration-200 hover:text-[#388BC5]" aria-label="LinkedIn">
          <FaLinkedin size={20} className="md:w-5 md:h-5" />
        </a>
        <a href="mailto:laganipatel@gmail.com" className="p-2 rounded transition-colors duration-200 hover:text-[#388BC5]" aria-label="Email">
          <FaEnvelope size={20} className="md:w-5 md:h-5" />
        </a>
        <a href="https://drive.google.com/file/d/1F75wAafrMNYgek_e34r7SMgc0kCysbdT/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="p-2 rounded transition-colors duration-200 hover:text-[#388BC5]" aria-label="Resume">
          <FaFileAlt size={20} className="md:w-5 md:h-5" />
        </a>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-14 sm:top-16 left-0 w-full bg-cream/98 backdrop-blur-sm border-b border-[#388BC5]/10 sm:hidden">
          <div className="flex flex-col p-4 gap-1">
            {["home", "skills", "projects", "experience", "education", "beyond code"].map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`text-left px-4 py-3 text-sm rounded transition-colors duration-200 ${
                  activeSection === section ? "font-medium text-[#388BC5]" : "text-[#2a2a28] hover:bg-[#388BC5]/10"
                }`}
              >
                {section.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase())}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
