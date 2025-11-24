import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const researchPapers = [
  {
    id: "AV-001",
    slug: "verifiable-resilience",
    documentId: "DOC_2024_VR",
    title: "Verifiable Resilience: The Byzantine Calculus",
    abstract: "A quantitative security assessment methodology for distributed ledger systems through economic attack surface analysis. Establishes mathematical foundations for evaluating blockchain security under adversarial conditions.",
    type: "Doctrine",
    classification: "Strategic",
    access: "Unrestricted"
  },
  {
    id: "AV-002",
    slug: "ghost-in-machine",
    documentId: "DOC_2024_GM",
    title: "Ghost in the Machine: Algorithmic Mens Rea",
    abstract: "Forensic frameworks for reconstructing culpability in autonomous system failures through legally defensible causal analysis and evidentiary standards. Establishes the doctrine of algorithmic intent.",
    type: "Framework",
    classification: "Strategic",
    access: "Unrestricted"
  },
  {
    id: "AV-003",
    slug: "chimera-doctrine",
    documentId: "DOC_2024_CD",
    title: "The Chimera Doctrine: Cognitive Warfare",
    abstract: "Verifiable frameworks protecting institutional decision-making capacity against epistemic compromise and information warfare. Defines protocols for cognitive security in autonomous environments.",
    type: "Protocol",
    classification: "Strategic",
    access: "Unrestricted"
  },
  {
    id: "AV-004",
    slug: "first-thinker-architecture",
    documentId: "DOC_2024_FTA",
    title: "First-Thinker Architecture: Recursive Reasoning",
    abstract: "Operationalizing advanced cognitive architectures using Chain of Density for Epistemic Tightening and Tree of Thoughts for decision mapping. Bridges technical failure and legal liability.",
    type: "Architecture",
    classification: "Strategic",
    access: "Unrestricted"
  },
  {
    id: "AV-005",
    slug: "duty-of-epistemic-diligence",
    documentId: "DOC_2024_DED",
    title: "Duty of Epistemic Diligence: Legal Standard",
    abstract: "Establishes the emerging legal standard for algorithmic accountability and the duty of care in autonomous systems. Provides mathematically rigorous proof of intent in AI decision-making.",
    type: "Legal",
    classification: "Strategic",
    access: "Unrestricted"
  },
  {
    id: "AV-006",
    slug: "agentic-forensics",
    documentId: "DOC_2024_AF",
    title: "Agentic Forensics: Automated Discovery",
    abstract: "Methodologies for automated discovery of corporate negligence and systemic risk using autonomous agents. Implements recursive reasoning protocols for evidentiary collection.",
    type: "Methodology",
    classification: "Strategic",
    access: "Unrestricted"
  }
];
