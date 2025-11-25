"use client"

import type { ReactNode } from "react"

interface PageFrameProps {
  tag: string
  title: string
  description?: string
  actions?: ReactNode
  children: ReactNode
}

export default function PageFrame({ tag, title, description, actions, children }: PageFrameProps) {
  return (
    <div className="min-h-screen bg-[#050505] text-[#fafafa]">
      <main className="relative overflow-hidden pt-32 pb-24 px-6 md:px-12 lg:px-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "140px 140px",
          }}
          aria-hidden
        />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-14">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-[#757575]">{tag}</span>
              {actions ? <div className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#00ffff]">{actions}</div> : null}
            </div>
            <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
              <h1 className="text-4xl md:text-6xl font-light tracking-tight text-white leading-[0.95]">
                {title}
              </h1>
              {description ? (
                <p className="text-lg text-[#9a9a9a] font-light leading-relaxed">
                  {description}
                </p>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col gap-12">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
