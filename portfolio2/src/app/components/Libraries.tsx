import { motion } from "motion/react";
import { useState } from "react";

const LIBRARIES = [
  {
    name: "NumPy",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
    description: "Scientific computing and numerical operations with multi-dimensional arrays.",
    use: "Data analysis, matrix operations",
    color: "border-blue-500/25 hover:border-blue-400/60",
    tag: "Scientific Computing",
    tagColor: "bg-blue-900/30 text-blue-400 border-blue-500/30",
  },
  {
    name: "Pandas",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
    description: "Powerful data manipulation and analysis using DataFrames and Series.",
    use: "Data cleaning, transformation, CSV handling",
    color: "border-purple-500/25 hover:border-purple-400/60",
    tag: "Data Analysis",
    tagColor: "bg-purple-900/30 text-purple-400 border-purple-500/30",
  },
  {
    name: "Flask",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    description: "Lightweight WSGI web application framework for building REST APIs and web apps.",
    use: "Web APIs, backend development",
    color: "border-gray-500/25 hover:border-gray-300/60",
    tag: "Web Framework",
    tagColor: "bg-gray-800/40 text-gray-300 border-gray-600/30",
    bg: true,
  },
  {
    name: "Streamlit",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg",
    description: "Framework for rapidly building and deploying interactive data apps with Python.",
    use: "Data dashboards, ML demos",
    color: "border-red-500/25 hover:border-red-400/60",
    tag: "Data Apps",
    tagColor: "bg-red-900/30 text-red-400 border-red-500/30",
    bg: true,
  },
  {
    name: "docxtpl",
    icon: null,
    badge: "DOC",
    badgeColor: "bg-indigo-700",
    description: "Python library for generating Word (.docx) documents from Jinja2 templates.",
    use: "Document automation, report generation",
    color: "border-indigo-500/25 hover:border-indigo-400/60",
    tag: "Document Automation",
    tagColor: "bg-indigo-900/30 text-indigo-400 border-indigo-500/30",
  },
];

export function Libraries() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="libraries" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-green-400 font-mono text-sm mb-2">// import libraries</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Python Libraries</h2>
          <div className="w-16 h-0.5 bg-green-400 mx-auto mb-3" />
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Key Python libraries I've used across data analysis, web development, and document automation projects.
          </p>
        </motion.div>

        {/* Terminal import block */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl p-5 font-mono text-sm max-w-2xl mx-auto"
        >
          <div className="flex gap-1.5 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
            <div className="w-3 h-3 rounded-full bg-green-500/70" />
            <span className="ml-2 text-xs text-gray-600">requirements.py</span>
          </div>
          <div className="space-y-1">
            {["numpy", "pandas", "docxtpl", "flask", "streamlit"].map((lib, i) => (
              <p key={i} className="text-gray-400">
                <span className="text-purple-400">import </span>
                <span className="text-green-400">{lib}</span>
                {lib === "numpy" && <span className="text-gray-600"> as np</span>}
                {lib === "pandas" && <span className="text-gray-600"> as pd</span>}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Library cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LIBRARIES.map((lib, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`bg-[#141414] border rounded-xl p-6 transition-all duration-300 cursor-default group ${lib.color} ${
                hovered === index ? "-translate-y-1 shadow-xl shadow-black/40" : ""
              }`}
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 flex items-center justify-center rounded-xl border border-[#2a2a2a] group-hover:border-green-400/30 transition-colors ${lib.bg ? "bg-white p-1.5" : "bg-[#1a1a1a]"}`}>
                  {lib.icon ? (
                    <img
                      src={lib.icon}
                      alt={lib.name}
                      className="w-full h-full object-contain"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                    />
                  ) : (
                    <span className={`text-sm font-bold text-white px-2 py-0.5 rounded ${lib.badgeColor}`}>
                      {lib.badge}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-white group-hover:text-green-400 transition-colors">{lib.name}</h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border font-mono ${lib.tagColor}`}>
                    {lib.tag}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed mb-3">{lib.description}</p>

              {/* Use case */}
              <div className="border-t border-[#1f1f1f] pt-3">
                <p className="text-xs font-mono text-gray-600">
                  <span className="text-green-500">→ </span>{lib.use}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
