'use client';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { Content } from "./Content";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const MainPage = () => {
    let hasAnimated = false;

    useEffect(() => {
        const refresh = () => ScrollTrigger.refresh(true);
        window.addEventListener("resize", refresh);
        window.addEventListener("orientationchange", refresh);
        return () => {
          window.removeEventListener("resize", refresh);
          window.removeEventListener("orientationchange", refresh);
        };
    }, []);

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
            onStart: () => {
                if (hasAnimated) return; // prevent re-running
                hasAnimated = true;

                gsap.to("#text", {
                    opacity: 1,
                    duration: 1.2,
                    ease: "power2.out",
                }); // start at same time as previous starts

                const split = new SplitText("#quote", { type: "words", wordsClass: "quote-word" });

                gsap.from(split.words, {
                    opacity: 0,
                    y: 30,
                    filter: "blur(6px)",
                    duration: 0.3,
                    stagger: 0.07,
                    ease: "power2.out",
                    clearProps: "filter"
                }); // happens right after #text fades in

                gsap.from("#steps", {
                    opacity: 0,
                    y: 30,
                    filter: "blur(6px)",
                    duration: 0.5,
                    stagger: 0.2,
                    ease: "power2.out",
                    clearProps: "filter"
                });

                gsap.from("#email", {
                    opacity: 0,
                    y: 30,
                    filter: "blur(6px)",
                    duration: 1.2,
                    ease: "power2.out",
                    clearProps: "filter"
                });
            }
        }, ">0.3");

        tl.to("#logo1", {
            borderBottomLeftRadius: "9999px",
            borderBottomRightRadius: "9999px",
            ease: "power2.inOut",
        }, "<");
    }, []);

    return (
        <div
            id="main-pin"
            className="will-change-transform bg-primary w-full min-h-[100vh] h-max flex items-center justify-center z-10 relative"
        >
            <div id="logo1" className="will-change-transform absolute left-0 top-0 bg-secondary w-full h-[100vh] z-20 overflow-hidden flex items-center justify-center gap-20 max-lg:gap-10 max-sm:flex-col">
                <span
                    className="text-8xl text-primary font-[800] font-telegraf leading-30 absolute text-center max-lg:text-7xl max-sm:text-5xl max-sm:leading-16 max-lg:leading-20"
                    id="vonce-text"
                >
                    How would you like to connect with someone new everyday?
                </span>
                <img id="vonce-logo" src='/images/vonce_logo_no_bg.png' className="object-contain w-80 h-80 opacity-0 translate-y-[50px] max-lg:w-40 max-sm:w-35" />
                <span id="vonce-logo" className="text-primary font-telegraf font-[800] text-[200px] opacity-0 translate-y-[50px] max-lg:text-9xl max-sm:text-8xl">Vonce</span>
            </div>
            <Content />
            <div className="flex flex-col max-sm:flex-row text-secondary absolute bottom-10 right-10 max-sm:right-2 max-sm:-bottom-9 gap-6">
                <FaInstagram className="w-12 h-12 max-sm:w-8 max-sm:h-8 cursor-pointer" />
                <FaWhatsapp className="w-12 h-12 max-sm:w-8 max-sm:h-8 cursor-pointer" />
            </div>
        </div>
    );
}
