import { useState } from "react"

function Header(){

    const[isMenuOpen, setIsMenuOpen] = useState(false)

    const toogleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen)   //!false = true
    }

    console.log(isMenuOpen)


    return(
        <header>
            <div className="w-[80%] max-w-[1000px] my-0 mx-auto py-4">
                <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <img src="/logo.svg" alt="logo" className="w-[40px]"/>
                        <h1 className="text-[1.7rem]">Alex.</h1>
                    </div>


                    <div className="md:hidden">
                        <button className="text-[#d7d7f9]" onClick={toogleMenu}>
                            <svg 
                            fill="none"
                            stroke="CurrentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <ul className="hidden md:flex space-x-4">
                        <li><a href="Services">Services</a></li>
                        <li><a href="#Portfolios">Portfolios</a></li>
                        <li><a href="#Experiences">Experience</a></li>
                        <li><a href="#Blog">Blog</a></li>
                    </ul>

                    <div className="hidden md:flex space-x-4">
                        <img src="/moon.svg" alt="moon icon to change theme color" />
                        <button className="border border-black py-1 px-4 rounded-[5px] ">Resume</button>
                    </div>

                </div>

                {/* Mobile menu */}
                {isMenuOpen ? (
                    <ul className="flex justify-between md:hidden">
                        <div>
                            <li className="py-2" ><a href="#Services">Services</a></li>
                            <li className="py-2" ><a href="#Portfolios">Portfolios</a></li>
                            <li className="py-2"><a href="#Experience">Experience</a></li>
                            <li className="py-2" ><a href="#Blog">Blog</a></li>
                        </div>

                        <div className="flex-col md:hidden">
                            <img className="pb-8" src="/moon.svg" alt="moon icon to change theme color" />
                            <button className="border border-black py-1 px-4 rounded-[5px] ">Resume</button>
                        </div>
                    </ul>

                    

        
                ): null}

              
            </div>

        </header>
    )
}

export default Header