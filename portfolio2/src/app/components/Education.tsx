import { GraduationCap, Award, Calendar, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";

const CERTIFICATIONS = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    emoji: "☁️",
    color: "border-orange-500/30 hover:border-orange-400/60",
    tagColor: "bg-orange-900/20 text-orange-400",
  },
  {
    title: "Embedded Systems Specialization",
    issuer: "Coursera",
    date: "2023",
    emoji: "⚙️",
    color: "border-blue-500/30 hover:border-blue-400/60",
    tagColor: "bg-blue-900/20 text-blue-400",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "2023",
    emoji: "🌐",
    color: "border-purple-500/30 hover:border-purple-400/60",
    tagColor: "bg-purple-900/20 text-purple-400",
  },
  {
    title: "Python for Data Science",
    issuer: "Coursera",
    date: "2024",
    emoji: "🐍",
    color: "border-green-500/30 hover:border-green-400/60",
    tagColor: "bg-green-900/20 text-green-400",
  },
  {
    title: "IoT Fundamentals",
    issuer: "Cisco Networking Academy",
    date: "2023",
    emoji: "📡",
    color: "border-cyan-500/30 hover:border-cyan-400/60",
    tagColor: "bg-cyan-900/20 text-cyan-400",
  },
];

export function Education() {
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
    scrollRef.current.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" });
  };

  return (
    <section id="education" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-green-400 font-mono text-sm mb-2">// education_and_certs.json</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Education & Certifications</h2>
          <div className="w-16 h-0.5 bg-green-400 mx-auto" />
        </motion.div>

        {/* Main Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#141414] border border-green-500/20 hover:border-green-400/40 rounded-xl p-6 sm:p-8 mb-10 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/10"
        >
          <div className="flex flex-col sm:flex-row items-start gap-5">
            {/* Icon */}
            <div className="p-4 bg-green-400/10 border border-green-400/20 rounded-xl flex-shrink-0">
              <GraduationCap className="w-8 h-8 text-green-400" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Bachelor of Science in Computer Engineering
                  </h3>
                  <p className="text-green-400 font-medium">Rizal Technological University</p>
                </div>
                <span className="px-3 py-1 text-xs font-mono bg-green-900/20 text-green-400 border border-green-500/30 rounded-full">
                  2022 – Present
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-green-400" />
                  4-Year Program
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-green-400" />
                  Pasig City, Philippines
                </span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Comprehensive program covering software development, digital design, embedded
                systems, computer architecture, and data communications. Capstone focused on
                AI-integrated IoT systems.
              </p>

            </div>
          </div>
        </motion.div>

        {/* Certifications – Horizontal Scroll */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Award size={16} className="text-green-400" />
              <p className="text-green-400 font-mono text-sm">// certifications[]</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-600 font-mono mr-1">scroll →</span>
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="w-7 h-7 flex items-center justify-center rounded-lg border border-[#222] text-gray-500 hover:border-green-400/60 hover:text-green-400 disabled:opacity-20 transition-all"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="w-7 h-7 flex items-center justify-center rounded-lg border border-[#222] text-gray-500 hover:border-green-400/60 hover:text-green-400 disabled:opacity-20 transition-all"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-area pb-3 snap-x snap-mandatory"
            style={{ paddingTop: "5px" }}
          >
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`flex-none w-56 snap-start bg-[#141414] border rounded-xl p-5 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-black/40 cursor-default ${cert.color}`}
              >
                <div className="text-3xl mb-3">{cert.emoji}</div>
                <div className={`text-[10px] font-mono px-2 py-0.5 rounded-full w-fit mb-3 ${cert.tagColor}`}>
                  {cert.date}
                </div>
                <h4 className="font-semibold text-white text-sm leading-snug mb-2 group-hover:text-green-400 transition-colors">
                  {cert.title}
                </h4>
                <p className="text-xs text-gray-600 font-mono">{cert.issuer}</p>

                <div className="mt-4 pt-3 border-t border-[#1f1f1f] flex items-center gap-1.5">
                  <Award size={11} className="text-green-500" />
                  <span className="text-[10px] text-gray-600">Certified</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}