'use client'

import Link from 'next/link'
import PageFrame from '@/components/PageFrame'

export default function MethodologiesPage() {
  return (
    <PageFrame
      tag="DOSSIER | 03"
      description="Operational doctrine spanning vulnerability research, forensic reconstruction, and legal-technical harmonization."
      showHeading={false}
      showTagBarcode
    >
      <section className="rounded-3xl border border-black/10 bg-white p-8">
        <div className="border-b border-black/10 pb-8">
          <p className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#4b6bff]">Methodology Register</p>
          <h1 className="mt-4 text-4xl font-light tracking-tight text-[#010409]">Methodological Architecture</h1>
          <p className="mt-3 text-base text-[#050505]">A technical canon aligning bug bounty research, forensic reconstruction, disclosure choreography, and legal synthesis under one evidentiary rubric.</p>
        </div>
        <div className="prose-research mt-10">
          <h2>Bug Bounty &amp; Vulnerability Research</h2>
          <p>Alpha Vector Technologies conducts security research following industry best practices and responsible disclosure principles. Our methodology prioritizes:</p>
          <h4>Pre-Engagement Assessment</h4>
          <ul>
            <li>Verification of scope boundaries and authorized testing parameters</li>
            <li>Review of program policies and disclosure timelines</li>
            <li>Documentation of baseline system state before testing</li>
            <li>Risk assessment of potential testing impacts</li>
          </ul>
          <h4>Testing Protocol</h4>
          <ul>
            <li>Non-destructive testing approaches prioritized</li>
            <li>Minimal necessary privilege escalation</li>
            <li>Complete logging of all testing activities</li>
            <li>Immediate cessation upon discovering sensitive data exposure</li>
          </ul>
          <h4>Evidence Preservation</h4>
          <ul>
            <li>SHA-256 hashing of all collected evidence</li>
            <li>Timestamped screenshots and recordings</li>
            <li>Chain of custody documentation</li>
            <li>Secure storage with access controls</li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-black/10 bg-[#f8faff] p-8">
  <h2 className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#010409]">Responsible Disclosure Protocol</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              step: '01',
              title: 'Initial Report',
              copy:
                'Vulnerability details submitted through official channels within 24 hours of confirmation. Report includes technical description, reproduction steps, and impact assessment.',
            },
            {
              step: '02',
              title: 'Coordination Window',
              copy:
                'Standard 90-day disclosure window following CERT guidelines. Extended timelines available for complex vulnerabilities requiring significant remediation.',
            },
            {
              step: '03',
              title: 'Patch Verification',
              copy:
                'Upon patch release, independent verification that remediation effectively addresses the vulnerability without introducing new issues.',
            },
            {
              step: '04',
              title: 'Public Disclosure',
              copy:
                'Post-patch disclosure coordinated with vendor. Technical details released to enable defensive measures while minimizing exploitation risk.',
            },
          ].map((item) => (
            <div key={item.step} className="border border-black/10 bg-white p-6">
              <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#4b6bff]">{item.step}</p>
              <h3 className="mt-3 text-xl font-light text-[#010409]">{item.title}</h3>
              <p className="mt-3 text-sm text-[#050505]">{item.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-8">
  <h2 className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#010409]">Forensic Reconstruction Techniques</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'Git Archaeology',
              copy:
                'Systematic analysis of version control history to reconstruct development decisions, identify testing gaps, and establish attribution.',
              bullets: [
                'Commit message analysis',
                'Branch topology reconstruction',
                'Code review trail examination',
                'git bisect for bug introduction',
              ],
            },
            {
              title: 'Merkle Tree Verification',
              copy: 'Cryptographic proof of log integrity using SHA-256 hash chains, ensuring tamper-evident audit trails.',
              bullets: [
                'Proof of inclusion verification',
                'Consistency proof generation',
                'Root hash comparison',
                'FRE 902(14) compliance',
              ],
            },
            {
              title: 'eBPF System Telemetry',
              copy: 'Kernel-level observability capturing system calls, file access, and network activity with sub-millisecond precision.',
              bullets: [
                'Real-time process monitoring',
                'Syscall tracing',
                'Network flow capture',
                'Memory access patterns',
              ],
            },
            {
              title: 'Causal Inference Analysis',
              copy: 'Mathematical frameworks establishing directed causation from system events to observed outcomes.',
              bullets: [
                'Transfer entropy calculation',
                'Granger causality testing',
                "Pearl&rsquo;s do-calculus application",
                'Counterfactual analysis',
              ],
            },
          ].map((item) => (
            <div key={item.title} className="border border-black/10 bg-[#f8faff] p-6">
              <h3 className="text-xl font-light text-[#010409]">{item.title}</h3>
              <p className="mt-3 text-sm text-[#050505]">{item.copy}</p>
              <ul className="mt-4 space-y-1 text-xs text-[#4b5674]">
                {item.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-8">
  <h2 className="text-[11px] font-mono uppercase tracking-[0.35em] text-[#010409]">Legal-Technical Synthesis</h2>
        <div className="prose-research mt-6">
          <p>Our methodology bridges the gap between technical findings and legal requirements, ensuring research outputs are admissible and compelling in legal proceedings.</p>
          <h4>Daubert Compliance</h4>
          <p>All technical methodologies are designed to satisfy the Supreme Court&rsquo;s <em>Daubert</em> standard for expert testimony:</p>
          <ul>
            <li><strong>Testability:</strong> Methods produce falsifiable predictions that can be independently verified</li>
            <li><strong>Peer Review:</strong> Techniques grounded in peer-reviewed computer science and statistics literature</li>
            <li><strong>Known Error Rates:</strong> Statistical confidence intervals and false positive/negative rates documented</li>
            <li><strong>Standards:</strong> Adherence to NIST, IEEE, and ISO methodological standards</li>
            <li><strong>General Acceptance:</strong> Methods established in relevant scientific communities</li>
          </ul>
          <h4>Evidence Standards</h4>
          <p>Documentation and collection procedures designed for Federal Rules of Evidence compliance:</p>
          <ul>
            <li>FRE 902(14) self-authentication for digital evidence</li>
            <li>Chain of custody maintenance throughout analysis</li>
            <li>Cryptographic integrity verification at all stages</li>
            <li>Expert witness report formatting standards</li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-[#4b6bff]/30 bg-[#eef1ff] p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-2xl font-light text-[#010409]">Explore the primary research corpus</h3>
            <p className="mt-3 text-sm text-[#050505] md:text-base">
              Detailed technical specifications for applying these methodologies in live engagements.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/research/mens-rea-vector" className="rounded-2xl border border-[#010409]/20 px-6 py-3 text-[10px] font-mono uppercase tracking-[0.3em] text-[#010409]">
              Mens Rea Vector
            </Link>
            <Link href="/research/byzantine-calculus" className="rounded-2xl border border-[#010409]/20 px-6 py-3 text-[10px] font-mono uppercase tracking-[0.3em] text-[#010409]">
              Byzantine Calculus
            </Link>
            <Link href="/research/sangedha-framework" className="rounded-2xl border border-[#010409]/20 px-6 py-3 text-[10px] font-mono uppercase tracking-[0.3em] text-[#010409]">
              Sangedha Framework
            </Link>
          </div>
        </div>
      </section>
    </PageFrame>
  )
}
