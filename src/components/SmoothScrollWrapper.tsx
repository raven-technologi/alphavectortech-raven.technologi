"use client"

import { useEffect, useRef, ReactNode } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

/* ═══════════════════════════════════════════════════════════════════════════
   SMOOTH SCROLL WRAPPER
   
   Initializes Lenis smooth scrolling and syncs with GSAP ScrollTrigger.
   This creates the buttery, lerp-based scroll experience.
   
   Key settings:
   - duration: 1.2 (scroll animation duration)
   - easing: exponential decay for natural feel
   - wheelMultiplier: 1 (adjust for scroll speed)
═══════════════════════════════════════════════════════════════════════════ */

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface SmoothScrollWrapperProps {
  children: ReactNode
}

export function SmoothScrollWrapper({ children }: SmoothScrollWrapperProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential decay
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    })

    lenisRef.current = lenis

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update)

    // Add Lenis RAF to GSAP ticker
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    // Disable GSAP lag smoothing for crisp scroll-linked animations
    gsap.ticker.lagSmoothing(0)

    // Cleanup
    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return <>{children}</>
}
