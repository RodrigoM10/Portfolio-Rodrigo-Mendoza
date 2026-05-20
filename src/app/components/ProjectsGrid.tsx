import { motion } from "motion/react";
import { Link } from "react-router";
import { AreaChart, Area, ResponsiveContainer, BarChart, Bar, XAxis } from "recharts";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";
import { portfolioData } from "../portfolioData";

// ─── Card Visual Components──────────────────

function TelemetryVisual() {
  const data = [
    { t: "00:00", q: 240, l: 110 }, { t: "04:00", q: 385, l: 85 },
    { t: "08:00", q: 590, l: 70 }, { t: "12:00", q: 720, l: 60 },
    { t: "16:00", q: 810, l: 55 }, { t: "20:00", q: 650, l: 72 },
    { t: "24:00", q: 480, l: 90 },
  ];
  return (
    <div className="relative w-full h-full bg-[#0d1810] rounded-t-sm overflow-hidden p-3">
      {/* BigQuery-style header bar */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-sm bg-[#1A73E8] flex items-center justify-center">
            <span style={{ fontSize: "8px", color: "white", fontWeight: "bold" }}>BQ</span>
          </div>
          <span className="font-['Inter'] text-[#00D084]" style={{ fontSize: "9px" }}>digitalTwin.daily_metrics</span>
        </div>
        <span className="font-['Inter'] text-gray-600" style={{ fontSize: "8px" }}>LIVE</span>
      </div>

      {/* Metrics row */}
      <div className="grid grid-cols-3 gap-1.5 mb-2.5">
        {[
          { label: "Queries/hr", val: "8.1K" },
          { label: "Avg Latency", val: "55ms" },
          { label: "Cost/day", val: "$0.18" },
        ].map((m) => (
          <div key={m.label} className="bg-[#111e15] rounded px-1.5 py-1">
            <div className="font-['Space_Grotesk'] text-[#00D084]" style={{ fontSize: "11px", fontWeight: 600 }}>{m.val}</div>
            <div className="font-['Inter'] text-gray-600" style={{ fontSize: "7px" }}>{m.label}</div>
          </div>
        ))}
      </div>

      {/* Chart */}
      <div className="h-20">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 2, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="qGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00D084" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#00D084" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="lGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#5B9BD5" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#5B9BD5" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="q" stroke="#00D084" fill="url(#qGrad)" strokeWidth={1.5} dot={false} />
            <Area type="monotone" dataKey="l" stroke="#5B9BD5" fill="url(#lGrad)" strokeWidth={1} dot={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,208,132,0.02) 3px, rgba(0,208,132,0.02) 4px)" }} />
    </div>
  );
}

function ReactorVisual() {
  return (
    <div className="relative w-full h-full bg-[#13130e] rounded-t-sm overflow-hidden flex items-center justify-center p-3">
      <svg viewBox="0 0 260 200" className="w-full h-full max-h-[220px]">
        <line x1="0" y1="120" x2="260" y2="120" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="0.5" />
        <line x1="0" y1="140" x2="260" y2="140" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="0.5" />
        <ellipse cx="130" cy="162" rx="46" ry="14" fill="#1E1A0A" stroke="#E8965A" strokeOpacity="0.5" strokeWidth="0.75" />
        <rect x="84" y="78" width="92" height="84" fill="#1A1808" stroke="#E8965A" strokeOpacity="0.3" strokeWidth="0.75" />
        <ellipse cx="130" cy="78" rx="46" ry="14" fill="#252108" stroke="#E8965A" strokeOpacity="0.55" strokeWidth="0.75" />
        <ellipse cx="130" cy="95" rx="30" ry="9" fill="url(#reactorGlow)" />
        <rect x="50" y="95" width="34" height="7" rx="2" fill="#111" stroke="#00D084" strokeOpacity="0.6" strokeWidth="0.75" />
        <circle cx="50" cy="98" r="5" fill="#0d1810" stroke="#00D084" strokeOpacity="0.7" strokeWidth="0.75" />
        <text x="40" y="88" fill="#00D084" fillOpacity="0.7" fontFamily="monospace" fontSize="7">FEED</text>
        <rect x="176" y="95" width="34" height="7" rx="2" fill="#111" stroke="#E8965A" strokeOpacity="0.6" strokeWidth="0.75" />
        <circle cx="210" cy="98" r="5" fill="#1a1000" stroke="#E8965A" strokeOpacity="0.7" strokeWidth="0.75" />
        <text x="202" y="88" fill="#E8965A" fillOpacity="0.7" fontFamily="monospace" fontSize="7">OUT</text>
        <rect x="118" y="40" width="24" height="38" rx="2" fill="#151510" stroke="#E8965A" strokeOpacity="0.4" strokeWidth="0.75" />
        <rect x="114" y="38" width="32" height="6" rx="1" fill="#1a1808" stroke="#E8965A" strokeOpacity="0.5" strokeWidth="0.75" />
        {[0, 5, 10, 15, 20].map((i) => (
          <line key={i} x1="121" y1={50 + i} x2="139" y2={50 + i} stroke="#E8965A" strokeOpacity="0.15" strokeWidth="0.5" />
        ))}
        <rect x="4" y="10" width="80" height="44" rx="2" fill="rgba(0,0,0,0.7)" stroke="#00D084" strokeOpacity="0.3" strokeWidth="0.5" />
        <text x="8" y="22" fill="#5B9BD5" fontFamily="monospace" fontSize="5.5">def simulate(T, P, F):</text>
        <text x="12" y="31" fill="#00D084" fontFamily="monospace" fontSize="5">  X = conversion(T,P)</text>
        <text x="12" y="40" fill="#E8965A" fontFamily="monospace" fontSize="5">  H = enthalpy(F)</text>
        <text x="12" y="49" fill="#fff" fontFamily="monospace" fontSize="5" fillOpacity="0.5">  return X, H</text>
        <rect x="178" y="130" width="66" height="36" rx="2" fill="rgba(0,0,0,0.75)" stroke="#E8965A" strokeOpacity="0.4" strokeWidth="0.5" />
        <text x="182" y="143" fill="#E8965A" fontFamily="monospace" fontSize="5.5">T: 423.6 K</text>
        <text x="182" y="153" fill="#00D084" fontFamily="monospace" fontSize="5.5">P: 2.4 atm</text>
        <text x="182" y="163" fill="#5B9BD5" fontFamily="monospace" fontSize="5.5">X: 0.847</text>
        <defs>
          <radialGradient id="reactorGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E8965A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#E8965A" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function AutomationVisual() {
  const steps = [
    { label: "ERP Input", color: "#5B9BD5" }, { label: "Validate", color: "#00D084" },
    { label: "Transform", color: "#00D084" }, { label: "Route", color: "#E8965A" },
    { label: "Invoice", color: "#A855F7" },
  ];
  return (
    <div className="relative w-full h-full bg-[#0d0d14] rounded-t-sm overflow-hidden p-4 flex flex-col justify-center">
      <div className="flex items-center gap-1.5 mb-4">
        <div className="w-2 h-2 rounded-full bg-red-500/70" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
        <div className="w-2 h-2 rounded-full bg-green-500/70" />
        <span className="font-['Inter'] text-gray-600 ml-2" style={{ fontSize: "8px" }}>pipeline.py — running</span>
      </div>
      <div className="flex items-center gap-0 w-full justify-center">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="rounded px-2 py-1.5 border" style={{ background: `${step.color}10`, borderColor: `${step.color}40`, minWidth: "46px" }}>
                <div className="font-['Inter'] text-center" style={{ fontSize: "7px", color: step.color }}>{step.label}</div>
              </div>
              <div className="w-px h-3 mt-1" style={{ background: `${step.color}30` }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: step.color, opacity: 0.6 }} />
            </div>
            {i < steps.length - 1 && (
              <div className="flex items-center mx-0.5 mb-5">
                <div className="w-4 h-px" style={{ background: `${step.color}50` }} />
                <div style={{ width: 0, height: 0, borderTop: "3px solid transparent", borderBottom: "3px solid transparent", borderLeft: `4px solid ${steps[i + 1].color}60` }} />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-white/5 grid grid-cols-3 gap-2">
        {[
          { val: "14,200", lbl: "Invoices/mo" }, { val: "99.8%", lbl: "Accuracy" }, { val: "−62%", lbl: "Manual work" },
        ].map((s) => (
          <div key={s.lbl} className="text-center">
            <div className="font-['Space_Grotesk'] text-[#00D084]" style={{ fontSize: "11px", fontWeight: 600 }}>{s.val}</div>
            <div className="font-['Inter'] text-gray-600" style={{ fontSize: "7px" }}>{s.lbl}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 space-y-1">
        {[
          { text: "[OK] Batch #8821 processed — 342 orders", color: "#00D084" },
          { text: "[WARN] 2 duplicates flagged, auto-resolved", color: "#E8965A" },
          { text: "[OK] Invoice batch dispatched to SAP", color: "#00D084" },
        ].map((l, i) => (
          <div key={i} className="font-mono" style={{ fontSize: "7px", color: l.color, opacity: 0.7 }}>{l.text}</div>
        ))}
      </div>
    </div>
  );
}

function B2BDashboardVisual() {
  const revenueData = [
    { m: "Jan", v: 42 }, { m: "Feb", v: 58 }, { m: "Mar", v: 51 },
    { m: "Apr", v: 74 }, { m: "May", v: 89 }, { m: "Jun", v: 95 },
  ];
  return (
    <div className="relative w-full h-full bg-[#0d0f13] rounded-t-sm overflow-hidden p-3">
      <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-white/5">
        <div className="w-2.5 h-2.5 rounded-sm bg-[#00D084]/30" />
        <span className="font-['Space_Grotesk'] text-white" style={{ fontSize: "8px" }}>Enterprise Portal</span>
        <div className="flex-1" />
        {["Dashboard", "Orders", "Analytics"].map((t) => (
          <span key={t} className="font-['Inter'] text-gray-600" style={{ fontSize: "7px" }}>{t}</span>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-1.5 mb-2.5">
        {[
          { label: "MRR", val: "$124K", delta: "+12%" }, { label: "Clients", val: "84", delta: "+3" },
          { label: "Orders", val: "1.4K", delta: "+8%" }, { label: "NPS", val: "72", delta: "+5" },
        ].map((k) => (
          <div key={k.label} className="bg-[#111318] border border-white/5 rounded px-1.5 py-1.5">
            <div className="font-['Inter'] text-gray-500" style={{ fontSize: "6.5px" }}>{k.label}</div>
            <div className="font-['Space_Grotesk'] text-white" style={{ fontSize: "10px", fontWeight: 600 }}>{k.val}</div>
            <div className="font-['Inter'] text-[#00D084]" style={{ fontSize: "6.5px" }}>{k.delta}</div>
          </div>
        ))}
      </div>
      <div className="h-14">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={revenueData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }} barSize={8}>
            <XAxis dataKey="m" tick={{ fontSize: 6, fill: "#555" }} axisLine={false} tickLine={false} />
            <Bar dataKey="v" fill="#00D084" opacity={0.7} radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-1.5 space-y-1">
        <div className="grid grid-cols-4 gap-1">
          {["Client", "Status", "Amount", "Date"].map((h) => (
            <div key={h} className="font-['Inter'] text-gray-600" style={{ fontSize: "6px", textTransform: "uppercase" }}>{h}</div>
          ))}
        </div>
        {[
          ["Petrochem SA", "Active", "$18,400", "May 18"],
          ["IndustraTech", "Pending", "$9,200", "May 19"],
          ["Refinery Co.", "Active", "$31,000", "May 17"],
        ].map((row, i) => (
          <div key={i} className="grid grid-cols-4 gap-1 py-0.5 border-t border-white/3">
            {row.map((cell, j) => (
              <div key={j} className="font-['Inter'] truncate"
                style={{ fontSize: "6.5px", color: j === 1 ? (cell === "Active" ? "#00D084" : "#E8965A") : "#888" }}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Diccionario de Visuales ─────────────────────────────────────────────────
// Conectamos el ID que pusimos en los datos con el componente React correspondiente
const projectVisuals: Record<string, React.FC> = {
  telemetry: TelemetryVisual,
  reactor: ReactorVisual,
  automation: AutomationVisual,
  b2b: B2BDashboardVisual,
};

// ─── Main Component ───────────────────────────────────────────────────────────

export function ProjectsGrid() {
  const { language } = useLanguage();
  const currentData = portfolioData[language].projectsSection;

  return (
    <section id="projects" className="bg-[#0f0f0f] py-28 px-6">
      <div className="max-w-6xl mx-auto">
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
          className="font-['Space_Grotesk'] text-white mb-12 leading-tight"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 600 }}
        >
          {currentData.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-5">
          {currentData.items.map((proj, i) => {
            const Visual = projectVisuals[proj.id];
            
            return (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative bg-[#161616] border border-white/5 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-[#00D084]/40 hover:shadow-[0_0_40px_rgba(0,208,132,0.08)]"
              >
                {/* Visual area */}
                <div className="h-52 relative overflow-hidden">
                  {Visual && <Visual />}
                  <div className="absolute inset-0 bg-[#00D084]/0 group-hover:bg-[#00D084]/3 transition-all duration-300" />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-2">
                      {proj.link && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-[#00D084]/20 border border-[#00D084]/40 hover:bg-[#00D084]/30 flex items-center justify-center transition-all duration-200 hover:scale-105"
                          title="Ver proyecto en vivo"
                        >
                          <ArrowUpRight size={12} className="text-[#00D084]" />
                        </a>
                      )}
                      {proj.linkGitHub && (
                        <a
                          href={proj.linkGitHub}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-[#00D084]/20 border border-[#00D084]/40 hover:bg-[#00D084]/30 flex items-center justify-center transition-all duration-200 hover:scale-105"
                          title="Ver codigo"
                        >
                          <FaGithub  size={12} className="text-[#00D084]" />
                        </a>
                      )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3
                      className="font-['Space_Grotesk'] text-white group-hover:text-[#00D084] transition-colors duration-200"
                      style={{ fontSize: "1rem", fontWeight: 600 }}
                    >
                      {proj.title}
                    </h3>
                  </div>
                  <div
                    className="font-['Inter'] text-[#00D084]/60 mb-3"
                    style={{ fontSize: "0.72rem" }}
                  >
                    {proj.subtitle}
                  </div>
                  <p
                    className="font-['Inter'] text-gray-500 leading-relaxed mb-4"
                    style={{ fontSize: "0.82rem" }}
                  >
                    {proj.description}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag) => (
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <Link
            to="/allProjects"
            className="group flex items-center gap-2 font-['Space_Grotesk'] text-gray-400 hover:text-[#00D084] transition-colors duration-300 uppercase tracking-widest text-sm border border-white/5 hover:border-[#00D084]/30 px-8 py-3 rounded-full bg-[#161616]"
          >
            {language === 'es' ? 'Ver todos los proyectos' : 'View all projects'}
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}