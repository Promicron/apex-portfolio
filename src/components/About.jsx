import { GraduationCap, Code2, Brain, Sparkles, MapPin, CheckCircle, Award, Compass, Zap } from "lucide-react";

const About = () => {
  const pillars = [
    {
      icon: Code2,
      title: "Clean Architecture",
      desc: "Writing modular, type-safe, and self-documenting code built for longevity and scale.",
      color: "text-purple-600",
      bg: "bg-purple-50"
    },
    {
      icon: Brain,
      title: "Applied AI & ML",
      desc: "Leveraging neural networks, LLM toolchains, and computer vision to build intelligent apps.",
      color: "text-indigo-600",
      bg: "bg-indigo-50"
    },
    {
      icon: Sparkles,
      title: "Apple-Grade UX",
      desc: "Obsessing over micro-interactions, responsive fluidity, and intuitive visual ergonomics.",
      color: "text-fuchsia-600",
      bg: "bg-fuchsia-50"
    },
    {
      icon: Zap,
      title: "Performance First",
      desc: "Minimizing latency and bundle bloat with efficient state management and optimized queries.",
      color: "text-amber-600",
      bg: "bg-amber-50"
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/60 border border-purple-200/60 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Compass size={13} />
            <span>Background & Engineering Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 mb-4">
            Building software with{" "}
            <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
              curiosity & purpose.
            </span>
          </h2>
          <p className="text-zinc-600 text-base sm:text-lg">
            Where deep algorithmic fundamentals converge with human-centered product engineering.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-12 gap-6">
          {/* Main Story Bento (7 cols) */}
          <div className="md:col-span-7 rounded-3xl bg-white border border-zinc-200/80 p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-600 mb-4">
                <Sparkles size={15} />
                <span>About Promise</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 mb-6 leading-snug">
                Passionate about bridging complex backend systems with fluid digital interfaces.
              </h3>
              <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
                <p>
                  I’m a software engineer who specializes in building scalable, data-driven applications that unite full-stack development and machine learning.
                </p>
                <p>
                  With expertise spanning modern JavaScript/TypeScript ecosystems, Python AI pipelines, and native mobile development, I engineer systems that are not only robust under the hood, but also delightful to interact with.
                </p>
                <p>
                  Beyond writing code, I thrive on tackling ambiguous problems, designing architectural abstractions, and staying on the bleeding edge of intelligent software.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-100 flex items-center justify-between">
              <div className="flex items-center text-xs font-medium text-zinc-600 gap-2">
                <MapPin size={15} className="text-purple-600" />
                <span>Remote Worldwide • London / International Timezones</span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Open to roles
              </span>
            </div>
          </div>

          {/* Right Column (5 cols) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Education Bento Card */}
            <div className="rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 text-white p-7 sm:p-8 shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-6">
                <GraduationCap size={16} />
                <span>Academic Foundation</span>
              </div>

              <div className="space-y-6">
                <div className="border-l-2 border-purple-500/60 pl-4">
                  <span className="text-xs text-purple-300 font-mono">POSTGRADUATE</span>
                  <h4 className="text-base font-bold text-white mt-0.5">
                    Master of Science (MSc) in Artificial Intelligence
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Specialized in deep neural networks, computer vision & machine learning algorithms.
                  </p>
                </div>

                <div className="border-l-2 border-zinc-700 pl-4">
                  <span className="text-xs text-zinc-400 font-mono">UNDERGRADUATE</span>
                  <h4 className="text-base font-bold text-white mt-0.5">
                    Bachelor of Science (BSc) in Computer Science
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">
                    Strong grounding in algorithms, data structures, systems architecture & computation theory.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Principles Bento */}
            <div className="grid grid-cols-2 gap-3 flex-1">
              {pillars.map((p, i) => {
                const IconComponent = p.icon;
                return (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white border border-zinc-200/80 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                  >
                    <div className={`w-9 h-9 rounded-xl ${p.bg} ${p.color} flex items-center justify-center mb-3`}>
                      <IconComponent size={18} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-950 mb-1">{p.title}</h4>
                      <p className="text-[11px] text-zinc-500 leading-snug">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
