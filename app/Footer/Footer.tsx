import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="bottom bg-black  flex items-center justify-between py-8 px-20">
                <a href="#" className='text-white'>Build with 💖 by Brightscout & Ayush</a>
                <ul className='flex'>
                    <li className='inline'><a href="#" className='text-white text-base no-underline ml-10 hover:font-bold'>Linkedin</a></li>
                    <li className='inline'><a href="#" className='text-white text-base no-underline ml-10 hover:font-bold'>Twitter</a></li>
                    <li className='inline'><a href="#" className='text-white text-base no-underline ml-10 hover:font-bold'>Instagram</a></li>
                    <li className='inline'><a href="#" className='text-white text-base no-underline ml-10 hover:font-bold'>Webflow</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
