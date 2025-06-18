import React from 'react';
import { AnimatePresence, motion } from 'framer-motion'
import { notifySuccess } from '@/utils/toast';
import { FaRegCopy } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoClose } from 'react-icons/io5';

const ReferModal = ({ 
    referModalOpen,
    setReferModalOpen
}: { 
    referModalOpen: boolean;
    setReferModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    const url = 'https://vonce.in';
    const message = 
    `I found this new app called Vonce that connects you with one person a day to have a real conversation.\n\n `+
    `It's not out yet, but you can sign up for early access →`;
    const fullMessage = `${message} ${url}`;

    const messageX = 
    `Vonce is this new app that matches you with one person a day to talk. No swiping, no chaos.\n\n`+
    `You should get in early →`;
    const fullMessagX = `${messageX} ${url}`

    const links = {
        whatsapp: `https://wa.me/?text=${encodeURIComponent(fullMessage)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(message)}`,
        twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(fullMessagX)}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&text=${fullMessage}&url=${encodeURIComponent(url)}&title=${encodeURIComponent(message)}`,
    };

    const handleCopy = async () => {
        await navigator.clipboard.writeText(url);
        notifySuccess({ 
            message: 'Link Copied To Clipboard!', 
        });
    };

    return (
        <AnimatePresence>
        {referModalOpen && (
            <motion.div 
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='fixed inset-0 w-full h-full bg-neutral-800/50 z-2000 flex items-center justify-center p-4' 
                onClick={() => setReferModalOpen(false)}
            >
                    <motion.div 
                        className='bg-secondary border-2 border-primary p-8 text-xl w-max h-max rounded-xl font-normal relative max-h-[100dvh] flex flex-col gap-10 font-ubuntu'
                        onClick={(e) => e.stopPropagation()}
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        exit={{ y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <IoClose className='absolute top-2 right-2 text-primary cursor-pointer' size={34} onClick={() => setReferModalOpen(false)} />
                        <div className='text-4xl font-light w-full text-center text-primary'>
                            Share
                        </div>
                        <div className='flex flex-col w-full items-center justify-between gap-8'>
                            <div className='footer-animated-underline cursor-pointer  border-neutral-600 w-full h-12 rounded-lg flex items-center p-4 text-xl font-radnika outline-0 transition-[outline,border] duration-[50ms,0ms] text-primary space-x-4' onClick={handleCopy}>
                                <FaRegCopy size={30} />
                                <span>Copy Link!</span>
                            </div>
                            <a 
                                className='footer-animated-underline cursor-pointer border-neutral-600 w-full h-12 rounded-lg flex items-center p-4 text-xl font-radnika outline-0 transition-[outline,border] duration-[50ms,0ms] text-primary space-x-4' 
                                href={links.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                    <FaWhatsapp size={30} />
                                    <span>Share On Whatsapp!</span>
                            </a>
                            <a 
                                className='footer-animated-underline cursor-pointer border-neutral-600 w-full h-12 rounded-lg flex items-center p-4 text-xl font-radnika outline-0 transition-[outline,border] duration-[50ms,0ms] text-primary space-x-4'
                                href={links.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                    <FaXTwitter size={30} />
                                    <span>Share On Twitter!</span>
                            </a>
                            <a 
                                className='footer-animated-underline cursor-pointer border-neutral-600 w-full h-12 rounded-lg flex items-center p-4 text-xl font-radnika outline-0 transition-[outline,border] duration-[50ms,0ms] text-primary space-x-4'
                                href={links.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedinIn size={30} />
                                <span>Share On LinkedIn!</span>
                            </a>
                        </div>
                    </motion.div>
            </motion.div>
        )}
        </AnimatePresence>
    );
}

export default ReferModal;
