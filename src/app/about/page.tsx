import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Alpha Vector Technologies",
  description: "Security research consultancy specializing in algorithmic accountability, forensic methodologies, and executive liability attribution.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-20">
      <div className="mx-auto max-w-3xl">
        
        {/* Header */}
        <header className="mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-700 mb-4">
            About Alpha Vector
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-6">
            Security Research Consultancy
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Alpha Vector Technologies is a specialized security research consultancy focused on 
            developing forensic methodologies for algorithmic accountability and corporate liability attribution.
          </p>
        </header>

        {/* Company Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-slate-900 mb-6 pb-4 border-b border-slate-200">
            Research Focus
          </h2>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Our research establishes institutional-grade frameworks for attributing legal liability 
              when autonomous systems cause harm. We develop mathematically rigorous methodologies 
              that satisfy evidentiary standards for federal litigation, including <em>Daubert</em> 
              admissibility requirements and <em>Tellabs</em> scienter pleading thresholds.
            </p>
            <p>
              The firm's work addresses a critical gap in contemporary jurisprudence: existing legal 
              doctrines were developed for human decision-making, not autonomous systems that execute 
              millions of decisions per second. Our frameworks translate algorithmic failures into 
              cognizable legal claims with clear elements, burdens of proof, and remedial pathways.
            </p>
          </div>
        </section>

        {/* Principal */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-slate-900 mb-6 pb-4 border-b border-slate-200">
            Principal Researcher
          </h2>
          <div className="bg-slate-50 p-8 border border-slate-200">
            <h3 className="text-xl font-light text-slate-900 mb-1">Gavin Sangedha</h3>
            <p className="font-mono text-sm text-cyan-700 mb-4">Principal Researcher</p>
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
              <p>
                Gavin Sangedha is the founder of Alpha Vector Technologies and principal architect 
                of the Sangedha Framework—a causal forensics protocol for algorithmic negligence 
                attribution that integrates Judea Pearl's causal inference framework with established 
                corporate governance doctrine.
              </p>
              <p>
                His research operationalizes advanced AI methodologies—including Tree of Thoughts 
                reasoning and Graph of Thoughts knowledge aggregation—to reconstruct organizational 
                knowledge states from digital artifacts with forensic certainty. This work establishes 
                the technical foundation for proving executive scienter in securities litigation 
                involving autonomous systems.
              </p>
              <p>
                Mr. Sangedha's discovery methodologies have identified critical vulnerabilities in 
                major financial infrastructure systems, demonstrating the practical application of 
                his theoretical frameworks to real-world accountability failures.
              </p>
            </div>
          </div>
        </section>

        {/* Core Doctrines */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-slate-900 mb-6 pb-4 border-b border-slate-200">
            Published Research
          </h2>
          <div className="space-y-6">
            <div className="border-l-2 border-cyan-700 pl-6">
              <h3 className="font-medium text-slate-900">The Sangedha Framework</h3>
              <p className="text-sm text-slate-500 mb-2">AV-MO-2026-001 • Capstone Treatise</p>
              <p className="text-sm text-slate-600">
                A definitive legal-technical doctrine establishing standards for attributing corporate 
                liability when automated systems cause harm.
              </p>
            </div>
            <div className="border-l-2 border-slate-300 pl-6">
              <h3 className="font-medium text-slate-900">The Byzantine Calculus</h3>
              <p className="text-sm text-slate-500 mb-2">AV-D-2026-01 • Institutional Analysis</p>
              <p className="text-sm text-slate-600">
                Quantifying distributed ledger security as enterprise financial risk through 
                Cost-of-Corruption metrics and contagion modeling.
              </p>
            </div>
            <div className="border-l-2 border-slate-300 pl-6">
              <h3 className="font-medium text-slate-900">The Mens Rea Vector</h3>
              <p className="text-sm text-slate-500 mb-2">AV-D-2026-02 • Forensic Methodology</p>
              <p className="text-sm text-slate-600">
                AI-driven epistemic analysis for quantifying executive liability through 
                causal reconstruction of organizational knowledge states.
              </p>
            </div>
          </div>
        </section>

        {/* Company Details */}
        <section className="border-t border-slate-200 pt-8">
          <h2 className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-6">
            Entity Information
          </h2>
          <div className="grid grid-cols-2 gap-6 text-sm">
            <div>
              <p className="text-slate-500 mb-1">Legal Entity</p>
              <p className="text-slate-900">Alpha Vector Technologies</p>
            </div>
            <div>
              <p className="text-slate-500 mb-1">ABN</p>
              <p className="font-mono text-slate-900">50 353 196 500</p>
            </div>
            <div>
              <p className="text-slate-500 mb-1">Jurisdiction</p>
              <p className="text-slate-900">South Australia, Australia</p>
            </div>
            <div>
              <p className="text-slate-500 mb-1">Classification</p>
              <p className="text-slate-900">Security Research Consultancy</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
