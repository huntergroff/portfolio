import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { MenuItems } from '../../Content/MenuItems';
import ThemeToggler from '../ThemeToggler';
import '../../Styles/Home.css'
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs'

const Home = (props) => {
  useEffect(() => {
    props.setHome(true);
  })
  
  return (
    <div id='home'>
      <ThemeToggler home={true}/>
      <div className='home-center'>
        <div className='home-title'>
          <h1>logo</h1>
          <h1>Hunter Groff</h1>
        </div>
        <ul className='home-nav'>
          {MenuItems.map((menuItem, index) => {
            if (menuItem.title === "Home") {
              return (<></>)
            } else {
                  return (
                    <li key={index}>
                      <NavLink to={menuItem.link}>{menuItem.title}</NavLink>
                    </li>
                  );
              }
            }
          )}
        </ul>
      </div>
      <div className='home-socials'>
        <a href="https://github.com/huntergroff" target="_blank" rel="noreferrer">
          <BsGithub className='home-social-logo' />
        </a>
        <a href="https://www.instagram.com/nothuntergroff/" target="_blank" rel="noreferrer">
          <BsInstagram className='home-social-logo' />
        </a>
        <a href="https://www.linkedin.com/in/hunter-groff/" target="_blank" rel="noreferrer">
          <BsLinkedin className='home-social-logo' />
        </a>
      </div>
    </div>
  )
}

export default Home