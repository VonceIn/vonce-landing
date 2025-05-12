'use client';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const MainPage = () => {
    useGSAP(() => {
        ScrollTrigger.create({
            trigger: "#main-pin",     // Element to be pinned
            start: "top top",         // When the top of #main-pin hits top of viewport
            end: "+=150%",            // Stay pinned for 150% of viewport height
            pin: true,                // Actually pin the element
            pinSpacing: true,         // Leave space behind after pinning so page scroll continues
            markers: true,            // Debug markers
            id: 'main-pin'
        });
    }, []);

    useGSAP(() => {
        // Animate logo scaling + movement
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#logo1",       // Start animation as soon as logo scrolls
                start: "top top",        // When top of #logo 1hits top of viewport
                end: "bottom top",       // Until logo scrolls out
                scrub: true,             // Sync with scroll
                markers: true,           // Optional: for debugging
                id: 'logo1'
            },
        });

        // Fade + move text up (bottom to top)
        tl.to("#vonce-text", {
            opacity: 0,
            y: -100, // move text up
            ease: "power1.out",
        }, 0);

        // Fade + move logo down (top to bottom)
        tl.to("#vonce-logo", {
            opacity: 1,
            y: 0, // back to normal position
            ease: "power1.out",
        }, 0.3); // delay for reveal timing

        tl.to("#logo1", {
            transformOrigin: "top left",
            x: 20,
            y: -10,
            scale: 0.1,
            ease: "power1.out",
        });

        tl.to("#logo1", {
            borderBottomLeftRadius: "9999px",
            borderBottomRightRadius: "9999px",
            ease: "power2.inOut",
        }, "<");
    }, []);

    return (
        <div
            id="main-pin"
            className="bg-primary w-full h-[100dvh] flex items-center justify-center z-10"
        >
            <div id="logo1" className="fixed left-0 top-0 bg-secondary w-full h-full z-20 overflow-hidden flex items-center justify-center gap-20">
                <span 
                    className="text-8xl text-primary font-[800] font-telegraf leading-30 absolute text-center"
                    id="vonce-text"
                >
                    How would you like to connect with someone new everyday?
                </span>
                <img id="vonce-logo" src='/images/vonce_logo_no_bg.png' className="object-contain w-80 h-80 opacity-0 translate-y-[50px]" />
                <span id="vonce-logo" className="text-primary font-telegraf font-[800] text-[200px] opacity-0 translate-y-[50px]">Vonce</span>
            </div>
            <h1 className="text-black font-telegraf font-[800] text-4xl">Vonce</h1>
        </div>
    );
}
