import React, { useRef } from 'react'
import { Modern, Transitional, Oldstyle } from '../../Content/FormCounterformItems'
import '../../Styles/Typography.css'

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
        </div>
    </>
  )
}

export default Typography