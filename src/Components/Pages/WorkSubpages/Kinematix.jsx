import React from 'react'
import IGMatt from '../../../Images/Kinematix/Summer-IG-Matt.jpg'
import IGCynthia from '../../../Images/Kinematix/Summer-IG-Cynthia.jpg'
import IGMahin from '../../../Images/Kinematix/Summer-IG-Mahin.jpg'
import IGJuliaLopi from '../../../Images/Kinematix/Summer-IG-JuliaLopi.jpg'
import IGMarie from '../../../Images/Kinematix/Summer-IG-Marie.jpg'
import IGMahema from '../../../Images/Kinematix/Summer-IG-Mahema.jpg'
import FBMatt from '../../../Images/Kinematix/Summer-FB-Matt.jpg'
import FBCynthia from '../../../Images/Kinematix/Summer-FB-Cynthia.jpg'
import FBJuliaLopi from '../../../Images/Kinematix/Summer-FB-JuliaLopi.jpg'
import FBMarie from '../../../Images/Kinematix/Summer-FB-Marie.jpg'
import Ebo1 from '../../../Images/Kinematix/ebo-1.jpg'
import Ebo2 from '../../../Images/Kinematix/ebo-2.jpg'
import Ebo3 from '../../../Images/Kinematix/ebo-3.jpg'
import Ebo4 from '../../../Images/Kinematix/ebo-4.jpg'

const Kinematix = () => {
  return (
    <div id="kinematix">
      <div className='summer-workshops'>
        <div className='big-summer-workshops'>
          <img className='summer-workshop-big work-img' src={IGMatt} alt="Matt Summer Workshop Edit"/>
          <img className='summer-workshop-big work-img' src={IGCynthia} alt="Cynthia Summer Workshop Edit"/>
        </div>
        <div className='small-summer-workshops'>
          <img className='summer-workshop-small' src={IGMahin} alt="Mahin Summer Workshop Edit"/>
          <img className='summer-workshop-small' src={IGJuliaLopi} alt="Julia and Lopi Summer Workshop Edit"/>
          <img className='summer-workshop-small' src={IGMarie} alt="Marie Summer Workshop Edit"/>
          <img className='summer-workshop-small' src={IGMahema} alt="Mahema Summer Workshop Edit"/>
        </div>
      </div>
      <p className='work-subtitle'>INSTAGRAM FORMATTED SUMMER WORKSHOP POSTERS</p>
      <div className='fb-summer-workshops'>
        <img className='work-img' src={FBMarie} alt="Marie FB Summer Workshop Edit" />
        <div className='small-summer-workshops'>
          <img className='summer-workshop-small-fb' src={FBMatt} alt="Matt Summer Workshop Edit"/>
          <img className='summer-workshop-small-fb' src={FBJuliaLopi} alt="Julia and Lopi Summer Workshop Edit"/>
          <img className='summer-workshop-small-fb' src={FBCynthia} alt="Cynthia Summer Workshop Edit"/>
        </div>
      </div>
      <p className='work-subtitle'>FACEBOOK FORMATTED SUMMER WORKSHOP POSTERS</p>
      <div className='ebo-box'>
        <img className='ebo-img' src={Ebo1} alt="Eboard Banner Part 1"/>
        <img className='ebo-img' src={Ebo2} alt="Eboard Banner Part 2"/>
        <img className='ebo-img' src={Ebo3} alt="Eboard Banner Part 3"/>
        <img className='ebo-img' src={Ebo4} alt="Eboard Banner Part 4"/>
      </div>
      <p className='work-subtitle'>Banner formatted for 4-slide instagram post</p>
    </div>
  )
}

export default Kinematix