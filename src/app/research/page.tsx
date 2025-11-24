import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research Papers | Alpha Vector Tech | Gavin Sangedha',
  description: 'Advanced forensic frameworks by Gavin Sangedha for algorithmic accountability, distributed system governance, and executive liability.',
};

const ResearchPage = () => {
  const papers = [
    {
      slug: 'byzantine-calculus',
      title: 'The Byzantine Calculus',
      subtitle: 'Quantifying Distributed Ledger Security as Enterprise Financial Risk',
      abstract: 'A comprehensive framework translating consensus-layer security into board-comprehensible risk metrics, establishing fiduciary duties for oversight, and quantifying systemic contagion across interconnected DLT infrastructure.',
      date: 'January 2025',
      readTime: '45 min read',
      author: 'Gavin Sangedha'
    },
    {
      slug: 'sangedha-framework',
      title: 'The Sangedha Framework',
      subtitle: 'Causal Forensics for Algorithmic Negligence',
      abstract: 'A mathematical methodology for forensic analysis of AI system failures that bridges technical causation with legal liability standards through causal inference, epistemic modeling, and network analysis.',
      date: 'January 2025',
      readTime: '40 min read',
      author: 'Gavin Sangedha'
    },
    {
      slug: 'mens-rea-vector',
      title: 'The Mens Rea Vector',
      subtitle: 'AI-Driven Epistemic Analysis for Executive Liability in Algorithmic Negligence',
      abstract: 'A novel framework for establishing mens rea—the guilty mind—when harmful decisions emerge from algorithmic processes, quantifying executive knowledge states and temporal evolution of awareness.',
      date: 'January 2025',
      readTime: '50 min read',
      author: 'Gavin Sangedha'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16 pb-8 border-b-2 border-gray-200">
          <div className="mb-4">
            <p className="text-sm font-sans text-gray-600">
              Alpha Vector Tech | ABN: 50 353 196 500
            </p>
          </div>
          <h1 className="text-5xl font-serif font-semibold text-gray-900 mb-4">
            Research Papers
          </h1>
          <p className="text-xl text-gray-600 font-serif italic">
            Advanced forensic frameworks by <strong>Gavin Sangedha</strong> for algorithmic accountability, 
            distributed system governance, and executive liability in the age of artificial intelligence.
          </p>
        </header>

        {/* Papers Grid */}
        <div className="space-y-12">
          {papers.map((paper) => (
            <article key={paper.slug} className="group">
              <Link href={`/research/${paper.slug}`}>
                <div className="p-8 border border-gray-200 rounded-lg hover:border-cyan-600 transition-all duration-300 hover:shadow-lg">
                  {/* Paper Header */}
                  <div className="mb-6">
                    <h2 className="text-3xl font-serif font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                      {paper.title}
                    </h2>
                    <h3 className="text-xl font-serif text-gray-600 mb-4">
                      {paper.subtitle}
                    </h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 font-sans">
                      <span>{paper.author}</span>
                      <span>•</span>
                      <span>{paper.date}</span>
                      <span>•</span>
                      <span>{paper.readTime}</span>
                    </div>
                  </div>

                  {/* Abstract */}
                  <div className="mb-6">
                    <p className="text-gray-700 font-serif leading-relaxed">
                      {paper.abstract}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="flex items-center text-cyan-600 font-sans font-medium">
                    <span className="mr-2">Read Full Paper</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 font-serif italic">
            © 2025 Alpha Vector Tech. All rights reserved.
          </p>
          <p className="text-center text-gray-400 font-sans text-sm mt-2">
            Founded by Gavin Sangedha | Australian Business Number: 50 353 196 500
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ResearchPage;