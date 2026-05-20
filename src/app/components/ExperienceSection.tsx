import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { portfolioData } from "../portfolioData"; // Ajustá la ruta según tu estructura

export function ExperienceSection() {
  const { language } = useLanguage();
  const currentData = portfolioData[language].experienceSection;

  return (
    <section id="experience" className="bg-[#121212] py-28 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-['Inter'] text-[#00D084] uppercase tracking-[0.25em]" style={{ fontSize: "11px" }}>
            {currentData.label}
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#00D084]/30 to-transparent max-w-xs" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-['Space_Grotesk'] text-white mb-14 leading-tight"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 600 }}
        >
          {currentData.title}
        </motion.h2>

        {/* Vertical timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-[#00D084]/60 via-[#00D084]/20 to-transparent" />

          <div className="space-y-0">
            {currentData.items.map((item, i) => {
              // Accedemos a la configuración de color/label según el tipo
              // Usamos un fallback a "remote" por si algún type no coincide
              const tc = currentData.typeConfig[item.type as keyof typeof currentData.typeConfig] || currentData.typeConfig.remote;
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.08 }}
                  className="relative pl-10 pb-10 last:pb-0"
                >
                  {/* Dot */}
                  <div className="absolute left-0 top-1.5">
                    <div
                      className="w-3.5 h-3.5 rounded-full border flex items-center justify-center"
                      style={{
                        borderColor: item.highlight ? "#00D084" : "#333",
                        background: item.highlight ? "rgba(0,208,132,0.15)" : "#1a1a1a",
                        boxShadow: item.highlight ? "0 0 12px rgba(0,208,132,0.4)" : "none",
                      }}
                    >
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: item.highlight ? "#00D084" : "#444" }}
                      />
                    </div>
                  </div>

                  {/* Content card */}
                  <div
                    className={`rounded-lg p-5 border transition-all duration-200 hover:border-[#00D084]/25 ${
                      item.highlight
                        ? "bg-[#0d1810] border-[#00D084]/20"
                        : "bg-[#161616] border-white/5"
                    }`}
                  >
                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3
                          className="font-['Space_Grotesk'] text-white"
                          style={{ fontSize: "1rem", fontWeight: 600 }}
                        >
                          {item.role}
                        </h3>
                        <div
                          className="font-['Inter'] text-gray-500 mt-0.5"
                          style={{ fontSize: "0.8rem" }}
                        >
                          {item.company}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span
                          className="font-['Inter'] border rounded-full px-2.5 py-0.5"
                          style={{
                            fontSize: "0.65rem",
                            color: tc.color,
                            borderColor: `${tc.color}30`,
                            background: `${tc.color}08`,
                          }}
                        >
                          {tc.label}
                        </span>
                        <span
                          className="font-['Inter'] text-gray-600"
                          style={{ fontSize: "0.75rem" }}
                        >
                          {item.period}
                        </span>
                      </div>
                    </div>

                    <p
                      className="font-['Inter'] text-gray-500 leading-relaxed mb-4"
                      style={{ fontSize: "0.83rem" }}
                    >
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-['Inter'] bg-[#1e1e1e] border border-white/5 text-gray-500 rounded px-2 py-0.5"
                          style={{ fontSize: "0.68rem" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}