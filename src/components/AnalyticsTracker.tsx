'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

function AnalyticsTrackerInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Track PDF downloads
    const trackPDFDownload = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.href && target.href.endsWith('.pdf')) {
        const pdfName = target.href.split('/').pop() || 'unknown'
        
        // Send event to Google Analytics
        if (typeof window.gtag !== 'undefined') {
          window.gtag('event', 'file_download', {
            file_name: pdfName,
            file_extension: 'pdf',
            link_url: target.href,
            page_path: pathname,
          })
        }

        console.log('PDF Download Tracked:', pdfName)
      }
    }

    // Add click listener to all links
    document.addEventListener('click', trackPDFDownload)

    return () => {
      document.removeEventListener('click', trackPDFDownload)
    }
  }, [pathname])

  useEffect(() => {
    // Track page views
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'page_view', {
        page_path: pathname + searchParams.toString(),
      })
    }
  }, [pathname, searchParams])

  return null
}

export function AnalyticsTracker() {
  return (
    <Suspense fallback={null}>
      <AnalyticsTrackerInner />
    </Suspense>
  )
}
