'use client';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { Content } from "./Content";
import { IoArrowDownCircle } from "react-icons/io5";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

// ScrollTrigger.normalizeScroll(true);

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
    const arrowFade = gsap.to("#scroll-arrow", {
            opacity: 0,
            duration: 0.5,
            ease: "power1.out",
            scrollTrigger: {
            trigger: "#main-pin",
            start: "top+=20 top", // start fade just after 20px scroll
            end: "top+=100 top",  // fully faded by 100px scroll
            scrub: false,
            markers: false,
        }
    });

        return () => {
            arrowFade.kill();
        };
    }, []);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: "#main-pin",     // Element to be pinned
            start: "top top",         // When the top of #main-pin hits top of viewport
            end: "+=150%",            // Stay pinned for 150% of viewport height
            pin: true,                // Actually pin the element
            pinSpacing: true,         // Leave space behind after pinning so page scroll continues
            markers: false,            // Debug markers
            id: 'main-pin',
        });

        ScrollTrigger.refresh(true);
    }, []);

    useGSAP(() => {
        // Animate logo scaling + movement
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#logo1",       // Start animation as soon as logo scrolls
                start: "top top",        // When top of #logo 1hits top of viewport
                end: "bottom top",       // Until logo scrolls out
                scrub: true,             // Sync with scroll
                markers: false,           // Optional: for debugging
                id: 'logo1',
                onLeave: self => {
                    self.disable(); // disables trigger so it won't reverse
                    tl.progress(1); // ensures timeline stays at the end
                }
            }
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
        }, ">0.3");

        tl.to("#logo1", {
            borderBottomLeftRadius: "9999px",
            borderBottomRightRadius: "9999px",
            ease: "power2.inOut",
        }, "<");

        tl.to("#text", {
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
        }, '<+=0.2');

        const split = new SplitText("#quote", { type: "words", wordsClass: "quote-word" });

        tl.from(split.words, {
            opacity: 0,
            y: 30,
            filter: "blur(6px)",
            duration: 0.3,
            stagger: 0.07,
            ease: "power2.out",
            clearProps: "filter"
        }, '<'); // same time as prevous animation

        tl.from("#email", {
            opacity: 0,
            y: 30,
            filter: "blur(6px)",
            duration: 1.2,
            ease: "power2.out",
            clearProps: "filter"
        }, '<');

        tl.from("#vonce_pills", {
            opacity: 0,
            y: 30,
            filter: "blur(6px)",
            duration: 1.2,
            ease: "power2.out",
            clearProps: "filter"
        }, '<');

        tl.from("#vonce_messages", {
            opacity: 0,
            x: 50,
            filter: "blur(6px)",
            duration: 1.2,
            ease: "power2.out",
            clearProps: "filter"
        }, '<+=0.3');

        ScrollTrigger.refresh();
    }, []);

    return (
        <div
            id="main-pin"
            className="will-change-transform bg-primary w-full min-h-[100vh] h-max items-center justify-center z-10"
            // style={{
            //     backgroundImage: `url('/images/vonce_background.png')`,
            //     backgroundRepeat: 'repeat',
            //     backgroundSize: 'auto',
            //     backgroundBlendMode: 'darken',
            // }}
        >
            <div
                className="absolute inset-0 bg-[url('/images/vonce_background.png')] bg-repeat opacity-22 pointer-events-none z-0"
            />

            <div id="logo1" className="will-change-transform absolute left-0 top-0 bg-secondary w-full h-[100vh] z-20 overflow-hidden flex items-center justify-center gap-20 max-lg:gap-10 max-sm:flex-col">
                <span
                    className="text-8xl text-primary font-[700] font-ubuntu leading-30 absolute text-center max-lg:text-7xl max-sm:text-[42px] max-sm:leading-16 max-lg:leading-20 italic"
                    id="vonce-text"
                >
                    One person. <br />
                    One conversation. <br />
                    Everyday.
                </span>

                <div
                id="scroll-arrow"
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-300 text-white text-xl flex flex-col items-center opacity-100 transition-opacity duration-500"
                >
                    <span className="animate-bounce"><IoArrowDownCircle /></span>
                    <span className="text-sm mt-1 font-ubuntu">Scroll down</span>
                </div>

                <img id="vonce-logo" src='/images/vonce_logo_no_bg.png' alt="vonce-logo" className="object-contain w-80 h-80 opacity-0 translate-y-[50px] max-lg:w-40 max-sm:w-35" />

                <span id="vonce-logo" className="text-primary font-telegraf font-[800] text-[280px] max-xl:text-[200px] opacity-0 translate-y-[50px] max-lg:text-9xl max-sm:text-8xl">
                    Vonce
                </span>
            </div>

            <Content />
        </div>
    );
}
