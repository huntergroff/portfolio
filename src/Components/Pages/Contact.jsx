import React, { useEffect } from 'react'

const Contact = (props) => {
  useEffect(() => {
    props.setHome(false);
  })

  return (
    <div>Contact</div>
  )
}

export default Contact