'use client'

import Link from 'next/link'
import PageFrame from '@/components/PageFrame'

export default function AboutPage() {
  return (
    <PageFrame
      tag="DOSSIER | 01"
      description="Alpha Vector Technologies engineers forensic methodologies that convert autonomous-system failures into litigable accountability proofs."
      showHeading={false}
      showTagBarcode
    >
      <section className="rounded-3xl border border-black/10 bg-white p-8 md:p-12">
        <div className="border-b border-black/10 pb-8">
          <p className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#4b6bff]">Agency Overview</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight text-[#010409]">Institutional Profile</h1>
          <p className="mt-3 text-base text-[#050505]">Registry posture, principal leadership, and operating theatre for the liability command center.</p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
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
            value: 'Global Operations',
            meta: 'Distributed research footprint'
          }].map((item) => (
            <div key={item.label} className="space-y-1 border border-black/10 bg-[#f8faff] p-6">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#010409]">{item.label}</p>
              <p className="text-xl font-light text-[#010409]">{item.value}</p>
              <p className="text-sm text-[#050505]">{item.meta}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="rounded-3xl border border-black/10 bg-white p-8">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#010409]">Mission Brief</h2>
          <div className="prose-research mt-6">
            <p>Alpha Vector Technologies functions as a liability command center for autonomous systems. We prototype evidentiary frameworks before regulators or adversarial counsel can weaponize the gap, turning telemetry, model weights, and engineering workflow exhaust into prosecutable narratives.</p>
            <p>Our teams couple causal inference, symbolic execution, and cryptographic attestation with black-letter law so every deliverable lands with citations for Federal Rules of Evidence 702, 703, and 902(14). The objective is not thought leadership&mdash;it is building filings that survive Daubert cross-examination.</p>
            <p>As automation now controls credit adjudication, airspace routing, and sovereign defense perimeters, accountability cannot remain a compliance afterthought. We architect governance schemas that encode culpability thresholds in advance, forcing executive stewardship to keep pace with autonomous reach.</p>
          </div>
        </div>

        <div className="rounded-3xl border border-black/10 bg-white p-8">
          <h2 className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#010409]">Operating Principles</h2>
          <ul className="mt-6 space-y-5 text-sm text-[#050505]">
            {["Proof burdens pre-modeled", "Chain-of-custody native", "Systemic liability heatmaps"].map((principle) => (
              <li key={principle} className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.25em] text-[#4b6bff]">
                <span className="h-px flex-1 bg-[#4b6bff]/30" />
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#010409]">Principal Researcher</span>
            <h2 className="mt-4 text-3xl font-light text-[#010409]">Gavin Sangedha</h2>
            <div className="prose-research mt-6">
              <p>Gavin Sangedha founded Alpha Vector Technologies to centralize liability intelligence into a deployable command center. He operates as a hybrid litigator-engineer, building attribution models that can be walked directly into a war room, regulator briefing, or federal courtroom.</p>
              <p>His research portfolio spans offensive cryptography, autonomous mission assurance, and executive culpability modeling. Current workstreams include testimony packages for emergent Delaware Caremark precedent, telemetry notarization for STS/STAR operations, and defense-grade liability matrices for constellation-scale AI deployments.</p>
              <p>Every methodology he authors is benchmarked against Daubert reliability criteria: reproducible experiments, transparent error bounds, adversarial peer review, and codified procedures that survive hostile discovery. Clients don&rsquo;t just receive insights&mdash;they receive ready-to-file exhibits.</p>
            </div>
          </div>
          <div className="w-full max-w-sm rounded-2xl border border-black/10 bg-[#f8faff] p-6">
            <p className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#010409]">Reach</p>
            <ul className="mt-6 space-y-5 text-sm text-[#050505]">
              {["Encrypted channels provisioned on request", "PGP fingerprint available post-NDA"].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.25em] text-[#4b6bff]"
                >
                  <span className="h-px flex-1 bg-[#4b6bff]/30" />
                  {item}
                </li>
              ))}
              <li className="flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.25em] text-[#4b6bff]">
                <span className="h-px flex-1 bg-[#4b6bff]/30" />
                <Link href="/contact" className="inline-flex items-center gap-3 text-inherit">
                  Initiate Contact
                  <span className="h-px w-8 bg-[#4b6bff]" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-8">
        <h2 className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#010409]">Research Philosophy</h2>
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
            <div key={item.title} className="border border-black/10 bg-[#f8faff] p-6">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#4b6bff]">{item.title}</p>
              <p className="mt-3 text-sm text-[#050505]">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>
    </PageFrame>
  )
}
