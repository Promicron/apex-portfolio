import { Code, ExternalLink, MapPin, Palette, Smartphone } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          About{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Creating Digital Experiences
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate software engineer with a keen eye for design and
              a love for clean, efficient code. I specialise in building
              scalable, data-driven applications that bridge full-stack
              development and machine learning. With expertise in modern
              JavaScript frameworks and a deep understanding of user experience
              principles, I create web applications that are both beautiful and
              functional.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Beyond coding, I’m passionate about solving complex problems,
              collaborating across teams, and continuously learning new
              technologies. My goal is to create innovative software solutions
              that enhance how people interact with technology.
            </p>
            <div className="flex items-center text-gray-300 mb-4">
              <MapPin className="w-5 h-5 mr-2 text-purple-400" />
              <span>Available for remote work worldwide</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <Code className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="text-white font-semibold mb-2">Clean Code</h4>
              <p className="text-gray-400 text-sm">
                Writing maintainable, scalable code following best practices
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <Palette className="w-8 h-8 text-pink-400 mb-4" />
              <h4 className="text-white font-semibold mb-2">UI/UX Focus</h4>
              <p className="text-gray-400 text-sm">
                Creating intuitive interfaces with great user experience
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <Smartphone className="w-8 h-8 text-purple-400 mb-4" />
              <h4 className="text-white font-semibold mb-2">Responsive</h4>
              <p className="text-gray-400 text-sm">
                Building applications that work perfectly on all devices
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <ExternalLink className="w-8 h-8 text-pink-400 mb-4" />
              <h4 className="text-white font-semibold mb-2">Performance</h4>
              <p className="text-gray-400 text-sm">
                Optimizing for speed and efficient user experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
