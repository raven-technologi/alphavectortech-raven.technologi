'use client';
import ResearchCard from './ResearchCard';
import { researchPapers } from '../lib/research-data';

interface RelatedResearchProps {
  currentPath: string;
}

export default function RelatedResearch({ currentPath }: RelatedResearchProps) {
  const otherPapers = researchPapers.filter(paper => paper.href !== currentPath);

  return (
    <section className="py-16 border-t border-border-subtle mt-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-text-primary mb-8">Related Research</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {otherPapers.map((paper, index) => (
            <ResearchCard key={paper.href} {...paper} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
