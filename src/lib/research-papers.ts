export type ResearchPaper = {
  id: string;
  documentId: string;
  slug: string;
  title: string;
  subtitle?: string;
  abstract: string;
  type: "capstone" | "doctrine" | "case-study";
  fullContentPath: string;
  pdfPath?: string;
  classification: string;
  date: string;
  keywords: string[];
  status: "Final" | "Draft" | "Active";
};

export const researchPapers: ResearchPaper[] = [
  // THE CAPSTONE - THE HUB
  {
    id: "AV-MO-2026-001",
    documentId: "AV-MO-2026-001",
    slug: "the-sangedha-framework",
    title: "The Sangedha Framework",
    subtitle: "A Causal Forensics Protocol for Algorithmic Negligence Attribution",
    abstract: "A definitive legal-technical doctrine establishing standards for attributing corporate liability when automated systems cause harm. This framework synthesizes Delaware Chancery Court precedent, SEC enforcement standards, and mathematical verification methodologies into a unified protocol for algorithmic negligence attribution.",
    type: "capstone",
    fullContentPath: "/papers/the-sangedha-framework.md",
    pdfPath: "/papers/the-sangedha-framework.pdf",
    classification: "Strategic Analysis – Global Economic and National Security Implications",
    date: "November 23, 2025",
    keywords: ["Liability Attribution", "Mens Rea Vector", "Semantic Provenance", "Epistemic Discovery", "Caremark Doctrine", "Daubert Standard"],
    status: "Final",
  },
  // THE DOCTRINES - THE SPOKES
  {
    id: "AV-D-2026-01",
    documentId: "AV-D-2026-01",
    slug: "the-byzantine-calculus",
    title: "The Byzantine Calculus",
    subtitle: "Quantifying Distributed Ledger Security as Enterprise Financial Risk",
    abstract: "Distributed ledger technology security must transition from cryptographic theory to quantifiable financial metrics. This framework translates consensus-layer security into board-comprehensible risk metrics, establishes fiduciary duties for oversight, and quantifies systemic contagion across interconnected DLT infrastructure.",
    type: "doctrine",
    fullContentPath: "/papers/the-byzantine-calculus.md",
    pdfPath: "/papers/the-byzantine-calculus.pdf",
    classification: "Institutional Analysis – Financial Cryptography",
    date: "November 23, 2025",
    keywords: ["Byzantine Fault Tolerance", "Cost-of-Corruption", "Contagion Models", "Post-Quantum Cryptography", "MEV", "Caremark Liability"],
    status: "Final",
  },
  {
    id: "AV-D-2026-02",
    documentId: "AV-D-2026-02",
    slug: "the-mens-rea-vector",
    title: "The Mens Rea Vector",
    subtitle: "AI-Driven Epistemic Analysis for Quantifying Executive Liability",
    abstract: "Corporate software failures can no longer shield executives behind claims of ignorance. This methodology establishes mathematically rigorous forensic techniques that reconstruct organizational knowledge states from digital artifacts, proving executive culpability with prima facie certainty through Judea Pearl's causal inference framework.",
    type: "doctrine",
    fullContentPath: "/papers/the-mens-rea-vector.md",
    pdfPath: "/papers/the-mens-rea-vector.pdf",
    classification: "Institutional Analysis – Forensic Methodologies",
    date: "November 23, 2025",
    keywords: ["Causal AI", "Tree of Thoughts", "Graph of Thoughts", "Scienter", "Tellabs Standard", "Silent Patching"],
    status: "Final",
  },
];

export function getPaperBySlug(slug: string): ResearchPaper | undefined {
  return researchPapers.find((paper) => paper.slug === slug);
}

export function getCapstone(): ResearchPaper | undefined {
  return researchPapers.find((paper) => paper.type === "capstone");
}

export function getDoctrines(): ResearchPaper[] {
  return researchPapers.filter((paper) => paper.type === "doctrine");
}
