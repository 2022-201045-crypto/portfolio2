import { Github, Linkedin, Mail, Heart, Terminal, Facebook, Instagram } from "lucide-react";

const EDITING_TOOLS = [
  {
    name: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    bg: undefined,
    bgColor: undefined,
  },
  {
    name: "Canva",
    icon: "https://cdn.simpleicons.org/canva/00C4CC",
    bg: true,
    bgColor: "#0a1a1a",
  },
  {
    name: "CapCut",
    icon: "https://cdn.simpleicons.org/capcut/000000",
    bg: true,
    bgColor: "#ffffff",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-green-900/30 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded bg-green-400/10 border border-green-400/30 flex items-center justify-center">
                <Terminal size={14} className="text-green-400" />
              </div>
              <span className="font-mono text-sm text-white">
                <span className="text-green-400">&lt;</span>GCG
                <span className="text-green-400">/&gt;</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              <span className="text-white">Gian Carlo Gonzalvo</span> — CpE Student passionate
              about bridging hardware and software.
            </p>
            <div className="flex gap-2">
              {[
                { href: "https://github.com/2022-201045-crypto", Icon: Github },
                { href: "www.linkedin.com/in/gonzalvo-gian-carlo-3589043a5", Icon: Linkedin },
                { href: "https://www.facebook.com/share/1SnuK2jiKo/", Icon: Facebook },
                { href: "https://www.instagram.com/giancarlogonzalvo?igsh=MXFja2g3M29wamkwZQ==", Icon: Instagram },
                { href: "mailto:giangonzalvo@gmail.com", Icon: Mail },
              ].map(({ href, Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#141414] border border-[#222] text-gray-500 hover:text-green-400 hover:border-green-400/40 hover:bg-green-400/10 transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-mono text-green-400 uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { id: "about", label: "About" },
                { id: "skills", label: "Skills" },
                { id: "libraries", label: "Libraries" },
                { id: "projects", label: "Projects" },
                { id: "education", label: "Education" },
                { id: "contact", label: "Contact" },
              ].map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="text-sm text-gray-500 hover:text-green-400 transition-colors font-mono flex items-center gap-1.5 group"
                  >
                    <span className="text-green-600 opacity-0 group-hover:opacity-100 transition-opacity">
                      ›
                    </span>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Editing Tools */}
          <div>
            <h3 className="text-xs font-mono text-green-400 uppercase tracking-widest mb-4">
              Editing Tools
            </h3>
            <div className="space-y-3">
              {EDITING_TOOLS.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-center gap-3 bg-[#141414] border border-[#1f1f1f] hover:border-green-400/30 rounded-lg px-3 py-2.5 group transition-all duration-200 hover:bg-green-400/5 cursor-default"
                >
                  <div
                    className="w-7 h-7 flex items-center justify-center rounded flex-shrink-0"
                    style={tool.bg && tool.bgColor ? { background: tool.bgColor } : undefined}
                  >
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-5 h-5 object-contain"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors font-mono">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a1a1a] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600 font-mono flex items-center gap-1.5">
            © {currentYear}
            <span className="text-green-400">Gian Carlo Gonzalvo</span>
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] font-mono text-gray-600">Open to opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
