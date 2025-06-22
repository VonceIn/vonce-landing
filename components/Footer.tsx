'use client';

import React, { useState } from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import ReferModal from './ReferModal';

const footerSections = [
    {
        title: 'Quick Links',
        links: [
            { linkTitle: 'Get Early Access', link: '#quote' },
            { linkTitle: 'Refer to a friend', link: '' },
            { linkTitle: 'About Vonce', link: '' }
        ]
    },
    {
        title: 'Legal',
        links: [
            { linkTitle: 'Terms & Conditions', link: 'https://www.termsfeed.com/live/0222630e-8efd-46af-a189-c1a9ebc3e6e2' },
            { linkTitle: 'Privacy Policy', link: 'https://www.privacypolicies.com/live/cf1985c4-bcd7-4430-9443-03cdbfb2f01d' },
        ]
    }
] as const;

const Footer = () => {
    const handleEmailClick = () => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            if (isMobile) {
            window.location.href = 'mailto:ask@vonce.in';
        } else {
            window.open('https://mail.google.com/mail/?view=cm&fs=1&to=ask@vonce.in', '_blank');
        }
    };

    return (
        <div 
            className='flex-1 relative bg-secondary rounded-t-[90px] lg:h-56 min-h-50 max-h-max flex max-lg:flex-col justify-between items-center px-4 overflow-hidden pt-4'
            style={{
                boxShadow: '0px 2px 54.1px 2px  rgba(255,87,87,0.5)',
            }}
        >
            <div className='flex flex-col w-80 h-full items-end max-xl:items-center justify-center gap-2 max-sm:scale-80'>
                <div className='flex justify-end max-xl:justify-center gap-4 w-full h-max'>
                    <img id="vonce-logo" src='/images/vonce_logo_no_bg.png' alt="vonce-logo" className="object-contain w-16 h-16 opacity-0 translate-y-[50px]" />
                    <span className='text-primary font-telegraf font-[800] text-[50px]'>Vonce</span>
                </div>
                <span className='w-max h-max font-ubuntu font-[700] text-primary text-[16px] max-sm:text-[20px]'>
                    Beta Version – Launching Soon
                </span>
            </div>
            <div className='w-190 max-xl:w-full max-xl:justify-center h-full flex max-md:flex-wrap gap-4 max-sm:gap-0'>
                {footerSections.map(section => 
                    <FooterSection section={section} key={section.title} />
                )}
                <div className='w-[209px] flex flex-col p-6 gap-4 items-center justify-start max-xl:w-max max-sm:w-full'>
                    <span className='text-left w-full font-ubuntu font-[500] text-[20px] text-primary'>Connect</span>
                    <div className='flex gap-2 max-sm:w-full w-full'>
                        <img src='/images/mail_icon.png' className='w-8' />
                        <span  onClick={handleEmailClick}
                            className='font-ubuntu font-[400] text-[16px] text-primary cursor-pointer relative footer-animated-underline'
                        >
                            ask@vonce.in
                        </span>
                    </div>
                    <div className='flex gap-4 w-full'> 
                        <a href="https://www.linkedin.com/company/vonceapp" target='_blank'>
                            <FaLinkedin size={42} className='text-primary cursor-pointer' />
                        </a>
                        <a href="https://www.instagram.com/vonce.in?igsh=dHJyc2Q1b2Rmc3hj" target='_blank'>
                            <FaInstagram size={42} className='text-primary cursor-pointer' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

const FooterSection = ({ section }: { section: typeof footerSections[number] }) => {
     const [referModalOpen, setReferModalOpen] = useState(false);

    return (
        <div className='w-[209px] max-xl:w-max max-sm:w-1/2 flex flex-col p-6 gap-4 items-center justify-start'>
            <span className='text-left w-full font-ubuntu font-[500] text-[20px] text-primary'>{section.title}</span>
            {section.links.map(link => {
                if (link.linkTitle === 'Refer to a friend') {
                    return (
                        <span key={link.linkTitle} onClick={() => setReferModalOpen(true)} className='text-left w-full font-ubuntu font-[400] text-[16px] text-primary cursor-pointer'>
                            <span className='relative footer-animated-underline'>
                                {link.linkTitle}
                            </span>
                        </span>
                    );
                } else {
                    return (
                        <a key={link.linkTitle} {...(link.link ? { href: link.link } : {})} target='_blank' className='text-left w-full font-ubuntu font-[400] text-[16px] text-primary cursor-pointer'>
                            <span className='relative footer-animated-underline'>
                                {link.linkTitle}
                            </span>
                        </a>
                    );
                }
            })}

            <ReferModal referModalOpen={referModalOpen} setReferModalOpen={setReferModalOpen} />
        </div>
    );
}

export default Footer;