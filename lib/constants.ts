export const siteConfig = {
  name: "Vaultic AI",
  tagline: "Build Lightning-Fast AI Experiences & Elite Web Apps",
  description:
    "Vaultic AI crafts conversion-focused websites, robust web apps, and production AI systems—deployed on Vercel for speed at global scale.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://vaultic.ai",
  links: {
    twitter: "https://twitter.com/VaulticAI",
    github: "https://github.com/VaulticAI",
    linkedin: "https://linkedin.com/company/VaulticAI",
  },
};

export const navigation = {
  main: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Website",
      href: "/website",
      submenu: [
        { name: "Website", href: "/website", description: "Pixel-perfect sites" },
        { name: "Web App", href: "/web-app", description: "Scalable applications" },
      ],
    },
    {
      name: "AI",
      href: "/ai",
      submenu: [
        {
          name: "AI Automation",
          href: "/ai/automation",
          description: "Automate operations end-to-end",
        },
        {
          name: "AI Agent",
          href: "/ai/agent",
          description: "Custom agents that move metrics",
        },
        {
          name: "AI Infrastructure",
          href: "/ai/infrastructure",
          description: "Production-grade pipelines",
        },
      ],
    },
    {
      name: "Portfolio",
      href: "/portfolio",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ],
};

export const services = [
  {
    title: "Website",
    description: "Pixel-perfect sites that convert, with world-class SEO.",
    icon: "Globe",
    href: "/website",
    outcomes: ["95+ Lighthouse", "SEO optimized", "Conversion focused"],
  },
  {
    title: "Web App",
    description: "Scalable apps with clean architecture and gorgeous UI.",
    icon: "Code",
    href: "/web-app",
    outcomes: ["Enterprise ready", "Real-time updates", "Modern stack"],
  },
  {
    title: "AI Automation",
    description: "Automate ops end-to-end with resilient workflows.",
    icon: "Zap",
    href: "/ai/automation",
    outcomes: ["Zero downtime", "80% time saved", "Auto-scaling"],
  },
  {
    title: "AI Agent",
    description: "Deploy custom agents that actually move metrics.",
    icon: "Brain",
    href: "/ai/agent",
    outcomes: ["Goal-driven", "Context-aware", "Production ready"],
  },
  {
    title: "AI Infrastructure",
    description: "Production-grade pipelines, evals, and observability.",
    icon: "Server",
    href: "/ai/infrastructure",
    outcomes: ["Edge deployed", "Real-time monitoring", "99.9% uptime"],
  },
];

export const processSteps = [
  {
    title: "Discover",
    description: "Deep dive into your goals, audience, and technical requirements.",
  },
  {
    title: "Architect",
    description: "Design scalable solutions with clean architecture and best practices.",
  },
  {
    title: "Build",
    description: "Craft pixel-perfect UI and robust backend systems.",
  },
  {
    title: "Integrate AI",
    description: "Deploy intelligent features that enhance user experience.",
  },
  {
    title: "Launch & Scale",
    description: "Deploy globally with edge optimization and monitoring.",
  },
];

export const techStack = [
  { name: "Next.js", icon: "NextJS" },
  { name: "Vercel", icon: "Vercel" },
  { name: "Tailwind", icon: "Tailwind" },
  { name: "Supabase", icon: "Supabase" },
  { name: "Stripe", icon: "Stripe" },
  { name: "n8n", icon: "N8N" },
];

export const metrics = [
  { value: "95+", label: "Lighthouse Score" },
  { value: "< 100ms", label: "TTFB on Vercel Edge" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "Global", label: "Edge Deployment" },
];

export const testimonials = [
  {
    quote:
      "Vaultic AI delivered an AI-powered dashboard that cut our support time in half. Incredible work.",
    author: "Sarah Chen",
    role: "CTO, TechFlow",
    avatar: "/testimonials/avatar1.jpg",
  },
  {
    quote:
      "Their performance optimization helped us achieve a 95 Lighthouse score and 40% conversion increase.",
    author: "Marcus Johnson",
    role: "VP Engineering, DataCore",
    avatar: "/testimonials/avatar2.jpg",
  },
  {
    quote:
      "The AI agents they built integrate seamlessly and deliver measurable business value daily.",
    author: "Alex Rivera",
    role: "CEO, InnovateLab",
    avatar: "/testimonials/avatar3.jpg",
  },
];

