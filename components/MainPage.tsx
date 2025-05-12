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
            markers: true             // Debug markers
        });
    }, []);

    useGSAP(() => {
        // Animate logo scaling + movement
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#logo1",        // Start animation as soon as logo scrolls
                start: "top top",        // When logo hits top of viewport
                end: "bottom top",       // Until logo scrolls out
                scrub: true,             // Sync with scroll
                markers: true            // Optional: for debugging
            },
        });

        tl.to("#logo1", {
            // scale: 0.3,            // Shrink down to 30% size
            x: '20px',            // Move left
            y: '-5px',
            width: '10vw',
            height: '10vh',             // Optional: move slightly down too
            ease: "power1.out",
        });

        tl.to("#logo1", {
            borderBottomLeftRadius: "9999px",
            borderBottomRightRadius: "9999px",
            ease: "power2.inOut"
        }, "<");
    }, []);

    return (
        <div
            id="main-pin"
            className="bg-primary w-full h-[100dvh] flex items-center justify-center z-10"
        >
            <img
                id="logo1"
                src="/vonce_logo_3.png"
                className="fixed left-0 top-0 w-full h-[100vh] object-cover z-20"
            />
            <h1 className="text-white text-4xl">Main Page</h1>
        </div>
    );
}
