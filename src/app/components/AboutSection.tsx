import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { portfolioData } from "../portfolioData";


const getTechStack = (categories: string[]) => [
  {
    category: categories[0], // Data / Datos
    color: "#00D084",
    items: [
      { name: "Python", icon: "🐍" },
      { name: "Cloud | BigQuery", icon: "⬡" },
      { name: "Pandas | Numpy", icon: "📊" },
      { name: "Scikit-Learn", icon: "⚙" }, 
    ],
  },
  {
    category: categories[1], 
    color: "#5B9BD5",
    items: [
      { name: "React / Next", icon: "⚛" },
      { name: "Node.js", icon: "⬡" },
      { name: "APIs", icon: "⚡" },
      { name: "SQL / NoSQL", icon: "🗄" },
    ],
  },
  {
    category: categories[2], 
    color: "#E8965A",
    items: [
      { name: "Simulación", icon: "⚗" },
      { name: "Digital Twins", icon: "⬡" },
      { name: "Automatización", icon: "∫" },
      { name: "GCP", icon: "▲" },
    ],
  },
];

function TechCard({ name, icon, color }: { name: string; icon: string; color: string }) {
  return (
    <div className="flex items-center gap-2.5 bg-[#1a1a1a] border border-white/5 rounded px-3.5 py-2.5 hover:border-[#00D084]/30 transition-all duration-200 group cursor-default">
      <span className="text-sm font-mono" style={{ color }}>{icon}</span>
      <span className="font-['Inter'] text-gray-400 group-hover:text-white transition-colors duration-200" style={{ fontSize: "0.78rem" }}>
        {name}
      </span>
    </div>
  );
}

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.65, delay, ease: "easeOut" as const },
  };
}

export function AboutSection() {
  const { language } = useLanguage();
  const currentData = portfolioData[language].about;
  const techStack = getTechStack(currentData.stackCategories);

  return (
    <section id="about" className="bg-[#121212] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section label */}
        <motion.div {...fadeUp()} className="flex items-center gap-4 mb-16">
          <span className="font-['Inter'] text-[#00D084] uppercase tracking-[0.25em]" style={{ fontSize: "11px" }}>
            {currentData.label}
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00D084]/30 to-transparent max-w-xs" />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-20">
          
          {/* Left Content */}
          <motion.div {...fadeUp(0.1)}>
            <h2 className="font-['Space_Grotesk'] text-white mb-6 leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 600 }}>
              {currentData.titleLine1}
              <br />
              <span className="text-[#00D084]">{currentData.titleHighlight}</span>
              <br />
              {currentData.titleLine2}
            </h2>
            <p className="font-['Inter'] text-gray-400 leading-relaxed mb-5" style={{ fontSize: "0.9rem" }}>
              {currentData.description1}
            </p>
            <p className="font-['Inter'] text-gray-500 leading-relaxed" style={{ fontSize: "0.875rem" }}>
              {currentData.description2}
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-white/5">
              {currentData.stats.map(({ value, label }) => (
                <div key={label}>
                  <div className="font-['Space_Grotesk'] text-[#00D084]" style={{ fontSize: "1.8rem", fontWeight: 700 }}>
                    {value}
                  </div>
                  <div className="font-['Inter'] text-gray-500 uppercase tracking-widest" style={{ fontSize: "9px" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — abstract SVG illustration */}
          <motion.div {...fadeUp(0.2)} className="flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              <svg viewBox="0 0 340 340" fill="none" className="w-full h-full opacity-80">
                <circle cx="170" cy="170" r="155" stroke="#00D084" strokeOpacity="0.07" strokeWidth="1" />
                <circle cx="170" cy="170" r="130" stroke="#00D084" strokeOpacity="0.1" strokeWidth="0.5" />
                <circle cx="75" cy="120" r="20" fill="#1E2E28" stroke="#00D084" strokeOpacity="0.4" strokeWidth="1" />
                <circle cx="40" cy="80" r="12" fill="#1a1a1a" stroke="#00D084" strokeOpacity="0.25" strokeWidth="0.75" />
                <circle cx="110" cy="75" r="12" fill="#1a1a1a" stroke="#00D084" strokeOpacity="0.25" strokeWidth="0.75" />
                <circle cx="55" cy="155" r="10" fill="#1a1a1a" stroke="#00D084" strokeOpacity="0.2" strokeWidth="0.75" />
                <line x1="75" y1="100" x2="50" y2="88" stroke="#00D084" strokeOpacity="0.3" strokeWidth="0.75" />
                <line x1="75" y1="100" x2="108" y2="83" stroke="#00D084" strokeOpacity="0.3" strokeWidth="0.75" />
                <line x1="75" y1="140" x2="60" y2="148" stroke="#00D084" strokeOpacity="0.3" strokeWidth="0.75" />
                <rect x="210" y="55" width="80" height="10" rx="2" fill="#1E2E28" stroke="#00D084" strokeOpacity="0.35" strokeWidth="0.75" />
                <rect x="260" y="55" width="10" height="55" rx="2" fill="#1E2E28" stroke="#00D084" strokeOpacity="0.35" strokeWidth="0.75" />
                <rect x="240" y="100" width="50" height="10" rx="2" fill="#1E2E28" stroke="#00D084" strokeOpacity="0.35" strokeWidth="0.75" />
                <circle cx="215" cy="60" r="5" fill="#00D084" fillOpacity="0.5" />
                <circle cx="265" cy="60" r="4" fill="#00D084" fillOpacity="0.35" />
                <circle cx="265" cy="105" r="4" fill="#00D084" fillOpacity="0.35" />
                <rect x="140" y="140" width="60" height="60" rx="3" fill="#151515" stroke="#00D084" strokeOpacity="0.5" strokeWidth="1" />
                <text x="170" y="178" textAnchor="middle" fill="#00D084" fillOpacity="0.9" fontFamily="monospace" fontSize="20" fontWeight="bold">&lt;/&gt;</text>
                <line x1="95" y1="120" x2="140" y2="160" stroke="#00D084" strokeOpacity="0.15" strokeWidth="0.75" strokeDasharray="4 3" />
                <line x1="230" y1="105" x2="200" y2="155" stroke="#00D084" strokeOpacity="0.15" strokeWidth="0.75" strokeDasharray="4 3" />
                <circle cx="110" cy="250" r="8" fill="#1a1a1a" stroke="#00D084" strokeOpacity="0.4" strokeWidth="0.75" />
                <circle cx="145" cy="270" r="5" fill="#1a1a1a" stroke="#00D084" strokeOpacity="0.3" strokeWidth="0.75" />
                <circle cx="220" cy="255" r="8" fill="#1a1a1a" stroke="#00D084" strokeOpacity="0.4" strokeWidth="0.75" />
                <circle cx="255" cy="238" r="5" fill="#1a1a1a" stroke="#00D084" strokeOpacity="0.3" strokeWidth="0.75" />
                <line x1="118" y1="250" x2="140" y2="266" stroke="#00D084" strokeOpacity="0.25" strokeWidth="0.75" />
                <line x1="150" y1="268" x2="215" y2="257" stroke="#00D084" strokeOpacity="0.25" strokeWidth="0.75" />
                <line x1="226" y1="248" x2="252" y2="240" stroke="#00D084" strokeOpacity="0.25" strokeWidth="0.75" />
                <line x1="170" y1="200" x2="145" y2="264" stroke="#00D084" strokeOpacity="0.12" strokeWidth="0.75" strokeDasharray="3 3" />
                <line x1="170" y1="200" x2="220" y2="248" stroke="#00D084" strokeOpacity="0.12" strokeWidth="0.75" strokeDasharray="3 3" />
                <circle cx="170" cy="170" r="45" fill="url(#centerGlow)" />
                <defs>
                  <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#00D084" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#00D084" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack Grid */}
        <motion.div {...fadeUp(0.3)}>
          <div className="flex items-center gap-4 mb-8">
            <span className="font-['Inter'] text-gray-500 uppercase tracking-[0.2em]" style={{ fontSize: "10px" }}>
              {currentData.stackLabel}
            </span>
            <div className="h-px bg-white/5 flex-1" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {techStack.map((cat, ci) => (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + ci * 0.1 }}
                className="bg-[#161616] border border-white/5 rounded-lg p-5"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: cat.color }} />
                  <span className="font-['Space_Grotesk'] uppercase tracking-[0.18em]" style={{ color: cat.color, fontSize: "10px" }}>
                    {cat.category}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {cat.items.map((item) => (
                    <TechCard key={item.name} {...item} color={cat.color} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}