'use client'

import PageFrame from '@/components/PageFrame'
import ResearchCard from '@/components/ResearchCard'
import { researchPapers } from '@/lib/research-data'

export default function ResearchIndexPage() {
  return (
    <PageFrame
      tag="DOSSIER | 04"
      description="Institutional-grade forensics spanning liability quantification, causal proof systems, and governance architectures."
      showHeading={false}
      showTagBarcode
    >
      <section className="rounded-3xl border border-black/10 bg-white p-8">
        <div className="border-b border-black/10 pb-8">
          <p className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#4b6bff]">Primary Corpus</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight text-[#010409]">Research Archive</h1>
          <p className="mt-3 text-base text-[#050505]">Source documentation for liability proofs, computational law instrumentation, and autonomous systems governance.</p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {researchPapers.map((paper, index) => (
            <ResearchCard key={paper.href} {...paper} index={index} />
          ))}
        </div>
      </section>
    </PageFrame>
  )
}
