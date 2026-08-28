export const skillCategories = [
  { id: "all", label: "All Technologies" },
  { id: "frontend", label: "Frontend & Mobile" },
  { id: "backend", label: "Backend & Systems" },
  { id: "ai_data", label: "AI & Machine Learning" },
  { id: "tools", label: "Cloud & Architecture" }
];

export const featuredHighlights = [
  {
    category: "frontend",
    title: "Modern Frontend & Mobile",
    description: "Crafting fluid, high-performance interfaces with React, React Native, and TypeScript.",
    tag: "UI / UX Engineering",
    skills: ["React", "TypeScript", "React Native", "Tailwind CSS", "Next.js/Vite"],
    color: "from-blue-500/10 via-indigo-500/5 to-purple-500/10",
    accent: "text-blue-600",
    borderAccent: "border-blue-200/60"
  },
  {
    category: "ai_data",
    title: "AI & Neural Architectures",
    description: "Designing intelligent agents, computer vision pipelines, and LLM integrations (MSc Artificial Intelligence).",
    tag: "Machine Learning",
    skills: ["Python", "Groq AI", "OpenCV", "PyBullet", "OpenAI APIs"],
    color: "from-purple-500/10 via-fuchsia-500/5 to-pink-500/10",
    accent: "text-purple-600",
    borderAccent: "border-purple-200/60"
  },
  {
    category: "backend",
    title: "Scalable Systems & APIs",
    description: "Architecting resilient RESTful APIs, asynchronous services, and robust databases.",
    tag: "Full-Stack Backbone",
    skills: ["Node.js", "Python / Flask", "Laravel", "MongoDB", "Supabase"],
    color: "from-emerald-500/10 via-teal-500/5 to-cyan-500/10",
    accent: "text-emerald-600",
    borderAccent: "border-emerald-200/60"
  }
];

const skills = [
  {
    name: 'React',
    category: 'frontend',
    badge: 'Core Stack',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    highlight: 'Component architecture, state machines, custom hooks & SSR'
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    badge: 'Core Stack',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    highlight: 'Strict typing, robust interfaces & clean contract boundaries'
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    badge: 'Expert',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    highlight: 'ESNext, async event-loop, DOM optimization & tooling'
  },
  {
    name: 'Python',
    category: 'ai_data',
    badge: 'Specialized',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    highlight: 'AI modeling, scientific computing (NumPy/Matplotlib), Flask APIs'
  },
  {
    name: 'React Native',
    category: 'frontend',
    badge: 'Production',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    highlight: 'Cross-platform iOS & Android apps, Expo, native audio & bridges'
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    badge: 'Expert',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    highlight: 'Apple-grade design systems, animations & adaptive layouts'
  },
  {
    name: 'Node.js',
    category: 'backend',
    badge: 'Production',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    highlight: 'RESTful architectures, microservices & backend integrations'
  },
  {
    name: 'AI & LLM Integration',
    category: 'ai_data',
    badge: 'Specialized',
    icon: 'https://api.iconify.design/lucide:sparkles.svg?color=%239333ea',
    highlight: 'Groq, OpenAI APIs, prompt chaining & real-time audio transcription'
  },
  {
    name: 'Computer Vision & CNNs',
    category: 'ai_data',
    badge: 'Research',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
    highlight: 'Facial analysis, OpenCV image pipelines & neural networks'
  },
  {
    name: 'Docker',
    category: 'tools',
    badge: 'Proficient',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    highlight: 'Containerized microservices & reproducible deployments'
  },
  {
    name: 'Git & GitHub',
    category: 'tools',
    badge: 'Workflow',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    highlight: 'Git flow, CI/CD pipelines, versioning & collaboration'
  },
  {
    name: 'MongoDB & SQL',
    category: 'backend',
    badge: 'Database',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    highlight: 'Document modeling, relational schemas & Supabase backend'
  }
];

export default skills;
