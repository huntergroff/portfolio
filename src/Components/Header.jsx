import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { MenuItems } from '../Content/MenuItems'
import '../Styles/Header.css'
import { IoMdClose } from 'react-icons/io';
import { RiMenuFill } from 'react-icons/ri';
import ThemeToggler from './ThemeToggler';

const Header = (props) => {
  const [expand, setExpand] = useState(true);
  const toggleMenu = () => setExpand(!expand);

  return (
    <div id="header" className={`${expand && !props.home ? 'expand' : ''} ${props.home ? 'hide' : ''}`}>
      <div className='arrow-and-theme'>
        {expand ? <IoMdClose className='arrow' onClick={toggleMenu} /> : <RiMenuFill className='arrow' onClick={toggleMenu}/>}
        <ThemeToggler home={false} />
      </div>
      <ul>
          {MenuItems.map((menuItem, index) => {
                  return (
                      <li key={index}>
                          <NavLink to={menuItem.link} onClick={toggleMenu}>{menuItem.title}</NavLink>
                      </li>
                  );})
          }
      </ul>
    </div>
  )
}

export default Header