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