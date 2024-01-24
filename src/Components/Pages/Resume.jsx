import React, { useEffect, useRef } from "react";
import "../../Styles/Resume.css";
import { TbFileDownload } from "react-icons/tb";
import ResumePDF from "../../Content/Hunter Groff Resume Spring 2024.pdf";

const Resume = (props) => {
  useEffect(() => {
    props.setHome(false);
  });

  const educationRef = useRef(null);
  const educationScroll = () =>
    educationRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const technicalRef = useRef(null);
  const technicalScroll = () =>
    technicalRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const projectsRef = useRef(null);
  const projectsScroll = () =>
    projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const workRef = useRef(null);
  const workScroll = () =>
    workRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  const leadershipRef = useRef(null);
  const leadershipScroll = () =>
    leadershipRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  const interestsRef = useRef(null);
  const interestsScroll = () =>
    interestsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      <div className="sidenav">
        <button className="sidenav-button" onClick={interestsScroll}>
          Interests
        </button>
        <button className="sidenav-button" onClick={leadershipScroll}>
          Leadership
        </button>
        <button className="sidenav-button" onClick={workScroll}>
          Experience
        </button>
        <button className="sidenav-button" onClick={projectsScroll}>
          Projects
        </button>
        <button className="sidenav-button" onClick={technicalScroll}>
          Skills
        </button>
        <button className="sidenav-button" onClick={educationScroll}>
          Education
        </button>
      </div>
      <div id="resume">
        <h1 className="heading">Resume</h1>
        <div className="container">
          <a
            className="download-button"
            download="Hunter Groff Resume 2022.pdf"
            href={ResumePDF}
          >
            <TbFileDownload className="download-icon" />
            <h1 className="download-text">download (abridged)</h1>
          </a>
          <div className="resume-section" id="education" ref={educationRef}>
            <h2>Education</h2>
            <div className="title-and-date">
              <h3>Northeastern University | Boston, MA</h3>
              <p className="date">September 2019 - May 2024</p>
            </div>
            <p className="text">
              GPA: 3.97/4.0
              <br />
              Major in Computer Science and Interaction Design, Minor in
              Architecture and Urban History
              <br />
              <br />
              <i>Awards</i>
              <br />
              7/7 Semesters Dean's List
              <br />
              Northeastern Merit Scholarship Recipient
              <br />
              Yazijian Memorial Scholarship Recipient (Fall 2020)
              <br />
              ARCH1120 Design Award Nominee (Spring 2020)
              <br />
              <br />
              <i>Relevant Coursework</i>
              <br />
              Fundamentals of Computer Science 1 & 2, Object-Oriented Design,
              Algorithms and Data, Web Development, Fundamentals of Software
              Engineering, Information Design, Programming Basics, Typography 1
              & 2, Interaction Design 1 & 2, Artificial Intelligence
            </p>
            <br />
            <br />
            <div className="title-and-date">
              <h3>Mt. Mansfield Union High School | Jericho, VT</h3>
              <p className="date">September 2015 - May 2019</p>
            </div>
            <p className="text">
              GPA: 4.1/4.3
              <br />
              <br />
              <i>Awards</i>
              <br />
              Summa Cum Laude
              <br />
              National Merit Scholarship Recipient
              <br />
              <br />
              National Honor Society
              <br />
              Cougar House Student Council
              <br />
              Varsity Soccer (Captain)
              <br />
              Varsity Dance (Captain)
              <br />
              <br />
            </p>
          </div>
          <div
            className="resume-section"
            id="technical-knowledge"
            ref={technicalRef}
          >
            <h2>Technical Knowledge</h2>
            <h3>Computer Science</h3>
            <ul>
              <li>
                <i>Proficient With:</i> Java, JavaScript, HTML, CSS, React,
                Node, Swift
              </li>
              <li>
                <i>Familiar With:</i> Python, Typescript, Mongo DB, Objective-C,
                Tailwind / Bootstrap CSS, Freemarker, Apache Struts, SQL
              </li>
            </ul>
            <br />
            <h3>Design</h3>
            <ul>
              <li>
                <i>Proficient With:</i> Photoshop, Illustrator, Premiere,
                InDesign, XD, AutoCAD
              </li>
              <li>
                <i>Familiar With:</i> Figma, After Effects, Rhino, Sketchup
              </li>
            </ul>
          </div>
          <div className="resume-section" id="projects" ref={projectsRef}>
            <h2>Projects</h2>
            <div className="title-and-date">
              <h3>
                "Wishy" Wishlist App |{" "}
                <i>React.js, Typescript, HTML, Tailwind CSS</i>
              </h3>
              <p className="date">Nov. 2023</p>
            </div>
            <ul>
              <li>
                Designed and developed a web application where users could
                create and share wishlists and follow other users.
              </li>
              <li>
                Connected a Mongo database with 5 schemas to a React.js web app
                using Node.js and Express.js with REST practices.
              </li>
              <li>
                Integrated Target RedCircle API to fetch and cache data and
                products from Target.com for use in user-created wishlists.
              </li>
            </ul>
            <br />
            <div className="title-and-date">
              <h3>
                <a
                  href="https://www.synergydance.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Synergy Dance Website
                </a>{" "}
                | <i>React.js, Javascript, HTML, CSS, XD, Ionos</i>
              </h3>
              <p className="date">Aug. 2022</p>
            </div>
            <ul>
              <li>
                Designed and developed a dance studio website in React.js with
                mobile-responsive CSS.
              </li>
              <li>
                Compiled multiple views into a single-page web app with a custom
                navigation menu using React Router.
              </li>
              <li>
                Created interactive mockup of the website using Adobe XD for
                critique with studio owners before converting to code.
              </li>
              <li>
                Collaborated with the studio owner to host the website using
                Ionos framework.
              </li>
            </ul>
            <br />
            <div className="title-and-date">
              <h3>
                Personal Portfolio Website |{" "}
                <i>React.js, Javascript, HTML, CSS, React Hooks</i>
              </h3>
              <p className="date">Sept. 2022</p>
            </div>
            <ul>
              <li>
                Designed and coded a React web-app portfolio to host graphic
                design work and coding projects.
              </li>
              <li>
                Implemented React hooks to create a “light mode - dark mode”
                toggle for the website UI.
              </li>
            </ul>
            <br />
            <div className="title-and-date">
              <h3>
                Flood-It Game | <i>Java, Eclipse</i>
              </h3>
              <p className="date">Mar. 2021</p>
            </div>
            <ul>
              <li>
                Developed a game in Java where the player gradually floods a
                gameboard with different colors.
              </li>
              <li>
                Manipulated an imperative Java library to create an interactive
                game with multiple difficulty and customization settings.
              </li>
            </ul>
          </div>
          <div className="resume-section" id="work-experience" ref={workRef}>
            <h2>Work Experience</h2>
            <div className="title-and-date">
              <h3>{`iOS Engineering Co-op | Notability (Ginger Labs, Inc.), San Francisco, CA`}</h3>
              <p className="date">Jan. 2023 - June 2023</p>
            </div>
            <ul>
              <li>
                Owned and managed the code for the note page management user
                interface. Implemented new designs, created and assigned
                tickets, improved functionality, and authorized changes for this
                area of the app.
              </li>
              <li>
                Converted 10 files from Objective-C and UIKit to Swift and
                SwiftUI, contributing to efforts to modernize the codebase.
              </li>
              <li>
                Replaced local variables and functions with observed redux
                values as part of company-wide shift to redux framwork.
              </li>
            </ul>
            <br />
            <div className="title-and-date">
              <h3>Software Engineering Co-op | Cargurus, Boston, MA</h3>
              <p className="date">Jan. 2022 - July 2022</p>
            </div>
            <ul>
              <li>
                Decomposed the multivariate testing framework from the monolith
                to develop it into an independent web service.
              </li>
              <li>
                Assembled a team to upgrade the image processor and test loading
                various image formats, improving company's SEO.
              </li>
              <li>
                Created database tables in SQL with Java entities and delivered
                data to FTL webpages using Apache Struts framework.
              </li>
              <li>
                Designed, developed, and deployed a Python script to validate
                millions of images being converted into a new format.
              </li>
            </ul>
            <br />
            <div className="title-and-date">
              <h3>
                Administrator and Web Developer | Synergy Center for Dance,
                Jericho, VT
              </h3>
              <p className="date">Sept. 2016 - Aug. 2022</p>
            </div>
            <ul>
              <li>
                Designed and developed company website in React.js, with
                responsive CSS and React Router navigation.
              </li>
              <li>
                Created 4 company and program logos using Adobe Suite, which led
                to increased brand recognition.
              </li>
              <li>
                Developed content, managed registration and finances, created
                publicity materials, and produced merchandise.
              </li>
            </ul>
            <br />
            <div className="title-and-date">
              <h3>
                Peer Mentor | Northeastern University Architecture Department,
                Boston, MA
              </h3>
              <p className="date">Sept. 2020 - Dec. 2020</p>
            </div>
            <ul>
              <li>
                Led first-year students in studio activities, including model
                building, sketching, and digital representation.
              </li>
              <li>
                Graded assignments and worked with 8 students one-on-one to
                provide feedback.
              </li>
            </ul>
            <br />
            <div className="title-and-date">
              <h3>Design Intern | Breezy Hill Marketing, Williston, VT</h3>
              <p className="date">Mar. 2019 - Aug. 2019</p>
            </div>
            <ul>
              <li>
                Created and published web advertisements using Adobe Photoshop
                and Google AdSense.
              </li>
              <li>
                Designed graphics for company webpages using Adobe Illustrator,
                contributing to company's rebranding.
              </li>
              <li>
                Updated company website using Squarespace, resulting in
                increased functionality of links and landing pages.
              </li>
            </ul>
          </div>
          <div
            className="resume-section"
            id="leadership-experiences"
            ref={leadershipRef}
          >
            <h2>Leadership Experience</h2>
            <h3>
              Artistic Director, Public Relations Coordinator | Kinematix Dance
              Troupe, Boston, MA
            </h3>
            <ul>
              <li>
                Artistically arranged 6 minute dance set, scheduled and led
                rehearsals, and organized team events.
              </li>
              <li>
                Designed publicity graphics, posters, and videos using Adobe
                Illustrator, Premiere, and Photoshop.
              </li>
              <li>
                Managed
                <a
                  href="tinyurl.com/KINEMATIXig"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Instagram
                </a>
                ,
                <a
                  href="https://www.youtube.com/user/nukinematix"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Youtube
                </a>
                , and
                <a
                  href="https://www.facebook.com/NUkinematix/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  Facebook
                </a>{" "}
                pages from May to December 2021.
              </li>
            </ul>
            <br />
            <h3>Founding Director | HTLO Dance Group, Jericho, VT</h3>
            <ul>
              <li>
                Organized performers, choreographed dances, and edited videos
                using Adobe Premiere and After Effects.
              </li>
              <li>
                Filmed, edited, and published content for a{" "}
                <a
                  href="https://www.youtube.com/channel/UChogrSS5x2te1WA8DymA6hw"
                  target="_blank"
                  rel="noreferrer"
                >
                  YouTube Page
                </a>{" "}
                with 29,000 video views.
              </li>
              <li>
                Spearheaded, scheduled, and organized 3 summer camps that
                generated $6,000 profit.
              </li>
            </ul>
          </div>
          <div className="resume-section" id="interests" ref={interestsRef}>
            <h2>Interests</h2>
            <p className="text">
              Hip-Hop Music Production, Dance, Video Editing, English Premier
              League Soccer, Skiing, Playing Piano
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
