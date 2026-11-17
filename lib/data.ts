export const skills = {
  programming: ['Python', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  ai: ['OpenAI API', 'Claude API', 'Gemini API', 'OpenAI Agents SDK', 'OpenRouter'],
  rag: ['LlamaIndex', 'ChromaDB', 'Embeddings', 'Document Ingestion'],
  backend: ['FastAPI', 'REST APIs', 'Async Programming'],
  frontend: ['Next.js', 'React', 'Tailwind CSS', 'shadcn/ui'],
  databases: ['PostgreSQL', 'MySQL', 'Neon SQL', 'Prisma ORM'],
  observability: ['Langfuse'],
  tools: ['Git', 'GitHub', 'VS Code', 'Claude Code', 'Figma (basic)', 'Canva', 'MS Office', 'Photoshop', 'Illustrator', 'Spec-Driven Development', 'Sanity CMS'],
}

export const projects = [
  {
    title: 'Personal AI Employee',
    description: 'An autonomous AI automation system for email and social media workflows.',
    problem: 'Routine email and social publishing tasks can require repeated manual effort.',
    solution: 'Built an agent that categorizes Gmail, drafts context-aware replies with Claude, and connects social platform APIs.',
    features: ['Reads and categorizes Gmail messages', 'Drafts context-aware replies with Claude API', 'Automates email responses', 'Integrates LinkedIn and Facebook APIs for social content'],
    tech: ['Python', 'Claude API', 'Gmail API', 'LinkedIn API', 'Facebook Graph API', 'MySQL'],
    github: '',
    demo: '',
    timeline: '2025',
    architecture: 'Python automation integrating Gmail, Claude, LinkedIn, Facebook, and MySQL.',
  },
  {
    title: 'AI Educational Platform',
    description: 'A multi-agent educational SaaS platform currently in development.',
    problem: 'Designing an educational platform around AI-assisted tutoring, assessment, and learning workflows.',
    solution: 'Planning a 10-agent architecture with RAG-based document retrieval and a full-stack learning experience.',
    features: ['Designing a 10-agent architecture', 'AI tutoring and assessment', 'Educational content generation', 'RAG-based document retrieval', 'Intelligent learning workflows'],
    tech: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'OpenAI Agents SDK', 'LlamaIndex', 'ChromaDB', 'PostgreSQL', 'Prisma ORM', 'Langfuse', 'OpenRouter'],
    github: '',
    demo: '',
    timeline: '2026–Present · In Development',
    architecture: 'Planned stack: FastAPI and PostgreSQL/Prisma, with a Next.js and TypeScript frontend; LlamaIndex and ChromaDB for RAG, OpenAI Agents SDK, Langfuse, and OpenRouter.',
  },
  {
    title: 'Full-Stack Todo App with AI Chatbot',
    description: 'A task-management application with natural-language AI assistance.',
    problem: 'Managing tasks through a chatbot requires secure user-specific data and reliable task actions.',
    solution: 'Built a full-stack app with authentication, per-user data isolation, and natural-language task operations.',
    features: ['Create, complete, and delete tasks through natural language', 'AI chatbot integration', 'User authentication and per-user data isolation'],
    tech: ['Next.js', 'FastAPI', 'OpenAI Agents SDK', 'Neon SQL'],
    github: '',
    demo: '',
    timeline: '2025',
  },
  {
    title: 'Car Rental / Ecommerce Platform',
    description: 'A responsive vehicle rental and ecommerce platform.',
    problem: 'A vehicle catalog needs a responsive way to browse and manage product content.',
    solution: 'Built a responsive Next.js platform with dynamic content managed through Sanity CMS.',
    features: ['Browse, rent, and purchase vehicles', 'Dynamic product management', 'Responsive interface'],
    tech: ['Next.js', 'JavaScript', 'Tailwind CSS', 'Sanity CMS'],
    github: '',
    demo: '',
    timeline: '2024',
  },
]

export const certifications = [
  { name: 'Agentic AI Specialization (Ongoing)', date: '2024–Present', issuer: 'GIAIC' },
  { name: 'Spec-Driven Development with Claude Code', date: '2026', issuer: 'GIAIC' },
  { name: 'OpenAI Agents SDK', date: '2025', issuer: 'GIAIC' },
  { name: 'Python, TypeScript, Next.js, React & FastAPI', date: '2024', issuer: 'GIAIC' },
  { name: 'Prompt & Context Engineering', date: '', issuer: 'GIAIC' },
  { name: 'CIT Certificate', date: '2023', issuer: 'ARFA Tech' },
]

export const socials = {
  github: 'https://github.com/SheikhHussain15',
  linkedin: 'https://linkedin.com/in/hussain-raza-0704a32b6',
  email: 'hr773-774@gmail.com',
  phone: '+92 370 0722474',
  location: 'Karachi, Pakistan',
}

export const education = [
  { degree: 'Agentic AI Specialization', school: 'GIAIC, Karachi', graduation: '2024–Present' },
  { degree: 'Intermediate, Computer Science', school: 'G.DBC Asifabad, Karachi', graduation: '2026' },
  { degree: 'Matriculation, Computer Science', school: 'Public Secondary School, Karachi', graduation: '2024' },
  { degree: 'CIT Certificate', school: 'ARFA Tech, Karachi', graduation: '2023' },
]

export const githubStats = {
  username: 'SheikhHussain15',
}

export const currentlyLearning = []

export const aiProjects = [
  {
    title: 'AI Educational Platform',
    description: 'A multi-agent educational SaaS platform in development, with a planned RAG pipeline and intelligent learning workflows.',
    status: 'In Development',
    technologies: ['Python', 'FastAPI', 'Next.js', 'OpenAI Agents SDK', 'LlamaIndex', 'ChromaDB', 'PostgreSQL'],
  },
]
