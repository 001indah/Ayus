import React from 'react'
import Hero from './Hero/Hero'
// import './page.css'
import Navbar from './Navbar/Navbar'
import Bottom from './Bottom/Bottom'
import Testimonials from './Testimonials/Testimonials'
import RecentWork from './RecentWork/RecentWork'
import About from './About/About'
import SlideWebsite from './SlideWebsite/SlideWebsite'
import Button from './Button/Button'

const page: React.FC = () => {
  return (
    <div>
      <Button />
      <Hero />
      <About />
      <RecentWork />
      <SlideWebsite />
      <Testimonials />
      <Bottom />
    </div>
  )
}

export default page

