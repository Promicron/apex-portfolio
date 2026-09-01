import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

const Navigation = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Capabilities" },
    { id: "projects", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 transition-all duration-300 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between w-full max-w-4xl px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
          isScrolled
            ? "glass-nav shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-black/5"
            : "bg-white/80 backdrop-blur-md shadow-sm border border-zinc-200/60"
        }`}
      >
        {/* Brand */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 group cursor-pointer focus:outline-none"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm shadow-sm group-hover:scale-105 transition-transform duration-300">
            P
          </div>
          <div className="flex flex-col text-left">
            <span className="font-semibold text-sm tracking-tight text-zinc-900 leading-none">
              Promise
            </span>
            <span className="text-[10px] text-zinc-500 tracking-wider font-mono">
              ENGINEER
            </span>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 bg-zinc-100/70 p-1 rounded-full border border-black/5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-white text-zinc-900 shadow-sm font-semibold"
                    : "text-zinc-600 hover:text-zinc-950 hover:bg-white/40"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Availability Pill & Contact CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {/* <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-700 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available</span>
          </div> */}
          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-1 text-xs font-semibold px-3.5 py-1.5 rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-all shadow-sm hover:shadow active:scale-95 cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={13} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-full text-zinc-700 hover:bg-zinc-100 transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-16 left-4 right-4 max-w-sm mx-auto glass-nav border border-black/5 rounded-3xl p-4 shadow-xl md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "bg-blue-50 text-blue-700 font-semibold"
                    : "text-zinc-700 hover:bg-zinc-100"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 mt-2 border-t border-zinc-100 flex items-center justify-between px-2">
              <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Open for opportunities</span>
              </div>
              <button
                onClick={() => {
                  scrollToSection("contact");
                  setMobileMenuOpen(false);
                }}
                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-zinc-900 text-white"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
