import React from 'react'
import { ThemeContext } from '../App'
import { MdLightMode, MdOutlineLightMode, MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import '../Styles/ThemeToggler.css'

const ThemeToggler = () => {
    return (
      <ThemeContext.Consumer>
        {value => 
        <div className='theme-toggler' onClick={value.toggleTheme}>
          {value.theme === "light" ? <MdLightMode className='toggle-icon' /> : <MdOutlineLightMode className='toggle-icon'/>}
          {value.theme === "light" ? <MdOutlineDarkMode className='toggle-icon'/> : <MdDarkMode className='toggle-icon'/>}
        </div>
        }
      </ThemeContext.Consumer>
    )
}

export default ThemeToggler