import Link from 'next/link'

interface ResearchCardProps {
  title: string
  subtitle: string
  abstract: string
  wordCount: string
  href: string
  index: number
  color?: string
}

export default function ResearchCard({ title, subtitle, abstract, wordCount, href, index, color = '#00ffff' }: ResearchCardProps) {
  return (
    <div
      className="relative flex h-full flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.3em] text-[#7c7c7c]">
        <span>RCH-{String(index + 1).padStart(2, '0')}</span>
        <span>{wordCount}</span>
      </div>

      <div>
        <p className="text-sm text-[#8a8a8a]">{subtitle}</p>
        <h3 className="mt-3 text-2xl font-light text-white leading-tight">{title}</h3>
      </div>

      <p className="text-sm text-[#cfcfcf] leading-relaxed">{abstract}</p>

      <Link
        href={href}
        className="mt-auto inline-flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.35em] text-white"
        style={{ color }}
      >
        Read Full Paper
        <span className="h-px w-12" style={{ backgroundColor: color }} />
      </Link>
    </div>
  )
}
