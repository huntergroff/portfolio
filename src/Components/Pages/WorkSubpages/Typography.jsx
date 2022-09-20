import React from 'react'

//import all Momo letters
import MomoA from '../../../Images/Typography/momo-a.js'
import MomoB from '../../../Images/Typography/momo-b.js'
import MomoC from '../../../Images/Typography/momo-c.js'
import MomoD from '../../../Images/Typography/momo-d.js'
import MomoE from '../../../Images/Typography/momo-e.js'
import MomoF from '../../../Images/Typography/momo-f.js'
import MomoG from '../../../Images/Typography/momo-g.js'
import MomoH from '../../../Images/Typography/momo-h.js'
import MomoI from '../../../Images/Typography/momo-i.js'
import MomoJ from '../../../Images/Typography/momo-j.js'
import MomoK from '../../../Images/Typography/momo-k.js'
import MomoL from '../../../Images/Typography/momo-l.js'
import MomoM from '../../../Images/Typography/momo-m.js'
import MomoN from '../../../Images/Typography/momo-n.js'
import MomoO from '../../../Images/Typography/momo-o.js'
import MomoP from '../../../Images/Typography/momo-p.js'
import MomoQ from '../../../Images/Typography/momo-q.js'
import MomoR from '../../../Images/Typography/momo-r.js'
import MomoS from '../../../Images/Typography/momo-s.js'
import MomoT from '../../../Images/Typography/momo-t.js'
import MomoU from '../../../Images/Typography/momo-u.js'
import MomoV from '../../../Images/Typography/momo-v.js'
import MomoW from '../../../Images/Typography/momo-w.js'
import MomoX from '../../../Images/Typography/momo-x.js'
import MomoY from '../../../Images/Typography/momo-y.js'
import MomoZ from '../../../Images/Typography/momo-z.js'
import MomoGrid from '../../../Images/Typography/momo-1grid.svg'
import '../../../Styles/Typography.css'

//import bodoni posters 
import BodoniBlue from '../../../Images/Typography/bodoni-blue.jpg'
import BodoniPurp from '../../../Images/Typography/bodoni-purple.jpg'
import BodoniRose from '../../../Images/Typography/bodoni-rose.jpg'

const Momo = () => {
    return (
        <div id='momo'>
            <div className=''>
                <div className='momo-header'>
                    <div className='momo-title'>
                        <MomoM className='momo-header-letter'/>
                        <MomoO className='momo-header-letter'/>
                        <MomoM className='momo-header-letter'/>
                        <MomoO className='momo-header-letter'/>
                    </div> 
                    <div className='momo-subtitle'>
                        <div className='top'>
                            <MomoM className='momo-subtitle-letter'/>
                            <MomoO className='momo-subtitle-letter'/>
                            <MomoN className='momo-subtitle-letter'/>
                            <MomoO className='momo-subtitle-letter'/>
                            <MomoS className='momo-subtitle-letter'/>
                            <MomoP className='momo-subtitle-letter'/>
                            <MomoA className='momo-subtitle-letter'/>
                            <MomoC className='momo-subtitle-letter'/>
                            <MomoE className='momo-subtitle-letter'/>
                        </div>
                        <div className='bottom'>
                            <MomoM className='momo-subtitle-letter'/>
                            <MomoO className='momo-subtitle-letter'/>
                            <MomoD className='momo-subtitle-letter'/>
                            <MomoE className='momo-subtitle-letter'/>
                            <MomoR className='momo-subtitle-letter'/>
                            <MomoN className='momo-subtitle-letter'/>
                        </div>
                    </div>
                </div>
                <div className='momo-grid'>
                    <MomoA className='momo-grid-letter'/>
                    <MomoB className='momo-grid-letter'/>
                    <MomoC className='momo-grid-letter'/>
                    <MomoD className='momo-grid-letter'/>
                    <MomoE className='momo-grid-letter'/>
                    <MomoF className='momo-grid-letter'/>
                    <MomoG className='momo-grid-big momo-grid-g'/>
                    <img src={MomoGrid} className='momo-grid-g momo-grid-big momo-grid-lines' alt="gridlines."/>
                    <MomoH className='momo-grid-letter'/>
                    <MomoI className='momo-grid-letter'/>
                    <MomoJ className='momo-grid-big momo-grid-j'/>
                    <img src={MomoGrid} className='momo-grid-j momo-grid-big momo-grid-lines' alt="gridlines."/>
                    <MomoK className='momo-grid-letter'/>
                    <MomoL className='momo-grid-letter'/>
                    <MomoM className='momo-grid-letter'/>
                    <MomoN className='momo-grid-letter'/>
                    <MomoO className='momo-grid-letter'/>
                    <MomoP className='momo-grid-letter'/>
                    <p className='momo-blurb-1'>Inspired by typefaces such as Bodoni and Didot, "MoMo" brings the serifs and stroke contrast of modern fonts to a monospace format.</p>
                    <MomoQ className='momo-grid-letter'/>
                    <MomoR className='momo-grid-big momo-grid-r'/>
                    <img src={MomoGrid} className='momo-grid-r momo-grid-big momo-grid-lines' alt="gridlines."/>
                    <MomoS className='momo-grid-letter'/>
                    <MomoT className='momo-grid-letter'/>
                    <MomoU className='momo-grid-letter'/>
                    <p className='momo-blurb-2'>The first phase of the project included the constraint of an 8x8 pixel grid, giving this draft of the typeface a retro "space-invaders" appearance.</p>
                    <MomoV className='momo-grid-letter'/>
                    <MomoW className='momo-grid-letter'/>
                    <MomoX className='momo-grid-big momo-grid-x'/>
                    <img src={MomoGrid} className='momo-grid-x momo-grid-big momo-grid-lines' alt="gridlines."/>
                    <MomoY className='momo-grid-letter'/>
                    <MomoZ className='momo-grid-letter'/>
                    <p className='momo-blurb-3'>I hope to continue the project soon by adding lowercase letters, symbols, and numbers!</p>
                </div>
                <div className='momo-list'>
                    <MomoA className='momo-list-letter'/>
                    <MomoB className='momo-list-letter'/>
                    <MomoC className='momo-list-letter'/>
                    <MomoD className='momo-list-letter'/>
                    <MomoE className='momo-list-letter'/>
                    <MomoF className='momo-list-letter'/>
                    <MomoG className='momo-list-letter'/>
                    <MomoH className='momo-list-letter'/>
                    <MomoI className='momo-list-letter'/>
                    <MomoJ className='momo-list-letter'/>
                    <MomoK className='momo-list-letter'/>
                    <MomoL className='momo-list-letter'/>
                    <MomoM className='momo-list-letter'/>
                    <MomoN className='momo-list-letter'/>
                    <MomoO className='momo-list-letter'/>
                    <MomoP className='momo-list-letter'/>
                    <MomoQ className='momo-list-letter'/>
                    <MomoR className='momo-list-letter'/>
                    <MomoS className='momo-list-letter'/>
                    <MomoT className='momo-list-letter'/>
                    <MomoU className='momo-list-letter'/>
                    <MomoV className='momo-list-letter'/>
                    <MomoW className='momo-list-letter'/>
                    <MomoX className='momo-list-letter'/>
                    <MomoY className='momo-list-letter'/>
                    <MomoZ className='momo-list-letter'/>
                </div>
            </div>
        </div>
    )
}

const Bodoni = () => {
  return (
    <div id="bodoni">
      <div className='mini-bodonis'>
          <img src={BodoniRose} alt="Bodoni Typeface Specimen Poster."/>
          <img src={BodoniBlue} alt="Bodoni Typeface Specimen Poster."/>
          <img src={BodoniPurp} alt="Bodoni Typeface Specimen Poster."/>
      </div>
      <div className='big-bodoni'>
          <img src={BodoniRose} alt="Bodoni Typeface Specimen Poster."/>
      </div>
      </div>     
  )
}

const Typography = () => {
  return (
    <div>
      <Bodoni/>
      <p className='work-subtitle'>BODONI SPECIMEN POSTERS</p>
      <Momo />
      <p className='work-subtitle'>MONOSPACE MODERN TYPEFACE PROJECT</p>
    </div>
  )
}

export default Typography