export const Testimonials = ({images, message, person,profession}) => {
  return(
    <div className='container-1 rounded-[10px] shadow-[0_8px_20px_rgba(0,0,0,0.15)'>
      <div className="flex justify-center">
        <img src={images} alt="" />
      </div>
      <p>{message} </p>
      <div className='contain'>
        <h3>{person}</h3>
        <p>{profession}</p>
      </div>
    </div>
  )

}