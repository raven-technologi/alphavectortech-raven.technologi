import Link from "next/link"
import { ArrowRight } from "lucide-react"

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
  color = "#00ffff",
  release,
  classification,
  methodologyStamp,
  status,
}: ResearchCardProps) {
  const dossierNumber = `DOSSIER ${String(index + 1).padStart(2, "0")}`
  const releaseLabel = release ?? "Release Pending"
  const methodologyLabel = methodologyStamp ?? `AVT-${String(index + 1).padStart(2, "0")}`
  const statusLabel = status ?? "Internal Review"
  const classificationLabel = classification ?? "Proprietary Archive"

  const metadata = [
    { label: "Release Window", value: releaseLabel },
    { label: "Methodology Stamp", value: methodologyLabel },
    { label: "Status", value: statusLabel },
  ]

  return (
    <article className="group relative flex h-full flex-col rounded-[32px] border border-white/15 bg-gradient-to-b from-[#080808] via-[#050505] to-[#020202] p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-1">
      <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/5" aria-hidden />

      <div className="relative flex flex-wrap items-center gap-3 text-[9px] font-mono uppercase tracking-[0.35em] text-[#d2fdff]">
        <span>{releaseLabel}</span>
        <span className="flex-1 min-w-[60px] border-t border-dotted border-white/25" />
        <span>{methodologyLabel}</span>
        <span className="ml-auto text-[#6f6f6f]">{dossierNumber}</span>
      </div>

      <div className="relative mt-5 flex flex-wrap items-center gap-3 text-[9px] font-mono uppercase tracking-[0.25em] text-[#9ea8a8]">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-3 py-1">
          <span className="inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
          {classificationLabel}
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-[#c9ced3]">
          Status: {statusLabel}
        </span>
      </div>

      <div className="relative mt-6 space-y-3">
        <h3 className="text-[clamp(1.6rem,3vw,2.4rem)] font-light leading-[1.05] tracking-[-0.02em]" style={{ color }}>
          {title}
        </h3>
        <p className="text-base font-light text-[#c3c7c7]">{subtitle}</p>
        <p className="text-sm leading-relaxed text-[#9ea2a2]">{abstract}</p>
      </div>

      <div className="relative mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {metadata.map(({ label, value }) => (
          <div key={label} className="rounded-2xl border border-white/12 bg-white/[0.015] p-4">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#7a7a7a]">{label}</div>
            <div className="mt-2 text-base font-light text-[#d2fdff]">{value}</div>
          </div>
        ))}
      </div>

      <div className="relative mt-6 flex flex-wrap items-center gap-4 text-[10px] font-mono uppercase tracking-[0.25em] text-[#8d8d8d]">
        <span>{wordCount}</span>
        <span className="h-px w-10 bg-white/15" />
        <span>Proprietary Release</span>
        <span className="h-px w-10 bg-white/15" />
        <span>First-Mover Archive</span>
      </div>

      <Link
        href={href}
        className="relative mt-6 inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#fafafa] transition-colors hover:text-[#00ffff]"
      >
        Read the brief
        <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  )
}
