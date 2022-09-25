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
import September1 from '../../../Images/Kinematix/september-events-1.jpg'
import September2 from '../../../Images/Kinematix/september-events-2.jpg'
import September3 from '../../../Images/Kinematix/september-events-3.jpg'
import WWMaxcy from '../../../Images/Kinematix/WW-Maxcy.jpg'
import WWMattDalya from '../../../Images/Kinematix/WW-MattDalya.jpg'
import WWBanner from '../../../Images/Kinematix/WW-Banner.jpg'

import BimInsta1 from '../../../Images/Kinematix/bim-insta-1.jpg'
import BimInsta2 from '../../../Images/Kinematix/bim-insta-2.jpg'
import BimInsta3 from '../../../Images/Kinematix/bim-insta-3.jpg'
import BimInsta4 from '../../../Images/Kinematix/bim-insta-4.jpg'
import BimInsta5 from '../../../Images/Kinematix/bim-insta-5.jpg'
import BimInsta6 from '../../../Images/Kinematix/bim-insta-6.jpg'
import BimBanner from '../../../Images/Kinematix/bim-banner.jpg'
import BimShowOrder from '../../../Images/Kinematix/bim-show-order.jpg'

const KineSection = ({title, color1, color2, color3, color4, color5, fontname}) => {
  return (
    <div className='section'>
      <h1 className='section-header'>{title}</h1>
      <div className='color-scheme'>
        <div className='color' style={{backgroundColor:`${color1}`}}></div>
        <div className='color' style={{backgroundColor:`${color2}`}}></div>
        <div className='color' style={{backgroundColor:`${color3}`}}></div>
        <div className='color' style={{backgroundColor:`${color4}`}}></div>
        <div className='color' style={{backgroundColor:`${color5}`}}></div>
        <p className='font'>{fontname}</p>
      </div>
    </div>
  )
}

const Kinematix = () => {
  return (
    <div id="kinematix">
      <KineSection 
        title="Summer Posts"
        color1="#FFFFFF"
        color2="#5FB2D5"
        color3="#9735D4"
        color4="#602AC3"
        color5="#000000"
        fontname="Proxima Nova"
      />
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
      <KineSection 
        title="September Posts"
        color1="#FCA900"
        color2="#5FB2D5"
        color3="#602AC3"
        color4="#393939"
        color5="#000000"
        fontname="Proxima Nova"
      />
      <div className='september-box'>
        <img className='september-img' src={September1} alt="September Events Part 1"/>
        <img className='september-img' src={September2} alt="September Events Part 2"/>
        <img className='september-img' src={September3} alt="September Events Part 3"/>
      </div>
      <p className='work-subtitle'>Banner formatted for 3-slide instagram post</p>
      <div className='big-summer-workshops'>
        <img className='summer-workshop-big work-img' src={WWMaxcy} alt="Maxcy Welcome Week Workshop Edit"/>
        <img className='summer-workshop-big work-img' src={WWMattDalya} alt="Matt and Dalya Welcome Week Workshop Edit"/>
      </div>
      <p className='work-subtitle'>INSTAGRAM FORMATTED Welcome Week Posters</p>
      <div className='fb-summer-workshops'>
        <img className='work-img' src={WWBanner} alt="Welcome Week Workshop Banner" />
      </div>
      <p className='work-subtitle'>Facebook Formatted Welcome Week Banner</p>
      <KineSection 
        title="Bodies in Motion"
        color1="#F2ECCC"
        color2="#F3B127"
        color3="#4175A4"
        color4="#B81A0F"
        color5="#1C1C1C"
        fontname="Brother 1816"
      />
      <img className='work-img' src={BimBanner} alt="Bodies in Motion FB Graphic"/>
      <p className='work-subtitle'>Facebook Formatted Bodies in Motion Banner</p>
      <div className='bim-box'>
        <img className='bim-img' src={BimInsta4} alt="Bodies In Motion Instagram Part 1"/>
        <img className='bim-img' src={BimInsta5} alt="Bodies In Motion Instagram Part 2"/>
        <img className='bim-img' src={BimInsta6} alt="Bodies In Motion Instagram Part 3"/>
        <img className='bim-img' src={BimInsta1} alt="Bodies In Motion Instagram Part 4"/>
        <img className='bim-img' src={BimInsta2} alt="Bodies In Motion Instagram Part 5"/>
        <img className='bim-img' src={BimInsta3} alt="Bodies In Motion Instagram Part 6"/>
      </div>
      <p className='work-subtitle'>Banner Formatted for 6-slide instagram post</p>
      <img className='work-img' src={BimShowOrder} alt="Bodies in Motion Show Order Card"/>
      <p className='work-subtitle'>Show Order Card for Print</p>
    </div>
  )
}

export default Kinematix