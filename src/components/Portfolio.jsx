//  Portfolio section
import {Portfoliocard} from "./Portfoliocard"


function Portfolio(){
    return(
        <section id="Portfolio" className="w-full">
            <div className="w-[80%] max-w-[1000px] my-0 mx-auto py-15">
                <div className="pb-8">
                        <div className="flex justify-between gap-2 pb-1">
                            <div className="flex items-center gap-1">
                                <div className="w-4 h-[2.5px] bg-gray-500"></div>
                                <p className="uppercase tracking-[6px] text-sm text-gray-900">My works</p>
                            </div>
                            <div className="flex gap-2">
                                <img src="/Left.png" alt="left arrow"/>
                                <img src="/Right.png" alt="right arrow"/>
                            </div>
                        </div>
                        <h2 className="text-4xl font-bold pb-7">Featured Portfolios</h2>
                </div>
                
                <div className="md:flex gap-10">
                    <Portfoliocard image="/Portfolio item 1.jpg" title="Agency Website." icon="/Tag 1.png" icon2="Link.png"/>
                    <Portfoliocard image="/Portfolio item 2.jpg" title="Dashbord Website." icon="/Tag 2.png" icon2="Link.png"/>
                    <Portfoliocard image="/Portfolio item 3.jpg" title="Support Center Website." icon="/Tag 3.png" icon2="Link.png"/>
                </div>
            </div>
        </section>
    )
}

export default Portfolio