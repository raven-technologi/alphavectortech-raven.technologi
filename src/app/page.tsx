import Link from 'next/link';
import { Shield, Brain, Lock, ArrowRight, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-700">
              Gavin Sangedha | Principal Researcher
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-600 mt-1">
              ABN: 50 353 196 500
            </p>
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-slate-900 mb-6">
            Alpha Vector Tech
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl">
            Forensic intelligence for algorithmic accountability.
          </p>
          <p className="text-lg text-slate-500 mb-8 max-w-2xl">
            Institutional-grade methodologies for establishing causation, 
            attributing liability, and quantifying risk in autonomous systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/research">
              <Button className="font-mono text-xs uppercase tracking-widest">
                Access Research
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/methodologies">
              <Button variant="outline" className="font-mono text-xs uppercase tracking-widest">
                View Methodologies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-700 mb-4">
            Core Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-12">
            Forensic Methodologies
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Causal Forensics */}
            <div className="bg-white p-8 border border-slate-200 hover:border-cyan-700/50 transition-colors">
              <Shield className="w-10 h-10 text-cyan-700 mb-4" />
              <h3 className="text-xl font-light mb-2">Causal Forensics</h3>
              <p className="text-slate-600 mb-4">
                Mathematical attribution of algorithmic negligence through Pearl's causal hierarchy.
              </p>
              <Link href="/research/sangedha-framework" className="text-sm font-mono text-cyan-700 hover:underline">
                The Sangedha Framework →
              </Link>
            </div>

            {/* Epistemic Analysis */}
            <div className="bg-white p-8 border border-slate-200 hover:border-cyan-700/50 transition-colors">
              <Brain className="w-10 h-10 text-cyan-700 mb-4" />
              <h3 className="text-xl font-light mb-2">Epistemic Analysis</h3>
              <p className="text-slate-600 mb-4">
                AI-driven reconstruction of executive knowledge states from digital artifacts.
              </p>
              <Link href="/research/mens-rea-vector" className="text-sm font-mono text-cyan-700 hover:underline">
                The Mens Rea Vector →
              </Link>
            </div>

            {/* Risk Quantification */}
            <div className="bg-white p-8 border border-slate-200 hover:border-cyan-700/50 transition-colors">
              <Lock className="w-10 h-10 text-cyan-700 mb-4" />
              <h3 className="text-xl font-light mb-2">Risk Quantification</h3>
              <p className="text-slate-600 mb-4">
                Translation of DLT security into board-comprehensible financial metrics.
              </p>
              <Link href="/research/byzantine-calculus" className="text-sm font-mono text-cyan-700 hover:underline">
                The Byzantine Calculus →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Scale className="w-12 h-12 text-cyan-700 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">
            Institutional Authority
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Alpha Vector Tech operates as a registered Australian business under the direction 
            of principal researcher Gavin Sangedha, providing forensic intelligence services 
            to legal firms, regulatory bodies, and governance institutions.
          </p>
          <div className="bg-slate-50 p-6 border border-slate-200">
            <dl className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-slate-500">Principal</dt>
                <dd className="text-lg font-medium text-slate-900">Gavin Sangedha</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-slate-500">Business Name</dt>
                <dd className="text-lg font-medium text-slate-900">Alpha Vector Tech</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-slate-500">ABN</dt>
                <dd className="text-lg font-mono text-slate-900">50 353 196 500</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-slate-500">Jurisdiction</dt>
                <dd className="text-lg font-medium text-slate-900">Australia</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Forensic Intelligence for Legal Certainty
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Access our complete research corpus and methodological frameworks.
          </p>
          <Link href="/research">
            <Button size="lg" variant="secondary" className="font-mono text-xs uppercase tracking-widest">
              View Research Papers
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}