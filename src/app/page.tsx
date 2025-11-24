import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-5xl px-4 text-center">

      {/* System Badge */}
      <div className="mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
        <span className="inline-flex items-center px-4 py-1.5 text-[10px] font-mono font-medium tracking-[0.2em] text-slate-500 uppercase border border-slate-200">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 mr-2 animate-pulse"></span>
          Security Research Consultancy // ABN 50 353 196 500
        </span>
      </div>

      {/* Headline */}
      <h1 className="mb-8 text-5xl md:text-7xl font-light tracking-tighter leading-[0.95] text-slate-900">
        Forensic Methodologies for<br />
        <span className="font-medium text-cyan-700">Algorithmic Accountability.</span>
      </h1>

      {/* Subhead */}
      <p className="max-w-2xl mx-auto mb-16 text-lg font-light leading-relaxed text-slate-600">
        Alpha Vector Technologies develops <span className="font-medium text-slate-900">institutional-grade frameworks</span> for 
        attributing corporate liability when autonomous systems cause harm. Our research establishes 
        <span className="font-medium text-slate-900"> mathematically rigorous standards</span> for proving executive scienter, 
        causal attribution, and fiduciary breach.
      </p>

      {/* Primary CTA - Research Access */}
      <div className="flex flex-col gap-4 sm:flex-row mb-16">
        <Link href="/research/the-sangedha-framework">
          <Button size="lg" className="font-mono text-xs uppercase tracking-widest px-8">
            <FileText className="w-4 h-4 mr-2" />
            Access The Sangedha Framework
          </Button>
        </Link>
        <Link href="/research">
          <Button variant="outline" size="lg" className="font-mono text-xs uppercase tracking-widest px-8">
            Research Index
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>

      {/* Featured Papers Grid */}
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        <Link href="/research/the-byzantine-calculus" className="group">
          <div className="border border-slate-200 p-6 text-left hover:border-cyan-700/50 transition-colors">
            <p className="font-mono text-xs text-slate-500 mb-2">AV-D-2026-01</p>
            <h3 className="text-lg font-light text-slate-900 group-hover:text-cyan-700 transition-colors">
              The Byzantine Calculus
            </h3>
            <p className="text-sm text-slate-500 mt-2">
              Quantifying DLT Security as Enterprise Financial Risk
            </p>
          </div>
        </Link>
        <Link href="/research/the-mens-rea-vector" className="group">
          <div className="border border-slate-200 p-6 text-left hover:border-cyan-700/50 transition-colors">
            <p className="font-mono text-xs text-slate-500 mb-2">AV-D-2026-02</p>
            <h3 className="text-lg font-light text-slate-900 group-hover:text-cyan-700 transition-colors">
              The Mens Rea Vector
            </h3>
            <p className="text-sm text-slate-500 mt-2">
              AI-Driven Epistemic Analysis for Executive Liability
            </p>
          </div>
        </Link>
      </div>

      {/* Expertise Tags */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {[
          "Algorithmic Negligence",
          "Causal Forensics", 
          "Executive Liability",
          "SEC Whistleblower",
          "Caremark Doctrine",
          "Daubert Standards"
        ].map((tag) => (
          <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-mono">
            {tag}
          </span>
        ))}
      </div>

      {/* Footer Metrics */}
      <div className="fixed bottom-8 flex gap-8 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
        <span>Classification: Public Research</span>
        <span>Status: Operational</span>
      </div>
    </div>
  );
}
