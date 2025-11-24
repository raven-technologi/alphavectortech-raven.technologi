'use client';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-surface-base">
      <Navigation />
      
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm mb-8">
            <Link href="/" className="text-text-tertiary hover:text-accent transition-colors">Home</Link>
            <span className="text-text-tertiary">/</span>
            <span className="text-accent">About</span>
          </div>

          {/* Header */}
          <header className="mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary leading-tight mb-6">
              About Alpha Vector Technologies
            </h1>
            <p className="text-xl text-text-secondary">
              Institutional security research and digital accountability frameworks
            </p>
          </header>

          {/* Business Identity */}
          <section className="mb-16">
            <div className="bg-surface-elevated rounded-xl p-8 border border-border-subtle">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm font-mono text-accent uppercase tracking-wide mb-2">Legal Entity</h3>
                  <p className="text-text-primary text-lg font-semibold">ALPHA VECTOR TECH</p>
                  <p className="text-text-secondary text-sm mt-1">Registered Business Name</p>
                </div>
                <div>
                  <h3 className="text-sm font-mono text-accent uppercase tracking-wide mb-2">ABN</h3>
                  <p className="text-text-primary text-lg font-mono">50 353 196 500</p>
                  <p className="text-text-secondary text-sm mt-1">Australian Business Number</p>
                </div>
                <div>
                  <h3 className="text-sm font-mono text-accent uppercase tracking-wide mb-2">Principal Researcher</h3>
                  <p className="text-text-primary text-lg font-semibold">Gavin Sangedha</p>
                  <p className="text-text-secondary text-sm mt-1">Founder & Lead Researcher</p>
                </div>
                <div>
                  <h3 className="text-sm font-mono text-accent uppercase tracking-wide mb-2">Location</h3>
                  <p className="text-text-primary text-lg">South Australia</p>
                  <p className="text-text-secondary text-sm mt-1">Australia</p>
                </div>
              </div>
            </div>
          </section>

          {/* Mission */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Our Mission</h2>
            <div className="prose-research">
              <p>Alpha Vector Technologies exists to bring mathematical rigor and legal precision to the field of algorithmic accountability. We develop frameworks that transform opaque technical failures into legally cognizable claims with clear evidentiary pathways.</p>
              <p>Our research synthesizes decades of computer science advances in formal verification, causal inference, and cryptographic proofs with established legal doctrines to create methodologies that satisfy Federal Rules of Evidence standards and Daubert admissibility requirements.</p>
              <p>We believe that as algorithmic systems increasingly control consequential decisions affecting individuals' financial access, employment prospects, physical safety, and constitutional rights, robust governance frameworks establishing clear accountability become not just beneficial but essential.</p>
            </div>
          </section>

          {/* Principal Researcher Bio */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Principal Researcher</h2>
            <div className="bg-surface-elevated rounded-xl p-8 border border-border-subtle">
              <h3 className="text-xl font-semibold text-accent mb-4">Gavin Sangedha</h3>
              <div className="prose-research">
                <p>Gavin Sangedha is the founder and Principal Researcher at Alpha Vector Technologies, specializing in cybersecurity forensics, AI governance frameworks, and digital accountability research. His work focuses on developing mathematically rigorous methodologies for attributing corporate liability in algorithmic system failures.</p>
                <p>His research spans the intersection of computer science and law, including:</p>
                <ul>
                  <li>Causal forensics protocols for algorithmic negligence attribution</li>
                  <li>Application of Judea Pearl's do-calculus to legal causation standards</li>
                  <li>Tree of Thoughts and Graph of Thoughts analysis for organizational knowledge reconstruction</li>
                  <li>Post-quantum cryptographic migration frameworks</li>
                  <li>Byzantine fault tolerance and distributed ledger security quantification</li>
                  <li>Caremark oversight duty compliance for algorithmic systems</li>
                </ul>
                <p>His methodology development has produced frameworks suitable for Federal Court proceedings, meeting Daubert standards for expert testimony admissibility through demonstrated testability, peer review grounding, known error rates, standardized procedures, and scientific acceptance.</p>
              </div>
            </div>
          </section>

          {/* Research Philosophy */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-text-primary mb-6">Research Philosophy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface-elevated rounded-lg p-6 border border-border-subtle">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-text-primary font-semibold mb-2">Mathematical Rigor</h4>
                <p className="text-text-secondary text-sm">Every claim is backed by formal proofs, statistical analysis with confidence intervals, or peer-reviewed methodologies with known error rates.</p>
              </div>
              <div className="bg-surface-elevated rounded-lg p-6 border border-border-subtle">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h4 className="text-text-primary font-semibold mb-2">Legal Precision</h4>
                <p className="text-text-secondary text-sm">Frameworks are designed to meet evidentiary standards including FRE 902(14) self-authentication and Daubert expert testimony requirements.</p>
              </div>
              <div className="bg-surface-elevated rounded-lg p-6 border border-border-subtle">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h4 className="text-text-primary font-semibold mb-2">Forensic Integrity</h4>
                <p className="text-text-secondary text-sm">All evidence collection and analysis methods maintain chain of custody requirements suitable for legal proceedings.</p>
              </div>
              <div className="bg-surface-elevated rounded-lg p-6 border border-border-subtle">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h4 className="text-text-primary font-semibold mb-2">Global Standards</h4>
                <p className="text-text-secondary text-sm">Research aligns with emerging regulatory requirements across EU, UK, US, and international standards bodies including IEEE and ISO.</p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="bg-gradient-to-br from-accent/10 to-success/10 rounded-xl p-8 border border-accent/20">
            <h3 className="text-xl font-semibold text-text-primary mb-4">Professional Inquiries</h3>
            <p className="text-text-secondary mb-6">For research collaboration, expert consultation, or institutional inquiries, please contact us through our secure channels.</p>
            <Link href="/contact" className="btn-primary inline-block">
              Contact Us
            </Link>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
