"use client"

import type { ReactNode } from "react"

interface PageFrameProps {
  tag: string
  title?: string
  description?: string
  actions?: ReactNode
  children: ReactNode
  showHeading?: boolean
  showTagBarcode?: boolean
}

const barcodePattern = [18, 28, 12, 26, 16, 34, 10, 22]

export default function PageFrame({
  tag,
  title,
  description,
  actions,
  children,
  showHeading = true,
  showTagBarcode = false,
}: PageFrameProps) {
  return (
    <div className="min-h-screen bg-[#f7f9ff] text-[#050505]">
      <main className="relative overflow-hidden pt-32 pb-24 px-6 md:px-12 lg:px-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)",
            backgroundSize: "140px 140px",
          }}
          aria-hidden
        />

        <div className="relative mx-auto flex max-w-6xl flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="flex flex-col items-start gap-3">
                <div className="flex items-center gap-4">
                  <span className="inline-flex items-center gap-3 rounded-full border border-black/20 px-5 py-2 text-[10px] font-mono uppercase tracking-[0.5em] text-[#010409]">
                    <span className="h-[6px] w-[6px] rounded-full bg-[#4b6bff]" aria-hidden />
                    {tag}
                  </span>
                  {showTagBarcode ? (
                    <div className="hidden items-center gap-4 sm:flex" aria-hidden>
                      <span className="h-px w-10 bg-black/10" />
                      <div className="flex items-end gap-[3px]">
                        {barcodePattern.map((height, idx) => (
                          <span
                            key={`${height}-${idx}`}
                            className="w-[2px] rounded-full bg-[#010409]"
                            style={{ height: `${height}px`, opacity: idx % 2 === 0 ? 0.55 : 1 }}
                          />
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
                {!showHeading && description ? (
                  <p className="text-[11px] font-mono uppercase tracking-[0.5em] text-black/60">
                    {description}
                  </p>
                ) : null}
              </div>
              {actions ? (
                <div className="microtype text-[10px] tracking-[0.35em] text-[#4b6bff]">{actions}</div>
              ) : null}
            </div>
            {showHeading && title ? (
              <div className="max-w-4xl space-y-4">
                <h1 className="text-4xl md:text-6xl font-light tracking-tight text-[#010409] leading-[0.95]">
                  {title}
                </h1>
                {description ? (
                  <p className="text-lg text-[#050505] font-light leading-relaxed">
                    {description}
                  </p>
                ) : null}
              </div>
            ) : null}
          </div>

          <div className="flex flex-col gap-12">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
