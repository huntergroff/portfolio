import React, { useEffect, useState } from 'react'
import { WorkItems } from '../../Content/WorkItems'

import '../../Styles/Work.css'

const Placeholder = () => {
  return (
    <div>Placeholder</div>
  )
}

const Work = (props) => {
  useEffect(() => {
    props.setHome(false);
  })

  //determines what work is displaying right now
  const [work, setWork] = useState("");
  const handleClick = (event) => {
    setWork(event.target.value);
  }

  let currentWork = <Placeholder />
  WorkItems.forEach(workItem => {
    if (work === workItem.title) {
      currentWork = workItem.element;
      return;
    }
  });
  
  return (
    <div id="work">
      <h1 className='heading'>Work</h1>
      <div className='container'>
        <div className='work-nav'>
          {WorkItems.map((workItem, index) => {
            return (
              <button onClick={handleClick} value={workItem.title} key={index}>{workItem.title}</button>
            )
          })}
        </div>
        {currentWork}
      </div>
    </div>
  )
}

export default Work