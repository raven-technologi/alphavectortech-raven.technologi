'use client';
import Link from "next/link"
import { useState } from "react"

const navItems = [
  { href: "/research", label: "Research" },
  { href: "/about", label: "About" },
  { href: "/methodologies", label: "Methodologies" },
  { href: "/contact", label: "Contact" },
]

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#030303]/80 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="group">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono tracking-[0.45em] text-[#7c7c7c] uppercase group-hover:text-[#00ffff] transition-colors">
                Alpha Vector Technologies
              </span>
              <span className="mt-2 text-[10px] font-mono tracking-[0.3em] text-[#3f3f3f]">
                ABN 50 353 196 500
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navItems.slice(0, 3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#6f6f6f] hover:text-[#fafafa] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent via-[#00ffff] to-transparent" />
            <Link
              href="/contact"
              className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#00ffff] hover:text-[#00d4d4] transition-colors"
            >
              Initiate Contact
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center rounded-full border border-white/15 w-11 h-11 text-white"
            aria-label="Toggle navigation"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#050505]/95">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[11px] font-mono uppercase tracking-[0.4em] text-[#9b9b9b]"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
