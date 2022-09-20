import React, { useEffect } from 'react'
import '../../Styles/Projects.css'
import { FiExternalLink } from 'react-icons/fi'
import { BsGithub } from 'react-icons/bs'


const Project = ({title, date, subtitle, iframe, iframelink, iframetitle, blurb, link1, link1text, link2, link2text}) => {
  return (
    <div className='project'>
      <div className='project-header'>
        <h2 className='project-title'>{title}</h2>
        <h2 className='project-date'>{date}</h2>
      </div>
      <h2 className='project-subheader'>{subtitle}</h2>
      <div className='project-content'>
        {iframe ? <iframe src={iframelink} title={iframetitle}/> : <></>}
        <p>{blurb}</p>
        <div className='project-links'>
          <a href={link1} target="blank" rel="noreferrer" className='project-link'>
            <FiExternalLink className='project-link-icon'/>
            <h2 className='project-link-text'>{link1text}</h2>
          </a>
          <a href={link2} target="blank" rel="noreferrer" className='project-link'>
            <BsGithub className='project-link-icon'/>
            <h2 className='project-link-text'>{link2text}</h2>
          </a>
        </div>
      </div>
    </div>
  )
}


const Projects = (props) => {
    useEffect(() => {
        props.setHome(false);
    })

  return (
    <div id="projects">
      <h1 className='heading'>Projects</h1>
      <div className='container all-projects'>
        <Project 
          title="Synergy Center For Dance: Website"
          date="2022"
          subtitle="React.js, HTML, CSS, Javascript"
          iframe={true}
          iframelink="https://miagroff.com/#/"
          iframetitle="Synergy Dance Website"
          blurb="Synergy center for Dance and the Performing Arts is a small dance studio based in Jericho, VT. 
          This summer, I had the pleasure of building a new website for them. I worked alone on the design and coding
          for the project, and worked with the studio owner to polish and host the website using Ionus. 
          I built the site with React.js, utilizing React hooks, React router, and React icons libraries. 
          The website is fully mobile responsive with custom CSS. "
          link1="https://miagroff.com/#/"
          link1text="Visit Site"
          link2="https://github.com/huntergroff/Synergy"
          link2text="View Code"
        />
        <Project 
          title="Personal Portfolio"
          date="2022"
          subtitle="React.js, HTML, CSS, Javascript"
          iframe={false}
          blurb="You’re already here! I built this website for myself with React.js as a project to practice 
          my design and coding skills. I utilized React hooks (including useState, useEffect, useContext), 
          React Router, and React icons libraries. The website is fully mobile responsive with custom CSS."
          link1="http://localhost:3000/#/"
          link1text="Visit Site (Again)"
          link2="https://github.com/huntergroff/portfolio"
          link2text="View Code"
        />
        <Project 
          title="My Favorite Artist"
          date="2021"
          subtitle="HTML, CSS, Javascript"
          iframe={true}
          iframelink="https://my-favorite-artist.glitch.me/"
          iframetitle="My Favroite Artist"
          blurb='In this project, my partner _____ and I used multiple APIs to aggregate data about a user-provided 
          musical artist and display it on a “dashboard.” The site has responsive CSS and something else.'
          link1="https://my-favorite-artist.glitch.me/"
          link1text="Visit Site"
          link2="https://github.com/huntergroff/My-Favorite-Artist"
          link2text="View Code"
        />
        <Project 
          title="Mario-themed Google Doodle"
          date="2021"
          subtitle="HTML, CSS, Javascript"
          iframe={true}
          iframelink="https://huntergroff.github.io/Experience-and-Interaction-Website/GOOGLE%20DOODLE/index.html"
          iframetitle="My Favroite Artist"
          blurb='A “google doodle” I built with a Super Mario Bros theme. The project was a chance for me to experiment with CSS transitions and layouts.'
          link1="https://huntergroff.github.io/Experience-and-Interaction-Website/GOOGLE%20DOODLE/index.html"
          link1text="Visit Site"
          link2="https://github.com/huntergroff/Experience-and-Interaction-Website/tree/main/GOOGLE%20DOODLE"
          link2text="View Code"
        />
      </div>
    </div>
  )
}

export default Projects