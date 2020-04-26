import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
  state = {
    isHovered: false,
    color: 'rgba(255, 255, 255, 0.404)',
    windowWidth: ''
  }
  
  handleMouseEnter = () => {
    this.state.windowWidth >= 480 &&
      this.setState({ 
        isHovered: true,
        color: 'white', 
      })
  }
  
  handleMouseLeave = () => {
    this.state.windowWidth >= 480 &&
      this.setState({ 
        isHovered: false,
        color: 'rgba(255, 255, 255, 0.404)'
      })
  }

  componentDidMount() {
    let currentWindowWidth = window.visualViewport.width;
    window.addEventListener('resize', () => {
      currentWindowWidth = window.visualViewport.width
      if (currentWindowWidth >= 480) {
        this.setState({ 
          color: 'rgba(255, 255, 255, 0.404)',
          windowWidth: currentWindowWidth
        })
      } else {
        this.setState({ 
          color: 'white',
          windowWidth: currentWindowWidth
        })
      }
    });
    if (currentWindowWidth >= 480) {
      this.setState({ 
        color: 'rgba(255, 255, 255, 0.404)' })
      } else {
        this.setState({
          color: 'white'
        })
      }
      this.setState({ windowWidth: currentWindowWidth });
  }

  render() {
    return (
      <footer
      >
        <div 
          className="footer-box-hover"
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          style={{color: this.state.color}}
        >
          <div className="footer-box">
            <p>Rob Watkins</p>
            <div className="icon-box">
              <a 
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/robpwatkins/"
                style={{color: this.state.color}}
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a 
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/robpwatkins"
                style={{color: this.state.color}}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a 
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/robpwatkins/"
                style={{color: this.state.color}}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;