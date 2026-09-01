export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'featured', label: 'Featured' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'ai', label: 'AI & Data Science' }
];

const projects = [
  {
    id: 1,
    title: 'Dashlyx',
    subtitle: 'On-Demand Logistics & Ordering Platform',
    category: 'web',
    status: 'Live Platform',
    highlight: 'Real-time multi-tier order routing & live business telemetry',
    description: 'A full-stack food delivery ecosystem featuring dedicated dashboards for customers, merchants, and system administrators. Includes real-time geospatial order tracking, inventory automation, and analytical charts.',
    image: '/images/dashlyx2.png',
    technologies: ['React', 'Laravel', 'Chart.js', 'Docker', 'REST API'],
    github: '#',
    live: 'https://dashlyx.com',
    featured: true,
    accentColor: 'from-blue-500/20 to-indigo-500/10',
    stats: [
      { label: 'Dashboards', value: '3 Dedicated Roles' },
      { label: 'Tracking', value: 'Real-Time Telemetry' },
      { label: 'Architecture', value: 'Microservices & API' }
    ]
  },
  {
    id: 2,
    title: 'ETC LMS',
    subtitle: 'Intelligent Learning Management System',
    category: 'web',
    status: 'Live Platform',
    highlight: 'AI-assisted course generation & student performance analytics',
    description: 'A comprehensive educational platform built for modern academic institutions. Features structured course authoring, automated student performance tracking, AI learning assistants, and dynamic visual analytics.',
    image: '/images/etc.png',
    technologies: ['React', 'Redux', 'OpenAI API', 'Recharts', 'Tailwind CSS'],
    github: '#',
    live: 'https://etcvibes.com',
    featured: true,
    accentColor: 'from-blue-500/20 to-cyan-500/10',
    stats: [
      { label: 'Intelligence', value: 'OpenAI Powered' },
      { label: 'Analytics', value: 'Visual Insights' },
      { label: 'State Flow', value: 'Redux Enterprise' }
    ]
  },
  {
    id: 5,
    title: 'Loqui',
    subtitle: 'AI Voice-First Journal & Transcription Engine',
    category: 'mobile',
    status: 'Mobile App',
    highlight: 'Instant audio transcription with sub-second Groq AI inference',
    description: 'A voice-first cross-platform mobile application enabling users to articulate and record thoughts effortlessly. Features ultra-fast audio transcription with Groq AI, emotional sentiment summaries, and cloud sync.',
    image: '/images/loqui-img.jpeg',
    technologies: ['React Native', 'TypeScript', 'Groq AI', 'Expo', 'Nativewind'],
    github: 'https://github.com/Promicron/loqui',
    live: '',
    featured: true,
    accentColor: 'from-indigo-500/20 to-blue-500/10',
    stats: [
      { label: 'Inference', value: 'Groq LPUs' },
      { label: 'Platform', value: 'iOS & Android' },
      { label: 'Audio', value: 'Voice-to-Text' }
    ]
  },
  {
    id: 8,
    title: 'RAG-DeepReader',
    subtitle: 'Intelligent Document Analysis',
    category: 'ai',
    status: 'Web App',
    highlight: 'AI-driven document analysis and contextual information extraction',
    description: 'An application that leverages AI to analyze documents and extract relevant information. Provides important context to AI models for high-accuracy semantic retrieval and reasoning.',
    image: '/images/rag.png',
    technologies: ['Python', 'LangChain', 'Groq Whisper API', 'RAG', 'Sentence Transformers', 'FastAPI', 'React', 'Docker'],
    github: 'https://github.com/Promicron/DipRAG',
    live: '',
    featured: true,
    accentColor: 'from-sky-500/20 to-indigo-500/10',
    stats: [
      { label: 'Inference', value: 'Groq LLMs' },
      { label: 'Platform', value: 'Web & API' },
      { label: 'Understanding', value: 'RAG Vector Index' }
    ]
  },
  {
    id: 7,
    title: 'Age Prediction AI',
    subtitle: 'Deep Learning Computer Vision Classifier',
    category: 'ai',
    status: 'AI Model',
    highlight: 'Convolutional Neural Networks with OpenCV facial detection pipeline',
    description: 'A computer vision application that estimates chronological age from facial imagery using trained Convolutional Neural Networks (CNNs) and OpenCV real-time facial feature preprocessing.',
    image: '/images/face.png',
    technologies: ['Python', 'OpenCV', 'CNN / PyTorch', 'Flask', 'Computer Vision'],
    github: 'https://github.com/Promicron/estmage',
    live: '',
    featured: false,
    accentColor: 'from-blue-500/20 to-sky-500/10',
    stats: [
      { label: 'Model', value: 'Deep CNN' },
      { label: 'Vision', value: 'OpenCV Preprocessing' },
      { label: 'API', value: 'Flask Backend' }
    ]
  },
  {
    id: 4,
    title: 'Tap Grid Game',
    subtitle: 'High-Frequency Reflex & Tile Game',
    category: 'web',
    status: 'Live Game',
    highlight: 'Sub-millisecond latency tile engine with cloud global leaderboard',
    description: 'An interactive grid-based arcade reaction game featuring progressive difficulty curves, rhythmic audiovisual feedback, and a real-time global leaderboard powered by Supabase.',
    image: 'https://images.unsplash.com/photo-1590845947667-381579052389?q=80&w=1170&auto=format&fit=crop',
    technologies: ['React', 'Tailwind CSS', 'Supabase', 'Web Audio API'],
    github: 'https://github.com/Promicron/gridGame',
    live: 'https://tapgrid.vercel.app',
    featured: false,
    accentColor: 'from-cyan-500/20 to-blue-500/10',
    stats: [
      { label: 'Latency', value: 'Instant Response' },
      { label: 'Backend', value: 'Supabase Realtime' },
      { label: 'UX', value: 'Micro-Animations' }
    ]
  },
  {
    id: 3,
    title: 'CHOMP_PY',
    subtitle: 'Quantum Physics Hamiltonian Optimization',
    category: 'ai',
    status: 'Research Software',
    highlight: 'Numerical optimization for solving the time-independent Schrödinger equation',
    description: 'A Python scientific computation suite implementing the Covariant Hamiltonian Optimization Method for solving high-dimensional physical systems and quantum wave equations.',
    image: '',
    codeType: 'physics_ai',
    technologies: ['Python', 'PyBullet', 'NumPy', 'Matplotlib', 'Numerical Methods'],
    github: 'https://github.com/Promicron/CHOMP_PY',
    live: '',
    featured: false,
    accentColor: 'from-emerald-500/20 to-teal-500/10',
    stats: [
      { label: 'Domain', value: 'Quantum Physics' },
      { label: 'Core', value: 'Covariant Hamiltonian' },
      { label: 'Math', value: 'NumPy Vectorized' }
    ]
  },
  {
    id: 6,
    title: 'IntFootball Analytics',
    subtitle: 'Predictive Match Forecast & ML Pipeline',
    category: 'ai',
    status: 'ML Pipeline',
    highlight: 'Historical dataset feature engineering with probabilistic forecast models',
    description: 'An end-to-end predictive machine learning pipeline forecasting outcome probabilities for international football tournaments through historical rating modeling and feature analysis.',
    image: '',
    codeType: 'football_ml',
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'Feature Engineering'],
    github: 'https://github.com/Promicron/IntFootball',
    live: '',
    featured: false,
    accentColor: 'from-blue-500/20 to-indigo-500/10',
    stats: [
      { label: 'Target', value: 'Outcome Forecast' },
      { label: 'Features', value: 'Team Elo & Metrics' },
      { label: 'Data', value: 'Pandas Pipeline' }
    ]
  }
];

export default projects;