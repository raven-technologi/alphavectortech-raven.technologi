import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ResearchCardProps {
  title: string
  subtitle: string
  abstract: string
  wordCount: string
  href: string
  index: number
  color?: string
  release?: string
  classification?: string
  methodologyStamp?: string
  status?: string
}

export default function ResearchCard({
  title,
  subtitle,
  abstract,
  wordCount,
  href,
  index,
  color = '#00ffff',
  release,
  classification,
  methodologyStamp,
  status,
}: ResearchCardProps) {
  const dossierNumber = `DOSSIER ${String(index + 1).padStart(2, '0')}`
  const releaseLabel = release ?? 'Release Pending'
  const methodologyLabel = methodologyStamp ?? `AVT-${String(index + 1).padStart(2, '0')}`
  const statusLabel = status ?? 'Internal Review'
  const classificationLabel = classification ?? 'Proprietary Archive'

  return (
    <article className="flex h-full flex-col rounded-[28px] border border-white/12 bg-[#050505] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
      <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono uppercase tracking-[0.3em] text-[#d2fdff]">
        <span>{releaseLabel}</span>
        <span className="h-px flex-1 min-w-[60px] bg-white/15" />
        <span>{methodologyLabel}</span>
        <span className="ml-auto text-[#7a7a7a]">{dossierNumber}</span>
      </div>

      <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.02] px-4 py-2 text-[9px] font-mono uppercase tracking-[0.18em] text-[#9ea8a8]">
        <span className="inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
        <span>{classificationLabel}</span>
      </div>

      <h3 className="mt-6 text-2xl md:text-3xl font-light" style={{ color }}>
        {title}
      </h3>
      <p className="mt-3 text-base font-light text-[#bfc5c5]">{subtitle}</p>
      <p className="mt-5 text-sm leading-relaxed text-[#9ea2a2]">{abstract}</p>

      <div className="mt-6 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/12 bg-white/[0.015] p-4">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#7a7a7a]">Release Window</div>
            <div className="mt-2 text-base font-light text-[#d2fdff]">{releaseLabel}</div>
          </div>
          <div className="rounded-2xl border border-white/12 bg-white/[0.015] p-4">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#7a7a7a]">Methodology Stamp</div>
            <div className="mt-2 text-base font-light text-[#d2fdff]">{methodologyLabel}</div>
          </div>
          <div className="rounded-2xl border border-white/12 bg-white/[0.015] p-4">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#7a7a7a]">Status</div>
            <div className="mt-2 text-base font-light text-[#d2fdff]">{statusLabel}</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono uppercase tracking-[0.25em] text-[#8d8d8d]">
          <span>{wordCount}</span>
          <span className="h-px w-12 bg-white/15" />
          <span>Proprietary Release</span>
          <span className="h-px w-12 bg-white/15" />
          <span>First-Mover Archive</span>
        </div>
      </div>

      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#fafafa] hover:text-[#00ffff]"
      >
        Read the brief
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  )
}
