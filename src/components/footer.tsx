"use client"

import Link from "next/link"
import { siteConfig } from "@/config/site"
import { researchPapers } from "@/lib/research-papers"
import { Mail, Linkedin, FileText } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-8 py-16 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="text-lg font-medium tracking-tight text-slate-900">
              {siteConfig.shortName}
            </Link>
            <p className="mt-4 text-sm text-slate-600">
              {siteConfig.description}
            </p>
            <p className="mt-4 font-mono text-xs text-slate-400">
              ABN: {siteConfig.abn}
            </p>
          </div>

          {/* Research Column */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-4">
              Research Index
            </h3>
            <ul className="space-y-3">
              {researchPapers.map((paper) => (
                <li key={paper.id}>
                  <Link 
                    href={`/research/${paper.slug}`}
                    className="text-sm text-slate-600 hover:text-primary transition-colors line-clamp-1"
                  >
                    {paper.title.split(':')[0]}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/research"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  <FileText className="w-3 h-3" />
                  View All Publications
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
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-sm text-slate-600 hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-4">
              Principal Researcher
            </h3>
            <div className="space-y-3">
              <p className="text-sm font-medium text-slate-900">
                {siteConfig.founder.name}
              </p>
              <p className="text-sm text-slate-600">
                {siteConfig.founder.title}
              </p>
              <div className="flex items-center gap-4 pt-2">
                <a 
                  href={`mailto:gsangedha.desk@proton.me`}
                  className="text-slate-500 hover:text-primary transition-colors"
                  title="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a 
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-primary transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">
            © {currentYear} {siteConfig.name}. All rights reserved.
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

