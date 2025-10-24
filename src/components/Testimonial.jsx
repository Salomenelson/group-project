import React from 'react'
import { Testimonials } from './Testimonials'
import './Testimonial.css'
const Testimonial = () => {
  return (
    <section id='Blog' className="w-full bg-black">
      <div className="w-[80%] max-w-[1000px] my-0 mx-auto py-15">
        <div className='text-center pb-8'>
          <div className="flex gap-2 pb-2 items-center justify-center">
            <div className="w-4 h-[2.5px] bg-gray-500"></div>
            <p className="uppercase tracking-[6px] text-sm text-white">My Clients</p>
          </div>
          <h2 className="text-4xl font-bold pb-14 text-white">Testimonials</h2>
        </div>
   
        <div className="md:flex gap-5">
          <Testimonials  images = {"./Avatar.png"} message = "We were very please to hear how you resolved our website's user interface issues and challenges." person = "Amelia Miller" profession = "Designer"/>
          <Testimonials images = {"./Avatar1.png"} message = "I am glad I decided to work with you. The project was delivered on time with all the requirements" person = "James Delaney" profession = "Developer"/>
          <Testimonials images = {"./Avatar2.png"} message = "The management of our projects was always faced with difficulties, but you handled these well." person = "Isabella Bennett" profession = "Manager"/>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
