import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import o2 from "../assets/o2.png";
import o21 from "../assets/o21.png";
import p12 from "../assets/p1.2.png";
import p13 from "../assets/p13.png";
import p14 from "../assets/p14.png";
import p21 from "../assets/p21.png";
import p22 from "../assets/p22.png";
import p23 from "../assets/p23.png";
import p24 from "../assets/p24.png";
import p25 from "../assets/p25.png";
import p4 from "../assets/p4.png";
import p41 from "../assets/p41.png";
import p42 from "../assets/p42.png";
import p5 from "../assets/p5.png";
import p51 from "../assets/p51.png";
import p6 from "../assets/p6.png";
import p61 from "../assets/p61.png";
import p62 from "../assets/p62.png";
import p63 from "../assets/p63.png";
import h1 from "../assets/h1.png";
import h11 from "../assets/h11.png";
import h2 from "../assets/h2.png";
import h3 from "../assets/h3.png";
import h4 from "../assets/h4.png";
import b11 from "../assets/11.png";
import b12 from "../assets/12.png";
import b13 from "../assets/13.png";
import b14 from "../assets/14.png";
import b15 from "../assets/b15.png";
import b16 from "../assets/b16.png";
import b17 from "../assets/b17.png";
import b18 from "../assets/b18.png";
import b19 from "../assets/b19.png";

const GH = "https://github.com/Shaker-Al-Muzaini";

// Order matters: the first three are the featured case studies.
export const projects = [
  {
    slug: "hr-tech",
    title: "HR-Tech",
    category: "AI & Automation",
    tagline:
      "An interview platform with two-way video, real-time analysis, objective scoring reports and n8n scheduling for follow-up interviews.",
    stack: ["Laravel 13", "FastAPI", "n8n", "PostgreSQL", "Redis", "Vue 3"],
    image: b17,
    features: [
      "Two-way video calling (WebRTC P2P)",
      "Real-time intelligent analysis (presentations, FACS, YOLO)",
      "Summary reports with objective scoring",
      "n8n integration for scheduling follow-up interviews",
    ],
    challenges: [
      {
        task: "Trusting the analysis",
        solution:
          "A quality gate ignores the analysis when the signal is weak. The AI engine runs in FastAPI, separate from Laravel, and an Observer pattern keeps the data consistent and auditable.",
      },
    ],
    github: `${GH}/HR-Tech`,
    live: "",
    gallery: [b17, b18],
  },
  {
    slug: "ai-content-automation",
    title: "AI Content Automation",
    category: "AI & Automation",
    tagline:
      "An n8n workflow that takes content from idea and research to writing, images, human review, publishing and archiving.",
    stack: ["n8n", "GPT-5", "Tavily", "WordPress", "Telegram", "Google Sheets", "Google Drive"],
    image: b19,
    frame: "aspect-[19/10]",
    features: [
      "Automated research using Tavily with up-to-date web information",
      "AI-powered article generation based on research results",
      "AI-generated featured images based on article content",
      "Human-in-the-loop approval through Telegram",
      "Multi-platform publishing to WordPress, LinkedIn, X and Facebook",
      "Automatic archiving with Google Drive and Google Sheets",
      "Switchable AI model: GPT, Claude or Gemini",
    ],
    challenges: [
      {
        task: "Keeping AI-generated content based on current information",
        solution:
          "Tavily retrieves up-to-date web information before the AI agent writes the article.",
      },
      {
        task: "Maintaining human control over AI-generated content",
        solution:
          "A Telegram approval step means nothing is published until it has been reviewed and approved.",
      },
      {
        task: "Avoiding dependency on a single AI provider",
        solution:
          "The AI layer lets GPT, Claude or Gemini be switched without rebuilding the automation.",
      },
      {
        task: "Publishing the same content across multiple platforms",
        solution:
          "WordPress, LinkedIn, X and Facebook are connected so approved content is distributed from a single workflow.",
      },
    ],
    github: `${GH}/AI-Content-Automation`,
    live: "",
    gallery: [b19],
  },
  {
    slug: "pdf-summarizer-saas",
    title: "PDF Summarizer SaaS",
    category: "SaaS & Platforms",
    tagline:
      "An AI-powered PDF summarization platform with Stripe subscriptions, built on a clean DDD architecture.",
    stack: ["Laravel 13", "React", "DDD", "Stripe", "Fortify", "Groq AI"],
    image: h1,
    features: [
      "Multi-option summaries: default, key points, highlights or detailed",
      "Stripe subscriptions (monthly and annual) with webhooks that update the user's plan on payment",
      "User dashboard to track usage, upload files and export summaries",
      "Admin dashboard to manage users and plans and monitor revenue and statistics",
      "Fortify security with two-factor authentication and passkeys",
      "Usage and export history, with one-click export to TXT or PDF",
    ],
    challenges: [],
    github: `${GH}/SaaS_PDF`,
    live: "",
    gallery: [h11, h2, h3, h4],
  },
  {
    slug: "the-daily",
    title: "The Daily",
    category: "SaaS & Platforms",
    tagline:
      "A news and analytics platform with real-time data visualization and full English and Arabic support.",
    stack: ["Laravel 13", "React", "Inertia.js", "SQLite"],
    image: project1,
    features: [
      "Real-time news feed updates",
      "Interactive data visualization dashboards",
      "Full bilingual support (English and Arabic)",
      "User analytics and reporting",
    ],
    challenges: [
      {
        task: "Handling high-volume real-time data",
        solution: "WebSockets with Laravel Reverb push events to the browser efficiently.",
      },
    ],
    github: `${GH}/The-Daily`,
    live: "https://the-daily--sshakiralmazini.replit.app",
    gallery: [project1, p14, p12, p13],
  },
  {
    slug: "b2b-link",
    title: "B2B Link",
    category: "SaaS & Platforms",
    tagline:
      "A B2B contracting platform connecting companies with technical service providers, from competitive bids to digitally signed contracts.",
    stack: ["Laravel 13", "Vue.js", "Inertia.js", "SQLite", "Tailwind CSS", "Fortify", "Spatie Permission"],
    image: b13,
    features: [
      "Multi-role system with buyer and supplier dashboards",
      "RFQs and proposals",
      "Digital NDAs and contracts",
      "Verification process",
      "Authentication with passkeys",
      "Vite and Inertia.js single-page experience",
    ],
    challenges: [
      {
        task: "A fast single-page app without giving up Laravel",
        solution:
          "Vite and Inertia.js give a quick SPA experience while keeping Laravel's security and routing.",
      },
      {
        task: "Two roles with different needs",
        solution: "Each role has its own dashboard: one for buyers and one for suppliers.",
      },
    ],
    github: `${GH}/B2B_App`,
    live: "",
    gallery: [b11, b12, b13, b14],
  },
  {
    slug: "doblg",
    title: "doblg",
    category: "AI & Automation",
    tagline: "An AI platform for dubbing and translating YouTube videos into Arabic.",
    stack: ["Python", "FastAPI", "React", "SQLite"],
    image: b15,
    features: [
      "Video extraction from a YouTube link, with quality selection",
      "Automatic transcription (speech-to-text) of the original audio",
      "Automated translation with a manual review step before dubbing",
      "Text-to-speech in multiple dialects and voice styles",
      "Control over pitch and speech rate",
    ],
    challenges: [],
    github: `${GH}/df`,
    live: "",
    gallery: [b16, b15],
  },
  {
    slug: "personal-memory-os",
    title: "Personal Memory OS",
    category: "AI & Automation",
    tagline:
      "An AI-powered second brain for knowledge management, with a 3D knowledge graph and cross-device sync.",
    stack: ["Laravel 13", "Vue.js", "Nuxt", "Three.js", "Groq Cloud", "laravel-vue-i18n"],
    image: project2,
    features: [
      "AI-driven content categorization",
      "Interactive 3D knowledge graph using Three.js",
      "Cross-device data synchronization",
      "Markdown editor with live preview",
      "Semantic search",
    ],
    challenges: [
      {
        task: "Visualizing complex data relationships",
        solution: "Three.js renders a responsive 3D node network.",
      },
      {
        task: "A fast, SEO-friendly frontend",
        solution: "Nuxt provides server-side rendering and quick load times.",
      },
    ],
    github: `${GH}/Building-Personal-Memory-OS`,
    live: "https://building-personal-memory-os-production.up.railway.app",
    gallery: [project2, p21, p22, p23, p24, p25],
  },
  {
    slug: "villa-employees",
    title: "Villa Employees",
    category: "Business Systems",
    tagline:
      "A website for communication between villa employees, built with Laravel, WebRTC, Jitsi Meet and Pusher.",
    stack: ["Laravel 10", "Metronic", "WebRTC", "Jitsi Meet", "MySQL", "Redis", "Docker", "Pusher"],
    image: p5,
    features: [
      "Communication between employees over WebRTC and Jitsi Meet",
      "Real-time updates with Pusher and Redis",
      "Containerized with Docker",
    ],
    challenges: [],
    github: `${GH}/Messenger-App-WithFlutter`,
    live: "",
    gallery: [p51, p5],
  },
  {
    slug: "medical-education-platform",
    title: "Interactive Medical Education Platform",
    category: "Business Systems",
    tagline:
      "An Arabic medical education platform with videos, paid and free services and forums.",
    stack: ["Laravel 10", "Metronic", "MySQL", "Web API", "Pusher"],
    image: p6,
    features: [
      "An Arabic platform for the medical field in general",
      "Videos, paid and free services, and forums",
      "Many of the services offered by other educational platforms in this field",
    ],
    challenges: [],
    github: `${GH}/Competition-Project`,
    live: "",
    gallery: [p6, p61, p62, p63],
  },
  {
    slug: "elia-al-taybeh",
    title: "Elia Al-Taybeh",
    category: "Business Systems",
    tagline:
      "A dedicated dashboard for Elia Al-Taybeh Transport and Tourism Company.",
    stack: ["Laravel 8", "MySQL", "Docker", "Vue 3", "Metronic"],
    image: o2,
    features: [
      "A custom dashboard for a transport and tourism company",
      "Built with Laravel 8, Vue 3 and Metronic",
      "Containerized with Docker",
    ],
    challenges: [],
    github: `${GH}/Taiba-main`,
    live: "",
    gallery: [o2, o21],
  },
  {
    slug: "edura-learning-hub",
    title: "EduRa Learning Hub",
    category: "Business Systems",
    tagline: "A distance-learning platform built entirely with Laravel and Vue.js.",
    stack: ["Laravel 10", "Vue 3", "Pinia", "Metronic", "MySQL", "Bootstrap 5", "Formwizard"],
    image: p4,
    features: [
      "Live interactive classrooms using WebRTC and Pusher",
      "Student progress tracking and analytics",
      "Customizable instructor and student dashboards",
      "Secure payment gateway integration",
      "Automated certification generation",
    ],
    challenges: [],
    github: `${GH}/Academic-Educational-Platform`,
    live: "",
    gallery: [p4, p41, p42],
  },
];

export const featuredProjects = projects.slice(0, 3);
export const getProject = (slug) => projects.find((p) => p.slug === slug);
