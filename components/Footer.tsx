'use client';

import React from 'react';

export const Footer = () => {
    return (
        <footer className='bg-neutral-800 w-full h-max'>
            <div className='w-full h-10 bg-primary rounded-b-4xl' />
            <div className='h-50 flex flex-col px-10 justify-center pl-10 lg:pl-15 gap-4'>
                <span className="text-2xl font-bold text-secondary">Vonce</span>
                <ul className="flex flex-wrap gap-6 text-sm text-gray-400">
                    <li><a onClick={(e) => e.preventDefault()} href="#about">About</a></li>
                    <li><a onClick={(e) => e.preventDefault()} href="#privacy">Privacy</a></li>
                    <li><a onClick={(e) => e.preventDefault()} href="#terms">Terms</a></li>
                    <li><a onClick={(e) => e.preventDefault()} href="#contact">Contact</a></li>
                </ul>
                <span className="text-xs text-gray-500">&copy; {new Date().getFullYear()} Vonce. All rights reserved.</span>
            </div>
        </footer>
    );
}
