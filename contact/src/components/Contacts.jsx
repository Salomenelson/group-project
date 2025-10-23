export const Contacts = ({imagesscr,titles,location}) =>{
    return(
        <div className="contact-info">
        <div className="address">
            <img src={imagesscr} alt="Address" />
            <div className="address_1">
            <h4>{titles}</h4>
            <p>{location}</p>
            </div>
        </div>
    </div>
    )
    }