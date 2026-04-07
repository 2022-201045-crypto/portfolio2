import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useRef, useState, useEffect } from "react";

const PROJECTS = [
  {
    title: "Automatic Price Computer",
    subtitle: "Shopping Cart Image Recognition",
    description:
      "Intelligent shopping cart system using image recognition to automatically identify products and calculate total prices in real-time — no manual scanning needed.",
    image: "https://images.unsplash.com/photo-1773324089455-a5b32a2e2875?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    technologies: ["Python", "OpenCV", "Machine Learning", "Image Recognition"],
    github: "https://github.com/giancarlogonzalvo",
    accent: "border-yellow-500/30 hover:border-yellow-400/60",
    tagColor: "bg-yellow-900/20 text-yellow-400 border-yellow-500/20",
    emoji: "🛒",
  },
  {
    title: "Automatic Pet Feeder",
    subtitle: "IoT + Web Interface",
    description:
      "IoT-enabled automatic pet feeder with web interface for remote monitoring and scheduling. Features portion control, feeding history, and real-time notifications.",
    image: "https://images.unsplash.com/photo-1765110278433-7b0d294a1104?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    technologies: ["Arduino", "HTML/CSS", "JavaScript", "IoT"],
    github: "https://github.com/giancarlogonzalvo",
    demo: "#",
    accent: "border-green-500/30 hover:border-green-400/60",
    tagColor: "bg-green-900/20 text-green-400 border-green-500/20",
    emoji: "🐾",
  },
  {
    title: "POS System",
    subtitle: "Point of Sale",
    description:
      "Comprehensive POS system for retail businesses with inventory management, sales tracking, receipt generation, and detailed analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    technologies: ["C#", "SQL", "HTML/CSS", "Database Management"],
    github: "https://github.com/giancarlogonzalvo",
    accent: "border-blue-500/30 hover:border-blue-400/60",
    tagColor: "bg-blue-900/20 text-blue-400 border-blue-500/20",
    emoji: "💼",
  },
  {
    title: "Attendance System",
    subtitle: "Biometric + Web Reporting",
    description:
      "Automated attendance tracking system with biometric integration and web-based reporting for educational institutions and workplaces.",
    image: "https://images.unsplash.com/photo-1698281958513-2e09090da395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    technologies: ["Python", "SQL", "Raspberry Pi", "Web Development"],
    github: "https://github.com/giancarlogonzalvo",
    demo: "#",
    accent: "border-purple-500/30 hover:border-purple-400/60",
    tagColor: "bg-purple-900/20 text-purple-400 border-purple-500/20",
    emoji: "📋",
  },
  {
    title: "Arduino Mini Projects",
    subtitle: "Embedded Systems Collection",
    description:
      "Collection of Arduino-based projects: LED matrix displays, temperature monitoring, motion sensors, and home automation prototypes.",
    image: "https://images.unsplash.com/photo-1723730741656-6333f4840ecf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600",
    technologies: ["Arduino", "C/C++", "Electronics", "Embedded Systems"],
    github: "https://github.com/giancarlogonzalvo",
    accent: "border-orange-500/30 hover:border-orange-400/60",
    tagColor: "bg-orange-900/20 text-orange-400 border-orange-500/20",
    emoji: "⚡",
  },
];

export function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateButtons = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateButtons, { passive: true });
    updateButtons();
    return () => el.removeEventListener("scroll", updateButtons);
  }, []);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 360 : -360, behavior: "smooth" });
  };

  return (
    <section id="projects" className="py-20 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4"
        >
          <div>
            <p className="text-green-400 font-mono text-sm mb-2">// featured_projects[]</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Featured Projects</h2>
            <div className="w-16 h-0.5 bg-green-400" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-600 font-mono mr-2">scroll to explore →</span>
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#222] text-gray-400 hover:border-green-400/60 hover:text-green-400 disabled:opacity-20 transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-[#222] text-gray-400 hover:border-green-400/60 hover:text-green-400 disabled:opacity-20 transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* Horizontal scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-area pb-3 snap-x snap-mandatory"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`flex-none w-[300px] sm:w-[340px] snap-start bg-[#141414] border rounded-xl overflow-hidden transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 ${project.accent}`}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-2xl">{project.emoji}</span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <p className="text-[10px] font-mono text-gray-400">{project.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-white group-hover:text-green-400 transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.map((tech, ti) => (
                    <span
                      key={ti}
                      className={`px-2 py-0.5 text-[10px] font-mono rounded-full border ${project.tagColor}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 border-t border-[#1f1f1f] pt-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-green-400 transition-colors duration-200 font-mono"
                  >
                    <Github size={13} />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-green-400 transition-colors duration-200 font-mono"
                    >
                      <ExternalLink size={13} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scrollbar indicator */}
        <div className="mt-4 h-0.5 bg-[#1a1a1a] rounded-full overflow-hidden max-w-xs">
          <div className="h-full bg-green-400/40 rounded-full" style={{ width: "60%" }} />
        </div>
      </div>
    </section>
  );
}