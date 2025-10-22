export const Servicecard = ({icon, title, description})=>{
    return(
        <section className=" bg-white w-full p-6 mb-5 rounded-[10px] shadow-[0_8px_20px_rgba(0,0,0,0.15)">
            <div>
                <div className="text-center">
                    <div className="flex justify-center pb-2">
                        <img src={icon} alt="icon" />
                    </div>
                    <p className="text-[20px] pb-7">{title}</p>
                    <p>{description}</p>
                </div>
            </div>
        </section>
    )
} 