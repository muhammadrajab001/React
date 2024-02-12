import React from 'react'
import img from './IMAGE.svg'
import img1 from './IMAGE (1).svg'
import img2 from './IMAGE (2).svg'
import img3 from './IMAGE (3).svg'
const Image = () => {
  return (
    <div>
      <img className='images' src={img} alt=''></img>
     {/* <img className='images1' src={img1} alt=''></img>
     <img className='images2' src={img2} alt=''></img>
     <img className='images3' src={img3} alt=''></img> */}
    </div>
  )
}

export default Image
