import React from 'react';
import PillShapedButton from './PillShapedButton';
import { createClient } from '@/utils/supabase/client';
import { useRef } from 'react';
import { notifyError, notifySuccess } from '@/utils/toast';
import { isValidEmail } from '@/utils/validate';

export const Content = () => {
    const emailRef = useRef<HTMLInputElement>(null);

    const handleEmailUpload = async(email: string) =>{
        if (!email) {
            notifyError({message: 'Please enter an email!'});
            return;
        }

        if (!isValidEmail(email)) {
            notifyError({message: 'Invalid email format!'});
            return;
        }

        const supabase = createClient();

        const { error: uploadError } = await supabase
            .from('early_access')
            .insert([{ email: email }]);

        if (uploadError?.code === "23505") {
            notifyError({message: `${email} is already signed up for early access!`});
            return;
        } else if (uploadError) {
            notifyError({message: 'An error occured, Please try again'});
            return;
        }

        notifySuccess({message: "Successfully signed up for early access!"});
    }

    return (
        <div className='w-full min-h-[100vh] max-h-max relative overflow-hidden'>
            <div className='w-full min-h-[100vh] max-h-max text-black font-telegraf flex flex-row max-xl:flex-col'>
                <div className='flex flex-1 flex-col items-center justify-center gap-20 max-sm:gap-10'>
                    <div className='flex flex-col gap-4 max-sm:pl-5 pl-20'>
                        <span id='quote' className="font-ubuntu font-[800] text-6xl max-sm:text-5xl w-full max-lg:w-full max-xl:mt-20 max-xl:w-190">
                            EVER WONDER HOW MANY INCREDIBLE PEOPLE YOU’VE NEVER MET?
                        </span>

                        <span id='quote' className='text-4xl font-ubuntu font-[500] italic'>
                            Meet one. Each day.
                        </span>
                    </div>

                    <div id='email' className='flex flex-col gap-4 w-full max-xl:w-max mt-20 font-ubuntu xl:pl-20'>
                        <span className='text-[40px] font-semibold max-sm:text-3xl'>
                            Get Early Access
                        </span>

                        <form className='flex h-max gap-4 font-inter items-center'>
                            <input type='email' name='email' required placeholder='Email address' className='py-2 px-4 w-72 max-sm:w-55 border rounded-lg text-black placeholder:text-neutral-700 text-[18px] max-sm:text-[14px] outline-0 focus:outline-2 outline-offset-2 outline-secondary transition-[outline] duration-40 bg-primary' ref={emailRef} />
                                <PillShapedButton text='Join Vonce' textSize={'18px'} textClassName={'font-inter'} className='px-4 py-2' type='submit' onClick={(e) => {
                                    e.preventDefault();
                                    const email = emailRef.current!.value.trim().toLowerCase();;
                                    handleEmailUpload(email);
                                }} />
                        </form>
                    </div>
                </div>

                <div className='flex-1 flex items-center justify-start flex-col pb-20 pt-4 gap-30 max-sm:gap-20 max-sm:mt-20'>
                    <div className='flex w-max gap-6' id='vonce_pills'>
                        <PillShapedButton 
                            text='What is Vonce?' 
                            className='px-6 py-3 w-max' 
                            textSize={'20px'} 
                            style={{
                                boxShadow: '0px 2px 5px rgba(0,0,0,40%)',
                            }}
                            onClick={() => {
                                const target = document.getElementById('page-2');
                                if (target) target.scrollIntoView({ behavior: 'smooth' });
                            }}
                        />

                        <PillShapedButton 
                            text='Get Early Access' 
                            className='px-6 py-3 w-max' 
                            textSize={'20px'} 
                            style={{
                                boxShadow: '0px 2px 5px rgba(0,0,0,40%)',
                            }}
                            onClick={() => emailRef.current?.focus()}
                        />
                    </div>

                    <img id='vonce_messages' alt="vonce-messages" src='/images/vonce_messages_image.png' className='w-165 max-xl:w-140 max-lg:w-120 max-sm:w-80'/>
                </div>
            </div>
        </div>
    );
}
