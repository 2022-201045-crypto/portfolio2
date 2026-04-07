import { motion } from "motion/react";
import { Award, Calendar, MapPin } from "lucide-react";

const SPM_LOGO = "https://framerusercontent.com/images/HJiJzOcNXzZndgXFx20NNG9bZlM.png";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-green-400 font-mono text-sm mb-2">// experience_and_internship.json</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Work Experience</h2>
          <div className="w-16 h-0.5 bg-green-400 mx-auto" />
          <p className="text-gray-500 text-sm font-mono">
            Internship experience with a focus on data analysis, automation, and reporting.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#141414] border border-green-500/20 hover:border-green-400/40 rounded-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-green-900/10"
        >
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="p-3 bg-[#08180b] border border-green-400/20 rounded-2xl flex-shrink-0">
              <img
                src={SPM_LOGO}
                alt="S.P. Madrid logo"
                className="w-12 h-12 object-contain rounded-xl"
              />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Data Analyst Intern</h3>
                  <p className="text-green-400 font-medium">S.P. Madrid</p>
                </div>
                <span className="px-3 py-1 text-xs font-mono bg-green-900/20 text-green-400 border border-green-500/30 rounded-full">
                  Feb 2026 – Present
                </span>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-green-400" />
                  Data Analysis & Automation
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-green-400" />
                  Paranaque City, Philippines
                </span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-5">
                Focused on cleaning and automating data workflows using Python, pandas, and Streamlit.
                Delivered insights through dashboards, improved reporting accuracy, and supported operational decisions.
              </p>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Award size={14} className="text-green-400" />
                  <h4 className="text-xs font-mono text-green-400 uppercase tracking-widest">Highlights</h4>
                </div>
                <div className="grid sm:grid-cols-3 gap-2">
                  {[
                    "Automated Excel workflows",
                    "Data cleaning with Python",
                    "Interactive dashboard development"
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 bg-[#1a1a1a] border border-[#242424] rounded-lg p-2.5 hover:border-green-400/30 transition-colors"
                    >
                      <span className="text-green-500 mt-0.5 text-xs">▸</span>
                      <span className="text-xs text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
