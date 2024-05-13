// "use client"
// import axios from 'axios';
// import { useFormik } from 'formik';
// import React, { useState } from 'react';
// import FormValidation from './contactValidation';

// const initialValues = {
//     name: "",
//     email: "",
//     subject: "",
//     message: ""
// }


// const Contacts = [
//     {
//         contact: "Contact Detail",
//         isi: [
//             "ayush.barnwal@brightscout.com",
//             "+91 8651447521"
//         ]
//     },
//     {
//         contact: "Social Media",
//         isi: [
//             "Linkedin",
//             "Instagram",
//             "Twitter",
//             "Webflow",
//             "Figma"
//         ]
//     }
// ];


// const Contact = () => {
//     const [inputValues, setInputValues] = useState();
//     const [show, setShow] = useState(false);

//     const showpass = () => {
//         setShow(prevState => !prevState)
//     };

//     //untuk post data



//     return (

//         <div id="Contact" className="grid grid-cols-[1fr,1fr] bg-white text-black p-24 pb-12">
//             <div>
//                 <img src="footer-photo.png" alt="#" className='w-[297px] h-[297px] rounded-full object-cover mr-4' />
//                 {Contacts.map(({ contact, isi }) => (
//                     <div key={contact} className='mt-3 mb-9'>
//                         <p className='text-base text-gray-700 mb-3'>{contact}</p>
//                         {isi.map((item, index) => (
//                             <p key={index} className='text-2xl leading-9 hover:font-bold'><a href="#">{item}</a></p>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//             <div>
//                 <p className='text-4xl font-bold mb-12'>Let’s build something cool together</p>
//                 <form>
//                     <div className="mb-9 mt-9">
//                         <label htmlFor="name" className="block text-gray-700 mb-3">Name</label>
//                         <input type="text" id="name" name="name" className="bg-tersier p-2 h-9 form-input mt-1 block w-full border-b border-black mb-3" placeholder="James Robert" />
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-gray-700 mb-3">Email</label>
//                         <input type="email" id="email" name="email" className="bg-tersier p-2 h-9 form-input mt-1 block w-full border-b border-black mb-3" placeholder="ayush.barnwal@brightscout.com" />
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="subject" className="block text-gray-700 mb-3">Subject</label>
//                         <input type="text" id="subject" name="subject" className="bg-tersier p-2 h-9 form-input mt-1 block w-full border-b border-black mb-3" placeholder="For web design work Enquire" />
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="message" className="block text-gray-700 mb-3">Message</label>
//                         <textarea id="message" name="message" className="bg-tersier p-2 form-textarea mt-1 block w-full border-b border-black mb-3" placeholder="Type your Message"></textarea>
//                     </div>

//                     <div className="flex">
//                         <button type="submit" className="bg-black text-white font-bold py-2 px-4 w-[193px] h-[50px] rounded-full focus:outline-none focus:shadow-outline mt-[12px]">Submit</button>
//                     </div>
//                 </form>

//             </div>


//         </div>

//     )
// }

// export default Contact;
