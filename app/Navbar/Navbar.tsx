
import React, { useState } from 'react'
import Link from 'next/link'


const Navbar: React.FC = () => {

    return (
        <div>
            <nav className="w-full h-20 bg-background text-black top-0 left-0 flex items-center justify-between px-20 z-50">
                <a href="#" className="text-base">@Ayush Barnwal</a>
                <ul className="flex">
                    <li className="inline hover:scale-110 ">
                        <Link href="/#About" className="text-base text-black ml-10 ">About</Link>
                    </li>
                    <li className="inline hover:scale-110">
                        <Link href="/#Work" className="text-base text-black ml-10 ">Work</Link>
                    </li>
                    <li className="inline hover:scale-110">
                        <Link href="/Contact" className="text-base text-black ml-10 ">Contact</Link>
                    </li>
                </ul>




            </nav>


        </div>
    )
}

export default Navbar

