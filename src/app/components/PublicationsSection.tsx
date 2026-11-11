import { motion } from "motion/react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { portfolioData } from "../portfolioData";

export function PublicationsSection() {
  const { language } = useLanguage();
  const currentData = portfolioData[language].publicationsSection;

  return (
    <section id="publications" className="bg-[#121212] py-28 px-6 border-t border-white/5">
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
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group flex flex-col md:flex-row gap-6 bg-[#161616] border border-white/5 rounded-lg p-6 md:p-8 transition-all duration-300 hover:border-[#00D084]/30 hover:bg-[#1a1a1a]"
            >
              {/* Left Column: Icon & Year */}
              <div className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-4 md:w-48 flex-shrink-0">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center border border-[#00D084]/20 bg-[#00D084]/10 text-[#00D084] transition-colors duration-300 group-hover:border-[#00D084]/50">
                  <BookOpen size={24} />
                </div>
                <div className="font-['Inter'] text-gray-500 uppercase tracking-widest" style={{ fontSize: "10px" }}>
                  {item.year}
                </div>
              </div>

              {/* Right Column: Content */}
              <div className="flex-1">
                <span
                  className="inline-block font-['Inter'] text-[#00D084] uppercase tracking-widest border border-[#00D084]/30 bg-[#00D084]/5 rounded-full px-2.5 py-0.5 mb-3"
                  style={{ fontSize: "0.6rem" }}
                >
                  {item.type}
                </span>
                <h3 className="font-['Space_Grotesk'] text-white mb-1 transition-colors duration-200 group-hover:text-[#00D084]" style={{ fontSize: "1.2rem", fontWeight: 600 }}>
                  {item.title}
                </h3>
                <div className="font-['Inter'] text-gray-400 mb-4" style={{ fontSize: "0.85rem" }}>
                  {item.venue}
                </div>

                <p className="font-['Inter'] text-gray-500 leading-relaxed mb-5" style={{ fontSize: "0.85rem" }}>
                  {item.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4">
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

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-['Inter'] text-[#00D084] uppercase tracking-widest font-bold hover:text-white transition-colors"
                      style={{ fontSize: "0.7rem" }}
                    >
                      {currentData.linkLabel}
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
