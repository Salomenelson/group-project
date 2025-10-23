import React from 'react'
import { Testimonials } from './Testimonials'
import './Testimonial.css'
const Testimonial = () => {
  return (
    <div className='container'>
    <div className='header'>
       <div className='header-1'>
       
        <p> <img src="line.png" alt="" /> MY CLIENTS</p>
       </div>
        <h1>Testimonials</h1>
    </div>

   <div className="contains">
   <div className='container-1'>
<Testimonials 
images = {"./Avatar.png"}
message = "We were very please to hear how you resolved our website's user interface issues and challenges."
person = "Amelia Miller"
profession = "Designer"
/>
</div>

<div className='container-1'>
<Testimonials 
images = {"./Avatar1.png"}
message = "I am glad I decided to work with you. The project was delivered on time with all the requirements"
person = "James Delaney"
profession = "Developer"
/>
</div>

<div className='container-1'>
<Testimonials 
images = {"./Avatar2.png"}
message = "The management of our projects was always faced with difficulties, but you handled these well."
person = "Isabella Bennett"
profession = "Manager"
/>
</div>

    
   </div>
    </div>
  )
}

export default Testimonial
