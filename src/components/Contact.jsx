import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-50/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
          Let's{" "}
          <span className="bg-gradient-to-r from-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            Connect
          </span>
        </h2>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects.
          Let's discuss how we can work together to bring your ideas to life.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="mailto:allenpromise@outlook.com"
            className="bg-white rounded-lg p-6 border border-purple-100 shadow-sm shadow-purple-50/20 hover:border-purple-300 hover:shadow-md transition-all duration-300 group"
          >
            <Mail className="w-12 h-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-slate-900 font-semibold mb-2">Email</h3>
            <p className="text-slate-600">allenpromise@outlook.com</p>
          </a>

          <a
            href="https://linkedin.com/in/ileri-odusanya"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg p-6 border border-purple-100 shadow-sm shadow-purple-50/20 hover:border-purple-300 hover:shadow-md transition-all duration-300 group"
          >
            <Linkedin className="w-12 h-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-slate-900 font-semibold mb-2">LinkedIn</h3>
            <p className="text-slate-600">Connect with me</p>
          </a>

          <a
            href="https://github.com/Promicron"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg p-6 border border-purple-100 shadow-sm shadow-purple-50/20 hover:border-purple-300 hover:shadow-md transition-all duration-300 group"
          >
            <Github className="w-12 h-12 text-purple-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-slate-900 font-semibold mb-2">GitHub</h3>
            <p className="text-slate-600">View my code</p>
          </a>
        </div>

        <div className="bg-white rounded-lg p-8 border border-purple-100 shadow-sm shadow-purple-50/20">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            Ready to start a project?
          </h3>
          <p className="text-slate-600 mb-6">
            I'm currently available for freelance work and full-time
            opportunities.
          </p>
          <a
            href="mailto:allenpromise@outlook.com"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-600/20 transition-all duration-200 transform hover:scale-105"
          >
            <Mail className="w-5 h-5 mr-2" />
            Send Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
