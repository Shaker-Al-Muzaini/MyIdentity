export const profile = {
  name: "Shaker Al-Muzayni",
  role: "Software Engineer · Laravel, FastAPI, n8n",
  headline: "I build the backend, the AI service and the automation around it.",
  bio: [
    "I design and run the parts of a product that have to keep working after launch: Laravel APIs, FastAPI services for AI work, and n8n workflows that automate the processes around them.",
    "5+ years in production, including systems that handled 8k+ daily transactions at 99%+ uptime, shipped with Docker, GitHub Actions and AWS.",
  ],
  email: "sshakiralmazini@gmail.com",
  whatsapp: "https://wa.me/972567379813",
  github: "https://github.com/Shaker-Al-Muzaini",
  linkedin: "https://www.linkedin.com/in/shakiralmazini",
};

export const navLinks = [
  { id: "work", label: "Work" },
  { id: "services", label: "What I do" },
  { id: "experience", label: "Experience" },
  { id: "tools", label: "Tools" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const capabilities = [
  {
    title: "Backend systems and APIs",
    body: "Authentication, roles, billing and business rules, organised into domain modules. Slow work moves to queues and results reach the browser over WebSockets.",
    tools: ["Laravel", "DDD", "Fortify", "Redis", "Pusher", "PostgreSQL"],
  },
  {
    title: "AI services",
    body: "Models run in their own Python service so a slow call never blocks the main API. Used for interview analysis, speech-to-text, translation and text-to-speech.",
    tools: ["FastAPI", "Python", "Groq", "GPT"],
  },
  {
    title: "Workflow automation",
    body: "Research, writing, scheduling and publishing as n8n workflows, with a person approving over Telegram before anything goes out.",
    tools: ["n8n", "Webhooks", "Telegram", "Tavily", "WordPress"],
  },
  {
    title: "Delivery and operations",
    body: "Containerised builds, CI/CD pipelines and cloud deployment, from the first local run to the live server.",
    tools: ["Docker", "GitHub Actions", "AWS", "Linux", "Nginx"],
  },
];

export const experiences = [
  {
    period: "2023 - 2025",
    role: "Senior Laravel Developer",
    company: "In2world (MIXAA Group)",
    desc: "Architected and led backend development of Doshtu, a multi-vendor e-commerce platform supporting 50+ vendors and processing 7k daily transactions with query response times under 170 ms.",
  },
  {
    period: "2021 - 2023",
    role: "Full Stack Developer",
    company: "Domino ICT",
    desc: "Developed secure e-commerce platforms and real-time communication systems using WebSockets and Pusher. Implemented scalable backend architectures with Laravel and Docker.",
  },
  {
    period: "2019 - 2021",
    role: "Freelance Developer",
    company: "Independent",
    desc: "Delivered full-stack solutions including education platforms (EduRa) and custom business analytics dashboards for diverse clients.",
  },
];

export const toolGroups = [
  { group: "Backend", tools: ["Laravel", "PHP", "Fortify", "Spatie Permission", "DDD"] },
  { group: "AI and automation", tools: ["FastAPI", "Python", "n8n", "Groq", "GPT", "Tavily"] },
  { group: "Frontend", tools: ["Vue 3", "React", "Nuxt", "Inertia.js", "Tailwind CSS", "Three.js"] },
  { group: "Data and real-time", tools: ["PostgreSQL", "MySQL", "SQLite", "Redis", "Pusher", "WebRTC"] },
  { group: "Delivery", tools: ["Docker", "GitHub Actions", "AWS", "Linux", "Nginx"] },
];

export const certifications = [
  { name: "Professional Certificate in DevOps", date: "01/2026", link: "https://drive.google.com/file/d/1VWa6GkZT01mBSHeQd9sOgNwvcF2If4iE/view" },
  { name: "Docker Deep Dive", date: "01/2026", link: "https://drive.google.com/file/d/1qTxHkYK7f5oB5V9UwSDmA5sXQvO78jcR/view" },
  { name: "Hotel Management System", date: "02/2026", link: "https://drive.google.com/file/d/1MsSVAzQQh65ucOb3EXvC06cWZZlMIpo-/view" },
  { name: "Laravel Telescope", date: "08/2023", link: "https://tinyurl.com/kp4z45ez" },
  { name: "Complete Job Portal Build", date: "02/2023", link: "https://tinyurl.com/4fvz3tkm" },
  { name: "English Writing Skills", date: "03/2021", link: "https://tinyurl.com/y8rfmspe" },
  { name: "Networking World", date: "07/2020", link: "https://tinyurl.com/3cfekkdb" },
  { name: "Laravel Socialite", date: "05/2020", link: "https://tinyurl.com/3fjev5a2" },
];
