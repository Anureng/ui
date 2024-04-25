import React, { useState } from 'react'
import { IoBulbOutline } from "react-icons/io5";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { IoReload } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { IoMdExpand } from "react-icons/io";
const Calculator = () => {
    const [flip, setFlip] = useState(false)
    return (
        <div className='flex items-center justify-center flex-col mt-4'>
            <div className='list-none flex items-center space-x-12 mb-4'>
                <li className='text-blue-800 font-bold border-b border-blue-800 p-2' >Study </li>
                <li>Quiz</li>
                <li>Test</li>
                <li>Game</li>
                <li>Others</li>
            </div>
            <div className='w-2/5 ' onClick={() => setFlip(!flip)}>

                {
                    flip ? (
                        <div className={`text-white  bg-gradient-to-r from-[#2E88B7] to-[#091E4A] rounded-3xl h-96 ${flip ? "transition-all duration-500 [transform-style:preserve-3d] [ transform: rotateY(180deg)]" : "transition-all duration-500 [transform-style:preserve-3d] [ transform: rotateY(180deg)]"} `}>
                            <div className='flex items-center justify-between text-2xl p-4 '>
                                <IoBulbOutline />
                                <HiOutlineSpeakerWave />
                            </div>
                            <div className='flex items-center justify-center h-60 text-3xl'>
                                <p>5x + 12</p>
                            </div>
                        </div>
                    ) : (
                        <div className={`text-white transition-transform duration-500 transform rotate-y-180 bg-gradient-to-r from-[#06286E] to-[#164EC0] rounded-3xl h-96 ${flip ? "transition-all duration-500 [transform-style:preserve-3d] [ transform: rotateY(180deg)]" : "transition-all duration-500 [transform-style:preserve-3d] [ transform: rotateY(180deg)]"}`}>
                            <div className='flex items-center justify-between text-2xl p-4 '>
                                <IoBulbOutline />
                                <HiOutlineSpeakerWave />
                            </div>
                            <div className='flex items-center justify-center h-60 text-3xl'>
                                <p>9 + 6 + 7x - 2x - 3</p>
                            </div>
                        </div>
                    )
                }



            </div>
            <div className='flex items-center justify-between w-2/5 mt-6'>
                <div>
                    <IoReload className='text-blue-800 text-xl ' />
                </div>
                <div className='flex items-center space-x-6'>
                    <MdOutlineKeyboardArrowLeft className=' text-white rounded-full h-10 w-10 bg-gradient-to-r from-[#06286E] to-[#164EC0]' />
                    <p className='text-xl font-bold'>01/10</p>
                    <MdOutlineKeyboardArrowRight className='text-white rounded-full h-10 w-10  bg-gradient-to-r from-[#06286E] to-[#164EC0]' />
                </div>
                <div>< IoMdExpand className='text-blue-800 text-xl ' /></div>
            </div>
        </div>
    )
}

export default Calculator
