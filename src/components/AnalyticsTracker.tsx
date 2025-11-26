'use client'

import { useEffect, Suspense, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}

function AnalyticsTrackerInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const pageLoadTime = useRef<number>(Date.now())
  const scrollDepthTracked = useRef<Set<number>>(new Set())
  const lastResearchViewed = useRef<string>('')

  useEffect(() => {
    // Reset page load time when pathname changes
    pageLoadTime.current = Date.now()
    scrollDepthTracked.current = new Set()

    // Store last research paper viewed
    if (pathname.includes('/research/')) {
      const paper = pathname.split('/research/')[1]?.replace('/', '')
      if (paper) {
        lastResearchViewed.current = paper
      }
    }
  }, [pathname])

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
            last_research_viewed: lastResearchViewed.current,
          })
        }

        console.log('PDF Download Tracked:', pdfName)
      }
    }

    // Track external link clicks (email, citations)
    const trackExternalClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.href) {
        // Email clicks
        if (target.href.startsWith('mailto:')) {
          const email = target.href.replace('mailto:', '')
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'email_click', {
              email_address: email,
              page_path: pathname,
              last_research_viewed: lastResearchViewed.current,
            })
          }
          console.log('Email Click Tracked:', email)
        }
        // External links (not alphavectortech.com)
        else if (target.href.startsWith('http') && !target.href.includes('alphavectortech.com')) {
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'external_link_click', {
              link_url: target.href,
              link_text: target.textContent || 'unknown',
              page_path: pathname,
            })
          }
          console.log('External Link Tracked:', target.href)
        }
      }
    }

    // Track scroll depth
    const trackScrollDepth = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const scrollPercent = Math.round((scrollTop + windowHeight) / documentHeight * 100)

      // Track at 25%, 50%, 75%, 100%
      const milestones = [25, 50, 75, 100]
      milestones.forEach(milestone => {
        if (scrollPercent >= milestone && !scrollDepthTracked.current.has(milestone)) {
          scrollDepthTracked.current.add(milestone)
          if (typeof window.gtag !== 'undefined') {
            window.gtag('event', 'scroll_depth', {
              percent_scrolled: milestone,
              page_path: pathname,
            })
          }
          console.log(`Scroll Depth Tracked: ${milestone}%`)
        }
      })
    }

    // Add event listeners
    document.addEventListener('click', trackPDFDownload)
    document.addEventListener('click', trackExternalClick)
    window.addEventListener('scroll', trackScrollDepth, { passive: true })

    return () => {
      document.removeEventListener('click', trackPDFDownload)
      document.removeEventListener('click', trackExternalClick)
      window.removeEventListener('scroll', trackScrollDepth)
    }
  }, [pathname])

  useEffect(() => {
    // Track page views with UTM parameters
    const utmSource = searchParams.get('utm_source')
    const utmMedium = searchParams.get('utm_medium')
    const utmCampaign = searchParams.get('utm_campaign')
    const utmContent = searchParams.get('utm_content')

    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'page_view', {
        page_path: pathname + searchParams.toString(),
        utm_source: utmSource || 'direct',
        utm_medium: utmMedium || 'none',
        utm_campaign: utmCampaign || 'none',
        utm_content: utmContent || 'none',
      })

      // Track email campaign visits specifically
      if (utmSource === 'email' && utmCampaign) {
        window.gtag('event', 'campaign_visit', {
          campaign_source: 'email',
          campaign_name: utmCampaign,
          recipient_id: utmContent || 'unknown',
          page_path: pathname,
        })
        console.log('Email Campaign Visit Tracked:', utmCampaign)
      }
    }
  }, [pathname, searchParams])

  useEffect(() => {
    // Track time on page when leaving
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - pageLoadTime.current) / 1000)
      
      // Only track if spent more than 10 seconds
      if (timeSpent > 10 && typeof window.gtag !== 'undefined') {
        window.gtag('event', 'engaged_time', {
          page_path: pathname,
          time_seconds: timeSpent,
          is_research_paper: pathname.includes('/research/'),
          paper_name: pathname.includes('/research/') ? pathname.split('/research/')[1]?.replace('/', '') : 'none',
        })
        console.log(`Time on Page Tracked: ${timeSpent}s on ${pathname}`)
      }
    }

    // Track on page unload
    window.addEventListener('beforeunload', trackTimeOnPage)

    return () => {
      window.removeEventListener('beforeunload', trackTimeOnPage)
      // Also track when component unmounts (navigation)
      trackTimeOnPage()
    }
  }, [pathname])

  return null
}

export function AnalyticsTracker() {
  return (
    <Suspense fallback={null}>
      <AnalyticsTrackerInner />
    </Suspense>
  )
}
