import { Code, ExternalLink, MapPin, Palette, Smartphone } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-slate-900 mb-16">
          About{" "}
          <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Creating Digital Experiences
            </h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Hi, I’m Promise
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I’m a passionate software engineer with a keen eye for design and
              a love for writing clean, efficient code. I specialise in building
              scalable, data-driven applications that bring together full-stack
              development and machine learning. With expertise in modern
              JavaScript frameworks and a strong focus on user experience, I
              create web applications that are not only functional but also
              beautiful to use.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I hold a Bachelor’s degree in Computer Science and a Master’s
              degree in Artificial Intelligence, which fuel my drive to design
              smart, innovative solutions.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Beyond coding, I enjoy solving complex problems, collaborating
              with diverse teams, and constantly exploring new technologies. My
              ultimate goal is to build software that makes a real impact on how
              people interact with technology.
            </p>
            <div className="flex items-center text-slate-600 mb-4">
              <MapPin className="w-5 h-5 mr-2 text-purple-600" />
              <span>Available for remote work worldwide</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-purple-100 shadow-sm shadow-purple-50/20 hover:border-purple-200 transition-all duration-300">
              <Code className="w-8 h-8 text-purple-600 mb-4" />
              <h4 className="text-slate-900 font-semibold mb-2">Clean Code</h4>
              <p className="text-slate-500 text-sm">
                Writing maintainable, scalable code following best practices
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-purple-100 shadow-sm shadow-purple-50/20 hover:border-purple-200 transition-all duration-300">
              <Palette className="w-8 h-8 text-fuchsia-600 mb-4" />
              <h4 className="text-slate-900 font-semibold mb-2">UI/UX Focus</h4>
              <p className="text-slate-500 text-sm">
                Creating intuitive interfaces with great user experience
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-purple-100 shadow-sm shadow-purple-50/20 hover:border-purple-200 transition-all duration-300">
              <Smartphone className="w-8 h-8 text-purple-600 mb-4" />
              <h4 className="text-slate-900 font-semibold mb-2">Responsive</h4>
              <p className="text-slate-500 text-sm">
                Building applications that work perfectly on all devices
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-purple-100 shadow-sm shadow-purple-50/20 hover:border-purple-200 transition-all duration-300">
              <ExternalLink className="w-8 h-8 text-fuchsia-600 mb-4" />
              <h4 className="text-slate-900 font-semibold mb-2">Performance</h4>
              <p className="text-slate-500 text-sm">
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
