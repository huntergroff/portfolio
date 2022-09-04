import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { MenuItems } from '../Content/MenuItems'
import '../Styles/Header.css'
import { FiArrowLeft } from 'react-icons/fi';
import ThemeToggler from './ThemeToggler';


const Header = () => {
  const [expand, setExpand] = useState(true);
  const toggleMenu = () => setExpand(!expand);

  return (
    <div id="header" className={expand ? 'expand' : ''}>
      <div className='arrow-and-theme'>
        <FiArrowLeft className={`arrow ${expand ? 'expand' : ''}`} onClick={toggleMenu}/>
        <ThemeToggler />
      </div>
      <ul>
          {MenuItems.map((menuItem, index) => {
                  return (
                      <li key={index}>
                          <NavLink to={menuItem.link}>{menuItem.title}</NavLink>
                      </li>
                  );})
          }
      </ul>
    </div>
  )
}

export default Header