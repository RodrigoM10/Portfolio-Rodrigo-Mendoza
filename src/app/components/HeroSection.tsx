import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { HeroBackground } from "./HeroBackground";
import { portfolioData } from "../portfolioData";
import { useLanguage } from "../LanguageContext";


export function HeroSection() {

  const { language } = useLanguage();
  const currentData = portfolioData[language].hero;
  
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const [firstName, lastName] = currentData.name.split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212]">
      <HeroBackground />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, rgba(10,10,10,0.6) 100%)",
        }}
      />
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 border border-[#00D084]/30 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D084] animate-pulse" />
          <span
            className="font-['Inter'] text-[#00D084] tracking-[0.15em] uppercase flex items-center gap-2"
            style={{ fontSize: "11px" }}
          >
            {currentData.available} • <MapPin size={12} className="ml-1"/> {currentData.location}
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="font-['Space_Grotesk'] font-bold text-white tracking-tight leading-none mb-4 uppercase"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "-0.02em" }}
        >
          {firstName}
          <br />
          <span
            className="text-transparent"
            style={{
              WebkitTextStroke: "2px rgba(255,255,255,0.15)",
            }}
          >
            {lastName}
          </span>
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="w-32 h-px bg-gradient-to-r from-transparent via-[#00D084] to-transparent mx-auto mb-6"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="font-['Inter'] text-[#00D084] font-semibold mb-6 tracking-widest uppercase"
          style={{ fontSize: "clamp(0.7rem, 1.5vw, 0.9rem)", letterSpacing: "0.25em" }}
        >
          {currentData.title}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="font-['Inter'] text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed text-sm md:text-base"
        >
          {currentData.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="group font-['Space_Grotesk'] inline-flex items-center gap-2 bg-[#00D084] hover:bg-[#00b870] text-[#0a0a0a] px-8 py-3.5 rounded-sm transition-all duration-200 shadow-[0_0_30px_rgba(0,208,132,0.3)] hover:shadow-[0_0_45px_rgba(0,208,132,0.5)] uppercase font-bold"
            style={{ fontSize: "0.85rem", letterSpacing: "0.08em" }}
          >
            {currentData.btnProjects}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="group font-['Space_Grotesk'] inline-flex items-center gap-2 border border-[#00D084]/50 hover:border-[#00D084] text-[#00D084] hover:bg-[#00D084]/5 px-8 py-3.5 rounded-sm transition-all duration-200 uppercase font-bold"
            style={{ fontSize: "0.85rem", letterSpacing: "0.08em" }}
          >
            <Mail size={15} />
            {currentData.btnContact}
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span
            className="font-['Inter'] text-gray-600 uppercase tracking-[0.2em]"
            style={{ fontSize: "9px" }}
          >
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[#00D084]/60 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}