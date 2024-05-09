import React from 'react';
import arrow from 'recentWork-arrow.svg';

const fotoWebsite = [
    {
        link: 'https://decodable.co',
        konten: 'Brand Design-Webflow Development-Web Design',
        icon: 'recentWork-arrow.svg',
    },
    {
        link: 'https://decodable.co',
        konten: 'Brand Design-Webflow Development-Web Design',
        icon: 'recentWork-arrow.svg',
    },
    {
        link: 'https://decodable.co',
        konten: 'Brand Design-Webflow Development-Web Design',
        icon: 'recentWork-arrow.svg',
    },
    {
        link: 'https://decodable.co',
        konten: 'Brand Design-Webflow Development-Web Design',
        icon: 'recentWork-arrow.svg',
    }
];

const RecentWork = () => {
    return (
        <div id="Work" className='grid grid-cols-[1fr,2fr] bg-white text-black p-24 pb-12'>
            {/* flex */}
            <h3 className='text-4xl font-bold mt-[32px]'>Recent Work</h3>
            <div>
                <div>
                    {fotoWebsite.map((work, index) => (
                        <div key={index} className="flex justify-between border-b border-background my-[32px]">
                            <div className=' mb-9'>

                                <a href={work.link} className="text-[60px]">{work.link}</a>
                                <p className="text-lg">{work.konten}</p>

                            </div>
                            <div className="recentWork-symbol w-20 h-20  border-background rounded-full flex items-center justify-center ml-16 border-2 hover:border-white hover:bg-black hover:fill-white">
                                <div className="recentWork-circle flex items-center justify-center">
                                    <img src={work.icon} alt="Arrow" className="w-12" />
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RecentWork;
