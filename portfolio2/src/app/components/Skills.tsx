import { useState } from "react";
import { motion } from "motion/react";

/* ── Skill data ── */
// icon: URL to display image, or null for badge
// iconBg: CSS class for icon container background (e.g. white bg for dark logos)
// badgeBg: background color style for badge (used when icon=null)
// badgeText: label text for badge

type Skill = {
  name: string;
  years: number;
  icon?: string;
  iconBg?: string;  // extra class(es) on img wrapper
  badge?: string;
  badgeBg?: string; // tailwind bg class
};

const SKILL_CATEGORIES: {
  category: string;
  icon: string;
  borderColor: string;
  barColor: string;
  skills: Skill[];
}[] = [
  {
    category: "Programming Languages",
    icon: "💻",
    borderColor: "border-blue-500/30 hover:border-blue-400/60",
    barColor: "bg-blue-500",
    skills: [
      { name: "C/C++", years: 0.5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "Python", years: 1, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", years: 1, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C#", years: 1, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "JavaScript", years: 1, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    ],
  },
  {
    category: "Web & Database",
    icon: "🌐",
    borderColor: "border-cyan-500/30 hover:border-cyan-400/60",
    barColor: "bg-cyan-500",
    skills: [
      { name: "HTML5", years: 1, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", years: 1, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "SQL / MySQL", years: 2, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Streamlit", years: 1, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg", iconBg: "bg-white rounded p-0.5" },
    ],
  },
  {
    category: "Hardware & Embedded",
    icon: "⚙️",
    borderColor: "border-orange-500/30 hover:border-orange-400/60",
    barColor: "bg-orange-500",
    skills: [
      { name: "Arduino", years: 3, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" },
      { name: "Raspberry Pi", years: 2, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" },
    ],
  },
  {
    category: "AI Tools",
    icon: "🤖",
    borderColor: "border-green-500/30 hover:border-green-400/60",
    barColor: "bg-green-500",
    skills: [
      // Using SimpleIcons CDN — official brand SVGs
      {
        name: "ChatGPT",
        years: 3,
        icon: "https://cdn.simpleicons.org/openai/ffffff",
        iconBg: "bg-[#10a37f] rounded p-0.5",
      },
      {
        name: "Claude",
        years: 1,
        icon: "https://cdn.simpleicons.org/anthropic/cc785c",
        iconBg: "bg-[#1a1612] rounded p-0.5",
      },
      {
        name: "Gemini",
        years: 1,
        icon: "https://cdn.simpleicons.org/googlegemini/8e75b2",
        iconBg: "bg-[#0f0f1a] rounded p-0.5",
      },
    ],
  },
  {
    category: "Tools & Productivity",
    icon: "🛠️",
    borderColor: "border-purple-500/30 hover:border-purple-400/60",
    barColor: "bg-purple-500",
    skills: [
      { name: "Git / GitHub", years: 1, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      // Microsoft Office — actual official SVGs via simpleicons
      {
        name: "Microsoft Excel",
        years: 2,
        icon: "https://commons.wikimedia.org/wiki/File:Microsoft_Office_Excel_(2019%E2%80%932025).svg",
        iconBg: "bg-white rounded p-0.5",
      },
      {
        name: "Microsoft Word",
        years: 2,
        icon: "https://commons.wikimedia.org/wiki/File:Microsoft_Office_Word_(2019%E2%80%932025).svg",
        iconBg: "bg-white rounded p-0.5",
      },
    ],
  },
  {
    category: "Editing Tools",
    icon: "🎨",
    borderColor: "border-pink-500/30 hover:border-pink-400/60",
    barColor: "bg-pink-500",
    skills: [
      {
        name: "Figma",
        years: 2,
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Canva",
        years: 2,
        icon: "https://cdn.simpleicons.org/canva/00C4CC",
        iconBg: "bg-[#0a1a1a] rounded p-0.5",
      },
      {
        name: "CapCut",
        years: 1,
        icon: "https://cdn.simpleicons.org/capcut/000000",
        iconBg: "bg-white rounded p-0.5",
      },
    ],
  },
];

const TOTAL_YEARS = new Date().getFullYear() - 2022;

function SkillIcon({ skill }: { skill: Skill }) {
  if (skill.icon) {
    return (
      <div className={`w-6 h-6 flex-shrink-0 flex items-center justify-center ${skill.iconBg ?? ""}`}>
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-5 h-5 object-contain"
          onError={(e) => {
            const el = e.currentTarget as HTMLImageElement;
            el.style.display = "none";
            const badge = el.parentElement?.querySelector(".badge-fallback") as HTMLElement;
            if (badge) badge.style.display = "flex";
          }}
        />
        <span
          className="badge-fallback hidden text-[8px] font-bold text-white w-full h-full items-center justify-center rounded"
          style={{ background: "#555" }}
        >
          {skill.name.slice(0, 2).toUpperCase()}
        </span>
      </div>
    );
  }
  return (
    <div
      className={`w-6 h-6 flex-shrink-0 flex items-center justify-center rounded text-[8px] font-bold text-white ${skill.badgeBg ?? "bg-gray-600"}`}
    >
      {skill.badge ?? skill.name.slice(0, 2).toUpperCase()}
    </div>
  );
}

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-green-400 font-mono text-sm mb-2">// skills_and_expertise.json</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Skills & Expertise</h2>
          <div className="w-16 h-0.5 bg-green-400 mx-auto mb-3" />
          <p className="text-gray-500 text-sm font-mono">
            Experience measured since 2022 · Total years: {TOTAL_YEARS}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`bg-[#141414] border rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 ${cat.borderColor}`}
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="text-lg">{cat.icon}</span>
                <h3 className="font-semibold text-white">{cat.category}</h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, si) => {
                  const key = `${idx}-${si}`;
                  const pct = Math.min((skill.years / TOTAL_YEARS) * 100, 100);
                  const isHov = hoveredSkill === key;
                  return (
                    <div
                      key={si}
                      onMouseEnter={() => setHoveredSkill(key)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="cursor-default group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <SkillIcon skill={skill} />
                          <span
                            className={`text-sm transition-colors duration-200 ${
                              isHov ? "text-green-400" : "text-gray-300"
                            }`}
                          >
                            {skill.name}
                          </span>
                        </div>
                        <span
                          className={`text-xs font-mono transition-colors duration-200 ${
                            isHov ? "text-green-400" : "text-gray-600"
                          }`}
                        >
                          {skill.years < 1
                            ? "6 months"
                            : `${skill.years} yr${skill.years > 1 ? "s" : ""}`}
                        </span>
                      </div>
                      <div className="h-1.5 bg-[#1f1f1f] rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full ${
                            isHov ? "brightness-125" : ""
                          } ${cat.barColor}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${pct}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: si * 0.1 + idx * 0.05,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
