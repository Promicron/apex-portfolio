import { useState } from "react";
import projects, { projectCategories } from "../assets/projects";
import {
  Github,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Layers,
  Activity,
  Terminal,
  Cpu,
  Smartphone,
  Globe,
  X,
  CheckCircle,
  Eye
} from "lucide-react";

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === "all") return true;
    if (activeCategory === "featured") return p.featured;
    return p.category === activeCategory;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-gradient-to-bl from-purple-200/20 via-fuchsia-100/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/60 border border-purple-200/60 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={13} />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 mb-4">
            Products engineered for{" "}
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
              impact.
            </span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg">
            From high-throughput web platforms to deep learning research and real-time mobile apps.
          </p>
        </div>

        {/* Apple Segmented Control Filter */}
        <div className="flex justify-center mb-14 overflow-x-auto py-2">
          <div className="inline-flex p-1 bg-zinc-200/60 rounded-full backdrop-blur-md border border-zinc-300/50 shadow-inner">
            {projectCategories.map((cat) => {
              const count = projects.filter((p) => {
                if (cat.id === "all") return true;
                if (cat.id === "featured") return p.featured;
                return p.category === cat.id;
              }).length;

              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? "bg-white text-zinc-950 shadow-sm font-semibold"
                      : "text-zinc-600 hover:text-zinc-950 hover:bg-white/40"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? "bg-purple-100 text-purple-700 font-bold"
                        : "bg-zinc-300/60 text-zinc-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;

            return (
              <div
                key={project.id}
                className={`group rounded-3xl bg-white border border-zinc-200/80 shadow-sm hover:shadow-2xl hover:border-purple-300/80 transition-all duration-300 flex flex-col justify-between overflow-hidden relative ${
                  isFeatured && activeCategory === "all" ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Visual Preview Container */}
                <div className="relative overflow-hidden bg-zinc-950/5 border-b border-zinc-100">
                  {/* macOS-style Window Titlebar */}
                  <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-100/80 border-b border-zinc-200/60 backdrop-blur-sm">
                    <div className="flex items-center space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
                    </div>
                    <div className="text-[11px] font-mono text-zinc-500 truncate max-w-[200px]">
                      {project.title.toLowerCase().replace(/\s+/g, "-")}.app
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-zinc-200/70 text-[10px] font-semibold text-zinc-700">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  {/* Project Image or Custom Terminal Graphics */}
                  {project.image ? (
                    <div
                      className={`relative overflow-hidden cursor-pointer ${
                        isFeatured && activeCategory === "all" ? "h-64 sm:h-72" : "h-48 sm:h-56"
                      }`}
                      onClick={() => setSelectedProject(project)}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full">
                          <Eye size={13} />
                          <span>View Overview</span>
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* Custom Apple Terminal / Math Graphic Preview */
                    <div
                      className="h-48 sm:h-56 bg-zinc-950 p-5 font-mono text-xs text-zinc-300 flex flex-col justify-between cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="space-y-1.5">
                        <div className="text-purple-400 flex items-center gap-2 font-semibold">
                          <Terminal size={14} />
                          <span>{project.codeType === "physics_ai" ? "quantum_solver.py" : "football_ml_forecast.py"}</span>
                        </div>
                        <p className="text-zinc-400 text-[11px]">
                          {project.codeType === "physics_ai"
                            ? "$ python -m chomp.optimize --schrodinger-eq --iter 1000"
                            : "$ python -m ml.pipeline --train-elo --predict-match-matrix"}
                        </p>
                        <div className="text-emerald-400 text-[11px] pt-1">
                          ✓ Model converged • Loss: 0.0024 • R²: 0.94
                        </div>
                      </div>
                      <div className="pt-2 border-t border-zinc-800 flex justify-between items-center text-[10px] text-zinc-500">
                        <span>Python / NumPy / Scientific AI</span>
                        <span className="text-purple-400 underline">Click to inspect</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between mb-1.5">
                      <h3 className="text-xl font-bold text-zinc-950 group-hover:text-purple-700 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-100">
                        {project.category.toUpperCase()}
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                      {project.subtitle}
                    </p>

                    <p className="text-zinc-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Stats Highlights */}
                    {project.stats && (
                      <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-2xl bg-zinc-50 border border-zinc-100 mb-4">
                        {project.stats.map((st, i) => (
                          <div key={i} className="text-center">
                            <span className="block text-[10px] uppercase font-semibold text-zinc-400 truncate">
                              {st.label}
                            </span>
                            <span className="text-xs font-bold text-zinc-800 truncate block">
                              {st.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div>
                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-purple-50 text-purple-700">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center justify-between pt-3 border-t border-zinc-100">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-semibold text-zinc-600 hover:text-zinc-950 transition-colors flex items-center gap-1 cursor-pointer"
                      >
                        <span>Details</span>
                        <ArrowUpRight size={13} />
                      </button>

                      <div className="flex items-center gap-2">
                        {project.github && project.github !== "#" && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors"
                            title="Source Code"
                          >
                            <Github size={15} />
                          </a>
                        )}
                        {project.live && project.live !== "#" ? (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold shadow-sm transition-transform active:scale-95"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span>Live Demo</span>
                            <ExternalLink size={12} />
                          </a>
                        ) : (
                          project.github && project.github !== "#" && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-50 hover:bg-purple-100 text-purple-700 text-xs font-semibold transition-colors"
                            >
                              <span>View Code</span>
                              <Github size={13} />
                            </a>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Modal for Deep Dive */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden animate-in zoom-in-95 duration-200">
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 bg-zinc-50/50">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold">
                    {selectedProject.category.toUpperCase()}
                  </span>
                  <span className="text-xs text-zinc-500 font-mono">
                    {selectedProject.status}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 max-h-[75vh] overflow-y-auto">
                <h3 className="text-2xl font-bold text-zinc-950 mb-1">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-purple-600 mb-4">
                  {selectedProject.subtitle}
                </p>

                {selectedProject.image && (
                  <div className="rounded-2xl overflow-hidden mb-6 border border-zinc-200 max-h-64">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Architecture & Overview
                  </h4>
                  <p className="text-zinc-700 text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {selectedProject.highlight && (
                  <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 mb-6 flex items-start gap-3">
                    <Sparkles size={18} className="text-purple-600 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold text-purple-900 mb-0.5">Key Capability</h5>
                      <p className="text-xs text-purple-700">{selectedProject.highlight}</p>
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                    Technologies & Dependencies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 text-xs font-medium border border-zinc-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                  {selectedProject.live && selectedProject.live !== "#" && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-full bg-zinc-950 text-white text-center text-sm font-semibold hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      <span>Launch Live Demo</span>
                    </a>
                  )}
                  {selectedProject.github && selectedProject.github !== "#" && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-6 rounded-full bg-zinc-100 text-zinc-800 text-sm font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                    >
                      <Github size={16} />
                      <span>Source Repository</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
