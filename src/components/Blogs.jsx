export const Blogs = ({imagescr,title,date,description,reading}) =>{
    return(

        <div className="personal-area">
            <img src={imagescr} alt="image" />
            <div className="blog_2">
                <h3> {title}</h3>
                <p className='date'>{date}</p>
                <p className='text'>{description}</p>
                <p className="reading">{reading}</p>
            </div>
        </div>
    )
}