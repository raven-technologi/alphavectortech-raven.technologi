"use client"

import Link from "next/link"
import { researchPapers } from "@/lib/research-data"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-[#030303] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <span className="text-[9px] font-mono tracking-[0.35em] text-[#5c5c5c] uppercase">Entity</span>
            <p className="mt-4 text-2xl font-light tracking-tight text-white">
              Alpha Vector Technologies
            </p>
            <p className="mt-6 text-[11px] font-mono tracking-[0.25em] text-[#7d7d7d]">
              ABN 50 353 196 500
            </p>
          </div>

          <div>
            <span className="text-[9px] font-mono tracking-[0.35em] text-[#5c5c5c] uppercase">Research</span>
            <ul className="mt-6 space-y-3">
              {researchPapers.map((paper) => (
                <li key={paper.href}>
                  <Link
                    href={paper.href}
                    className="text-sm text-[#d6d6d6] hover:text-[#00ffff] transition-colors"
                  >
                    {paper.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/research" className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] text-[#00ffff]">
                  Index Overview
                  <span className="h-px w-8 bg-[#00ffff]" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="text-[9px] font-mono tracking-[0.35em] text-[#5c5c5c] uppercase">Navigation</span>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-[#d6d6d6]">
              {[
                ["/", "Home"],
                ["/research", "Research"],
                ["/about", "About"],
                ["/methodologies", "Methodologies"],
                ["/contact", "Contact"],
              ].map(([href, label]) => (
                <Link key={href} href={href} className="hover:text-[#00ffff] transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[9px] font-mono tracking-[0.35em] text-[#5c5c5c] uppercase">Channels</span>
            <div className="mt-6 space-y-4 text-sm text-[#d6d6d6]">
              <div>
                <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#6c6c6c]">Primary</p>
                <a
                  href="mailto:gavin.sangedha@alphavectortech.com"
                  className="text-[#fafafa] hover:text-[#00ffff] transition-colors"
                >
                  gavin.sangedha@alphavectortech.com
                </a>
              </div>
              <div>
                <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#6c6c6c]">Signal</p>
                <p className="font-mono">+61 489 218 235</p>
              </div>
              <div>
                <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#6c6c6c]">Status</p>
                <p className="font-mono text-[#00ffff]">SYS:OPERATIONAL</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-[10px] font-mono uppercase tracking-[0.3em] text-[#5b5b5b] md:flex-row md:items-center md:justify-between">
          <span>© {currentYear} Alpha Vector Technologies — all rights reserved</span>
          <span>Global Operations • Coordinated UTC</span>
        </div>
      </div>
    </footer>
  )
}
