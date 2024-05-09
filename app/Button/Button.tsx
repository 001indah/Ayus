'use client'

import React from 'react'
import Link from 'next/link'
import { useState } from 'react';

const Button = () => {

    const [isClose, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!isClose)
    };

    const klik = (
        <div >
            <ul>
                <li className="hover:font-bold mb-3">
                    <Link href="/#Home" className="text-[50px] m-10 ">Home</Link>
                </li>
                <li className="hover:font-bold mb-3">
                    <Link href="/#About" className="text-[50px] m-10 ">About</Link>
                </li>
                <li className="hover:font-bold mb-3">
                    <Link href="/#Work" className="text-[50px] m-10 ">Work</Link>
                </li>
                <li className="hover:font-bold mb-3">
                    <Link href="/Contact" className="text-[50px] m-10 ">Contact</Link>
                </li>
            </ul>
            <br />
            <ul className='flex'>
                <li className='inline hover:scale-110'><a href="#" className='text-white text-base no-underline ml-10 '>Linkedin</a></li>
                <li className='inline hover:scale-110'><a href="#" className='text-white text-base no-underline ml-10 '>Twitter</a></li>
                <li className='inline hover:scale-110'><a href="#" className='text-white text-base no-underline ml-10 '>Instagram</a></li>
                <li className='inline hover:scale-110'><a href="#" className='text-white text-base no-underline ml-10 '>Webflow</a></li>
            </ul>
        </div>
    );

    return (
        <div className={`fixed z-50 right-0 ${!isClose ? 'bg-black opacity-100 text-white p-9 w-[719px] h-vw' : ''}`}>

            <div className={`flex items-center justify-center ${isClose ? 'bg-black' : 'bg-black flex justify-center translate-x-[750%] translate-y-[-45%] self-end'} rounded-full w-20 h-20`}>
                <button onClick={handleClick} className="space-y-2 self-stretch">
                    <span className={`block h-0.5 w-[30px] bg-white transition duration-300 ease-in-out origin-top-left ${!isClose ? 'bg-black rotate-45 origin-top-left' : ''}`}></span>
                    <span className={`block h-0.5 w-[30px] bg-white transition duration-300 ease-in-out ${!isClose ? 'scale-0 ' : ''}`}></span>
                    <span className={`block h-0.5 w-[30px] bg-white transition duration-300 ease-in-out origin-bottom-left ${!isClose ? 'bg-black -rotate-45 origin-bottom-left' : ''}`}></span>
                </button>
            </div>
            <div>
                <h1 className='bg-black text-white right-0 right-0'>{isClose ? "" : klik}</h1>
            </div>

        </div>
    )
}

export default Button


