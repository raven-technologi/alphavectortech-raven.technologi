"use client"

import Link from "next/link"
import { researchPapers } from "@/lib/research-data"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-8 py-16 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="text-lg font-medium tracking-tight text-slate-900">
              Alpha Vector
            </Link>
            <p className="mt-4 text-sm text-slate-600">
              Advanced epistemic forensics and distributed ledger security analysis.
            </p>
            <p className="mt-4 font-mono text-xs text-slate-400">
              ABN: 50 353 196 500
            </p>
          </div>

          {/* Research Column */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-4">
              Research Index
            </h3>
            <ul className="space-y-3">
              {researchPapers.map((paper) => (
                <li key={paper.href}>
                  <Link 
                    href={paper.href}
                    className="text-sm text-slate-600 hover:text-cyan-600 transition-colors line-clamp-1"
                  >
                    {paper.title.split(':')[0]}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/research"
                  className="inline-flex items-center gap-1 text-sm font-medium text-cyan-600 hover:underline"
                >
                  View All Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-slate-600 hover:text-cyan-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-slate-600 hover:text-cyan-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/methodologies" className="text-sm text-slate-600 hover:text-cyan-600 transition-colors">
                  Methodologies
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-sm text-slate-600 hover:text-cyan-600 transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-600 hover:text-cyan-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-4">
              Principal Researcher
            </h3>
            <div className="space-y-3">
              <p className="text-sm font-medium text-slate-900">
                Gavin Sangedha
              </p>
              <p className="text-sm text-slate-600">
                Founder & Principal Researcher
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a 
                  href="mailto:gavin.sangedha@alphavectortech.com"
                  className="text-slate-500 hover:text-cyan-600 transition-colors"
                  title="Email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/gavin-sangedha-68666017b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-cyan-600 transition-colors"
                  title="LinkedIn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © {currentYear} Alpha Vector Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-slate-400">
            <span>Adelaide, South Australia</span>
            <span>•</span>
            <span className="font-mono">+61 489 218 235</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
