import { useState } from "react";
import skills, { skillCategories, featuredHighlights } from "../assets/skills";
import { Sparkles, Code2, Cpu, Database, CheckCircle2, Terminal, ArrowUpRight } from "lucide-react";

const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-transparent via-blue-50/20 to-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/60 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={13} />
            <span>Capabilities & Core Stack</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 mb-4">
            Engineered for scale.{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Crafted with precision.
            </span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg">
            A battle-tested technical arsenal combining high-performance modern web & mobile engineering with applied artificial intelligence.
          </p>
        </div>

        {/* Featured Bento Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {featuredHighlights.map((feat, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-3xl bg-white border ${feat.borderAccent} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden`}
            >
              {/* Subtle background gradient accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feat.color} opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none`} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/80 border border-black/5 ${feat.accent}`}>
                    {feat.tag}
                  </span>
                  {idx === 0 && <Code2 size={20} className={feat.accent} />}
                  {idx === 1 && <Cpu size={20} className={feat.accent} />}
                  {idx === 2 && <Database size={20} className={feat.accent} />}
                </div>

                <h3 className="text-xl font-bold text-zinc-950 mb-2">
                  {feat.title}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                  {feat.description}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-zinc-100/80">
                <div className="flex flex-wrap gap-1.5">
                  {feat.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-white text-zinc-800 border border-zinc-200/80 shadow-xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Apple Segmented Control for Skills */}
        <div className="flex justify-center mb-10 overflow-x-auto py-2">
          <div className="inline-flex p-1 bg-zinc-200/60 rounded-full backdrop-blur-md border border-zinc-300/50 shadow-inner">
            {skillCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-white text-zinc-950 shadow-sm font-semibold scale-100"
                      : "text-zinc-600 hover:text-zinc-950 hover:bg-white/40"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs hover:shadow-md hover:border-blue-300/80 transition-all duration-200 group flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-100 p-2.5 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-50/50 transition-all duration-300">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "block";
                  }}
                />
                <Terminal size={20} className="text-blue-600 hidden" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="font-bold text-zinc-900 text-sm sm:text-base truncate group-hover:text-blue-700 transition-colors">
                    {skill.name}
                  </h4>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border shrink-0 ${
                    skill.badge === "Core Stack"
                      ? "bg-blue-50 text-blue-700 border-blue-200/70"
                      : skill.badge === "Specialized" || skill.badge === "Research"
                      ? "bg-indigo-50 text-indigo-700 border-indigo-200/70"
                      : skill.badge === "Production"
                      ? "bg-sky-50 text-sky-700 border-sky-200/70"
                      : "bg-zinc-100 text-zinc-700 border-zinc-200/70"
                  }`}>
                    {skill.badge}
                  </span>
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2">
                  {skill.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Pill */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-zinc-200/80 shadow-xs text-xs text-zinc-600">
            <CheckCircle2 size={14} className="text-emerald-600" />
            <span>Always learning and adapting to modern architectures, LLMs, and distributed systems.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
