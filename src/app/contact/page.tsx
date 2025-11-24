import { Metadata } from 'next';
import { Mail, Phone, MapPin, Building } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact | Alpha Vector Tech | Gavin Sangedha',
  description: 'Contact Alpha Vector Tech for forensic intelligence services. Principal: Gavin Sangedha. ABN: 50 353 196 500.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-20">
      <div className="mx-auto max-w-4xl">
        
        {/* Header */}
        <header className="mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-700 mb-4">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-6">
            Engage Alpha Vector Tech
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            For forensic intelligence services, expert witness testimony, or institutional 
            research collaboration.
          </p>
        </header>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          
          {/* Principal Contact */}
          <div className="border border-slate-200 p-8">
            <h2 className="text-xl font-light text-slate-900 mb-6">Principal Researcher</h2>
            <div className="space-y-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-1">
                  Name
                </p>
                <p className="text-lg font-medium text-slate-900">
                  Gavin Sangedha
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-1">
                  Title
                </p>
                <p className="text-slate-700">
                  Founder & Principal Researcher
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-1">
                  Email
                </p>
                <a href="mailto:gavin@alphavectortech.com" className="text-cyan-700 hover:underline">
                  gavin@alphavectortech.com
                </a>
              </div>
            </div>
          </div>

          {/* Business Information */}
          <div className="border border-slate-200 p-8">
            <h2 className="text-xl font-light text-slate-900 mb-6">Business Information</h2>
            <div className="space-y-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-1">
                  Registered Name
                </p>
                <p className="text-lg font-medium text-slate-900">
                  Alpha Vector Tech
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-1">
                  ABN
                </p>
                <p className="font-mono text-slate-700">
                  50 353 196 500
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-1">
                  Jurisdiction
                </p>
                <p className="text-slate-700">
                  Australia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-slate-900 mb-6">Services</h2>
          <div className="bg-slate-50 p-8 border border-slate-200">
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-cyan-700">•</span>
                <span>Forensic analysis of algorithmic failures and security breaches</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-700">•</span>
                <span>Expert witness testimony for securities litigation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-700">•</span>
                <span>Causal attribution in distributed system failures</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-700">•</span>
                <span>Executive liability assessment for AI governance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-700">•</span>
                <span>Risk quantification for DLT infrastructure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-700">•</span>
                <span>Institutional research and methodology development</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Engagement Process */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-slate-900 mb-6">Engagement Process</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-cyan-700 pl-6">
              <h3 className="font-mono text-sm uppercase tracking-wider text-slate-700 mb-2">
                1. Initial Consultation
              </h3>
              <p className="text-slate-600">
                Confidential assessment of forensic requirements and case viability
              </p>
            </div>
            <div className="border-l-4 border-cyan-700 pl-6">
              <h3 className="font-mono text-sm uppercase tracking-wider text-slate-700 mb-2">
                2. Scope Definition
              </h3>
              <p className="text-slate-600">
                Detailed specification of deliverables, timelines, and methodologies
              </p>
            </div>
            <div className="border-l-4 border-cyan-700 pl-6">
              <h3 className="font-mono text-sm uppercase tracking-wider text-slate-700 mb-2">
                3. Forensic Analysis
              </h3>
              <p className="text-slate-600">
                Application of proprietary frameworks to evidence corpus
              </p>
            </div>
            <div className="border-l-4 border-cyan-700 pl-6">
              <h3 className="font-mono text-sm uppercase tracking-wider text-slate-700 mb-2">
                4. Report Delivery
              </h3>
              <p className="text-slate-600">
                Court-admissible documentation with mathematical proofs
              </p>
            </div>
          </div>
        </section>

        {/* Legal Notice */}
        <footer className="border-t border-slate-200 pt-8">
          <p className="text-xs text-slate-500">
            Alpha Vector Tech is a registered Australian business (ABN: 50 353 196 500) founded 
            and operated by Gavin Sangedha. All engagements are subject to confidentiality agreements 
            and operate under applicable legal frameworks including 18 U.S.C. § 1030(f) for security research.
          </p>
        </footer>

      </div>
    </div>
  );
}