"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { siteConfig } from "@/config/site"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="mx-auto max-w-screen-2xl px-8 sm:px-12 lg:px-16">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-sm font-medium tracking-tight text-black hover:text-[#00ff88] transition-colors">
            {siteConfig.shortName}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {siteConfig.mainNav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-light tracking-tight text-black hover:text-[#00ff88] transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-black hover:text-[#00ff88] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f5f5f5] border-t border-neutral-200">
          <div className="space-y-1 px-8 py-6">
            {siteConfig.mainNav.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 text-base font-light text-black hover:text-[#00ff88] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
