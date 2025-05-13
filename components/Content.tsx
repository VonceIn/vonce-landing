import React from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type StepsType = {
    name: string,
    url: string,
    step: React.ReactNode
}

export const Content = () => {

    const steps: StepsType[] = [
        {
            name: 'Step 1',
            url: '/images/step1.png',
            step: (
                <>
                    Get paired with<br />
                    someone new daily
                </>
            )
        },
        {
            name: 'Step 2',
            url: '/images/step2.png',
            step: (
                <>
                    Have a distraction-free<br />
                    conversation
                </>
            )
        },
        {
            name: 'Step 3',
            url: '/images/step3.png',
            step: (
                <>
                    Experience a<br />
                    genuine moment
                </>
            )
        }
    ]

    return (
        <div id="text" className="will-change-transform opacity-0 flex items-center justify-center w-full h-full text-black font-telegraf flex-col">
            <span id='quote' className="font-radnika font-[800] text-6xl text-center w-260 max-lg:w-full max-lg:text-5xl max-sm:w-full max-sm:text-4xl max-sm:p-12 max-sm:py-2">How would you like to connect with someone new everyday?</span>
            <span className='text-5xl font-[800] mt-10 flex gap-4 max-sm:gap-2 max-lg:text-4xl max-sm:text-3xl'>
                Talk 
                <span className='text-transparent bg-clip-text bg-gradient-to-br from-55% from-secondary to-[#faa6a6] text-5xl font-[800] max-lg:text-4xl max-sm:text-3xl'>Vonce.
                </span>
            </span>
            <span id='quote' className='text-center text-3xl font-[200] font-ubuntu mt-6 max-sm:text-2xl'> 
                Chat with someone new.<br />
                Everyday. No one's a stranger<br />
                anymore.
            </span>
            <div className='flex max-sm:flex-col w-max h-max gap-20 max-sm:gap-14 mt-14 font-telegraf'>
                {steps.map(step => (
                        <div key={step.url} id='steps' className='flex flex-col items-center justify-center'>
                            <img src={step.url} className='w-20'></img>
                            <span className='font-radnika text-center font-bold'>{step.name}</span>
                            <span className='font-sans text-center'>{step.step}</span>
                        </div>
                    )
                )}
            </div>
            <div id='email' className='flex flex-col gap-2 items-center justify-center mt-20 font-radnika'>
                <span className='text-4xl font-semibold max-sm:text-3xl'>
                    Get Early Access
                </span>
                <div className='flex h-max gap-2'>
                    <input type='email' placeholder='Email address' className='py-3 px-4 w-55 max-sm:w-50 border rounded-lg text-black placeholder:text-black text-[16px] max-sm:text-[14px] outline-0 focus:outline-2 outline-offset-2 outline-secondary' />
                    <button className='bg-red-500 w-max px-2 h-full rounded-lg text-primary cursor-pointer active:bg-red-800 transition-[background] text-[16px] max-sm:text-[14px]'>
                        Get Early Access
                    </button>
                </div>
            </div>
        </div>
    );
}
