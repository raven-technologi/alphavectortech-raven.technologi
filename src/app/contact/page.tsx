import { Metadata } from "next";
import { Mail, Building2, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact | Alpha Vector Technologies",
  description: "Contact Alpha Vector Technologies for research inquiries, licensing, and consultation.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white px-4 py-20">
      <div className="mx-auto max-w-3xl">
        
        {/* Header */}
        <header className="mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-700 mb-4">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-6">
            Research Inquiries
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            For research licensing, consultation inquiries, or legal representation discussions, 
            please contact Alpha Vector Technologies directly.
          </p>
        </header>

        {/* Contact Methods */}
        <section className="mb-16 space-y-6">
          
          {/* Primary Contact */}
          <div className="bg-slate-50 border border-slate-200 p-8">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-cyan-700 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-lg font-medium text-slate-900 mb-2">Primary Contact</h2>
                <p className="text-slate-600 mb-4">
                  For all inquiries regarding research, licensing, legal matters, or consultation.
                </p>
                <a 
                  href="mailto:gavin@alphavectortech.com" 
                  className="font-mono text-cyan-700 hover:underline"
                >
                  gavin@alphavectortech.com
                </a>
              </div>
            </div>
          </div>

          {/* Entity Information */}
          <div className="bg-slate-50 border border-slate-200 p-8">
            <div className="flex items-start gap-4">
              <Building2 className="w-6 h-6 text-cyan-700 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-lg font-medium text-slate-900 mb-2">Entity Information</h2>
                <div className="space-y-2 text-slate-600">
                  <p><strong className="text-slate-900">Entity:</strong> Alpha Vector Technologies</p>
                  <p><strong className="text-slate-900">ABN:</strong> <span className="font-mono">50 353 196 500</span></p>
                  <p><strong className="text-slate-900">Jurisdiction:</strong> South Australia, Australia</p>
                  <p><strong className="text-slate-900">Principal:</strong> Gavin Sangedha</p>
                </div>
              </div>
            </div>
          </div>

          {/* Research Access */}
          <div className="bg-slate-50 border border-slate-200 p-8">
            <div className="flex items-start gap-4">
              <FileText className="w-6 h-6 text-cyan-700 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-lg font-medium text-slate-900 mb-2">Research Access</h2>
                <p className="text-slate-600 mb-4">
                  Our published research frameworks are available for review. For licensing 
                  inquiries regarding commercial application of these methodologies, please 
                  contact us directly.
                </p>
                <Link href="/research">
                  <Button variant="outline" size="sm" className="font-mono text-xs">
                    Access Research Index →
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Notice */}
        <section className="border-t border-slate-200 pt-8">
          <p className="text-xs text-slate-500 leading-relaxed">
            All research publications and methodologies are proprietary intellectual property 
            of Alpha Vector Technologies. Unauthorized reproduction, distribution, or commercial 
            application is prohibited. For licensing terms and conditions, contact the principal 
            researcher directly.
          </p>
        </section>

      </div>
    </div>
  );
}
