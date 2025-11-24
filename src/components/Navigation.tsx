'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-surface-base/90 backdrop-blur-xl border-b border-border-subtle z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/logo-cyan.png" 
                alt="Alpha Vector Technologies" 
                width={40} 
                height={40}
                className="w-10 h-10"
              />
              <div className="hidden sm:block">
                <span className="text-lg font-semibold text-text-primary">Alpha Vector Tech</span>
                <span className="ml-3 text-xs text-text-tertiary font-mono">ABN: 50 353 196 500</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/research" className="nav-link text-sm">Research</Link>
            <Link href="/about" className="nav-link text-sm">About</Link>
            <Link href="/methodologies" className="nav-link text-sm">Methodologies</Link>
            <Link href="/contact" className="btn-primary text-sm">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border-subtle">
            <div className="flex flex-col space-y-4">
              <Link href="/research" className="nav-link text-sm px-2 py-1">Research</Link>
              <Link href="/about" className="nav-link text-sm px-2 py-1">About</Link>
              <Link href="/methodologies" className="nav-link text-sm px-2 py-1">Methodologies</Link>
              <Link href="/contact" className="btn-primary text-sm text-center">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
