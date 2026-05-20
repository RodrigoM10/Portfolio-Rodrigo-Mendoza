import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { portfolioData } from "../portfolioData";

export function AllProjects() {
  const { language } = useLanguage();
  
  // Vamos a crear una lista extendida en tus datos, o usar los mismos si aún no la creaste
  const data = portfolioData[language].projectsSection.allProjects|| portfolioData[language].projectsSection.items;

  return (
    <div className="min-h-screen bg-[#121212] text-white p-6 md:p-20 font-['Inter']">
      <div className="max-w-6xl mx-auto">
        
        {/* Botón de volver */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00D084] transition-colors mb-12 uppercase tracking-widest text-xs font-bold"
        >
          <ArrowLeft size={16} />
          {language === 'es' ? 'Volver al Inicio' : 'Back to Home'}
        </Link>

        {/* Título de la página */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold mb-12"
        >
          {language === 'es' ? 'Archivo de Proyectos' : 'Project Archive'}
        </motion.h1>

        {/* Grilla simple */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((proj: any, i: number) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="bg-[#161616] border border-white/5 rounded-lg p-6 hover:border-[#00D084]/30 hover:bg-[#1a1a1a] transition-all duration-300 flex flex-col h-full"
            >
              {/* Encabezado e Iconos de Link */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-['Space_Grotesk'] text-lg font-bold text-white">
                  {proj.title}
                </h3>
                <div className="flex gap-2">
                  {proj.linkGitHub && (
                    <a href={proj.linkGitHub} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                      <Github size={18} />
                    </a>
                  )}
                  {proj.link && (
                    <a href={proj.link} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-[#00D084] transition-colors">
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </div>

              {/* Subtítulo y Descripción */}
              <div className="text-[#00D084]/60 text-xs mb-3 font-mono">{proj.subtitle}</div>
              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                {proj.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {proj.tags.map((tag: string) => (
                  <span key={tag} className="bg-[#121212] border border-white/5 text-gray-500 rounded px-2 py-1 text-[10px] uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}