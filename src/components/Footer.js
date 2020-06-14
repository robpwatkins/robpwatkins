import React, { useState } from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  }

  return (
    <footer
    >
      <div 
        className="footer-box-hover"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={!isHovered ? "footer-box" : "footer-box hovered"}>
          <a 
            href="mailto: robpwatkins@gmail.com"
            className="mail"
            >robpwatkins@gmail.com</a>
          <div className="icon-box">
            <a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/robpwatkins/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/robpwatkins"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/robpwatkins/"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;