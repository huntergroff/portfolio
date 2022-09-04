import React, { useRef } from 'react'
import { Modern, Transitional, Oldstyle } from '../../Content/FormCounterformItems'
import '../../Styles/Typography.css'

//import all Momo letters
import MomoA from '../../Images/Typography/momo-a.js'
import MomoB from '../../Images/Typography/momo-b.js'
import MomoC from '../../Images/Typography/momo-c.js'
import MomoD from '../../Images/Typography/momo-d.js'
import MomoE from '../../Images/Typography/momo-e.js'
import MomoF from '../../Images/Typography/momo-f.js'
import MomoG from '../../Images/Typography/momo-g.js'
import MomoH from '../../Images/Typography/momo-h.js'
import MomoI from '../../Images/Typography/momo-i.js'
import MomoJ from '../../Images/Typography/momo-j.js'
import MomoK from '../../Images/Typography/momo-k.js'
import MomoL from '../../Images/Typography/momo-l.js'
import MomoM from '../../Images/Typography/momo-m.js'
import MomoN from '../../Images/Typography/momo-n.js'
import MomoO from '../../Images/Typography/momo-o.js'
import MomoP from '../../Images/Typography/momo-p.js'
import MomoQ from '../../Images/Typography/momo-q.js'
import MomoR from '../../Images/Typography/momo-r.js'
import MomoS from '../../Images/Typography/momo-s.js'
import MomoT from '../../Images/Typography/momo-t.js'
import MomoU from '../../Images/Typography/momo-u.js'
import MomoV from '../../Images/Typography/momo-v.js'
import MomoW from '../../Images/Typography/momo-w.js'
import MomoX from '../../Images/Typography/momo-x.js'
import MomoY from '../../Images/Typography/momo-y.js'
import MomoZ from '../../Images/Typography/momo-z.js'
import MomoGrid from '../../Images/Typography/momo-1grid.js'

const FormCounterformGrid = ({ gridList }) => {
    return (
        <div className='form-counterform-grid'>
            {gridList.map((gridItem, index) => {
                  return (
                      <img src={gridItem} key={index} className='form-counterform-letter' alt="modern letterform." />
                  );})
            }
        </div>
    )
}

const Momo = () => {
    return (
        <div id='momo'>
            <div className='container'>
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
                    <MomoG className='momo-grid-letter momo-grid-g'/>
                    <MomoH className='momo-grid-letter'/>
                    <MomoI className='momo-grid-letter'/>
                    <MomoJ className='momo-grid-letter momo-grid-j'/>
                    <MomoK className='momo-grid-letter'/>
                    <MomoL className='momo-grid-letter'/>
                    <MomoM className='momo-grid-letter'/>
                    <MomoN className='momo-grid-letter'/>
                    <MomoO className='momo-grid-letter'/>
                    <MomoP className='momo-grid-letter'/>
                    <p className='momo-blurb-1'>blah blah blah.</p>
                    <MomoQ className='momo-grid-letter'/>
                    <MomoR className='momo-grid-letter momo-grid-r'/>
                    <MomoS className='momo-grid-letter'/>
                    <MomoT className='momo-grid-letter'/>
                    <MomoU className='momo-grid-letter'/>
                    <p className='momo-blurb-2'>blah blah blah.</p>
                    <MomoV className='momo-grid-letter'/>
                    <MomoW className='momo-grid-letter'/>
                    <MomoX className='momo-grid-letter momo-grid-x'/>
                    <MomoY className='momo-grid-letter'/>
                    <MomoZ className='momo-grid-letter'/>
                    <p className='momo-blurb-3'>blah blah blah.</p>
                </div>
            </div>
        </div>
    )

}


const Typography = () => {
   const formCounterformRef = useRef(null)
   const formCounterformScroll = () => formCounterformRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
   const momoRef = useRef(null)
   const momoScroll = () => momoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
   const bodoniRef = useRef(null)
   const bodoniScroll = () => bodoniRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
   const calligramsRef = useRef(null)
   const calligramsScroll = () => calligramsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <>
        <div className='sidenav'>
            <button className='sidenav-button' onClick={calligramsScroll}>Calligrams</button>
            <button className='sidenav-button' onClick={momoScroll}>Momo</button>
            <button className='sidenav-button' onClick={bodoniScroll}>Bodoni Specimen</button>
            <button className='sidenav-button' onClick={formCounterformScroll}>Form / Counterform</button>
        </div>
        <div id="typography">
            <h1 className='heading'>WORK</h1>
            <h1 className='subheading'>Typography</h1>
            <div className='container'>
                <div id="form-counterform" ref={formCounterformRef}>
                    <div className='section-heading-box'>
                        <h1 className='section-heading'>Form / Counterform</h1>
                        <p className='section-subheading'>Detailed examinations opf 3 typefaces via close-up frames of individual letterforms.</p>
                    </div>
                    <div className='form-counterform-grids-container'>
                        <div className='grid-and-caption'>
                            <FormCounterformGrid gridList={Modern} />
                            <p className='grid-caption'>Bodoni</p>
                        </div>
                        <div className='grid-and-caption'>
                            <FormCounterformGrid gridList={Transitional} />
                            <p className='grid-caption'>Century</p>
                        </div>
                        <div className='grid-and-caption'>
                            <FormCounterformGrid gridList={Oldstyle} />
                            <p className='grid-caption'>Jenson</p>
                        </div>
                    </div>
                </div>
            </div>
            <div ref={momoRef}>
                <Momo />
            </div>     
        </div>
    </>
  )
}

export default Typography