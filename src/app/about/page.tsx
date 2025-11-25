'use client'

import Link from 'next/link'
import PageFrame from '@/components/PageFrame'

export default function AboutPage() {
  return (
    <PageFrame
      tag="DOSSIER // 01"
      title="Institutional Profile"
      description="Alpha Vector Technologies engineers forensic methodologies that convert autonomous-system failures into litigable accountability proofs."
    >
      <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-2">
          {[{
            label: 'Legal Entity',
            value: 'Alpha Vector Technologies',
            meta: 'Registered Business Name'
          }, {
            label: 'ABN',
            value: '50 353 196 500',
            meta: 'Australian Business Number'
          }, {
            label: 'Principal Researcher',
            value: 'Gavin Sangedha',
            meta: 'Founder & Lead Researcher'
          }, {
            label: 'Operating Theatre',
            value: 'Global operations',
            meta: 'Distributed research footprint'
          }].map((item) => (
            <div key={item.label} className="space-y-1 border border-white/10 p-6">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#7c7c7c]">{item.label}</p>
              <p className="text-xl font-light text-white">{item.value}</p>
              <p className="text-sm text-[#8d8d8d]">{item.meta}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.01] p-8">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#6f6f6f]">Mission Brief</h2>
          <div className="prose-research mt-6">
            <p>Alpha Vector Technologies exists to bring mathematical rigor and legal precision to the field of algorithmic accountability. We develop frameworks that transform opaque technical failures into legally cognizable claims with clear evidentiary pathways.</p>
            <p>Our research synthesizes decades of computer science advances in formal verification, causal inference, and cryptographic proofs with established legal doctrines to create methodologies that satisfy Federal Rules of Evidence standards and Daubert admissibility requirements.</p>
            <p>We believe that as algorithmic systems increasingly control consequential decisions affecting individuals&rsquo; financial access, employment prospects, physical safety, and constitutional rights, robust governance frameworks establishing clear accountability become not just beneficial but essential.</p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.01] p-8">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#6f6f6f]">Operating Principles</h2>
          <ul className="mt-6 space-y-5 text-sm text-[#c7c7c7]">
            <li className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.25em] text-[#00ffff]">
              <span className="h-px flex-1 bg-[#00ffff]/40" />
              Proof-grade evidence
            </li>
            <li className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.25em] text-[#00ffff]">
              <span className="h-px flex-1 bg-[#00ffff]/40" />
              Litigation-calibrated outputs
            </li>
            <li className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.25em] text-[#00ffff]">
              <span className="h-px flex-1 bg-[#00ffff]/40" />
              Systemic liability mapping
            </li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.015] p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#6f6f6f]">Principal Researcher</span>
            <h2 className="mt-4 text-3xl font-light text-white">Gavin Sangedha</h2>
            <div className="prose-research mt-6">
              <p>Gavin Sangedha is the founder and Principal Researcher at Alpha Vector Technologies, specializing in cybersecurity forensics, AI governance frameworks, and digital accountability research. His work focuses on developing mathematically rigorous methodologies for attributing corporate liability in algorithmic system failures.</p>
              <p>His research spans the intersection of computer science and law, including:</p>
              <ul>
                <li>Causal forensics protocols for algorithmic negligence attribution</li>
                <li>Application of Judea Pearl&rsquo;s do-calculus to legal causation standards</li>
                <li>Tree of Thoughts and Graph of Thoughts analysis for organizational knowledge reconstruction</li>
                <li>Post-quantum cryptographic migration frameworks</li>
                <li>Byzantine fault tolerance and distributed ledger security quantification</li>
                <li>Caremark oversight duty compliance for algorithmic systems</li>
              </ul>
              <p>His methodology development has produced frameworks suitable for Federal Court proceedings, meeting Daubert standards for expert testimony admissibility through demonstrated testability, peer review grounding, known error rates, standardized procedures, and scientific acceptance.</p>
            </div>
          </div>
          <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-[#020202] p-6">
            <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#6c6c6c]">Reach</p>
            <p className="mt-4 text-sm text-[#c7c7c7]">Encrypted channels provisioned on request. PGP fingerprint available post-NDA.</p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] text-[#00ffff]"
            >
              Initiate Contact
              <span className="h-px w-8 bg-[#00ffff]" />
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
        <h2 className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#6f6f6f]">Research Philosophy</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[{
            title: 'Mathematical Rigor',
            copy: 'Every claim is backed by formal proofs, statistical analysis with confidence intervals, or peer-reviewed methodologies with known error rates.'
          }, {
            title: 'Legal Precision',
            copy: 'Frameworks are designed to meet evidentiary standards including FRE 902(14) self-authentication and Daubert expert testimony requirements.'
          }, {
            title: 'Forensic Integrity',
            copy: 'All evidence collection and analysis methods maintain chain of custody requirements suitable for legal proceedings.'
          }, {
            title: 'Global Alignment',
            copy: 'Research maps to regulatory trajectories across EU, UK, US, and international standards bodies including IEEE and ISO.'
          }].map((item) => (
            <div key={item.title} className="border border-white/10 p-6">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#00ffff]/60">{item.title}</p>
              <p className="mt-3 text-sm text-[#c5c5c5]">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </PageFrame>
  )
}
