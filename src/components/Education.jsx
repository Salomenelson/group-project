//  Education and skills section

function Education(){
    return(
        <section className="w-full">
            <div className="max-w-[1000px] my-0 mx-auto py-4">
                <div className="flex gap-2 items-center">
                    {/* the horizontal line */}
                    <div className="w-4 h-[2.5px] bg-gray-500"></div>
                    <p className="uppercase tracking-[6px] text-sm text-gray-900">Learning path</p>
                </div>
                {/* section heading */}
                <h2 className="text-4xl py-4 font-bold">Education & Skills</h2>

                {/* flex */}
                <div className="flex justify-between py-6">

                    {/* left div */}
                    {/* the vertical line */}
                    <div className="relative border-l-2 border-gray-200 pl-8">
                        <div className="w-fit">
                            <div className=" relative py-3">
                                {/* the circle on the line */}
                                <div className="absolute -left-[44px] w-5 h-5 bg-gray-200 rounded-full"></div>
                                <p className="text-[20px] font-semibold">Kingston university</p>
                                <p className="pb-3 text-gray-900">Master's degree - Software Engineering</p>
                                <p className="font-semibold">2019 - 2021</p>
                            </div>

                            <div className="relative py-3">
                                <div className="absolute -left-[44px] w-5 h-5 bg-gray-200 rounded-full"></div>
                                <p className="text-[20px] font-semibold">Kingston university</p>
                                <p className="pb-3 text-gray-900">Bachelor's degree - Computer Engineering</p>
                                <p className="font-semibold">2015 - 2019</p>
                            </div>

                            <div className="relative py-3">
                                <div className="absolute -left-[44px] w-5 h-5 bg-gray-200 rounded-full"></div>
                                <p className="text-[20px] font-semibold">Westminster School</p>
                                <p className="pb-3 text-gray-900">Diploma's degree - Mathematics</p>
                                <p className="font-semibold">2013 - 2015</p>
                            </div>
                        </div>
                    </div>
                   
                   {/* right div */}
                   <div className="w-[50%]">
                        <p>For 5 + years , I have been continuously learning in the field of front-end and experimenting with new technologies and frameworks, and here you can see asummary of my skills.</p>

                        {/* progress bar */}
                        <div className="py-6">
                            <div className="py-3">
                                <p className="py-2 font-semibold">React</p>
                                <div className="w-full bg-purple-300 h-2">
                                    <div className="bg-purple-600 h-2 rounded-l-[2px]" style={{width:"70%"}}></div>
                                </div>
                            </div>

                            <div className="py-3">
                                <p className="py-2 font-semibold">Angular</p>
                                <div className="w-full bg-purple-300 h-2 ">
                                    <div className="bg-purple-600 h-2 rounded-l-[2px]" style={{width:"60%"}}></div>
                                </div>
                            </div>

                            <div className="py-3 font-semibold">
                                <p className="py-2">JavaScript</p>
                                <div className="w-full bg-purple-300 h-2 ">
                                    <div className="bg-purple-600 h-2 rounded-l-[2px]" style={{width:"70%"}}></div>
                                </div>
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </section>
    )
}

export default Education