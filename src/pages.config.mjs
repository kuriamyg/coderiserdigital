/**
 * Site-wide settings — the only two things to change when the time comes.
 *
 * DOMAIN: '' keeps the GitHub Pages address. Set it (e.g. 'moseskuria.dev')
 *   after buying a domain; `npm run build` then writes CNAME and switches
 *   every canonical URL, the sitemap and robots.txt. See docs/custom-domain.md.
 * GOATCOUNTER: '' = no visitor stats. Set it to your GoatCounter site code
 *   (the "xyz" in xyz.goatcounter.com) to count visits — no cookies.
 */
export const site = {
  DOMAIN: '',
  GOATCOUNTER: 'moseskuria',
};

export const SITE = site.DOMAIN
  ? `https://${site.DOMAIN}`
  : 'https://kuriamyg.github.io/coderiserdigital';

export const pages = [
  {
    id: 'home',
    file: 'index.html',
    source: 'home.html',
    navLabel: 'Home',
    title: 'Moses Mwangi Kuria — Software Engineer',
    description: 'Software engineer in Nairobi, Kenya, building fintech systems, security-first engineering practices, and practical tools. See PesaFlow, TrustGiving, Contact Sphere, and other work.',
    ogTitle: 'Moses Mwangi Kuria — Software Engineer',
    ogDescription: 'Full-stack engineering where money, trust, or risk are involved. A live Kenya-first budgeting app, a church finance system with audit-grade integrity, and more.',
    ogImage: `${SITE}/assets/og-image.png`,
    canonical: SITE,
  },
  {
    id: 'projects',
    file: 'projects.html',
    source: 'projects.html',
    navLabel: 'Projects',
    title: 'Projects — Moses Mwangi Kuria',
    description: 'PesaFlow (a live Kenya-first budgeting app), TrustGiving (a church finance system with audit-grade integrity), Contact Sphere, SafeReport, a biometric student portal, and my open-source security framework.',
    ogTitle: 'Projects — Moses Mwangi Kuria',
    ogDescription: 'A live fintech app, a financial system of record, an anonymous safety platform, and other things I have built.',
    ogImage: `${SITE}/assets/og-image-projects.png`,
    canonical: `${SITE}/projects.html`,
  },
  {
    id: 'about',
    file: 'about.html',
    source: 'about.html',
    navLabel: 'About',
    title: 'About — Moses Mwangi Kuria',
    description: 'How I build software: understand the real problem first, treat correctness as non-negotiable where money is involved, and ship working versions over big-bang rewrites.',
    ogTitle: 'About — Moses Mwangi Kuria',
    ogDescription: 'Software engineer based in Nairobi, Kenya. How I think about building financial and security-critical systems.',
    ogImage: `${SITE}/assets/og-image-about.png`,
    canonical: `${SITE}/about.html`,
  },
  {
    id: 'skills',
    file: 'skills.html',
    source: 'skills.html',
    navLabel: 'Skills',
    title: 'Skills — Moses Mwangi Kuria',
    description: 'Next.js, React, TypeScript, NestJS, Prisma, PostgreSQL, security engineering, AI integration, and more.',
    ogTitle: 'Skills — Moses Mwangi Kuria',
    ogDescription: 'The stack and practices behind the projects — frontend, backend, databases, security, and AI integration.',
    ogImage: `${SITE}/assets/og-image-skills.png`,
    canonical: `${SITE}/skills.html`,
  },
  {
    id: 'contact',
    file: 'contact.html',
    source: 'contact.html',
    navLabel: 'Contact',
    title: 'Contact — Moses Mwangi Kuria',
    description: 'Open to freelance projects, collaboration, and interesting engineering problems. Get in touch on WhatsApp, email, or GitHub.',
    ogTitle: 'Contact — Moses Mwangi Kuria',
    ogDescription: "Let's talk — WhatsApp, email, or GitHub.",
    ogImage: `${SITE}/assets/og-image-contact.png`,
    canonical: `${SITE}/contact.html`,
  },
  {
    id: 'cv',
    file: 'cv.html',
    source: 'cv.html',
    navLabel: 'CV',
    title: 'CV — Moses Mwangi Kuria',
    description: 'Moses Mwangi Kuria, software engineer in Nairobi: selected projects, skills, practices and education. Printable as a one-page PDF.',
    ogTitle: 'CV — Moses Mwangi Kuria',
    ogDescription: 'Selected projects, skills and practices — printable as a PDF.',
    ogImage: `${SITE}/assets/og-image-about.png`,
    canonical: `${SITE}/cv.html`,
  },
  {
    id: 'case-contact-sphere',
    file: 'contact-sphere.html',
    source: 'contact-sphere.html',
    navLabel: 'Contact Sphere case study',
    inNav: false,
    back: { file: 'projects.html', label: 'Projects' },
    title: 'Contact Sphere case study — Moses Mwangi Kuria',
    description: 'How I built Contact Sphere, a Kenya-first contacts app: offline edits that merge field by field, Kiswahili, two-factor sign-in, audit logs the app cannot change, and a release routine that verifies every step.',
    ogTitle: 'Case study: Contact Sphere',
    ogDescription: 'A Kenya-first contacts app — the problem, the decisions, the security, and how it was shipped.',
    ogImage: `${SITE}/assets/og-image-projects.png`,
    canonical: `${SITE}/contact-sphere.html`,
  },
];
