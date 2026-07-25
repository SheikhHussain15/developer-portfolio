export const skills = {
  programming: ['Python', 'JavaScript', 'TypeScript'],
  frontend: ['React', 'Next.js', 'TailwindCSS', 'HTML', 'CSS'],
  backend: ['FastAPI', 'OpenAI Agents SDK'],
  databases: ['MySQL', 'Neon SQL'],
  cms: ['Sanity'],
  ai: ['Prompt Engineering', 'Context Engineering', 'Agentic AI', 'Claude Code', 'Gemini CLI', 'Qwen Code', 'Kiro', 'Bonsai'],
  tools: ['Git', 'GitHub', 'VS Code', 'Figma', 'Canva'],
}

export const projects = [
  {
    title: 'Personal AI Employee',
    description: 'Automated AI system for email and social media management',
    problem: 'Manual email/social media management is time-consuming and repetitive',
    solution: 'Built an intelligent automation system that handles Gmail, LinkedIn, and Facebook using OpenAI APIs',
    features: ['Auto-reply generation', 'Content creation', 'Scheduling', 'Multi-platform support', 'Smart filtering'],
    tech: ['Python', 'OpenAI API', 'FastAPI', 'Celery', 'PostgreSQL'],
    github: 'https://github.com/sheikhhussain/ai-employee',
    demo: 'https://ai-employee.vercel.app',
    image: '/projects/ai-employee.png',
    timeline: '3 months',
    challenges: ['Rate limiting on external APIs', 'Handling authentication securely', 'Managing concurrent tasks'],
    lessonsLearned: 'Learned the importance of proper API error handling and how to design scalable queue systems',
    architecture: 'FastAPI backend with Celery workers, React frontend with real-time updates via WebSockets',
    metrics: 'Saves 10+ hours per week, 95% automation accuracy',
  },
  {
    title: 'Full Stack AI Todo App',
    description: 'Task management with AI-powered assistance and intelligent suggestions',
    problem: 'Traditional todo apps lack contextual assistance and smart prioritization',
    solution: 'Full stack app combining AI suggestions with a beautiful React interface',
    features: ['Task CRUD operations', 'AI-powered suggestions', 'Real-time chat interface', 'Priority scoring', 'Deadline alerts'],
    tech: ['React', 'Next.js', 'FastAPI', 'OpenAI', 'Supabase'],
    github: 'https://github.com/sheikhhussain/ai-todo',
    demo: 'https://ai-todo.vercel.app',
    image: '/projects/ai-todo.png',
    timeline: '6 weeks',
    challenges: ['Implementing real-time updates', 'Optimizing AI response times', 'Designing intuitive UX'],
    lessonsLearned: 'Gained deep understanding of streaming APIs and how to build responsive AI-powered UIs',
    architecture: 'Next.js with server components, FastAPI microservice for AI processing, Supabase for data',
    metrics: '500+ active users, 4.8/5 rating',
  },
  {
    title: 'Full Stack Ecommerce App',
    description: 'Modern ecommerce platform for vehicle rental and sales',
    problem: 'Existing platforms had poor UX and lacked integration with CMS for easy updates',
    solution: 'Built a responsive full-stack app with Sanity CMS for easy content management',
    features: ['Product catalog', 'Shopping cart', 'Checkout flow', 'Admin panel', 'Inventory management', 'Payment integration'],
    tech: ['Next.js', 'TailwindCSS', 'Sanity CMS', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com/sheikhhussain/ecommerce',
    demo: 'https://ecommerce.vercel.app',
    image: '/projects/ecommerce.png',
    timeline: '8 weeks',
    challenges: ['Integrating Stripe securely', 'Building dynamic product pages', 'SEO optimization'],
    lessonsLearned: 'Mastered headless CMS architecture and payment gateway integration',
    architecture: 'Headless e-commerce with Next.js frontend, Sanity for content, Stripe for payments',
    metrics: '$50K+ revenue, 2000+ transactions',
  },
]

export const certifications = [
  { name: 'TypeScript', date: '2024', issuer: 'Certification Body' },
  { name: 'React', date: '2024', issuer: 'Certification Body' },
  { name: 'Python', date: '2024', issuer: 'Certification Body' },
  { name: 'FastAPI', date: '2024', issuer: 'Certification Body' },
  { name: 'Prompt Engineering', date: '2024', issuer: 'OpenAI' },
  { name: 'OpenAI Agents SDK', date: '2024', issuer: 'OpenAI' },
  { name: 'Spec Driven Development', date: '2024', issuer: 'Certification Body' },
  { name: 'Agentic AI', date: '2024', issuer: 'Certification Body' },
]

export const socials = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  vercel: 'https://vercel.com',
  email: 'contact@example.com',
  location: 'Karachi, Pakistan',
}

export const education = {
  school: 'Your University',
  degree: 'Bachelor of Science in Computer Science',
  graduation: '2025',
  gpa: '3.8',
}

export const githubStats = {
  username: 'sheikhhussain15',
  stars: 324,
  repositories: 45,
  followers: 128,
  contributions: 1250,
  languages: {
    'TypeScript': 35,
    'Python': 25,
    'JavaScript': 20,
    'CSS': 12,
    'Other': 8,
  },
}

export const currentlyLearning = [
  { skill: 'LangChain', proficiency: 'Intermediate', icon: '🔗' },
  { skill: 'Vector Databases', proficiency: 'Beginner', icon: '📊' },
  { skill: 'System Design', proficiency: 'Intermediate', icon: '🏗️' },
  { skill: 'Advanced React Patterns', proficiency: 'Intermediate', icon: '⚛️' },
]

export const aiProjects = [
  {
    title: 'AI Coding Assistant',
    description: 'Custom LLM-powered code generation and debugging',
    status: 'In Development',
    technologies: ['LangChain', 'Claude API', 'Next.js'],
  },
  {
    title: 'Automated Content Creator',
    description: 'Multi-platform content generation with brand consistency',
    status: 'Planning',
    technologies: ['OpenAI API', 'Agentic AI', 'FastAPI'],
  },
]

export const caseStudies = [
  {
    title: 'Scaling AI Automation',
    problem: 'Handling 10K+ monthly tasks with rate limits',
    solution: 'Implemented intelligent queuing and caching strategy',
    result: 'Reduced API costs by 40%, improved response time by 60%',
    technologies: ['Celery', 'Redis', 'FastAPI'],
  },
]

export const developmentProcess = {
  steps: [
    { step: 'Understanding', description: 'Deep dive into problem and requirements' },
    { step: 'Research', description: 'Explore solutions and best practices' },
    { step: 'Architecture', description: 'Design scalable, maintainable systems' },
    { step: 'Implementation', description: 'Write clean, tested code' },
    { step: 'Refinement', description: 'Optimize and enhance based on feedback' },
  ],
}

export const techStackVisualization = {
  frontend: ['React', 'Next.js', 'TailwindCSS', 'Framer Motion', 'TypeScript'],
  backend: ['FastAPI', 'Node.js', 'PostgreSQL', 'Supabase', 'Celery'],
  ai: ['OpenAI', 'Claude', 'Gemini', 'LangChain', 'Prompt Engineering'],
  devops: ['Docker', 'GitHub Actions', 'Vercel', 'AWS', 'Git'],
}
