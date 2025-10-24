// Hero section
function Heros(){
    return(
        <section className="w-full">
            <div className="w-[80%] max-w-[1000px] my-0 mx-auto py-15">
                <div className="md:flex items-center ">

                    {/* left div */}
                    <div className=" md:w-[50%]">

                        <div className="flex gap-2 items-center">
                            <div className="w-4 h-[2.5px] bg-gray-500"></div>
                            <p className="uppercase tracking-[6px] text-sm text-gray-900">My name is</p>
                        </div>

                        <h1 className="text-6xl py-4 font-bold">Alex <span className="text-purple-600">Smith.</span></h1>
                        <p>Creative front-end developer with more than 5 + years of experience in enterprise companies and startups. Proficient in javaScript, Angular, and React. Passionate about UI/UX </p>
                        <div className="flex gap-5 py-6">
                            <img src="/Instagram.png" alt="instagram logo" />
                            <img src="/Github.png" alt="Github logo" />
                            <img src="/Linkedin.png" alt="Linkedin logo" />
                            <img src="/Twitter.png" alt="Twitter logo" />
                        </div>
                    </div>
                    
                    {/* right div */}
                    <div className="md:w-[50%]">
                        <img src="/Hero Image.png" alt="Hero Image" className="w-full"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Heros