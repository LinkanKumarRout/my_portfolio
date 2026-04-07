/**
 * Portfolio content — edit this file to update copy, links, and media URLs.
 * For local images, put files in /public (e.g. public/images/avatar.jpg) and set src to "/images/avatar.jpg".
 */

export const site = {
  /** Browser tab title */
  documentTitle: 'Linkan Kumar Rout | Software Developer',
  /** Logo text in the navbar */
  brandName: 'Linkan Kumar Rout',
  /** Shown after © year in the footer */
  copyrightName: 'Linkan Kumar Rout',
  footerNote: 'Built with React & Tailwind CSS.',
}

export const navigation = [
  { href: '#home', id: 'home', label: 'Home' },
  { href: '#about', id: 'about', label: 'About' },
  { href: '#skills', id: 'skills', label: 'Skills' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#contact', id: 'contact', label: 'Contact' },
]

export const sectionIds = navigation.map((item) => item.id)

export const hero = {
  avatarSrc: '/images/myimage.png',
  avatarAlt: 'Linkan Kumar Rout — software developer',
  greeting: "Hi, I'm",
  /** Shown in accent style (your name) */
  name: 'Linkan Kumar Rout',
  /** One line under the name */
  role: 'Software Developer',
  tagline:
    'I design and build reliable software—clean architecture, solid APIs, and interfaces people enjoy using.',
  availability: {
    show: true,
    /** Tooltip + short screen-reader hint */
    label: 'Open to opportunities',
  },
  primaryCta: { href: '#projects', label: 'View Projects' },
  secondaryCta: { href: '#contact', label: 'Get in Touch' },
}

export const about = {
  title: 'About Me',
  imageSrc: '/images/myimage.png',
  imageAlt: 'Developer Image',
  paragraphs: [
    "I'm a software developer focused on maintainable systems—web platforms, services, and tooling that scale. I care about clear requirements, testing where it matters, and shipping incrementally.",
    'Outside of delivery work, I stay current with languages and frameworks, contribute where I can, and enjoy breaking down complex problems into simple designs.',
  ],
  closingLine: 'Available for full-time roles, contracts, and interesting collaborations.',
}

export const skillsSection = {
  title: 'Skills & Technologies',
  intro: 'Filter by area—or browse the full stack I work with.',
  skills: [
    { name: 'JavaScript', category: 'Language' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Python', category: 'Language' },
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Git', category: 'Tools' },
    { name: 'REST APIs', category: 'Backend' },
    { name: 'SQL', category: 'Database' },
    { name: 'Docker', category: 'Tools' },
  ],
}

export const projectsSection = {
  title: 'Projects',
  projects: [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack storefront with cart, payments, and admin analytics—emphasis on performance and inventory correctness.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      imageAlt: 'E-commerce project preview',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      link: '#',
    },
    {
      title: 'Task & Sprint Board',
      description: 'Team task board with roles, comments, and activity feeds; built for clarity under real concurrent use.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      imageAlt: 'Task management app preview',
      tags: ['TypeScript', 'React', 'WebSockets'],
      link: '#',
    },
    {
      title: 'Operations Dashboard',
      description: 'Internal dashboard aggregating metrics and alerts from multiple services with exportable reports.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      imageAlt: 'Analytics dashboard preview',
      tags: ['React', 'REST', 'Charts'],
      link: '#',
    },
  ],
}

export const contact = {
  title: 'Get in Touch',
  intro:
    "I'm open to software engineering roles, freelance work, and technical collaborations. Send an email or connect on the platforms below.",
  email: 'linkankumarrout@gmail.com',
  /** Optional extra links — add or remove entries as needed */
  socialLinks: [
    { id: 'github', label: 'GitHub', href: 'https://github.com/LinkanKumarRout' },
    { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
  ],
}
