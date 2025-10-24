export const Testimonials = ({images, message, person,profession}) => {
    return(
<div className='container-1'>
<img src={images} alt="" />
<p>{message} </p>
  <div className='contain'>
    <h3>{person}</h3>
    <p>{profession}</p>
  </div>
  </div>
    )

}