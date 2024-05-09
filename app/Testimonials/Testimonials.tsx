import React from 'react';


const testimonialIsi = [
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        name: 'Ayush Raj',
        position: 'VP of Marketing @ Webflow',
        photo: "testimonials-photo1.jpeg",
    },
    {
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ullam nihil laudantium placeat necessitatibus repellat, laborum, ipsa sint ipsum rerum nostrum perspiciatis. Amet iusto provident ipsam ducimus, vero dolorum fugiat!',
        name: 'Alex Cattoni',
        position: 'Founder @ CopyPossy',
        photo: "testimonials-photo2.jpeg",
    }
];

const Testimonials = () => {
    return (
        <div className='grid grid-cols-[1fr,2fr] bg-white text-black p-24 pb-12'>
            {/* dibuat flex */}
            <h2 className='text-4xl font-bold'>Testimonials</h2>
            <div className='testimonial-isi'>
                {/* testimonial function  */}
                {testimonialIsi.map((testimonial, index) => (
                    <div key={index} className='testimonial-item mb-16'>
                        <p className='mb-7 leanding-9 text-2xl text-justify ...'>"{testimonial.content}"</p>
                        {/* dibuat flex */}
                        <div className='flex'>
                            <div className='testimonial-writer-container'>
                                <img src={testimonial.photo} alt={testimonial.name} className='w-16 h-16 rounded-full object-cover mr-4' />
                            </div>
                            <div className="testimonial-nama">
                                <p className="font-bold text-base">{testimonial.name}</p>
                                <p className="position text-sm">{testimonial.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;



