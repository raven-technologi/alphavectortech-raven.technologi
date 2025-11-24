import { Metadata } from "next";
import Link from "next/link";
import { Shield, Brain, Lock, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Methodologies | Alpha Vector Technologies",
  description: "Forensic methodologies for algorithmic accountability and executive liability attribution.",
};

const methodologies = [
  {
    id: "causal-forensics",
    title: "Causal Forensics Protocol",
    description: "Mathematical framework for establishing but-for causation in algorithmic negligence cases using Judea Pearl's causal inference methodology.",
    icon: Shield,
    paper: "/research/the-sangedha-framework",
  },
  {
    id: "epistemic-analysis",
    title: "Epistemic Analysis",
    description: "AI-driven reconstruction of organizational knowledge states from digital artifacts to prove executive scienter.",
    icon: Brain,
    paper: "/research/the-mens-rea-vector",
  },
  {
    id: "cryptoeconomic-security",
    title: "Cryptoeconomic Security Metrics",
    description: "Quantification of DLT security as enterprise financial risk through Cost-of-Corruption frameworks.",
    icon: Lock,
    paper: "/research/the-byzantine-calculus",
  },
];

export default function MethodologiesPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-20">
      <div className="mx-auto max-w-4xl">
        
        {/* Header */}
        <header className="mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-700 mb-4">
            Methodologies
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-6">
            Forensic Frameworks
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
            Institutional-grade methodologies for establishing algorithmic accountability, 
            executive liability attribution, and verifiable resilience in autonomous systems.
          </p>
        </header>

        {/* Methodology Cards */}
        <div className="space-y-6 mb-16">
          {methodologies.map((method) => (
            <div 
              key={method.id}
              className="border border-slate-200 p-8 hover:border-cyan-700/50 transition-colors"
            >
              <div className="flex items-start gap-6">
                <div className="p-3 bg-slate-100 text-cyan-700">
                  <method.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-light text-slate-900 mb-2">
                    {method.title}
                  </h2>
                  <p className="text-slate-600 mb-4">
                    {method.description}
                  </p>
                  <Link 
                    href={method.paper}
                    className="inline-flex items-center gap-2 text-sm text-cyan-700 hover:underline font-mono"
                  >
                    <FileText className="w-4 h-4" />
                    View Research Paper
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="border-t border-slate-200 pt-8">
          <p className="text-slate-600 mb-4">
            For detailed technical specifications and implementation frameworks, access our complete research index.
          </p>
          <Link href="/research">
            <Button variant="outline" className="font-mono text-xs uppercase tracking-widest">
              Access Research Index
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
