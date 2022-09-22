import React from 'react'
import WowThumb from '../../../Images/HTLO/wow-thumb.jpg'
import BBHThumb from '../../../Images/HTLO/bbh-thumb.jpg'
import LovesickThumb from '../../../Images/HTLO/lovesick-thumb2.jpg'


const HTLO = () => {
  return (
    <div id='htlo'>
      <img src={WowThumb} alt="Wow Freestyle Thumbnail" className='work-img'></img>
      <p className='work-subtitle'>YOUTUBE THUMBNAIL</p>
      <img src={LovesickThumb} alt="Lovesick Thumbnail" className='work-img'></img>
      <p className='work-subtitle'>YOUTUBE THUMBNAIL</p>
      <img src={BBHThumb} alt="Broken Hearts Thumbnail" className='work-img'></img>
      <p className='work-subtitle'>YOUTUBE THUMBNAIL</p>
    </div>
  )
}

export default HTLO