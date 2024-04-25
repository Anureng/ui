import React from 'react';
import { RiArrowDownSLine } from "react-icons/ri";

const FAQ = () => {
    return (
        <div className='space-y-10 p-8 bg-[#F9F9F9] mt-10 mb-3'>
            <div className='font-bold text-3xl'>
                <span className="text-transparent bg-gradient-to-r from-[#06286E] to-[#164EC0] bg-clip-text">FAQ</span>
            </div>
            <div className='space-y-5'>
                <div className='border-2 border-blue-500 w-2/5 flex items-center justify-between p-3 rounded-xl'>
                    <p>
                        Can education flashcards be used for all age groups?
                    </p>
                    <RiArrowDownSLine />
                </div>
                <div className='border-2 border-blue-500 w-2/5 flex items-center justify-between p-3 rounded-xl'>
                    <p>
                        Can education flashcards be used for all age groups?
                    </p>
                    <RiArrowDownSLine />
                </div>
                <div className='border-2 border-blue-500 w-2/5 flex items-center justify-between p-3 rounded-xl'>
                    <p>
                        Can education flashcards be used for all age groups?
                    </p>
                    <RiArrowDownSLine />
                </div>
            </div>
        </div>
    );
};

export default FAQ;
