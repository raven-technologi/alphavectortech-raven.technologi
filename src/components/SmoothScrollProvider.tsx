"use client"

import { useEffect, useRef, createContext, useContext, ReactNode } from "react"
import Lenis from "lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

/* ═══════════════════════════════════════════════════════════════════════════
   SMOOTH SCROLL PROVIDER
   
   Stack: Lenis + GSAP ScrollTrigger
   
   This creates the "Mantis-style" scroll experience:
   - Lerp-based smooth momentum scrolling (not native)
   - Synchronized with GSAP ScrollTrigger for pinning/scrub animations
   - Proper cleanup on unmount
   
   Usage: Wrap your layout in <SmoothScrollProvider>
═══════════════════════════════════════════════════════════════════════════ */

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Context for accessing Lenis instance
interface SmoothScrollContextType {
  lenis: Lenis | null
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({ lenis: null })

export const useSmoothScroll = () => useContext(SmoothScrollContext)

interface SmoothScrollProviderProps {
  children: ReactNode
  options?: {
    duration?: number
    easing?: (t: number) => number
    orientation?: "vertical" | "horizontal"
    smoothWheel?: boolean
    wheelMultiplier?: number
  }
}

export function SmoothScrollProvider({ 
  children, 
  options = {} 
}: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Initialize Lenis with configuration
    const lenis = new Lenis({
      duration: options.duration ?? 1.2,
      easing: options.easing ?? ((t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))),
      orientation: options.orientation ?? "vertical",
      smoothWheel: options.smoothWheel ?? true,
      wheelMultiplier: options.wheelMultiplier ?? 1,
    })

    lenisRef.current = lenis

    // Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update)

    // Add Lenis raf to GSAP ticker for smooth animation sync
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    // Disable GSAP lag smoothing for crisp animations
    gsap.ticker.lagSmoothing(0)

    // Cleanup
    return () => {
      lenis.destroy()
      gsap.ticker.remove(lenis.raf)
    }
  }, [options])

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisRef.current }}>
      {children}
    </SmoothScrollContext.Provider>
  )
}

/* ═══════════════════════════════════════════════════════════════════════════
   SCROLL TRIGGER HOOKS
   Custom hooks for common scroll animation patterns
═══════════════════════════════════════════════════════════════════════════ */

// Hook for scroll-triggered fade in animations
export function useScrollFadeIn(
  ref: React.RefObject<HTMLElement>,
  options?: {
    start?: string
    end?: string
    scrub?: boolean | number
  }
) {
  useEffect(() => {
    if (!ref.current) return

    const element = ref.current

    gsap.fromTo(
      element,
      { 
        opacity: 0, 
        y: 50,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: options?.start ?? "top 85%",
          end: options?.end ?? "top 50%",
          scrub: options?.scrub ?? false,
          toggleActions: "play none none reverse",
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [ref, options])
}

// Hook for pinned section animations
export function useScrollPin(
  containerRef: React.RefObject<HTMLElement>,
  options?: {
    end?: string | (() => string)
    pinSpacing?: boolean
    anticipatePin?: number
  }
) {
  useEffect(() => {
    if (!containerRef.current) return

    const element = containerRef.current

    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: options?.end ?? "+=100%",
      pin: true,
      pinSpacing: options?.pinSpacing ?? true,
      anticipatePin: options?.anticipatePin ?? 1,
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [containerRef, options])
}

// Hook for horizontal scroll within vertical scroll
export function useHorizontalScroll(
  containerRef: React.RefObject<HTMLElement>,
  itemsSelector: string,
  options?: {
    ease?: string
    scrub?: number
  }
) {
  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const items = gsap.utils.toArray(itemsSelector) as HTMLElement[]
    
    if (items.length === 0) return

    gsap.to(items, {
      xPercent: -100 * (items.length - 1),
      ease: options?.ease ?? "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: options?.scrub ?? 1,
        snap: 1 / (items.length - 1),
        end: () => "+=" + container.offsetWidth,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill()
        }
      })
    }
  }, [containerRef, itemsSelector, options])
}

// Hook for parallax effect
export function useParallax(
  ref: React.RefObject<HTMLElement>,
  speed: number = 0.5, // 0 = no movement, 1 = full scroll speed
  options?: {
    start?: string
    end?: string
  }
) {
  useEffect(() => {
    if (!ref.current) return

    const element = ref.current

    gsap.to(element, {
      yPercent: -100 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        start: options?.start ?? "top bottom",
        end: options?.end ?? "bottom top",
        scrub: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [ref, speed, options])
}

// Hook for text reveal (word by word or character by character)
export function useTextReveal(
  ref: React.RefObject<HTMLElement>,
  options?: {
    type?: "words" | "chars" | "lines"
    stagger?: number
    start?: string
    scrub?: boolean | number
  }
) {
  useEffect(() => {
    if (!ref.current) return

    const element = ref.current
    const text = element.textContent || ""
    
    // Split text based on type
    let splitElements: string[] = []
    if (options?.type === "chars") {
      splitElements = text.split("")
    } else if (options?.type === "lines") {
      splitElements = text.split("\n")
    } else {
      splitElements = text.split(" ")
    }

    // Create span wrapper for each element
    element.innerHTML = splitElements
      .map((el, i) => `<span class="split-element" style="display: inline-block; opacity: 0;">${el}${options?.type !== "chars" ? " " : ""}</span>`)
      .join("")

    const spans = element.querySelectorAll(".split-element")

    gsap.to(spans, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.5,
      stagger: options?.stagger ?? 0.02,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: options?.start ?? "top 80%",
        scrub: options?.scrub ?? false,
        toggleActions: "play none none reverse",
      },
    })

    // Set initial state
    gsap.set(spans, { 
      opacity: 0, 
      y: 20,
      filter: "blur(4px)"
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === element) {
          trigger.kill()
        }
      })
    }
  }, [ref, options])
}
