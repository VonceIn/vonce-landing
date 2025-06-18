'use client';

import React, { useState } from 'react';
import PillShapedButton from './PillShapedButton';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import { useGSAP } from '@gsap/react';
import { useTransitionRouter } from 'next-view-transitions';
import { AnimatePresence, motion } from 'framer-motion';
import ReferModal from './ReferModal';

gsap.registerPlugin(ScrollTrigger, SplitText);

const steps = [{
    imageUrl: '/images/vonce_step_1.png',
    title: (
        <>
            Get matched with
            <br />
            someone new, daily.
        </>
    )
}, {
    imageUrl: '/images/vonce_step_2.png',
    title: (
        <>
            Talk. Share. Listen. 
            <br />
            No distractions.
        </>
    )
}, {
    imageUrl: '/images/vonce_step_3.png',
    title: (
        <>
            Stay connected. Tomorrow 
            <br />
            meet someone new.
        </>
    )
}] as const;

export const Steps = () => {
    const router = useTransitionRouter();
    const [referModalOpen, setReferModalOpen] = useState(false);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add('(max-width: 1280px)', () => {
            document.querySelectorAll('.step-item').forEach(item => {
                gsap.fromTo(item, {
                    opacity: 0
                }, {
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.inOut',
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                        // markers: {
                        //     startColor: "blue",
                        //     endColor: "orange",
                        //     fontSize: "14px",
                        //     indent: 20,
                        //     fontWeight: "bold",
                        // }
                    }
                });
            })
        });

        mm.add('(min-width: 1280px)', () => {
            gsap.fromTo('.steps', {
                opacity: 0
            }, {
                opacity: 1,
                duration: 1,
                ease: 'power2.inOut',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '.steps',
                    start: 'top 90%',
                    toggleActions: 'play none none reverse',
                    // markers: {
                    //     startColor: "blue",
                    //     endColor: "orange",
                    //     fontSize: "14px",
                    //     indent: 20,
                    //     fontWeight: "bold",
                    // }
                }
            });
        });

        const split = new SplitText(".cta", { type: "words", wordsClass: "cta-word" });

        gsap.from(split.words, {
            scrollTrigger: {
                trigger: '.cta',
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 30,
            filter: "blur(6px)",
            duration: 0.2,
            stagger: 0.07,
            ease: "power2.out",
            clearProps: "filter"
        });

        gsap.from('.cta-buttons', {
            scrollTrigger: {
                trigger: '.cta',
                start: 'top 70%',
                toggleActions: 'play none none reverse',
            },
            opacity: 0,
            y: 30,
            filter: "blur(6px)",
            duration: 0.3,
            stagger: 0.07,
            ease: "power2.out",
            clearProps: "filter"
        });
    });

    return (
        <div className='w-full min-h-[80vh] max-h-max flex flex-col' id='page-2'>
            <div className='w-[83%] self-center max-xl:h-300 max-xl:mt-10 xl:h-90 flex max-xl:flex-col justify-around items-end max-xl:items-center' id='steps-container'>
                {steps.map(step => (
                    <Step step={step} key={step.imageUrl} />
                ))}
            </div>

            <div className='flex-1 min-h-max flex flex-col'>
                <div className='flex items-center justify-center flex-col h-max p-10 mt-4 mb-4 w-full z-20'>
                    <span className='text-center font-ubuntu font-[700] text-[64px] max-md:text-[40px] max-sm:text-[30px] text-shadow-lg/20 w-full max-sm:w-screen cta'>
                        Let’s Build This, Together
                    </span>

                    <span className='font-ubuntu font-[300] text-[24px] max-md:text-[20px] text-center cta'>
                        Invite a friend. Share your thoughts. Let’s shape the future of Vonce.
                    </span>

                    <div className='w-max flex flex-col xl:flex-row gap-30 max-sm:gap-10 max-md:gap-20 max-lg:gap-24 mt-10 cta-buttons'>
                        <PillShapedButton 
                            text='Refer to a friend' 
                            className='px-6 py-3 w-[300px] h-[100px] border' 
                            textClassName='font-ubuntu font-[700] text-[30px] max-sm:text-[28px]' 
                            style={{
                                boxShadow: '0px 2px 10px 3px  rgba(255,87,87,0.5)'
                            }}
                            onClick={() => setReferModalOpen(true)}
                        />

                        <PillShapedButton text='Get in Touch' 
                            className='px-6 py-3 w-[300px] h-[100px] border' 
                            textClassName='font-ubuntu font-[700] text-[30px] max-sm:text-[28px]' 
                            style={{
                                boxShadow: '0px 2px 10px 3px rgba(255,87,87,0.5)'
                            }}
                            onClick={() => router.push('/getintouch', {
                                onTransitionReady: pageAnimation
                            })}
                        />
                    </div>
                </div>
            </div>

            <ReferModal referModalOpen={referModalOpen} setReferModalOpen={setReferModalOpen} />
        </div>
    );
}


const Step = ({ step }: { step: typeof steps[number]} ) => {
    return (
        <div className='w-max h-max relative step-item steps'>
            <img src={step.imageUrl} className='absolute w-[212px] right-1/2 left-1/2 -translate-1/2 -translate-y-[140px] rounded-[10px] border' />
            <div className='bg-primary w-[318px] h-[164px] rounded-[50px] flex items-end justify-center pb-4 [box-shadow:0px_0px_18px_5px_rgba(149,126,91,0.9)]'>
                <span className='max-h-20 text-center font-ubuntu font-[500] text-[24px] italic'>
                    {step.title}
                </span>
            </div>
        </div>
    );
}

const pageAnimation = () => {
    document.documentElement.animate([
        {
            opacity: 1,
            scale: 1,
            transform: 'translateY(0)'
        }, {
            opacity: 0.5,
            scale: 0.9,
            transform: 'translateY(-100px)'
        }
    ], {
        duration: 1000,
        easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
        fill: 'forwards',
        pseudoElement: '::view-transition-old(root)'
    });

    document.documentElement.animate([
        {
            transform: 'translateY(100%)'
        }, {
            transform: 'translateY(0)'
        }
    ], {
        duration: 1000,
        easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
        fill: 'forwards',
        pseudoElement: '::view-transition-new(root)'
    });
}
