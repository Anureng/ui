import React from 'react'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center p-6 bg-[#F9F9F9]'>
            <div className='bg-[#F9F9F9] flex items-center w-fit '>
                <img
                    className='h-18 w-14 bg-[#F9F9F9]  '
                    src="/logo1.png" alt="" />
                <p className='text-3xl  text-[#06286E] font-bold '>HyggeX</p>
            </div>
            <div className='list-none flex space-x-8 mr-10'>
                <li>Home</li>
                <li>Flashcard</li>
                <li>Contact</li>
                <li>FAQ</li>
                <li className='bg-gradient-to-r from-[#06286E] to-[#164EC0] px-6 py-1 rounded-full text-white' >Login</li>
            </div>
        </div>
    )
}

export default Navbar
