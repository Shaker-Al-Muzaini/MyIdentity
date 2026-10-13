import { certifications as existingCertifications } from "./site";

// The order corresponds to the existing certification cards in src/data/site.js.
// Keep source links/dates there; extend certificate content here as documents arrive.
const slugs = [
  "professional-devops",
  "docker-deep-dive",
  "hotel-management-system",
  "laravel-telescope",
  "complete-job-portal-build",
  "english-writing-skills",
  "networking-world",
  "laravel-socialite",
];

const detailsBySlug = {
  "professional-devops": {
    specialization: "DevOps Engineering & Delivery Automation",
    category: "DevOps & Cloud Engineering",
    platform: "Udemy",
    courseProvider: "MTF Institute of Management, Technology and Finance",
    certificateType: "Certificate of Completion",
    issuedOn: "31 January 2026",
    duration: "1 hour",
    learningFormat: "Online course",
    credentialId: "UC-def2e1ba-0ce7-4bda-8ea0-662699fbe546",
    verifyUrl: "https://ude.my/UC-def2e1ba-0ce7-4bda-8ea0-662699fbe546",
    pdfUrl: "/certificates/DevOps.pdf",
    imageUrl: "/certificates/DevOps.webp",
    overview:
      "A completed Udemy course focused on the DevOps field, which brings software development, delivery, and operations together. The modern ecosystem below offers further context around the specialization, rather than a claimed list of topics covered or tools assessed in this one-hour course.",
    principles: [
      "Continuous integration and reliable delivery pipelines",
      "Repeatable infrastructure and deployment automation",
      "Observability, feedback loops, and service reliability",
      "Security-aware build and release workflows",
    ],
    technologyGroups: [
      {
        title: "Containers & orchestration",
        description: "Packaging services consistently and managing workloads across environments.",
        technologies: ["Docker", "Kubernetes"],
      },
      {
        title: "CI/CD automation",
        description: "Automated testing, build checks, and controlled delivery workflows.",
        technologies: ["GitHub Actions", "GitLab CI"],
      },
      {
        title: "Infrastructure as code",
        description: "Versioned infrastructure configuration and repeatable provisioning.",
        technologies: ["Terraform", "Ansible"],
      },
      {
        title: "Cloud platforms",
        description: "Deployment building blocks for scalable cloud-hosted applications.",
        technologies: ["AWS", "Linux", "Nginx"],
      },
      {
        title: "GitOps & release management",
        description: "Declarative deployments, rollout visibility, and reproducible releases.",
        technologies: ["Argo CD", "GitOps"],
      },
      {
        title: "Monitoring & observability",
        description: "Metrics, traces, and dashboards for production feedback.",
        technologies: ["Prometheus", "Grafana", "OpenTelemetry"],
      },
      {
        title: "DevSecOps",
        description: "Integrating image scanning and security checks into delivery pipelines.",
        technologies: ["Trivy", "Dependency scanning"],
      },
      {
        title: "Reliability engineering",
        description: "Reducing deployment risk and recovering from production incidents.",
        technologies: ["Health checks", "Rollback strategies", "SRE"],
      },
    ],
  },
  "docker-deep-dive": {
    name: "Docker Deep Dive: Build, Ship, and Run Containers",
    specialization: "Container Engineering, Image Delivery & Runtime Operations",
    category: "Containers & Application Delivery",
    platform: "Udemy",
    courseProvider: "Anton Voroniuk, Oleksii Osypenko, Anton Voroniuk Support",
    certificateType: "Certificate of Completion",
    issuedOn: "31 January 2026",
    duration: "2.5 hours",
    learningFormat: "Online course",
    credentialId: "UC-01df1322-683d-4168-a04b-c8e3a317ea5f",
    verifyUrl: "https://ude.my/UC-01df1322-683d-4168-a04b-c8e3a317ea5f",
    pdfUrl: "/certificates/Docker-Deep-Dive.pdf",
    overview:
      "This completed Udemy course introduces the Docker container ecosystem. The technology landscape below highlights modern tools and engineering practices related to building, shipping, securing, and operating containerized applications. They provide professional context and are not a verified list of topics taught in this 2.5-hour course.",
    principlesTitle: "Core container engineering ideas",
    principles: [
      "Reproducible application images and isolated runtime environments",
      "Efficient container builds, layering, and dependency caching",
      "Consistent multi-service development and deployment workflows",
      "Secure image delivery and operational visibility",
    ],
    technologyGroups: [
      {
        title: "Image builds & optimization",
        description: "Producing smaller, repeatable, and multi-platform container images.",
        technologies: ["Dockerfile", "BuildKit", "Buildx", "Multi-stage builds"],
      },
      {
        title: "Local orchestration",
        description: "Developing and running connected application services as a stack.",
        technologies: ["Docker Compose", "Health checks", "Service dependencies"],
      },
      {
        title: "Registries & image distribution",
        description: "Publishing portable images through standardized container registries.",
        technologies: ["OCI Images", "Docker Hub", "GitHub Container Registry"],
      },
      {
        title: "Container security",
        description: "Reducing image and runtime risk through scanning and least privilege.",
        technologies: ["Docker Scout", "Trivy", "SBOM", "Non-root containers"],
      },
      {
        title: "CI/CD for containers",
        description: "Automating image builds, checks, tags, and registry publishing.",
        technologies: ["GitHub Actions", "Docker Build Push Action", "Multi-platform builds"],
      },
      {
        title: "Networking, storage & operations",
        description: "Managing connectivity, persistent data, and runtime constraints.",
        technologies: ["Docker Networks", "Named volumes", "Resource limits", "Container logs"],
      },
    ],
  },
  "hotel-management-system": {
    name: "PHP Laravel: Build Hotel Booking Management System",
    specialization: "Laravel Backend Engineering & Hotel Reservation Systems",
    category: "Backend Development & Booking Platforms",
    platform: "Udemy",
    courseProvider: "Web Coding",
    certificateType: "Certificate of Completion",
    issuedOn: "31 January 2026",
    duration: "7 hours",
    learningFormat: "Online course",
    credentialId: "UC-22f83a77-4cc2-4276-8c81-342fb750aad6",
    verifyUrl: "https://ude.my/UC-22f83a77-4cc2-4276-8c81-342fb750aad6",
    pdfUrl: "/certificates/Hotel-Management-System.pdf",
    overview:
      "Completed a practical PHP Laravel course focused on developing a hotel booking management system. The related technologies below represent modern Laravel backend architecture, reservation workflows, database consistency, secure APIs, and scalable application delivery. They are professional context rather than a verified course syllabus.",
    principlesTitle: "Core hotel booking engineering concepts",
    principles: [
      "Hotel inventory and reservation lifecycle management",
      "Availability validation and booking conflict prevention",
      "Transactional consistency and reliable data management",
      "Secure authentication and authorization",
      "Maintainable and scalable backend architecture"
    ],
    technologyGroups: [
      {
        title: "Laravel backend engineering",
        description: "Building maintainable and modular server-side applications.",
        technologies: ["PHP 8+", "Laravel", "Eloquent ORM", "RESTful APIs", "Service Layer"]
      },
      {
        title: "Database & booking consistency",
        description: "Managing reservations reliably under concurrent requests.",
        technologies: ["MySQL", "PostgreSQL", "Database Transactions", "Row-Level Locking", "Database Indexing"]
      },
      {
        title: "Authentication & security",
        description: "Protecting user accounts, reservations, and administrative operations.",
        technologies: ["Laravel Sanctum", "Laravel Policies", "RBAC", "Request Validation", "Rate Limiting"]
      },
      {
        title: "Booking & payment workflows",
        description: "Designing reservation states and reliable external integrations.",
        technologies: ["Availability Checks", "Stripe", "Webhooks", "Idempotency", "Booking State Management"]
      },
      {
        title: "Performance & asynchronous processing",
        description: "Keeping booking platforms responsive and efficient.",
        technologies: ["Redis", "Laravel Queues", "Laravel Horizon", "Caching", "Scheduled Jobs"]
      },
      {
        title: "Testing & production delivery",
        description: "Improving application reliability and delivery automation.",
        technologies: ["Pest", "PHPUnit", "Docker", "GitHub Actions", "CI/CD"]
      }
    ]
  },

  "laravel-telescope": {
    name: "Laravel Telescope for Absolute Beginners (Arabic)",
    specialization: "Laravel Debugging, Diagnostics & Observability",
    category: "Laravel Development & Application Monitoring",
    platform: "Udemy",
    courseProvider: "Mahmoud Anwar",
    certificateType: "Certificate of Completion",
    issuedOn: "26 August 2023",
    duration: "1.5 hours",
    learningFormat: "Online course",
    credentialId: "UC-eb5ba9cf-3413-4d3f-868d-6264628bd14b",
    verifyUrl: "https://ude.my/UC-eb5ba9cf-3413-4d3f-868d-6264628bd14b",
    pdfUrl: "/certificates/Laravel-Telescope.pdf",
    overview:
      "Completed an introductory Arabic-language course on Laravel Telescope, the debugging assistant for Laravel applications. The related engineering practices below extend into application diagnostics, database performance, queue visibility, logging, and production observability. They are not a verified list of topics taught in the course.",
    principlesTitle: "Core application debugging concepts",
    principles: [
      "Investigating application requests and exceptions",
      "Understanding database queries and performance bottlenecks",
      "Tracking background jobs and application events",
      "Inspecting cache, logs, and system activity",
      "Protecting sensitive diagnostic information"
    ],
    technologyGroups: [
      {
        title: "Laravel Telescope diagnostics",
        description: "Inspecting application activity and debugging request flows.",
        technologies: ["Laravel Telescope", "Request Watcher", "Exception Watcher", "Event Watcher"]
      },
      {
        title: "Database performance analysis",
        description: "Identifying expensive database operations and query problems.",
        technologies: ["Query Watcher", "Slow Queries", "N+1 Detection", "Eloquent ORM", "Database Indexing"]
      },
      {
        title: "Queue & job monitoring",
        description: "Tracking asynchronous workloads and processing failures.",
        technologies: ["Job Watcher", "Laravel Queues", "Redis", "Laravel Horizon", "Failed Jobs"]
      },
      {
        title: "Logging & cache diagnostics",
        description: "Understanding application state and runtime behavior.",
        technologies: ["Log Watcher", "Cache Watcher", "Monolog", "Structured Logging"]
      },
      {
        title: "Modern observability",
        description: "Extending diagnostics into distributed tracing and error monitoring.",
        technologies: ["OpenTelemetry", "Sentry", "Distributed Tracing", "Application Metrics"]
      },
      {
        title: "Security & operations",
        description: "Restricting diagnostic access and protecting production information.",
        technologies: ["Dashboard Authorization", "Sensitive Data Filtering", "Environment Configuration", "Data Retention"]
      }
    ]
  },

  "complete-job-portal-build": {
    name: "PHP with MySQL 2023: Build a Complete Job Portal",
    specialization: "PHP Backend Engineering & Recruitment Systems",
    category: "Backend Development",
    platform: "Udemy",
    courseProvider: "Web Coding",
    certificateType: "Certificate of Completion",
    issuedOn: "Not shown on certificate",
    duration: "Not specified",
    learningFormat: "Online course",
    credentialId: "UC-4450d3cf-0299-40cd-84dc-315cc5a2ef6d",
    verifyUrl: "https://ude.my/UC-4450d3cf-0299-40cd-84dc-315cc5a2ef6d",
    pdfUrl: "/certificates/Complete-Job-Portal-Build.pdf",
    overview:
      "Completed a Udemy course on building a job portal using PHP and MySQL. The related technologies below cover modern backend architecture, database optimization, recruitment workflows, security, and application delivery. They provide broader professional context rather than a verified course syllabus.",
    principlesTitle: "Core recruitment platform concepts",
    principles: [
      "Job posting and application management",
      "Employer and candidate workflows",
      "Secure authentication and access control",
      "Database design and search optimization",
      "Reliable application lifecycle management"
    ],
    technologyGroups: [
      {
        title: "PHP backend engineering",
        description: "Building structured server-side applications.",
        technologies: [
          "PHP 8+", "OOP", "MVC Architecture",
          "RESTful APIs", "Composer"
        ]
      },
      {
        title: "Database engineering",
        description: "Designing efficient and reliable data storage.",
        technologies: [
          "MySQL", "SQL Joins", "Indexing",
          "Transactions", "Query Optimization"
        ]
      },
      {
        title: "Recruitment workflows",
        description: "Supporting job seekers and employer operations.",
        technologies: [
          "Job Listings", "Application Tracking",
          "Search & Filtering", "Pagination",
          "Role-Based Access Control"
        ]
      },
      {
        title: "Security & testing",
        description: "Protecting accounts and maintaining application quality.",
        technologies: [
          "Password Hashing", "CSRF Protection",
          "Prepared Statements", "PHPUnit"
        ]
      },
      {
        title: "Modern deployment",
        description: "Preparing applications for reliable delivery.",
        technologies: [
          "Docker", "Nginx", "GitHub Actions",
          "CI/CD", "Redis"
        ]
      }
    ]
  },

  "english-writing-skills": {
    name: "English Writing Skills",
    specialization: "Professional Writing & Business Communication",
    category: "Professional Communication",
    platform: "Edraak",
    courseProvider: "Edraak",
    certificateType: "Level Completion Certificate",
    issuedOn: "10/2/2021",
    duration: "4 hours",
    learningFormat: "Online course",
    pdfUrl: "/certificates/English-Writing-Skills.pdf",
    overview:
      "Completed an Edraak English writing course focused on professional business emails, speeches, meeting minutes, summaries, essays, and presentations. The related practices below extend these foundations into technical documentation and professional workplace communication.",
    principlesTitle: "Core professional communication concepts",
    principles: [
      "Clear and structured English writing",
      "Professional email communication",
      "Effective business presentations",
      "Meeting minutes and concise summaries",
      "Formal writing and content organization"
    ],
    technologyGroups: [
      {
        title: "Business communication",
        description: "Writing effective professional correspondence.",
        technologies: [
          "Business Emails", "Formal Writing",
          "Professional Tone", "Email Etiquette"
        ]
      },
      {
        title: "Technical documentation",
        description: "Applying structured writing to technical information.",
        technologies: [
          "Technical Writing", "Markdown",
          "API Documentation", "README Writing"
        ]
      },
      {
        title: "Professional reporting",
        description: "Communicating information clearly and accurately.",
        technologies: [
          "Report Writing", "Executive Summaries",
          "Meeting Minutes", "Content Structuring"
        ]
      },
      {
        title: "Collaboration & presentation",
        description: "Creating and reviewing professional materials.",
        technologies: [
          "Google Docs", "Microsoft Word",
          "Presentation Writing", "Collaborative Editing"
        ]
      }
    ]
  },

  "networking-world": {
    name: "Introduction to Computer Networking",
    specialization: "Computer Networking & Infrastructure",
    category: "Networking Fundamentals",
    platform: "Edraak",
    courseProvider: "Edraak",
    certificateType: "Certificate of Completion",
    issuedOn: "12/7/2020",
    duration: "3 hours",
    learningFormat: "Online course",
    pdfUrl: "/certificates/Networking-World.pdf",
    overview:
      "Completed an introductory Edraak course on computer networking. Documented subjects include network types, addressing, DNS, wired and wireless connectivity, and basic network design. The related technologies below extend these foundations into current networking, security, and cloud infrastructure practices.",
    principlesTitle: "Core networking concepts",
    principles: [
      "Understanding network types and connectivity",
      "Network addressing and communication",
      "Domain Name System fundamentals",
      "Wired and wireless infrastructure",
      "Connecting devices and shared resources"
    ],
    technologyGroups: [
      {
        title: "Networking fundamentals",
        description: "Understanding modern network communication.",
        technologies: [
          "TCP/IP", "OSI Model", "IPv4",
          "IPv6", "Subnetting"
        ]
      },
      {
        title: "Protocols & services",
        description: "Exploring essential network protocols.",
        technologies: [
          "DNS", "DHCP", "HTTP/HTTPS",
          "TCP", "UDP"
        ]
      },
      {
        title: "Network infrastructure",
        description: "Designing and connecting network environments.",
        technologies: [
          "LAN", "WAN", "VLAN",
          "Routing", "Switching"
        ]
      },
      {
        title: "Security & diagnostics",
        description: "Protecting and troubleshooting network activity.",
        technologies: [
          "Firewalls", "VPN", "TLS",
          "Wireshark", "Traceroute"
        ]
      },
      {
        title: "Cloud & container networking",
        description: "Applying networking concepts to modern infrastructure.",
        technologies: [
          "Docker Networking", "Kubernetes Services",
          "AWS VPC", "Load Balancing"
        ]
      }
    ]
  },

  "laravel-socialite": {
    name: "Laravel Socialite - The Complete Guide (Arabic)",
    specialization: "Laravel OAuth & Social Authentication",
    category: "Laravel Authentication",
    platform: "Udemy",
    courseProvider: "Mahmoud Anwar",
    certificateType: "Certificate of Completion",
    issuedOn: "Not shown on certificate",
    duration: "Not specified",
    learningFormat: "Online course",
    credentialId: "UC-e647d841-651d-49e9-a0d5-c4b704534bc9",
    verifyUrl: "https://ude.my/UC-e647d841-651d-49e9-a0d5-c4b704534bc9",
    pdfUrl: "/certificates/Laravel-Socialite.pdf",
    overview:
      "Completed an Arabic-language Udemy course focused on Laravel Socialite. The related technologies below explore modern OAuth authentication, identity providers, secure user sessions, account linking, and authentication architecture.",
    principlesTitle: "Core social authentication concepts",
    principles: [
      "Integrating external identity providers",
      "Understanding OAuth authorization flows",
      "Secure social login and registration",
      "Managing linked user accounts",
      "Protecting sessions and authentication data"
    ],
    technologyGroups: [
      {
        title: "Laravel authentication",
        description: "Building secure authentication workflows.",
        technologies: [
          "Laravel Socialite", "Laravel Fortify",
          "Laravel Sanctum", "Middleware",
          "Authentication Guards"
        ]
      },
      {
        title: "OAuth & identity",
        description: "Implementing modern identity authorization.",
        technologies: [
          "OAuth 2.0", "OpenID Connect",
          "Authorization Code Flow", "PKCE"
        ]
      },
      {
        title: "Social identity providers",
        description: "Connecting applications to external login services.",
        technologies: [
          "Google OAuth", "GitHub OAuth",
          "Facebook Login", "Provider APIs"
        ]
      },
      {
        title: "Account management",
        description: "Handling identities and secure login sessions.",
        technologies: [
          "Account Linking", "Token Management",
          "User Provisioning", "Session Security"
        ]
      },
      {
        title: "Authentication security",
        description: "Protecting login flows and application credentials.",
        technologies: [
          "CSRF Protection", "OAuth State",
          "Secure Cookies", "Token Revocation",
          "HTTPS"
        ]
      }
    ]
  },
};

export const certificates = existingCertifications.map((certificate, index) => {
  const slug = slugs[index];
  return {
    ...certificate,
    slug,
    ...detailsBySlug[slug],
  };
});

export const getCertificate = (slug) => certificates.find((certificate) => certificate.slug === slug);