import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'



const Work = (props) => {
  useEffect(() => {
    props.setHome(false);
  })
  
  return (
    <div id="work">
      <h1>Work</h1>
      <Link to="/work/htlo" >HTLO</Link>
      <Link to="/work/kinematix">Kinematix</Link>
      <Link to="/work/typography">Typography</Link>
    </div>
  )
}

export default Work