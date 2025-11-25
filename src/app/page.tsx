"use client"

import Link from "next/link"
import { ArrowRight, FileText, ChevronDown } from "lucide-react"
import { researchPapers } from "@/lib/research-data"

export default function LandingPage() {
  const primaryResearchHref = researchPapers[0]?.href ?? "/research"

  return (
    <div className="relative bg-[#050505] text-[#fafafa]">
      <section className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-24 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
          aria-hidden
        />

        <div className="relative z-10 flex flex-col gap-12 lg:flex-row">
          <div className="hidden lg:flex flex-col items-center gap-6">
            <div className="h-32 w-px bg-[#00ffff]/30" />
            {["ALPHA VECTOR TECH", "GAVIN SANGEDHA", "ABN 50 353 196 500"].map((label) => (
              <span
                key={label}
                className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#d2fdff]"
                style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
              >
                {label}
              </span>
            ))}
            <div className="h-32 w-px bg-[#00ffff]/30" />
          </div>

          <div className="flex-1">
            <div className="mb-12 inline-flex flex-wrap items-center gap-3 text-[9px] font-mono tracking-[0.3em] text-[#d2fdff] uppercase">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ffff]" />
              <span>ALPHA VECTOR TECH</span>
              <span className="mx-2 text-[rgba(255,255,255,0.4)]">/</span>
              <span>GAVIN SANGEDHA</span>
              <span className="mx-2 text-[rgba(255,255,255,0.4)]">/</span>
              <span>ABN 50 353 196 500</span>
            </div>

            <div className="max-w-6xl space-y-10">
            <h1 className="leading-[0.85] tracking-[-0.04em]">
              <span className="block text-[clamp(3rem,12vw,10rem)] font-extralight text-[#fafafa]">
                The era of
              </span>
              <span className="block text-[clamp(3rem,12vw,10rem)] font-extralight text-[#00ffff]">
                plausible deniability
              </span>
              <span className="block text-[clamp(3rem,12vw,10rem)] font-extralight text-[#fafafa]">
                is over.
              </span>
            </h1>

            <p className="max-w-3xl text-lg md:text-xl font-light text-[#9a9a9a] leading-relaxed">
              We engineered the end of it. Alpha Vector Technologies develops
              <span className="text-[#fafafa]"> institutional-grade forensic methodologies</span> for attributing
              corporate liability when autonomous systems cause harm.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={primaryResearchHref}
                className="group relative inline-flex items-center gap-3 rounded-full border border-[#00ffff] bg-[#001b1b]/70 px-8 py-4 font-mono text-[0.85rem] uppercase tracking-[0.18em] text-[#d2fdff] transition-colors hover:text-[#050505]"
              >
                <span className="absolute inset-0 rounded-full bg-[#00ffff] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10 flex items-center gap-3">
                  <FileText className="h-4 w-4" />
                  Access Primary Research
                </span>
              </Link>

              <Link
                href="/research"
                className="inline-flex items-center gap-3 rounded-full border border-white/25 px-8 py-4 font-mono text-[0.85rem] uppercase tracking-[0.18em] text-white transition-all hover:border-white/60"
              >
                Research Index
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            </div>

            <div className="mt-20 flex flex-col items-center text-[#7f7f7f]">
              <span className="text-[9px] font-mono tracking-[0.3em] uppercase mb-2">Scroll</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#060606] px-6 sm:px-10 md:px-16 lg:px-24 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-4 text-[9px] font-mono uppercase tracking-[0.3em] text-[#8d8d8d]">
            <span>INTEL.ARCHIVE</span>
            <span>PRIMARY RESEARCH PAPERS</span>
          </div>

          <div className="mt-12 grid gap-10">
            {researchPapers.map((paper, index) => (
              <article
                key={paper.id}
                className="rounded-[28px] border border-white/12 bg-[#050505] p-8 sm:p-10 shadow-[0_15px_70px_rgba(0,0,0,0.45)]"
              >
                <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono uppercase tracking-[0.3em] text-[#d2fdff]">
                  <span>{paper.release}</span>
                  <span className="h-px flex-1 min-w-[60px] bg-white/15" />
                  <span>{paper.methodologyStamp}</span>
                  <span className="ml-auto text-[#7a7a7a]">DOSSIER {String(index + 1).padStart(2, "0")}</span>
                </div>

                <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.02] px-4 py-2 text-[9px] font-mono uppercase tracking-[0.18em] text-[#9ea8a8]">
                  <span className="inline-flex h-2 w-2 rounded-full" style={{ backgroundColor: paper.color }} />
                  <span>{paper.classification}</span>
                </div>

                <h2 className="mt-6 text-3xl md:text-5xl font-light" style={{ color: paper.color }}>
                  {paper.title}
                </h2>
                <p className="mt-4 text-lg font-light text-[#bfc5c5]">{paper.subtitle}</p>
                <p className="mt-6 text-sm leading-relaxed text-[#9ea2a2]">{paper.abstract}</p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/12 bg-white/[0.015] p-4">
                    <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#7a7a7a]">Release Window</div>
                    <div className="mt-2 text-base font-light text-[#d2fdff]">{paper.release}</div>
                  </div>
                  <div className="rounded-2xl border border-white/12 bg-white/[0.015] p-4">
                    <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#7a7a7a]">Methodology Stamp</div>
                    <div className="mt-2 text-base font-light text-[#d2fdff]">{paper.methodologyStamp}</div>
                  </div>
                  <div className="rounded-2xl border border-white/12 bg-white/[0.015] p-4">
                    <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#7a7a7a]">Status</div>
                    <div className="mt-2 text-base font-light text-[#d2fdff]">{paper.status}</div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4 text-[10px] font-mono uppercase tracking-[0.25em] text-[#8d8d8d]">
                  <span>{paper.wordCount}</span>
                  <span className="h-px w-12 bg-white/15" />
                  <span>PROPRIETARY RELEASE</span>
                  <span className="h-px w-12 bg-white/15" />
                  <span>FIRST-MOVER ARCHIVE</span>
                </div>

                <Link
                  href={paper.href}
                  className="mt-8 inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#fafafa] hover:text-[#00ffff]"
                >
                  Read the brief
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 sm:px-10 md:px-16 lg:px-24 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[2fr_1fr]">
          <div>
            <span className="text-[9px] font-mono tracking-[0.3em] text-[#6b6b6b] uppercase mb-6 block">
              POSITIONING
            </span>
            <h2 className="text-4xl md:text-6xl font-light leading-[0.95] mb-8">
              We are the <span className="text-[#00ffff]">standard body.</span>
            </h2>
            <p className="text-lg font-light text-[#9a9a9a] leading-relaxed">
              Not a consultancy. Not an advisory firm. We establish the
              <span className="text-[#fafafa]"> mathematical bounds of executive culpability</span> before the
              regulatory frameworks exist to enforce them.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {[{ value: "7", label: "RESEARCH PAPERS" }, { value: "$32B", label: "TAM COVERAGE" }, { value: "100%", label: "DAUBERT READY" }, { value: "∞", label: "LIABILITY MAPPED" }].map((metric) => (
              <div key={metric.label} className="p-6 border border-white/10 relative">
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#00ffff] opacity-40" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#00ffff] opacity-40" />
                <div className="text-4xl font-extralight text-[#00ffff] mb-2">{metric.value}</div>
                <div className="text-[9px] font-mono tracking-[0.2em] text-[#6b6b6b]">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 sm:px-10 md:px-16 lg:px-24 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-[9px] font-mono tracking-[0.3em] text-[#6b6b6b] uppercase mb-8 block">
            ESTABLISH.LINK
          </span>
          <h2 className="text-4xl md:text-6xl font-light leading-[0.95] mb-8">
            Ready to define <span className="text-[#00ffff]">accountability?</span>
          </h2>
          <Link href="/contact" className="inline-flex items-center justify-center px-12 py-5 rounded-full bg-[#00ffff] text-[#050505] font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-[#00d4d4]">
            Initiate Contact
          </Link>
        </div>
      </section>
    </div>
  )
}
