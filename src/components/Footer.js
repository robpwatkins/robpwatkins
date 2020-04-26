import React from 'react';
// import Atom from '../img/logo192.png';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import CopyrightIcon from '@material-ui/icons/Copyright'

class Footer extends React.Component {
  state = {
    isHovered: false,
    animation: 'none'
  }
  
  handleMouseEnter = () => {
    this.setState({ 
      isHovered: !this.state.isHovered, 
      animation: 'spin 2s linear infinite'
    })
  }
  
  handleMouseLeave = () => {
    this.setState({ 
      isHovered: !this.state.isHovered,
      animation: 'none'
    })
  }

  render() {
    return (
      <footer
      >
        <div 
          className="footer-box"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {/* <img src={Atom} alt="" style={{animation: `${this.state.animation}`}}/> */}
          <p>Rob Watkins</p>
          <div className="icon-box">
            <a target="_blank" href="https://www.linkedin.com/in/robpwatkins/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a target="_blank" href="https://github.com/robpwatkins">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a target="_blank" href="https://www.instagram.com/robpwatkins/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          {/* <CopyrightIcon style={{fontSize: "12px"}}/> */}
        </div>
      </footer>
    )
  }
}

export default Footer;