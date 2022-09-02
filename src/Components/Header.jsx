import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { MenuItems } from '../Content/MenuItems'
import '../Styles/Header.css'
import { MdArrowLeft } from 'react-icons/md';

const Header = () => {
  const [expand, setExpand] = useState(true);
  const toggleMenu = () => setExpand(!expand);

  return (
    <div id="header" className={expand ? 'expand' : ''}>
      <MdArrowLeft className={`arrow ${expand ? 'expand' : ''}`} onClick={toggleMenu}/>
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