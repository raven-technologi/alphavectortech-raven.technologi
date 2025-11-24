import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image 
                src="/logo-cyan.png" 
                alt="Alpha Vector Technologies" 
                width={40} 
                height={40}
                className="w-10 h-10"
              />
              <span className="text-lg font-semibold text-text-primary">Alpha Vector Technologies</span>
            </div>
            <p className="text-text-secondary text-sm mb-4 max-w-md">
              Institutional security research and digital accountability frameworks. Pioneering causal forensics methodologies for algorithmic negligence attribution.
            </p>
            <p className="text-text-tertiary text-xs font-mono">ABN: 50 353 196 500</p>
            <p className="text-text-tertiary text-xs mt-1">Principal Researcher: Gavin Sangedha</p>
            <p className="text-text-tertiary text-xs mt-1">South Australia</p>
          </div>

          {/* Research Papers */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Research Papers</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/research/mens-rea-vector" className="text-text-secondary hover:text-accent text-sm transition-colors">
                  The Mens Rea Vector
                </Link>
              </li>
              <li>
                <Link href="/research/byzantine-calculus" className="text-text-secondary hover:text-accent text-sm transition-colors">
                  The Byzantine Calculus
                </Link>
              </li>
              <li>
                <Link href="/research/sangedha-framework" className="text-text-secondary hover:text-accent text-sm transition-colors">
                  The Sangedha Framework
                </Link>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-text-secondary hover:text-accent text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/methodologies" className="text-text-secondary hover:text-accent text-sm transition-colors">
                  Methodologies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-accent text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border-subtle flex flex-col sm:flex-row justify-between items-center">
          <p className="text-text-tertiary text-xs">
            © 2025 Alpha Vector Technologies. All rights reserved.
          </p>
          <p className="text-text-tertiary text-xs mt-2 sm:mt-0">
            Registered Business Name • ABN: 50 353 196 500
          </p>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-8 p-4 bg-surface-elevated rounded-lg border border-border-subtle">
          <p className="text-text-tertiary text-xs">
            <strong className="text-text-secondary">Legal Disclaimer:</strong> The research and methodologies presented on this website are for informational and educational purposes only. They do not constitute legal advice and should not be relied upon as such. For legal matters, please consult with qualified legal counsel. Alpha Vector Technologies maintains rigorous research standards and documents all methodologies in accordance with peer-reviewed scientific protocols.
          </p>
        </div>
      </div>
    </footer>
  );
}
