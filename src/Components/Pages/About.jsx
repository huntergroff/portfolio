import React, { useEffect } from 'react'
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import '../../Styles/About.css'
import Headshot from '../../Images/Headshot.png'

const About = (props) => {
  useEffect(() => {
    props.setHome(false);
  })

  return (
    <div id="about">
      <h1 className="heading">About</h1>
      <div id="huntergroff">
        <h3>Hunter Groff</h3>
        <div className='blurbs-and-image'>
          <div className='left-blurbs'>
            <h2>Education</h2>
            <p>Majoring in Computer Science and Interaction Design with a minor in Architecture and Urban History at Northeastern University</p>
            <h2>Passions</h2>
            <p>Video editing, UI/UX design, dance, music production, soccer</p>
            <h2>Follow Me</h2>
            <div className='about-socials'>
              <a href="https://github.com/huntergroff" target="_blank" rel="noreferrer">
                <BsGithub className='about-social-logo' />
              </a>
              <a href="https://www.instagram.com/nothuntergroff/" target="_blank" rel="noreferrer">
                <BsInstagram className='about-social-logo' />
              </a>
              <a href="https://www.linkedin.com/in/hunter-groff/" target="_blank" rel="noreferrer">
                <BsLinkedin className='about-social-logo' />
              </a>
            </div>
          </div>
        <img src={Headshot} alt="Hunter Groff" className='about-headshot'/>
        <div className='right-blurbs'>
          <h2>Experience</h2>
          <ul>
            <li>Software Engineering Co-op for CarGurus</li>
            <li>Web Developer for Synergy Center for Dance</li>
            <li>Marketing Intern for Breezy Hill Marketing</li>
            <li>Public Relations Coordinator for Kinematix Dance Troupe</li>
          </ul>
          <h2>Skills</h2>
          <p>Adobe Creative Suite, HTML, CSS, JavaScript, Java, Python, React.js</p>
        </div>
      </div>
      <div className='about-section'>
        <h4>Hi, I'm Hunter!</h4>
        <p>I grew up in Jericho, Vermont. As a kid, I always loved to be creative -- I wrote songs on the piano, 
          filmed and edited videos with my friends, and became an avid dancer. I knew that I wanted to pursue a 
          creative career, but I also wanted to challenge myself intellectually and academically. After enrolling 
          at Northeastern University, I spent a year in the Architecture program before transferring to my current 
          major, Computer Science and Interaction Design.</p>
      </div>
      <div className='about-section'>
        <h4>Computer Science & Design</h4>
        <p>
          As a fourth year computer science and design student, I strive to be capable in both the front end 
          and the back end.  I am passionate about web development, designing user interfaces, and iterative design practices.
        </p>
      </div>
      <div className='about-section'>
        <h4>Iterative Design Practices</h4>
        <p>
          During my time in the Architecture program at Northeastern, I was introduced to the concept of iterative design. 
          Since then, I have grown comfortable with these practices, and continue to apply them in my current work. In both 
          technical and artistic settings, my work strategies include developing ideas through drafts, rolling out sequential 
          improvements, and constantly viewing my products through a critical lens.
        </p>
      </div>
      </div>
    </div>
  )
}

export default About