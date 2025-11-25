'use client'
import ResearchCard from './ResearchCard'
import { researchPapers } from '../lib/research-data'

interface RelatedResearchProps {
  currentPath: string;
}

export default function RelatedResearch({ currentPath }: RelatedResearchProps) {
  const otherPapers = researchPapers.filter(paper => paper.href !== currentPath)

  return (
    <section className="mt-16 border-t border-white/10 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.35em] text-[#7a7a7a]">
          <span className="h-px w-10 bg-white/15" />
          Related Research
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {otherPapers.map((paper, index) => (
            <ResearchCard key={paper.href} {...paper} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
