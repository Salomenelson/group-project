//  Services section
import { Servicecard } from "./Servicecard"


function Services(){
    return(
        <section className="w-full bg-[#FBFBFB]">
            <div className="w-[80%] max-w-[1000px] my-0 mx-auto py-15">
                <div className="text-center pb-8">
                    <div className="flex gap-2 items-center justify-center">
                        <div className="w-4 h-[2.5px] bg-gray-500"></div>
                        <p className="uppercase tracking-[6px] text-sm text-gray-900">Services</p>
                    </div>
                    <h2 className="text-4xl font-bold">Specialized in</h2>
                </div>
                
                <div className="md:flex gap-5">
                    <Servicecard icon="/Icon 1.png" title="UI/UX Design" description="Turn what you have in mind of a digital product into reality. For any platform you consider."/>
                    <Servicecard icon="/Icon 2.png" title="Application Development"description="Standard designing, building and implementing your applications with documentation."/>
                    <Servicecard icon="/Icon 3.png" title="Web Development" description="Create and maintain your websites and also take care of its performance and traffic capacity."/>
                </div>
            </div>
        </section>
    )
}

export default Services
