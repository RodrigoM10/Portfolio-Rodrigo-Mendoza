import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { portfolioData } from "../portfolioData";

// Aquí deberías reemplazar los "#" con tus links reales a tu LinkedIn y GitHub
const socialLinks = [
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/rodrigo-mendoza10/",
    color: "#0A66C2",
  },
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/RodrigoM10",
    color: "#e0e0e0",
  },
  {
    label: "Email",
    icon: Mail,
    href: "rodrigomendozar10@gmail.com", 
    color: "#00D084",
  },
];

export function FooterSection() {
  const { language } = useLanguage();
  const currentData = portfolioData[language].contactSection;
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#0d0d0d] border-t border-white/5">
      {/* Contact CTA */}
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span
            className="font-['Inter'] text-[#00D084] uppercase tracking-[0.25em] block mb-5"
            style={{ fontSize: "11px" }}
          >
            {currentData.label}
          </span>
          <h2
            className="font-['Space_Grotesk'] text-white mb-5 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            {currentData.titleLine1}
            <br />
            <span className="text-[#00D084]">{currentData.titleHighlight}</span>
          </h2>
          <p
            className="font-['Inter'] text-gray-500 max-w-md mx-auto mb-10 leading-relaxed"
            style={{ fontSize: "0.9rem" }}
          >
            {currentData.description}
          </p>

          {/* Primary CTA */}
          <motion.a
            href={socialLinks[2].href} // Toma el email del array socialLinks
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 font-['Space_Grotesk'] bg-[#00D084] hover:bg-[#00b870] text-[#0a0a0a] px-10 py-4 rounded-sm transition-colors duration-200 shadow-[0_0_40px_rgba(0,208,132,0.25)] hover:shadow-[0_0_60px_rgba(0,208,132,0.4)] mb-12"
            style={{ fontSize: "0.85rem", letterSpacing: "0.08em" }}
          >
            {currentData.cta}
            <ArrowUpRight size={16} />
          </motion.a>

          {/* Social links */}
          <div className="flex items-center justify-center gap-5">
            {socialLinks.map(({ label, icon: Icon, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="group flex items-center gap-2 border border-white/8 hover:border-white/20 rounded-full px-4 py-2 transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <Icon
                  size={14}
                  className="transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                />
                <span
                  className="font-['Inter'] text-gray-500 group-hover:text-white transition-colors duration-200"
                  style={{ fontSize: "0.75rem" }}
                >
                  {label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span
            className="font-['Space_Grotesk'] text-[#00D084] font-bold"
            style={{ fontSize: "0.85rem" }}
          >
            &lt;RM /&gt;
          </span>
          <span
            className="font-['Inter'] text-gray-600"
            style={{ fontSize: "0.75rem" }}
          >
            © {currentYear} {currentData.copyright}
          </span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D084] animate-pulse" />
            <span
              className="font-['Inter'] text-[#00D084] opacity-80 uppercase tracking-widest"
              style={{ fontSize: "0.65rem" }}
            >
              {currentData.status}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}