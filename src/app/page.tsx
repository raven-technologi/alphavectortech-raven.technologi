"use client"

import Link from "next/link"
import { ArrowRight, FileText } from "lucide-react"
import { researchPapers } from "@/lib/research-data"
import ResearchCard from "@/components/ResearchCard"

export default function LandingPage() {
  const primaryResearchHref = researchPapers[0]?.href ?? "/research"

  return (
    <div className="relative bg-white text-[#050505]">
      <section className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-24 py-24 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)
            `,
          }}
          aria-hidden
        />

        <div className="relative z-10 flex flex-col gap-12 lg:flex-row">
          <div className="hidden lg:flex flex-col items-center gap-6">
            <div className="h-32 w-px bg-[#4b6bff]/30" />
            {["ALPHA VECTOR TECH", "GAVIN SANGEDHA", "ABN 50 353 196 500"].map((label) => (
              <span
                key={label}
                className="microtype text-[10px] tracking-[0.4em] text-[#010409]"
                style={{ writingMode: "vertical-rl", textOrientation: "upright" }}
              >
                {label}
              </span>
            ))}
            <div className="h-32 w-px bg-[#4b6bff]/30" />
          </div>

          <div className="flex-1">
            <div className="mb-12 inline-flex flex-wrap items-center gap-3 microtype text-[9px] tracking-[0.3em] text-[#010409]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4b6bff]" />
              <span>ALPHA VECTOR TECH</span>
              <span className="mx-2 text-[rgba(0,0,0,0.25)]">/</span>
              <span>GAVIN SANGEDHA</span>
              <span className="mx-2 text-[rgba(0,0,0,0.25)]">/</span>
              <span>ABN 50 353 196 500</span>
            </div>

            <div className="max-w-6xl space-y-10">
            <h1 className="leading-[0.85] tracking-[-0.04em]">
              <span className="block text-[clamp(3rem,12vw,10rem)] font-extralight text-[#010409]">
                The era of
              </span>
              <span className="block text-[clamp(3rem,12vw,10rem)] font-extralight text-[#00c2ff]">
                plausible deniability
              </span>
              <span className="block text-[clamp(3rem,12vw,10rem)] font-extralight text-[#010409]">
                is over.
              </span>
            </h1>

            <p className="max-w-3xl text-lg md:text-xl font-light text-[#050505] leading-relaxed">
              We engineered the end of it. Alpha Vector Technologies develops
              <span className="text-[#010409] font-normal"> forensically defensible forensic methodologies</span> for attributing
              corporate liability when autonomous systems cause harm.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href={primaryResearchHref}
                className="group relative inline-flex items-center gap-3 rounded-full border border-[#4b6bff] bg-[#eef1ff] px-8 py-4 font-mono text-[0.85rem] uppercase tracking-[0.18em] text-[#010409] transition-colors hover:bg-[#4b6bff] hover:text-white"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <FileText className="h-4 w-4" />
                  Access Primary Research
                </span>
              </Link>

              <Link
                href="/research"
                className="inline-flex items-center gap-3 rounded-full border border-black/20 px-8 py-4 font-mono text-[0.85rem] uppercase tracking-[0.18em] text-[#010409] transition-all hover:border-[#4b6bff] hover:text-[#4b6bff]"
              >
                Research Index
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            </div>

            
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#f3f6ff] px-6 sm:px-10 md:px-16 lg:px-24 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-4 microtype text-[9px] tracking-[0.3em]">
            <span>INTEL.ARCHIVE</span>
            <span>PRIMARY RESEARCH PAPERS</span>
          </div>

          <div className="mt-12 grid gap-10">
            {researchPapers.map((paper, index) => (
              <ResearchCard key={paper.id} {...paper} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 px-6 sm:px-10 md:px-16 lg:px-24 py-24">
        <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[2fr_1fr]">
          <div>
            <span className="microtype microtype--muted text-[9px] tracking-[0.3em] mb-6 block">
              POSITIONING
            </span>
            <h2 className="text-4xl md:text-6xl font-light leading-[0.95] mb-8 text-[#010409]">
              We are the <span className="text-[#4b6bff]">standard body.</span>
            </h2>
            <p className="text-lg font-light text-[#050505] leading-relaxed">
              Not a consultancy. Not an advisory firm. We establish the
              <span className="text-[#010409] font-normal"> mathematical bounds of executive culpability</span> before the
              regulatory frameworks exist to enforce them.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {[{ value: "7", label: "RESEARCH PAPERS" }, { value: "$32B", label: "TAM COVERAGE" }, { value: "100%", label: "DAUBERT READY" }, { value: "∞", label: "LIABILITY MAPPED" }].map((metric) => (
              <div key={metric.label} className="p-6 border border-black/10 relative bg-white">
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#4b6bff] opacity-40" />
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#4b6bff] opacity-40" />
                <div className="text-4xl font-extralight text-[#4b6bff] mb-2">{metric.value}</div>
                <div className="microtype microtype--muted text-[9px] tracking-[0.2em]">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/5 px-6 sm:px-10 md:px-16 lg:px-24 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="microtype microtype--muted text-[9px] tracking-[0.3em] mb-8 block">
            ESTABLISH.LINK
          </span>
          <h2 className="text-4xl md:text-6xl font-light leading-[0.95] mb-8 text-[#010409]">
            Ready to define <span className="text-[#4b6bff]">accountability?</span>
          </h2>
          <Link href="/contact" className="inline-flex items-center justify-center px-12 py-5 rounded-full bg-[#010409] text-white font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-[#4b6bff]">
            Initiate Contact
          </Link>
        </div>
      </section>
    </div>
  )
}
