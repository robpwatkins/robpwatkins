import React from 'react';
import Atom from '../img/logo192.png';
import './Footer.css'
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
          <img src={Atom} alt="" style={{animation: `${this.state.animation}`}}/>
          <p>Rob Watkins</p>
          <div className="icon-box">
            <a target="_blank" href="https://www.linkedin.com/in/robpwatkins/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a target="_blank" href="https://github.com/robpwatkins">
              <i className="fab fa-github"></i>
            </a>
            <a target="_blank" href="https://www.instagram.com/robpwatkins/">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          {/* <CopyrightIcon style={{fontSize: "12px"}}/> */}
        </div>
      </footer>
    )
  }
}

export default Footer;