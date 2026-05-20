import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { LanguageSwitch } from "./LanguageSwitch";

const navDictionary = {
  es: [
    { id: "about", label: "sobre mí" },
    { id: "projects", label: "proyectos" },
    { id: "experience", label: "experiencia" },
    { id: "contact", label: "contacto" },
  ],
  en: [
    { id: "about", label: "about" },
    { id: "projects", label: "projects" },
    { id: "experience", label: "experience" },
    { id: "contact", label: "contact" },
  ]
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const { language } = useLanguage();
  const currentLinks = navDictionary[language];
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-[#0d0d0d]/90 backdrop-blur-lg border-b border-[#00D084]/15 shadow-[0_4px_30px_rgba(0,208,132,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-['Space_Grotesk'] text-xl font-bold tracking-tight text-[#00D084] hover:text-white transition-colors duration-200"
        >
          &lt;RM /&gt;
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {currentLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="font-['Inter'] text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-[#00D084] transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#00D084] group-hover:w-full transition-all duration-300" />
            </button>
          ))}
          
          {/* Divisor vertical estético */}
          <div className="w-px h-5 bg-white/10 mx-2" />
          
          {/* Switch de Idiomas Desktop */}
          <LanguageSwitch />
        </nav>

        {/* Mobile toggle & Switch */}
        <div className="md:hidden flex items-center gap-4">
          {/* Switch de Idiomas Mobile */}
          <LanguageSwitch />
          
          <button
            className="text-gray-400 hover:text-[#00D084] transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#111]/95 backdrop-blur-lg border-b border-[#00D084]/15 px-6 py-4 flex flex-col gap-4"
        >
          {currentLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="font-['Inter'] text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-[#00D084] transition-colors text-left"
            >
              {link.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  );
}