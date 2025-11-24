import { Button } from "@/components/ui/button";
import { ResearchArtifactCard } from "@/components/ui/card";
import { getCapstone, getDoctrines } from "@/lib/research-papers";
import { FileText, Download } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Strategic Frameworks & Doctrines | Alpha Vector Technologies",
  description: "Institutional-grade research on algorithmic accountability, forensic methodologies, and verifiable resilience frameworks.",
};

export default function ResearchPage() {
  const capstone = getCapstone();
  const doctrines = getDoctrines();

  return (
    <div className="w-full min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <header className="mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-700 mb-4">
            Research Directorate
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-4">
            Strategic Frameworks & Doctrines
          </h1>
          <p className="max-w-2xl text-lg font-light text-slate-600 leading-relaxed">
            Institutional-grade research establishing forensic methodologies for algorithmic accountability, 
            executive liability attribution, and verifiable resilience in autonomous systems.
          </p>
        </header>

        {/* Section 1: The Capstone / Magnum Opus */}
        {capstone && (
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-slate-200"></div>
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-slate-500 px-4">
                The Foundational Treatise
              </span>
              <div className="h-px flex-1 bg-slate-200"></div>
            </div>
            
            <div className="border-2 border-cyan-700/30 bg-gradient-to-br from-slate-50 to-white p-8 md:p-12 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-700/5"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-xs text-slate-500">{capstone.documentId}</span>
                  <span className="px-2 py-0.5 bg-cyan-700/10 text-cyan-800 font-mono text-xs uppercase">
                    {capstone.status}
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-2">
                  {capstone.title}
                </h2>
                {capstone.subtitle && (
                  <p className="text-xl text-cyan-700 font-light mb-6">
                    {capstone.subtitle}
                  </p>
                )}
                
                <p className="text-slate-600 leading-relaxed mb-8 max-w-3xl">
                  {capstone.abstract}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {capstone.keywords.map((keyword) => (
                    <span 
                      key={keyword} 
                      className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-mono"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`/research/${capstone.slug}`}>
                    <Button className="font-mono text-xs uppercase tracking-widest">
                      <FileText className="w-4 h-4 mr-2" />
                      Access Full Dossier
                    </Button>
                  </Link>
                  {capstone.pdfPath && (
                    <a href={capstone.pdfPath} download>
                      <Button variant="outline" className="font-mono text-xs uppercase tracking-widest">
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Section 2: The Doctrines / Spokes */}
        {doctrines.length > 0 && (
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-slate-200"></div>
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-slate-500 px-4">
                Core Doctrines
              </span>
              <div className="h-px flex-1 bg-slate-200"></div>
            </div>
            
            <p className="text-slate-600 mb-8 max-w-2xl">
              Specialized methodologies forming the operational pillars of the Sangedha Framework.
              Each doctrine addresses a critical domain of algorithmic accountability.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {doctrines.map((paper) => (
                <Link 
                  key={paper.id} 
                  href={`/research/${paper.slug}`} 
                  className="block group"
                >
                  <div className="h-full border border-slate-200 bg-white p-6 transition-all duration-200 hover:border-cyan-700/50 hover:shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-slate-500">{paper.documentId}</span>
                      <span className="px-2 py-0.5 bg-slate-100 text-slate-600 font-mono text-xs uppercase">
                        {paper.status}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-light text-slate-900 mb-1 group-hover:text-cyan-700 transition-colors">
                      {paper.title}
                    </h3>
                    {paper.subtitle && (
                      <p className="text-sm text-cyan-700 mb-4">
                        {paper.subtitle}
                      </p>
                    )}
                    
                    <p className="text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {paper.abstract}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {paper.keywords.slice(0, 4).map((keyword) => (
                        <span 
                          key={keyword} 
                          className="px-2 py-0.5 bg-slate-50 text-slate-500 text-xs font-mono"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-500">{paper.classification}</span>
                      <span className="text-xs font-mono text-cyan-700 group-hover:underline">
                        Access →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Citation Notice */}
        <section className="mt-20 pt-8 border-t border-slate-200">
          <p className="text-xs text-slate-500 font-mono">
            © 2025 Alpha Vector Technologies (ABN 50 353 196 500). All research papers are proprietary 
            methodologies protected under intellectual property law. For licensing inquiries, contact 
            research@alphavectortech.com.
          </p>
        </section>
        
      </main>
    </div>
  );
}
