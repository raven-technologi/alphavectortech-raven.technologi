import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 mb-4">
              Alpha Vector Tech
            </h3>
            <p className="text-sm text-slate-300 mb-2">
              Principal Researcher: <span className="text-white font-medium">Gavin Sangedha</span>
            </p>
            <p className="text-sm text-slate-300">
              Australian Business Number (ABN):
            </p>
            <p className="text-white font-mono">
              50 353 196 500
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 mb-4">
              Research
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/research/byzantine-calculus" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">
                  The Byzantine Calculus
                </Link>
              </li>
              <li>
                <Link href="/research/sangedha-framework" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">
                  The Sangedha Framework
                </Link>
              </li>
              <li>
                <Link href="/research/mens-rea-vector" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">
                  The Mens Rea Vector
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400 mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/disclosure-protocol" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">
                  Responsible Disclosure Protocol
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-slate-300 hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
            <p className="text-xs text-slate-500 mt-4">
              Operating under 18 U.S.C. § 1030(f)
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-slate-400">
              © 2025 Alpha Vector Tech. All rights reserved.
            </p>
            <p className="text-xs text-slate-400 mt-2 md:mt-0">
              Founded and operated by Gavin Sangedha | Sydney, Australia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}