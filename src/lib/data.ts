/**
 * Single source of truth for all portfolio content.
 *
 * Every fact below is derived strictly from William Ho's CV. Copy has been
 * rewritten for tone and impact, but no companies, roles, dates, technologies,
 * or outcomes have been invented. Where the CV contains no quantified metrics,
 * the content stays qualitative on purpose.
 */

import type { LucideIcon } from "lucide-react";
import {
  Boxes,
  BrainCircuit,
  Code2,
  Database,
  Gauge,
  Github,
  Layers,
  Layout,
  Link2,
  Mail,
  MessageCircle,
  Send,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Wallet,
} from "lucide-react";

export const profile = {
  name: "William Ho",
  title: "AI-Powered Full Stack Engineer",
  location: "Hong Kong",
  email: "williamho0827@gmail.com",
  yearsExperience: "7+",
  availability: "Open to senior & freelance roles",
  photo: "/assets/imgs/me.png",
  // Honest, countable signals pulled directly from the CV.
  headline: "I build fast, scalable products across the full stack — from AI and Web3 to pixel-perfect interfaces.",
  subheadline:
    "Full Stack Engineer with 7+ years shipping production web applications and backend systems for remote teams across the US and Europe. I turn product requirements into clean, maintainable systems that perform.",
  socials: {
    email: "mailto:williamho0827@gmail.com",
    github: "https://github.com/williamhopro",
    telegram: "https://t.me/williamho0827",
    discord: "williamho0827",
  },
} as const;

export type SocialLink = {
  label: string;
  handle: string;
  icon: LucideIcon;
  /** External profile URL, or null for handles without a public link (e.g. Discord). */
  href: string | null;
  /** Value copied to the clipboard when there is no link to open. */
  copy?: string;
};

/**
 * Direct ways to reach William. Discord usernames have no public profile URL,
 * so that entry copies the handle to the clipboard instead of linking out.
 */
export const socialLinks: SocialLink[] = [
  {
    label: "Email",
    handle: "williamho0827@gmail.com",
    icon: Mail,
    href: "mailto:williamho0827@gmail.com",
  },
  {
    label: "GitHub",
    handle: "williamhopro",
    icon: Github,
    href: "https://github.com/williamhopro",
  },
  {
    label: "Telegram",
    handle: "@williamho0827",
    icon: Send,
    href: "https://t.me/williamho0827",
  },
  {
    label: "Discord",
    handle: "williamho0827",
    icon: MessageCircle,
    href: null,
    copy: "williamho0827",
  },
];

export const stats = [
  { value: "7+", label: "Years building for production" },
  { value: "4", label: "Progressive roles to Senior" },
  { value: "30+", label: "Technologies in the toolkit" },
  { value: "4", label: "Countries of remote delivery" },
] as const;

export const about = {
  eyebrow: "About",
  title: "Engineering that ships, scales, and stays maintainable",
  paragraphs: [
    "I'm a Full Stack Engineer with 7+ years turning ambiguous product requirements into reliable, performant software. My focus is simple: write clear, concise code that's easy to maintain and troubleshoot — and build systems that hold up as teams and traffic grow.",
    "I've delivered across the entire stack: React, Next.js and Angular on the front end; Node.js, Express and Nest.js on the back end; plus AI/LLM integrations and blockchain dApp functionality. I've worked the way modern teams do — Git, CI/CD, and Agile — embedded in cross-functional teams that translate business goals into technical solutions.",
    "Having delivered remotely for companies based in the US and Europe, I'm equally comfortable owning work independently or collaborating across time zones. The constant across every role: secure, performant, well-architected products that recruiters, founders, and clients can rely on.",
  ],
  highlights: [
    "Full-stack ownership from database to interface",
    "Secure auth with JWT & OAuth2 by default",
    "Performance-first: SSR/SSG, lazy loading, caching",
    "Comfortable across AI, Web3, and SaaS domains",
  ],
} as const;

export type SkillCategory = {
  name: string;
  icon: LucideIcon;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Engineering",
    icon: Layout,
    description: "Responsive, SEO-friendly interfaces with modern frameworks.",
    skills: ["React", "Next.js", "Angular", "Vue 2", "Vue 3", "Nuxt.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    name: "Backend & APIs",
    icon: Server,
    description: "RESTful and GraphQL services, auth, and data processing.",
    skills: ["Node.js", "Express", "Nest.js", "Django", "Laravel", "ASP.NET", "Python", "REST APIs", "GraphQL"],
  },
  {
    name: "AI / ML",
    icon: BrainCircuit,
    description: "LLM-powered features and language understanding.",
    skills: ["LLM", "RAG", "NLP", "GPT-4", "GPT-3.5", "Python"],
  },
  {
    name: "Web3 / Blockchain",
    icon: Wallet,
    description: "Smart contract interactions and dApp functionality.",
    skills: ["Web3.js", "Ethers.js", "Smart Contracts", "Wallet Integration", "Token Transactions"],
  },
  {
    name: "UI Systems & Styling",
    icon: Sparkles,
    description: "Design systems and reusable component libraries.",
    skills: ["Tailwind CSS", "SCSS", "MUI", "Styled Components", "Ant Design", "Bootstrap"],
  },
  {
    name: "Databases",
    icon: Database,
    description: "Relational and real-time data at scale.",
    skills: ["PostgreSQL", "MongoDB", "Supabase", "Firebase", "SQLite"],
  },
  {
    name: "Mobile",
    icon: Smartphone,
    description: "Cross-platform apps from a single codebase.",
    skills: ["Flutter", "React Native", "Ionic"],
  },
  {
    name: "DevOps & Tooling",
    icon: Boxes,
    description: "Shipping with CI/CD and modern workflows.",
    skills: ["Docker", "Git", "GitHub", "GitLab", "Bitbucket", "CI/CD", "Vercel", "Jira", "Asana"],
  },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  context: string;
  challenge: string;
  solution: string;
  impact: string[];
  tech: string[];
  icon: LucideIcon;
  accent: string;
};

/**
 * "Featured Work" presents real engagement highlights from the CV as case
 * studies. Each maps to an actual role and only describes responsibilities and
 * outcomes listed in the CV — nothing fabricated.
 */
export const projects: Project[] = [
  {
    slug: "web3-dapp",
    title: "Web3 dApp & Wallet Platform",
    tagline: "Blockchain features that feel as smooth as web2.",
    context: "Senior Full Stack Engineer · Cole Nangle",
    challenge:
      "Bring trustworthy on-chain functionality — wallet connection, token transfers, and contract calls — into a mainstream product without sacrificing UX or security.",
    solution:
      "Developed and tested smart contract interactions with Web3.js and Ethers.js, then built core dApp features including wallet connection and token transactions on top of a scalable React/Next.js front end.",
    impact: [
      "Shipped wallet connection, token transactions, and core dApp flows",
      "Hardened access with JWT and OAuth2 authentication",
      "Integrated seamlessly with RESTful and GraphQL data layers",
    ],
    tech: ["React", "Next.js", "Web3.js", "Ethers.js", "Node.js", "JWT", "OAuth2"],
    icon: Wallet,
    accent: "from-violet-500/20 to-fuchsia-500/10",
  },
  {
    slug: "ssr-platform",
    title: "High-Performance SSR/SSG Platform",
    tagline: "SEO-friendly front ends engineered for speed.",
    context: "Senior Full Stack Engineer · Cole Nangle",
    challenge:
      "Deliver data-driven interfaces that rank well and load fast, while staying maintainable as features multiply.",
    solution:
      "Implemented server-side rendering and static site generation with Next.js, designed reusable UI components, and built RESTful and GraphQL APIs to power dynamic, data-driven interfaces.",
    impact: [
      "Improved front-end performance and reduced load time",
      "Reusable component architecture for faster delivery",
      "SSR/SSG for SEO and first-paint performance",
    ],
    tech: ["Next.js", "React", "GraphQL", "REST", "Node.js", "Express"],
    icon: Gauge,
    accent: "from-sky-500/20 to-cyan-500/10",
  },
  {
    slug: "supabase-saas",
    title: "Full-Stack SaaS on Supabase",
    tagline: "Real-time product backed by a clean data model.",
    context: "Full Stack Engineer · Jaden Martin",
    challenge:
      "Stand up a complete product — auth, database, real-time, and APIs — that's responsive, SEO-friendly, and ready to deploy.",
    solution:
      "Built React/Next.js front ends and Express APIs, integrated Supabase for database, authentication, and real-time features, designed PostgreSQL schemas, and deployed to cloud platforms like Vercel and Render.",
    impact: [
      "End-to-end delivery from PostgreSQL schema to deployed UI",
      "Real-time features and secure JWT/OAuth auth flows",
      "Optimized with lazy loading, API caching, and efficient state",
    ],
    tech: ["Next.js", "Express", "Supabase", "PostgreSQL", "Python", "Vercel"],
    icon: Database,
    accent: "from-emerald-500/20 to-teal-500/10",
  },
  {
    slug: "design-system",
    title: "Scalable Design System & Component Library",
    tagline: "One source of truth for a consistent UI.",
    context: "Frontend Developer · Othman Adi",
    challenge:
      "Translate Figma designs into a maintainable, scalable front-end architecture that performs across browsers and devices.",
    solution:
      "Built reusable UI components with Tailwind CSS, SCSS, and MUI, architected with Styled Components and modular CSS, and added TypeScript-driven state management and API integration — collaborating with designers in Figma.",
    impact: [
      "Reusable component system across multiple projects",
      "Code splitting and lazy loading for faster pages",
      "Cross-browser compatibility and mobile responsiveness",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "SCSS", "MUI", "Styled Components"],
    icon: Layers,
    accent: "from-amber-500/20 to-orange-500/10",
  },
];

export type Experience = {
  role: string;
  company: string;
  /** Optional company/platform wordmark shown in place of the company text. */
  logo?: string;
  stack: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
};

export const experiences: Experience[] = [
  {
    role: "Senior Full Stack Engineer",
    company: "Freelancer",
    logo: "/assets/imgs/freelancer_logo.png",
    stack: "React · Next.js · Angular · Blockchain",
    period: "Oct 2024 — Present",
    location: "Freelancer.com · Remote",
    summary:
      "Lead full-stack delivery across web and Web3 for international clients, owning architecture, performance, and security for data-driven products.",
    achievements: [
      "Built scalable web applications with React, Next.js, and Angular, focused on performance and maintainability",
      "Developed and tested smart contract interactions with Web3.js / Ethers.js, plus wallet connection and token transactions",
      "Implemented SSR and SSG with Next.js and designed reusable UI components that cut load time",
      "Built and integrated RESTful and GraphQL APIs, with secure JWT and OAuth2 authentication",
      "Drove delivery with Git, CI/CD pipelines, and Agile in cross-functional teams",
    ],
  },
  {
    role: "Full Stack Engineer",
    company: "Jaden Martin",
    stack: "React · Next.js · Node.js",
    period: "May 2022 — Oct 2024",
    location: "Washington, UT, USA · Remote",
    summary:
      "Delivered responsive, SEO-friendly full-stack applications end to end, from database design to cloud deployment.",
    achievements: [
      "Developed and deployed full-stack apps with React and Next.js for responsive, SEO-friendly front ends",
      "Built RESTful APIs with Node.js and Express handling authentication, routing, and data processing",
      "Integrated Supabase for database, authentication, and real-time features; designed PostgreSQL schemas",
      "Optimized performance with lazy loading, API caching, and efficient state management",
      "Created Python automation tools and deployed on Vercel, Render, and similar platforms",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Othman Adi",
    stack: "React · Next.js · Tailwind · SCSS · MUI",
    period: "Oct 2020 — May 2022",
    location: "Berlin, DE · Remote",
    summary:
      "Built performant, accessible interfaces and a scalable front-end architecture from Figma designs.",
    achievements: [
      "Developed responsive React/Next.js applications with improved page-load performance and SEO",
      "Built reusable UI components with Tailwind CSS, SCSS, and MUI; architected with Styled Components",
      "Implemented modern state management and API integration in TypeScript",
      "Improved performance via code splitting, lazy loading, and optimization techniques",
      "Translated Figma designs into production-ready code and participated in code reviews",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Yurii Voina",
    stack: "HTML5 · CSS · JavaScript · Shopify",
    period: "May 2019 — Oct 2020",
    location: "Vienna, AT · Remote",
    summary:
      "Built and customized responsive websites and Shopify storefronts with a focus on UX and stability.",
    achievements: [
      "Developed responsive websites with HTML5, CSS3, and JavaScript across desktop and mobile",
      "Built and customized Shopify stores, including theme modifications and layout adjustments",
      "Implemented UI improvements that enhanced user experience and page-load performance",
      "Debugged and resolved front-end issues, improving site functionality and stability",
    ],
  },
];

export type Highlight = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const highlights: Highlight[] = [
  {
    icon: Code2,
    title: "7+ Years, Full Stack",
    description:
      "Progressed from Junior Developer to Senior Full Stack Engineer across four roles, shipping production software the whole way.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Web3 Fluency",
    description:
      "Hands-on with LLM, RAG, and NLP, plus blockchain dApp functionality — bridging emerging tech with practical product delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Security by Default",
    description:
      "Implemented secure authentication and authorization with JWT and OAuth2 to protect user data and manage access control.",
  },
  {
    icon: Gauge,
    title: "Performance Focus",
    description:
      "SSR/SSG, code splitting, lazy loading, and API caching to reduce load times and keep applications fast at scale.",
  },
  {
    icon: Link2,
    title: "Global Remote Delivery",
    description:
      "Delivered remotely for teams in the US and Europe, owning work independently and collaborating across time zones.",
  },
  {
    icon: Layers,
    title: "BSc Computer Science",
    description:
      "Lingnan University — coursework in Data Structures, Algorithms, Database Systems, Software Engineering, and Cloud Computing.",
  },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    icon: Layout,
    title: "Full-Stack Web Applications",
    description:
      "End-to-end product builds with React, Next.js, and Node.js — responsive, SEO-friendly, and production-ready.",
    deliverables: ["SSR & SSG with Next.js", "REST & GraphQL APIs", "Auth with JWT / OAuth2"],
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Features",
    description:
      "Integrate LLM, RAG, and NLP capabilities into your product to add intelligent, language-driven experiences.",
    deliverables: ["LLM integration", "RAG pipelines", "GPT-4 / GPT-3.5 features"],
  },
  {
    icon: Wallet,
    title: "Web3 & dApp Development",
    description:
      "Smart contract interactions and dApp functionality including wallet connection and token transactions.",
    deliverables: ["Wallet integration", "Token transactions", "Web3.js / Ethers.js"],
  },
  {
    icon: Sparkles,
    title: "Design Systems & UI Engineering",
    description:
      "Reusable component libraries and scalable front-end architecture from Figma designs to production code.",
    deliverables: ["Component libraries", "Tailwind / SCSS / MUI", "Cross-browser & responsive"],
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description:
      "Audit and accelerate existing apps with code splitting, lazy loading, caching, and efficient state management.",
    deliverables: ["Load-time reduction", "Caching strategy", "State optimization"],
  },
  {
    icon: Database,
    title: "Backend & Database Design",
    description:
      "Robust APIs and well-modeled databases on PostgreSQL, MongoDB, Supabase, and Firebase.",
    deliverables: ["Schema design", "Real-time data", "Secure API endpoints"],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;
