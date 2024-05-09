
import React from "react"

const Hero = () => {


    // //hamburger
    // const hamburger = document.querySelector('#hamburger');
    // const navMenu = document.querySelector('#nav-menu')

    // hamburger.addEventListener('click', function () {
    //     hamburger.classList.toggle('hamburger-active');
    //     navMenu.classList.toggle('hidden');
    // })


    return (

        <div id='Home' className="w-full bg-background min-h-screen relative overflow-hidden whitespace-nowrap object-cover">
            <div className="flex items-center ">
                <div className="absolute right-0 flex items-center">
                    <h1 className="text-4xl bg-black p-6 rounded-full w-[480px] -translate-x-[-75%] hover:-translate-x-[-20%] transition-all ease-in-out duration-1000 "><span className="text-5xl mr-8">👋</span> Hi I’m Ayush</h1>
                </div>
                <div>
                    <img src='Img/hero1.png' alt="#" className="bottom-0 min-h-screen overflow-hidden whitespace-nowrap object-cover" />
                </div>
                <h1 className="slide-text text-headdisplay mb-5 w-full overflow-hidden absolute text-white text-9xl bottom-0 whitespace-nowrap">
                    <span className="animate-slide">Webflow Developer - UI/UX Designer</span>
                </h1>

            </div>
        </div>
    )
}

// ../../../public/hero1.png
export default Hero

