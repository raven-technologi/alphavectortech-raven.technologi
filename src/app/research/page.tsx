'use client'

import PageFrame from '@/components/PageFrame'
import ResearchCard from '@/components/ResearchCard'
import { researchPapers } from '@/lib/research-data'

export default function ResearchIndexPage() {
  return (
    <PageFrame
      tag="DOSSIER // 04"
      title="Research Archive"
      description="Institutional-grade forensics spanning liability quantification, causal proof systems, and governance architectures."
    >
      <div className="grid gap-8 lg:grid-cols-3">
        {researchPapers.map((paper, index) => (
          <ResearchCard key={paper.href} {...paper} index={index} />
        ))}
      </div>
    </PageFrame>
  )
}
