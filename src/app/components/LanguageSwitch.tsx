import { useLanguage } from "../LanguageContext";


export function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="relative flex items-center bg-[#1E1E1E] border border-[#00D084]/30 rounded-full p-1 cursor-pointer transition-colors hover:border-[#00D084]/60"
      aria-label="Toggle language"
    >
      <div 
        className={`absolute h-6 w-8 bg-[#00D084] rounded-full transition-transform duration-300 ease-in-out ${
          language === 'en' ? 'translate-x-8' : 'translate-x-0'
        }`}
      />
      <span className={`relative z-10 w-8 text-center text-xs font-bold transition-colors duration-300 ${language === 'es' ? 'text-[#121212]' : 'text-gray-400'}`}>
        ES
      </span>
      <span className={`relative z-10 w-8 text-center text-xs font-bold transition-colors duration-300 ${language === 'en' ? 'text-[#121212]' : 'text-gray-400'}`}>
        EN
      </span>
    </button>
  );
}