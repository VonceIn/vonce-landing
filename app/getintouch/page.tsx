'use client';

import PillShapedButton from '@/components/PillShapedButton';
import React from 'react';
import { notifyError, notifySuccess } from '@/utils/toast';
import { isValidEmail } from '@/utils/validate';
import { ToastContainer } from 'react-toastify';
import { createClient } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';
import { IoHome } from "react-icons/io5";

const GetInTouch = () => {
    const router = useRouter();

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget as HTMLFormElement);

        const name = formData.get('name')?.toString().trim();
        const email = formData.get('email')?.toString().trim();
        const message = formData.get('message')?.toString().trim();

        if (!name || !email || !message) {
            const missing = [];

            if (!name) missing.push('Name');
            if (!email) missing.push('Email');
            if (!message) missing.push('Message');

            notifyError({message: `The following fields are required: ${missing.join(', ')}`});
            return;
        }

        if (!isValidEmail(email)) {
            notifyError({message: 'Invalid email format!'});
            return;
        }

        const supabase = createClient();

        const { error: uploadError } = await supabase
            .from('get_in_touch')
            .insert([{
                name,
                email,
                message
            }]);

        if (uploadError) {
            notifyError({message: 'An error occured, Please try again'});
            return;
        }

        notifySuccess({
            message: "Thankyou for your interest!, We will get back to you!",
            onClose: () => router.push('/')
        });
    }

    return (
        <div className='w-dvw h-dvh bg-primary flex items-center justify-center p-4 max-sm:p-10 max-sm:pt-13'>
            <div className='absolute left-1 lg:left-4 top-1 lg:top-4 bg-primary p-3 border rounded-full z-40 cursor-pointer active:scale-95 transition-all' title='Home' onClick={() => router.push('/')}>
                <IoHome className='text-secondary size-7' />
            </div>
            <div
                className="absolute inset-0 bg-[url('/images/vonce_background.png')] bg-repeat opacity-22 pointer-events-none z-0"
                style={{ backgroundPosition: '0px -52px' }}
            />
            <form 
                className='w-[564px] max-lg:w-[500px] h-[868px] max-lg:h-full border rounded-[58px] bg-primary z-20 flex flex-col items-center justify-around p-4'
                style={{
                    boxShadow: '0px 2px 40.3px 5px rgba(0,0,0,0.5)',
                }}
                onSubmit={handleSubmit}
            >
                <span className='font-ubuntu font-[500] text-[48px] text-center max-lg:text-[32px]'>
                    Let’s Build This, <br />Together
                </span>
                <div className='w-full flex h-max justify-center'>
                    <div className='w-max flex flex-col'>
                        <label className='font-ubuntu font-[300] text-[24px] max-xl:text-[20px]'>Name</label>
                        <input type="text" name='name' className='w-[495px] h-[72px] max-lg:w-80 max-lg:h-[50px] bg-white rounded-[17px] border placeholder:text-neutral-400 max-sm:text-[14px] outline-0 focus:outline-2 outline-offset-2 outline-secondary transition-[outline] duration-40 px-4 text-[20px] font-ubuntu' placeholder="Enter Your Name" />
                    </div>
                </div>
                <div className='w-full flex h-max justify-center'>
                    <div className='w-max flex flex-col'>
                        <label className='font-ubuntu font-[300] text-[24px] max-xl:text-[20px]'>Email</label>
                        <input type="email" name='email' className='w-[495px] h-[72px] max-lg:w-80 max-lg:h-[50px] bg-white rounded-[17px] border placeholder:text-neutral-400 max-sm:text-[14px] outline-0 focus:outline-2 outline-offset-2 outline-secondary transition-[outline] duration-40 px-4 text-[20px] font-ubuntu' placeholder="Enter Your Email" />
                    </div>
                </div>
                <div className='w-full flex h-max justify-center'>
                    <div className='w-max flex flex-col'>
                        <label className='font-ubuntu font-[300] text-[24px] max-xl:text-[20px]'>Message</label>
                        <div className='w-[495px] h-[255px] max-lg:w-80 max-lg:h-[120px] rounded-[17px] border overflow-hidden outline-0 focus-within:outline-2 outline-offset-2 outline-secondary transition-[outline] duration-40'>
                            <textarea
                                name='message'
                                className='w-full h-full bg-white border-none resize-none placeholder:text-neutral-400 max-sm:text-[14px] outline-0 p-4 text-[20px] font-ubuntu custom-scrollbar'
                                placeholder="Enter The Message"
                            />
                        </div>
                    </div>
                </div>
                <PillShapedButton 
                    text='Send' 
                    className='w-[229px] h-[52px] rounded-[71px] flex items-center justify-center cursor-pointer' textClassName='font-ubuntu font-[500] text-[40px] max-sm:text-[26px] text-white'
                    style={{
                        boxShadow: '0px 2px 10px 2px  rgba(255,87,87,0.5)',
                    }}
                    type='submit'
                />
            </form>
            <ToastContainer />
        </div>
    );
}

export default GetInTouch;
