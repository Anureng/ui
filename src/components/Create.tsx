import React from 'react'
import { AiOutlinePlus } from "react-icons/ai";
const Create = () => {
    return (
        <div className='bg-[#F9F9F9] flex items-center justify-between p-8 mt-8'>
            <div className='flex space-x-1'>
                <img src="./logo1.png" className='h-14 shadow-xl bg-white rounded-full w-16' alt="" />
                <div>
                    <p className='text-xs'>Powered by</p>
                    <p className='text-blue-800 text-3xl  font-medium'>HyggeX</p>
                </div>
            </div>
            <div className='flex items-center space-x-3'>
                <AiOutlinePlus className='bg-gradient-to-r from-[#06286E] h-8 w-8 to-[#164EC0] text-white rounded-full' />
                <p className='text-blue-800 text-2xl'>Create FlashCard</p>
            </div>
        </div>
    )
}

export default Create
