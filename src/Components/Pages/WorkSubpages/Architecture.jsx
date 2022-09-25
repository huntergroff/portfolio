import React from 'react'
import LibraryPerspective from '../../../Images/Architecture/library-perspective.jpg'
import FPHTop from '../../../Images/Architecture/FPH-Top.png'
import FPHFront from '../../../Images/Architecture/FPH-Front.png'
import FPHIso from '../../../Images/Architecture/FPH-Iso.png'
import FPHElev from '../../../Images/Architecture/FPH-Elev.png'

import PlumCorner from '../../../Images/Architecture/Plum-Corner.png'
import PlumDetached from '../../../Images/Architecture/Plum-Detached.png'
import PlumElev from '../../../Images/Architecture/Plum-Elev.png'
import PlumIso from '../../../Images/Architecture/Plum-Iso.png'

import LibrarySection from '../../../Images/Architecture/Library-Section.jpg'

const Architecture = () => {
  return (
    <div id="architecture">
      <img className='work-img' src={LibraryPerspective} alt="Library Perspective" />
      <p className='work-subtitle'>Library Sectional Perspective</p>
      <img className='work-img' src={LibrarySection} alt="Library Section" />
      <p className='work-subtitle'>Library Sectional Elevation</p>
      <div id="fph">
        <img src={FPHTop} className='fph-top' alt="Free Plan House Top View"/>
        <div className='fph-small-pictures'>
          <img src={FPHFront} className='fph-small' alt="Free Plan House Front View"/>
          <img src={FPHIso} className='fph-small' alt="Free Plan House Isonometric View"/>
          <img src={FPHElev} className='fph-small' alt="Free Plan House Elevation View"/>
        </div>
      </div>
      <p className='work-subtitle'>Free Plan House Foam Model Pictures</p>
      <div id="plum">
        <img src={PlumDetached} className='work-img' alt="Plum House Detached Model" />
        <div className='plum-small-pictures'>
          <img src={PlumCorner} alt="Plum House Corner View"/>
          <img src={PlumElev} alt="Plum House Elevatio View"/>
          <img src={PlumIso} alt="Plum House Isonometric View"/>
        </div>
      </div>
      <p className='work-subtitle'>Plum House Foam Model Pictures</p>
    </div>
  )
}

export default Architecture