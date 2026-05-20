import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { portfolioData } from "../portfolioData"; // Ajustá la ruta

export function EducationSection() {
  const { language } = useLanguage();
  const currentData = portfolioData[language].educationSection;

  return (
    <section id="education" className="bg-[#0f0f0f] py-28 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-14"
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
          className="font-['Space_Grotesk'] text-white mb-12 leading-tight"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 600 }}
        >
          {currentData.title}
        </motion.h2>

        <div className="flex flex-col gap-6">
          {currentData.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group flex flex-col md:flex-row gap-6 bg-[#161616] border border-white/5 rounded-lg p-6 md:p-8 transition-all duration-300 hover:border-[#00D084]/30 hover:bg-[#1a1a1a]"
            >
              {/* Left Column: Icon & Period */}
              <div className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-4 md:w-48 flex-shrink-0">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center border transition-colors duration-300 group-hover:border-[#00D084]/50"
                  style={{ 
                    background: `${item.iconColor}10`, 
                    borderColor: `${item.iconColor}20`,
                    color: item.iconColor 
                  }}
                >
                  <GraduationCap size={24} />
                </div>
                <div className="font-['Inter'] text-gray-500 uppercase tracking-widest" style={{ fontSize: "10px" }}>
                  {item.period}
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="flex-1">
                <h3 className="font-['Space_Grotesk'] text-white mb-1 transition-colors duration-200 group-hover:text-[#00D084]" style={{ fontSize: "1.2rem", fontWeight: 600 }}>
                  {item.degree}
                </h3>
                <div className="font-['Inter'] text-gray-400 mb-4" style={{ fontSize: "0.85rem" }}>
                  {item.institution}
                </div>
                
                <p className="font-['Inter'] text-gray-500 leading-relaxed mb-5" style={{ fontSize: "0.85rem" }}>
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-['Inter'] bg-[#121212] border border-white/5 text-gray-500 rounded px-2.5 py-1"
                      style={{ fontSize: "0.7rem" }}
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
    </section>
  );
}