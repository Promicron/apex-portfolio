import { ChevronDown, Code } from "lucide-react";

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-50 h-50 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
            {/* <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
              <Code size={48} className="text-purple-400" />
            </div> */}
            <img
              src="/images/tuxx2.jpg"
              alt="Profile"
              className="w-full h-full rounded-full object-cover object-top"
              onError={(e) => {
                // Fallback to icon if image fails to load
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            <div className="w-full h-full rounded-full bg-slate-900 items-center justify-center hidden">
              <Code size={48} className="text-purple-400" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Software
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Engineer
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Designing smart, data-driven systems and seamless user experiences
            through code, creativity, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="animate-bounce">
          <ChevronDown className="w-6 h-6 text-purple-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
