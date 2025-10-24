// reusable portfolio cards

export const Portfoliocard = ({image, title, icon, icon2})=>{
    return(
        <section className=" border-2 border-solid border-[#f3f2f2] mb-5 rounded-[10px] shadow-[0_8px_20px_rgba(0,0,0,0.15)">
            <div className="w-full h-fit">
                <div>
                    <img className="w-full h-[200px]" src={image} alt="portfolio image" />
                </div>
                <div className="p-4">
                    <p className="text-[20px] pb-3">{title}</p>
                    <div className="flex gap-3">
                        <img src={icon} alt="icon" />
                        <img src={icon2} alt="link icon" />
                    </div>
                </div>
            </div>
        </section>
    )
} 