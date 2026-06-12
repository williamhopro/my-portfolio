# William Ho — Portfolio

A premium personal portfolio for **William Ho, AI-Powered Full Stack Engineer**, built as a single-page experience optimized for recruiters, founders, and clients.

## Tech Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS** with a shadcn/ui-style design system
- **Framer Motion** for scroll and entrance animations
- **lucide-react** icons

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO metadata, JSON-LD
│   ├── page.tsx            # Composes all sections
│   ├── globals.css         # Design tokens + Tailwind layers
│   ├── sitemap.ts          # SEO sitemap
│   └── robots.ts           # SEO robots
├── components/
│   ├── ui/                 # Button, Badge, Card (shadcn-style primitives)
│   ├── motion/reveal.tsx   # Reusable Framer Motion reveal/stagger
│   ├── sections/           # Hero, About, Skills, Projects, Experience,
│   │                       # Achievements, Services, Contact
│   ├── navbar.tsx
│   ├── footer.tsx
│   └── section-heading.tsx
└── lib/
    ├── data.ts             # Single source of truth for ALL content
    └── utils.ts            # cn() class helper
```

## Editing Content

All copy lives in [`src/lib/data.ts`](src/lib/data.ts). Update profile, skills,
projects, experience, services, and contact details there — every section reads
from it, so there are no hardcoded strings to hunt down.

## Notes on Content Integrity

Every fact (companies, roles, dates, technologies, education) is taken directly
from the CV. No projects, metrics, certifications, or awards were invented.
Where the CV had no quantified outcomes, the copy stays qualitative on purpose.

## Deployment

Optimized for [Vercel](https://vercel.com). Push to a Git repo and import — no
configuration required. Update the `siteUrl` constant in `layout.tsx`,
`sitemap.ts`, and `robots.ts` to your production domain.
