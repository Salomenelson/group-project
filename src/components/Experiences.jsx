// Experiences section
function Experiences(){
    return(
        <section id="Experience" className="w-full bg-[#fbfbfb]">
            <div className="w-[80%] max-w-[1000px] my-0 mx-auto py-15">
                <div className="md:flex items-center justify-between ">

                    {/* left div */}
                    <div className=" md:w-[33%]">

                        <div className="flex gap-2 pb-2 items-center">
                            <div className="w-4 h-[2.5px] bg-gray-500"></div>
                            <p className="uppercase tracking-[6px] text-sm text-gray-900">Career Path </p>
                        </div>
                        <h2 className="text-4xl font-bold pb-14">Work Experiences</h2>

                        <div className="bg-white py-3 px-8 flex justify-between rounded-[5px]">
                            <p className="text-purple-600">Apple</p>
                            <img src="/shape.png" alt="angle icon" />
                        </div>
                        <p className="py-3 px-8">Microsoft</p>
                        <p className="py-3 px-8">Facebook</p>
                        <p className="py-3 px-8">Slack</p>

                    </div>
                    
                    {/* right div */}
                    <div className="md:w-[60%]">
                        <p className="text-[20px] pb-1 pt-6">Front-end Devloper <span className="underline decoration-solid">Apple.Inc</span></p>
                        <p className="pb-1">California, United States</p>
                        <p className="pb-1">Nov 2020 - present Full-time</p>
                        <div className="flex gap-5 py-3">
                            <img src="/Tag 1.png" alt="tag icon" />
                            <img src="/Tag 2.png" alt="tag icon" />
                        </div>

                        <div className="w-full h-px my-5 bg-gray-200"></div>

                        <div className="flex gap-3 items-center py-1">
                            <div className="w-4 h-[2.5px] bg-gray-500"></div>
                            <p>Improving overall website performance for mobile users.</p>
                        </div>

                        <div className="flex gap-3 items-center py-1">
                            <div className="w-4 h-[2.5px] bg-gray-500"></div>
                            <p>Collaborate with back-end developers and web designers to improve usability</p>
                        </div>

                        <div className="flex gap-3 items-center py-1">
                            <div className="w-4 h-[2.5px] bg-gray-500"></div>
                            <p>Add voice search feature for mobile app.</p>
                        </div>

                        <div className="flex gap-3 items-center py-1">
                            <div className="w-4 h-[2.5px] bg-gray-500"></div>
                            <p>Developing an admin panel to mange contents, users, products and ...</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experiences