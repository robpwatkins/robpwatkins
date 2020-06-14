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

  // componentDidMount() {
  //   let currentWindowWidth = window.visualViewport.width;
  //   window.addEventListener('resize', () => {
  //     currentWindowWidth = window.visualViewport.width
  //     if (currentWindowWidth >= 600) {
  //       this.setState({ 
  //         color: 'rgba(255, 255, 255, 0.404)',
  //         windowWidth: currentWindowWidth
  //       })
  //     } else {
  //       this.setState({ 
  //         color: 'white',
  //         windowWidth: currentWindowWidth
  //       })
  //     }
  //   });
  //   if (currentWindowWidth >= 600) {
  //     this.setState({ 
  //       color: 'rgba(255, 255, 255, 0.404)' })
  //     } else {
  //       this.setState({
  //         color: 'white'
  //       })
  //     }
  //     this.setState({ windowWidth: currentWindowWidth });
  // }

  return (
    <footer
    >
      <div 
        className="footer-box-hover"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        // style={{color: this.state.color}}
      >
        <div className={!isHovered ? "footer-box" : "footer-box hovered"}>
          <FontAwesomeIcon icon={faCopyright} className="copyright" />
          <a 
            href="mailto: robpwatkins@gmail.com"
          >
            2020 robpwatkins@gmail.com
          </a>
          <div className="icon-box">
            <a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/robpwatkins/"
              // className={isHovered ? "hovered" : ""}
              // style={{color: this.state.color}}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/robpwatkins"
              // className={isHovered ? "hovered" : ""}
              // style={{color: this.state.color}}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/robpwatkins/"
              // className={isHovered ? "hovered" : ""}
              // style={{color: this.state.color}}
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