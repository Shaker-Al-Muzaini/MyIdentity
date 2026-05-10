import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import o2 from "../assets/o2.png";
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

export const projectsData = [
  {
    id: "the-daily",
    title: "The Daily",
    stack: ["Laravel 13", "React","internal",
      "sqlite3"],

    image: project1,
    desc: "A high-end news and analytics platform featuring real-time data visualization, bilingual support, and a premium neural aesthetic.",
    features: [
      "Real-time news feed updates",
      "Interactive data visualization dashboards",
      "Full bilingual support (English/Arabic)",
      "Premium neural aesthetic design",
      "Advanced user analytics and reporting"
    ],
    tasksAndSolutions: [
      {
        task: "Handling high volume real-time data",
        solution: "Implemented WebSockets with Laravel Reverb for efficient push events."
      },
      {
        task: "Complex UI rendering and state management",
        solution: "Utilized React with TypeScript for type-safe components and optimized rendering."
      }
    ],
    github: "https://github.com/Shaker-Al-Muzaini/The-Daily",
    live: "https://the-daily--sshakiralmazini.replit.app",
    gallery: [project1,p14,p12,p13]
  },
  {
    id: "personal-memory-os",
    title: "Personal Memory OS",
    stack: ["Laravel13", "Vue.js", "Nuxt", "Three.js","groqcloud","laravel-vue-i18n","architecture-srv","groq AI"],
    image: project2,
    desc: "An AI-powered 'Second Brain' for knowledge management, featuring immersive 3D visualizations and seamless data sync.",
    features: [
      "AI-driven content categorization",
      "Interactive 3D knowledge graph using Three.js",
      "Seamless cross-device data synchronization",
      "Markdown editor with live preview",
      "Advanced semantic search capabilities"
    ],
    tasksAndSolutions: [
      {
        task: "Visualizing complex data relationships",
        solution: "Integrated Three.js to render a responsive 3D node network."
      },
      {
        task: "Fast and SEO friendly frontend",
        solution: "Built the application using Nuxt.js for server-side rendering and quick load times."
      }
    ],
    github: "https://github.com/Shaker-Al-Muzaini/Building-Personal-Memory-OS",
    live: "https://building-personal-memory-os-production.up.railway.app",
    gallery: [project2,p21,p22,p23,p24,p25]
  },
  {
    id: "Elia",
    title: "Elia Al-Taybeh",
    stack: ["Laravel8", "MySQL", "Docker", "vue3","Metronic"],
    image: o2,
    desc: "Establishment of a special dashboard in Elia Al-TaybehTransport and Tourism Company",
    features: [
      "Multi-vendor storefronts and dashboards",
      "AliExpress product sync API integration",
      "Modular system architecture for easy scaling",
      "Comprehensive admin control panel",
      "Automated order fulfillment workflow"
    ],
    tasksAndSolutions: [
      {
        task: "Managing product data from external APIs",
        solution: "Developed robust queue jobs in Laravel to sync and process AliExpress data asynchronously."
      },
      {
        task: "Ensuring high availability and scalability",
        solution: "Containerized the application with Docker and deployed on AWS with load balancing."
      }
    ],
    github: "https://github.com/Shaker-Al-Muzaini/Taiba-main",
    live: "#",
    gallery: [o2]
  },
  {
    id: "Edura education",
    title: "EduRa Learning Hub",
    stack: ["Laravel10", "vue3", "pinia-vuejs","Metronic", "Mysql","Bootstrap5","Formwizard"],
    image: p4,
    desc: "A platform for distance learning.\n" +
        "A lot of technologies were used inside it.\n" +
        "This platform was created entirely using laravel with Vuejs.",
    features: [
      "Live interactive classrooms using WebRTC/Pusher",
      "Detailed student progress tracking and analytics",
      "Customizable instructor and student dashboards",
      "Secure payment gateway integration",
      "Automated certification generation"
    ],
    tasksAndSolutions: [
      {
        task: "Building a seamless SPA experience with Laravel",
        solution: "Adopted Inertia.js to tightly couple Laravel routing with React frontend without building a separate API."
      },
      {
        task: "Real-time chat and notifications",
        solution: "Implemented Pusher for instant messaging and system alerts during live sessions."
      }
    ],
    github: "https://github.com/Shaker-Al-Muzaini/Academic-Educational-Platform",
    live: "#",
    gallery: [p4, p41, p42]
  },
  {
    id: "villa_employees",
    title: "villa employees",
    stack: ["Laravel10","Metronic", "WebRTC","Mysql","JITSI_Meet","Redis DB","Docker","pusher"],
    image: p5,
    desc: "Create a website for communication talks between villa employees",
    features: [
      "Detailed student progress tracking and analytics",
      "Customizable instructor and student dashboards",
      "Live interactive classrooms using WebRTC/Pusher",
      "Secure payment gateway integration",
    ],
    tasksAndSolutions: [
      {
        task: "Building a seamless SPA experience with Laravel",
        solution: "Adopted Inertia.js to tightly couple Laravel routing with React frontend without building a separate API."
      },
      {
        task: "Real-time chat and notifications",
        solution: "Implemented Pusher for instant messaging and system alerts during live sessions."
      }
    ],
    github: "https://github.com/Shaker-Al-Muzaini/Messenger-App-WithFlutter",
    live: "#",
    gallery: [p51, p5]
  },
  {
    id: "IMP",
    title: "Interactive Medical Education Platform",
    stack: ["Laravel10","Metronic","Mysql","Web API","pusher"],
    image: p6,
    desc: "Create a website for communication talks between villa employees",
    features: [
      "The Interactive Medical Education Platform platform is an Arab platform concerned with the medical field in general",
      "including videos, paid and free services, forums",
      "and many services provided by other educational platforms in this field",
    ],
    tasksAndSolutions: [
      {
        task: "Building a seamless SPA experience with Laravel",
        solution: "Adopted Inertia.js to tightly couple Laravel routing with React frontend without building a separate API."
      },
      {
        task: "Real-time chat and notifications",
        solution: "Implemented Pusher for instant messaging and system alerts during live sessions."
      }
    ],
    github: "https://github.com/Shaker-Al-Muzaini/Competition-Project",
    live: "#",
    gallery: [p6, p61,p62,p63]
  },
];
