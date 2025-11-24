// Site configuration - easily customizable by updating values here
export const siteConfig = {
  name: "Alpha Vector Technologies",
  shortName: "Alpha Vector",
  description: "Forensic Methodologies for Digital Accountability",
  url: "https://alphavectortech.com",

  // Branding
  founder: {
    name: "Gavin Sangedha",
    title: "Principal Researcher",
    email: "gavin@alphavectortech.com",
    linkedin: "https://linkedin.com/in/gavinsangedha",
  },

  // Business details
  abn: "50 353 196 500",

  // Navigation
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Research",
      href: "/research",
    },
    {
      title: "Methodologies",
      href: "/methodologies",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],

  // Social links
  links: {
    linkedin: "https://www.linkedin.com/in/gavin-sangedha",
    github: "https://github.com",
  },

  // Keywords for SEO
  keywords: [
    "digital forensics",
    "AI accountability",
    "cryptocurrency security",
    "executive accountability",
    "immutable evidence",
    "forensic methodologies",
    "blockchain analysis",
    "regulatory compliance",
    "corporate governance",
    "cognitive governance",
    "supply chain security",
    "Gavin Sangedha",
    "Alpha Vector Technologies",
  ],

  // Validation markers
  validations: [
    "Institutional-Grade Forensic Methodologies",
    "Peer-Reviewed Research Standards",
    "Real-World Enterprise Deployments",
  ],
}

export type SiteConfig = typeof siteConfig
