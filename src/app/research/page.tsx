'use client';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import ResearchCard from '../../components/ResearchCard';
import { researchPapers } from '../../lib/research-data';

export default function ResearchIndexPage() {
  return (
    <div className="min-h-screen bg-surface-base">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-6">
              Research Publications
            </h1>
            <p className="text-text-secondary text-lg max-w-3xl mx-auto leading-relaxed">
              Our research establishes mathematically rigorous frameworks that transform technical 
              failures into legally cognizable claims. We provide the forensic methodologies 
              required to attribute liability in complex algorithmic systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchPapers.map((paper, index) => (
              <ResearchCard key={paper.href} {...paper} index={index} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
