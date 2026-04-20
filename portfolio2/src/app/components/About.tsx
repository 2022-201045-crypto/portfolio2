import { Code2, Cpu, Lightbulb, Briefcase, MapPin, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const HIGHLIGHTS = [
  {
    icon: <Code2 size={20} className="text-green-400" />,
    title: "Software Development",
    description: "Proficient in C/C++, Python, Java, C#, SQL and web technologies",
    color: "border-green-500/20 hover:border-green-400/50",
  },
  {
    icon: <Cpu size={20} className="text-orange-400" />,
    title: "Hardware Design",
    description: "Arduino, Raspberry Pi, embedded systems & IoT projects",
    color: "border-orange-500/20 hover:border-orange-400/50",
  },
  {
    icon: <Lightbulb size={20} className="text-yellow-400" />,
    title: "Problem Solving",
    description: "Strong analytical skills with a focus on innovative solutions",
    color: "border-yellow-500/20 hover:border-yellow-400/50",
  },
  {
    icon: <Briefcase size={20} className="text-blue-400" />,
    title: "Team Collaboration",
    description: "Communication, project management & agile workflows",
    color: "border-blue-500/20 hover:border-blue-400/50",
  },
];

const TIMELINE = [
  {
<<<<<<< HEAD
=======
    year: "2022",
    title: "Started BS Computer Engineering",
    institution: "Rizal Technological University",
    description: "Began the academic journey into Computer Engineering — exploring fundamentals of programming, digital logic, and circuits.",
    tags: ["C Programming", "Digital Logic", "Circuit Analysis"],
    status: "milestone",
    icon: "🎓",
  },
  {
    year: "2023",
    title: "Advanced Systems Development",
    institution: "RTU — Year 2",
    description: "Built complete systems: POS System (C# + SQL), Attendance System (Python + Raspberry Pi), and started using AI tools & Python libraries.",
    tags: ["Python", "C#", "SQL", "Raspberry Pi", "NumPy", "Pandas"],
    status: "milestone",
    icon: "🚀",
  },
  {
    year: "2024",
    title: "First Hardware Projects",
    institution: "RTU — Year 3",
    description: "Developed initial Arduino mini projects, learned embedded C/C++, and began working with sensors, motors, and microcontrollers.",
    tags: ["Arduino", "C/C++", "Embedded Systems", "Sensors"],
    status: "milestone",
    icon: "⚙️",
  },
  {
    year: "2025",
    title: "Final Projects",
    institution: "RTU — Year 4",
    description: "Completed flagship projects: Automatic Pet Feeder with Web Interface,and Automatic Price Computer using Image Recognition, using Raspberry Pi",
    tags: ["Image Recognition", "Flask", "Raspberry Pi", "IoT", "Machine Learning"],
    status: "milestone",
    icon: "💡",
  },
  {
    year: "2026",
    title: "Thesis Project",
    institution: "RTU — Year 4",
    description: "Aquapalay:An Iot-Enabled Floating Bed System With AI-Driven Decision Support System for Automated Irrigatin, Nutrient Managament and Real-Time Monitoring of RC 216 Palay",
    tags: ["IoT", "Flask", "Raspberry Pi", "Web development", "Data Visualization"],
    status: "current",
    icon: "💡",
  },
  {
>>>>>>> f9211141d749cac0fcd3362270aa7276f709f4f6
    year: "2026",
    title: "Internship - Data Analyst",
    institution: "S.P. Madrid",
    description: "Data Analyst Intern at S.P. Madrid, where I used Python, pandas, and Excel to clean, analyze, and automate data processes, delivering insights to support decision-making.",
    tags: ["Data Analyst","Streamlit", "Python", "Automation"],
    status: "current",
    icon: (
      <img
        src="https://framerusercontent.com/images/HJiJzOcNXzZndgXFx20NNG9bZlM.png"
        alt="S.P. Madrid logo"
        className="w-6 h-6 object-contain rounded-md"
      />
    ),
  },
  {
    year: "2025",
    title: "Final Projects",
    institution: "RTU — Year 4",
    description: "Completed flagship projects: Automatic Pet Feeder with Web Interface,and Automatic Price Computer using Image Recognition, using Raspberry Pi",
    tags: ["Image Recognition", "Flask", "Raspberry Pi", "IoT", "Machine Learning"],
    status: "milestone",
    icon: "💡",
  },
  {
    year: "2024",
    title: "First Hardware Projects",
    institution: "RTU — Year 3",
    description: "Developed initial Arduino mini projects, learned embedded C/C++, and began working with sensors, motors, and microcontrollers.",
    tags: ["Arduino", "C/C++", "Embedded Systems", "Sensors"],
    status: "milestone",
    icon: "⚙️",
  },
  {
    year: "2023",
    title: "Advanced Systems Development",
    institution: "RTU — Year 2",
    description: "Built complete systems: POS System (C# + SQL), Attendance System (Python + Raspberry Pi), and started using AI tools & Python libraries.",
    tags: ["Python", "C#", "SQL", "Raspberry Pi", "NumPy", "Pandas"],
    status: "milestone",
    icon: "🚀",
  },
  {
    year: "2022",
    title: "Started BS Computer Engineering",
    institution: "Rizal Technological University",
    description: "Began the academic journey into Computer Engineering — exploring fundamentals of programming, digital logic, and circuits.",
    tags: ["C Programming", "Digital Logic", "Circuit Analysis"],
    status: "milestone",
    icon: "🎓",
  },
];

export function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="about" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-green-400 font-mono text-sm mb-2">// about_me.md</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">About Me</h2>
          <div className="w-16 h-0.5 bg-green-400 mx-auto" />
        </motion.div>

        {/* Bio + Highlights */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-gray-400 leading-relaxed">
              I'm a BS Computer Engineering student at{" "}
              <span className="text-green-400">Rizal Technological University</span>, currently
              in my final year. My passion lies in bridging the gap between hardware and software
              to create real-world solutions.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Throughout my academic career, I've built projects ranging from{" "}
              <span className="text-white">embedded IoT systems</span> to{" "}
              <span className="text-white">AI-powered applications</span>. I enjoy working
              with Arduino, Raspberry Pi, and Python-based tools.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I'm actively seeking opportunities to apply my skills in a professional
              environment where I can contribute meaningfully and continue growing as
              an engineer.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <MapPin size={14} className="text-green-400" />
              <span className="text-gray-500 text-sm font-mono">Philippines · Open to Remote & On-site</span>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid grid-cols-2 gap-3">
            {HIGHLIGHTS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`p-4 bg-[#141414] border rounded-xl transition-all duration-300 cursor-default group ${item.color} ${
                  hoveredIndex === index ? "bg-green-400/5 -translate-y-1 shadow-lg" : ""
                }`}
              >
                <div className="mb-3 p-2 w-fit rounded-lg bg-[#1a1a1a] border border-[#242424] group-hover:scale-110 transition-transform duration-200">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-white text-sm mb-1 group-hover:text-green-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Career Timeline ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4"
        >
          <div className="flex items-center gap-3 mb-10">
            <GraduationCap size={20} className="text-green-400" />
            <p className="text-green-400 font-mono text-sm">// career_timeline[]</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-green-400 via-green-600/50 to-transparent" />

            <div className="space-y-6">
              {TIMELINE.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-16"
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-4 top-5 w-4 h-4 rounded-full -translate-x-1/2 border-2 transition-all duration-300 ${
                      item.status === "current"
                        ? "bg-green-400 border-green-400 shadow-lg shadow-green-400/40 animate-glow"
                        : item.status === "future"
                        ? "bg-[#141414] border-gray-600"
                        : "bg-green-900 border-green-600"
                    }`}
                  >
                    {item.status === "current" && (
                      <div className="absolute inset-0 rounded-full bg-green-400/30 animate-ping" />
                    )}
                  </div>

                  {/* Card */}
                  <div
                    className={`bg-[#141414] border rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg group ${
                      item.status === "current"
                        ? "border-green-400/40 hover:border-green-400/70"
                        : item.status === "future"
                        ? "border-[#1f1f1f] opacity-60 hover:opacity-80"
                        : "border-[#1f1f1f] hover:border-green-400/20"
                    }`}
                  >
                    <div className="flex flex-wrap items-start gap-3 mb-2">
                      <span className="text-xl">{item.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                          <span className="text-green-400 font-mono text-xs font-bold">{item.year}</span>
                          {item.status === "current" && (
                            <span className="px-2 py-0.5 text-[10px] font-mono bg-green-400/10 text-green-400 border border-green-400/30 rounded-full">
                              CURRENT
                            </span>
                          )}
                          {item.status === "future" && (
                            <span className="px-2 py-0.5 text-[10px] font-mono bg-gray-700/30 text-gray-500 border border-gray-700 rounded-full">
                              UPCOMING
                            </span>
                          )}
                        </div>
                        <h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-600 font-mono">{item.institution}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed mb-3">{item.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag, ti) => (
                        <span
                          key={ti}
                          className="px-2 py-0.5 text-[10px] font-mono bg-[#1a1a1a] border border-[#2a2a2a] text-gray-500 rounded hover:text-green-400 hover:border-green-400/30 transition-colors cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
