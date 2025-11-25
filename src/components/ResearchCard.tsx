import type { CSSProperties } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ResearchCardProps {
  title: string
  subtitle: string
  abstract: string
  href: string
  index: number
  color?: string
  release?: string
  classification?: string
  methodologyStamp?: string
  status?: string
  statusTitle?: string
  pdfHref?: string
}

const barcodePattern = [18, 28, 12, 24, 16, 32, 12, 26]

export default function ResearchCard({
  title,
  subtitle,
  abstract,
  href,
  index,
  color = "#00ffff",
  release,
  classification,
  methodologyStamp,
  status,
  statusTitle,
  pdfHref,
}: ResearchCardProps) {
  const dossierNumber = `DOSSIER ${String(index + 1).padStart(2, "0")}`
  const releaseLabel = release ?? "Release Pending"
  const methodologyLabel = methodologyStamp ?? `AVT-${String(index + 1).padStart(2, "0")}`
  const statusLabel = status ?? "Internal Review"
  const statusHeading = statusTitle ?? "Status"
  const classificationLabel = classification ?? "Proprietary Archive"

  const metadata = [
    { label: "Release Window", value: releaseLabel },
    { label: "Methodology Stamp", value: methodologyLabel },
    { label: statusHeading, value: statusLabel },
  ]

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[32px] border border-black/10 bg-white shadow-[0_25px_60px_rgba(7,16,37,0.08)] transition-all duration-300 hover:-translate-y-1">
      <div
        className="absolute inset-x-0 top-0 h-1.5"
        style={{ background: `linear-gradient(90deg, ${color}, #0d1117)` }}
        aria-hidden
      />

      <div className="flex flex-col gap-3 px-6 pt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-4">
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-1">
            <span className="whitespace-nowrap text-[10px] font-mono uppercase tracking-[0.35em] text-black/60">{dossierNumber}</span>
            <p className="microtype whitespace-nowrap text-[11px] tracking-[0.4em] text-black">{methodologyLabel}</p>
          </div>
          <div className="hidden h-10 items-end gap-[3px] sm:flex" aria-hidden>
            {barcodePattern.map((height, idx) => (
              <span
                key={`${dossierNumber}-${height}-${idx}`}
                className="w-[2px] rounded-full bg-black"
                style={{ height: `${height}px`, opacity: idx % 2 === 0 ? 0.4 : 0.9 }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 text-left sm:items-end sm:text-right">
          <span className="whitespace-nowrap text-[11px] font-mono uppercase tracking-[0.35em] text-[#4b6bff]">{releaseLabel}</span>
          <span className="mt-1 text-[11px] font-mono uppercase leading-tight tracking-[0.25em] text-black/50 sm:whitespace-nowrap">{classificationLabel}</span>
        </div>
      </div>

      <div className="px-6 pb-8 pt-6">
        <div className="border-l-[6px] pl-6" style={{ borderColor: color }}>
          <p className="text-[13px] font-mono uppercase tracking-[0.45em] text-black/60">{statusHeading}</p>
          <p className="text-sm uppercase tracking-[0.3em] text-black/40">{statusLabel}</p>
          <h3 className="mt-4 text-[clamp(1.9rem,4vw,3rem)] font-light leading-[1.05] tracking-[-0.035em] text-[#010409]">
            {title}
          </h3>
          <p className="mt-3 text-lg text-[#050505]">{subtitle}</p>
        </div>
        <p className="mt-6 text-[15px] leading-relaxed text-black/70">
          {abstract}
        </p>
      </div>

      <div className="mt-auto bg-[#f3f6ff] px-6 py-6">
        <dl className="grid gap-6 text-[11px] font-mono uppercase tracking-[0.3em] text-black/60 sm:grid-cols-3">
          {metadata.map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-2">
              <dt>{label}</dt>
              <dd className="text-base font-light normal-case tracking-[0.02em] text-[#010409]">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="flex flex-wrap items-center gap-4 border-t border-black/10 px-6 py-6">
        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-full border border-black/20 px-6 py-3 text-[11px] font-mono uppercase tracking-[0.35em] text-[#010409] transition-colors hover:border-[var(--accent-color)] hover:text-[var(--accent-color)]"
          style={{ "--accent-color": color } as CSSProperties}
        >
          Open dossier
          <ArrowRight className="h-4 w-4" />
        </Link>
        {pdfHref && (
          <a
            href={pdfHref}
            download
            className="inline-flex items-center gap-2 rounded-full bg-[#010409] px-6 py-3 text-[11px] font-mono uppercase tracking-[0.35em] text-white transition-colors hover:bg-[#4b6bff]"
          >
            Download PDF
            <ArrowRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </article>
  )
}
