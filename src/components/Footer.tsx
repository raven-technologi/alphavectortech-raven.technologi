"use client"

import Link from "next/link"
import { researchPapers } from "@/lib/research-data"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-black/5 bg-[#f5f7ff] overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <span className="microtype microtype--muted text-[9px] tracking-[0.35em]">Entity</span>
            <p className="mt-4 text-2xl font-light tracking-tight text-[#010409]">
              Alpha Vector Technologies
            </p>
            <p className="mt-6 text-[11px] font-mono tracking-[0.25em] text-[#010409]">
              ABN 50 353 196 500
            </p>
          </div>

          <div>
            <span className="microtype microtype--muted text-[9px] tracking-[0.35em]">Research</span>
            <ul className="mt-6 space-y-3">
              {researchPapers.map((paper) => (
                <li key={paper.href}>
                  <Link
                    href={paper.href}
                    className="text-sm text-[#010409] hover:text-[#4b6bff] transition-colors"
                  >
                    {paper.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/research" className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.3em] text-[#4b6bff]">
                  Index Overview
                  <span className="h-px w-8 bg-[#4b6bff]" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <span className="microtype microtype--muted text-[9px] tracking-[0.35em]">Navigation</span>
            <div className="mt-6 flex flex-col gap-3 text-sm text-[#010409]">
              {[
                ["/", "Home"],
                ["/research", "Research Archive"],
                ["/methodologies", "Methodologies"],
                ["/about", "About"],
                ["/contact", "Contact"],
              ].map(([href, label]) => (
                <Link key={href} href={href} className="hover:text-[#00ffff] transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <span className="microtype microtype--muted text-[9px] tracking-[0.35em]">Channels</span>
            <div className="mt-6 space-y-4 text-sm text-[#010409]">
              <div>
                <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#010409]">Primary</p>
                <a
                  href="mailto:gsangedha.desk@proton.me"
                  className="text-[#010409] hover:text-[#4b6bff] transition-colors"
                >
                  gsangedha.desk@proton.me
                </a>
              </div>
              <div>
                <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#010409]">Signal</p>
                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#010409]">Endpoint issued post-clearance</p>
              </div>
              <div>
                <p className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#010409]">Status</p>
                <p className="font-mono text-[#4b6bff]">SYS:OPERATIONAL</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-black/10 pt-8 text-[10px] font-mono uppercase tracking-[0.3em] text-[#010409] md:flex-row md:items-center md:justify-between">
          <span>© {currentYear} Alpha Vector Technologies — all rights reserved</span>
          <span>Global Operations • Coordinated UTC</span>
        </div>
      </div>
    </footer>
  )
}
