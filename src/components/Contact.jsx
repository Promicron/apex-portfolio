import { useState } from "react";
import { Github, Linkedin, Mail, Copy, Check, ArrowUpRight, MessageSquare, Sparkles } from "lucide-react";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "allenpromise@outlook.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-t from-zinc-100/70 via-transparent to-transparent">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/60 border border-purple-200/60 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-4">
          <MessageSquare size={13} />
          <span>Get in Touch</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 mb-4">
          Let’s build something{" "}
          <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
            exceptional.
          </span>
        </h2>
        <p className="text-zinc-600 text-base sm:text-lg mb-12 max-w-xl mx-auto">
          Whether you're looking for a full-stack engineer, AI systems developer, or exploring a new venture—my inbox is always open.
        </p>

        {/* Apple Main Contact Bento Card */}
        <div className="rounded-3xl bg-white border border-zinc-200/80 p-8 sm:p-12 shadow-xl mb-12 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-purple-200/40 via-indigo-100/30 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 uppercase tracking-wider mb-1">
                <Sparkles size={14} />
                <span>Direct Inquiries</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-1">
                Start a Conversation
              </h3>
              <p className="text-sm text-zinc-500">
                Available for full-time engineering roles, high-impact contracts & consulting.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={handleCopy}
                className="px-4 py-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-semibold transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                <span>{copied ? "Copied to Clipboard!" : "Copy Email"}</span>
              </button>

              <a
                href={`mailto:${email}`}
                className="px-5 py-2.5 rounded-full bg-zinc-950 hover:bg-zinc-800 text-white text-xs font-semibold shadow-md transition-all active:scale-95 flex items-center gap-2"
              >
                <Mail size={14} />
                <span>Send Email</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Social Channels Bento Grid */}
          <div className="grid sm:grid-cols-3 gap-4 pt-8">
            <a
              href={`mailto:${email}`}
              className="p-5 rounded-2xl bg-zinc-50 hover:bg-purple-50/50 border border-zinc-200/70 hover:border-purple-200 transition-all duration-200 group block"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200/60 flex items-center justify-center text-purple-600 mb-3 shadow-xs group-hover:scale-110 transition-transform">
                <Mail size={18} />
              </div>
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-zinc-900">Email</h4>
                <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-purple-600 transition-colors" />
              </div>
              <p className="text-xs text-zinc-500 truncate mt-0.5">{email}</p>
            </a>

            <a
              href="https://linkedin.com/in/ileri-odusanya"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-zinc-50 hover:bg-blue-50/50 border border-zinc-200/70 hover:border-blue-200 transition-all duration-200 group block"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200/60 flex items-center justify-center text-blue-600 mb-3 shadow-xs group-hover:scale-110 transition-transform">
                <Linkedin size={18} />
              </div>
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-zinc-900">LinkedIn</h4>
                <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <p className="text-xs text-zinc-500 truncate mt-0.5">/in/ileri-odusanya</p>
            </a>

            <a
              href="https://github.com/Promicron"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-zinc-50 hover:bg-zinc-100 border border-zinc-200/70 hover:border-zinc-300 transition-all duration-200 group block"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-zinc-200/60 flex items-center justify-center text-zinc-900 mb-3 shadow-xs group-hover:scale-110 transition-transform">
                <Github size={18} />
              </div>
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-zinc-900">GitHub</h4>
                <ArrowUpRight size={14} className="text-zinc-400 group-hover:text-zinc-900 transition-colors" />
              </div>
              <p className="text-xs text-zinc-500 truncate mt-0.5">github.com/Promicron</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
