import type { Metadata } from 'next'
import { Inter_Tight, JetBrains_Mono } from "next/font/google"
import './globals.css'
import 'katex/dist/katex.min.css'
import { SmoothScrollWrapper } from "@/components/SmoothScrollWrapper"
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

/* ═══════════════════════════════════════════════════════════════════════════
   TYPOGRAPHY CONFIGURATION
═══════════════════════════════════════════════════════════════════════════ */
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["300", "400", "500"],
})

export const metadata: Metadata = {
  title: 'Alpha Vector Technologies | Institutional Security Research',
  description: 'Institutional security research and digital accountability frameworks. Principal Researcher: Gavin Sangedha. ABN: 50 353 196 500',
  keywords: 'security research, digital forensics, algorithmic negligence, cybersecurity, causal inference',
  authors: [{ name: 'Gavin Sangedha' }],
  openGraph: {
    title: 'Alpha Vector Technologies',
    description: 'Institutional Security Research & Digital Accountability',
    type: 'website',
    locale: 'en_AU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={`
        ${interTight.variable} 
        ${jetbrainsMono.variable} 
        min-h-screen 
        bg-[#f8fbff] 
        font-sans 
        text-[#050505] 
        antialiased
        overflow-x-hidden
      `}>
        <SmoothScrollWrapper>
          {/* Background Grid */}
          <div 
            className="fixed inset-0 z-0 pointer-events-none opacity-[0.35]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
              maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          {/* Navigation */}
          <Navigation />

          {/* Main Content */}
          <main className="relative z-10">
            {children}
          </main>

          {/* Footer */}
          <Footer />

          {/* Footer Coordinates */}
          <div 
            className="fixed bottom-0 left-0 right-0 z-40 pointer-events-none"
            aria-hidden="true"
          >
            <div className="flex justify-between items-end px-8 py-6">
              <div className="text-[9px] font-mono tracking-[0.2em] text-[#9ca3b8] uppercase">
                <span>LAT -34.9285°</span>
                <span className="ml-4">LONG 138.6007°</span>
              </div>
              <div className="text-[9px] font-mono tracking-[0.2em] text-[#9ca3b8] uppercase">
                <span>SYS:OPERATIONAL</span>
              </div>
            </div>
          </div>
        </SmoothScrollWrapper>
      </body>
    </html>
  )
}
