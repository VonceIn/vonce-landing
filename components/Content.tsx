import React from 'react';

export const Content = () => {
    return (
        <div className="flex items-center justify-center w-full h-full text-black font-telegraf flex-col">
            <span className="font-[800] text-6xl text-center w-260 max-lg:w-full max-lg:text-5xl max-sm:w-full max-sm:text-4xl">How would you like to connect with someone new everyday?</span>
            <span className='text-5xl font-[800] mt-10 flex gap-4 max-sm:gap-2 max-lg:text-4xl max-sm:text-3xl'>
                Talk 
                <span className='text-secondary text-5xl font-[800] max-lg:text-4xl max-sm:text-3xl'>Vonce
                </span>
            </span>
            <span className='text-center text-3xl font-[200] font-telegraf mt-6 max-sm:text-2xl'> 
                Chat with Someone new.<br />
                Everyday. No one's a strager<br />
                anymore.
            </span>
        </div>
    );
}
