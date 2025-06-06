'use client';

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function LenisProvider({ children }: { children: React.ReactNode }) {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        })
    
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
    
        requestAnimationFrame(raf)
    
        // Connect Lenis to ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update)
    
        ScrollTrigger.scrollerProxy(document.body, {
            scrollTop(value) {
            return value !== undefined ? lenis.scrollTo(value) : window.scrollY
            },
            getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            }
            },
            pinType: document.body.style.transform ? 'transform' : 'fixed'
        })

        ScrollTrigger.refresh()

        return () => {
            lenis.destroy()
        }
    }, [])
    
    return <>{children}</>
}