import { Menu, X, Terminal } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "libraries", label: "Libraries" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", ...NAV_ITEMS.map((i) => i.id)];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(id);
          });
        },
        { threshold: 0.35, rootMargin: "-60px 0px -60px 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md border-b border-green-900/40 shadow-lg shadow-green-900/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded bg-green-400/10 border border-green-400/30 flex items-center justify-center group-hover:border-green-400 group-hover:bg-green-400/20 transition-all duration-300">
              <Terminal size={14} className="text-green-400" />
            </div>
            <span className="text-white font-mono text-sm group-hover:text-green-400 transition-colors duration-200">
              <span className="text-green-400">&lt;</span>GCG
              <span className="text-green-400">/&gt;</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 rounded-md text-sm font-mono transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-green-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {activeSection === item.id && (
                  <span className="absolute inset-0 rounded-md bg-green-400/10 border border-green-400/30" />
                )}
                <span className="relative">
                  {activeSection === item.id && (
                    <span className="text-green-600 mr-1">./</span>
                  )}
                  {item.label}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-green-400 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-3 space-y-1 bg-black/98 border-t border-green-900/30 rounded-b-lg">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 font-mono text-sm rounded-md transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-green-400 bg-green-900/20 border-l-2 border-green-400 pl-3"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {activeSection === item.id ? `> ${item.label}` : item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
