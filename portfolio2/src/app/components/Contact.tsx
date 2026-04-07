import { Mail, MapPin, Send, Github, Linkedin, Facebook, Instagram, ExternalLink } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

// Twitter/X SVG icon (no lucide v3 X icon)
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SOCIAL_LINKS = [
  {
    platform: "GitHub",
    handle: "giancarlogonzalvo",
    href: "https://github.com/2022-201045-crypto",
    Icon: Github,
    bg: "bg-[#1a1a1a] border border-[#2a2a2a]",
  },
  {
    platform: "LinkedIn",
    handle: "Gian Carlo Gonzalvo",
    href: "www.linkedin.com/in/gonzalvo-gian-carlo-3589043a5",
    Icon: Linkedin,
    bg: "bg-[#0a66c2]/20 border border-[#0a66c2]/30",
  },
  {
    platform: "Facebook",
    handle: "Gian Carlo Gonzalvo",
    href: "https://www.facebook.com/share/1SnuK2jiKo/",
    Icon: Facebook,
    bg: "bg-[#1877f2]/20 border border-[#1877f2]/30",
  },
  {
    platform: "Instagram",
    handle: "@giancarlogonzalvo",
    href: "https://www.instagram.com/giancarlogonzalvo?igsh=MXFja2g3M29wamkwZQ==",
    Icon: Instagram,
    bg: "bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-pink-800/30",
  },
  {
    platform: "Twitter / X",
    handle: "@giancarlogonzalvo",
    href: "https://twitter.com",
    Icon: XIcon,
    bg: "bg-[#1a1a1a] border border-[#2a2a2a]",
  },
  {
    platform: "Email",
    handle: "giangonzalvo@gmail.com",
    href: "mailto:giangonzalvo@gmail.com",
    Icon: Mail,
    bg: "bg-green-900/20 border border-green-900/40",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputBase =
    "w-full px-4 py-3 bg-[#1a1a1a] border rounded-lg text-white placeholder-gray-600 outline-none transition-all duration-200 text-sm font-mono";
  const inputFocused = "border-green-400/60 ring-1 ring-green-400/20";
  const inputNormal = "border-[#2a2a2a] hover:border-[#3a3a3a]";

  return (
    <section id="contact" className="py-20 bg-[#0c0c0c] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 0%, rgba(74,222,128,0.08) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(74,222,128,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-green-400 font-mono text-sm mb-2">// contact.send()</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">Get In Touch</h2>
          <div className="w-16 h-0.5 bg-green-400 mx-auto mb-3" />
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Open to new opportunities, collaborations, or just a chat about tech.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* ── Left: Info + Social Links ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Quote block */}
            <div className="bg-[#141414] border border-[#1f1f1f] rounded-xl p-5 relative">
              <div className="absolute top-4 left-4 text-green-400 text-2xl font-serif leading-none opacity-60">
                "
              </div>
              <div className="pl-6">
                <p className="text-gray-300 italic text-sm leading-relaxed">
                  In God we trust. All others must bring data.
                </p>
                <p className="text-green-400 font-mono text-xs mt-2">— W. Edwards Deming</p>
              </div>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <MapPin size={13} className="text-green-400 flex-shrink-0" />
                <span>Philippines · Open to Remote & On-site Opportunities</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail size={13} className="text-green-400 flex-shrink-0" />
                <a
                  href="mailto:giangonzalvo@gmail.com"
                  className="text-green-400 hover:text-green-300 transition-colors font-mono text-xs"
                >
                  giangonzalvo@gmail.com
                </a>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-3">
                Connect With Me
              </p>
              <div className="space-y-2">
                {SOCIAL_LINKS.map(({ platform, handle, href, Icon, bg }) => (
                  <a
                    key={platform}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#141414] border border-[#1f1f1f] hover:border-green-400/30 rounded-lg px-4 py-3 group transition-all duration-200 hover:bg-green-400/5"
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-white ${bg}`}
                    >
                      <Icon />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white group-hover:text-green-400 transition-colors">
                        {platform}
                      </p>
                      <p className="text-[11px] font-mono text-gray-600 truncate">{handle}</p>
                    </div>
                    <ExternalLink
                      size={12}
                      className="text-gray-700 group-hover:text-green-500 flex-shrink-0 transition-colors"
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── Right: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#141414] border border-[#1f1f1f] rounded-xl p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    placeholder="Your Name"
                    className={`${inputBase} ${focusedField === "name" ? inputFocused : inputNormal}`}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    placeholder="Email Address"
                    className={`${inputBase} ${focusedField === "email" ? inputFocused : inputNormal}`}
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  required
                  placeholder="Subject"
                  className={`${inputBase} ${focusedField === "subject" ? inputFocused : inputNormal}`}
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={5}
                  placeholder="Message"
                  className={`${inputBase} resize-none ${focusedField === "message" ? inputFocused : inputNormal}`}
                />
                <button
                  type="submit"
                  className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                    sent
                      ? "bg-green-600 text-white"
                      : "bg-[#00e676] hover:bg-[#00ff87] text-black hover:shadow-lg hover:shadow-green-400/25"
                  }`}
                >
                  <Send size={16} />
                  {sent ? "Message Sent! ✓" : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
