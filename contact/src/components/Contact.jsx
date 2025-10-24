import './Contact.css'
import { useState } from 'react'
import { Contacts } from './Contacts'
const Contact = () => {
const [mytxt, setMytxt] = useState("")
const [txt, setTxt] = useState("")

const handleClick =(e) => {
    setTxt(e.target.value)
}
const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMytxt(values => ({...values, [name]:value}))
}
    return(
        <div className="contact1">
            <div className="contact-details">
               <form >
                 <input type="text" placeholder="Name"  name='Name' value={mytxt.Name} onChange={handleChange}/>

                <input type="email" placeholder="Email" name='Email' value={mytxt.Email} onChange={handleChange}/>
                

               <label> 
                 <textarea placeholder='Message' cols={10} rows={10}     value={txt} onChange={handleClick}/>
                    
               </label>
               <input type="button" value="Send Message" className='btn' /> 
               </form>
                </div>

<div className="contact-info">
    <Contacts 
    imagesscr={"./Icon.png"} titles="Address" location="3424 Layman Avenue, Fayetteville,NC"
    />
   
    <Contacts 
    imagesscr={"./Icon 2.png"} titles="Phone" location="(501) 414-1541"
    />

    <Contacts 
    imagesscr={"./icon3.png"} titles="E-mail" location="devchapter@gmail.com"
    />
</div>

        </div>
    )
}
export default Contact