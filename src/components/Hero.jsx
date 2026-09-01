import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Sparkles, Layers, Cpu } from "lucide-react";

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Apple-style ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[450px] bg-gradient-to-tr from-blue-200/40 via-indigo-100/30 to-cyan-100/25 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-2/3 left-1/4 w-[350px] h-[350px] bg-gradient-to-br from-blue-100/30 via-sky-100/20 to-transparent blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Profile Avatar with Apple-style ambient ring */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 opacity-60 blur-md group-hover:opacity-90 transition duration-500" />
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-white shadow-xl overflow-hidden">
            <img
              src="/images/tuxx2.jpg"
              alt="Promise"
              className="w-full h-full rounded-full object-cover object-top transition duration-500 group-hover:scale-105"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop";
              }}
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-white p-1.5 rounded-full shadow-md border border-zinc-100 text-blue-600">
            <Sparkles size={16} />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-950 mb-6 leading-[1.1] max-w-3xl">
          Crafting intelligent systems &{" "}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
            digital
          </span>{" "}
          experiences.
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-zinc-600 mb-10 max-w-2xl font-normal leading-relaxed">
          I build scalable web and mobile applications with React, TypeScript, and Python, fusing full-stack craftsmanship with machine learning intelligence.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
          <button
            onClick={() => scrollToSection("projects")}
            className="px-6 py-3 rounded-full bg-zinc-950 text-white font-medium text-sm hover:bg-zinc-800 transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Projects</span>
            <ArrowUpRight size={16} />
          </button>

          <button
            onClick={() => scrollToSection("skills")}
            className="px-6 py-3 rounded-full bg-white/90 text-zinc-800 border border-zinc-200/90 font-medium text-sm hover:bg-zinc-50 transition-all shadow-sm hover:shadow active:scale-95 flex items-center gap-2 cursor-pointer backdrop-blur-sm"
          >
            <Layers size={16} className="text-blue-600" />
            <span>Tech Stack</span>
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-3 rounded-full bg-blue-50 text-blue-700 border border-blue-200/70 font-medium text-sm hover:bg-blue-100/70 transition-all shadow-sm active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <Mail size={16} />
            <span>Get in Touch</span>
          </button>
        </div>

        {/* Floating Stat Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-2xl pt-4 border-t border-zinc-200/60">
          <div className="p-3 rounded-2xl bg-white/60 backdrop-blur-md border border-zinc-200/50 text-center">
            <span className="block text-xl font-bold text-zinc-900">MSc AI</span>
            <span className="text-xs text-zinc-500 font-medium">Artificial Intelligence</span>
          </div>
          <div className="p-3 rounded-2xl bg-white/60 backdrop-blur-md border border-zinc-200/50 text-center">
            <span className="block text-xl font-bold text-zinc-900">Full-Stack</span>
            <span className="text-xs text-zinc-500 font-medium">Web & Mobile Apps</span>
          </div>
          <div className="col-span-2 sm:col-span-1 p-3 rounded-2xl bg-white/60 backdrop-blur-md border border-zinc-200/50 text-center">
            <span className="block text-xl font-bold text-zinc-900">End-to-End</span>
            <span className="text-xs text-zinc-500 font-medium">Architecture & ML</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection("about")}
          className="mt-12 text-zinc-400 hover:text-zinc-700 transition-colors p-2 cursor-pointer animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
