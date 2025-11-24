'use client';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ResearchCard from '../components/ResearchCard';

const researchPapers = [
  {
    title: "The Mens Rea Vector",
    subtitle: "AI-Driven Epistemic Analysis for Quantifying Executive Liability",
    abstract: "Corporate software failures can no longer shield executives behind claims of ignorance. The Mens Rea Vector establishes a mathematically rigorous forensic methodology that reconstructs organizational knowledge states from digital artifacts, proving executive culpability with prima facie certainty. By combining Judea Pearl's causal inference framework with Tree of Thoughts analysis of development artifacts and Graph of Thoughts aggregation of organizational patterns, this methodology transforms git commits, pull requests, and communications into dispositive evidence of fiduciary breach.",
    wordCount: "~5,000 words",
    href: "/research/mens-rea-vector"
  },
  {
    title: "The Byzantine Calculus",
    subtitle: "Quantifying Distributed Ledger Security as Enterprise Financial Risk",
    abstract: "Distributed ledger technology security must transition from cryptographic theory to quantifiable financial metrics. North Korean state actors have stolen $6 billion since 2017, with $2 billion extracted in 2025 alone, demonstrating that theoretical Byzantine fault tolerance provides insufficient protection against sophisticated adversaries. This framework translates consensus-layer security into board-comprehensible risk metrics, establishes fiduciary duties for oversight, and quantifies systemic contagion across interconnected DLT infrastructure using mathematical models validated in traditional financial networks.",
    wordCount: "~5,000 words",
    href: "/research/byzantine-calculus"
  },
  {
    title: "The Sangedha Framework",
    subtitle: "A Causal Forensics Protocol for Algorithmic Negligence Attribution",
    abstract: "A definitive legal-technical doctrine establishing standards for attributing corporate liability when automated systems cause harm. Corporations deploying algorithmic systems now face unprecedented legal exposure following a convergence of three critical developments: Delaware courts have extended Caremark oversight duties to mission-critical automated systems, federal regulators have secured record enforcement actions exceeding $8 billion in 2024, and technical standards now enable mathematically rigorous causal attribution of algorithmic failures to specific governance breakdowns.",
    wordCount: "~5,500 words",
    href: "/research/sangedha-framework"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-surface-base">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-px w-12 bg-accent"></div>
              <span className="text-accent font-mono text-sm uppercase tracking-wide">Alpha Vector Technologies</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
              Institutional Security Research & <span className="gradient-text">Digital Accountability</span>
            </h1>
            
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Pioneering causal forensics methodologies for algorithmic negligence attribution. 
              Our research establishes mathematically rigorous frameworks that transform technical 
              failures into legally cognizable claims with courtroom-ready evidence.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <div className="flex items-center space-x-2 text-text-tertiary text-sm">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>ABN: 50 353 196 500</span>
              </div>
              <div className="flex items-center space-x-2 text-text-tertiary text-sm">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Principal Researcher: Gavin Sangedha</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#research" className="btn-primary text-center">
                View Research Papers
              </a>
              <a href="/contact" className="btn-secondary text-center">
                Professional Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Research Papers Section */}
      <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Research Publications
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Comprehensive frameworks establishing legal-technical standards for corporate accountability in algorithmic systems, digital forensics, and enterprise security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchPapers.map((paper, index) => (
              <ResearchCard key={paper.href} {...paper} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">
                Principal Researcher
              </h2>
              <h3 className="text-xl text-accent mb-4">Gavin Sangedha</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Gavin Sangedha is the founder and Principal Researcher at Alpha Vector Technologies, 
                specializing in cybersecurity forensics, AI governance frameworks, and digital 
                accountability research. His work focuses on developing mathematically rigorous 
                methodologies for attributing corporate liability in algorithmic system failures.
              </p>
              <p className="text-text-secondary mb-6 leading-relaxed">
                His research synthesizes decades of computer science advances in formal verification, 
                causal inference, and cryptographic proofs with established legal doctrines to create 
                frameworks that satisfy Federal Rules of Evidence standards and Daubert admissibility 
                requirements.
              </p>
              <div className="flex flex-col space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-text-secondary text-sm">South Australia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-text-secondary text-sm font-mono">gavin.sangedha@alphavectortech.com</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-elevated rounded-xl p-8 border border-border-subtle">
              <h4 className="text-lg font-semibold text-text-primary mb-6">Research Specializations</h4>
              <ul className="space-y-4">
                {[
                  "Causal Forensics & Algorithmic Negligence Attribution",
                  "Judea Pearl's Do-Calculus for Legal Causation",
                  "Tree of Thoughts / Graph of Thoughts Analysis",
                  "Post-Quantum Cryptographic Migration",
                  "Byzantine Fault Tolerance & DLT Security",
                  "Caremark Oversight Duty Compliance",
                  "Daubert-Admissible Technical Expert Testimony"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-text-secondary text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
