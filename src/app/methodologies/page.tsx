'use client';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function MethodologiesPage() {
  return (
    <div className="min-h-screen bg-surface-base">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm mb-8">
            <Link href="/" className="text-text-tertiary hover:text-accent transition-colors">Home</Link>
            <span className="text-text-tertiary">/</span>
            <span className="text-accent">Methodologies</span>
          </div>

          {/* Header */}
          <header className="mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary leading-tight mb-6">
              Research Methodologies
            </h1>
            <p className="text-xl text-text-secondary">
              Rigorous approaches to security research, vulnerability discovery, and forensic analysis
            </p>
          </header>

          {/* Bug Bounty Approach */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Bug Bounty & Vulnerability Research</h2>
            <div className="bg-surface-elevated rounded-xl p-8 border border-border-subtle">
              <div className="prose-research">
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
            </div>
          </section>

          {/* Responsible Disclosure */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Responsible Disclosure Protocol</h2>
            <div className="space-y-6">
              <div className="bg-surface-elevated rounded-xl p-6 border border-border-subtle">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="text-text-primary font-semibold mb-2">Initial Report</h4>
                    <p className="text-text-secondary text-sm">Vulnerability details submitted through official channels within 24 hours of confirmation. Report includes technical description, reproduction steps, and impact assessment.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-surface-elevated rounded-xl p-6 border border-border-subtle">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="text-text-primary font-semibold mb-2">Coordination Period</h4>
                    <p className="text-text-secondary text-sm">Standard 90-day disclosure window following CERT guidelines. Extended timelines available for complex vulnerabilities requiring significant remediation.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-surface-elevated rounded-xl p-6 border border-border-subtle">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="text-text-primary font-semibold mb-2">Patch Verification</h4>
                    <p className="text-text-secondary text-sm">Upon patch release, independent verification that remediation effectively addresses the vulnerability without introducing new issues.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-surface-elevated rounded-xl p-6 border border-border-subtle">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="text-text-primary font-semibold mb-2">Public Disclosure</h4>
                    <p className="text-text-secondary text-sm">Post-patch disclosure coordinated with vendor. Technical details released to enable defensive measures while minimizing exploitation risk.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Forensic Reconstruction */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Forensic Reconstruction Techniques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-elevated rounded-xl p-6 border border-border-subtle">
                <h4 className="text-text-primary font-semibold mb-4">Git Archaeology</h4>
                <p className="text-text-secondary text-sm mb-4">Systematic analysis of version control history to reconstruct development decisions, identify testing gaps, and establish attribution.</p>
                <ul className="text-text-tertiary text-xs space-y-1">
                  <li>• Commit message analysis</li>
                  <li>• Branch topology reconstruction</li>
                  <li>• Code review trail examination</li>
                  <li>• git bisect for bug introduction</li>
                </ul>
              </div>
              
              <div className="bg-surface-elevated rounded-xl p-6 border border-border-subtle">
                <h4 className="text-text-primary font-semibold mb-4">Merkle Tree Verification</h4>
                <p className="text-text-secondary text-sm mb-4">Cryptographic proof of log integrity using SHA-256 hash chains, ensuring tamper-evident audit trails.</p>
                <ul className="text-text-tertiary text-xs space-y-1">
                  <li>• Proof of inclusion verification</li>
                  <li>• Consistency proof generation</li>
                  <li>• Root hash comparison</li>
                  <li>• FRE 902(14) compliance</li>
                </ul>
              </div>
              
              <div className="bg-surface-elevated rounded-xl p-6 border border-border-subtle">
                <h4 className="text-text-primary font-semibold mb-4">eBPF System Telemetry</h4>
                <p className="text-text-secondary text-sm mb-4">Kernel-level observability capturing system calls, file access, and network activity with sub-millisecond precision.</p>
                <ul className="text-text-tertiary text-xs space-y-1">
                  <li>• Real-time process monitoring</li>
                  <li>• Syscall tracing</li>
                  <li>• Network flow capture</li>
                  <li>• Memory access patterns</li>
                </ul>
              </div>
              
              <div className="bg-surface-elevated rounded-xl p-6 border border-border-subtle">
                <h4 className="text-text-primary font-semibold mb-4">Causal Inference Analysis</h4>
                <p className="text-text-secondary text-sm mb-4">Mathematical frameworks establishing directed causation from system events to observed outcomes.</p>
                <ul className="text-text-tertiary text-xs space-y-1">
                  <li>• Transfer entropy calculation</li>
                  <li>• Granger causality testing</li>
                  <li>• Pearl's do-calculus application</li>
                  <li>• Counterfactual analysis</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Legal-Technical Synthesis */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Legal-Technical Synthesis</h2>
            <div className="bg-surface-elevated rounded-xl p-8 border border-border-subtle">
              <div className="prose-research">
                <p>Our methodology bridges the gap between technical findings and legal requirements, ensuring research outputs are admissible and compelling in legal proceedings.</p>
                
                <h4>Daubert Compliance</h4>
                <p>All technical methodologies are designed to satisfy the Supreme Court's <em>Daubert</em> standard for expert testimony:</p>
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
            </div>
          </section>

          {/* Research Papers CTA */}
          <section className="bg-gradient-to-br from-accent/10 to-success/10 rounded-xl p-8 border border-accent/20">
            <h3 className="text-xl font-semibold text-text-primary mb-4">Explore Our Research</h3>
            <p className="text-text-secondary mb-6">Our published frameworks provide detailed technical specifications for implementing these methodologies in practice.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/research/mens-rea-vector" className="btn-primary">
                The Mens Rea Vector
              </Link>
              <Link href="/research/byzantine-calculus" className="btn-secondary">
                The Byzantine Calculus
              </Link>
              <Link href="/research/sangedha-framework" className="btn-secondary">
                The Sangedha Framework
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
