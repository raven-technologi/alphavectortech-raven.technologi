import React from 'react';
import { Metadata } from 'next';
import { Shield, AlertCircle, Lock, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Responsible Disclosure Protocol | Alpha Vector Technologies',
  description: 'Security research guidelines and responsible disclosure framework under 18 U.S.C. § 1030(f)',
};

export default function DisclosureProtocolPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-20">
      <div className="mx-auto max-w-4xl">
        
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-8 h-8 text-cyan-700" />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-700">
              Legal Framework
            </p>
          </div>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-6">
            Responsible Disclosure Protocol
          </h1>
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                All security research conducted by Alpha Vector Technologies is performed in strict 
                compliance with applicable laws, including 18 U.S.C. § 1030(f) and relevant safe harbor provisions.
              </p>
            </div>
          </div>
        </header>

        {/* Legal Authorization */}
        <section className="mb-12">
          <h2 className="text-2xl font-light text-slate-900 mb-6">Legal Authorization</h2>
          <div className="prose prose-slate max-w-none">
            <p className="text-slate-600 leading-relaxed">
              Alpha Vector Technologies operates under the legal framework established by the Computer 
              Fraud and Abuse Act (CFAA), specifically 18 U.S.C. § 1030(f), which provides authorization 
              for security testing and forensic analysis when conducted in accordance with responsible 
              disclosure principles.
            </p>
            <p className="text-slate-600 leading-relaxed mt-4">
              Our research activities are limited to:
            </p>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-cyan-700 mt-1 flex-shrink-0" />
                <span>Analysis of publicly available information and open-source code repositories</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-cyan-700 mt-1 flex-shrink-0" />
                <span>Forensic examination of digital artifacts within authorized scope</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-cyan-700 mt-1 flex-shrink-0" />
                <span>Mathematical modeling and theoretical analysis of system behaviors</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="w-4 h-4 text-cyan-700 mt-1 flex-shrink-0" />
                <span>Responsible disclosure to affected parties prior to public release</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Disclosure Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-light text-slate-900 mb-6">Disclosure Timeline</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-cyan-700 pl-6">
              <h3 className="font-mono text-sm uppercase tracking-wider text-slate-700 mb-2">Discovery</h3>
              <p className="text-slate-600">Identification of potential security issue through authorized research methods</p>
            </div>
            <div className="border-l-4 border-cyan-700 pl-6">
              <h3 className="font-mono text-sm uppercase tracking-wider text-slate-700 mb-2">Notification</h3>
              <p className="text-slate-600">Private disclosure to affected party with detailed technical documentation</p>
            </div>
            <div className="border-l-4 border-cyan-700 pl-6">
              <h3 className="font-mono text-sm uppercase tracking-wider text-slate-700 mb-2">Remediation Period</h3>
              <p className="text-slate-600">90-day standard window for patch development and deployment</p>
            </div>
            <div className="border-l-4 border-cyan-700 pl-6">
              <h3 className="font-mono text-sm uppercase tracking-wider text-slate-700 mb-2">Public Disclosure</h3>
              <p className="text-slate-600">Release of redacted findings for academic and security community benefit</p>
            </div>
          </div>
        </section>

        {/* Ethical Commitments */}
        <section className="mb-12">
          <h2 className="text-2xl font-light text-slate-900 mb-6">Ethical Commitments</h2>
          <div className="bg-slate-50 p-6 border border-slate-200">
            <ul className="space-y-4 text-slate-600">
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">No Exploitation</h4>
                  <p className="text-sm">We never exploit vulnerabilities for unauthorized access or personal gain</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Minimal Disclosure</h4>
                  <p className="text-sm">Technical details are shared only to the extent necessary for remediation</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Good Faith</h4>
                  <p className="text-sm">All research is conducted with the intent to improve security posture</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Lock className="w-5 h-5 text-cyan-700 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Compliance</h4>
                  <p className="text-sm">Full adherence to applicable laws, regulations, and industry standards</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-slate-200 pt-8">
          <h2 className="text-2xl font-light text-slate-900 mb-6">Security Contact</h2>
          <p className="text-slate-600 mb-4">
            For security-related inquiries or to report vulnerabilities in our systems:
          </p>
          <div className="font-mono text-sm bg-slate-50 p-4 border border-slate-200">
            security@alphavectortech.com
          </div>
          <p className="text-xs text-slate-500 mt-4">
            All communications are encrypted. PGP key available upon request.
          </p>
        </section>

        {/* Legal Notice */}
        <footer className="mt-16 pt-8 border-t border-slate-200">
          <p className="text-xs text-slate-500">
            This protocol is maintained in accordance with industry best practices and legal requirements. 
            Alpha Vector Technologies reserves the right to update these guidelines as necessary to reflect 
            changes in law, technology, or security practices. Last updated: January 2025.
          </p>
        </footer>

      </div>
    </div>
  );
}