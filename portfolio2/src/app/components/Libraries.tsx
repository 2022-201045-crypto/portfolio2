import { Github, Linkedin, Mail, Download, ChevronRight, ChevronLeft, Facebook, Instagram, Cpu, Code2, BookOpen, Bot } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useRef, useState, useEffect, type ReactNode } from "react";

/* ── Logo scroll data ── */
const LOGO_GROUPS = [
  {
    label: "PROG. LANGUAGES",
    color: "text-blue-400",
    borderColor: "border-blue-500/30",
    items: [
      { name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    ],
  },
  {
    label: "HARDWARE",
    color: "text-orange-400",
    borderColor: "border-orange-500/30",
    items: [
      { name: "Arduino", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
      { name: "Raspberry Pi", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
    ],
  },
  {
    label: "TOOLS",
    color: "text-purple-400",
    borderColor: "border-purple-500/30",
    items: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Streamlit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg", bg: true },
      { name: "Excel", icon: "https://cdn.simpleicons.org/microsoftexcel/217346", bg: true },
      { name: "Word", icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/Microsoft_Office_Word_%282019%E2%80%932025%29.svg", bg: true },
    ],
  },
  {
    label: "LIBRARIES",
    color: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    items: [
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", bg: true },
      { name: "Streamlit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg", bg: true },
      { name: "docxtpl", icon: null, badge: "DOC", badgeColor: "bg-indigo-700 text-white" },
    ],
  },
  {
    label: "AI TOOLS",
    color: "text-green-400",
    borderColor: "border-green-500/30",
    items: [
      { name: "ChatGPT", icon: "https://cdn.simpleicons.org/openai/ffffff", bg: true, bgColor: "#10a37f" },
      { name: "Claude", icon: "https://cdn.simpleicons.org/anthropic/cc785c", bg: true, bgColor: "#1a1612" },
      { name: "Gemini", icon: "https://cdn.simpleicons.org/googlegemini/8E75B2", bg: true, bgColor: "#0f0f1a" },
    ],
  },
  {
    label: "EDITING",
    color: "text-pink-400",
    borderColor: "border-pink-500/30",
    items: [
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Canva", icon: "https://cdn.simpleicons.org/canva/00C4CC", bg: true, bgColor: "#0a1a1a" },
      { name: "CapCut", icon: "https://cdn.simpleicons.org/capcut/000000", bg: true, bgColor: "#ffffff" },
    ],
  },
];

function LogoItem({ item }: { item: { name: string; icon: string | null; badge?: string; badgeColor?: string; bg?: boolean; bgColor?: string } }) {
  return (
    <div className="flex flex-col items-center gap-1.5 px-3 group">
      <div className="w-9 h-9 flex items-center justify-center">
        {item.icon ? (
          <img
            src={item.icon}
            alt={item.name}
            className="w-8 h-8 object-contain transition-transform duration-200 group-hover:scale-125"
            style={item.bg && item.bgColor ? { background: item.bgColor, borderRadius: "4px", padding: "2px" } : item.bg ? { background: "#fff", borderRadius: "4px", padding: "2px" } : undefined}
            onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
          />
        ) : (
          <span className={`text-xs font-bold px-2 py-1 rounded ${item.badgeColor}`}>{item.badge}</span>
        )}
      </div>
      <span className="text-[10px] text-gray-500 group-hover:text-gray-300 transition-colors whitespace-nowrap">{item.name}</span>
    </div>
  );
}

/* Build a flat strip: [divider] [logos…] repeated 2× for seamless loop */
function buildStrip() {
  const items: ReactNode[] = [];
  LOGO_GROUPS.forEach((group) => {
    items.push(
      <div key={`div-${group.label}`} className={`flex items-center gap-1.5 px-4 py-1 mx-2 rounded-full border ${group.borderColor} bg-black/50`}>
        <span className={`text-[10px] font-mono font-bold tracking-widest ${group.color}`}>{group.label}</span>
      </div>
    );
    group.items.forEach((item) => (
      items.push(<LogoItem key={`${group.label}-${item.name}`} item={item} />)
    ));
  });
  return items;
}

/* ── Stats Panel ── */
const STATS = [
  { label: "Years Studying", value: "4", suffix: "yrs", icon: "🎓" },
  { label: "Projects Built", value: "5+", suffix: "", icon: "🚀" },
  { label: "Technologies", value: "13+", suffix: "", icon: "⚡" },
  { label: "Libraries Used", value: "5+", suffix: "", icon: "📦" },
];

/* ── Highlight Panel ── */
const HIGHLIGHTS = [
  { icon: <Code2 size={20} className="text-green-400" />, title: "Software Dev", desc: "Full-stack & embedded systems" },
  { icon: <Cpu size={20} className="text-orange-400" />, title: "Hardware", desc: "Arduino, Raspberry Pi & IoT" },
  { icon: <Bot size={20} className="text-blue-400" />, title: "AI Integration", desc: "ChatGPT, Claude & Gemini" },
  { icon: <BookOpen size={20} className="text-purple-400" />, title: "Data & Libraries", desc: "NumPy, Pandas, Flask & more" },
];

export function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentPanel, setCurrentPanel] = useState(0);
  const TOTAL_PANELS = 3;

  const scrollToPanel = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ left: index * scrollRef.current.clientWidth, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const panel = Math.round(el.scrollLeft / el.clientWidth);
      setCurrentPanel(panel);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const strip = buildStrip();

  return (
    <section id="hero" className="min-h-screen flex flex-col bg-[#0a0a0a] relative overflow-hidden pt-16">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(74,222,128,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.4) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Horizontal scroll panels */}
      <div
        ref={scrollRef}
        className="flex-1 flex overflow-x-auto snap-x snap-mandatory no-scrollbar"
      >
        {/* ── Panel 1: Main Intro ── */}
        <div className="snap-start flex-none w-screen flex items-center px-6 sm:px-10 lg:px-20 py-8">
          <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center">
            {/* Text side */}
            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/30 bg-green-400/5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-xs font-mono">Available for opportunities</span>
              </div>

              <div className="space-y-2">
                <p className="text-green-400 font-mono text-sm">Hello, I'm</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Gian Carlo<br />
                  <span className="text-green-400">Gonzalvo</span>
                </h1>
                <p className="text-lg text-gray-400">
                  BS Computer Engineering Student
                  <span className="text-green-500/70"> @ RTU</span>
                </p>
              </div>

              <p className="text-gray-400 leading-relaxed max-w-md">
                Passionate about bridging hardware and software — building innovative
                solutions from embedded systems to AI-integrated applications.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="px-5 py-2.5 bg-green-400 text-black rounded-lg flex items-center gap-2 hover:bg-green-300 transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25 font-medium text-sm"
                >
                  <Mail size={16} />
                  Get In Touch
                </a>
                <button className="px-5 py-2.5 border border-green-400/40 text-green-400 rounded-lg flex items-center gap-2 hover:border-green-400 hover:bg-green-400/10 transition-all duration-200 text-sm">
                  <Download size={16} />
                  Download CV
                </button>
              </div>

              {/* Socials */}
              <div className="flex gap-2 pt-1">
                {[
                  { href: "https://github.com/giancarlogonzalvo", Icon: Github, label: "GitHub" },
                  { href: "https://linkedin.com/in/gian-carlo-gonzalvo", Icon: Linkedin, label: "LinkedIn" },
                  { href: "https://facebook.com", Icon: Facebook, label: "Facebook" },
                  { href: "https://instagram.com/giancarlogonzalvo", Icon: Instagram, label: "Instagram" },
                  { href: "mailto:giangonzalvo@gmail.com", Icon: Mail, label: "Email" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-[#222] text-gray-400 hover:border-green-400/60 hover:text-green-400 hover:bg-green-400/10 transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Photo side */}
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative animate-float">
                <div className="absolute -inset-3 rounded-full bg-green-400/10 blur-2xl animate-glow" />
                <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full border-2 border-green-400/40 overflow-hidden green-glow-border">
                  <ImageWithFallback
                    src="img/myPhoto.jpg"
                    alt="Gian Carlo Gonzalvo"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                {/* floating chip */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-black border border-green-400/40 rounded-full text-xs text-green-400 font-mono whitespace-nowrap">
                  &lt;/CpE Student&gt;
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Panel 2: Stats ── */}
        <div className="snap-start flex-none w-screen flex items-center px-6 sm:px-10 lg:px-20 py-8">
          <div className="max-w-5xl mx-auto w-full space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-green-400 font-mono text-sm mb-2">// quick_stats.json</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">By The Numbers</h2>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#141414] border border-[#1f1f1f] hover:border-green-400/40 rounded-xl p-5 text-center group transition-all duration-300 hover:bg-green-400/5"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-green-400 font-mono">{stat.value}<span className="text-lg text-green-600">{stat.suffix}</span></div>
                  <div className="text-xs text-gray-500 mt-1 font-mono">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Terminal preview */}
            <div className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl p-5 font-mono text-sm">
              <div className="flex gap-1.5 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-xs text-gray-600">terminal</span>
              </div>
              <div className="space-y-1 text-gray-300">
                <p><span className="text-green-400">$</span> <span className="text-gray-400">whoami</span></p>
                <p className="text-white pl-2">Gian Carlo Gonzalvo</p>
                <p><span className="text-green-400">$</span> <span className="text-gray-400">cat skills.txt</span></p>
                <p className="text-white pl-2">C/C++, Python, Java, C#, HTML/CSS, SQL, Arduino, Raspberry Pi...</p>
                <p><span className="text-green-400">$</span> <span className="text-gray-400">echo $GOAL</span></p>
                <p className="text-white pl-2 terminal-cursor">Building the future, one commit at a time</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Panel 3: What I Do ── */}
        <div className="snap-start flex-none w-screen flex items-center px-6 sm:px-10 lg:px-20 py-8">
          <div className="max-w-5xl mx-auto w-full space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-green-400 font-mono text-sm mb-2">// what_i_do.js</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">What I Do</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {HIGHLIGHTS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#141414] border border-[#1f1f1f] hover:border-green-400/30 rounded-xl p-6 group transition-all duration-300 hover:bg-green-400/5 cursor-default"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-[#1a1a1a] border border-[#272727] group-hover:border-green-400/30 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-green-400 transition-colors mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-2">
              <span className="text-gray-600 text-sm font-mono">2022 — Present</span>
              <div className="flex-1 h-px bg-gradient-to-r from-green-400/50 to-transparent" />
              <span className="text-green-400 text-xs font-mono">RTU · Philippines</span>
            </div>
          </div>
        </div>
      </div>

      {/* Panel navigation */}
      <div className="flex items-center justify-center gap-3 py-2 relative z-10">
        <button
          onClick={() => scrollToPanel(Math.max(0, currentPanel - 1))}
          disabled={currentPanel === 0}
          className="p-1.5 text-gray-600 hover:text-green-400 disabled:opacity-20 transition-all duration-200"
        >
          <ChevronLeft size={18} />
        </button>
        {Array.from({ length: TOTAL_PANELS }).map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToPanel(i)}
            className={`rounded-full transition-all duration-300 ${
              currentPanel === i
                ? "w-6 h-2 bg-green-400"
                : "w-2 h-2 bg-gray-700 hover:bg-gray-500"
            }`}
          />
        ))}
        <button
          onClick={() => scrollToPanel(Math.min(TOTAL_PANELS - 1, currentPanel + 1))}
          disabled={currentPanel === TOTAL_PANELS - 1}
          className="p-1.5 text-gray-600 hover:text-green-400 disabled:opacity-20 transition-all duration-200"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* ── Logo Marquee Strip ── */}
      <div className="border-t border-green-900/30 bg-[#0c0c0c] py-3 marquee-container overflow-hidden">
        <div className="flex items-center animate-marquee-slow" style={{ width: "max-content" }}>
          {[...strip, ...strip]}
        </div>
      </div>
    </section>
  );
}