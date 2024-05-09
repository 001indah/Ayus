import React from 'react';

const Bottom = () => {
    return (
        <>
            <div className='relative top bg-black p-20'>
                <div className='flex justify-between'>
                    <div className='bottom-text'>
                        <h2 className='flex items-center text-white text-5xl'>
                            Have something in mind?
                        </h2>
                        <h2 className='flex items-center text-white text-5xl'><img src="footer-photo.png" alt="#" className='w-16 h-16 rounded-full object-cover mr-4' />
                            let's build it together.</h2>
                    </div>
                    <button className='w-48 h-16 rounded-full bg-white text-black'>Get in touch</button>
                </div>
            </div>

        </>
    );
};

export default Bottom;
