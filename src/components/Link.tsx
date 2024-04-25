import React from 'react'
import { PiHouseThin } from "react-icons/pi";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Link = () => {
    return (
        <div className='space-y-5 bg-[#F9F9F9]'>
            <div className='flex items-center p-4 mt-6 space-x-1'>
                <PiHouseThin className='font-light text-lg' />
                <MdOutlineKeyboardArrowRight className='text-blue-800 font-medium text-lg' />
                <p className='font-light'>Flashcard</p>
                <MdOutlineKeyboardArrowRight className='text-blue-800 font-medium text-lg' />
                <p className='font-light'>Mathematics</p>
                <MdOutlineKeyboardArrowRight className='text-blue-800 font-medium text-lg' />
                <p className='text-blue-800 font-medium'>Relation and Function</p>
            </div>
            <div className="text-transparent bg-gradient-to-r from-[#06286E] to-[#164EC0] bg-clip-text text-4xl  p-4">Relation and Function(Mathematics)</div>
        </div>
    )
}

export default Link
