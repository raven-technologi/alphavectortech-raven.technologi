import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f7f9ff] text-[#050505]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)",
          backgroundSize: "140px 140px",
        }}
        aria-hidden
      />

      <main className="relative flex min-h-screen items-center justify-center px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex items-center justify-center gap-4">
            <span className="inline-flex items-center gap-3 rounded-full border border-black/20 px-5 py-2 text-[10px] font-mono uppercase tracking-[0.5em] text-[#010409]">
              <span className="h-[6px] w-[6px] rounded-full bg-[#ff4d4d]" aria-hidden />
              Error 404
            </span>
          </div>

          <h1 className="text-7xl font-light tracking-tight text-[#010409] md:text-8xl">404</h1>
          
          <p className="mt-6 text-[11px] font-mono uppercase tracking-[0.4em] text-black/60">
            Resource Not Found
          </p>

          <p className="mt-8 text-lg leading-relaxed text-[#050505]">
            The requested endpoint does not exist in our current system architecture. 
            This may indicate an outdated reference or misrouted query.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/20 bg-[#010409] px-8 py-4 text-[11px] font-mono uppercase tracking-[0.35em] text-white transition-colors hover:bg-[#4b6bff]"
            >
              Return to home
              <ArrowRight className="h-4 w-4" />
            </Link>
            
            <Link
              href="/research"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-black/20 px-8 py-4 text-[11px] font-mono uppercase tracking-[0.35em] text-[#010409] transition-colors hover:border-[#4b6bff] hover:text-[#4b6bff]"
            >
              Browse research
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 border-t border-black/10 pt-8">
            <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-black/40">
              Alpha Vector Technologies
            </p>
            <p className="mt-2 text-sm text-black/60">
              If you believe this is an error, contact{" "}
              <a
                href="mailto:gsangedha.desk@proton.me"
                className="text-[#4b6bff] hover:underline"
              >
                gsangedha.desk@proton.me
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
