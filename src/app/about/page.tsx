import { Metadata } from 'next';
import { Shield, Award, Globe, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | Alpha Vector Tech | Gavin Sangedha',
  description: 'Learn about Alpha Vector Tech, founded by Gavin Sangedha. Australian forensic intelligence firm specializing in algorithmic accountability.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-20">
      <div className="mx-auto max-w-4xl">
        
        {/* Header */}
        <header className="mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-700 mb-4">
            About Alpha Vector Tech
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-6">
            Forensic Intelligence for the Algorithmic Age
          </h1>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed">
              Alpha Vector Tech is an Australian forensic intelligence firm founded and operated by 
              <strong> Gavin Sangedha</strong>, specializing in the mathematical attribution of liability 
              in algorithmic systems. Operating under ABN <strong>50 353 196 500</strong>, we provide 
              institutional-grade methodologies for establishing causation, quantifying executive 
              knowledge states, and translating technical failures into legal frameworks.
            </p>
          </div>
        </header>

        {/* Principal Researcher */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-slate-900 mb-6">Principal Researcher</h2>
          <div className="bg-slate-50 p-8 border border-slate-200">
            <h3 className="text-xl font-medium text-slate-900 mb-2">Gavin Sangedha</h3>
            <p className="font-mono text-xs uppercase tracking-wider text-cyan-700 mb-4">
              Founder & Principal
            </p>
            <p className="text-slate-600 leading-relaxed mb-4">
              Gavin Sangedha established Alpha Vector Tech to bridge the gap between technical 
              forensics and legal accountability in the age of autonomous systems. With expertise 
              spanning distributed ledger security, causal inference, and epistemic modeling, 
              Gavin has developed proprietary frameworks that transform algorithmic failures into 
              court-admissible evidence.
            </p>
            <p className="text-slate-600 leading-relaxed">
              His research focuses on three core methodologies: The Sangedha Framework for causal 
              forensics, The Mens Rea Vector for executive liability attribution, and The Byzantine 
              Calculus for quantifying distributed system risks as financial metrics.
            </p>
          </div>
        </section>

        {/* Company Registration */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-slate-900 mb-6">Company Registration</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-slate-200 p-6">
              <Award className="w-8 h-8 text-cyan-700 mb-3" />
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">
                Business Name
              </h3>
              <p className="text-lg font-medium text-slate-900">
                Alpha Vector Tech
              </p>
            </div>
            <div className="border border-slate-200 p-6">
              <FileText className="w-8 h-8 text-cyan-700 mb-3" />
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">
                ABN
              </h3>
              <p className="text-lg font-mono text-slate-900">
                50 353 196 500
              </p>
            </div>
            <div className="border border-slate-200 p-6">
              <Shield className="w-8 h-8 text-cyan-700 mb-3" />
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">
                Principal
              </h3>
              <p className="text-lg font-medium text-slate-900">
                Gavin Sangedha
              </p>
            </div>
            <div className="border border-slate-200 p-6">
              <Globe className="w-8 h-8 text-cyan-700 mb-3" />
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">
                Jurisdiction
              </h3>
              <p className="text-lg font-medium text-slate-900">
                Australia
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-slate-900 mb-6">Our Mission</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed">
              Alpha Vector Tech exists to establish mathematical certainty in the attribution of 
              liability for algorithmic harms. As autonomous systems assume greater decision-making 
              authority across critical infrastructure, financial markets, and governance systems, 
              the need for forensic frameworks that bridge technical complexity and legal doctrine 
              becomes paramount.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              We provide courts, regulators, and governance bodies with scientifically grounded 
              methods for:
            </p>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>• Establishing but-for causation in algorithmic negligence cases</li>
              <li>• Quantifying executive knowledge states through information-theoretic measures</li>
              <li>• Translating distributed system failures into board-comprehensible risk metrics</li>
              <li>• Reconstructing intent from digital artifacts and organizational structures</li>
            </ul>
          </div>
        </section>

        {/* Legal Framework */}
        <section>
          <h2 className="text-2xl font-light text-slate-900 mb-6">Legal Framework</h2>
          <div className="bg-amber-50 p-6 border border-amber-200">
            <p className="text-sm text-amber-800">
              All research conducted by Alpha Vector Tech operates under the legal framework 
              established by 18 U.S.C. § 1030(f) and relevant safe harbor provisions. Our 
              methodologies are designed to produce court-admissible evidence while maintaining 
              strict compliance with responsible disclosure principles.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}