"use client";

import { useState } from 'react';

const Popup = () => {
const [isOpen, setIsOpen] = useState(true);

const togglePopup = () => {
    setIsOpen(!isOpen);
};

return (
    <>

        {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-20  backdrop-blur-[20px]">
                <div className="max-w-[300px] sm:max-w-[600px] lg:max-w-[800px] relative min-h-[-600px] bg-white rounded-pop-up-lm flex justify-center items-center flex-col px-7 sm:px-[67px] py-6 sm:py-[58px] gap-[13px] sm:gap-[25px] font-Montserrat
                            ">
                <img src="/close.svg" alt="" className="absolute top-4 sm:top-8 right-4 sm:right-8  w-[3.125%] cursor-pointer" onClick={togglePopup}/>

                <div className="gap-[0.875rem] text-center">
                <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold text-pop-up-primary ">Ready to Join 
                    <span className="font-extrabold"> BNCC</span>
                    ?</h1>

                <h2 className="text-pop-up-secondary text-[0.625rem] sm:text-[1rem] lg:text-[1.75rem] font-semibold">
                    <span className="font-bold">BNCC Opening Season 2024</span> will start soon!</h2>
                </div>

                <div className="flex justify-center items-center flex-col  gap-[8px] sm:gap-[15px] w-4/5 lg:w-[56.25%] text-center">
                    <p className="text-pop-up-secondary text-[0.5rem] sm:text-[0.875rem] lg:text-base">Visit our website to see more information</p>
                    <img src="/bncc_launching.png" alt="" />
                    <a href="https://launching.bncc.net/"
                    className="px-6 sm:px-12 py-3 relative rounded-pop-up-sm bg-pop-up-primary text-white font-semibold text-[0.5rem] sm:text-xl
                                hover:bg-white hover:text-pop-up-primary hover:border-pop-up-primary border-[3px]"> <span class='default-text'>Go to Registration Site</span> <span class='hover-text absolute inset-0 flex items-center justify-center'>launching.bncc.net</span></a>
                </div>

                </div>
            </div>
        )}

        </>
    );
};

export default Popup;