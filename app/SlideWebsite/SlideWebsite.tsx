"use client"
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';

const fotoWebsite = [
    {
        foto: "page1.png"
    },
    {
        foto: "image 33.png"
    },
    {
        foto: "image 33(1).png"
    },
    {
        foto: "image 33(2).png"
    },
    {
        foto: "image 33(3).png"
    },
    {
        foto: "image 33(4).png"
    },
    {
        foto: "image 33(5).png"
    },
    {
        foto: "image 33(6).png"
    },
];

const SlideWebsite = () => {

    const [isHover, setHover] = useState(true);

    const handleOnHover = () => {
        setHover(!isHover)
    };

    const klik = (
        <div >
            <Link href="#">
                <button id='hoverVisit' className='flex container--website-button border-white p-4 bg-white text-black hover:border-black rounded-lg  z-40'>
                    <span >
                        Visit the website
                    </span>
                    <div className="recentWork-circle flex items-center justify-center ">
                        <img src='recentWork-arrow.svg' alt="Arrow" className="w-6" />
                    </div>
                </button>
            </Link>
        </div>
    );

    return (
        <>
            <div className='flex overflow-x-auto bg-white p-9'>
                {fotoWebsite.map((fotoItem, index) => (
                    <div key={index} className='min-w-[444px] h-[306px] bg-background flex justify-center items-center m-4 shadow-lg relative'>

                        <img onMouseOver={handleOnHover} id='hoverImg' src={fotoItem.foto} alt={`foto-${index}`} className='whitespace-nowrap overflow-hidden hover:scale-110 ease-in-out duration-1000' />
                        <div className='absolute'>{isHover ? klik : ""}</div>

                    </div>
                ))}
            </div>
        </>
    );
}

export default SlideWebsite;
