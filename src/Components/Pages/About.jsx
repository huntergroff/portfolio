import React, { useEffect } from 'react'

const About = (props) => {
  useEffect(() => {
    props.setHome(false);
  })

  return (
    <div>About</div>
  )
}

export default About