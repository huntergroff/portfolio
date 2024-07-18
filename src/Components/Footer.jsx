import React from "react";
import ResumePDF from "../Content/Hunter Groff Resume 2024.pdf";
import { NavLink } from "react-router-dom";
import "../Styles/Footer.css";
import { MenuItems } from "../Content/MenuItems";

const Footer = (props) => {
  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div id="footer" className={`container ${props.home ? "hide" : ""}`}>
      <div className="footer">
        <div className="footer-section">
          <h1>HUNTER GROFF</h1>
          <p>huntergroff22@gmail.com</p>
          <p>802-598-8758</p>
          <a href={ResumePDF}>download resume</a>
        </div>
        <div className="footer-section sitemap">
          {MenuItems.map((menuItem, index) => {
            return (
              <NavLink onClick={backToTop} to={menuItem.link} key={index}>
                {menuItem.title}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
